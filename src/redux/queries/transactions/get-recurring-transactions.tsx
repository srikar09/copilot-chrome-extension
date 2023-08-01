import { api } from "src/redux/api/api";
import {
  RecurringTransactionAggregate,
  UpcomingRecurringTransactions,
} from "src/types/custom/recurring-transaction-types";
import {
  ReCurringFlow,
  ReOccuringTransaction,
  ReOccuringTransactionsFrequency,
} from "src/types/financials/clickhouse_financial_service";
import {
  GetReCurringTransactionsRequest,
  GetReCurringTransactionsResponse,
} from "src/types/financials/request_response_financial_service";

/**
 * `GetRecurringTransactions` is a function defined within the `api` object's `injectEndpoints` method.
 * This function is responsible for making a GET request to fetch all the recurring transactions for a specific user.
 *
 * @param {GetReCurringTransactionsRequest} req - A request object containing the `userId` for which the recurring transactions are fetched.
 *
 * @returns {RecurringTransactionAggregate} A transformed response derived from the raw response `GetReCurringTransactionsResponse`.
 *
 * Detailed Transformations:
 * 1. `inflowTransactions`: An array of transactions where the `flow` property is `"RE_CURRING_FLOW_INFLOW"`.
 * 2. `outflowTransactions`: An array of transactions where the `flow` property is `"RE_CURRING_FLOW_OUTFLOW"`.
 * 3. `statusToRecurringTransactionMap`: An object mapping transaction statuses to the transactions associated with them.
 * 4. `frequencyToRecurringTransactionMap`: An object mapping transaction frequencies to the transactions associated with them.
 * 5. `orderedRecurringTransactions`: An array of transactions sorted in descending order based on the number of `transactionIds`.
 * 6. `totalRecurringTransactions`: The total count of all recurring transactions.
 * 7. `totalRecurringTransactionCosts`: The total cost of all recurring transactions.
 * 8. `upcomingRecurringTransactions`: An array of upcoming transactions computed based on the last transaction date and frequency, sorted by date.
 * 9. `merchantToAveragePaymentMap`: An object mapping each merchant to the average payment made.
 * 10. `merchantToTransactionCountMap`: An object mapping each merchant to their number of transactions.
 * 11. `mostCommonMerchant`: The merchant associated with the most transactions.
 * 12. `mostExpensiveMerchant`: The merchant associated with the highest average payment.
 *
 * The function also provides a list of tags derived from the `orderedRecurringTransactions` for cache invalidation or update purposes
 * with Redux Toolkit Query.
 */
const GetRecurringTransactions = api.injectEndpoints({
  endpoints: (builder) => ({
    getRecurringTransactions: builder.query({
      query: (req: GetReCurringTransactionsRequest) => ({
        url: `/service/financials/recurring-transactions/${req.userId}`,
      }),
      transformResponse: (
        response: GetReCurringTransactionsResponse
      ): RecurringTransactionAggregate => {
        // we need to get the recurring transaction and do some processing to the object
        // get all transaction with flow type "outflow"
        const inflowTransactions = response.reCcuringTransactions.filter(
          (transaction) =>
            transaction.flow === ReCurringFlow.RE_CURRING_FLOW_INFLOW
        );

        // get all transaction with flow type "outflow"
        const outflowTransactions = response.reCcuringTransactions.filter(
          (transaction) =>
            transaction.flow === ReCurringFlow.RE_CURRING_FLOW_OUTFLOW
        );

        // create a hashmap of recurring transaction status as key and array of transactions as value
        const statusToRecurringTransactionMap =
          response.reCcuringTransactions.reduce((acc, transaction) => {
            if (acc[transaction.status]) {
              acc[transaction.status].push(transaction);
            } else {
              acc[transaction.status] = [transaction];
            }
            return acc;
          }, {} as Record<string, ReOccuringTransaction[]>);

        // do the same for frequency
        const frequencyToRecurringTransactionMap =
          response.reCcuringTransactions.reduce((acc, transaction) => {
            if (acc[transaction.frequency]) {
              acc[transaction.frequency].push(transaction);
            } else {
              acc[transaction.frequency] = [transaction];
            }
            return acc;
          }, {} as Record<string, ReOccuringTransaction[]>);

        // order recurring transactions by number of transactionIds
        const orderedRecurringTransactions =
          response.reCcuringTransactions.sort(
            (a, b) => b.transactionIds.length - a.transactionIds.length
          );

        // compute total recurring transactions
        const totalRecurringTransactions =
          response.reCcuringTransactions.length;

        // compute total recurring transaction costs
        const totalRecurringTransactionCosts =
          response.reCcuringTransactions.reduce(
            (acc, transaction) => acc + Number(transaction.averageAmount),
            0
          );

        // compute upcoming recurring transactions based off of the last transaction date and frequency
        const upcomingRecurringTransactions: UpcomingRecurringTransactions[] =
          response.reCcuringTransactions.map((transaction) => {
            const lastTransactionDate = new Date(transaction.lastDate);
            const frequency = transaction.frequency;
            const nextTransactionDate = new Date(lastTransactionDate);
            switch (frequency) {
              case ReOccuringTransactionsFrequency.RE_OCCURING_TRANSACTIONS_FREQUENCY_WEEKLY:
                nextTransactionDate.setDate(nextTransactionDate.getDate() + 7);
                break;
              case ReOccuringTransactionsFrequency.RE_OCCURING_TRANSACTIONS_FREQUENCY_BIWEEKLY:
                nextTransactionDate.setDate(nextTransactionDate.getDate() + 14);
                break;
              case ReOccuringTransactionsFrequency.RE_OCCURING_TRANSACTIONS_FREQUENCY_MONTHLY:
                nextTransactionDate.setMonth(
                  nextTransactionDate.getMonth() + 1
                );
                break;
              case ReOccuringTransactionsFrequency.RE_OCCURING_TRANSACTIONS_FREQUENCY_SEMI_MONTHLY:
                nextTransactionDate.setMonth(
                  nextTransactionDate.getMonth() + 2
                );
                break;

              case ReOccuringTransactionsFrequency.RE_OCCURING_TRANSACTIONS_FREQUENCY_ANNUALLY:
                nextTransactionDate.setFullYear(
                  nextTransactionDate.getFullYear() + 1
                );
                break;
              default:
                break;
            }
            return {
              nextTransactionDate: nextTransactionDate.toISOString(),
              transaction: transaction,
            };
          });

        // now based off of all the computed next transaction dates, we need to sort them by date
        const sortedUpcomingRecurringTransactions: UpcomingRecurringTransactions[] =
          upcomingRecurringTransactions.sort((a, b) => {
            const aDate = new Date(a.nextTransactionDate);
            const bDate = new Date(b.nextTransactionDate);
            return aDate.getTime() - bDate.getTime();
          });

        const merchantToAvgPaymentHashmap = averagePaymentPerMerchant(
          response.reCcuringTransactions
        );

        const numTransactionsPerMerchant = transactionsPerMerchant(
          response.reCcuringTransactions
        );

        const mostCommonMerchant = mostCommonCategory(
          response.reCcuringTransactions
        );

        const expensivePayment = mostExpensivePayment(
          response.reCcuringTransactions
        );

        const res: RecurringTransactionAggregate = {
          inflowTransactions: inflowTransactions,
          outflowTransactions: outflowTransactions,
          statusToRecurringTransactionMap: statusToRecurringTransactionMap,
          frequencyToRecurringTransactionMap:
            frequencyToRecurringTransactionMap,
          orderedRecurringTransactions: orderedRecurringTransactions,
          totalRecurringTransactions: totalRecurringTransactions,
          totalRecurringTransactionCosts: totalRecurringTransactionCosts,
          upcomingRecurringTransactions: sortedUpcomingRecurringTransactions,
          merchantToAveragePaymentMap: merchantToAvgPaymentHashmap,
          merchantToTransactionCountMap: numTransactionsPerMerchant,
          mostCommonMerchant: mostCommonMerchant,
          mostExpensiveMerchant: expensivePayment.merchantName,
        };

        return res;
      },
      providesTags: (result) =>
        result && result.orderedRecurringTransactions
          ? result.orderedRecurringTransactions.map((transaction) => ({
              type: "RECURRING_TRANSACTION",
              id: transaction.id,
            }))
          : [],
    }),
  }),
  overrideExisting: false,
});

/**
 * `averagePaymentPerMerchant` calculates the average payment made to each merchant across all transactions.
 *
 * @param {ReOccuringTransaction[]} recurringTransactions - Array of recurring transactions to process.
 *
 * @returns {Object} An object with merchant names as keys and average payment amounts as values.
 */
function averagePaymentPerMerchant(
  recurringTransactions: ReOccuringTransaction[]
): {
  [key: string]: number;
} {
  let totals: Record<string, number> = {};
  let counts: Record<string, number> = {};

  recurringTransactions.forEach((transaction) => {
    if (totals[transaction.merchantName]) {
      totals[transaction.merchantName] += parseFloat(transaction.averageAmount);
      counts[transaction.merchantName]++;
    } else {
      totals[transaction.merchantName] = parseFloat(transaction.averageAmount);
      counts[transaction.merchantName] = 1;
    }
  });

  let averages: Record<string, number> = {};
  for (let merchant in totals) {
    averages[merchant] = totals[merchant] / counts[merchant];
  }

  return averages;
}

/**
 * `transactionsPerMerchant` calculates the total number of transactions made to each merchant.
 *
 * @param {ReOccuringTransaction[]} recurringTransactions - Array of recurring transactions to process.
 *
 * @returns {Object} An object with merchant names as keys and the count of transactions as values.
 */
function transactionsPerMerchant(
  recurringTransactions: ReOccuringTransaction[]
): {
  [key: string]: number;
} {
  let counts: Record<string, number> = {};

  recurringTransactions.forEach((transaction) => {
    if (counts[transaction.merchantName]) {
      counts[transaction.merchantName] += transaction.transactionIds.length;
    } else {
      counts[transaction.merchantName] = transaction.transactionIds.length;
    }
  });

  return counts;
}

/**
 * `mostCommonCategory` identifies the most common category among the transactions.
 *
 * @param {ReOccuringTransaction[]} recurringTransactions - Array of recurring transactions to process.
 *
 * @returns {string} The most common category among the transactions.
 */
function mostCommonCategory(
  recurringTransactions: ReOccuringTransaction[]
): string {
  let categories: Record<string, number> = {};

  recurringTransactions.forEach((transaction) => {
    if (categories[transaction.personalFinanceCategoryPrimary]) {
      categories[transaction.personalFinanceCategoryPrimary]++;
    } else {
      categories[transaction.personalFinanceCategoryPrimary] = 1;
    }
  });

  let maxCount = 0;
  let mostCommon = "";

  for (let category in categories) {
    if (categories[category] > maxCount) {
      maxCount = categories[category];
      mostCommon = category;
    }
  }

  return mostCommon;
}

/**
 * `mostExpensivePayment` identifies the most expensive transaction from the list.
 *
 * @param {ReOccuringTransaction[]} recurringTransactions - Array of recurring transactions to process.
 *
 * @returns {any} The most expensive transaction from the list.
 */
function mostExpensivePayment(
  recurringTransactions: ReOccuringTransaction[]
): any {
  let mostExpensive = recurringTransactions[0];

  recurringTransactions.forEach((transaction) => {
    if (
      parseFloat(transaction.averageAmount) >
      parseFloat(mostExpensive.averageAmount)
    ) {
      mostExpensive = transaction;
    }
  });

  return mostExpensive;
}

export { GetRecurringTransactions };
export const { useGetRecurringTransactionsQuery } = GetRecurringTransactions;
