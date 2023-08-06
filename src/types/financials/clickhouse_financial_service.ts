import { Any } from "./any";
import { BankAccount, InvestmentAccount, CreditAccount, MortgageAccount, StudentLoanAccount } from "./message_financial_service";
import { Timestamp } from "./timestamp";

export const protobufPackage = "financial_integration_service_api.v1";

export enum ReOccuringTransactionsFrequency {
  RE_OCCURING_TRANSACTIONS_FREQUENCY_UNSPECIFIED = 0,
  RE_OCCURING_TRANSACTIONS_FREQUENCY_WEEKLY = 1,
  RE_OCCURING_TRANSACTIONS_FREQUENCY_BIWEEKLY = 2,
  RE_OCCURING_TRANSACTIONS_FREQUENCY_SEMI_MONTHLY = 3,
  RE_OCCURING_TRANSACTIONS_FREQUENCY_MONTHLY = 4,
  RE_OCCURING_TRANSACTIONS_FREQUENCY_ANNUALLY = 5,
  UNRECOGNIZED = -1,
}

export function reOccuringTransactionsFrequencyFromJSON(object: any): ReOccuringTransactionsFrequency {
  switch (object) {
    case 0:
    case "RE_OCCURING_TRANSACTIONS_FREQUENCY_UNSPECIFIED":
      return ReOccuringTransactionsFrequency.RE_OCCURING_TRANSACTIONS_FREQUENCY_UNSPECIFIED;
    case 1:
    case "RE_OCCURING_TRANSACTIONS_FREQUENCY_WEEKLY":
      return ReOccuringTransactionsFrequency.RE_OCCURING_TRANSACTIONS_FREQUENCY_WEEKLY;
    case 2:
    case "RE_OCCURING_TRANSACTIONS_FREQUENCY_BIWEEKLY":
      return ReOccuringTransactionsFrequency.RE_OCCURING_TRANSACTIONS_FREQUENCY_BIWEEKLY;
    case 3:
    case "RE_OCCURING_TRANSACTIONS_FREQUENCY_SEMI_MONTHLY":
      return ReOccuringTransactionsFrequency.RE_OCCURING_TRANSACTIONS_FREQUENCY_SEMI_MONTHLY;
    case 4:
    case "RE_OCCURING_TRANSACTIONS_FREQUENCY_MONTHLY":
      return ReOccuringTransactionsFrequency.RE_OCCURING_TRANSACTIONS_FREQUENCY_MONTHLY;
    case 5:
    case "RE_OCCURING_TRANSACTIONS_FREQUENCY_ANNUALLY":
      return ReOccuringTransactionsFrequency.RE_OCCURING_TRANSACTIONS_FREQUENCY_ANNUALLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReOccuringTransactionsFrequency.UNRECOGNIZED;
  }
}

export function reOccuringTransactionsFrequencyToJSON(object: ReOccuringTransactionsFrequency): string {
  switch (object) {
    case ReOccuringTransactionsFrequency.RE_OCCURING_TRANSACTIONS_FREQUENCY_UNSPECIFIED:
      return "RE_OCCURING_TRANSACTIONS_FREQUENCY_UNSPECIFIED";
    case ReOccuringTransactionsFrequency.RE_OCCURING_TRANSACTIONS_FREQUENCY_WEEKLY:
      return "RE_OCCURING_TRANSACTIONS_FREQUENCY_WEEKLY";
    case ReOccuringTransactionsFrequency.RE_OCCURING_TRANSACTIONS_FREQUENCY_BIWEEKLY:
      return "RE_OCCURING_TRANSACTIONS_FREQUENCY_BIWEEKLY";
    case ReOccuringTransactionsFrequency.RE_OCCURING_TRANSACTIONS_FREQUENCY_SEMI_MONTHLY:
      return "RE_OCCURING_TRANSACTIONS_FREQUENCY_SEMI_MONTHLY";
    case ReOccuringTransactionsFrequency.RE_OCCURING_TRANSACTIONS_FREQUENCY_MONTHLY:
      return "RE_OCCURING_TRANSACTIONS_FREQUENCY_MONTHLY";
    case ReOccuringTransactionsFrequency.RE_OCCURING_TRANSACTIONS_FREQUENCY_ANNUALLY:
      return "RE_OCCURING_TRANSACTIONS_FREQUENCY_ANNUALLY";
    case ReOccuringTransactionsFrequency.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ReOccuringTransactionsStatus {
  RE_OCCURING_TRANSACTIONS_STATUS_UNSPECIFIED = 0,
  /**
   * RE_OCCURING_TRANSACTIONS_STATUS_MATURE - A MATURE recurring stream should have at least 3 transactions and happen
   *  on a regular cadence (For Annual recurring stream, we will mark it MATURE after 2 instances).
   */
  RE_OCCURING_TRANSACTIONS_STATUS_MATURE = 1,
  /**
   * RE_OCCURING_TRANSACTIONS_STATUS_EARLY_DETECTION - When a recurring transaction first appears in the transaction history and before it fulfills
   * the requirement of a mature stream, the status will be EARLY_DETECTION.
   */
  RE_OCCURING_TRANSACTIONS_STATUS_EARLY_DETECTION = 2,
  /**
   * RE_OCCURING_TRANSACTIONS_STATUS_TOMBSTONED - A stream that was previously in the EARLY_DETECTION status will move to the TOMBSTONED
   * status when no further transactions were found at the next expected date.
   */
  RE_OCCURING_TRANSACTIONS_STATUS_TOMBSTONED = 3,
  UNRECOGNIZED = -1,
}

export function reOccuringTransactionsStatusFromJSON(object: any): ReOccuringTransactionsStatus {
  switch (object) {
    case 0:
    case "RE_OCCURING_TRANSACTIONS_STATUS_UNSPECIFIED":
      return ReOccuringTransactionsStatus.RE_OCCURING_TRANSACTIONS_STATUS_UNSPECIFIED;
    case 1:
    case "RE_OCCURING_TRANSACTIONS_STATUS_MATURE":
      return ReOccuringTransactionsStatus.RE_OCCURING_TRANSACTIONS_STATUS_MATURE;
    case 2:
    case "RE_OCCURING_TRANSACTIONS_STATUS_EARLY_DETECTION":
      return ReOccuringTransactionsStatus.RE_OCCURING_TRANSACTIONS_STATUS_EARLY_DETECTION;
    case 3:
    case "RE_OCCURING_TRANSACTIONS_STATUS_TOMBSTONED":
      return ReOccuringTransactionsStatus.RE_OCCURING_TRANSACTIONS_STATUS_TOMBSTONED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReOccuringTransactionsStatus.UNRECOGNIZED;
  }
}

export function reOccuringTransactionsStatusToJSON(object: ReOccuringTransactionsStatus): string {
  switch (object) {
    case ReOccuringTransactionsStatus.RE_OCCURING_TRANSACTIONS_STATUS_UNSPECIFIED:
      return "RE_OCCURING_TRANSACTIONS_STATUS_UNSPECIFIED";
    case ReOccuringTransactionsStatus.RE_OCCURING_TRANSACTIONS_STATUS_MATURE:
      return "RE_OCCURING_TRANSACTIONS_STATUS_MATURE";
    case ReOccuringTransactionsStatus.RE_OCCURING_TRANSACTIONS_STATUS_EARLY_DETECTION:
      return "RE_OCCURING_TRANSACTIONS_STATUS_EARLY_DETECTION";
    case ReOccuringTransactionsStatus.RE_OCCURING_TRANSACTIONS_STATUS_TOMBSTONED:
      return "RE_OCCURING_TRANSACTIONS_STATUS_TOMBSTONED";
    case ReOccuringTransactionsStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ReCurringFlow {
  RE_CURRING_FLOW_UNSPECIFIED = 0,
  RE_CURRING_FLOW_INFLOW = 1,
  RE_CURRING_FLOW_OUTFLOW = 2,
  UNRECOGNIZED = -1,
}

export function reCurringFlowFromJSON(object: any): ReCurringFlow {
  switch (object) {
    case 0:
    case "RE_CURRING_FLOW_UNSPECIFIED":
      return ReCurringFlow.RE_CURRING_FLOW_UNSPECIFIED;
    case 1:
    case "RE_CURRING_FLOW_INFLOW":
      return ReCurringFlow.RE_CURRING_FLOW_INFLOW;
    case 2:
    case "RE_CURRING_FLOW_OUTFLOW":
      return ReCurringFlow.RE_CURRING_FLOW_OUTFLOW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ReCurringFlow.UNRECOGNIZED;
  }
}

export function reCurringFlowToJSON(object: ReCurringFlow): string {
  switch (object) {
    case ReCurringFlow.RE_CURRING_FLOW_UNSPECIFIED:
      return "RE_CURRING_FLOW_UNSPECIFIED";
    case ReCurringFlow.RE_CURRING_FLOW_INFLOW:
      return "RE_CURRING_FLOW_INFLOW";
    case ReCurringFlow.RE_CURRING_FLOW_OUTFLOW:
      return "RE_CURRING_FLOW_OUTFLOW";
    case ReCurringFlow.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface InvestmentTransaction {
  /** @gotag: ch:"account_id" */
  accountId: string;
  /** @gotag: ch:"amount" */
  ammount: string;
  /** @gotag: ch:"investment_transaction_id" */
  investmentTransactionId: string;
  /** @gotag: ch:"security_id" */
  securityId: string;
  /** @gotag: ch:"date" */
  currentDate: string;
  /** @gotag: ch:"name" */
  name: string;
  /** @gotag: ch:"quantity" */
  quantity: number;
  /** @gotag: ch:"amount" */
  amount: number;
  /** @gotag: ch:"price" */
  price: number;
  /** @gotag: ch:"fees" */
  fees: number;
  /** @gotag: ch:"type" */
  type: string;
  /** @gotag: ch:"subtype" */
  subtype: string;
  /** @gotag: ch:"iso_currency_code" */
  isoCurrencyCode: string;
  /** @gotag: ch:"unofficial_currency_code" */
  unofficialCurrencyCode: string;
  /** @gotag: ch:"link_id" */
  linkId: number;
  /** @gotag: ch:"id" */
  id: string;
  /** @gotag: ch:"user_id" */
  userId: number;
  createdAt: string;
  sign: number;
  time: Date | undefined;
  additionalProperties: Any | undefined;
}

export interface ReOccuringTransaction {
  /** @gotag: ch:"account_id" */
  accountId: string;
  /** @gotag: ch:"stream_id" */
  streamId: string;
  /** @gotag: ch:"category_id" */
  categoryId: string;
  /** @gotag: ch:"description" */
  description: string;
  /** @gotag: ch:"merchant_name" */
  merchantName: string;
  /** @gotag: ch:"personal_finance_category_primary" */
  personalFinanceCategoryPrimary: string;
  /** @gotag: ch:"personal_finance_category_detailed" */
  personalFinanceCategoryDetailed: string;
  /** @gotag: ch:"first_date" */
  firstDate: string;
  /** @gotag: ch:"last_date" */
  lastDate: string;
  /** @gotag: ch:"frequency" */
  frequency: ReOccuringTransactionsFrequency;
  /** @gotag: ch:"transaction_ids,array" */
  transactionIds: string;
  /** @gotag: ch:"average_amount" */
  averageAmount: string;
  /** @gotag: ch:"average_amount_iso_currency_code" */
  averageAmountIsoCurrencyCode: string;
  /** @gotag: ch:"last_amount" */
  lastAmount: string;
  /** @gotag: ch:"last_amount_iso_currency_code" */
  lastAmountIsoCurrencyCode: string;
  /** @gotag: ch:"is_active" */
  isActive: boolean;
  /** @gotag: ch:"status" */
  status: ReOccuringTransactionsStatus;
  /** @gotag: ch:"updated_time" */
  updatedTime: string;
  /** @gotag: ch:"user_id" */
  userId: number;
  /** @gotag: ch:"link_id" */
  linkId: number;
  /** @gotag: ch:"id" */
  id: string;
  /** @gotag: ch:"flow" */
  flow: ReCurringFlow;
  sign: number;
  time: Date | undefined;
  additionalProperties: Any | undefined;
}

export interface Transaction {
  /** @gotag: ch:"account_id" */
  accountId: string;
  /** @gotag: ch:"amount" */
  amount: number;
  /** @gotag: ch:"iso_currency_code" */
  isoCurrencyCode: string;
  /** @gotag: ch:"unofficial_currency_code" */
  unofficialCurrencyCode: string;
  /** @gotag: ch:"category_id" */
  categoryId: string;
  /** @gotag: ch:"check_number" */
  checkNumber: string;
  /** @gotag: ch:"date" */
  currentDate: string;
  /** @gotag: ch:"datetime" */
  currentDatetime: string;
  /** @gotag: ch:"authorized_date" */
  authorizedDate: string;
  /** @gotag: ch:"authorized_datetime" */
  authorizedDatetime: string;
  /** @gotag: ch:"name" */
  name: string;
  /** @gotag: ch:"merchant_name" */
  merchantName: string;
  /** @gotag: ch:"payment_channel" */
  paymentChannel: string;
  /** @gotag: ch:"pending" */
  pending: boolean;
  /** @gotag: ch:"pending_transaction_id" */
  pendingTransactionId: string;
  /** @gotag: ch:"account_owner" */
  accountOwner: string;
  /** @gotag: ch:"transaction_id" */
  transactionId: string;
  /** @gotag: ch:"transaction_code" */
  transactionCode: string;
  id: string;
  /** @gotag: ch:"user_id" */
  userId: number;
  /** @gotag: ch:"link_id" */
  linkId: number;
  sign: number;
  /** @gotag: ch:"personal_finance_category_primary" */
  personalFinanceCategoryPrimary: string;
  /** @gotag: ch:"personal_finance_category_detailed" */
  personalFinanceCategoryDetailed: string;
  locationAddress: string;
  locationCity: string;
  locationRegion: string;
  locationPostalCode: string;
  locationCountry: string;
  locationLat: number;
  locationLon: number;
  locationStoreNumber: string;
  paymentMetaByOrderOf: string;
  paymentMetaPayee: string;
  paymentMetaPayer: string;
  paymentMetaPaymentMethod: string;
  paymentMetaPaymentProcessor: string;
  paymentMetaPpdId: string;
  paymentMetaReason: string;
  paymentMetaReferenceNumber: string;
  time: Date | undefined;
  additionalProperties: Any | undefined;
  categories: string[];
}

/**
 * Account Balance History
 * This message is used to represent the balance history of an account.
 */
export interface AccountBalanceHistory {
  time: Date | undefined;
  accountId: string;
  isoCurrencyCode: string;
  balance: number;
  userId: number;
  sign: number;
  id: string;
}

/**
 * CategoryMetricsFinancialSubProfile
 * This message is used to represent the financial sub profile of a category.
 */
export interface CategoryMetricsFinancialSubProfile {
  month: number;
  personalFinanceCategoryPrimary: string;
  transactionCount: number;
  spentLastWeek: number;
  spentLastTwoWeeks: number;
  spentLastMonth: number;
  spentLastSixMonths: number;
  spentLastYear: number;
  spentLastTwoYears: number;
  userId: number;
}

/**
 * CategoryMonthlyExpenditure represents the monthly expenditure of a category.
 * This message is used to represent the monthly expenditure of a category.
 */
export interface CategoryMonthlyExpenditure {
  month: number;
  personalFinanceCategoryPrimary: string;
  totalSpending: number;
  userId: number;
}

/**
 * CategoryMonthlyIncome
 * This message is used to represent the monthly income of a category.
 */
export interface CategoryMonthlyIncome {
  month: number;
  personalFinanceCategoryPrimary: string;
  totalIncome: number;
  userId: number;
}

/**
 * CategoryMonthlyTransactionCount
 * This message is used to represent the monthly transaction count of a category.
 */
export interface CategoryMonthlyTransactionCount {
  month: number;
  personalFinanceCategoryPrimary: string;
  transactionCount: number;
  userId: number;
}

/**
 * DebtToIncomeRatio
 * This message is used to represent the debt to income ratio of a user.
 */
export interface DebtToIncomeRatio {
  month: number;
  ratio: number;
  userId: number;
}

/**
 * ExpenseMetrics
 * This message is used to represent the expense metrics of a user.
 */
export interface ExpenseMetrics {
  month: number;
  personalFinanceCategoryPrimary: string;
  transactionCount: number;
  totalExpenses: number;
  userId: number;
}

/**
 * ExpenseMetricsFinancialSubProfileMetrics
 * This message is used to represent the financial sub profile metrics of a user.
 */
export interface ExpenseMetricsFinancialSubProfileMetrics {
  month: number;
  spentLastWeek: number;
  spentLastMonth: number;
  spentLastSixMonths: number;
  averageMonthlyDiscretionarySpending: number;
  averageMonthlyRecurringSpending: number;
  userId: number;
}

/**
 * FinancialProfile
 * This message is used to represent the financial profile of a user.
 */
export interface FinancialProfile {
  month: number;
  totalIncome: number;
  totalExpenses: number;
  numberOfTransactions: number;
  mostExpensiveCategory: string;
  userId: number;
}

/**
 * IncomeExpenseRatio
 * This message is used to represent the income expense ratio of a user.
 */
export interface IncomeExpenseRatio {
  month: number;
  ratio: number;
  userId: number;
}

/**
 * IncomeMetrics
 * This message is used to represent the income metrics of a user.
 */
export interface IncomeMetrics {
  month: number;
  personalFinanceCategoryPrimary: string;
  transactionCount: number;
  totalIncome: number;
  userId: number;
}

/**
 * IncomeMetricsFinancialSubProfile
 * This message is used to represent the financial sub profile of a user.
 */
export interface IncomeMetricsFinancialSubProfile {
  month: number;
  incomeLastTwoWeeks: number;
  incomeLastMonth: number;
  incomeLastTwoMonths: number;
  incomeLastSixMonths: number;
  incomeLastYear: number;
  userId: number;
}

/**
 * LocationFinancialSubProfile
 * This message is used to represent the financial sub profile of a location.
 */
export interface LocationFinancialSubProfile {
  locationCity: string;
  transactionCount: number;
  spentLastWeek: number;
  spentLastTwoWeeks: number;
  spentLastMonth: number;
  spentLastSixMonths: number;
  spentLastYear: number;
  spentLastTwoYears: number;
  userId: number;
  month: number;
}

/**
 * MerchantFinancialSubProfile
 * This message is used to represent the financial sub profile of a merchant.
 */
export interface MerchantMetricsFinancialSubProfile {
  merchantName: string;
  spentLastWeek: number;
  spentLastTwoWeeks: number;
  spentLastMonth: number;
  spentLastSixMonths: number;
  spentLastYear: number;
  spentLastTwoYears: number;
  userId: number;
  month: number;
}

/**
 * MerchantMonthlyExpenditure
 * This message is used to represent the monthly expenditure of a merchant.
 */
export interface MerchantMonthlyExpenditure {
  month: number;
  merchantName: string;
  totalSpending: number;
  userId: number;
}

/**
 * MonthlyBalance
 * This message is used to represent the monthly balance of a user.
 */
export interface MonthlyBalance {
  month: number;
  netBalance: number;
  userId: number;
}

/**
 * MonthlyExpenditure
 * This message is used to represent the monthly expenditure of a user.
 */
export interface MonthlyExpenditure {
  month: number;
  totalSpending: number;
  userId: number;
}

/**
 * MonthlyIncome
 * This message is used to represent the monthly income of a user.
 */
export interface MonthlyIncome {
  month: number;
  totalIncome: number;
  userId: number;
}

/**
 * MonthlySavings
 * This message is used to represent the monthly savings of a user.
 */
export interface MonthlySavings {
  month: number;
  netSavings: number;
  userId: number;
}

/**
 * MonthlyTotalQuantityBySecurityAndUser
 * This message is used to represent the monthly total quantity of a security.
 */
export interface MonthlyTotalQuantityBySecurityAndUser {
  month: number;
  securityId: string;
  totalQuantity: number;
  userId: number;
}

/**
 * MonthlyTransactionCount
 * This message is used to represent the monthly transaction count of a user.
 */
export interface MonthlyTransactionCount {
  month: number;
  transactionCount: number;
  userId: number;
}

/**
 * PaymentChannelMetricsFinancialSubProfile
 * This message is used to represent the financial sub profile of a payment channel.
 */
export interface PaymentChannelMetricsFinancialSubProfile {
  paymentChannel: string;
  spentLastWeek: number;
  spentLastTwoWeeks: number;
  spentLastMonth: number;
  spentLastSixMonths: number;
  spentLastYear: number;
  spentLastTwoYears: number;
  userId: number;
  month: number;
  transactionCount: number;
}

/**
 * PaymentChannelMonthlyExpenditure
 * This message is used to represent the monthly expenditure of a payment channel.
 */
export interface PaymentChannelMonthlyExpenditure {
  month: number;
  paymentChannel: string;
  totalSpending: number;
  userId: number;
}

/**
 * TotalInvestmentBySecurity
 * This message is used to represent the total investment of a security.
 */
export interface TotalInvestmentBySecurity {
  securityId: string;
  totalInvestment: number;
  userId: number;
}

/**
 * TransactionAggregatesByMonth
 * This message is used to represent the transaction aggregates of a user.
 */
export interface TransactionAggregatesByMonth {
  month: number;
  personalFinanceCategoryPrimary: string;
  locationCity: string;
  paymentChannel: string;
  merchantName: string;
  transactionCount: number;
  totalAmount: number;
  userId: number;
}

/**
 * UserFinancialHealthMetricsTable
 * This message is used to represent the financial health metrics of a user.
 */
export interface UserFinancialHealthMetricsTable {
  time: Date | undefined;
  userId: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  transactionDiversity: number;
  debtToIncomeRatio: number;
  overdraftFrequency: number;
}

/**
 * MelodyFinancialContext represents the financial context of a user.
 * This message is used to represent the financial context of a user.
 */
export interface MelodyFinancialContext {
  categories: CategoryMetricsFinancialSubProfile[];
  expenses: ExpenseMetricsFinancialSubProfileMetrics[];
  income: IncomeMetricsFinancialSubProfile[];
  locations: LocationFinancialSubProfile[];
  merchants: MerchantMetricsFinancialSubProfile[];
  paymentChannels: PaymentChannelMetricsFinancialSubProfile[];
  bankAccounts: BankAccount[];
  investmentAccounts: InvestmentAccount[];
  creditAccounts: CreditAccount[];
  mortgageLoanAccounts: MortgageAccount[];
  studentLoanAccounts: StudentLoanAccount[];
}

function createBaseInvestmentTransaction(): InvestmentTransaction {
  return {
    accountId: "",
    ammount: "",
    investmentTransactionId: "",
    securityId: "",
    currentDate: "",
    name: "",
    quantity: 0,
    amount: 0,
    price: 0,
    fees: 0,
    type: "",
    subtype: "",
    isoCurrencyCode: "",
    unofficialCurrencyCode: "",
    linkId: 0,
    id: "",
    userId: 0,
    createdAt: "",
    sign: 0,
    time: undefined,
    additionalProperties: undefined,
  };
}

export const InvestmentTransaction = {
  fromJSON(object: any): InvestmentTransaction {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      ammount: isSet(object.ammount) ? String(object.ammount) : "",
      investmentTransactionId: isSet(object.investmentTransactionId) ? String(object.investmentTransactionId) : "",
      securityId: isSet(object.securityId) ? String(object.securityId) : "",
      currentDate: isSet(object.currentDate) ? String(object.currentDate) : "",
      name: isSet(object.name) ? String(object.name) : "",
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      price: isSet(object.price) ? Number(object.price) : 0,
      fees: isSet(object.fees) ? Number(object.fees) : 0,
      type: isSet(object.type) ? String(object.type) : "",
      subtype: isSet(object.subtype) ? String(object.subtype) : "",
      isoCurrencyCode: isSet(object.isoCurrencyCode) ? String(object.isoCurrencyCode) : "",
      unofficialCurrencyCode: isSet(object.unofficialCurrencyCode) ? String(object.unofficialCurrencyCode) : "",
      linkId: isSet(object.linkId) ? Number(object.linkId) : 0,
      id: isSet(object.id) ? String(object.id) : "",
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : "",
      sign: isSet(object.sign) ? Number(object.sign) : 0,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      additionalProperties: isSet(object.additionalProperties) ? Any.fromJSON(object.additionalProperties) : undefined,
    };
  },

  toJSON(message: InvestmentTransaction): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.ammount !== "") {
      obj.ammount = message.ammount;
    }
    if (message.investmentTransactionId !== "") {
      obj.investmentTransactionId = message.investmentTransactionId;
    }
    if (message.securityId !== "") {
      obj.securityId = message.securityId;
    }
    if (message.currentDate !== "") {
      obj.currentDate = message.currentDate;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.quantity !== 0) {
      obj.quantity = message.quantity;
    }
    if (message.amount !== 0) {
      obj.amount = message.amount;
    }
    if (message.price !== 0) {
      obj.price = message.price;
    }
    if (message.fees !== 0) {
      obj.fees = message.fees;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.subtype !== "") {
      obj.subtype = message.subtype;
    }
    if (message.isoCurrencyCode !== "") {
      obj.isoCurrencyCode = message.isoCurrencyCode;
    }
    if (message.unofficialCurrencyCode !== "") {
      obj.unofficialCurrencyCode = message.unofficialCurrencyCode;
    }
    if (message.linkId !== 0) {
      obj.linkId = Math.round(message.linkId);
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.createdAt !== "") {
      obj.createdAt = message.createdAt;
    }
    if (message.sign !== 0) {
      obj.sign = Math.round(message.sign);
    }
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    if (message.additionalProperties !== undefined) {
      obj.additionalProperties = Any.toJSON(message.additionalProperties);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvestmentTransaction>, I>>(base?: I): InvestmentTransaction {
    return InvestmentTransaction.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InvestmentTransaction>, I>>(object: I): InvestmentTransaction {
    const message = createBaseInvestmentTransaction();
    message.accountId = object.accountId ?? "";
    message.ammount = object.ammount ?? "";
    message.investmentTransactionId = object.investmentTransactionId ?? "";
    message.securityId = object.securityId ?? "";
    message.currentDate = object.currentDate ?? "";
    message.name = object.name ?? "";
    message.quantity = object.quantity ?? 0;
    message.amount = object.amount ?? 0;
    message.price = object.price ?? 0;
    message.fees = object.fees ?? 0;
    message.type = object.type ?? "";
    message.subtype = object.subtype ?? "";
    message.isoCurrencyCode = object.isoCurrencyCode ?? "";
    message.unofficialCurrencyCode = object.unofficialCurrencyCode ?? "";
    message.linkId = object.linkId ?? 0;
    message.id = object.id ?? "";
    message.userId = object.userId ?? 0;
    message.createdAt = object.createdAt ?? "";
    message.sign = object.sign ?? 0;
    message.time = object.time ?? undefined;
    message.additionalProperties = (object.additionalProperties !== undefined && object.additionalProperties !== null)
      ? Any.fromPartial(object.additionalProperties)
      : undefined;
    return message;
  },
};

function createBaseReOccuringTransaction(): ReOccuringTransaction {
  return {
    accountId: "",
    streamId: "",
    categoryId: "",
    description: "",
    merchantName: "",
    personalFinanceCategoryPrimary: "",
    personalFinanceCategoryDetailed: "",
    firstDate: "",
    lastDate: "",
    frequency: 0,
    transactionIds: "",
    averageAmount: "",
    averageAmountIsoCurrencyCode: "",
    lastAmount: "",
    lastAmountIsoCurrencyCode: "",
    isActive: false,
    status: 0,
    updatedTime: "",
    userId: 0,
    linkId: 0,
    id: "",
    flow: 0,
    sign: 0,
    time: undefined,
    additionalProperties: undefined,
  };
}

export const ReOccuringTransaction = {
  fromJSON(object: any): ReOccuringTransaction {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      streamId: isSet(object.streamId) ? String(object.streamId) : "",
      categoryId: isSet(object.categoryId) ? String(object.categoryId) : "",
      description: isSet(object.description) ? String(object.description) : "",
      merchantName: isSet(object.merchantName) ? String(object.merchantName) : "",
      personalFinanceCategoryPrimary: isSet(object.personalFinanceCategoryPrimary)
        ? String(object.personalFinanceCategoryPrimary)
        : "",
      personalFinanceCategoryDetailed: isSet(object.personalFinanceCategoryDetailed)
        ? String(object.personalFinanceCategoryDetailed)
        : "",
      firstDate: isSet(object.firstDate) ? String(object.firstDate) : "",
      lastDate: isSet(object.lastDate) ? String(object.lastDate) : "",
      frequency: isSet(object.frequency) ? reOccuringTransactionsFrequencyFromJSON(object.frequency) : 0,
      transactionIds: isSet(object.transactionIds) ? String(object.transactionIds) : "",
      averageAmount: isSet(object.averageAmount) ? String(object.averageAmount) : "",
      averageAmountIsoCurrencyCode: isSet(object.averageAmountIsoCurrencyCode)
        ? String(object.averageAmountIsoCurrencyCode)
        : "",
      lastAmount: isSet(object.lastAmount) ? String(object.lastAmount) : "",
      lastAmountIsoCurrencyCode: isSet(object.lastAmountIsoCurrencyCode)
        ? String(object.lastAmountIsoCurrencyCode)
        : "",
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      status: isSet(object.status) ? reOccuringTransactionsStatusFromJSON(object.status) : 0,
      updatedTime: isSet(object.updatedTime) ? String(object.updatedTime) : "",
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      linkId: isSet(object.linkId) ? Number(object.linkId) : 0,
      id: isSet(object.id) ? String(object.id) : "",
      flow: isSet(object.flow) ? reCurringFlowFromJSON(object.flow) : 0,
      sign: isSet(object.sign) ? Number(object.sign) : 0,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      additionalProperties: isSet(object.additionalProperties) ? Any.fromJSON(object.additionalProperties) : undefined,
    };
  },

  toJSON(message: ReOccuringTransaction): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.streamId !== "") {
      obj.streamId = message.streamId;
    }
    if (message.categoryId !== "") {
      obj.categoryId = message.categoryId;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.merchantName !== "") {
      obj.merchantName = message.merchantName;
    }
    if (message.personalFinanceCategoryPrimary !== "") {
      obj.personalFinanceCategoryPrimary = message.personalFinanceCategoryPrimary;
    }
    if (message.personalFinanceCategoryDetailed !== "") {
      obj.personalFinanceCategoryDetailed = message.personalFinanceCategoryDetailed;
    }
    if (message.firstDate !== "") {
      obj.firstDate = message.firstDate;
    }
    if (message.lastDate !== "") {
      obj.lastDate = message.lastDate;
    }
    if (message.frequency !== 0) {
      obj.frequency = reOccuringTransactionsFrequencyToJSON(message.frequency);
    }
    if (message.transactionIds !== "") {
      obj.transactionIds = message.transactionIds;
    }
    if (message.averageAmount !== "") {
      obj.averageAmount = message.averageAmount;
    }
    if (message.averageAmountIsoCurrencyCode !== "") {
      obj.averageAmountIsoCurrencyCode = message.averageAmountIsoCurrencyCode;
    }
    if (message.lastAmount !== "") {
      obj.lastAmount = message.lastAmount;
    }
    if (message.lastAmountIsoCurrencyCode !== "") {
      obj.lastAmountIsoCurrencyCode = message.lastAmountIsoCurrencyCode;
    }
    if (message.isActive === true) {
      obj.isActive = message.isActive;
    }
    if (message.status !== 0) {
      obj.status = reOccuringTransactionsStatusToJSON(message.status);
    }
    if (message.updatedTime !== "") {
      obj.updatedTime = message.updatedTime;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.linkId !== 0) {
      obj.linkId = Math.round(message.linkId);
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.flow !== 0) {
      obj.flow = reCurringFlowToJSON(message.flow);
    }
    if (message.sign !== 0) {
      obj.sign = Math.round(message.sign);
    }
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    if (message.additionalProperties !== undefined) {
      obj.additionalProperties = Any.toJSON(message.additionalProperties);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReOccuringTransaction>, I>>(base?: I): ReOccuringTransaction {
    return ReOccuringTransaction.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReOccuringTransaction>, I>>(object: I): ReOccuringTransaction {
    const message = createBaseReOccuringTransaction();
    message.accountId = object.accountId ?? "";
    message.streamId = object.streamId ?? "";
    message.categoryId = object.categoryId ?? "";
    message.description = object.description ?? "";
    message.merchantName = object.merchantName ?? "";
    message.personalFinanceCategoryPrimary = object.personalFinanceCategoryPrimary ?? "";
    message.personalFinanceCategoryDetailed = object.personalFinanceCategoryDetailed ?? "";
    message.firstDate = object.firstDate ?? "";
    message.lastDate = object.lastDate ?? "";
    message.frequency = object.frequency ?? 0;
    message.transactionIds = object.transactionIds ?? "";
    message.averageAmount = object.averageAmount ?? "";
    message.averageAmountIsoCurrencyCode = object.averageAmountIsoCurrencyCode ?? "";
    message.lastAmount = object.lastAmount ?? "";
    message.lastAmountIsoCurrencyCode = object.lastAmountIsoCurrencyCode ?? "";
    message.isActive = object.isActive ?? false;
    message.status = object.status ?? 0;
    message.updatedTime = object.updatedTime ?? "";
    message.userId = object.userId ?? 0;
    message.linkId = object.linkId ?? 0;
    message.id = object.id ?? "";
    message.flow = object.flow ?? 0;
    message.sign = object.sign ?? 0;
    message.time = object.time ?? undefined;
    message.additionalProperties = (object.additionalProperties !== undefined && object.additionalProperties !== null)
      ? Any.fromPartial(object.additionalProperties)
      : undefined;
    return message;
  },
};

function createBaseTransaction(): Transaction {
  return {
    accountId: "",
    amount: 0,
    isoCurrencyCode: "",
    unofficialCurrencyCode: "",
    categoryId: "",
    checkNumber: "",
    currentDate: "",
    currentDatetime: "",
    authorizedDate: "",
    authorizedDatetime: "",
    name: "",
    merchantName: "",
    paymentChannel: "",
    pending: false,
    pendingTransactionId: "",
    accountOwner: "",
    transactionId: "",
    transactionCode: "",
    id: "",
    userId: 0,
    linkId: 0,
    sign: 0,
    personalFinanceCategoryPrimary: "",
    personalFinanceCategoryDetailed: "",
    locationAddress: "",
    locationCity: "",
    locationRegion: "",
    locationPostalCode: "",
    locationCountry: "",
    locationLat: 0,
    locationLon: 0,
    locationStoreNumber: "",
    paymentMetaByOrderOf: "",
    paymentMetaPayee: "",
    paymentMetaPayer: "",
    paymentMetaPaymentMethod: "",
    paymentMetaPaymentProcessor: "",
    paymentMetaPpdId: "",
    paymentMetaReason: "",
    paymentMetaReferenceNumber: "",
    time: undefined,
    additionalProperties: undefined,
    categories: [],
  };
}

export const Transaction = {
  fromJSON(object: any): Transaction {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      isoCurrencyCode: isSet(object.isoCurrencyCode) ? String(object.isoCurrencyCode) : "",
      unofficialCurrencyCode: isSet(object.unofficialCurrencyCode) ? String(object.unofficialCurrencyCode) : "",
      categoryId: isSet(object.categoryId) ? String(object.categoryId) : "",
      checkNumber: isSet(object.checkNumber) ? String(object.checkNumber) : "",
      currentDate: isSet(object.currentDate) ? String(object.currentDate) : "",
      currentDatetime: isSet(object.currentDatetime) ? String(object.currentDatetime) : "",
      authorizedDate: isSet(object.authorizedDate) ? String(object.authorizedDate) : "",
      authorizedDatetime: isSet(object.authorizedDatetime) ? String(object.authorizedDatetime) : "",
      name: isSet(object.name) ? String(object.name) : "",
      merchantName: isSet(object.merchantName) ? String(object.merchantName) : "",
      paymentChannel: isSet(object.paymentChannel) ? String(object.paymentChannel) : "",
      pending: isSet(object.pending) ? Boolean(object.pending) : false,
      pendingTransactionId: isSet(object.pendingTransactionId) ? String(object.pendingTransactionId) : "",
      accountOwner: isSet(object.accountOwner) ? String(object.accountOwner) : "",
      transactionId: isSet(object.transactionId) ? String(object.transactionId) : "",
      transactionCode: isSet(object.transactionCode) ? String(object.transactionCode) : "",
      id: isSet(object.id) ? String(object.id) : "",
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      linkId: isSet(object.linkId) ? Number(object.linkId) : 0,
      sign: isSet(object.sign) ? Number(object.sign) : 0,
      personalFinanceCategoryPrimary: isSet(object.personalFinanceCategoryPrimary)
        ? String(object.personalFinanceCategoryPrimary)
        : "",
      personalFinanceCategoryDetailed: isSet(object.personalFinanceCategoryDetailed)
        ? String(object.personalFinanceCategoryDetailed)
        : "",
      locationAddress: isSet(object.locationAddress) ? String(object.locationAddress) : "",
      locationCity: isSet(object.locationCity) ? String(object.locationCity) : "",
      locationRegion: isSet(object.locationRegion) ? String(object.locationRegion) : "",
      locationPostalCode: isSet(object.locationPostalCode) ? String(object.locationPostalCode) : "",
      locationCountry: isSet(object.locationCountry) ? String(object.locationCountry) : "",
      locationLat: isSet(object.locationLat) ? Number(object.locationLat) : 0,
      locationLon: isSet(object.locationLon) ? Number(object.locationLon) : 0,
      locationStoreNumber: isSet(object.locationStoreNumber) ? String(object.locationStoreNumber) : "",
      paymentMetaByOrderOf: isSet(object.paymentMetaByOrderOf) ? String(object.paymentMetaByOrderOf) : "",
      paymentMetaPayee: isSet(object.paymentMetaPayee) ? String(object.paymentMetaPayee) : "",
      paymentMetaPayer: isSet(object.paymentMetaPayer) ? String(object.paymentMetaPayer) : "",
      paymentMetaPaymentMethod: isSet(object.paymentMetaPaymentMethod) ? String(object.paymentMetaPaymentMethod) : "",
      paymentMetaPaymentProcessor: isSet(object.paymentMetaPaymentProcessor)
        ? String(object.paymentMetaPaymentProcessor)
        : "",
      paymentMetaPpdId: isSet(object.paymentMetaPpdId) ? String(object.paymentMetaPpdId) : "",
      paymentMetaReason: isSet(object.paymentMetaReason) ? String(object.paymentMetaReason) : "",
      paymentMetaReferenceNumber: isSet(object.paymentMetaReferenceNumber)
        ? String(object.paymentMetaReferenceNumber)
        : "",
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      additionalProperties: isSet(object.additionalProperties) ? Any.fromJSON(object.additionalProperties) : undefined,
      categories: Array.isArray(object?.categories)
        ? object.categories.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: Transaction): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.amount !== 0) {
      obj.amount = message.amount;
    }
    if (message.isoCurrencyCode !== "") {
      obj.isoCurrencyCode = message.isoCurrencyCode;
    }
    if (message.unofficialCurrencyCode !== "") {
      obj.unofficialCurrencyCode = message.unofficialCurrencyCode;
    }
    if (message.categoryId !== "") {
      obj.categoryId = message.categoryId;
    }
    if (message.checkNumber !== "") {
      obj.checkNumber = message.checkNumber;
    }
    if (message.currentDate !== "") {
      obj.currentDate = message.currentDate;
    }
    if (message.currentDatetime !== "") {
      obj.currentDatetime = message.currentDatetime;
    }
    if (message.authorizedDate !== "") {
      obj.authorizedDate = message.authorizedDate;
    }
    if (message.authorizedDatetime !== "") {
      obj.authorizedDatetime = message.authorizedDatetime;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.merchantName !== "") {
      obj.merchantName = message.merchantName;
    }
    if (message.paymentChannel !== "") {
      obj.paymentChannel = message.paymentChannel;
    }
    if (message.pending === true) {
      obj.pending = message.pending;
    }
    if (message.pendingTransactionId !== "") {
      obj.pendingTransactionId = message.pendingTransactionId;
    }
    if (message.accountOwner !== "") {
      obj.accountOwner = message.accountOwner;
    }
    if (message.transactionId !== "") {
      obj.transactionId = message.transactionId;
    }
    if (message.transactionCode !== "") {
      obj.transactionCode = message.transactionCode;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.linkId !== 0) {
      obj.linkId = Math.round(message.linkId);
    }
    if (message.sign !== 0) {
      obj.sign = Math.round(message.sign);
    }
    if (message.personalFinanceCategoryPrimary !== "") {
      obj.personalFinanceCategoryPrimary = message.personalFinanceCategoryPrimary;
    }
    if (message.personalFinanceCategoryDetailed !== "") {
      obj.personalFinanceCategoryDetailed = message.personalFinanceCategoryDetailed;
    }
    if (message.locationAddress !== "") {
      obj.locationAddress = message.locationAddress;
    }
    if (message.locationCity !== "") {
      obj.locationCity = message.locationCity;
    }
    if (message.locationRegion !== "") {
      obj.locationRegion = message.locationRegion;
    }
    if (message.locationPostalCode !== "") {
      obj.locationPostalCode = message.locationPostalCode;
    }
    if (message.locationCountry !== "") {
      obj.locationCountry = message.locationCountry;
    }
    if (message.locationLat !== 0) {
      obj.locationLat = message.locationLat;
    }
    if (message.locationLon !== 0) {
      obj.locationLon = message.locationLon;
    }
    if (message.locationStoreNumber !== "") {
      obj.locationStoreNumber = message.locationStoreNumber;
    }
    if (message.paymentMetaByOrderOf !== "") {
      obj.paymentMetaByOrderOf = message.paymentMetaByOrderOf;
    }
    if (message.paymentMetaPayee !== "") {
      obj.paymentMetaPayee = message.paymentMetaPayee;
    }
    if (message.paymentMetaPayer !== "") {
      obj.paymentMetaPayer = message.paymentMetaPayer;
    }
    if (message.paymentMetaPaymentMethod !== "") {
      obj.paymentMetaPaymentMethod = message.paymentMetaPaymentMethod;
    }
    if (message.paymentMetaPaymentProcessor !== "") {
      obj.paymentMetaPaymentProcessor = message.paymentMetaPaymentProcessor;
    }
    if (message.paymentMetaPpdId !== "") {
      obj.paymentMetaPpdId = message.paymentMetaPpdId;
    }
    if (message.paymentMetaReason !== "") {
      obj.paymentMetaReason = message.paymentMetaReason;
    }
    if (message.paymentMetaReferenceNumber !== "") {
      obj.paymentMetaReferenceNumber = message.paymentMetaReferenceNumber;
    }
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    if (message.additionalProperties !== undefined) {
      obj.additionalProperties = Any.toJSON(message.additionalProperties);
    }
    if (message.categories?.length) {
      obj.categories = message.categories;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Transaction>, I>>(base?: I): Transaction {
    return Transaction.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Transaction>, I>>(object: I): Transaction {
    const message = createBaseTransaction();
    message.accountId = object.accountId ?? "";
    message.amount = object.amount ?? 0;
    message.isoCurrencyCode = object.isoCurrencyCode ?? "";
    message.unofficialCurrencyCode = object.unofficialCurrencyCode ?? "";
    message.categoryId = object.categoryId ?? "";
    message.checkNumber = object.checkNumber ?? "";
    message.currentDate = object.currentDate ?? "";
    message.currentDatetime = object.currentDatetime ?? "";
    message.authorizedDate = object.authorizedDate ?? "";
    message.authorizedDatetime = object.authorizedDatetime ?? "";
    message.name = object.name ?? "";
    message.merchantName = object.merchantName ?? "";
    message.paymentChannel = object.paymentChannel ?? "";
    message.pending = object.pending ?? false;
    message.pendingTransactionId = object.pendingTransactionId ?? "";
    message.accountOwner = object.accountOwner ?? "";
    message.transactionId = object.transactionId ?? "";
    message.transactionCode = object.transactionCode ?? "";
    message.id = object.id ?? "";
    message.userId = object.userId ?? 0;
    message.linkId = object.linkId ?? 0;
    message.sign = object.sign ?? 0;
    message.personalFinanceCategoryPrimary = object.personalFinanceCategoryPrimary ?? "";
    message.personalFinanceCategoryDetailed = object.personalFinanceCategoryDetailed ?? "";
    message.locationAddress = object.locationAddress ?? "";
    message.locationCity = object.locationCity ?? "";
    message.locationRegion = object.locationRegion ?? "";
    message.locationPostalCode = object.locationPostalCode ?? "";
    message.locationCountry = object.locationCountry ?? "";
    message.locationLat = object.locationLat ?? 0;
    message.locationLon = object.locationLon ?? 0;
    message.locationStoreNumber = object.locationStoreNumber ?? "";
    message.paymentMetaByOrderOf = object.paymentMetaByOrderOf ?? "";
    message.paymentMetaPayee = object.paymentMetaPayee ?? "";
    message.paymentMetaPayer = object.paymentMetaPayer ?? "";
    message.paymentMetaPaymentMethod = object.paymentMetaPaymentMethod ?? "";
    message.paymentMetaPaymentProcessor = object.paymentMetaPaymentProcessor ?? "";
    message.paymentMetaPpdId = object.paymentMetaPpdId ?? "";
    message.paymentMetaReason = object.paymentMetaReason ?? "";
    message.paymentMetaReferenceNumber = object.paymentMetaReferenceNumber ?? "";
    message.time = object.time ?? undefined;
    message.additionalProperties = (object.additionalProperties !== undefined && object.additionalProperties !== null)
      ? Any.fromPartial(object.additionalProperties)
      : undefined;
    message.categories = object.categories?.map((e) => e) || [];
    return message;
  },
};

function createBaseAccountBalanceHistory(): AccountBalanceHistory {
  return { time: undefined, accountId: "", isoCurrencyCode: "", balance: 0, userId: 0, sign: 0, id: "" };
}

export const AccountBalanceHistory = {
  fromJSON(object: any): AccountBalanceHistory {
    return {
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      isoCurrencyCode: isSet(object.isoCurrencyCode) ? String(object.isoCurrencyCode) : "",
      balance: isSet(object.balance) ? Number(object.balance) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      sign: isSet(object.sign) ? Number(object.sign) : 0,
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: AccountBalanceHistory): unknown {
    const obj: any = {};
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.isoCurrencyCode !== "") {
      obj.isoCurrencyCode = message.isoCurrencyCode;
    }
    if (message.balance !== 0) {
      obj.balance = message.balance;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.sign !== 0) {
      obj.sign = Math.round(message.sign);
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountBalanceHistory>, I>>(base?: I): AccountBalanceHistory {
    return AccountBalanceHistory.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AccountBalanceHistory>, I>>(object: I): AccountBalanceHistory {
    const message = createBaseAccountBalanceHistory();
    message.time = object.time ?? undefined;
    message.accountId = object.accountId ?? "";
    message.isoCurrencyCode = object.isoCurrencyCode ?? "";
    message.balance = object.balance ?? 0;
    message.userId = object.userId ?? 0;
    message.sign = object.sign ?? 0;
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseCategoryMetricsFinancialSubProfile(): CategoryMetricsFinancialSubProfile {
  return {
    month: 0,
    personalFinanceCategoryPrimary: "",
    transactionCount: 0,
    spentLastWeek: 0,
    spentLastTwoWeeks: 0,
    spentLastMonth: 0,
    spentLastSixMonths: 0,
    spentLastYear: 0,
    spentLastTwoYears: 0,
    userId: 0,
  };
}

export const CategoryMetricsFinancialSubProfile = {
  fromJSON(object: any): CategoryMetricsFinancialSubProfile {
    return {
      month: isSet(object.month) ? Number(object.month) : 0,
      personalFinanceCategoryPrimary: isSet(object.personalFinanceCategoryPrimary)
        ? String(object.personalFinanceCategoryPrimary)
        : "",
      transactionCount: isSet(object.transactionCount) ? Number(object.transactionCount) : 0,
      spentLastWeek: isSet(object.spentLastWeek) ? Number(object.spentLastWeek) : 0,
      spentLastTwoWeeks: isSet(object.spentLastTwoWeeks) ? Number(object.spentLastTwoWeeks) : 0,
      spentLastMonth: isSet(object.spentLastMonth) ? Number(object.spentLastMonth) : 0,
      spentLastSixMonths: isSet(object.spentLastSixMonths) ? Number(object.spentLastSixMonths) : 0,
      spentLastYear: isSet(object.spentLastYear) ? Number(object.spentLastYear) : 0,
      spentLastTwoYears: isSet(object.spentLastTwoYears) ? Number(object.spentLastTwoYears) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: CategoryMetricsFinancialSubProfile): unknown {
    const obj: any = {};
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    if (message.personalFinanceCategoryPrimary !== "") {
      obj.personalFinanceCategoryPrimary = message.personalFinanceCategoryPrimary;
    }
    if (message.transactionCount !== 0) {
      obj.transactionCount = Math.round(message.transactionCount);
    }
    if (message.spentLastWeek !== 0) {
      obj.spentLastWeek = message.spentLastWeek;
    }
    if (message.spentLastTwoWeeks !== 0) {
      obj.spentLastTwoWeeks = message.spentLastTwoWeeks;
    }
    if (message.spentLastMonth !== 0) {
      obj.spentLastMonth = message.spentLastMonth;
    }
    if (message.spentLastSixMonths !== 0) {
      obj.spentLastSixMonths = message.spentLastSixMonths;
    }
    if (message.spentLastYear !== 0) {
      obj.spentLastYear = message.spentLastYear;
    }
    if (message.spentLastTwoYears !== 0) {
      obj.spentLastTwoYears = message.spentLastTwoYears;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CategoryMetricsFinancialSubProfile>, I>>(
    base?: I,
  ): CategoryMetricsFinancialSubProfile {
    return CategoryMetricsFinancialSubProfile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CategoryMetricsFinancialSubProfile>, I>>(
    object: I,
  ): CategoryMetricsFinancialSubProfile {
    const message = createBaseCategoryMetricsFinancialSubProfile();
    message.month = object.month ?? 0;
    message.personalFinanceCategoryPrimary = object.personalFinanceCategoryPrimary ?? "";
    message.transactionCount = object.transactionCount ?? 0;
    message.spentLastWeek = object.spentLastWeek ?? 0;
    message.spentLastTwoWeeks = object.spentLastTwoWeeks ?? 0;
    message.spentLastMonth = object.spentLastMonth ?? 0;
    message.spentLastSixMonths = object.spentLastSixMonths ?? 0;
    message.spentLastYear = object.spentLastYear ?? 0;
    message.spentLastTwoYears = object.spentLastTwoYears ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseCategoryMonthlyExpenditure(): CategoryMonthlyExpenditure {
  return { month: 0, personalFinanceCategoryPrimary: "", totalSpending: 0, userId: 0 };
}

export const CategoryMonthlyExpenditure = {
  fromJSON(object: any): CategoryMonthlyExpenditure {
    return {
      month: isSet(object.month) ? Number(object.month) : 0,
      personalFinanceCategoryPrimary: isSet(object.personalFinanceCategoryPrimary)
        ? String(object.personalFinanceCategoryPrimary)
        : "",
      totalSpending: isSet(object.totalSpending) ? Number(object.totalSpending) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: CategoryMonthlyExpenditure): unknown {
    const obj: any = {};
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    if (message.personalFinanceCategoryPrimary !== "") {
      obj.personalFinanceCategoryPrimary = message.personalFinanceCategoryPrimary;
    }
    if (message.totalSpending !== 0) {
      obj.totalSpending = message.totalSpending;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CategoryMonthlyExpenditure>, I>>(base?: I): CategoryMonthlyExpenditure {
    return CategoryMonthlyExpenditure.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CategoryMonthlyExpenditure>, I>>(object: I): CategoryMonthlyExpenditure {
    const message = createBaseCategoryMonthlyExpenditure();
    message.month = object.month ?? 0;
    message.personalFinanceCategoryPrimary = object.personalFinanceCategoryPrimary ?? "";
    message.totalSpending = object.totalSpending ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseCategoryMonthlyIncome(): CategoryMonthlyIncome {
  return { month: 0, personalFinanceCategoryPrimary: "", totalIncome: 0, userId: 0 };
}

export const CategoryMonthlyIncome = {
  fromJSON(object: any): CategoryMonthlyIncome {
    return {
      month: isSet(object.month) ? Number(object.month) : 0,
      personalFinanceCategoryPrimary: isSet(object.personalFinanceCategoryPrimary)
        ? String(object.personalFinanceCategoryPrimary)
        : "",
      totalIncome: isSet(object.totalIncome) ? Number(object.totalIncome) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: CategoryMonthlyIncome): unknown {
    const obj: any = {};
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    if (message.personalFinanceCategoryPrimary !== "") {
      obj.personalFinanceCategoryPrimary = message.personalFinanceCategoryPrimary;
    }
    if (message.totalIncome !== 0) {
      obj.totalIncome = message.totalIncome;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CategoryMonthlyIncome>, I>>(base?: I): CategoryMonthlyIncome {
    return CategoryMonthlyIncome.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CategoryMonthlyIncome>, I>>(object: I): CategoryMonthlyIncome {
    const message = createBaseCategoryMonthlyIncome();
    message.month = object.month ?? 0;
    message.personalFinanceCategoryPrimary = object.personalFinanceCategoryPrimary ?? "";
    message.totalIncome = object.totalIncome ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseCategoryMonthlyTransactionCount(): CategoryMonthlyTransactionCount {
  return { month: 0, personalFinanceCategoryPrimary: "", transactionCount: 0, userId: 0 };
}

export const CategoryMonthlyTransactionCount = {
  fromJSON(object: any): CategoryMonthlyTransactionCount {
    return {
      month: isSet(object.month) ? Number(object.month) : 0,
      personalFinanceCategoryPrimary: isSet(object.personalFinanceCategoryPrimary)
        ? String(object.personalFinanceCategoryPrimary)
        : "",
      transactionCount: isSet(object.transactionCount) ? Number(object.transactionCount) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: CategoryMonthlyTransactionCount): unknown {
    const obj: any = {};
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    if (message.personalFinanceCategoryPrimary !== "") {
      obj.personalFinanceCategoryPrimary = message.personalFinanceCategoryPrimary;
    }
    if (message.transactionCount !== 0) {
      obj.transactionCount = Math.round(message.transactionCount);
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CategoryMonthlyTransactionCount>, I>>(base?: I): CategoryMonthlyTransactionCount {
    return CategoryMonthlyTransactionCount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CategoryMonthlyTransactionCount>, I>>(
    object: I,
  ): CategoryMonthlyTransactionCount {
    const message = createBaseCategoryMonthlyTransactionCount();
    message.month = object.month ?? 0;
    message.personalFinanceCategoryPrimary = object.personalFinanceCategoryPrimary ?? "";
    message.transactionCount = object.transactionCount ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseDebtToIncomeRatio(): DebtToIncomeRatio {
  return { month: 0, ratio: 0, userId: 0 };
}

export const DebtToIncomeRatio = {
  fromJSON(object: any): DebtToIncomeRatio {
    return {
      month: isSet(object.month) ? Number(object.month) : 0,
      ratio: isSet(object.ratio) ? Number(object.ratio) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: DebtToIncomeRatio): unknown {
    const obj: any = {};
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    if (message.ratio !== 0) {
      obj.ratio = message.ratio;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DebtToIncomeRatio>, I>>(base?: I): DebtToIncomeRatio {
    return DebtToIncomeRatio.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DebtToIncomeRatio>, I>>(object: I): DebtToIncomeRatio {
    const message = createBaseDebtToIncomeRatio();
    message.month = object.month ?? 0;
    message.ratio = object.ratio ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseExpenseMetrics(): ExpenseMetrics {
  return { month: 0, personalFinanceCategoryPrimary: "", transactionCount: 0, totalExpenses: 0, userId: 0 };
}

export const ExpenseMetrics = {
  fromJSON(object: any): ExpenseMetrics {
    return {
      month: isSet(object.month) ? Number(object.month) : 0,
      personalFinanceCategoryPrimary: isSet(object.personalFinanceCategoryPrimary)
        ? String(object.personalFinanceCategoryPrimary)
        : "",
      transactionCount: isSet(object.transactionCount) ? Number(object.transactionCount) : 0,
      totalExpenses: isSet(object.totalExpenses) ? Number(object.totalExpenses) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: ExpenseMetrics): unknown {
    const obj: any = {};
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    if (message.personalFinanceCategoryPrimary !== "") {
      obj.personalFinanceCategoryPrimary = message.personalFinanceCategoryPrimary;
    }
    if (message.transactionCount !== 0) {
      obj.transactionCount = Math.round(message.transactionCount);
    }
    if (message.totalExpenses !== 0) {
      obj.totalExpenses = message.totalExpenses;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExpenseMetrics>, I>>(base?: I): ExpenseMetrics {
    return ExpenseMetrics.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExpenseMetrics>, I>>(object: I): ExpenseMetrics {
    const message = createBaseExpenseMetrics();
    message.month = object.month ?? 0;
    message.personalFinanceCategoryPrimary = object.personalFinanceCategoryPrimary ?? "";
    message.transactionCount = object.transactionCount ?? 0;
    message.totalExpenses = object.totalExpenses ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseExpenseMetricsFinancialSubProfileMetrics(): ExpenseMetricsFinancialSubProfileMetrics {
  return {
    month: 0,
    spentLastWeek: 0,
    spentLastMonth: 0,
    spentLastSixMonths: 0,
    averageMonthlyDiscretionarySpending: 0,
    averageMonthlyRecurringSpending: 0,
    userId: 0,
  };
}

export const ExpenseMetricsFinancialSubProfileMetrics = {
  fromJSON(object: any): ExpenseMetricsFinancialSubProfileMetrics {
    return {
      month: isSet(object.month) ? Number(object.month) : 0,
      spentLastWeek: isSet(object.spentLastWeek) ? Number(object.spentLastWeek) : 0,
      spentLastMonth: isSet(object.spentLastMonth) ? Number(object.spentLastMonth) : 0,
      spentLastSixMonths: isSet(object.spentLastSixMonths) ? Number(object.spentLastSixMonths) : 0,
      averageMonthlyDiscretionarySpending: isSet(object.averageMonthlyDiscretionarySpending)
        ? Number(object.averageMonthlyDiscretionarySpending)
        : 0,
      averageMonthlyRecurringSpending: isSet(object.averageMonthlyRecurringSpending)
        ? Number(object.averageMonthlyRecurringSpending)
        : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: ExpenseMetricsFinancialSubProfileMetrics): unknown {
    const obj: any = {};
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    if (message.spentLastWeek !== 0) {
      obj.spentLastWeek = message.spentLastWeek;
    }
    if (message.spentLastMonth !== 0) {
      obj.spentLastMonth = message.spentLastMonth;
    }
    if (message.spentLastSixMonths !== 0) {
      obj.spentLastSixMonths = message.spentLastSixMonths;
    }
    if (message.averageMonthlyDiscretionarySpending !== 0) {
      obj.averageMonthlyDiscretionarySpending = message.averageMonthlyDiscretionarySpending;
    }
    if (message.averageMonthlyRecurringSpending !== 0) {
      obj.averageMonthlyRecurringSpending = message.averageMonthlyRecurringSpending;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExpenseMetricsFinancialSubProfileMetrics>, I>>(
    base?: I,
  ): ExpenseMetricsFinancialSubProfileMetrics {
    return ExpenseMetricsFinancialSubProfileMetrics.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExpenseMetricsFinancialSubProfileMetrics>, I>>(
    object: I,
  ): ExpenseMetricsFinancialSubProfileMetrics {
    const message = createBaseExpenseMetricsFinancialSubProfileMetrics();
    message.month = object.month ?? 0;
    message.spentLastWeek = object.spentLastWeek ?? 0;
    message.spentLastMonth = object.spentLastMonth ?? 0;
    message.spentLastSixMonths = object.spentLastSixMonths ?? 0;
    message.averageMonthlyDiscretionarySpending = object.averageMonthlyDiscretionarySpending ?? 0;
    message.averageMonthlyRecurringSpending = object.averageMonthlyRecurringSpending ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseFinancialProfile(): FinancialProfile {
  return { month: 0, totalIncome: 0, totalExpenses: 0, numberOfTransactions: 0, mostExpensiveCategory: "", userId: 0 };
}

export const FinancialProfile = {
  fromJSON(object: any): FinancialProfile {
    return {
      month: isSet(object.month) ? Number(object.month) : 0,
      totalIncome: isSet(object.totalIncome) ? Number(object.totalIncome) : 0,
      totalExpenses: isSet(object.totalExpenses) ? Number(object.totalExpenses) : 0,
      numberOfTransactions: isSet(object.numberOfTransactions) ? Number(object.numberOfTransactions) : 0,
      mostExpensiveCategory: isSet(object.mostExpensiveCategory) ? String(object.mostExpensiveCategory) : "",
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: FinancialProfile): unknown {
    const obj: any = {};
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    if (message.totalIncome !== 0) {
      obj.totalIncome = message.totalIncome;
    }
    if (message.totalExpenses !== 0) {
      obj.totalExpenses = message.totalExpenses;
    }
    if (message.numberOfTransactions !== 0) {
      obj.numberOfTransactions = Math.round(message.numberOfTransactions);
    }
    if (message.mostExpensiveCategory !== "") {
      obj.mostExpensiveCategory = message.mostExpensiveCategory;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FinancialProfile>, I>>(base?: I): FinancialProfile {
    return FinancialProfile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FinancialProfile>, I>>(object: I): FinancialProfile {
    const message = createBaseFinancialProfile();
    message.month = object.month ?? 0;
    message.totalIncome = object.totalIncome ?? 0;
    message.totalExpenses = object.totalExpenses ?? 0;
    message.numberOfTransactions = object.numberOfTransactions ?? 0;
    message.mostExpensiveCategory = object.mostExpensiveCategory ?? "";
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseIncomeExpenseRatio(): IncomeExpenseRatio {
  return { month: 0, ratio: 0, userId: 0 };
}

export const IncomeExpenseRatio = {
  fromJSON(object: any): IncomeExpenseRatio {
    return {
      month: isSet(object.month) ? Number(object.month) : 0,
      ratio: isSet(object.ratio) ? Number(object.ratio) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: IncomeExpenseRatio): unknown {
    const obj: any = {};
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    if (message.ratio !== 0) {
      obj.ratio = message.ratio;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IncomeExpenseRatio>, I>>(base?: I): IncomeExpenseRatio {
    return IncomeExpenseRatio.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<IncomeExpenseRatio>, I>>(object: I): IncomeExpenseRatio {
    const message = createBaseIncomeExpenseRatio();
    message.month = object.month ?? 0;
    message.ratio = object.ratio ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseIncomeMetrics(): IncomeMetrics {
  return { month: 0, personalFinanceCategoryPrimary: "", transactionCount: 0, totalIncome: 0, userId: 0 };
}

export const IncomeMetrics = {
  fromJSON(object: any): IncomeMetrics {
    return {
      month: isSet(object.month) ? Number(object.month) : 0,
      personalFinanceCategoryPrimary: isSet(object.personalFinanceCategoryPrimary)
        ? String(object.personalFinanceCategoryPrimary)
        : "",
      transactionCount: isSet(object.transactionCount) ? Number(object.transactionCount) : 0,
      totalIncome: isSet(object.totalIncome) ? Number(object.totalIncome) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: IncomeMetrics): unknown {
    const obj: any = {};
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    if (message.personalFinanceCategoryPrimary !== "") {
      obj.personalFinanceCategoryPrimary = message.personalFinanceCategoryPrimary;
    }
    if (message.transactionCount !== 0) {
      obj.transactionCount = Math.round(message.transactionCount);
    }
    if (message.totalIncome !== 0) {
      obj.totalIncome = message.totalIncome;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IncomeMetrics>, I>>(base?: I): IncomeMetrics {
    return IncomeMetrics.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<IncomeMetrics>, I>>(object: I): IncomeMetrics {
    const message = createBaseIncomeMetrics();
    message.month = object.month ?? 0;
    message.personalFinanceCategoryPrimary = object.personalFinanceCategoryPrimary ?? "";
    message.transactionCount = object.transactionCount ?? 0;
    message.totalIncome = object.totalIncome ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseIncomeMetricsFinancialSubProfile(): IncomeMetricsFinancialSubProfile {
  return {
    month: 0,
    incomeLastTwoWeeks: 0,
    incomeLastMonth: 0,
    incomeLastTwoMonths: 0,
    incomeLastSixMonths: 0,
    incomeLastYear: 0,
    userId: 0,
  };
}

export const IncomeMetricsFinancialSubProfile = {
  fromJSON(object: any): IncomeMetricsFinancialSubProfile {
    return {
      month: isSet(object.month) ? Number(object.month) : 0,
      incomeLastTwoWeeks: isSet(object.incomeLastTwoWeeks) ? Number(object.incomeLastTwoWeeks) : 0,
      incomeLastMonth: isSet(object.incomeLastMonth) ? Number(object.incomeLastMonth) : 0,
      incomeLastTwoMonths: isSet(object.incomeLastTwoMonths) ? Number(object.incomeLastTwoMonths) : 0,
      incomeLastSixMonths: isSet(object.incomeLastSixMonths) ? Number(object.incomeLastSixMonths) : 0,
      incomeLastYear: isSet(object.incomeLastYear) ? Number(object.incomeLastYear) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: IncomeMetricsFinancialSubProfile): unknown {
    const obj: any = {};
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    if (message.incomeLastTwoWeeks !== 0) {
      obj.incomeLastTwoWeeks = message.incomeLastTwoWeeks;
    }
    if (message.incomeLastMonth !== 0) {
      obj.incomeLastMonth = message.incomeLastMonth;
    }
    if (message.incomeLastTwoMonths !== 0) {
      obj.incomeLastTwoMonths = message.incomeLastTwoMonths;
    }
    if (message.incomeLastSixMonths !== 0) {
      obj.incomeLastSixMonths = message.incomeLastSixMonths;
    }
    if (message.incomeLastYear !== 0) {
      obj.incomeLastYear = message.incomeLastYear;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IncomeMetricsFinancialSubProfile>, I>>(
    base?: I,
  ): IncomeMetricsFinancialSubProfile {
    return IncomeMetricsFinancialSubProfile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<IncomeMetricsFinancialSubProfile>, I>>(
    object: I,
  ): IncomeMetricsFinancialSubProfile {
    const message = createBaseIncomeMetricsFinancialSubProfile();
    message.month = object.month ?? 0;
    message.incomeLastTwoWeeks = object.incomeLastTwoWeeks ?? 0;
    message.incomeLastMonth = object.incomeLastMonth ?? 0;
    message.incomeLastTwoMonths = object.incomeLastTwoMonths ?? 0;
    message.incomeLastSixMonths = object.incomeLastSixMonths ?? 0;
    message.incomeLastYear = object.incomeLastYear ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseLocationFinancialSubProfile(): LocationFinancialSubProfile {
  return {
    locationCity: "",
    transactionCount: 0,
    spentLastWeek: 0,
    spentLastTwoWeeks: 0,
    spentLastMonth: 0,
    spentLastSixMonths: 0,
    spentLastYear: 0,
    spentLastTwoYears: 0,
    userId: 0,
    month: 0,
  };
}

export const LocationFinancialSubProfile = {
  fromJSON(object: any): LocationFinancialSubProfile {
    return {
      locationCity: isSet(object.locationCity) ? String(object.locationCity) : "",
      transactionCount: isSet(object.transactionCount) ? Number(object.transactionCount) : 0,
      spentLastWeek: isSet(object.spentLastWeek) ? Number(object.spentLastWeek) : 0,
      spentLastTwoWeeks: isSet(object.spentLastTwoWeeks) ? Number(object.spentLastTwoWeeks) : 0,
      spentLastMonth: isSet(object.spentLastMonth) ? Number(object.spentLastMonth) : 0,
      spentLastSixMonths: isSet(object.spentLastSixMonths) ? Number(object.spentLastSixMonths) : 0,
      spentLastYear: isSet(object.spentLastYear) ? Number(object.spentLastYear) : 0,
      spentLastTwoYears: isSet(object.spentLastTwoYears) ? Number(object.spentLastTwoYears) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      month: isSet(object.month) ? Number(object.month) : 0,
    };
  },

  toJSON(message: LocationFinancialSubProfile): unknown {
    const obj: any = {};
    if (message.locationCity !== "") {
      obj.locationCity = message.locationCity;
    }
    if (message.transactionCount !== 0) {
      obj.transactionCount = Math.round(message.transactionCount);
    }
    if (message.spentLastWeek !== 0) {
      obj.spentLastWeek = message.spentLastWeek;
    }
    if (message.spentLastTwoWeeks !== 0) {
      obj.spentLastTwoWeeks = message.spentLastTwoWeeks;
    }
    if (message.spentLastMonth !== 0) {
      obj.spentLastMonth = message.spentLastMonth;
    }
    if (message.spentLastSixMonths !== 0) {
      obj.spentLastSixMonths = message.spentLastSixMonths;
    }
    if (message.spentLastYear !== 0) {
      obj.spentLastYear = message.spentLastYear;
    }
    if (message.spentLastTwoYears !== 0) {
      obj.spentLastTwoYears = message.spentLastTwoYears;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LocationFinancialSubProfile>, I>>(base?: I): LocationFinancialSubProfile {
    return LocationFinancialSubProfile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LocationFinancialSubProfile>, I>>(object: I): LocationFinancialSubProfile {
    const message = createBaseLocationFinancialSubProfile();
    message.locationCity = object.locationCity ?? "";
    message.transactionCount = object.transactionCount ?? 0;
    message.spentLastWeek = object.spentLastWeek ?? 0;
    message.spentLastTwoWeeks = object.spentLastTwoWeeks ?? 0;
    message.spentLastMonth = object.spentLastMonth ?? 0;
    message.spentLastSixMonths = object.spentLastSixMonths ?? 0;
    message.spentLastYear = object.spentLastYear ?? 0;
    message.spentLastTwoYears = object.spentLastTwoYears ?? 0;
    message.userId = object.userId ?? 0;
    message.month = object.month ?? 0;
    return message;
  },
};

function createBaseMerchantMetricsFinancialSubProfile(): MerchantMetricsFinancialSubProfile {
  return {
    merchantName: "",
    spentLastWeek: 0,
    spentLastTwoWeeks: 0,
    spentLastMonth: 0,
    spentLastSixMonths: 0,
    spentLastYear: 0,
    spentLastTwoYears: 0,
    userId: 0,
    month: 0,
  };
}

export const MerchantMetricsFinancialSubProfile = {
  fromJSON(object: any): MerchantMetricsFinancialSubProfile {
    return {
      merchantName: isSet(object.merchantName) ? String(object.merchantName) : "",
      spentLastWeek: isSet(object.spentLastWeek) ? Number(object.spentLastWeek) : 0,
      spentLastTwoWeeks: isSet(object.spentLastTwoWeeks) ? Number(object.spentLastTwoWeeks) : 0,
      spentLastMonth: isSet(object.spentLastMonth) ? Number(object.spentLastMonth) : 0,
      spentLastSixMonths: isSet(object.spentLastSixMonths) ? Number(object.spentLastSixMonths) : 0,
      spentLastYear: isSet(object.spentLastYear) ? Number(object.spentLastYear) : 0,
      spentLastTwoYears: isSet(object.spentLastTwoYears) ? Number(object.spentLastTwoYears) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      month: isSet(object.month) ? Number(object.month) : 0,
    };
  },

  toJSON(message: MerchantMetricsFinancialSubProfile): unknown {
    const obj: any = {};
    if (message.merchantName !== "") {
      obj.merchantName = message.merchantName;
    }
    if (message.spentLastWeek !== 0) {
      obj.spentLastWeek = message.spentLastWeek;
    }
    if (message.spentLastTwoWeeks !== 0) {
      obj.spentLastTwoWeeks = message.spentLastTwoWeeks;
    }
    if (message.spentLastMonth !== 0) {
      obj.spentLastMonth = message.spentLastMonth;
    }
    if (message.spentLastSixMonths !== 0) {
      obj.spentLastSixMonths = message.spentLastSixMonths;
    }
    if (message.spentLastYear !== 0) {
      obj.spentLastYear = message.spentLastYear;
    }
    if (message.spentLastTwoYears !== 0) {
      obj.spentLastTwoYears = message.spentLastTwoYears;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MerchantMetricsFinancialSubProfile>, I>>(
    base?: I,
  ): MerchantMetricsFinancialSubProfile {
    return MerchantMetricsFinancialSubProfile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MerchantMetricsFinancialSubProfile>, I>>(
    object: I,
  ): MerchantMetricsFinancialSubProfile {
    const message = createBaseMerchantMetricsFinancialSubProfile();
    message.merchantName = object.merchantName ?? "";
    message.spentLastWeek = object.spentLastWeek ?? 0;
    message.spentLastTwoWeeks = object.spentLastTwoWeeks ?? 0;
    message.spentLastMonth = object.spentLastMonth ?? 0;
    message.spentLastSixMonths = object.spentLastSixMonths ?? 0;
    message.spentLastYear = object.spentLastYear ?? 0;
    message.spentLastTwoYears = object.spentLastTwoYears ?? 0;
    message.userId = object.userId ?? 0;
    message.month = object.month ?? 0;
    return message;
  },
};

function createBaseMerchantMonthlyExpenditure(): MerchantMonthlyExpenditure {
  return { month: 0, merchantName: "", totalSpending: 0, userId: 0 };
}

export const MerchantMonthlyExpenditure = {
  fromJSON(object: any): MerchantMonthlyExpenditure {
    return {
      month: isSet(object.month) ? Number(object.month) : 0,
      merchantName: isSet(object.merchantName) ? String(object.merchantName) : "",
      totalSpending: isSet(object.totalSpending) ? Number(object.totalSpending) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: MerchantMonthlyExpenditure): unknown {
    const obj: any = {};
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    if (message.merchantName !== "") {
      obj.merchantName = message.merchantName;
    }
    if (message.totalSpending !== 0) {
      obj.totalSpending = message.totalSpending;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MerchantMonthlyExpenditure>, I>>(base?: I): MerchantMonthlyExpenditure {
    return MerchantMonthlyExpenditure.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MerchantMonthlyExpenditure>, I>>(object: I): MerchantMonthlyExpenditure {
    const message = createBaseMerchantMonthlyExpenditure();
    message.month = object.month ?? 0;
    message.merchantName = object.merchantName ?? "";
    message.totalSpending = object.totalSpending ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseMonthlyBalance(): MonthlyBalance {
  return { month: 0, netBalance: 0, userId: 0 };
}

export const MonthlyBalance = {
  fromJSON(object: any): MonthlyBalance {
    return {
      month: isSet(object.month) ? Number(object.month) : 0,
      netBalance: isSet(object.netBalance) ? Number(object.netBalance) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },
  
  toJSON(message: MonthlyBalance): unknown {
    const obj: any = {};
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    if (message.netBalance !== 0) {
      obj.netBalance = message.netBalance;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonthlyBalance>, I>>(base?: I): MonthlyBalance {
    return MonthlyBalance.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MonthlyBalance>, I>>(object: I): MonthlyBalance {
    const message = createBaseMonthlyBalance();
    message.month = object.month ?? 0;
    message.netBalance = object.netBalance ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseMonthlyExpenditure(): MonthlyExpenditure {
  return { month: 0, totalSpending: 0, userId: 0 };
}

export const MonthlyExpenditure = {
  fromJSON(object: any): MonthlyExpenditure {
    return {
      month: isSet(object.month) ? Number(object.month) : 0,
      totalSpending: isSet(object.totalSpending) ? Number(object.totalSpending) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: MonthlyExpenditure): unknown {
    const obj: any = {};
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    if (message.totalSpending !== 0) {
      obj.totalSpending = message.totalSpending;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonthlyExpenditure>, I>>(base?: I): MonthlyExpenditure {
    return MonthlyExpenditure.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MonthlyExpenditure>, I>>(object: I): MonthlyExpenditure {
    const message = createBaseMonthlyExpenditure();
    message.month = object.month ?? 0;
    message.totalSpending = object.totalSpending ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseMonthlyIncome(): MonthlyIncome {
  return { month: 0, totalIncome: 0, userId: 0 };
}

export const MonthlyIncome = {
  fromJSON(object: any): MonthlyIncome {
    return {
      month: isSet(object.month) ? Number(object.month) : 0,
      totalIncome: isSet(object.totalIncome) ? Number(object.totalIncome) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: MonthlyIncome): unknown {
    const obj: any = {};
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    if (message.totalIncome !== 0) {
      obj.totalIncome = message.totalIncome;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonthlyIncome>, I>>(base?: I): MonthlyIncome {
    return MonthlyIncome.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MonthlyIncome>, I>>(object: I): MonthlyIncome {
    const message = createBaseMonthlyIncome();
    message.month = object.month ?? 0;
    message.totalIncome = object.totalIncome ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseMonthlySavings(): MonthlySavings {
  return { month: 0, netSavings: 0, userId: 0 };
}

export const MonthlySavings = {
  fromJSON(object: any): MonthlySavings {
    return {
      month: isSet(object.month) ? Number(object.month) : 0,
      netSavings: isSet(object.netSavings) ? Number(object.netSavings) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: MonthlySavings): unknown {
    const obj: any = {};
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    if (message.netSavings !== 0) {
      obj.netSavings = message.netSavings;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonthlySavings>, I>>(base?: I): MonthlySavings {
    return MonthlySavings.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MonthlySavings>, I>>(object: I): MonthlySavings {
    const message = createBaseMonthlySavings();
    message.month = object.month ?? 0;
    message.netSavings = object.netSavings ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseMonthlyTotalQuantityBySecurityAndUser(): MonthlyTotalQuantityBySecurityAndUser {
  return { month: 0, securityId: "", totalQuantity: 0, userId: 0 };
}

export const MonthlyTotalQuantityBySecurityAndUser = {
  fromJSON(object: any): MonthlyTotalQuantityBySecurityAndUser {
    return {
      month: isSet(object.month) ? Number(object.month) : 0,
      securityId: isSet(object.securityId) ? String(object.securityId) : "",
      totalQuantity: isSet(object.totalQuantity) ? Number(object.totalQuantity) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: MonthlyTotalQuantityBySecurityAndUser): unknown {
    const obj: any = {};
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    if (message.securityId !== "") {
      obj.securityId = message.securityId;
    }
    if (message.totalQuantity !== 0) {
      obj.totalQuantity = message.totalQuantity;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonthlyTotalQuantityBySecurityAndUser>, I>>(
    base?: I,
  ): MonthlyTotalQuantityBySecurityAndUser {
    return MonthlyTotalQuantityBySecurityAndUser.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MonthlyTotalQuantityBySecurityAndUser>, I>>(
    object: I,
  ): MonthlyTotalQuantityBySecurityAndUser {
    const message = createBaseMonthlyTotalQuantityBySecurityAndUser();
    message.month = object.month ?? 0;
    message.securityId = object.securityId ?? "";
    message.totalQuantity = object.totalQuantity ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseMonthlyTransactionCount(): MonthlyTransactionCount {
  return { month: 0, transactionCount: 0, userId: 0 };
}

export const MonthlyTransactionCount = {
  fromJSON(object: any): MonthlyTransactionCount {
    return {
      month: isSet(object.month) ? Number(object.month) : 0,
      transactionCount: isSet(object.transactionCount) ? Number(object.transactionCount) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: MonthlyTransactionCount): unknown {
    const obj: any = {};
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    if (message.transactionCount !== 0) {
      obj.transactionCount = Math.round(message.transactionCount);
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MonthlyTransactionCount>, I>>(base?: I): MonthlyTransactionCount {
    return MonthlyTransactionCount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MonthlyTransactionCount>, I>>(object: I): MonthlyTransactionCount {
    const message = createBaseMonthlyTransactionCount();
    message.month = object.month ?? 0;
    message.transactionCount = object.transactionCount ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBasePaymentChannelMetricsFinancialSubProfile(): PaymentChannelMetricsFinancialSubProfile {
  return {
    paymentChannel: "",
    spentLastWeek: 0,
    spentLastTwoWeeks: 0,
    spentLastMonth: 0,
    spentLastSixMonths: 0,
    spentLastYear: 0,
    spentLastTwoYears: 0,
    userId: 0,
    month: 0,
    transactionCount: 0,
  };
}

export const PaymentChannelMetricsFinancialSubProfile = {
  fromJSON(object: any): PaymentChannelMetricsFinancialSubProfile {
    return {
      paymentChannel: isSet(object.paymentChannel) ? String(object.paymentChannel) : "",
      spentLastWeek: isSet(object.spentLastWeek) ? Number(object.spentLastWeek) : 0,
      spentLastTwoWeeks: isSet(object.spentLastTwoWeeks) ? Number(object.spentLastTwoWeeks) : 0,
      spentLastMonth: isSet(object.spentLastMonth) ? Number(object.spentLastMonth) : 0,
      spentLastSixMonths: isSet(object.spentLastSixMonths) ? Number(object.spentLastSixMonths) : 0,
      spentLastYear: isSet(object.spentLastYear) ? Number(object.spentLastYear) : 0,
      spentLastTwoYears: isSet(object.spentLastTwoYears) ? Number(object.spentLastTwoYears) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      month: isSet(object.month) ? Number(object.month) : 0,
      transactionCount: isSet(object.transactionCount) ? Number(object.transactionCount) : 0,
    };
  },

  toJSON(message: PaymentChannelMetricsFinancialSubProfile): unknown {
    const obj: any = {};
    if (message.paymentChannel !== "") {
      obj.paymentChannel = message.paymentChannel;
    }
    if (message.spentLastWeek !== 0) {
      obj.spentLastWeek = message.spentLastWeek;
    }
    if (message.spentLastTwoWeeks !== 0) {
      obj.spentLastTwoWeeks = message.spentLastTwoWeeks;
    }
    if (message.spentLastMonth !== 0) {
      obj.spentLastMonth = message.spentLastMonth;
    }
    if (message.spentLastSixMonths !== 0) {
      obj.spentLastSixMonths = message.spentLastSixMonths;
    }
    if (message.spentLastYear !== 0) {
      obj.spentLastYear = message.spentLastYear;
    }
    if (message.spentLastTwoYears !== 0) {
      obj.spentLastTwoYears = message.spentLastTwoYears;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    if (message.transactionCount !== 0) {
      obj.transactionCount = Math.round(message.transactionCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PaymentChannelMetricsFinancialSubProfile>, I>>(
    base?: I,
  ): PaymentChannelMetricsFinancialSubProfile {
    return PaymentChannelMetricsFinancialSubProfile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PaymentChannelMetricsFinancialSubProfile>, I>>(
    object: I,
  ): PaymentChannelMetricsFinancialSubProfile {
    const message = createBasePaymentChannelMetricsFinancialSubProfile();
    message.paymentChannel = object.paymentChannel ?? "";
    message.spentLastWeek = object.spentLastWeek ?? 0;
    message.spentLastTwoWeeks = object.spentLastTwoWeeks ?? 0;
    message.spentLastMonth = object.spentLastMonth ?? 0;
    message.spentLastSixMonths = object.spentLastSixMonths ?? 0;
    message.spentLastYear = object.spentLastYear ?? 0;
    message.spentLastTwoYears = object.spentLastTwoYears ?? 0;
    message.userId = object.userId ?? 0;
    message.month = object.month ?? 0;
    message.transactionCount = object.transactionCount ?? 0;
    return message;
  },
};

function createBasePaymentChannelMonthlyExpenditure(): PaymentChannelMonthlyExpenditure {
  return { month: 0, paymentChannel: "", totalSpending: 0, userId: 0 };
}

export const PaymentChannelMonthlyExpenditure = {
  fromJSON(object: any): PaymentChannelMonthlyExpenditure {
    return {
      month: isSet(object.month) ? Number(object.month) : 0,
      paymentChannel: isSet(object.paymentChannel) ? String(object.paymentChannel) : "",
      totalSpending: isSet(object.totalSpending) ? Number(object.totalSpending) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: PaymentChannelMonthlyExpenditure): unknown {
    const obj: any = {};
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    if (message.paymentChannel !== "") {
      obj.paymentChannel = message.paymentChannel;
    }
    if (message.totalSpending !== 0) {
      obj.totalSpending = message.totalSpending;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PaymentChannelMonthlyExpenditure>, I>>(
    base?: I,
  ): PaymentChannelMonthlyExpenditure {
    return PaymentChannelMonthlyExpenditure.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PaymentChannelMonthlyExpenditure>, I>>(
    object: I,
  ): PaymentChannelMonthlyExpenditure {
    const message = createBasePaymentChannelMonthlyExpenditure();
    message.month = object.month ?? 0;
    message.paymentChannel = object.paymentChannel ?? "";
    message.totalSpending = object.totalSpending ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseTotalInvestmentBySecurity(): TotalInvestmentBySecurity {
  return { securityId: "", totalInvestment: 0, userId: 0 };
}

export const TotalInvestmentBySecurity = {
  fromJSON(object: any): TotalInvestmentBySecurity {
    return {
      securityId: isSet(object.securityId) ? String(object.securityId) : "",
      totalInvestment: isSet(object.totalInvestment) ? Number(object.totalInvestment) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: TotalInvestmentBySecurity): unknown {
    const obj: any = {};
    if (message.securityId !== "") {
      obj.securityId = message.securityId;
    }
    if (message.totalInvestment !== 0) {
      obj.totalInvestment = message.totalInvestment;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TotalInvestmentBySecurity>, I>>(base?: I): TotalInvestmentBySecurity {
    return TotalInvestmentBySecurity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TotalInvestmentBySecurity>, I>>(object: I): TotalInvestmentBySecurity {
    const message = createBaseTotalInvestmentBySecurity();
    message.securityId = object.securityId ?? "";
    message.totalInvestment = object.totalInvestment ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseTransactionAggregatesByMonth(): TransactionAggregatesByMonth {
  return {
    month: 0,
    personalFinanceCategoryPrimary: "",
    locationCity: "",
    paymentChannel: "",
    merchantName: "",
    transactionCount: 0,
    totalAmount: 0,
    userId: 0,
  };
}

export const TransactionAggregatesByMonth = {
  fromJSON(object: any): TransactionAggregatesByMonth {
    return {
      month: isSet(object.month) ? Number(object.month) : 0,
      personalFinanceCategoryPrimary: isSet(object.personalFinanceCategoryPrimary)
        ? String(object.personalFinanceCategoryPrimary)
        : "",
      locationCity: isSet(object.locationCity) ? String(object.locationCity) : "",
      paymentChannel: isSet(object.paymentChannel) ? String(object.paymentChannel) : "",
      merchantName: isSet(object.merchantName) ? String(object.merchantName) : "",
      transactionCount: isSet(object.transactionCount) ? Number(object.transactionCount) : 0,
      totalAmount: isSet(object.totalAmount) ? Number(object.totalAmount) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: TransactionAggregatesByMonth): unknown {
    const obj: any = {};
    if (message.month !== 0) {
      obj.month = Math.round(message.month);
    }
    if (message.personalFinanceCategoryPrimary !== "") {
      obj.personalFinanceCategoryPrimary = message.personalFinanceCategoryPrimary;
    }
    if (message.locationCity !== "") {
      obj.locationCity = message.locationCity;
    }
    if (message.paymentChannel !== "") {
      obj.paymentChannel = message.paymentChannel;
    }
    if (message.merchantName !== "") {
      obj.merchantName = message.merchantName;
    }
    if (message.transactionCount !== 0) {
      obj.transactionCount = Math.round(message.transactionCount);
    }
    if (message.totalAmount !== 0) {
      obj.totalAmount = message.totalAmount;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionAggregatesByMonth>, I>>(base?: I): TransactionAggregatesByMonth {
    return TransactionAggregatesByMonth.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TransactionAggregatesByMonth>, I>>(object: I): TransactionAggregatesByMonth {
    const message = createBaseTransactionAggregatesByMonth();
    message.month = object.month ?? 0;
    message.personalFinanceCategoryPrimary = object.personalFinanceCategoryPrimary ?? "";
    message.locationCity = object.locationCity ?? "";
    message.paymentChannel = object.paymentChannel ?? "";
    message.merchantName = object.merchantName ?? "";
    message.transactionCount = object.transactionCount ?? 0;
    message.totalAmount = object.totalAmount ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseUserFinancialHealthMetricsTable(): UserFinancialHealthMetricsTable {
  return {
    time: undefined,
    userId: 0,
    monthlyIncome: 0,
    monthlyExpenses: 0,
    transactionDiversity: 0,
    debtToIncomeRatio: 0,
    overdraftFrequency: 0,
  };
}

export const UserFinancialHealthMetricsTable = {
  fromJSON(object: any): UserFinancialHealthMetricsTable {
    return {
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      monthlyIncome: isSet(object.monthlyIncome) ? Number(object.monthlyIncome) : 0,
      monthlyExpenses: isSet(object.monthlyExpenses) ? Number(object.monthlyExpenses) : 0,
      transactionDiversity: isSet(object.transactionDiversity) ? Number(object.transactionDiversity) : 0,
      debtToIncomeRatio: isSet(object.debtToIncomeRatio) ? Number(object.debtToIncomeRatio) : 0,
      overdraftFrequency: isSet(object.overdraftFrequency) ? Number(object.overdraftFrequency) : 0,
    };
  },

  toJSON(message: UserFinancialHealthMetricsTable): unknown {
    const obj: any = {};
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.monthlyIncome !== 0) {
      obj.monthlyIncome = message.monthlyIncome;
    }
    if (message.monthlyExpenses !== 0) {
      obj.monthlyExpenses = message.monthlyExpenses;
    }
    if (message.transactionDiversity !== 0) {
      obj.transactionDiversity = Math.round(message.transactionDiversity);
    }
    if (message.debtToIncomeRatio !== 0) {
      obj.debtToIncomeRatio = message.debtToIncomeRatio;
    }
    if (message.overdraftFrequency !== 0) {
      obj.overdraftFrequency = Math.round(message.overdraftFrequency);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFinancialHealthMetricsTable>, I>>(base?: I): UserFinancialHealthMetricsTable {
    return UserFinancialHealthMetricsTable.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserFinancialHealthMetricsTable>, I>>(
    object: I,
  ): UserFinancialHealthMetricsTable {
    const message = createBaseUserFinancialHealthMetricsTable();
    message.time = object.time ?? undefined;
    message.userId = object.userId ?? 0;
    message.monthlyIncome = object.monthlyIncome ?? 0;
    message.monthlyExpenses = object.monthlyExpenses ?? 0;
    message.transactionDiversity = object.transactionDiversity ?? 0;
    message.debtToIncomeRatio = object.debtToIncomeRatio ?? 0;
    message.overdraftFrequency = object.overdraftFrequency ?? 0;
    return message;
  },
};

function createBaseMelodyFinancialContext(): MelodyFinancialContext {
  return {
    categories: [],
    expenses: [],
    income: [],
    locations: [],
    merchants: [],
    paymentChannels: [],
    bankAccounts: [],
    investmentAccounts: [],
    creditAccounts: [],
    mortgageLoanAccounts: [],
    studentLoanAccounts: [],
  };
}

export const MelodyFinancialContext = {
  fromJSON(object: any): MelodyFinancialContext {
    return {
      categories: Array.isArray(object?.categories)
        ? object.categories.map((e: any) => CategoryMetricsFinancialSubProfile.fromJSON(e))
        : [],
      expenses: Array.isArray(object?.expenses)
        ? object.expenses.map((e: any) => ExpenseMetricsFinancialSubProfileMetrics.fromJSON(e))
        : [],
      income: Array.isArray(object?.income)
        ? object.income.map((e: any) => IncomeMetricsFinancialSubProfile.fromJSON(e))
        : [],
      locations: Array.isArray(object?.locations)
        ? object.locations.map((e: any) => LocationFinancialSubProfile.fromJSON(e))
        : [],
      merchants: Array.isArray(object?.merchants)
        ? object.merchants.map((e: any) => MerchantMetricsFinancialSubProfile.fromJSON(e))
        : [],
      paymentChannels: Array.isArray(object?.paymentChannels)
        ? object.paymentChannels.map((e: any) => PaymentChannelMetricsFinancialSubProfile.fromJSON(e))
        : [],
      bankAccounts: Array.isArray(object?.bankAccounts)
        ? object.bankAccounts.map((e: any) => BankAccount.fromJSON(e))
        : [],
      investmentAccounts: Array.isArray(object?.investmentAccounts)
        ? object.investmentAccounts.map((e: any) => InvestmentAccount.fromJSON(e))
        : [],
      creditAccounts: Array.isArray(object?.creditAccounts)
        ? object.creditAccounts.map((e: any) => CreditAccount.fromJSON(e))
        : [],
      mortgageLoanAccounts: Array.isArray(object?.mortgageLoanAccounts)
        ? object.mortgageLoanAccounts.map((e: any) => MortgageAccount.fromJSON(e))
        : [],
      studentLoanAccounts: Array.isArray(object?.studentLoanAccounts)
        ? object.studentLoanAccounts.map((e: any) => StudentLoanAccount.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MelodyFinancialContext): unknown {
    const obj: any = {};
    if (message.categories?.length) {
      obj.categories = message.categories.map((e) => CategoryMetricsFinancialSubProfile.toJSON(e));
    }
    if (message.expenses?.length) {
      obj.expenses = message.expenses.map((e) => ExpenseMetricsFinancialSubProfileMetrics.toJSON(e));
    }
    if (message.income?.length) {
      obj.income = message.income.map((e) => IncomeMetricsFinancialSubProfile.toJSON(e));
    }
    if (message.locations?.length) {
      obj.locations = message.locations.map((e) => LocationFinancialSubProfile.toJSON(e));
    }
    if (message.merchants?.length) {
      obj.merchants = message.merchants.map((e) => MerchantMetricsFinancialSubProfile.toJSON(e));
    }
    if (message.paymentChannels?.length) {
      obj.paymentChannels = message.paymentChannels.map((e) => PaymentChannelMetricsFinancialSubProfile.toJSON(e));
    }
    if (message.bankAccounts?.length) {
      obj.bankAccounts = message.bankAccounts.map((e) => BankAccount.toJSON(e));
    }
    if (message.investmentAccounts?.length) {
      obj.investmentAccounts = message.investmentAccounts.map((e) => InvestmentAccount.toJSON(e));
    }
    if (message.creditAccounts?.length) {
      obj.creditAccounts = message.creditAccounts.map((e) => CreditAccount.toJSON(e));
    }
    if (message.mortgageLoanAccounts?.length) {
      obj.mortgageLoanAccounts = message.mortgageLoanAccounts.map((e) => MortgageAccount.toJSON(e));
    }
    if (message.studentLoanAccounts?.length) {
      obj.studentLoanAccounts = message.studentLoanAccounts.map((e) => StudentLoanAccount.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MelodyFinancialContext>, I>>(base?: I): MelodyFinancialContext {
    return MelodyFinancialContext.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MelodyFinancialContext>, I>>(object: I): MelodyFinancialContext {
    const message = createBaseMelodyFinancialContext();
    message.categories = object.categories?.map((e) => CategoryMetricsFinancialSubProfile.fromPartial(e)) || [];
    message.expenses = object.expenses?.map((e) => ExpenseMetricsFinancialSubProfileMetrics.fromPartial(e)) || [];
    message.income = object.income?.map((e) => IncomeMetricsFinancialSubProfile.fromPartial(e)) || [];
    message.locations = object.locations?.map((e) => LocationFinancialSubProfile.fromPartial(e)) || [];
    message.merchants = object.merchants?.map((e) => MerchantMetricsFinancialSubProfile.fromPartial(e)) || [];
    message.paymentChannels =
      object.paymentChannels?.map((e) => PaymentChannelMetricsFinancialSubProfile.fromPartial(e)) || [];
    message.bankAccounts = object.bankAccounts?.map((e) => BankAccount.fromPartial(e)) || [];
    message.investmentAccounts = object.investmentAccounts?.map((e) => InvestmentAccount.fromPartial(e)) || [];
    message.creditAccounts = object.creditAccounts?.map((e) => CreditAccount.fromPartial(e)) || [];
    message.mortgageLoanAccounts = object.mortgageLoanAccounts?.map((e) => MortgageAccount.fromPartial(e)) || [];
    message.studentLoanAccounts = object.studentLoanAccounts?.map((e) => StudentLoanAccount.fromPartial(e)) || [];
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
