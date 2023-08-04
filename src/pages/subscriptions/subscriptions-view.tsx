import { PieChart } from "lucide-react";
import React from "react";
import { ResponsiveContainer, Pie } from "recharts";
import { BillsDueCard } from "src/components/bill-due-card";
import { CustomActiveShapePieChart } from "src/components/charts/custom-active-shape-pie-chart";
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
import {
  SidebarOption,
  UpcomingRecurringTransactions,
} from "src/types/custom/recurring-transaction-types";
import {
  ReCurringFlow,
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
      const transactionYear = transaction.time?.getFullYear();

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

  const calendarDescription = (
    <p className="pt-4 text-xs font-bold">Upcoming recurring transactions</p>
  );

  return (
    <Tabs
      className="h-full px-4 py-6 lg:px-8"
      defaultValue={UpcomingTransactionOptions.OVERVIEW}
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value={UpcomingTransactionOptions.OVERVIEW}>
          Overview
        </TabsTrigger>
        <TabsTrigger value={UpcomingTransactionOptions.CALENDAR_VIEW}>
          Calendar View
        </TabsTrigger>
      </TabsList>
      <TabsContent value={UpcomingTransactionOptions.OVERVIEW}>
        <Card>
          <CardHeader>
            <div className="flex flex-row justify-between">
              <div>
                <p className="text-xs font-bold">
                  ({upcomingTransactions.length}) Upcoming Subscriptions $
                </p>
                <p className="text-xs font-bold">
                  ${totalMonthlyExpense.toFixed(2)} Monthly Total
                </p>
              </div>
              <div>
                <Calendar
                  mode="multiple"
                  selected={upcomingTransactionNextPaymentDates}
                  className="rounded-md border shadow w-fit"
                  footer={calendarDescription}
                />
              </div>
            </div>
          </CardHeader>
        </Card>
        {/** Here we display the various bills that are upcoming */}
        <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-2">
          {upcomingTransactions.map((upcomingTransaction, index) => (
            <BillsDueCard
              upcomingTransaction={upcomingTransaction}
              key={index}
            />
          ))}
        </div>
      </TabsContent>
      <TabsContent
        value={UpcomingTransactionOptions.CALENDAR_VIEW}
      ></TabsContent>
    </Tabs>
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
