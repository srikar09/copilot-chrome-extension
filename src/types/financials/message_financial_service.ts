import { Timestamp } from "./timestamp";

export const protobufPackage = "financial_integration_service_api.v1";

export enum BankAccountStatus {
  BANK_ACCOUNT_STATUS_UNSPECIFIED = 0,
  BANK_ACCOUNT_STATUS_ACTIVE = 1,
  BANK_ACCOUNT_STATUS_INACTIVE = 2,
  UNRECOGNIZED = -1,
}

export function bankAccountStatusFromJSON(object: any): BankAccountStatus {
  switch (object) {
    case 0:
    case "BANK_ACCOUNT_STATUS_UNSPECIFIED":
      return BankAccountStatus.BANK_ACCOUNT_STATUS_UNSPECIFIED;
    case 1:
    case "BANK_ACCOUNT_STATUS_ACTIVE":
      return BankAccountStatus.BANK_ACCOUNT_STATUS_ACTIVE;
    case 2:
    case "BANK_ACCOUNT_STATUS_INACTIVE":
      return BankAccountStatus.BANK_ACCOUNT_STATUS_INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BankAccountStatus.UNRECOGNIZED;
  }
}

export function bankAccountStatusToJSON(object: BankAccountStatus): string {
  switch (object) {
    case BankAccountStatus.BANK_ACCOUNT_STATUS_UNSPECIFIED:
      return "BANK_ACCOUNT_STATUS_UNSPECIFIED";
    case BankAccountStatus.BANK_ACCOUNT_STATUS_ACTIVE:
      return "BANK_ACCOUNT_STATUS_ACTIVE";
    case BankAccountStatus.BANK_ACCOUNT_STATUS_INACTIVE:
      return "BANK_ACCOUNT_STATUS_INACTIVE";
    case BankAccountStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum GoalStatus {
  GOAL_STATUS_UNSPECIFIED = 0,
  GOAL_STATUS_ACTIVE = 1,
  GOAL_STATUS_INACTIVE = 2,
  GOAL_STATUS_COMPLETED = 3,
  GOAL_STATUS_DELETE = 4,
  UNRECOGNIZED = -1,
}

export function goalStatusFromJSON(object: any): GoalStatus {
  switch (object) {
    case 0:
    case "GOAL_STATUS_UNSPECIFIED":
      return GoalStatus.GOAL_STATUS_UNSPECIFIED;
    case 1:
    case "GOAL_STATUS_ACTIVE":
      return GoalStatus.GOAL_STATUS_ACTIVE;
    case 2:
    case "GOAL_STATUS_INACTIVE":
      return GoalStatus.GOAL_STATUS_INACTIVE;
    case 3:
    case "GOAL_STATUS_COMPLETED":
      return GoalStatus.GOAL_STATUS_COMPLETED;
    case 4:
    case "GOAL_STATUS_DELETE":
      return GoalStatus.GOAL_STATUS_DELETE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GoalStatus.UNRECOGNIZED;
  }
}

export function goalStatusToJSON(object: GoalStatus): string {
  switch (object) {
    case GoalStatus.GOAL_STATUS_UNSPECIFIED:
      return "GOAL_STATUS_UNSPECIFIED";
    case GoalStatus.GOAL_STATUS_ACTIVE:
      return "GOAL_STATUS_ACTIVE";
    case GoalStatus.GOAL_STATUS_INACTIVE:
      return "GOAL_STATUS_INACTIVE";
    case GoalStatus.GOAL_STATUS_COMPLETED:
      return "GOAL_STATUS_COMPLETED";
    case GoalStatus.GOAL_STATUS_DELETE:
      return "GOAL_STATUS_DELETE";
    case GoalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum GoalType {
  GOAL_TYPE_UNSPECIFIED = 0,
  GOAL_TYPE_SAVINGS = 1,
  GOAL_TYPE_INVESTMENT = 2,
  GOAL_TYPE_DEBT = 3,
  GOAL_TYPE_EXPENSE = 4,
  UNRECOGNIZED = -1,
}

export function goalTypeFromJSON(object: any): GoalType {
  switch (object) {
    case 0:
    case "GOAL_TYPE_UNSPECIFIED":
      return GoalType.GOAL_TYPE_UNSPECIFIED;
    case 1:
    case "GOAL_TYPE_SAVINGS":
      return GoalType.GOAL_TYPE_SAVINGS;
    case 2:
    case "GOAL_TYPE_INVESTMENT":
      return GoalType.GOAL_TYPE_INVESTMENT;
    case 3:
    case "GOAL_TYPE_DEBT":
      return GoalType.GOAL_TYPE_DEBT;
    case 4:
    case "GOAL_TYPE_EXPENSE":
      return GoalType.GOAL_TYPE_EXPENSE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GoalType.UNRECOGNIZED;
  }
}

export function goalTypeToJSON(object: GoalType): string {
  switch (object) {
    case GoalType.GOAL_TYPE_UNSPECIFIED:
      return "GOAL_TYPE_UNSPECIFIED";
    case GoalType.GOAL_TYPE_SAVINGS:
      return "GOAL_TYPE_SAVINGS";
    case GoalType.GOAL_TYPE_INVESTMENT:
      return "GOAL_TYPE_INVESTMENT";
    case GoalType.GOAL_TYPE_DEBT:
      return "GOAL_TYPE_DEBT";
    case GoalType.GOAL_TYPE_EXPENSE:
      return "GOAL_TYPE_EXPENSE";
    case GoalType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PocketType {
  POCKET_TYPE_UNSPECIFIED = 0,
  POCKET_TYPE_DISCRETIONARY_SPENDING = 1,
  POCKET_TYPE_FUN_MONEY = 2,
  POCKET_TYPE_DEBT_REDUCTION = 3,
  POCKET_TYPE_EMERGENCY_FUND = 4,
  POCKET_TYPE_INVESTMENT = 5,
  POCKET_TYPE_SHORT_TERM_SAVINGS = 6,
  POCKET_TYPE_LONG_TERM_SAVINGS = 7,
  UNRECOGNIZED = -1,
}

export function pocketTypeFromJSON(object: any): PocketType {
  switch (object) {
    case 0:
    case "POCKET_TYPE_UNSPECIFIED":
      return PocketType.POCKET_TYPE_UNSPECIFIED;
    case 1:
    case "POCKET_TYPE_DISCRETIONARY_SPENDING":
      return PocketType.POCKET_TYPE_DISCRETIONARY_SPENDING;
    case 2:
    case "POCKET_TYPE_FUN_MONEY":
      return PocketType.POCKET_TYPE_FUN_MONEY;
    case 3:
    case "POCKET_TYPE_DEBT_REDUCTION":
      return PocketType.POCKET_TYPE_DEBT_REDUCTION;
    case 4:
    case "POCKET_TYPE_EMERGENCY_FUND":
      return PocketType.POCKET_TYPE_EMERGENCY_FUND;
    case 5:
    case "POCKET_TYPE_INVESTMENT":
      return PocketType.POCKET_TYPE_INVESTMENT;
    case 6:
    case "POCKET_TYPE_SHORT_TERM_SAVINGS":
      return PocketType.POCKET_TYPE_SHORT_TERM_SAVINGS;
    case 7:
    case "POCKET_TYPE_LONG_TERM_SAVINGS":
      return PocketType.POCKET_TYPE_LONG_TERM_SAVINGS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PocketType.UNRECOGNIZED;
  }
}

export function pocketTypeToJSON(object: PocketType): string {
  switch (object) {
    case PocketType.POCKET_TYPE_UNSPECIFIED:
      return "POCKET_TYPE_UNSPECIFIED";
    case PocketType.POCKET_TYPE_DISCRETIONARY_SPENDING:
      return "POCKET_TYPE_DISCRETIONARY_SPENDING";
    case PocketType.POCKET_TYPE_FUN_MONEY:
      return "POCKET_TYPE_FUN_MONEY";
    case PocketType.POCKET_TYPE_DEBT_REDUCTION:
      return "POCKET_TYPE_DEBT_REDUCTION";
    case PocketType.POCKET_TYPE_EMERGENCY_FUND:
      return "POCKET_TYPE_EMERGENCY_FUND";
    case PocketType.POCKET_TYPE_INVESTMENT:
      return "POCKET_TYPE_INVESTMENT";
    case PocketType.POCKET_TYPE_SHORT_TERM_SAVINGS:
      return "POCKET_TYPE_SHORT_TERM_SAVINGS";
    case PocketType.POCKET_TYPE_LONG_TERM_SAVINGS:
      return "POCKET_TYPE_LONG_TERM_SAVINGS";
    case PocketType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum BankAccountType {
  BANK_ACCOUNT_TYPE_UNSPECIFIED = 0,
  BANK_ACCOUNT_TYPE_PLAID = 1,
  BANK_ACCOUNT_TYPE_MANUAL = 2,
  UNRECOGNIZED = -1,
}

export function bankAccountTypeFromJSON(object: any): BankAccountType {
  switch (object) {
    case 0:
    case "BANK_ACCOUNT_TYPE_UNSPECIFIED":
      return BankAccountType.BANK_ACCOUNT_TYPE_UNSPECIFIED;
    case 1:
    case "BANK_ACCOUNT_TYPE_PLAID":
      return BankAccountType.BANK_ACCOUNT_TYPE_PLAID;
    case 2:
    case "BANK_ACCOUNT_TYPE_MANUAL":
      return BankAccountType.BANK_ACCOUNT_TYPE_MANUAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BankAccountType.UNRECOGNIZED;
  }
}

export function bankAccountTypeToJSON(object: BankAccountType): string {
  switch (object) {
    case BankAccountType.BANK_ACCOUNT_TYPE_UNSPECIFIED:
      return "BANK_ACCOUNT_TYPE_UNSPECIFIED";
    case BankAccountType.BANK_ACCOUNT_TYPE_PLAID:
      return "BANK_ACCOUNT_TYPE_PLAID";
    case BankAccountType.BANK_ACCOUNT_TYPE_MANUAL:
      return "BANK_ACCOUNT_TYPE_MANUAL";
    case BankAccountType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum StripeSubscriptionStatus {
  STRIPE_SUBSCRIPTION_STATUS_UNSPECIFIED = 0,
  STRIPE_SUBSCRIPTION_STATUS_TRIALING = 1,
  STRIPE_SUBSCRIPTION_STATUS_ACTIVE = 2,
  STRIPE_SUBSCRIPTION_STATUS_PAST_DUE = 3,
  STRIPE_SUBSCRIPTION_STATUS_CANCELED = 4,
  STRIPE_SUBSCRIPTION_STATUS_UNPAID = 5,
  STRIPE_SUBSCRIPTION_STATUS_COMPLETE = 6,
  STRIPE_SUBSCRIPTION_STATUS_INCOMPLETE = 7,
  STRIPE_SUBSCRIPTION_STATUS_INCOMPLETE_EXPIRED = 8,
  STRIPE_SUBSCRIPTION_STATUS_CREATED = 9,
  STRIPE_SUBSCRIPTION_STATUS_PAUSED = 10,
  UNRECOGNIZED = -1,
}

export function stripeSubscriptionStatusFromJSON(object: any): StripeSubscriptionStatus {
  switch (object) {
    case 0:
    case "STRIPE_SUBSCRIPTION_STATUS_UNSPECIFIED":
      return StripeSubscriptionStatus.STRIPE_SUBSCRIPTION_STATUS_UNSPECIFIED;
    case 1:
    case "STRIPE_SUBSCRIPTION_STATUS_TRIALING":
      return StripeSubscriptionStatus.STRIPE_SUBSCRIPTION_STATUS_TRIALING;
    case 2:
    case "STRIPE_SUBSCRIPTION_STATUS_ACTIVE":
      return StripeSubscriptionStatus.STRIPE_SUBSCRIPTION_STATUS_ACTIVE;
    case 3:
    case "STRIPE_SUBSCRIPTION_STATUS_PAST_DUE":
      return StripeSubscriptionStatus.STRIPE_SUBSCRIPTION_STATUS_PAST_DUE;
    case 4:
    case "STRIPE_SUBSCRIPTION_STATUS_CANCELED":
      return StripeSubscriptionStatus.STRIPE_SUBSCRIPTION_STATUS_CANCELED;
    case 5:
    case "STRIPE_SUBSCRIPTION_STATUS_UNPAID":
      return StripeSubscriptionStatus.STRIPE_SUBSCRIPTION_STATUS_UNPAID;
    case 6:
    case "STRIPE_SUBSCRIPTION_STATUS_COMPLETE":
      return StripeSubscriptionStatus.STRIPE_SUBSCRIPTION_STATUS_COMPLETE;
    case 7:
    case "STRIPE_SUBSCRIPTION_STATUS_INCOMPLETE":
      return StripeSubscriptionStatus.STRIPE_SUBSCRIPTION_STATUS_INCOMPLETE;
    case 8:
    case "STRIPE_SUBSCRIPTION_STATUS_INCOMPLETE_EXPIRED":
      return StripeSubscriptionStatus.STRIPE_SUBSCRIPTION_STATUS_INCOMPLETE_EXPIRED;
    case 9:
    case "STRIPE_SUBSCRIPTION_STATUS_CREATED":
      return StripeSubscriptionStatus.STRIPE_SUBSCRIPTION_STATUS_CREATED;
    case 10:
    case "STRIPE_SUBSCRIPTION_STATUS_PAUSED":
      return StripeSubscriptionStatus.STRIPE_SUBSCRIPTION_STATUS_PAUSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StripeSubscriptionStatus.UNRECOGNIZED;
  }
}

export function stripeSubscriptionStatusToJSON(object: StripeSubscriptionStatus): string {
  switch (object) {
    case StripeSubscriptionStatus.STRIPE_SUBSCRIPTION_STATUS_UNSPECIFIED:
      return "STRIPE_SUBSCRIPTION_STATUS_UNSPECIFIED";
    case StripeSubscriptionStatus.STRIPE_SUBSCRIPTION_STATUS_TRIALING:
      return "STRIPE_SUBSCRIPTION_STATUS_TRIALING";
    case StripeSubscriptionStatus.STRIPE_SUBSCRIPTION_STATUS_ACTIVE:
      return "STRIPE_SUBSCRIPTION_STATUS_ACTIVE";
    case StripeSubscriptionStatus.STRIPE_SUBSCRIPTION_STATUS_PAST_DUE:
      return "STRIPE_SUBSCRIPTION_STATUS_PAST_DUE";
    case StripeSubscriptionStatus.STRIPE_SUBSCRIPTION_STATUS_CANCELED:
      return "STRIPE_SUBSCRIPTION_STATUS_CANCELED";
    case StripeSubscriptionStatus.STRIPE_SUBSCRIPTION_STATUS_UNPAID:
      return "STRIPE_SUBSCRIPTION_STATUS_UNPAID";
    case StripeSubscriptionStatus.STRIPE_SUBSCRIPTION_STATUS_COMPLETE:
      return "STRIPE_SUBSCRIPTION_STATUS_COMPLETE";
    case StripeSubscriptionStatus.STRIPE_SUBSCRIPTION_STATUS_INCOMPLETE:
      return "STRIPE_SUBSCRIPTION_STATUS_INCOMPLETE";
    case StripeSubscriptionStatus.STRIPE_SUBSCRIPTION_STATUS_INCOMPLETE_EXPIRED:
      return "STRIPE_SUBSCRIPTION_STATUS_INCOMPLETE_EXPIRED";
    case StripeSubscriptionStatus.STRIPE_SUBSCRIPTION_STATUS_CREATED:
      return "STRIPE_SUBSCRIPTION_STATUS_CREATED";
    case StripeSubscriptionStatus.STRIPE_SUBSCRIPTION_STATUS_PAUSED:
      return "STRIPE_SUBSCRIPTION_STATUS_PAUSED";
    case StripeSubscriptionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum LinkStatus {
  LINK_STATUS_UNSPECIFIED = 0,
  LINK_STATUS_SETUP = 1,
  LINK_STATUS_PENDING = 2,
  LINK_STATUS_ERROR = 3,
  LINK_STATUS_SUCCESS = 4,
  LINK_STATUS_PENDING_EXPIRATION = 5,
  LINK_STATUS_REVOKED = 6,
  LINK_STATUS_ITEM_LOGIN_REQUIRED = 7,
  UNRECOGNIZED = -1,
}

export function linkStatusFromJSON(object: any): LinkStatus {
  switch (object) {
    case 0:
    case "LINK_STATUS_UNSPECIFIED":
      return LinkStatus.LINK_STATUS_UNSPECIFIED;
    case 1:
    case "LINK_STATUS_SETUP":
      return LinkStatus.LINK_STATUS_SETUP;
    case 2:
    case "LINK_STATUS_PENDING":
      return LinkStatus.LINK_STATUS_PENDING;
    case 3:
    case "LINK_STATUS_ERROR":
      return LinkStatus.LINK_STATUS_ERROR;
    case 4:
    case "LINK_STATUS_SUCCESS":
      return LinkStatus.LINK_STATUS_SUCCESS;
    case 5:
    case "LINK_STATUS_PENDING_EXPIRATION":
      return LinkStatus.LINK_STATUS_PENDING_EXPIRATION;
    case 6:
    case "LINK_STATUS_REVOKED":
      return LinkStatus.LINK_STATUS_REVOKED;
    case 7:
    case "LINK_STATUS_ITEM_LOGIN_REQUIRED":
      return LinkStatus.LINK_STATUS_ITEM_LOGIN_REQUIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LinkStatus.UNRECOGNIZED;
  }
}

export function linkStatusToJSON(object: LinkStatus): string {
  switch (object) {
    case LinkStatus.LINK_STATUS_UNSPECIFIED:
      return "LINK_STATUS_UNSPECIFIED";
    case LinkStatus.LINK_STATUS_SETUP:
      return "LINK_STATUS_SETUP";
    case LinkStatus.LINK_STATUS_PENDING:
      return "LINK_STATUS_PENDING";
    case LinkStatus.LINK_STATUS_ERROR:
      return "LINK_STATUS_ERROR";
    case LinkStatus.LINK_STATUS_SUCCESS:
      return "LINK_STATUS_SUCCESS";
    case LinkStatus.LINK_STATUS_PENDING_EXPIRATION:
      return "LINK_STATUS_PENDING_EXPIRATION";
    case LinkStatus.LINK_STATUS_REVOKED:
      return "LINK_STATUS_REVOKED";
    case LinkStatus.LINK_STATUS_ITEM_LOGIN_REQUIRED:
      return "LINK_STATUS_ITEM_LOGIN_REQUIRED";
    case LinkStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum LinkType {
  LINK_TYPE_UNSPECIFIED = 0,
  LINK_TYPE_PLAID = 1,
  LINK_TYPE_MANUAL = 2,
  UNRECOGNIZED = -1,
}

export function linkTypeFromJSON(object: any): LinkType {
  switch (object) {
    case 0:
    case "LINK_TYPE_UNSPECIFIED":
      return LinkType.LINK_TYPE_UNSPECIFIED;
    case 1:
    case "LINK_TYPE_PLAID":
      return LinkType.LINK_TYPE_PLAID;
    case 2:
    case "LINK_TYPE_MANUAL":
      return LinkType.LINK_TYPE_MANUAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LinkType.UNRECOGNIZED;
  }
}

export function linkTypeToJSON(object: LinkType): string {
  switch (object) {
    case LinkType.LINK_TYPE_UNSPECIFIED:
      return "LINK_TYPE_UNSPECIFIED";
    case LinkType.LINK_TYPE_PLAID:
      return "LINK_TYPE_PLAID";
    case LinkType.LINK_TYPE_MANUAL:
      return "LINK_TYPE_MANUAL";
    case LinkType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** StripeSubscription stores high level stripe subscription details of which the user profile has */
export interface StripeSubscription {
  id: number;
  /** stripe subscription id tied to the customer */
  stripeSubscriptionId: string;
  /** stripe subscription status */
  stripeSubscriptionStatus: StripeSubscriptionStatus;
  /** stripe subscription active until */
  stripeSubscriptionActiveUntil: string;
  /** stripe webhook latest timestamp */
  stripeWebhookLatestTimestamp: string;
  /** wether the subscription is trialing */
  isTrialing: boolean;
}

/**
 * UserProfile stores high level user profile details
 * such as the id, user_id tied to the profile, and many more
 */
export interface UserProfile {
  /** id */
  id: number;
  /** the user id tied to the profile */
  userId: number;
  stripeCustomerId: string;
  /** the stripe subscriptions the user profile actively maintains */
  stripeSubscriptions:
    | StripeSubscription
    | undefined;
  /** a user profile can have many links (connected institutions) of which finanical accounts are tied to (checking, savings, etc) */
  link: Link[];
  actionableInsights: ActionableInsight[];
}

/**
 * An actionable insight serves as a basic insight users
 * can leverage and act upon and is typically generated based off of their financial contexts
 */
export interface ActionableInsight {
  id: number;
  /** for each user we generate a detailed actionable insights for them to see */
  detailedAction: string;
  /** for each user we generate a summarized insight targeted at optimizing a certain condition */
  summarizedAction: string;
  /** the time the insight was generated */
  generatedTime:
   | string
    | undefined;
  /** associated tags with the generated insights */
  tags: string[];
}

/**
 * A Link represents a login at a financial institution. A single end-user of your application might have accounts at different financial
 * institutions, which means they would have multiple different Items. An Item is not the same as a financial institution account,
 * although every account will be associated with an Item. For example, if a user has one login at their bank that allows them to access
 * both their checking account and their savings account, a single Item would be associated with both of those accounts. Each Item
 * linked within your application will have a corresponding access_token, which is a token that you can use to make API requests related
 * to that specific Item.
 * Two Items created for the same set of credentials at the same institution will be considered different and not share the same item_id.
 */
export interface Link {
  /** id */
  id: number;
  plaidSync: PlaidSync | undefined;
  linkStatus: LinkStatus;
  plaidLink: PlaidLink | undefined;
  plaidNewAccountsAvailable: boolean;
  expirationDate: string;
  institutionName: string;
  customInstitutionName: string;
  description: string;
  lastManualSync: string;
  lastSuccessfulUpdate: string;
  /**
   * token object witholds an access token which is a token used to make API requests related to a specific Item. You will typically obtain an access_token
   * by calling /item/public_token/exchange. For more details, see the Token exchange flow. An access_token does not expire,
   * although it may require updating, such as when a user changes their password, or when working with European institutions
   * that comply with PSD2's 90-day consent window. For more information, see When to use update mode.
   * Access tokens should always be stored securely, and associated with the user whose data they represent.
   * If compromised, an access_token can be rotated via /item/access_token/invalidate. If no longer needed,
   * it can be revoked via /item/remove.(gorm.field).has_one = {disable_association_autocreate: false disable_association_autoupdate: false preload: true}];
   */
  token:
    | Token
    | undefined;
  /**
   * a link event - or client login event can have many connected bank accounts
   * for example a log in link against one instition like chase can have many account (checking and savings)
   * it is important though to ensure that if a link against an instition already exists, we dont fascilitate duplicated
   */
  bankAccounts: BankAccount[];
  /**
   * a link event - or client login event can have many connected investment accounts
   * for example a log in link against one instition like fidelity can have many accounts (401k and investment account)
   * it is important though to ensure that if a link against an instition already exists, we dont fascilitate duplicated
   */
  investmentAccounts: InvestmentAccount[];
  /** credit accounts tied to a user */
  creditAccounts: CreditAccount[];
  /** mortgage accounts tied to a user */
  mortgageAccounts: MortgageAccount[];
  /** student loan accounts tied to a link */
  studentLoanAccounts: StudentLoanAccount[];
  /** the id of the institution this link is tied to and against */
  plaidInstitutionId: string;
  /** the type of link this is ... can be either a manual or plaid link type */
  linkType: LinkType;
  errorCode: string;
  updatedAt: string;
  newAccountsAvailable: boolean;
  shouldBeUpdated: boolean;
}

export interface RefinedLink {
    /** id */
    id: number;
    plaidSync: PlaidSync | undefined;
    linkStatus: LinkStatus;
    plaidLink: PlaidLink | undefined;
    plaidNewAccountsAvailable: boolean;
    expirationDate: string;
    institutionName: string;
    customInstitutionName: string;
    description: string;
    lastManualSync: string;
    lastSuccessfulUpdate: string;
    /**
     * token object witholds an access token which is a token used to make API requests related to a specific Item. You will typically obtain an access_token
     * by calling /item/public_token/exchange. For more details, see the Token exchange flow. An access_token does not expire,
     * although it may require updating, such as when a user changes their password, or when working with European institutions
     * that comply with PSD2's 90-day consent window. For more information, see When to use update mode.
     * Access tokens should always be stored securely, and associated with the user whose data they represent.
     * If compromised, an access_token can be rotated via /item/access_token/invalidate. If no longer needed,
     * it can be revoked via /item/remove.(gorm.field).has_one = {disable_association_autocreate: false disable_association_autoupdate: false preload: true}];
     */
    token:
      | Token
      | undefined;
    /**
     * a link event - or client login event can have many connected bank accounts
     * for example a log in link against one instition like chase can have many account (checking and savings)
     * it is important though to ensure that if a link against an instition already exists, we dont fascilitate duplicated
     */
    bankAccounts: BankAccount[];
    /**
     * a link event - or client login event can have many connected investment accounts
     * for example a log in link against one instition like fidelity can have many accounts (401k and investment account)
     * it is important though to ensure that if a link against an instition already exists, we dont fascilitate duplicated
     */
    investmentAccounts: RefinedInvestmentAccount[];
    /** credit accounts tied to a user */
    creditAccounts: RefinedCreditAccount[];
    /** mortgage accounts tied to a user */
    mortgageAccounts: MortgageAccount[];
    /** student loan accounts tied to a link */
    studentLoanAccounts: StudentLoanAccount[];
    /** the id of the institution this link is tied to and against */
    plaidInstitutionId: string;
    /** the type of link this is ... can be either a manual or plaid link type */
    linkType: LinkType;
    errorCode: string;
    updatedAt: string;
    newAccountsAvailable: boolean;
    shouldBeUpdated: boolean;
}

export interface PlaidSync {
  /** id */
  id: number;
  timeStamp: string;
  trigger: string;
  nextCursor: string;
  added: number;
  removed: number;
  modified: number;
}

export interface Token {
  /** id */
  id: number;
  /** the id of the item the token is tied to */
  itemId: string;
  keyId: string;
  accessToken: string;
  version: string;
}

export interface PlaidLink {
  /** id */
  id: number;
  products: string[];
  webhookUrl: string;
  institutionId: string;
  institutionName: string;
  usePlaidSync: boolean;
  itemId: string;
}

export interface StudentLoanAccount {
  /** id */
  id: number;
  plaidAccountId: string;
  disbursementDates: string[];
  expectedPayoffDate: string;
  guarantor: string;
  interestRatePercentage: number;
  isOverdue: boolean;
  lastPaymentAmount: number;
  lastPaymentDate: string;
  lastStatementIssueDate: string;
  loanName: string;
  loanEndDate: string;
  minimumPaymentAmount: number;
  nextPaymentDueDate: string;
  originationDate: string;
  originationPrincipalAmount: number;
  outstandingInterestAmount: number;
  paymentReferenceNumber: string;
  sequenceNumber: string;
  ytdInterestPaid: number;
  ytdPrincipalPaid: number;
  loanType: string;
  pslfStatusEstimatedEligibilityDate: string;
  pslfStatusPaymentsMade: number;
  pslfStatusPaymentsRemaining: number;
  repaymentPlanType: string;
  repaymentPlanDescription: string;
  servicerAddressCity: string;
  servicerAddressPostalCode: string;
  servicerAddressState: string;
  servicerAddressStreet: string;
  servicerAddressRegion: string;
  servicerAddressCountry: string;
  /** the user id to which this bank account is tied to */
  userId: number;
  /** the account name */
  name: string;
}

export interface CreditAccount {
  /** id */
  id: number;
  /** the user id to which this bank account is tied to */
  userId: number;
  /** the account name */
  name: string;
  /** the bank account number */
  number: string;
  /** the bank account type */
  type: string;
  /** the bank account balance */
  balance: number;
  /** current funds on the account */
  currentFunds: number;
  /** balance limit */
  balanceLimit: number;
  /** plaid account id mapped to this bank account */
  plaidAccountId: string;
  /** accoint subtype */
  subtype: string;
  /** wether the account is overdue */
  isOverdue: boolean;
  /** the last payment amount */
  lastPaymentAmount: number;
  /** the last payment date */
  lastPaymentDate: string;
  /** the last statement issue date */
  lastStatementIssueDate: string;
  /** the minimum amount due date */
  minimumAmountDueDate: number;
  /** the next payment date */
  nextPaymentDate: string;
  /** the aprs */
  aprs: Apr[];
  /** the last statement balance */
  lastStatementBalance: number;
  /** the minimum payment amount */
  minimumPaymentAmount: number;
  /** the next payment due date */
  nextPaymentDueDate: string;
}

/*
  A type to represent the credit account types that get passed to gpt prompt
  The transformed version of credit account. Needs to be refined for token length reasons and also to name the fields properly
*/ 
export interface RefinedCreditAccount {
  /** id */
  id: number;
  /** the user id to which this bank account is tied to */
  userId: number;
  /** the account name */
  name: string;
  /** the bank account number */
  number: string;
  /** the bank account type */
  type: string;
  /** current funds on the account */
  currentFunds: number;
  /** balance limit */
  balanceLimit: number;
  /** plaid account id mapped to this bank account */
  plaidAccountId: string;
  /** accoint subtype */
  subtype: string;
  /** wether the account is overdue */
  isOverdue: boolean;
  /** the last payment amount */
  lastPaymentAmount: number;
  /** the last payment date */
  lastPaymentDate: string;
  /** the last statement issue date */
  lastStatementIssueDate: string;
  /** the minimum amount due date */
  minimumAmountDueDate: number;
  /** the next payment date */
  nextPaymentDate: string;
  /** the aprs */
  aprs: Apr[];
  /** the last statement balance */
  lastStatementBalance: number;
  /** the minimum payment amount */
  minimumPaymentAmount: number;
  /** the next payment due date */
  nextPaymentDueDate: string;
}

export interface MortgageAccount {
  id: number;
  plaidAccountId: string;
  accountNumber: string;
  currentLateFee: number;
  escrowBalance: number;
  hasPmi: boolean;
  hasPrepaymentPenalty: boolean;
  lastPaymentAmount: number;
  lastPaymentDate: string;
  loanTerm: string;
  loanTypeDescription: string;
  maturityDate: string;
  nextMonthlyPayment: number;
  nextPaymentDueDate: string;
  originalPrincipalBalance: number;
  originalPropertyValue: number;
  outstandingPrincipalBalance: number;
  paymentAmount: number;
  paymentDate: string;
  originationDate: string;
  originationPrincipalAmount: number;
  pastDueAmount: number;
  ytdInterestPaid: number;
  ytdPrincipalPaid: number;
  propertyAddressCity: string;
  propertyAddressState: string;
  propertyAddressStreet: string;
  propertyAddressPostalCode: string;
  propertyRegion: string;
  propertyCountry: string;
  interestRatePercentage: number;
  interestRateType: string;
}

export interface InvestmentAccount {
  /** id */
  id: number;
  /** the user id to which this bank account is tied to */
  userId: number;
  /** the account name */
  name: string;
  /** the bank account number */
  number: string;
  /** the bank account type */
  type: string;
  /** the bank account balance */
  balance: number;
  currentFunds: number;
  balanceLimit: number;
  /** plaid account id mapped to this bank account */
  plaidAccountId: string;
  /** accoint subtype */
  subtype: string;
  /** invesment holding is the set of securities this account witholds */
  holdings: InvesmentHolding[];
  /** the set of securities this account witholds */
  securities: InvestmentSecurity[];
}

export interface RefinedInvestmentAccount {
  /** id */
  id: number;
  /** the user id to which this bank account is tied to */
  userId: number;
  /** the account name */
  name: string;
  /** the bank account number */
  number: string;
  /** the bank account type */
  type: string;

  currentFunds: number;
  balanceLimit: number;
  /** plaid account id mapped to this bank account */
  plaidAccountId: string;
  /** accoint subtype */
  subtype: string;
  /** invesment holding is the set of securities this account witholds */
  holdings: RefinedInvesmentHolding[];
  /** the set of securities this account witholds */
  securities: RefinedInvestmentSecurity[];
}



export interface BankAccount {
  /** id */
  id: number;
  /** the user id to which this bank account is tied to */
  userId: number;
  /** the bank account name */
  name: string;
  /** the bank account number */
  number: string;
  /** the bank account type */
  type: BankAccountType;
  /** the bank account balance */
  balance: number;
  /** the bank account currency */
  currency: string;
  currentFunds: number;
  balanceLimit: number;
  /**
   * the set of "virtualized accounts this user witholds"
   * NOTE: these pockets are automatically created by the system
   * when a user connects a bank account
   */
  pockets: Pocket[];
  /** plaid account id mapped to this bank account */
  plaidAccountId: string;
  /** account subtype */
  subtype: string;
  /** the bank account status */
  status: BankAccountStatus;
}

/**
 * Pocket is an abstraction of a over a bank account. A user can has at most 4 pockets per connected account
 * NOTE: these pockets are automatically created by the system and should not be exposed for mutation
 * by any client. The only operations that can be performed against a pocket are:
 * 1. Get the pocket
 * 2. Get the pocket's smart goals
 * 3. Adding a smart goal to the pocket
 */
export interface Pocket {
  /** id */
  id: number;
  /** the set of smart goals this user witholds */
  goals: SmartGoal[];
  /** The type of the pocket */
  type: PocketType;
}

/**
 * SmartGoal: The Goals table stores information about each financial goal, including the name of the goal,
 * its description, the target amount of money the user wants to save or invest, and the expected date of completion.
 *
 * The Goals table also includes columns for the start date of the goal, the current amount of money saved or
 * invested towards the goal, and a boolean flag indicating whether the goal has been achieved.
 * These additional columns allow the user to track their progress towards the goal and see how much
 * more they need to save or invest to reach their target amount.
 */
export interface SmartGoal {
  /** id */
  id: number;
  /** the user id to which this goal is tied to */
  userId: number;
  /**
   * The name of the goal
   * Validations:
   * - must be at least 3 characters long
   */
  name: string;
  /**
   * The description of the goal
   * Validations:
   * - must be at least 3 characters long
   */
  description: string;
  /** wether the goal has been achieved or not */
  isCompleted: boolean;
  /** The type of the goal */
  goalType: GoalType;
  /** The duration of the goal */
  duration: string;
  /** the start date of the goal */
  startDate: string;
  /** the end date of the goal */
  endDate: string;
  /**
   * the target amount of the goal
   * amount of money the user wants to save or invest
   */
  targetAmount: string;
  /**
   * the current amount of the goal
   * current amount of money saved or invested towards the goal
   */
  currentAmount: string;
  /** Milestones associated with the goal */
  milestones: Milestone[];
  /** Forecasts associated with the goal */
  forecasts: Forecast | undefined;
}

/**
 * The Forecast table stores information about each forecast generated for a particular goal,
 * including the forecast date, the forecasted amount of money saved or invested for the
 * goal by the target date, and the variance between the forecasted and target amounts.
 * This allows the user to track how well they are progressing towards their goal and make adjustments as needed.
 */
export interface Forecast {
  /** id */
  id: number;
  /** the forecasted amount of the goal */
  forecastedAmount: string;
  /** the forecasted completion date of the goal */
  forecastedCompletionDate: string;
  /** the forecasted variance of the goal between the forecasted and target amounts */
  varianceAmount: string;
}

/**
 * Milestone: represents a milestone in the context of simfinni. A financial milestone that is both smart
 * and achievable. A milestone is a sub goal of a goal and is tied to a goal by the goal id
 */
export interface Milestone {
  /** id */
  id: number;
  /**
   * The name of the milestone
   * Validations:
   * - must be at least 3 characters long
   */
  name: string;
  /**
   * The description of the miletone
   * Validations:
   * - must be at least 3 characters long
   */
  description: string;
  /**
   * the target date of the milestone
   * Validations:
   * - must be at least 3 characters long
   */
  targetDate: string;
  /** the target amount of the milestone */
  targetAmount: string;
  /** wethe milestone is completed or not */
  isCompleted: boolean;
  /** the budget associated with the milestone */
  budget: Budget | undefined;
}

/**
 * The Budgets table stores information about each budget created by the user,
 * including the name of the budget, the start and end dates, and the user ID.
 */
export interface Budget {
  /** id */
  id: number;
  /** The name of the budget */
  name: string;
  description: string;
  /** the time the goal was created */
  startDate: string;
  /** the time the goal was updated */
  endDate: string;
  /** category associated with the goal */
  category: Category | undefined;
}

/**
 * The Categories table stores information about the different categories of expenses or income,
 * such as "Housing", "Food", "Transportation", and "Entertainment". Each category has one or more
 * subcategories, which are stored in the Subcategories table.
 *
 * For example, the "Housing" category might have subcategories for "Rent", "Utilities", and "Home Maintenance".
 */
export interface Category {
  /** id */
  id: number;
  /** The name of the category */
  name: string;
  /** The description of the category */
  description: string;
  /** the sub categories of the category */
  subcategories: string[];
}

export interface InvesmentHolding {
  /** id */
  id: number;
  /** The name of the investment holding */
  name: string;
  /** plaid account id */
  plaidAccountId: string;
  costBasis: number;
  institutionPrice: number;
  institutionPriceAsOf: string;
  institutionPriceDatetime: string;
  institutionValue: number;
  isoCurrencyCode: string;
  quantity: number;
  securityId: string;
  unofficialCurrencyCode: string;
}

export interface RefinedInvesmentHolding{
  costBasis: number;
  institutionPrice: number;
  institutionPriceAsOf: string;
  isoCurrencyCode: string;
  quantity: number;
}

export interface InvestmentSecurity {
  /** id */
  id: number;
  closePrice: number;
  closePriceAsOf: string;
  cusip: string;
  institutionId: string;
  institutionSecurityId: string;
  isCashEquivalent: boolean;
  isin: string;
  isoCurrencyCode: string;
  name: string;
  proxySecurityId: string;
  securityId: string;
  sedol: string;
  tickerSymbol: string;
  type: string;
  unofficialCurrencyCode: string;
  updateDatetime: string;
}

export interface RefinedInvestmentSecurity{
  tickerSymbol: string,
  type: string, 
  closePrice: number;
  closePriceAsOf: string;
  cusip: string; 
  isCashEquivalent:boolean,
  isoCurrencyCode: string,
  name: string
}

export interface Apr {
  id: number;
  percentage: number;
  type: string;
  balanceSubjectToApr: number;
  interestChargeAmount: number;
}

function createBaseStripeSubscription(): StripeSubscription {
  return {
    id: 0,
    stripeSubscriptionId: "",
    stripeSubscriptionStatus: 0,
    stripeSubscriptionActiveUntil: "",
    stripeWebhookLatestTimestamp: "",
    isTrialing: false,
  };
}

export const StripeSubscription = {
  fromJSON(object: any): StripeSubscription {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      stripeSubscriptionId: isSet(object.stripeSubscriptionId) ? String(object.stripeSubscriptionId) : "",
      stripeSubscriptionStatus: isSet(object.stripeSubscriptionStatus)
        ? stripeSubscriptionStatusFromJSON(object.stripeSubscriptionStatus)
        : 0,
      stripeSubscriptionActiveUntil: isSet(object.stripeSubscriptionActiveUntil)
        ? String(object.stripeSubscriptionActiveUntil)
        : "",
      stripeWebhookLatestTimestamp: isSet(object.stripeWebhookLatestTimestamp)
        ? String(object.stripeWebhookLatestTimestamp)
        : "",
      isTrialing: isSet(object.isTrialing) ? Boolean(object.isTrialing) : false,
    };
  },

  toJSON(message: StripeSubscription): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.stripeSubscriptionId !== "") {
      obj.stripeSubscriptionId = message.stripeSubscriptionId;
    }
    if (message.stripeSubscriptionStatus !== 0) {
      obj.stripeSubscriptionStatus = stripeSubscriptionStatusToJSON(message.stripeSubscriptionStatus);
    }
    if (message.stripeSubscriptionActiveUntil !== "") {
      obj.stripeSubscriptionActiveUntil = message.stripeSubscriptionActiveUntil;
    }
    if (message.stripeWebhookLatestTimestamp !== "") {
      obj.stripeWebhookLatestTimestamp = message.stripeWebhookLatestTimestamp;
    }
    if (message.isTrialing === true) {
      obj.isTrialing = message.isTrialing;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StripeSubscription>, I>>(base?: I): StripeSubscription {
    return StripeSubscription.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StripeSubscription>, I>>(object: I): StripeSubscription {
    const message = createBaseStripeSubscription();
    message.id = object.id ?? 0;
    message.stripeSubscriptionId = object.stripeSubscriptionId ?? "";
    message.stripeSubscriptionStatus = object.stripeSubscriptionStatus ?? 0;
    message.stripeSubscriptionActiveUntil = object.stripeSubscriptionActiveUntil ?? "";
    message.stripeWebhookLatestTimestamp = object.stripeWebhookLatestTimestamp ?? "";
    message.isTrialing = object.isTrialing ?? false;
    return message;
  },
};

function createBaseUserProfile(): UserProfile {
  return { id: 0, userId: 0, stripeCustomerId: "", stripeSubscriptions: undefined, link: [], actionableInsights: [] };
}

export const UserProfile = {
  fromJSON(object: any): UserProfile {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      stripeCustomerId: isSet(object.stripeCustomerId) ? String(object.stripeCustomerId) : "",
      stripeSubscriptions: isSet(object.stripeSubscriptions)
        ? StripeSubscription.fromJSON(object.stripeSubscriptions)
        : undefined,
      link: Array.isArray(object?.link) ? object.link.map((e: any) => Link.fromJSON(e)) : [],
      actionableInsights: Array.isArray(object?.actionableInsights)
        ? object.actionableInsights.map((e: any) => ActionableInsight.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UserProfile): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.stripeCustomerId !== "") {
      obj.stripeCustomerId = message.stripeCustomerId;
    }
    if (message.stripeSubscriptions !== undefined) {
      obj.stripeSubscriptions = StripeSubscription.toJSON(message.stripeSubscriptions);
    }
    if (message.link?.length) {
      obj.link = message.link.map((e) => Link.toJSON(e));
    }
    if (message.actionableInsights?.length) {
      obj.actionableInsights = message.actionableInsights.map((e) => ActionableInsight.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserProfile>, I>>(base?: I): UserProfile {
    return UserProfile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserProfile>, I>>(object: I): UserProfile {
    const message = createBaseUserProfile();
    message.id = object.id ?? 0;
    message.userId = object.userId ?? 0;
    message.stripeCustomerId = object.stripeCustomerId ?? "";
    message.stripeSubscriptions = (object.stripeSubscriptions !== undefined && object.stripeSubscriptions !== null)
      ? StripeSubscription.fromPartial(object.stripeSubscriptions)
      : undefined;
    message.link = object.link?.map((e) => Link.fromPartial(e)) || [];
    message.actionableInsights = object.actionableInsights?.map((e) => ActionableInsight.fromPartial(e)) || [];
    return message;
  },
};

function createBaseActionableInsight(): ActionableInsight {
  return { id: 0, detailedAction: "", summarizedAction: "", generatedTime: undefined, tags: [] };
}

export const ActionableInsight = {
  fromJSON(object: any): ActionableInsight {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      detailedAction: isSet(object.detailedAction) ? String(object.detailedAction) : "",
      summarizedAction: isSet(object.summarizedAction) ? String(object.summarizedAction) : "",
      generatedTime: isSet(object.generatedTime) ? object.generatedTime : undefined,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ActionableInsight): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.detailedAction !== "") {
      obj.detailedAction = message.detailedAction;
    }
    if (message.summarizedAction !== "") {
      obj.summarizedAction = message.summarizedAction;
    }
    if (message.generatedTime !== undefined) {
      obj.generatedTime = message.generatedTime;
    }
    if (message.tags?.length) {
      obj.tags = message.tags;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActionableInsight>, I>>(base?: I): ActionableInsight {
    return ActionableInsight.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ActionableInsight>, I>>(object: I): ActionableInsight {
    const message = createBaseActionableInsight();
    message.id = object.id ?? 0;
    message.detailedAction = object.detailedAction ?? "";
    message.summarizedAction = object.summarizedAction ?? "";
    message.generatedTime = object.generatedTime ?? undefined;
    message.tags = object.tags?.map((e) => e) || [];
    return message;
  },
};

function createBaseLink(): Link {
  return {
    id: 0,
    plaidSync: undefined,
    linkStatus: 0,
    plaidLink: undefined,
    plaidNewAccountsAvailable: false,
    expirationDate: "",
    institutionName: "",
    customInstitutionName: "",
    description: "",
    lastManualSync: "",
    lastSuccessfulUpdate: "",
    token: undefined,
    bankAccounts: [],
    investmentAccounts: [],
    creditAccounts: [],
    mortgageAccounts: [],
    studentLoanAccounts: [],
    plaidInstitutionId: "",
    linkType: 0,
    errorCode: "",
    updatedAt: "",
    newAccountsAvailable: false,
    shouldBeUpdated: false,
  };
}

export const Link = {
  fromJSON(object: any): Link {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      plaidSync: isSet(object.plaidSync) ? PlaidSync.fromJSON(object.plaidSync) : undefined,
      linkStatus: isSet(object.linkStatus) ? linkStatusFromJSON(object.linkStatus) : 0,
      plaidLink: isSet(object.plaidLink) ? PlaidLink.fromJSON(object.plaidLink) : undefined,
      plaidNewAccountsAvailable: isSet(object.plaidNewAccountsAvailable)
        ? Boolean(object.plaidNewAccountsAvailable)
        : false,
      expirationDate: isSet(object.expirationDate) ? String(object.expirationDate) : "",
      institutionName: isSet(object.institutionName) ? String(object.institutionName) : "",
      customInstitutionName: isSet(object.customInstitutionName) ? String(object.customInstitutionName) : "",
      description: isSet(object.description) ? String(object.description) : "",
      lastManualSync: isSet(object.lastManualSync) ? String(object.lastManualSync) : "",
      lastSuccessfulUpdate: isSet(object.lastSuccessfulUpdate) ? String(object.lastSuccessfulUpdate) : "",
      token: isSet(object.token) ? Token.fromJSON(object.token) : undefined,
      bankAccounts: Array.isArray(object?.bankAccounts)
        ? object.bankAccounts.map((e: any) => BankAccount.fromJSON(e))
        : [],
      investmentAccounts: Array.isArray(object?.investmentAccounts)
        ? object.investmentAccounts.map((e: any) => InvestmentAccount.fromJSON(e))
        : [],
      creditAccounts: Array.isArray(object?.creditAccounts)
        ? object.creditAccounts.map((e: any) => CreditAccount.fromJSON(e))
        : [],
      mortgageAccounts: Array.isArray(object?.mortgageAccounts)
        ? object.mortgageAccounts.map((e: any) => MortgageAccount.fromJSON(e))
        : [],
      studentLoanAccounts: Array.isArray(object?.studentLoanAccounts)
        ? object.studentLoanAccounts.map((e: any) => StudentLoanAccount.fromJSON(e))
        : [],
      plaidInstitutionId: isSet(object.plaidInstitutionId) ? String(object.plaidInstitutionId) : "",
      linkType: isSet(object.linkType) ? linkTypeFromJSON(object.linkType) : 0,
      errorCode: isSet(object.errorCode) ? String(object.errorCode) : "",
      updatedAt: isSet(object.updatedAt) ? String(object.updatedAt) : "",
      newAccountsAvailable: isSet(object.newAccountsAvailable) ? Boolean(object.newAccountsAvailable) : false,
      shouldBeUpdated: isSet(object.shouldBeUpdated) ? Boolean(object.shouldBeUpdated) : false,
    };
  },

  toJSON(message: Link): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.plaidSync !== undefined) {
      obj.plaidSync = PlaidSync.toJSON(message.plaidSync);
    }
    if (message.linkStatus !== 0) {
      obj.linkStatus = linkStatusToJSON(message.linkStatus);
    }
    if (message.plaidLink !== undefined) {
      obj.plaidLink = PlaidLink.toJSON(message.plaidLink);
    }
    if (message.plaidNewAccountsAvailable === true) {
      obj.plaidNewAccountsAvailable = message.plaidNewAccountsAvailable;
    }
    if (message.expirationDate !== "") {
      obj.expirationDate = message.expirationDate;
    }
    if (message.institutionName !== "") {
      obj.institutionName = message.institutionName;
    }
    if (message.customInstitutionName !== "") {
      obj.customInstitutionName = message.customInstitutionName;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.lastManualSync !== "") {
      obj.lastManualSync = message.lastManualSync;
    }
    if (message.lastSuccessfulUpdate !== "") {
      obj.lastSuccessfulUpdate = message.lastSuccessfulUpdate;
    }
    if (message.token !== undefined) {
      obj.token = Token.toJSON(message.token);
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
    if (message.mortgageAccounts?.length) {
      obj.mortgageAccounts = message.mortgageAccounts.map((e) => MortgageAccount.toJSON(e));
    }
    if (message.studentLoanAccounts?.length) {
      obj.studentLoanAccounts = message.studentLoanAccounts.map((e) => StudentLoanAccount.toJSON(e));
    }
    if (message.plaidInstitutionId !== "") {
      obj.plaidInstitutionId = message.plaidInstitutionId;
    }
    if (message.linkType !== 0) {
      obj.linkType = linkTypeToJSON(message.linkType);
    }
    if (message.errorCode !== "") {
      obj.errorCode = message.errorCode;
    }
    if (message.updatedAt !== "") {
      obj.updatedAt = message.updatedAt;
    }
    if (message.newAccountsAvailable === true) {
      obj.newAccountsAvailable = message.newAccountsAvailable;
    }
    if (message.shouldBeUpdated === true) {
      obj.shouldBeUpdated = message.shouldBeUpdated;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Link>, I>>(base?: I): Link {
    return Link.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Link>, I>>(object: I): Link {
    const message = createBaseLink();
    message.id = object.id ?? 0;
    message.plaidSync = (object.plaidSync !== undefined && object.plaidSync !== null)
      ? PlaidSync.fromPartial(object.plaidSync)
      : undefined;
    message.linkStatus = object.linkStatus ?? 0;
    message.plaidLink = (object.plaidLink !== undefined && object.plaidLink !== null)
      ? PlaidLink.fromPartial(object.plaidLink)
      : undefined;
    message.plaidNewAccountsAvailable = object.plaidNewAccountsAvailable ?? false;
    message.expirationDate = object.expirationDate ?? "";
    message.institutionName = object.institutionName ?? "";
    message.customInstitutionName = object.customInstitutionName ?? "";
    message.description = object.description ?? "";
    message.lastManualSync = object.lastManualSync ?? "";
    message.lastSuccessfulUpdate = object.lastSuccessfulUpdate ?? "";
    message.token = (object.token !== undefined && object.token !== null) ? Token.fromPartial(object.token) : undefined;
    message.bankAccounts = object.bankAccounts?.map((e) => BankAccount.fromPartial(e)) || [];
    message.investmentAccounts = object.investmentAccounts?.map((e) => InvestmentAccount.fromPartial(e)) || [];
    message.creditAccounts = object.creditAccounts?.map((e) => CreditAccount.fromPartial(e)) || [];
    message.mortgageAccounts = object.mortgageAccounts?.map((e) => MortgageAccount.fromPartial(e)) || [];
    message.studentLoanAccounts = object.studentLoanAccounts?.map((e) => StudentLoanAccount.fromPartial(e)) || [];
    message.plaidInstitutionId = object.plaidInstitutionId ?? "";
    message.linkType = object.linkType ?? 0;
    message.errorCode = object.errorCode ?? "";
    message.updatedAt = object.updatedAt ?? "";
    message.newAccountsAvailable = object.newAccountsAvailable ?? false;
    message.shouldBeUpdated = object.shouldBeUpdated ?? false;
    return message;
  },
};

function createBasePlaidSync(): PlaidSync {
  return { id: 0, timeStamp: "", trigger: "", nextCursor: "", added: 0, removed: 0, modified: 0 };
}

export const PlaidSync = {
  fromJSON(object: any): PlaidSync {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      timeStamp: isSet(object.timeStamp) ? String(object.timeStamp) : "",
      trigger: isSet(object.trigger) ? String(object.trigger) : "",
      nextCursor: isSet(object.nextCursor) ? String(object.nextCursor) : "",
      added: isSet(object.added) ? Number(object.added) : 0,
      removed: isSet(object.removed) ? Number(object.removed) : 0,
      modified: isSet(object.modified) ? Number(object.modified) : 0,
    };
  },

  toJSON(message: PlaidSync): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.timeStamp !== "") {
      obj.timeStamp = message.timeStamp;
    }
    if (message.trigger !== "") {
      obj.trigger = message.trigger;
    }
    if (message.nextCursor !== "") {
      obj.nextCursor = message.nextCursor;
    }
    if (message.added !== 0) {
      obj.added = Math.round(message.added);
    }
    if (message.removed !== 0) {
      obj.removed = Math.round(message.removed);
    }
    if (message.modified !== 0) {
      obj.modified = Math.round(message.modified);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlaidSync>, I>>(base?: I): PlaidSync {
    return PlaidSync.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PlaidSync>, I>>(object: I): PlaidSync {
    const message = createBasePlaidSync();
    message.id = object.id ?? 0;
    message.timeStamp = object.timeStamp ?? "";
    message.trigger = object.trigger ?? "";
    message.nextCursor = object.nextCursor ?? "";
    message.added = object.added ?? 0;
    message.removed = object.removed ?? 0;
    message.modified = object.modified ?? 0;
    return message;
  },
};

function createBaseToken(): Token {
  return { id: 0, itemId: "", keyId: "", accessToken: "", version: "" };
}

export const Token = {
  fromJSON(object: any): Token {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      itemId: isSet(object.itemId) ? String(object.itemId) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
      version: isSet(object.version) ? String(object.version) : "",
    };
  },

  toJSON(message: Token): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.itemId !== "") {
      obj.itemId = message.itemId;
    }
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.accessToken !== "") {
      obj.accessToken = message.accessToken;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Token>, I>>(base?: I): Token {
    return Token.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Token>, I>>(object: I): Token {
    const message = createBaseToken();
    message.id = object.id ?? 0;
    message.itemId = object.itemId ?? "";
    message.keyId = object.keyId ?? "";
    message.accessToken = object.accessToken ?? "";
    message.version = object.version ?? "";
    return message;
  },
};

function createBasePlaidLink(): PlaidLink {
  return {
    id: 0,
    products: [],
    webhookUrl: "",
    institutionId: "",
    institutionName: "",
    usePlaidSync: false,
    itemId: "",
  };
}

export const PlaidLink = {
  fromJSON(object: any): PlaidLink {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      products: Array.isArray(object?.products) ? object.products.map((e: any) => String(e)) : [],
      webhookUrl: isSet(object.webhookUrl) ? String(object.webhookUrl) : "",
      institutionId: isSet(object.institutionId) ? String(object.institutionId) : "",
      institutionName: isSet(object.institutionName) ? String(object.institutionName) : "",
      usePlaidSync: isSet(object.usePlaidSync) ? Boolean(object.usePlaidSync) : false,
      itemId: isSet(object.itemId) ? String(object.itemId) : "",
    };
  },

  toJSON(message: PlaidLink): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.products?.length) {
      obj.products = message.products;
    }
    if (message.webhookUrl !== "") {
      obj.webhookUrl = message.webhookUrl;
    }
    if (message.institutionId !== "") {
      obj.institutionId = message.institutionId;
    }
    if (message.institutionName !== "") {
      obj.institutionName = message.institutionName;
    }
    if (message.usePlaidSync === true) {
      obj.usePlaidSync = message.usePlaidSync;
    }
    if (message.itemId !== "") {
      obj.itemId = message.itemId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PlaidLink>, I>>(base?: I): PlaidLink {
    return PlaidLink.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PlaidLink>, I>>(object: I): PlaidLink {
    const message = createBasePlaidLink();
    message.id = object.id ?? 0;
    message.products = object.products?.map((e) => e) || [];
    message.webhookUrl = object.webhookUrl ?? "";
    message.institutionId = object.institutionId ?? "";
    message.institutionName = object.institutionName ?? "";
    message.usePlaidSync = object.usePlaidSync ?? false;
    message.itemId = object.itemId ?? "";
    return message;
  },
};

function createBaseStudentLoanAccount(): StudentLoanAccount {
  return {
    id: 0,
    plaidAccountId: "",
    disbursementDates: [],
    expectedPayoffDate: "",
    guarantor: "",
    interestRatePercentage: 0,
    isOverdue: false,
    lastPaymentAmount: 0,
    lastPaymentDate: "",
    lastStatementIssueDate: "",
    loanName: "",
    loanEndDate: "",
    minimumPaymentAmount: 0,
    nextPaymentDueDate: "",
    originationDate: "",
    originationPrincipalAmount: 0,
    outstandingInterestAmount: 0,
    paymentReferenceNumber: "",
    sequenceNumber: "",
    ytdInterestPaid: 0,
    ytdPrincipalPaid: 0,
    loanType: "",
    pslfStatusEstimatedEligibilityDate: "",
    pslfStatusPaymentsMade: 0,
    pslfStatusPaymentsRemaining: 0,
    repaymentPlanType: "",
    repaymentPlanDescription: "",
    servicerAddressCity: "",
    servicerAddressPostalCode: "",
    servicerAddressState: "",
    servicerAddressStreet: "",
    servicerAddressRegion: "",
    servicerAddressCountry: "",
    userId: 0,
    name: "",
  };
}

export const StudentLoanAccount = {
  fromJSON(object: any): StudentLoanAccount {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      plaidAccountId: isSet(object.plaidAccountId) ? String(object.plaidAccountId) : "",
      disbursementDates: Array.isArray(object?.disbursementDates)
        ? object.disbursementDates.map((e: any) => String(e))
        : [],
      expectedPayoffDate: isSet(object.expectedPayoffDate) ? String(object.expectedPayoffDate) : "",
      guarantor: isSet(object.guarantor) ? String(object.guarantor) : "",
      interestRatePercentage: isSet(object.interestRatePercentage) ? Number(object.interestRatePercentage) : 0,
      isOverdue: isSet(object.isOverdue) ? Boolean(object.isOverdue) : false,
      lastPaymentAmount: isSet(object.lastPaymentAmount) ? Number(object.lastPaymentAmount) : 0,
      lastPaymentDate: isSet(object.lastPaymentDate) ? String(object.lastPaymentDate) : "",
      lastStatementIssueDate: isSet(object.lastStatementIssueDate) ? String(object.lastStatementIssueDate) : "",
      loanName: isSet(object.loanName) ? String(object.loanName) : "",
      loanEndDate: isSet(object.loanEndDate) ? String(object.loanEndDate) : "",
      minimumPaymentAmount: isSet(object.minimumPaymentAmount) ? Number(object.minimumPaymentAmount) : 0,
      nextPaymentDueDate: isSet(object.nextPaymentDueDate) ? String(object.nextPaymentDueDate) : "",
      originationDate: isSet(object.originationDate) ? String(object.originationDate) : "",
      originationPrincipalAmount: isSet(object.originationPrincipalAmount)
        ? Number(object.originationPrincipalAmount)
        : 0,
      outstandingInterestAmount: isSet(object.outstandingInterestAmount) ? Number(object.outstandingInterestAmount) : 0,
      paymentReferenceNumber: isSet(object.paymentReferenceNumber) ? String(object.paymentReferenceNumber) : "",
      sequenceNumber: isSet(object.sequenceNumber) ? String(object.sequenceNumber) : "",
      ytdInterestPaid: isSet(object.ytdInterestPaid) ? Number(object.ytdInterestPaid) : 0,
      ytdPrincipalPaid: isSet(object.ytdPrincipalPaid) ? Number(object.ytdPrincipalPaid) : 0,
      loanType: isSet(object.loanType) ? String(object.loanType) : "",
      pslfStatusEstimatedEligibilityDate: isSet(object.pslfStatusEstimatedEligibilityDate)
        ? String(object.pslfStatusEstimatedEligibilityDate)
        : "",
      pslfStatusPaymentsMade: isSet(object.pslfStatusPaymentsMade) ? Number(object.pslfStatusPaymentsMade) : 0,
      pslfStatusPaymentsRemaining: isSet(object.pslfStatusPaymentsRemaining)
        ? Number(object.pslfStatusPaymentsRemaining)
        : 0,
      repaymentPlanType: isSet(object.repaymentPlanType) ? String(object.repaymentPlanType) : "",
      repaymentPlanDescription: isSet(object.repaymentPlanDescription) ? String(object.repaymentPlanDescription) : "",
      servicerAddressCity: isSet(object.servicerAddressCity) ? String(object.servicerAddressCity) : "",
      servicerAddressPostalCode: isSet(object.servicerAddressPostalCode)
        ? String(object.servicerAddressPostalCode)
        : "",
      servicerAddressState: isSet(object.servicerAddressState) ? String(object.servicerAddressState) : "",
      servicerAddressStreet: isSet(object.servicerAddressStreet) ? String(object.servicerAddressStreet) : "",
      servicerAddressRegion: isSet(object.servicerAddressRegion) ? String(object.servicerAddressRegion) : "",
      servicerAddressCountry: isSet(object.servicerAddressCountry) ? String(object.servicerAddressCountry) : "",
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: StudentLoanAccount): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.plaidAccountId !== "") {
      obj.plaidAccountId = message.plaidAccountId;
    }
    if (message.disbursementDates?.length) {
      obj.disbursementDates = message.disbursementDates;
    }
    if (message.expectedPayoffDate !== "") {
      obj.expectedPayoffDate = message.expectedPayoffDate;
    }
    if (message.guarantor !== "") {
      obj.guarantor = message.guarantor;
    }
    if (message.interestRatePercentage !== 0) {
      obj.interestRatePercentage = message.interestRatePercentage;
    }
    if (message.isOverdue === true) {
      obj.isOverdue = message.isOverdue;
    }
    if (message.lastPaymentAmount !== 0) {
      obj.lastPaymentAmount = message.lastPaymentAmount;
    }
    if (message.lastPaymentDate !== "") {
      obj.lastPaymentDate = message.lastPaymentDate;
    }
    if (message.lastStatementIssueDate !== "") {
      obj.lastStatementIssueDate = message.lastStatementIssueDate;
    }
    if (message.loanName !== "") {
      obj.loanName = message.loanName;
    }
    if (message.loanEndDate !== "") {
      obj.loanEndDate = message.loanEndDate;
    }
    if (message.minimumPaymentAmount !== 0) {
      obj.minimumPaymentAmount = message.minimumPaymentAmount;
    }
    if (message.nextPaymentDueDate !== "") {
      obj.nextPaymentDueDate = message.nextPaymentDueDate;
    }
    if (message.originationDate !== "") {
      obj.originationDate = message.originationDate;
    }
    if (message.originationPrincipalAmount !== 0) {
      obj.originationPrincipalAmount = message.originationPrincipalAmount;
    }
    if (message.outstandingInterestAmount !== 0) {
      obj.outstandingInterestAmount = message.outstandingInterestAmount;
    }
    if (message.paymentReferenceNumber !== "") {
      obj.paymentReferenceNumber = message.paymentReferenceNumber;
    }
    if (message.sequenceNumber !== "") {
      obj.sequenceNumber = message.sequenceNumber;
    }
    if (message.ytdInterestPaid !== 0) {
      obj.ytdInterestPaid = message.ytdInterestPaid;
    }
    if (message.ytdPrincipalPaid !== 0) {
      obj.ytdPrincipalPaid = message.ytdPrincipalPaid;
    }
    if (message.loanType !== "") {
      obj.loanType = message.loanType;
    }
    if (message.pslfStatusEstimatedEligibilityDate !== "") {
      obj.pslfStatusEstimatedEligibilityDate = message.pslfStatusEstimatedEligibilityDate;
    }
    if (message.pslfStatusPaymentsMade !== 0) {
      obj.pslfStatusPaymentsMade = Math.round(message.pslfStatusPaymentsMade);
    }
    if (message.pslfStatusPaymentsRemaining !== 0) {
      obj.pslfStatusPaymentsRemaining = Math.round(message.pslfStatusPaymentsRemaining);
    }
    if (message.repaymentPlanType !== "") {
      obj.repaymentPlanType = message.repaymentPlanType;
    }
    if (message.repaymentPlanDescription !== "") {
      obj.repaymentPlanDescription = message.repaymentPlanDescription;
    }
    if (message.servicerAddressCity !== "") {
      obj.servicerAddressCity = message.servicerAddressCity;
    }
    if (message.servicerAddressPostalCode !== "") {
      obj.servicerAddressPostalCode = message.servicerAddressPostalCode;
    }
    if (message.servicerAddressState !== "") {
      obj.servicerAddressState = message.servicerAddressState;
    }
    if (message.servicerAddressStreet !== "") {
      obj.servicerAddressStreet = message.servicerAddressStreet;
    }
    if (message.servicerAddressRegion !== "") {
      obj.servicerAddressRegion = message.servicerAddressRegion;
    }
    if (message.servicerAddressCountry !== "") {
      obj.servicerAddressCountry = message.servicerAddressCountry;
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StudentLoanAccount>, I>>(base?: I): StudentLoanAccount {
    return StudentLoanAccount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StudentLoanAccount>, I>>(object: I): StudentLoanAccount {
    const message = createBaseStudentLoanAccount();
    message.id = object.id ?? 0;
    message.plaidAccountId = object.plaidAccountId ?? "";
    message.disbursementDates = object.disbursementDates?.map((e) => e) || [];
    message.expectedPayoffDate = object.expectedPayoffDate ?? "";
    message.guarantor = object.guarantor ?? "";
    message.interestRatePercentage = object.interestRatePercentage ?? 0;
    message.isOverdue = object.isOverdue ?? false;
    message.lastPaymentAmount = object.lastPaymentAmount ?? 0;
    message.lastPaymentDate = object.lastPaymentDate ?? "";
    message.lastStatementIssueDate = object.lastStatementIssueDate ?? "";
    message.loanName = object.loanName ?? "";
    message.loanEndDate = object.loanEndDate ?? "";
    message.minimumPaymentAmount = object.minimumPaymentAmount ?? 0;
    message.nextPaymentDueDate = object.nextPaymentDueDate ?? "";
    message.originationDate = object.originationDate ?? "";
    message.originationPrincipalAmount = object.originationPrincipalAmount ?? 0;
    message.outstandingInterestAmount = object.outstandingInterestAmount ?? 0;
    message.paymentReferenceNumber = object.paymentReferenceNumber ?? "";
    message.sequenceNumber = object.sequenceNumber ?? "";
    message.ytdInterestPaid = object.ytdInterestPaid ?? 0;
    message.ytdPrincipalPaid = object.ytdPrincipalPaid ?? 0;
    message.loanType = object.loanType ?? "";
    message.pslfStatusEstimatedEligibilityDate = object.pslfStatusEstimatedEligibilityDate ?? "";
    message.pslfStatusPaymentsMade = object.pslfStatusPaymentsMade ?? 0;
    message.pslfStatusPaymentsRemaining = object.pslfStatusPaymentsRemaining ?? 0;
    message.repaymentPlanType = object.repaymentPlanType ?? "";
    message.repaymentPlanDescription = object.repaymentPlanDescription ?? "";
    message.servicerAddressCity = object.servicerAddressCity ?? "";
    message.servicerAddressPostalCode = object.servicerAddressPostalCode ?? "";
    message.servicerAddressState = object.servicerAddressState ?? "";
    message.servicerAddressStreet = object.servicerAddressStreet ?? "";
    message.servicerAddressRegion = object.servicerAddressRegion ?? "";
    message.servicerAddressCountry = object.servicerAddressCountry ?? "";
    message.userId = object.userId ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCreditAccount(): CreditAccount {
  return {
    id: 0,
    userId: 0,
    name: "",
    number: "",
    type: "",
    balance: 0,
    currentFunds: 0,
    balanceLimit: 0,
    plaidAccountId: "",
    subtype: "",
    isOverdue: false,
    lastPaymentAmount: 0,
    lastPaymentDate: "",
    lastStatementIssueDate: "",
    minimumAmountDueDate: 0,
    nextPaymentDate: "",
    aprs: [],
    lastStatementBalance: 0,
    minimumPaymentAmount: 0,
    nextPaymentDueDate: "",
  };
}

export const CreditAccount = {
  fromJSON(object: any): CreditAccount {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      number: isSet(object.number) ? String(object.number) : "",
      type: isSet(object.type) ? String(object.type) : "",
      balance: isSet(object.balance) ? Number(object.balance) : 0,
      currentFunds: isSet(object.currentFunds) ? Number(object.currentFunds) : 0,
      balanceLimit: isSet(object.balanceLimit) ? Number(object.balanceLimit) : 0,
      plaidAccountId: isSet(object.plaidAccountId) ? String(object.plaidAccountId) : "",
      subtype: isSet(object.subtype) ? String(object.subtype) : "",
      isOverdue: isSet(object.isOverdue) ? Boolean(object.isOverdue) : false,
      lastPaymentAmount: isSet(object.lastPaymentAmount) ? Number(object.lastPaymentAmount) : 0,
      lastPaymentDate: isSet(object.lastPaymentDate) ? String(object.lastPaymentDate) : "",
      lastStatementIssueDate: isSet(object.lastStatementIssueDate) ? String(object.lastStatementIssueDate) : "",
      minimumAmountDueDate: isSet(object.minimumAmountDueDate) ? Number(object.minimumAmountDueDate) : 0,
      nextPaymentDate: isSet(object.nextPaymentDate) ? String(object.nextPaymentDate) : "",
      aprs: Array.isArray(object?.aprs) ? object.aprs.map((e: any) => Apr.fromJSON(e)) : [],
      lastStatementBalance: isSet(object.lastStatementBalance) ? Number(object.lastStatementBalance) : 0,
      minimumPaymentAmount: isSet(object.minimumPaymentAmount) ? Number(object.minimumPaymentAmount) : 0,
      nextPaymentDueDate: isSet(object.nextPaymentDueDate) ? String(object.nextPaymentDueDate) : "",
    };
  },

  toJSON(message: CreditAccount): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.number !== "") {
      obj.number = message.number;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.balance !== 0) {
      obj.balance = message.balance;
    }
    if (message.currentFunds !== 0) {
      obj.currentFunds = message.currentFunds;
    }
    if (message.balanceLimit !== 0) {
      obj.balanceLimit = Math.round(message.balanceLimit);
    }
    if (message.plaidAccountId !== "") {
      obj.plaidAccountId = message.plaidAccountId;
    }
    if (message.subtype !== "") {
      obj.subtype = message.subtype;
    }
    if (message.isOverdue === true) {
      obj.isOverdue = message.isOverdue;
    }
    if (message.lastPaymentAmount !== 0) {
      obj.lastPaymentAmount = message.lastPaymentAmount;
    }
    if (message.lastPaymentDate !== "") {
      obj.lastPaymentDate = message.lastPaymentDate;
    }
    if (message.lastStatementIssueDate !== "") {
      obj.lastStatementIssueDate = message.lastStatementIssueDate;
    }
    if (message.minimumAmountDueDate !== 0) {
      obj.minimumAmountDueDate = message.minimumAmountDueDate;
    }
    if (message.nextPaymentDate !== "") {
      obj.nextPaymentDate = message.nextPaymentDate;
    }
    if (message.aprs?.length) {
      obj.aprs = message.aprs.map((e) => Apr.toJSON(e));
    }
    if (message.lastStatementBalance !== 0) {
      obj.lastStatementBalance = message.lastStatementBalance;
    }
    if (message.minimumPaymentAmount !== 0) {
      obj.minimumPaymentAmount = message.minimumPaymentAmount;
    }
    if (message.nextPaymentDueDate !== "") {
      obj.nextPaymentDueDate = message.nextPaymentDueDate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreditAccount>, I>>(base?: I): CreditAccount {
    return CreditAccount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreditAccount>, I>>(object: I): CreditAccount {
    const message = createBaseCreditAccount();
    message.id = object.id ?? 0;
    message.userId = object.userId ?? 0;
    message.name = object.name ?? "";
    message.number = object.number ?? "";
    message.type = object.type ?? "";
    message.balance = object.balance ?? 0;
    message.currentFunds = object.currentFunds ?? 0;
    message.balanceLimit = object.balanceLimit ?? 0;
    message.plaidAccountId = object.plaidAccountId ?? "";
    message.subtype = object.subtype ?? "";
    message.isOverdue = object.isOverdue ?? false;
    message.lastPaymentAmount = object.lastPaymentAmount ?? 0;
    message.lastPaymentDate = object.lastPaymentDate ?? "";
    message.lastStatementIssueDate = object.lastStatementIssueDate ?? "";
    message.minimumAmountDueDate = object.minimumAmountDueDate ?? 0;
    message.nextPaymentDate = object.nextPaymentDate ?? "";
    message.aprs = object.aprs?.map((e) => Apr.fromPartial(e)) || [];
    message.lastStatementBalance = object.lastStatementBalance ?? 0;
    message.minimumPaymentAmount = object.minimumPaymentAmount ?? 0;
    message.nextPaymentDueDate = object.nextPaymentDueDate ?? "";
    return message;
  },
};

function createBaseMortgageAccount(): MortgageAccount {
  return {
    id: 0,
    plaidAccountId: "",
    accountNumber: "",
    currentLateFee: 0,
    escrowBalance: 0,
    hasPmi: false,
    hasPrepaymentPenalty: false,
    lastPaymentAmount: 0,
    lastPaymentDate: "",
    loanTerm: "",
    loanTypeDescription: "",
    maturityDate: "",
    nextMonthlyPayment: 0,
    nextPaymentDueDate: "",
    originalPrincipalBalance: 0,
    originalPropertyValue: 0,
    outstandingPrincipalBalance: 0,
    paymentAmount: 0,
    paymentDate: "",
    originationDate: "",
    originationPrincipalAmount: 0,
    pastDueAmount: 0,
    ytdInterestPaid: 0,
    ytdPrincipalPaid: 0,
    propertyAddressCity: "",
    propertyAddressState: "",
    propertyAddressStreet: "",
    propertyAddressPostalCode: "",
    propertyRegion: "",
    propertyCountry: "",
    interestRatePercentage: 0,
    interestRateType: "",
  };
}

export const MortgageAccount = {
  fromJSON(object: any): MortgageAccount {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      plaidAccountId: isSet(object.plaidAccountId) ? String(object.plaidAccountId) : "",
      accountNumber: isSet(object.accountNumber) ? String(object.accountNumber) : "",
      currentLateFee: isSet(object.currentLateFee) ? Number(object.currentLateFee) : 0,
      escrowBalance: isSet(object.escrowBalance) ? Number(object.escrowBalance) : 0,
      hasPmi: isSet(object.hasPmi) ? Boolean(object.hasPmi) : false,
      hasPrepaymentPenalty: isSet(object.hasPrepaymentPenalty) ? Boolean(object.hasPrepaymentPenalty) : false,
      lastPaymentAmount: isSet(object.lastPaymentAmount) ? Number(object.lastPaymentAmount) : 0,
      lastPaymentDate: isSet(object.lastPaymentDate) ? String(object.lastPaymentDate) : "",
      loanTerm: isSet(object.loanTerm) ? String(object.loanTerm) : "",
      loanTypeDescription: isSet(object.loanTypeDescription) ? String(object.loanTypeDescription) : "",
      maturityDate: isSet(object.maturityDate) ? String(object.maturityDate) : "",
      nextMonthlyPayment: isSet(object.nextMonthlyPayment) ? Number(object.nextMonthlyPayment) : 0,
      nextPaymentDueDate: isSet(object.nextPaymentDueDate) ? String(object.nextPaymentDueDate) : "",
      originalPrincipalBalance: isSet(object.originalPrincipalBalance) ? Number(object.originalPrincipalBalance) : 0,
      originalPropertyValue: isSet(object.originalPropertyValue) ? Number(object.originalPropertyValue) : 0,
      outstandingPrincipalBalance: isSet(object.outstandingPrincipalBalance)
        ? Number(object.outstandingPrincipalBalance)
        : 0,
      paymentAmount: isSet(object.paymentAmount) ? Number(object.paymentAmount) : 0,
      paymentDate: isSet(object.paymentDate) ? String(object.paymentDate) : "",
      originationDate: isSet(object.originationDate) ? String(object.originationDate) : "",
      originationPrincipalAmount: isSet(object.originationPrincipalAmount)
        ? Number(object.originationPrincipalAmount)
        : 0,
      pastDueAmount: isSet(object.pastDueAmount) ? Number(object.pastDueAmount) : 0,
      ytdInterestPaid: isSet(object.ytdInterestPaid) ? Number(object.ytdInterestPaid) : 0,
      ytdPrincipalPaid: isSet(object.ytdPrincipalPaid) ? Number(object.ytdPrincipalPaid) : 0,
      propertyAddressCity: isSet(object.propertyAddressCity) ? String(object.propertyAddressCity) : "",
      propertyAddressState: isSet(object.propertyAddressState) ? String(object.propertyAddressState) : "",
      propertyAddressStreet: isSet(object.propertyAddressStreet) ? String(object.propertyAddressStreet) : "",
      propertyAddressPostalCode: isSet(object.propertyAddressPostalCode)
        ? String(object.propertyAddressPostalCode)
        : "",
      propertyRegion: isSet(object.propertyRegion) ? String(object.propertyRegion) : "",
      propertyCountry: isSet(object.propertyCountry) ? String(object.propertyCountry) : "",
      interestRatePercentage: isSet(object.interestRatePercentage) ? Number(object.interestRatePercentage) : 0,
      interestRateType: isSet(object.interestRateType) ? String(object.interestRateType) : "",
    };
  },

  toJSON(message: MortgageAccount): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.plaidAccountId !== "") {
      obj.plaidAccountId = message.plaidAccountId;
    }
    if (message.accountNumber !== "") {
      obj.accountNumber = message.accountNumber;
    }
    if (message.currentLateFee !== 0) {
      obj.currentLateFee = message.currentLateFee;
    }
    if (message.escrowBalance !== 0) {
      obj.escrowBalance = message.escrowBalance;
    }
    if (message.hasPmi === true) {
      obj.hasPmi = message.hasPmi;
    }
    if (message.hasPrepaymentPenalty === true) {
      obj.hasPrepaymentPenalty = message.hasPrepaymentPenalty;
    }
    if (message.lastPaymentAmount !== 0) {
      obj.lastPaymentAmount = message.lastPaymentAmount;
    }
    if (message.lastPaymentDate !== "") {
      obj.lastPaymentDate = message.lastPaymentDate;
    }
    if (message.loanTerm !== "") {
      obj.loanTerm = message.loanTerm;
    }
    if (message.loanTypeDescription !== "") {
      obj.loanTypeDescription = message.loanTypeDescription;
    }
    if (message.maturityDate !== "") {
      obj.maturityDate = message.maturityDate;
    }
    if (message.nextMonthlyPayment !== 0) {
      obj.nextMonthlyPayment = message.nextMonthlyPayment;
    }
    if (message.nextPaymentDueDate !== "") {
      obj.nextPaymentDueDate = message.nextPaymentDueDate;
    }
    if (message.originalPrincipalBalance !== 0) {
      obj.originalPrincipalBalance = message.originalPrincipalBalance;
    }
    if (message.originalPropertyValue !== 0) {
      obj.originalPropertyValue = message.originalPropertyValue;
    }
    if (message.outstandingPrincipalBalance !== 0) {
      obj.outstandingPrincipalBalance = message.outstandingPrincipalBalance;
    }
    if (message.paymentAmount !== 0) {
      obj.paymentAmount = message.paymentAmount;
    }
    if (message.paymentDate !== "") {
      obj.paymentDate = message.paymentDate;
    }
    if (message.originationDate !== "") {
      obj.originationDate = message.originationDate;
    }
    if (message.originationPrincipalAmount !== 0) {
      obj.originationPrincipalAmount = message.originationPrincipalAmount;
    }
    if (message.pastDueAmount !== 0) {
      obj.pastDueAmount = message.pastDueAmount;
    }
    if (message.ytdInterestPaid !== 0) {
      obj.ytdInterestPaid = message.ytdInterestPaid;
    }
    if (message.ytdPrincipalPaid !== 0) {
      obj.ytdPrincipalPaid = message.ytdPrincipalPaid;
    }
    if (message.propertyAddressCity !== "") {
      obj.propertyAddressCity = message.propertyAddressCity;
    }
    if (message.propertyAddressState !== "") {
      obj.propertyAddressState = message.propertyAddressState;
    }
    if (message.propertyAddressStreet !== "") {
      obj.propertyAddressStreet = message.propertyAddressStreet;
    }
    if (message.propertyAddressPostalCode !== "") {
      obj.propertyAddressPostalCode = message.propertyAddressPostalCode;
    }
    if (message.propertyRegion !== "") {
      obj.propertyRegion = message.propertyRegion;
    }
    if (message.propertyCountry !== "") {
      obj.propertyCountry = message.propertyCountry;
    }
    if (message.interestRatePercentage !== 0) {
      obj.interestRatePercentage = message.interestRatePercentage;
    }
    if (message.interestRateType !== "") {
      obj.interestRateType = message.interestRateType;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MortgageAccount>, I>>(base?: I): MortgageAccount {
    return MortgageAccount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MortgageAccount>, I>>(object: I): MortgageAccount {
    const message = createBaseMortgageAccount();
    message.id = object.id ?? 0;
    message.plaidAccountId = object.plaidAccountId ?? "";
    message.accountNumber = object.accountNumber ?? "";
    message.currentLateFee = object.currentLateFee ?? 0;
    message.escrowBalance = object.escrowBalance ?? 0;
    message.hasPmi = object.hasPmi ?? false;
    message.hasPrepaymentPenalty = object.hasPrepaymentPenalty ?? false;
    message.lastPaymentAmount = object.lastPaymentAmount ?? 0;
    message.lastPaymentDate = object.lastPaymentDate ?? "";
    message.loanTerm = object.loanTerm ?? "";
    message.loanTypeDescription = object.loanTypeDescription ?? "";
    message.maturityDate = object.maturityDate ?? "";
    message.nextMonthlyPayment = object.nextMonthlyPayment ?? 0;
    message.nextPaymentDueDate = object.nextPaymentDueDate ?? "";
    message.originalPrincipalBalance = object.originalPrincipalBalance ?? 0;
    message.originalPropertyValue = object.originalPropertyValue ?? 0;
    message.outstandingPrincipalBalance = object.outstandingPrincipalBalance ?? 0;
    message.paymentAmount = object.paymentAmount ?? 0;
    message.paymentDate = object.paymentDate ?? "";
    message.originationDate = object.originationDate ?? "";
    message.originationPrincipalAmount = object.originationPrincipalAmount ?? 0;
    message.pastDueAmount = object.pastDueAmount ?? 0;
    message.ytdInterestPaid = object.ytdInterestPaid ?? 0;
    message.ytdPrincipalPaid = object.ytdPrincipalPaid ?? 0;
    message.propertyAddressCity = object.propertyAddressCity ?? "";
    message.propertyAddressState = object.propertyAddressState ?? "";
    message.propertyAddressStreet = object.propertyAddressStreet ?? "";
    message.propertyAddressPostalCode = object.propertyAddressPostalCode ?? "";
    message.propertyRegion = object.propertyRegion ?? "";
    message.propertyCountry = object.propertyCountry ?? "";
    message.interestRatePercentage = object.interestRatePercentage ?? 0;
    message.interestRateType = object.interestRateType ?? "";
    return message;
  },
};

function createBaseInvestmentAccount(): InvestmentAccount {
  return {
    id: 0,
    userId: 0,
    name: "",
    number: "",
    type: "",
    balance: 0,
    currentFunds: 0,
    balanceLimit: 0,
    plaidAccountId: "",
    subtype: "",
    holdings: [],
    securities: [],
  };
}

export const InvestmentAccount = {
  fromJSON(object: any): InvestmentAccount {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      number: isSet(object.number) ? String(object.number) : "",
      type: isSet(object.type) ? String(object.type) : "",
      balance: isSet(object.balance) ? Number(object.balance) : 0,
      currentFunds: isSet(object.currentFunds) ? Number(object.currentFunds) : 0,
      balanceLimit: isSet(object.balanceLimit) ? Number(object.balanceLimit) : 0,
      plaidAccountId: isSet(object.plaidAccountId) ? String(object.plaidAccountId) : "",
      subtype: isSet(object.subtype) ? String(object.subtype) : "",
      holdings: Array.isArray(object?.holdings) ? object.holdings.map((e: any) => InvesmentHolding.fromJSON(e)) : [],
      securities: Array.isArray(object?.securities)
        ? object.securities.map((e: any) => InvestmentSecurity.fromJSON(e))
        : [],
    };
  },

  toJSON(message: InvestmentAccount): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.number !== "") {
      obj.number = message.number;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.balance !== 0) {
      obj.balance = message.balance;
    }
    if (message.currentFunds !== 0) {
      obj.currentFunds = message.currentFunds;
    }
    if (message.balanceLimit !== 0) {
      obj.balanceLimit = Math.round(message.balanceLimit);
    }
    if (message.plaidAccountId !== "") {
      obj.plaidAccountId = message.plaidAccountId;
    }
    if (message.subtype !== "") {
      obj.subtype = message.subtype;
    }
    if (message.holdings?.length) {
      obj.holdings = message.holdings.map((e) => InvesmentHolding.toJSON(e));
    }
    if (message.securities?.length) {
      obj.securities = message.securities.map((e) => InvestmentSecurity.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvestmentAccount>, I>>(base?: I): InvestmentAccount {
    return InvestmentAccount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InvestmentAccount>, I>>(object: I): InvestmentAccount {
    const message = createBaseInvestmentAccount();
    message.id = object.id ?? 0;
    message.userId = object.userId ?? 0;
    message.name = object.name ?? "";
    message.number = object.number ?? "";
    message.type = object.type ?? "";
    message.balance = object.balance ?? 0;
    message.currentFunds = object.currentFunds ?? 0;
    message.balanceLimit = object.balanceLimit ?? 0;
    message.plaidAccountId = object.plaidAccountId ?? "";
    message.subtype = object.subtype ?? "";
    message.holdings = object.holdings?.map((e) => InvesmentHolding.fromPartial(e)) || [];
    message.securities = object.securities?.map((e) => InvestmentSecurity.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBankAccount(): BankAccount {
  return {
    id: 0,
    userId: 0,
    name: "",
    number: "",
    type: 0,
    balance: 0,
    currency: "",
    currentFunds: 0,
    balanceLimit: 0,
    pockets: [],
    plaidAccountId: "",
    subtype: "",
    status: 0,
  };
}

export const BankAccount = {
  fromJSON(object: any): BankAccount {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      number: isSet(object.number) ? String(object.number) : "",
      type: isSet(object.type) ? bankAccountTypeFromJSON(object.type) : 0,
      balance: isSet(object.balance) ? Number(object.balance) : 0,
      currency: isSet(object.currency) ? String(object.currency) : "",
      currentFunds: isSet(object.currentFunds) ? Number(object.currentFunds) : 0,
      balanceLimit: isSet(object.balanceLimit) ? Number(object.balanceLimit) : 0,
      pockets: Array.isArray(object?.pockets) ? object.pockets.map((e: any) => Pocket.fromJSON(e)) : [],
      plaidAccountId: isSet(object.plaidAccountId) ? String(object.plaidAccountId) : "",
      subtype: isSet(object.subtype) ? String(object.subtype) : "",
      status: isSet(object.status) ? bankAccountStatusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: BankAccount): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.number !== "") {
      obj.number = message.number;
    }
    if (message.type !== 0) {
      obj.type = bankAccountTypeToJSON(message.type);
    }
    if (message.balance !== 0) {
      obj.balance = message.balance;
    }
    if (message.currency !== "") {
      obj.currency = message.currency;
    }
    if (message.currentFunds !== 0) {
      obj.currentFunds = message.currentFunds;
    }
    if (message.balanceLimit !== 0) {
      obj.balanceLimit = Math.round(message.balanceLimit);
    }
    if (message.pockets?.length) {
      obj.pockets = message.pockets.map((e) => Pocket.toJSON(e));
    }
    if (message.plaidAccountId !== "") {
      obj.plaidAccountId = message.plaidAccountId;
    }
    if (message.subtype !== "") {
      obj.subtype = message.subtype;
    }
    if (message.status !== 0) {
      obj.status = bankAccountStatusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BankAccount>, I>>(base?: I): BankAccount {
    return BankAccount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BankAccount>, I>>(object: I): BankAccount {
    const message = createBaseBankAccount();
    message.id = object.id ?? 0;
    message.userId = object.userId ?? 0;
    message.name = object.name ?? "";
    message.number = object.number ?? "";
    message.type = object.type ?? 0;
    message.balance = object.balance ?? 0;
    message.currency = object.currency ?? "";
    message.currentFunds = object.currentFunds ?? 0;
    message.balanceLimit = object.balanceLimit ?? 0;
    message.pockets = object.pockets?.map((e) => Pocket.fromPartial(e)) || [];
    message.plaidAccountId = object.plaidAccountId ?? "";
    message.subtype = object.subtype ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBasePocket(): Pocket {
  return { id: 0, goals: [], type: 0 };
}

export const Pocket = {
  fromJSON(object: any): Pocket {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      goals: Array.isArray(object?.goals) ? object.goals.map((e: any) => SmartGoal.fromJSON(e)) : [],
      type: isSet(object.type) ? pocketTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: Pocket): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.goals?.length) {
      obj.goals = message.goals.map((e) => SmartGoal.toJSON(e));
    }
    if (message.type !== 0) {
      obj.type = pocketTypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Pocket>, I>>(base?: I): Pocket {
    return Pocket.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Pocket>, I>>(object: I): Pocket {
    const message = createBasePocket();
    message.id = object.id ?? 0;
    message.goals = object.goals?.map((e) => SmartGoal.fromPartial(e)) || [];
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseSmartGoal(): SmartGoal {
  return {
    id: 0,
    userId: 0,
    name: "",
    description: "",
    isCompleted: false,
    goalType: 0,
    duration: "",
    startDate: "",
    endDate: "",
    targetAmount: "",
    currentAmount: "",
    milestones: [],
    forecasts: undefined,
  };
}

export const SmartGoal = {
  fromJSON(object: any): SmartGoal {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      isCompleted: isSet(object.isCompleted) ? Boolean(object.isCompleted) : false,
      goalType: isSet(object.goalType) ? goalTypeFromJSON(object.goalType) : 0,
      duration: isSet(object.duration) ? String(object.duration) : "",
      startDate: isSet(object.startDate) ? String(object.startDate) : "",
      endDate: isSet(object.endDate) ? String(object.endDate) : "",
      targetAmount: isSet(object.targetAmount) ? String(object.targetAmount) : "",
      currentAmount: isSet(object.currentAmount) ? String(object.currentAmount) : "",
      milestones: Array.isArray(object?.milestones) ? object.milestones.map((e: any) => Milestone.fromJSON(e)) : [],
      forecasts: isSet(object.forecasts) ? Forecast.fromJSON(object.forecasts) : undefined,
    };
  },

  toJSON(message: SmartGoal): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.isCompleted === true) {
      obj.isCompleted = message.isCompleted;
    }
    if (message.goalType !== 0) {
      obj.goalType = goalTypeToJSON(message.goalType);
    }
    if (message.duration !== "") {
      obj.duration = message.duration;
    }
    if (message.startDate !== "") {
      obj.startDate = message.startDate;
    }
    if (message.endDate !== "") {
      obj.endDate = message.endDate;
    }
    if (message.targetAmount !== "") {
      obj.targetAmount = message.targetAmount;
    }
    if (message.currentAmount !== "") {
      obj.currentAmount = message.currentAmount;
    }
    if (message.milestones?.length) {
      obj.milestones = message.milestones.map((e) => Milestone.toJSON(e));
    }
    if (message.forecasts !== undefined) {
      obj.forecasts = Forecast.toJSON(message.forecasts);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SmartGoal>, I>>(base?: I): SmartGoal {
    return SmartGoal.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SmartGoal>, I>>(object: I): SmartGoal {
    const message = createBaseSmartGoal();
    message.id = object.id ?? 0;
    message.userId = object.userId ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.isCompleted = object.isCompleted ?? false;
    message.goalType = object.goalType ?? 0;
    message.duration = object.duration ?? "";
    message.startDate = object.startDate ?? "";
    message.endDate = object.endDate ?? "";
    message.targetAmount = object.targetAmount ?? "";
    message.currentAmount = object.currentAmount ?? "";
    message.milestones = object.milestones?.map((e) => Milestone.fromPartial(e)) || [];
    message.forecasts = (object.forecasts !== undefined && object.forecasts !== null)
      ? Forecast.fromPartial(object.forecasts)
      : undefined;
    return message;
  },
};

function createBaseForecast(): Forecast {
  return { id: 0, forecastedAmount: "", forecastedCompletionDate: "", varianceAmount: "" };
}

export const Forecast = {
  fromJSON(object: any): Forecast {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      forecastedAmount: isSet(object.forecastedAmount) ? String(object.forecastedAmount) : "",
      forecastedCompletionDate: isSet(object.forecastedCompletionDate) ? String(object.forecastedCompletionDate) : "",
      varianceAmount: isSet(object.varianceAmount) ? String(object.varianceAmount) : "",
    };
  },

  toJSON(message: Forecast): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.forecastedAmount !== "") {
      obj.forecastedAmount = message.forecastedAmount;
    }
    if (message.forecastedCompletionDate !== "") {
      obj.forecastedCompletionDate = message.forecastedCompletionDate;
    }
    if (message.varianceAmount !== "") {
      obj.varianceAmount = message.varianceAmount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Forecast>, I>>(base?: I): Forecast {
    return Forecast.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Forecast>, I>>(object: I): Forecast {
    const message = createBaseForecast();
    message.id = object.id ?? 0;
    message.forecastedAmount = object.forecastedAmount ?? "";
    message.forecastedCompletionDate = object.forecastedCompletionDate ?? "";
    message.varianceAmount = object.varianceAmount ?? "";
    return message;
  },
};

function createBaseMilestone(): Milestone {
  return { id: 0, name: "", description: "", targetDate: "", targetAmount: "", isCompleted: false, budget: undefined };
}

export const Milestone = {
  fromJSON(object: any): Milestone {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      targetDate: isSet(object.targetDate) ? String(object.targetDate) : "",
      targetAmount: isSet(object.targetAmount) ? String(object.targetAmount) : "",
      isCompleted: isSet(object.isCompleted) ? Boolean(object.isCompleted) : false,
      budget: isSet(object.budget) ? Budget.fromJSON(object.budget) : undefined,
    };
  },

  toJSON(message: Milestone): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.targetDate !== "") {
      obj.targetDate = message.targetDate;
    }
    if (message.targetAmount !== "") {
      obj.targetAmount = message.targetAmount;
    }
    if (message.isCompleted === true) {
      obj.isCompleted = message.isCompleted;
    }
    if (message.budget !== undefined) {
      obj.budget = Budget.toJSON(message.budget);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Milestone>, I>>(base?: I): Milestone {
    return Milestone.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Milestone>, I>>(object: I): Milestone {
    const message = createBaseMilestone();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.targetDate = object.targetDate ?? "";
    message.targetAmount = object.targetAmount ?? "";
    message.isCompleted = object.isCompleted ?? false;
    message.budget = (object.budget !== undefined && object.budget !== null)
      ? Budget.fromPartial(object.budget)
      : undefined;
    return message;
  },
};

function createBaseBudget(): Budget {
  return { id: 0, name: "", description: "", startDate: "", endDate: "", category: undefined };
}

export const Budget = {
  fromJSON(object: any): Budget {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      startDate: isSet(object.startDate) ? String(object.startDate) : "",
      endDate: isSet(object.endDate) ? String(object.endDate) : "",
      category: isSet(object.category) ? Category.fromJSON(object.category) : undefined,
    };
  },

  toJSON(message: Budget): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.startDate !== "") {
      obj.startDate = message.startDate;
    }
    if (message.endDate !== "") {
      obj.endDate = message.endDate;
    }
    if (message.category !== undefined) {
      obj.category = Category.toJSON(message.category);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Budget>, I>>(base?: I): Budget {
    return Budget.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Budget>, I>>(object: I): Budget {
    const message = createBaseBudget();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.startDate = object.startDate ?? "";
    message.endDate = object.endDate ?? "";
    message.category = (object.category !== undefined && object.category !== null)
      ? Category.fromPartial(object.category)
      : undefined;
    return message;
  },
};

function createBaseCategory(): Category {
  return { id: 0, name: "", description: "", subcategories: [] };
}

export const Category = {
  fromJSON(object: any): Category {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      subcategories: Array.isArray(object?.subcategories) ? object.subcategories.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Category): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.subcategories?.length) {
      obj.subcategories = message.subcategories;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Category>, I>>(base?: I): Category {
    return Category.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Category>, I>>(object: I): Category {
    const message = createBaseCategory();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.subcategories = object.subcategories?.map((e) => e) || [];
    return message;
  },
};

function createBaseInvesmentHolding(): InvesmentHolding {
  return {
    id: 0,
    name: "",
    plaidAccountId: "",
    costBasis: 0,
    institutionPrice: 0,
    institutionPriceAsOf: "",
    institutionPriceDatetime: "",
    institutionValue: 0,
    isoCurrencyCode: "",
    quantity: 0,
    securityId: "",
    unofficialCurrencyCode: "",
  };
}

export const InvesmentHolding = {
  fromJSON(object: any): InvesmentHolding {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      plaidAccountId: isSet(object.plaidAccountId) ? String(object.plaidAccountId) : "",
      costBasis: isSet(object.costBasis) ? Number(object.costBasis) : 0,
      institutionPrice: isSet(object.institutionPrice) ? Number(object.institutionPrice) : 0,
      institutionPriceAsOf: isSet(object.institutionPriceAsOf) ? String(object.institutionPriceAsOf) : "",
      institutionPriceDatetime: isSet(object.institutionPriceDatetime) ? String(object.institutionPriceDatetime) : "",
      institutionValue: isSet(object.institutionValue) ? Number(object.institutionValue) : 0,
      isoCurrencyCode: isSet(object.isoCurrencyCode) ? String(object.isoCurrencyCode) : "",
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      securityId: isSet(object.securityId) ? String(object.securityId) : "",
      unofficialCurrencyCode: isSet(object.unofficialCurrencyCode) ? String(object.unofficialCurrencyCode) : "",
    };
  },

  toJSON(message: InvesmentHolding): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.plaidAccountId !== "") {
      obj.plaidAccountId = message.plaidAccountId;
    }
    if (message.costBasis !== 0) {
      obj.costBasis = message.costBasis;
    }
    if (message.institutionPrice !== 0) {
      obj.institutionPrice = message.institutionPrice;
    }
    if (message.institutionPriceAsOf !== "") {
      obj.institutionPriceAsOf = message.institutionPriceAsOf;
    }
    if (message.institutionPriceDatetime !== "") {
      obj.institutionPriceDatetime = message.institutionPriceDatetime;
    }
    if (message.institutionValue !== 0) {
      obj.institutionValue = message.institutionValue;
    }
    if (message.isoCurrencyCode !== "") {
      obj.isoCurrencyCode = message.isoCurrencyCode;
    }
    if (message.quantity !== 0) {
      obj.quantity = message.quantity;
    }
    if (message.securityId !== "") {
      obj.securityId = message.securityId;
    }
    if (message.unofficialCurrencyCode !== "") {
      obj.unofficialCurrencyCode = message.unofficialCurrencyCode;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvesmentHolding>, I>>(base?: I): InvesmentHolding {
    return InvesmentHolding.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InvesmentHolding>, I>>(object: I): InvesmentHolding {
    const message = createBaseInvesmentHolding();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.plaidAccountId = object.plaidAccountId ?? "";
    message.costBasis = object.costBasis ?? 0;
    message.institutionPrice = object.institutionPrice ?? 0;
    message.institutionPriceAsOf = object.institutionPriceAsOf ?? "";
    message.institutionPriceDatetime = object.institutionPriceDatetime ?? "";
    message.institutionValue = object.institutionValue ?? 0;
    message.isoCurrencyCode = object.isoCurrencyCode ?? "";
    message.quantity = object.quantity ?? 0;
    message.securityId = object.securityId ?? "";
    message.unofficialCurrencyCode = object.unofficialCurrencyCode ?? "";
    return message;
  },
};

function createBaseInvestmentSecurity(): InvestmentSecurity {
  return {
    id: 0,
    closePrice: 0,
    closePriceAsOf: "",
    cusip: "",
    institutionId: "",
    institutionSecurityId: "",
    isCashEquivalent: false,
    isin: "",
    isoCurrencyCode: "",
    name: "",
    proxySecurityId: "",
    securityId: "",
    sedol: "",
    tickerSymbol: "",
    type: "",
    unofficialCurrencyCode: "",
    updateDatetime: "",
  };
}

export const InvestmentSecurity = {
  fromJSON(object: any): InvestmentSecurity {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      closePrice: isSet(object.closePrice) ? Number(object.closePrice) : 0,
      closePriceAsOf: isSet(object.closePriceAsOf) ? String(object.closePriceAsOf) : "",
      cusip: isSet(object.cusip) ? String(object.cusip) : "",
      institutionId: isSet(object.institutionId) ? String(object.institutionId) : "",
      institutionSecurityId: isSet(object.institutionSecurityId) ? String(object.institutionSecurityId) : "",
      isCashEquivalent: isSet(object.isCashEquivalent) ? Boolean(object.isCashEquivalent) : false,
      isin: isSet(object.isin) ? String(object.isin) : "",
      isoCurrencyCode: isSet(object.isoCurrencyCode) ? String(object.isoCurrencyCode) : "",
      name: isSet(object.name) ? String(object.name) : "",
      proxySecurityId: isSet(object.proxySecurityId) ? String(object.proxySecurityId) : "",
      securityId: isSet(object.securityId) ? String(object.securityId) : "",
      sedol: isSet(object.sedol) ? String(object.sedol) : "",
      tickerSymbol: isSet(object.tickerSymbol) ? String(object.tickerSymbol) : "",
      type: isSet(object.type) ? String(object.type) : "",
      unofficialCurrencyCode: isSet(object.unofficialCurrencyCode) ? String(object.unofficialCurrencyCode) : "",
      updateDatetime: isSet(object.updateDatetime) ? String(object.updateDatetime) : "",
    };
  },

  toJSON(message: InvestmentSecurity): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.closePrice !== 0) {
      obj.closePrice = message.closePrice;
    }
    if (message.closePriceAsOf !== "") {
      obj.closePriceAsOf = message.closePriceAsOf;
    }
    if (message.cusip !== "") {
      obj.cusip = message.cusip;
    }
    if (message.institutionId !== "") {
      obj.institutionId = message.institutionId;
    }
    if (message.institutionSecurityId !== "") {
      obj.institutionSecurityId = message.institutionSecurityId;
    }
    if (message.isCashEquivalent === true) {
      obj.isCashEquivalent = message.isCashEquivalent;
    }
    if (message.isin !== "") {
      obj.isin = message.isin;
    }
    if (message.isoCurrencyCode !== "") {
      obj.isoCurrencyCode = message.isoCurrencyCode;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.proxySecurityId !== "") {
      obj.proxySecurityId = message.proxySecurityId;
    }
    if (message.securityId !== "") {
      obj.securityId = message.securityId;
    }
    if (message.sedol !== "") {
      obj.sedol = message.sedol;
    }
    if (message.tickerSymbol !== "") {
      obj.tickerSymbol = message.tickerSymbol;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.unofficialCurrencyCode !== "") {
      obj.unofficialCurrencyCode = message.unofficialCurrencyCode;
    }
    if (message.updateDatetime !== "") {
      obj.updateDatetime = message.updateDatetime;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InvestmentSecurity>, I>>(base?: I): InvestmentSecurity {
    return InvestmentSecurity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InvestmentSecurity>, I>>(object: I): InvestmentSecurity {
    const message = createBaseInvestmentSecurity();
    message.id = object.id ?? 0;
    message.closePrice = object.closePrice ?? 0;
    message.closePriceAsOf = object.closePriceAsOf ?? "";
    message.cusip = object.cusip ?? "";
    message.institutionId = object.institutionId ?? "";
    message.institutionSecurityId = object.institutionSecurityId ?? "";
    message.isCashEquivalent = object.isCashEquivalent ?? false;
    message.isin = object.isin ?? "";
    message.isoCurrencyCode = object.isoCurrencyCode ?? "";
    message.name = object.name ?? "";
    message.proxySecurityId = object.proxySecurityId ?? "";
    message.securityId = object.securityId ?? "";
    message.sedol = object.sedol ?? "";
    message.tickerSymbol = object.tickerSymbol ?? "";
    message.type = object.type ?? "";
    message.unofficialCurrencyCode = object.unofficialCurrencyCode ?? "";
    message.updateDatetime = object.updateDatetime ?? "";
    return message;
  },
};

function createBaseApr(): Apr {
  return { id: 0, percentage: 0, type: "", balanceSubjectToApr: 0, interestChargeAmount: 0 };
}

export const Apr = {
  fromJSON(object: any): Apr {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      percentage: isSet(object.percentage) ? Number(object.percentage) : 0,
      type: isSet(object.type) ? String(object.type) : "",
      balanceSubjectToApr: isSet(object.balanceSubjectToApr) ? Number(object.balanceSubjectToApr) : 0,
      interestChargeAmount: isSet(object.interestChargeAmount) ? Number(object.interestChargeAmount) : 0,
    };
  },

  toJSON(message: Apr): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.percentage !== 0) {
      obj.percentage = message.percentage;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.balanceSubjectToApr !== 0) {
      obj.balanceSubjectToApr = message.balanceSubjectToApr;
    }
    if (message.interestChargeAmount !== 0) {
      obj.interestChargeAmount = message.interestChargeAmount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Apr>, I>>(base?: I): Apr {
    return Apr.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Apr>, I>>(object: I): Apr {
    const message = createBaseApr();
    message.id = object.id ?? 0;
    message.percentage = object.percentage ?? 0;
    message.type = object.type ?? "";
    message.balanceSubjectToApr = object.balanceSubjectToApr ?? 0;
    message.interestChargeAmount = object.interestChargeAmount ?? 0;
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
