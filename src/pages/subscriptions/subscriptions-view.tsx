import React from "react";
import { RecurrinTransactionCard } from "src/components/recurring-transaction-card";
import { SubscriptionSidebar } from "src/components/recurring-subscriptions-sidebar";
import { Avatar } from "src/components/ui/avatar";
import { Calendar } from "src/components/ui/calendar";
import { Card, CardHeader } from "src/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs";
import { AnalyticAiCardLayout } from "src/layouts/analytic-ai-card-layout";
import {
  SidebarOption,
  UpcomingRecurringTransactions,
} from "src/types/custom/recurring-transaction-types";
import {
  ReOccuringTransaction,
  ReOccuringTransactionsFrequency,
  ReOccuringTransactionsStatus,
} from "src/types/financials/clickhouse_financial_service";

interface IRecurringTransactionProps {
  recurring_transactions: ReOccuringTransaction[];
}

interface IRecurringTransactionState {
  recurring_transactions: ReOccuringTransaction[];
  total_costs: number;
  total_transactions: number;
  selected_sidebar_tab: SidebarOption;
}

/**
 * Recurring transaction Overview serves as the overarching summary of all recurring transactions
 * a given user has
 *
 * @class SubscriptionsView
 * @extends {React.Component<IRecurringTransactionProps, IRecurringTransactionState>}
 */
class SubscriptionsView extends React.Component<
  IRecurringTransactionProps,
  IRecurringTransactionState
> {
  constructor(props: IRecurringTransactionProps) {
    super(props);
    this.state = {
      recurring_transactions: props.recurring_transactions,
      total_costs: props.recurring_transactions.reduce(
        (acc, transaction) => acc + Number(transaction.averageAmount),
        0
      ),
      total_transactions: props.recurring_transactions.length,
      selected_sidebar_tab: "OVERVIEW",
    };

    // bind the inflow computations
    this.computeInflowTransactions = this.computeInflowTransactions.bind(this);
    // bind the outflow computation
    this.computeOutflowTransactions =
      this.computeOutflowTransactions.bind(this);
    // bind the upcoming transaction computation
    this.computeUpcomingTransactions =
      this.computeUpcomingTransactions.bind(this);
    // bind the transaction status to recurring transaction set
    this.computeStatusToRecurringTransactions =
      this.computeStatusToRecurringTransactions.bind(this);

    this.computeCategoriesToRecurringTransactionMap =
      this.computeCategoriesToRecurringTransactionMap.bind(this);

    // calculate the next transaction date
    this._calculateNextTransactionDate =
      this._calculateNextTransactionDate.bind(this);

    this._selectSidebarOption = this._selectSidebarOption.bind(this);
  }

  /*
   * computeInflowTransactions computes the transactions that are currently inflowing
   * meaning re-curring income sources
   *
   * @memberOf SubscriptionsView
   * */
  computeInflowTransactions = (): ReOccuringTransaction[] => {
    const { recurring_transactions } = this.state;
    const currentYear = new Date().getFullYear();

    // obtain all transactions that are inflows and that occured this year
    const inflow_transactions = recurring_transactions.filter((transaction) => {
      const transactionYear = new Date(transaction.lastDate).getFullYear();
      return (
        // plaid transaction amounts are marked as inflow if negative and outflow
        // if positive
        Number(transaction.averageAmount) < 0 &&
        Number(transaction.lastAmount) < 0 &&
        transactionYear === currentYear
      );
    });

    return inflow_transactions;
  };

  /**
   * Computes all outflow transactions that occured this year
   * @param transactions the transactions that occured
   * @returns
   */
  computeOutflowTransactions = (): ReOccuringTransaction[] => {
    const { recurring_transactions } = this.state;
    const currentYear = new Date().getFullYear();

    // obtain all transactions that are outflows and that occured this year
    const outflow_transactions = recurring_transactions.filter(
      (transaction) => {
        const transactionYear = new Date(transaction.lastDate).getFullYear();

        return (
          // plaid transaction amounts are marked as inflow if negative and outflow
          // if positive
          Number(transaction.averageAmount) > 0 &&
          Number(transaction.lastAmount) > 0 &&
          transactionYear === currentYear
        );
      }
    );

    return outflow_transactions;
  };

  /**
   * computes the upcoming transactions based on all the transactions that occured this year
   *
   * @memberOf SubscriptionsView
   */
  computeUpcomingTransactions =
    (): ReadonlyArray<UpcomingRecurringTransactions> => {
      const { recurring_transactions } = this.state;
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();

      // we get all transactions that occured this year
      const transactionsThisYear = recurring_transactions.filter(
        (transaction) => {
          const transactionYear = new Date(transaction.lastDate).getFullYear();
          return (
            (transactionYear === currentYear &&
              // we want to ensure we only keep transactions that have a frequency assigned
              transaction.frequency !==
                ReOccuringTransactionsFrequency.RE_OCCURING_TRANSACTIONS_FREQUENCY_UNSPECIFIED) ||
            transaction.frequency !==
              ReOccuringTransactionsFrequency.UNRECOGNIZED
          );
        }
      );

      // from the transactions that occured this year, we use the frequency field
      // to calculate the next date the transaction will be scheduled
      const lastDayOfCurrentYear = new Date(new Date().getFullYear(), 11, 31);
      const upcomingTransactions: readonly UpcomingRecurringTransactions[] =
        transactionsThisYear
          .map((transaction) => {
            if (
              transaction.frequency.toString() ===
              "RE_OCCURING_TRANSACTIONS_FREQUENCY_UNSPECIFIED"
            ) {
              return null;
            }

            const lastTransactionDate = new Date(transaction.lastDate);
            const nextTransactionDate = this._calculateNextTransactionDate(
              lastTransactionDate,
              transaction.frequency
            );

            if (nextTransactionDate == null) {
              return null;
            }

            if (nextTransactionDate > lastDayOfCurrentYear) {
              return null;
            }

            return {
              nextTransactionDate: nextTransactionDate.toISOString(),
              transaction: transaction,
            };
          })
          .filter(
            (transaction): transaction is UpcomingRecurringTransactions =>
              transaction !== null
          );

      return upcomingTransactions;
    };

  /*
   * computes a hash map comprised of status to recurring transaction mapping
   *
   * @param {ReOccuringTransaction[]} recurringTransactions
   * @returns {Map<ReOccuringTransactionsStatus, ReOccuringTransaction[]>}
   *
   * @memberOf SubscriptionsView
   * */
  computeStatusToRecurringTransactions(
    recurringTransactions: ReOccuringTransaction[]
  ): Map<ReOccuringTransactionsStatus, ReOccuringTransaction[]> {
    const statusToRecurringTransactions = new Map<
      ReOccuringTransactionsStatus,
      ReOccuringTransaction[]
    >();
    recurringTransactions.forEach((recurringTransaction) => {
      const status = recurringTransaction.status;
      if (statusToRecurringTransactions.has(status)) {
        statusToRecurringTransactions.get(status)?.push(recurringTransaction);
      } else {
        statusToRecurringTransactions.set(status, [recurringTransaction]);
      }
    });
    return statusToRecurringTransactions;
  }

  /*
   * computes a hashmap comprised of categories to recurring transactions
   *
   * @param {ReOccuringTransaction[]} recurringTransactions
   * @returns {Map<string, ReOccuringTransaction[]>}
   *
   * @memberOf SubscriptionsView
   * */
  computeCategoriesToRecurringTransactionMap(
    recurringTransactions: ReOccuringTransaction[]
  ): Map<string, ReOccuringTransaction[]> {
    const categoriesToRecurringTransactions = new Map<
      string,
      ReOccuringTransaction[]
    >();
    recurringTransactions.forEach((recurringTransaction) => {
      const category = recurringTransaction.personalFinanceCategoryPrimary;
      if (categoriesToRecurringTransactions.has(category)) {
        categoriesToRecurringTransactions
          .get(category)
          ?.push(recurringTransaction);
      } else {
        categoriesToRecurringTransactions.set(category, [recurringTransaction]);
      }
    });
    return categoriesToRecurringTransactions;
  }

  private _calculateNextTransactionDate = (
    lastTransactionDate: Date | undefined,
    frequency: ReOccuringTransactionsFrequency
  ): Date | null => {
    if (!lastTransactionDate) {
      return null; // if the lastTransactionDate is undefined or null, return null
    }

    let nextTransactionDate = new Date(lastTransactionDate);
    switch (frequency.toString()) {
      case "RE_OCCURING_TRANSACTIONS_FREQUENCY_WEEKLY":
        nextTransactionDate.setDate(lastTransactionDate.getDate() + 7);
        break;
      case "RE_OCCURING_TRANSACTIONS_FREQUENCY_BIWEEKLY":
        nextTransactionDate.setDate(lastTransactionDate.getDate() + 14);
        break;
      case "RE_OCCURING_TRANSACTIONS_FREQUENCY_MONTHLY":
        nextTransactionDate.setMonth(lastTransactionDate.getMonth() + 1);
        break;
      case "RE_OCCURING_TRANSACTIONS_FREQUENCY_SEMI_MONTHLY":
        nextTransactionDate.setDate(lastTransactionDate.getDate() + 15); // Assuming two transactions per month
        break;
      case "RE_OCCURING_TRANSACTIONS_FREQUENCY_ANNUALLY":
        nextTransactionDate.setFullYear(lastTransactionDate.getFullYear() + 1);
        break;
      default:
        break;
    }
    return nextTransactionDate;
  };

  private _selectSidebarOption = (option: SidebarOption) => {
    this.setState({ selected_sidebar_tab: option });
  };

  render() {
    return (
      <>
        <div className="md:hidden">
          <Avatar className="block dark:hidden" />
          <Avatar className="hidden dark:block" />
        </div>
        <div className="hidden md:block">
          <div className="border-t">
            <div className="bg-background">
              <div className="grid lg:grid-cols-5">
                {/** Sidebar is used to control the various types of subscriptions being shown to an end-user */}
                <SubscriptionSidebar
                  className="hidden lg:block"
                  setSelectedOption={this._selectSidebarOption}
                />
                <div className="col-span-3 lg:col-span-4 lg:border-l">
                  {this.state.selected_sidebar_tab === "INFLOW" && (
                    <RecurringTransactionsFlowComponent
                      recurringTransactions={this.computeInflowTransactions()}
                      title="Inflow"
                      description={`
                        An inflow refers to the amount of money that is coming into a person's or a company's account.
                        This typically includes income such as salaries, wages, bonuses, interest earned, dividends, 
                        capital gains, proceeds from a sale, loan proceeds, and any other form of income or receipt of money.
                        
                        In essence, it represents money that is being earned or received, as opposed to an outflow, which represents 
                        money that is being spent or paid out. Monitoring inflows and outflows is critical for budgeting and financial
                         planning, as it provides a clear picture of where money is coming from and where it is being spent.
                      `}
                    />
                  )}
                  {this.state.selected_sidebar_tab === "OUTFLOW" && (
                    <RecurringTransactionsFlowComponent
                      recurringTransactions={this.computeOutflowTransactions()}
                      title="Outflow"
                      description={`
                        An outflow refers to the money
                        that is going out of a person's or a company's account. This typically includes expenses 
                        such as bill payments, purchases, salaries, taxes, loan repayments, and any other form of spending or investment.
                        In essence, it represents money that is being spent, as opposed to an inflow, which represents money that is being 
                        earned or received. Monitoring inflows and outflows is crucial for budgeting and financial planning, 
                        as it provides a clear picture of where money is coming from and where it's being spent.
                      `}
                    />
                  )}
                  {/** If sidebar tab upcoming show the upcoming recurring transactions */}
                  {this.state.selected_sidebar_tab === "UPCOMING" && (
                    <UpcomingRecurringTransactionsComponent
                      upcomingTransactions={this.computeUpcomingTransactions()}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

/*
 * IRecurringTransactionsFlowComponent component that
 * displays inflow/outflow transactions
 *
 * @interface IInflowRecurringTransactionsComponeent
 * */
interface IRecurringTransactionsFlowComponent {
  recurringTransactions: ReOccuringTransaction[];
  title: string;
  description: string;
}

/**
 * RecurringTransactionsFlowComponent component that displays inflow transactions
 * @param recurringTransactions {ReOccuringTransaction[]}
 * @returns
 */
const RecurringTransactionsFlowComponent: React.FC<
  IRecurringTransactionsFlowComponent
> = ({ recurringTransactions, title, description }) => {
  // compute the top 5 inflow transactions as context
  const context = recurringTransactions
    .map((transaction) => {
      return {
        transaction: transaction,
        amount: Math.abs(Number(transaction.lastAmount)),
        flow:
          transaction.flow.toString() === "RE_CURRING_FLOW_INFLOW"
            ? "inflow"
            : "outflow",
      };
    }, [])
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5);

  return (
    <AnalyticAiCardLayout context={context} className="m-2">
      <div className="p-4 leading-5 rounded-2xl bg-white border">
        <p className="m-2 text-3xl font-bold">{title}</p>
        <p className="m-6 text-xs font-bold">{description}</p>
      </div>
      <div className="p-3 grid grid-cols-1 md:grid-cols-3 gap-2">
        {recurringTransactions.map((transaction, index) => (
          <RecurrinTransactionCard transaction={transaction} key={index} />
        ))}
      </div>
    </AnalyticAiCardLayout>
  );
};

/*
 * IUpcomingRecurringTransactionsProps represents the properties of the
 * upcoming recurring transactions component
 *
 * @interface IUpcomingRecurringTransactionsProps
 * */
interface IUpcomingRecurringTransactionsProps {
  upcomingTransactions: readonly UpcomingRecurringTransactions[];
}

/**
 * UpcomingRecurringTransactions renders the upcoming recurring transactions
 * @param upcomingTransactions
 * @returns
 */
const UpcomingRecurringTransactionsComponent: React.FC<
  IUpcomingRecurringTransactionsProps
> = ({ upcomingTransactions }) => {
  enum UpcomingTransactionOptions {
    CALENDAR_VIEW = "CALENDAR_VIEW",
    OVERVIEW = "OVERVIEW",
  }

  // get all the reoccuring transactions from the upcoming transaction
  // and compute the total expense
  const allRecurringTransactions = upcomingTransactions.map(
    (upcomingTransaction) => upcomingTransaction.transaction
  );

  // compute the total expense of monthly recurring transactions
  const transactionFlowCount = convertToFlowCount(allRecurringTransactions);

  const totalMonthlyExpense = upcomingTransactions.reduce(
    (acc, transaction) => {
      const { transaction: recurringTransaction } = transaction;
      const { lastAmount } = recurringTransaction;
      if (
        Number(recurringTransaction.lastAmount) > 0 &&
        recurringTransaction.flow.toString() === "RE_CURRING_FLOW_OUTFLOW"
      ) {
        return acc + Number(lastAmount);
      }

      return acc;
    },
    0
  );

  const upcomingTransactionNextPaymentDates = upcomingTransactions.map(
    (recurringTransaction, index) => {
      return new Date(recurringTransaction.nextTransactionDate);
    }
  );

  // compute the upcoming subscription context
  // NOTE: this cannot be too large hence, we can only opt to selected the top 5 upcoming transactions
  // - we only select the ones that are expenses and are the largest
  const context = upcomingTransactions
    .map((upcomingTransaction, index) => {
      const { transaction: recurringTransaction } = upcomingTransaction;
      const { lastAmount } = recurringTransaction;
      if (
        Number(recurringTransaction.lastAmount) > 0 &&
        recurringTransaction.flow.toString() === "RE_CURRING_FLOW_OUTFLOW"
      ) {
        return {
          name: recurringTransaction.merchantName,
          value: Number(lastAmount),
        };
      }

      return null;
    })
    .filter(
      (transaction): transaction is { name: string; value: number } =>
        transaction !== null
    );

  return (
    <AnalyticAiCardLayout context={context} className="m-2">
      <Tabs
        className="h-full px-4 py-6 lg:px-8"
        defaultValue={UpcomingTransactionOptions.OVERVIEW}
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value={UpcomingTransactionOptions.OVERVIEW}>
            Overview
          </TabsTrigger>
        </TabsList>
        <TabsContent value={UpcomingTransactionOptions.OVERVIEW}>
          <Card>
            <CardHeader>
              <div className="flex flex-row justify-between">
                <div>
                  <p className="text-xl font-bold">Subscription Insights</p>
                </div>
                <div>
                  <Calendar
                    mode="multiple"
                    selected={upcomingTransactionNextPaymentDates}
                    className="rounded-md border shadow w-fit"
                    footer={
                      <p className="pt-4 text-xs font-bold">
                        Upcoming recurring transactions
                      </p>
                    }
                  />
                </div>
              </div>
            </CardHeader>
          </Card>
          {/** Here we display the various bills that are upcoming */}
          <div className="p-3 grid grid-cols-1 md:grid-cols-3 gap-2">
            {upcomingTransactions.map((upcomingTransaction, index) => (
              <RecurrinTransactionCard
                transaction={upcomingTransaction.transaction}
                nextTransactionDate={upcomingTransaction.nextTransactionDate}
                key={index}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent
          value={UpcomingTransactionOptions.CALENDAR_VIEW}
        ></TabsContent>
      </Tabs>
    </AnalyticAiCardLayout>
  );
};

interface FlowCount {
  name: string;
  count: number;
}

function convertToFlowCount(
  transactions: ReOccuringTransaction[]
): FlowCount[] {
  let inflowCount = 0;
  let outflowCount = 0;

  transactions.forEach((transaction) => {
    if (transaction.flow.toString() === "RE_CURRING_FLOW_INFLOW") {
      inflowCount++;
    } else if (transaction.flow.toString() === "RE_CURRING_FLOW_OUTFLOW") {
      outflowCount++;
    }
  });

  return [
    { name: "inflow", count: inflowCount },
    { name: "outflow", count: outflowCount },
  ];
}

export { SubscriptionsView };
