import { ReOccuringTransaction } from "melodiy-component-library";
import { SubscriptionsSidebarOption } from "..";
type UpcomingRecurringTransactions = {
  nextTransactionDate: string;
  transaction: ReOccuringTransaction;
};

type RecurringTransactionAggregate = {
  inflowTransactions: ReOccuringTransaction[];
  outflowTransactions: ReOccuringTransaction[];
  statusToRecurringTransactionMap: Record<string, ReOccuringTransaction[]>;
  frequencyToRecurringTransactionMap: Record<string, ReOccuringTransaction[]>;
  orderedRecurringTransactions: ReOccuringTransaction[];
  totalRecurringTransactions: number;
  totalRecurringTransactionCosts: number;
  upcomingRecurringTransactions: UpcomingRecurringTransactions[];
  merchantToAveragePaymentMap: Record<string, number>;
  merchantToTransactionCountMap: Record<string, number>;
  mostCommonMerchant: string;
  mostExpensiveMerchant: string;
};

export type {
  RecurringTransactionAggregate,
  UpcomingRecurringTransactions,
  SubscriptionsSidebarOption,
};
