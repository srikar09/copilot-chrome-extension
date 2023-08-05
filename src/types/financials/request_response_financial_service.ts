/* eslint-disable */
import { ErrorResponse } from "../error/error";
import { Any } from "./any";
import { MelodyFinancialContext, ReOccuringTransaction, Transaction } from "./clickhouse_financial_service";
import {
  BankAccount,
  Budget,
  CreditAccount,
  Forecast,
  InvestmentAccount,
  Link,
  Milestone,
  MortgageAccount,
  Pocket,
  SmartGoal,
  StudentLoanAccount,
  UserProfile,
} from "./message_financial_service";


export const protobufPackage = "financial_integration_service_api.v1";

/**
 * CreateUserProfileRequest: Represents the request object invoked against the user
 * service to create a user profile
 */
export interface CreateUserProfileRequest {
  /**
   * User profile to create
   * Validations:
   * - cannot be nil hence required
   */
  profile:
    | UserProfile
    | undefined;
  /** the email of the account to create */
  email: string;
}

/**
 * CreateUserProfileResponse: Represents the response object returned as a response to
 * the `create user profile` request
 */
export interface CreateUserProfileResponse {
  userId: number;
}

/**
 * GetUserProfileRequest: Represents the request object invoked against the user
 * service to get a user profile
 */
export interface GetUserProfileRequest {
  /**
   * The account ID associated with the user.
   * NOTE: This user_id is the simfiny backend platform wide user id
   * Validations:
   * - user_id must be greater than 0
   */
  userId: number;
}

/**
 * GetUserProfileResponse: Represents the response object returned as a response to
 * the `get user profile` request
 */
export interface GetUserProfileResponse {
  profile:
    | UserProfile
    | undefined;
  /** financial context for the user */
  financialContext: MelodyFinancialContext | undefined;
}

/**
 * teUserProfileRequest: Represents the request object invoked against the user
 * service to delete a user profile
 */
export interface DeleteUserProfileRequest {
  /**
   * The account ID associated with the user.
   * NOTE: This user_id is the simfiny backend platform wide user id
   * Validations:
   * - user_id must be greater than 0
   */
  userId: number;
}

/**
 * DeleteUserProfileResponse: Represents the response object returned as a response to
 * the `delete user profile` request
 */
export interface DeleteUserProfileResponse {
  profileDeleted: boolean;
}

/**
 * UpdateUserProfileRequest: Represents the request object invoked against the user
 * service to update a user profile
 */
export interface UpdateUserProfileRequest {
  /**
   * User profile to update
   * Validation:
   * - cannot nil hence required
   */
  profile: UserProfile | undefined;
}

/**
 * UpdateUserProfileResponse: Represents the response object returned as a response to
 * the `update user profile` request
 */
export interface UpdateUserProfileResponse {
  profileUpdated: boolean;
  profile: UserProfile | undefined;
}

/**
 * CreateBankAccountRequest: Represents the request object invoked against the financial
 * service to create a bank account for a given user
 */
export interface CreateBankAccountRequest {
  /**
   * The account ID associated with the user
   * Validations:
   * - user_id must be greater than 0
   */
  userId: number;
  /**
   * The bank account to create
   * Validations:
   * - cannot be nil hence required
   */
  bankAccount: BankAccount | undefined;
}

/**
 * CreateBankAccountResponse: Represents the response object returned as a response to
 * the `create bank account` request
 */
export interface CreateBankAccountResponse {
  /** The bank account id */
  bankAccountId: number;
}

/**
 * GetBankAccountRequest: Represents the request object invoked against the financial
 * service to get a bank account for a given user and bank account id
 */
export interface GetBankAccountRequest {
  /**
   * The bank account id
   * Validations:
   * - bank_account_id must be greater than 0
   */
  bankAccountId: number;
}

/**
 * GetBankAccountResponse: Represents the response object returned as a response to
 * the `get bank account` request
 */
export interface GetBankAccountResponse {
  /** The bank account */
  bankAccount: BankAccount | undefined;
}

export interface DeleteBankAccountRequest {
  /**
   * The account ID associated with the user
   * Validations:
   * - user_id must be greater than 0
   */
  userId: number;
  /**
   * The bank account id
   * Validations:
   * - bank_account_id must be greater than 0
   */
  bankAccountId: number;
}

export interface DeleteBankAccountResponse {
  /** The bank account id */
  deleted: boolean;
}

export interface UpdateBankAccountRequest {
  /**
   * The bank account to update
   * Validations:
   * - cannot be nil hence required
   */
  bankAccount: BankAccount | undefined;
}

export interface UpdateBankAccountResponse {
  /** The bank account id */
  updated: boolean;
  /** The bank account */
  bankAccount: BankAccount | undefined;
}

export interface GetPocketRequest {
  /**
   * The pocket account id
   * Validations:
   * - pocket_account_id must be greater than 0
   */
  pocketId: number;
}

export interface GetPocketResponse {
  /** The pocket account */
  pocket: Pocket | undefined;
}

export interface GetSmartGoalsByPocketIdRequest {
  /**
   * The pocket account id
   * Validations:
   * - pocket_account_id must be greater than 0
   */
  pocketId: number;
}

export interface GetSmartGoalsByPocketIdResponse {
  /** The smart goals */
  smartGoals: SmartGoal[];
}

export interface CreateSmartGoalRequest {
  /**
   * The pocket account id
   * Validations:
   * - pocket_account_id must be greater than 0
   */
  pocketId: number;
  /**
   * The smart goal to create
   * Validations:
   * - cannot be nil hence required
   */
  smartGoal: SmartGoal | undefined;
}

export interface CreateSmartGoalResponse {
  /** The smart goal id */
  smartGoalId: number;
}

export interface UpdateSmartGoalRequest {
  /**
   * The smart goal to update
   * Validations:
   * - cannot be nil hence required
   */
  smartGoal: SmartGoal | undefined;
}

export interface UpdateSmartGoalResponse {
  /** The smart goal id */
  smartGoalId: number;
}

export interface DeleteSmartGoalRequest {
  /**
   * The smart goal id
   * Validations:
   * - smart_goal_id must be greater than 0
   */
  smartGoalId: number;
}

export interface DeleteSmartGoalResponse {
  /** The smart goal id */
  deleted: boolean;
}

export interface CreateMilestoneRequest {
  /**
   * The smart goal id
   * Validations:
   * - smart_goal_id must be greater than 0
   */
  smartGoalId: number;
  /**
   * The milestone to create
   * Validations:
   * - cannot be nil hence required
   */
  milestone: Milestone | undefined;
}

export interface CreateMilestoneResponse {
  /** The milestone id */
  milestoneId: number;
}

export interface DeleteMilestoneRequest {
  /**
   * The milestone id
   * Validations:
   * - milestone_id must be greater than 0
   */
  milestoneId: number;
}

export interface DeleteMilestoneResponse {
  /** The milestone id */
  deleted: boolean;
}

export interface UpdateMilestoneRequest {
  /**
   * The milestone to update
   * Validations:
   * - cannot be nil hence required
   */
  milestone: Milestone | undefined;
}

export interface UpdateMilestoneResponse {
  /** The milestone id */
  milestone: Milestone | undefined;
}

export interface GetMilestonesBySmartGoalIdRequest {
  /**
   * The smart goal id
   * Validations:
   * - smart_goal_id must be greater than 0
   */
  smartGoalId: number;
}

export interface GetMilestonesBySmartGoalIdResponse {
  /** The milestones */
  milestones: Milestone[];
}

export interface GetMilestoneRequest {
  /**
   * The milestone id
   * Validations:
   * - milestone_id must be greater than 0
   */
  milestoneId: number;
}

export interface GetMilestoneResponse {
  /** The milestone */
  milestone: Milestone | undefined;
}

export interface GetForecastRequest {
  /**
   * The smart goal id
   * Validations:
   * - smart_goal_id must be greater than 0
   */
  smartGoalId: number;
}

export interface GetForecastResponse {
  /** The forecast */
  forecast: Forecast | undefined;
}

export interface CreateBudgetRequest {
  /** The milestone to associate this budget with */
  milestroneId: number;
  /**
   * The budget to create
   * Validations:
   * - cannot be nil hence required
   */
  budget: Budget | undefined;
}

export interface CreateBudgetResponse {
  /** The budget id */
  budgetId: number;
}

export interface UpdateBudgetRequest {
  /**
   * The budget to update
   * Validations:
   * - cannot be nil hence required
   */
  budget: Budget | undefined;
}

export interface UpdateBudgetResponse {
  /** The budget id */
  budget: Budget | undefined;
}

export interface DeleteBudgetRequest {
  /**
   * The budget id
   * Validations:
   * - budget_id must be greater than 0
   */
  budgetId: number;
}

export interface DeleteBudgetResponse {
  /** The budget id */
  deleted: boolean;
}

export interface GetBudgetRequest {
  /**
   * The budget id
   * Validations:
   * - budget_id must be greater than 0
   */
  budgetId: number;
}

export interface GetBudgetResponse {
  /** The budget */
  budget: Budget | undefined;
}

export interface GetAllBudgetsRequest {
  /**
   * The pocket account id
   * Validations:
   * - pocket_account_id must be greater than 0
   */
  pocketId: number;
  /**
   * The smart goal id
   * Validations:
   * - smart_goal_id must be greater than 0
   */
  smartGoalId: number;
  /**
   * The milestone id
   * Validations:
   * - milestone_id must be greater than 0
   */
  milestoneId: number;
}

export interface GetAllBudgetsResponse {
  /** The budgets */
  budgets: Budget[];
}

export interface HealthCheckRequest {
}

export interface HealthCheckResponse {
  healthy: boolean;
}

export interface ReadynessCheckRequest {
}

export interface ReadynessCheckResponse {
  healthy: boolean;
}


export interface GetInvestmentAcccountRequest {
  /**
   * The user id
   * Validations:
   * - user_id must be greater than 0
   */
  userId: number;
  /**
   * The investment account id
   * Validations:
   * - investment_account_id must be greater than 0
   */
  investmentAccountId: number;
}

export interface GetInvestmentAcccountResponse {
  /** The investment account */
  investmentAccount: InvestmentAccount | undefined;
}

export interface GetMortgageAccountRequest {
  /**
   * The user id
   * Validations:
   * - user_id must be greater than 0
   */
  userId: number;
  /**
   * The mortage account id
   * Validations:
   * - mortage_account_id must be greater than 0
   */
  mortgageAccountId: number;
}

export interface GetMortgageAccountResponse {
  /** The mortage account */
  mortageAccount: MortgageAccount | undefined;
}

export interface GetLiabilityAccountRequest {
  /**
   * The user id
   * Validations:
   * - user_id must be greater than 0
   */
  userId: number;
  /**
   * The liability account id
   * Validations:
   * - liability_account_id must be greater than 0
   */
  liabilityAccountId: number;
}

export interface GetLiabilityAccountResponse {
  /** The liability account */
  liabilityAccount: CreditAccount | undefined;
}

export interface GetStudentLoanAccountRequest {
  /**
   * The user id
   * Validations:
   * - user_id must be greater than 0
   */
  userId: number;
  /**
   * The student loan account id
   * Validations:
   * - student_loan_account_id must be greater than 0
   */
  studentLoanAccountId: number;
}

export interface GetStudentLoanAccountResponse {
  /** The student loan account */
  studentLoanAccount: StudentLoanAccount | undefined;
}

export interface CreateManualLinkRequest {
  /**
   * The user id
   * Validations:
   * - user_id must be greater than 0
   */
  userId: number;
  /** The manual account link */
  manualAccountLink: Link | undefined;
}

export interface CreateManualLinkResponse {
  /** The link's id */
  linkId: number;
}

export interface GetLinkRequest {
  /**
   * The user id
   * Validations:
   * - user_id must be greater than 0
   */
  userId: number;
  /**
   * The link id
   * Validations:
   * - link_id must be greater than 0
   */
  linkId: number;
}

export interface GetLinkResponse {
  /** The link */
  link: Link | undefined;
}

export interface GetLinksRequest {
  /**
   * The user id
   * Validations:
   * - user_id must be greater than 0
   */
  userId: number;
}

export interface GetLinksResponse {
  /** The links */
  links: Link[];
}

export interface DeleteLinkRequest {
  /**
   * The user id
   * Validations:
   * - user_id must be greater than 0
   */
  userId: number;
  /**
   * The link id
   * Validations:
   * - link_id must be greater than 0
   */
  linkId: number;
}

export interface DeleteLinkResponse {
  /** The link's id */
  linkId: number;
}

interface GetReCurringTransactionsResponseInternal {
  /** The re-occuring transactions */
  reCcuringTransactions: ReOccuringTransaction[];
  participantReCcuringTransactions: GetReCurringTransactionsResponse_ParticipantReCurringTransactions[];
}

export interface GetReCurringTransactionsResponse_ParticipantReCurringTransactions {
  /** The participant id */
  reocurringTransactionId: string;
  /** The transactions */
  transactions: Transaction[];
}

export interface ProcessWebhookRequest {
  webhookType: string;
  webhookCode: string;
  /** The item_id of the Item associated with this webhook, warning, or error */
  itemId: string;
  /** Indicates if initial pull information is available. */
  initialUpdateComplete: boolean;
  /** Indicates if historical pull information is available. */
  historicalUpdateComplete: string;
  /** The Plaid environment the webhook was sent from */
  environment: string;
  /** The number of new, unfetched transactions available */
  newTransactions: string[];
  /** An array of transaction_ids corresponding to the removed transactions */
  removedTransactions: string[];
  /**
   * We use standard HTTP response codes for success and failure notifications,
   * and our errors are further classified by error_type. In general, 200 HTTP codes
   * correspond to success, 40X codes are for developer- or user-related failures, and
   * 50X codes are for Plaid-related issues. An Item with a non-null error object will
   * only be part of an API response when calling /item/get to view Item status. Otherwise,
   * error fields will be null if no error has occurred; if an error has occurred, an error
   * code will be returned instead.
   */
  error: { [key: string]: Any };
  /** A list of account_ids for accounts that have new or updated recurring transactions data. */
  accountIds: string[];
  /** The time at which the user's access_token will expire. This field will only be present */
  consentExpirationTime: string;
  /** An array of account_id's for accounts that contain new liabilities.' */
  accountIdsWithNewLiabilities: string[];
  /** An object with keys of account_id's that are mapped to their respective liabilities fields that changed. */
  accountIdsWithUpdatedLiabilities: string[];
  /** The number of new holdings reported since the last time this webhook was fired. */
  newHoldings: number;
  /**
   * The number of updated holdings reported since the last time this webhook was fired.
   * @gotag: json:"updated_holdings"
   */
  updatedHoldings: number;
}

export interface ProcessWebhookRequest_ErrorEntry {
  key: string;
  value: Any | undefined;
}

export interface ProcessWebhookResponse {
}

export interface StripeWebhookRequest {
  body: string;
  signature: string;
}

export interface StripeWebhookResponse {
  message: string;
}

export interface CreateSubscriptionRequest {
  userId: number;
  priceId: string;
}

export interface CreateSubscriptionResponse {
  subscriptionId: string;
  paymentIntentClientSecret: string;
}


function createBaseCreateUserProfileRequest(): CreateUserProfileRequest {
  return { profile: undefined, email: "" };
}

export const CreateUserProfileRequest = {
  fromJSON(object: any): CreateUserProfileRequest {
    return {
      profile: isSet(object.profile) ? UserProfile.fromJSON(object.profile) : undefined,
      email: isSet(object.email) ? String(object.email) : "",
    };
  },

  toJSON(message: CreateUserProfileRequest): unknown {
    const obj: any = {};
    if (message.profile !== undefined) {
      obj.profile = UserProfile.toJSON(message.profile);
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUserProfileRequest>, I>>(base?: I): CreateUserProfileRequest {
    return CreateUserProfileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateUserProfileRequest>, I>>(object: I): CreateUserProfileRequest {
    const message = createBaseCreateUserProfileRequest();
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? UserProfile.fromPartial(object.profile)
      : undefined;
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseCreateUserProfileResponse(): CreateUserProfileResponse {
  return { userId: 0 };
}

export const CreateUserProfileResponse = {
  fromJSON(object: any): CreateUserProfileResponse {
    return { userId: isSet(object.userId) ? Number(object.userId) : 0 };
  },

  toJSON(message: CreateUserProfileResponse): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUserProfileResponse>, I>>(base?: I): CreateUserProfileResponse {
    return CreateUserProfileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateUserProfileResponse>, I>>(object: I): CreateUserProfileResponse {
    const message = createBaseCreateUserProfileResponse();
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseGetUserProfileRequest(): GetUserProfileRequest {
  return { userId: 0 };
}

export const GetUserProfileRequest = {
  fromJSON(object: any): GetUserProfileRequest {
    return { userId: isSet(object.userId) ? Number(object.userId) : 0 };
  },

  toJSON(message: GetUserProfileRequest): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserProfileRequest>, I>>(base?: I): GetUserProfileRequest {
    return GetUserProfileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetUserProfileRequest>, I>>(object: I): GetUserProfileRequest {
    const message = createBaseGetUserProfileRequest();
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseGetUserProfileResponse(): GetUserProfileResponse {
  return { profile: undefined, financialContext: undefined };
}

export const GetUserProfileResponse = {
  fromJSON(object: any): GetUserProfileResponse {
    return {
      profile: isSet(object.profile) ? UserProfile.fromJSON(object.profile) : undefined,
      financialContext: isSet(object.financialContext)
        ? MelodyFinancialContext.fromJSON(object.financialContext)
        : undefined,
    };
  },

  toJSON(message: GetUserProfileResponse): unknown {
    const obj: any = {};
    if (message.profile !== undefined) {
      obj.profile = UserProfile.toJSON(message.profile);
    }
    if (message.financialContext !== undefined) {
      obj.financialContext = MelodyFinancialContext.toJSON(message.financialContext);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserProfileResponse>, I>>(base?: I): GetUserProfileResponse {
    return GetUserProfileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetUserProfileResponse>, I>>(object: I): GetUserProfileResponse {
    const message = createBaseGetUserProfileResponse();
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? UserProfile.fromPartial(object.profile)
      : undefined;
    message.financialContext = (object.financialContext !== undefined && object.financialContext !== null)
      ? MelodyFinancialContext.fromPartial(object.financialContext)
      : undefined;
    return message;
  },
};

function createBaseDeleteUserProfileRequest(): DeleteUserProfileRequest {
  return { userId: 0 };
}

export const DeleteUserProfileRequest = {
  fromJSON(object: any): DeleteUserProfileRequest {
    return { userId: isSet(object.userId) ? Number(object.userId) : 0 };
  },

  toJSON(message: DeleteUserProfileRequest): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteUserProfileRequest>, I>>(base?: I): DeleteUserProfileRequest {
    return DeleteUserProfileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteUserProfileRequest>, I>>(object: I): DeleteUserProfileRequest {
    const message = createBaseDeleteUserProfileRequest();
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseDeleteUserProfileResponse(): DeleteUserProfileResponse {
  return { profileDeleted: false };
}

export const DeleteUserProfileResponse = {
  fromJSON(object: any): DeleteUserProfileResponse {
    return { profileDeleted: isSet(object.profileDeleted) ? Boolean(object.profileDeleted) : false };
  },

  toJSON(message: DeleteUserProfileResponse): unknown {
    const obj: any = {};
    if (message.profileDeleted === true) {
      obj.profileDeleted = message.profileDeleted;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteUserProfileResponse>, I>>(base?: I): DeleteUserProfileResponse {
    return DeleteUserProfileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteUserProfileResponse>, I>>(object: I): DeleteUserProfileResponse {
    const message = createBaseDeleteUserProfileResponse();
    message.profileDeleted = object.profileDeleted ?? false;
    return message;
  },
};

function createBaseUpdateUserProfileRequest(): UpdateUserProfileRequest {
  return { profile: undefined };
}

export const UpdateUserProfileRequest = {
  fromJSON(object: any): UpdateUserProfileRequest {
    return { profile: isSet(object.profile) ? UserProfile.fromJSON(object.profile) : undefined };
  },

  toJSON(message: UpdateUserProfileRequest): unknown {
    const obj: any = {};
    if (message.profile !== undefined) {
      obj.profile = UserProfile.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateUserProfileRequest>, I>>(base?: I): UpdateUserProfileRequest {
    return UpdateUserProfileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateUserProfileRequest>, I>>(object: I): UpdateUserProfileRequest {
    const message = createBaseUpdateUserProfileRequest();
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? UserProfile.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBaseUpdateUserProfileResponse(): UpdateUserProfileResponse {
  return { profileUpdated: false, profile: undefined };
}

export const UpdateUserProfileResponse = {
  fromJSON(object: any): UpdateUserProfileResponse {
    return {
      profileUpdated: isSet(object.profileUpdated) ? Boolean(object.profileUpdated) : false,
      profile: isSet(object.profile) ? UserProfile.fromJSON(object.profile) : undefined,
    };
  },

  toJSON(message: UpdateUserProfileResponse): unknown {
    const obj: any = {};
    if (message.profileUpdated === true) {
      obj.profileUpdated = message.profileUpdated;
    }
    if (message.profile !== undefined) {
      obj.profile = UserProfile.toJSON(message.profile);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateUserProfileResponse>, I>>(base?: I): UpdateUserProfileResponse {
    return UpdateUserProfileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateUserProfileResponse>, I>>(object: I): UpdateUserProfileResponse {
    const message = createBaseUpdateUserProfileResponse();
    message.profileUpdated = object.profileUpdated ?? false;
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? UserProfile.fromPartial(object.profile)
      : undefined;
    return message;
  },
};

function createBaseCreateBankAccountRequest(): CreateBankAccountRequest {
  return { userId: 0, bankAccount: undefined };
}

export const CreateBankAccountRequest = {
  fromJSON(object: any): CreateBankAccountRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      bankAccount: isSet(object.bankAccount) ? BankAccount.fromJSON(object.bankAccount) : undefined,
    };
  },

  toJSON(message: CreateBankAccountRequest): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.bankAccount !== undefined) {
      obj.bankAccount = BankAccount.toJSON(message.bankAccount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateBankAccountRequest>, I>>(base?: I): CreateBankAccountRequest {
    return CreateBankAccountRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateBankAccountRequest>, I>>(object: I): CreateBankAccountRequest {
    const message = createBaseCreateBankAccountRequest();
    message.userId = object.userId ?? 0;
    message.bankAccount = (object.bankAccount !== undefined && object.bankAccount !== null)
      ? BankAccount.fromPartial(object.bankAccount)
      : undefined;
    return message;
  },
};

function createBaseCreateBankAccountResponse(): CreateBankAccountResponse {
  return { bankAccountId: 0 };
}

export const CreateBankAccountResponse = {
  fromJSON(object: any): CreateBankAccountResponse {
    return { bankAccountId: isSet(object.bankAccountId) ? Number(object.bankAccountId) : 0 };
  },

  toJSON(message: CreateBankAccountResponse): unknown {
    const obj: any = {};
    if (message.bankAccountId !== 0) {
      obj.bankAccountId = Math.round(message.bankAccountId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateBankAccountResponse>, I>>(base?: I): CreateBankAccountResponse {
    return CreateBankAccountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateBankAccountResponse>, I>>(object: I): CreateBankAccountResponse {
    const message = createBaseCreateBankAccountResponse();
    message.bankAccountId = object.bankAccountId ?? 0;
    return message;
  },
};

function createBaseGetBankAccountRequest(): GetBankAccountRequest {
  return { bankAccountId: 0 };
}

export const GetBankAccountRequest = {
  fromJSON(object: any): GetBankAccountRequest {
    return { bankAccountId: isSet(object.bankAccountId) ? Number(object.bankAccountId) : 0 };
  },

  toJSON(message: GetBankAccountRequest): unknown {
    const obj: any = {};
    if (message.bankAccountId !== 0) {
      obj.bankAccountId = Math.round(message.bankAccountId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBankAccountRequest>, I>>(base?: I): GetBankAccountRequest {
    return GetBankAccountRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBankAccountRequest>, I>>(object: I): GetBankAccountRequest {
    const message = createBaseGetBankAccountRequest();
    message.bankAccountId = object.bankAccountId ?? 0;
    return message;
  },
};

function createBaseGetBankAccountResponse(): GetBankAccountResponse {
  return { bankAccount: undefined };
}

export const GetBankAccountResponse = {
  fromJSON(object: any): GetBankAccountResponse {
    return { bankAccount: isSet(object.bankAccount) ? BankAccount.fromJSON(object.bankAccount) : undefined };
  },

  toJSON(message: GetBankAccountResponse): unknown {
    const obj: any = {};
    if (message.bankAccount !== undefined) {
      obj.bankAccount = BankAccount.toJSON(message.bankAccount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBankAccountResponse>, I>>(base?: I): GetBankAccountResponse {
    return GetBankAccountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBankAccountResponse>, I>>(object: I): GetBankAccountResponse {
    const message = createBaseGetBankAccountResponse();
    message.bankAccount = (object.bankAccount !== undefined && object.bankAccount !== null)
      ? BankAccount.fromPartial(object.bankAccount)
      : undefined;
    return message;
  },
};

function createBaseDeleteBankAccountRequest(): DeleteBankAccountRequest {
  return { userId: 0, bankAccountId: 0 };
}

export const DeleteBankAccountRequest = {
  fromJSON(object: any): DeleteBankAccountRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      bankAccountId: isSet(object.bankAccountId) ? Number(object.bankAccountId) : 0,
    };
  },

  toJSON(message: DeleteBankAccountRequest): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.bankAccountId !== 0) {
      obj.bankAccountId = Math.round(message.bankAccountId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteBankAccountRequest>, I>>(base?: I): DeleteBankAccountRequest {
    return DeleteBankAccountRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBankAccountRequest>, I>>(object: I): DeleteBankAccountRequest {
    const message = createBaseDeleteBankAccountRequest();
    message.userId = object.userId ?? 0;
    message.bankAccountId = object.bankAccountId ?? 0;
    return message;
  },
};

function createBaseDeleteBankAccountResponse(): DeleteBankAccountResponse {
  return { deleted: false };
}

export const DeleteBankAccountResponse = {
  fromJSON(object: any): DeleteBankAccountResponse {
    return { deleted: isSet(object.deleted) ? Boolean(object.deleted) : false };
  },

  toJSON(message: DeleteBankAccountResponse): unknown {
    const obj: any = {};
    if (message.deleted === true) {
      obj.deleted = message.deleted;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteBankAccountResponse>, I>>(base?: I): DeleteBankAccountResponse {
    return DeleteBankAccountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBankAccountResponse>, I>>(object: I): DeleteBankAccountResponse {
    const message = createBaseDeleteBankAccountResponse();
    message.deleted = object.deleted ?? false;
    return message;
  },
};

function createBaseUpdateBankAccountRequest(): UpdateBankAccountRequest {
  return { bankAccount: undefined };
}

export const UpdateBankAccountRequest = {
  fromJSON(object: any): UpdateBankAccountRequest {
    return { bankAccount: isSet(object.bankAccount) ? BankAccount.fromJSON(object.bankAccount) : undefined };
  },

  toJSON(message: UpdateBankAccountRequest): unknown {
    const obj: any = {};
    if (message.bankAccount !== undefined) {
      obj.bankAccount = BankAccount.toJSON(message.bankAccount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateBankAccountRequest>, I>>(base?: I): UpdateBankAccountRequest {
    return UpdateBankAccountRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateBankAccountRequest>, I>>(object: I): UpdateBankAccountRequest {
    const message = createBaseUpdateBankAccountRequest();
    message.bankAccount = (object.bankAccount !== undefined && object.bankAccount !== null)
      ? BankAccount.fromPartial(object.bankAccount)
      : undefined;
    return message;
  },
};

function createBaseUpdateBankAccountResponse(): UpdateBankAccountResponse {
  return { updated: false, bankAccount: undefined };
}

export const UpdateBankAccountResponse = {
  fromJSON(object: any): UpdateBankAccountResponse {
    return {
      updated: isSet(object.updated) ? Boolean(object.updated) : false,
      bankAccount: isSet(object.bankAccount) ? BankAccount.fromJSON(object.bankAccount) : undefined,
    };
  },

  toJSON(message: UpdateBankAccountResponse): unknown {
    const obj: any = {};
    if (message.updated === true) {
      obj.updated = message.updated;
    }
    if (message.bankAccount !== undefined) {
      obj.bankAccount = BankAccount.toJSON(message.bankAccount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateBankAccountResponse>, I>>(base?: I): UpdateBankAccountResponse {
    return UpdateBankAccountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateBankAccountResponse>, I>>(object: I): UpdateBankAccountResponse {
    const message = createBaseUpdateBankAccountResponse();
    message.updated = object.updated ?? false;
    message.bankAccount = (object.bankAccount !== undefined && object.bankAccount !== null)
      ? BankAccount.fromPartial(object.bankAccount)
      : undefined;
    return message;
  },
};

function createBaseGetPocketRequest(): GetPocketRequest {
  return { pocketId: 0 };
}

export const GetPocketRequest = {
  fromJSON(object: any): GetPocketRequest {
    return { pocketId: isSet(object.pocketId) ? Number(object.pocketId) : 0 };
  },

  toJSON(message: GetPocketRequest): unknown {
    const obj: any = {};
    if (message.pocketId !== 0) {
      obj.pocketId = Math.round(message.pocketId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPocketRequest>, I>>(base?: I): GetPocketRequest {
    return GetPocketRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPocketRequest>, I>>(object: I): GetPocketRequest {
    const message = createBaseGetPocketRequest();
    message.pocketId = object.pocketId ?? 0;
    return message;
  },
};

function createBaseGetPocketResponse(): GetPocketResponse {
  return { pocket: undefined };
}

export const GetPocketResponse = {
  fromJSON(object: any): GetPocketResponse {
    return { pocket: isSet(object.pocket) ? Pocket.fromJSON(object.pocket) : undefined };
  },

  toJSON(message: GetPocketResponse): unknown {
    const obj: any = {};
    if (message.pocket !== undefined) {
      obj.pocket = Pocket.toJSON(message.pocket);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPocketResponse>, I>>(base?: I): GetPocketResponse {
    return GetPocketResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPocketResponse>, I>>(object: I): GetPocketResponse {
    const message = createBaseGetPocketResponse();
    message.pocket = (object.pocket !== undefined && object.pocket !== null)
      ? Pocket.fromPartial(object.pocket)
      : undefined;
    return message;
  },
};

function createBaseGetSmartGoalsByPocketIdRequest(): GetSmartGoalsByPocketIdRequest {
  return { pocketId: 0 };
}

export const GetSmartGoalsByPocketIdRequest = {
  fromJSON(object: any): GetSmartGoalsByPocketIdRequest {
    return { pocketId: isSet(object.pocketId) ? Number(object.pocketId) : 0 };
  },

  toJSON(message: GetSmartGoalsByPocketIdRequest): unknown {
    const obj: any = {};
    if (message.pocketId !== 0) {
      obj.pocketId = Math.round(message.pocketId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSmartGoalsByPocketIdRequest>, I>>(base?: I): GetSmartGoalsByPocketIdRequest {
    return GetSmartGoalsByPocketIdRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetSmartGoalsByPocketIdRequest>, I>>(
    object: I,
  ): GetSmartGoalsByPocketIdRequest {
    const message = createBaseGetSmartGoalsByPocketIdRequest();
    message.pocketId = object.pocketId ?? 0;
    return message;
  },
};

function createBaseGetSmartGoalsByPocketIdResponse(): GetSmartGoalsByPocketIdResponse {
  return { smartGoals: [] };
}

export const GetSmartGoalsByPocketIdResponse = {
  fromJSON(object: any): GetSmartGoalsByPocketIdResponse {
    return {
      smartGoals: Array.isArray(object?.smartGoals) ? object.smartGoals.map((e: any) => SmartGoal.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetSmartGoalsByPocketIdResponse): unknown {
    const obj: any = {};
    if (message.smartGoals?.length) {
      obj.smartGoals = message.smartGoals.map((e) => SmartGoal.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetSmartGoalsByPocketIdResponse>, I>>(base?: I): GetSmartGoalsByPocketIdResponse {
    return GetSmartGoalsByPocketIdResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetSmartGoalsByPocketIdResponse>, I>>(
    object: I,
  ): GetSmartGoalsByPocketIdResponse {
    const message = createBaseGetSmartGoalsByPocketIdResponse();
    message.smartGoals = object.smartGoals?.map((e) => SmartGoal.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateSmartGoalRequest(): CreateSmartGoalRequest {
  return { pocketId: 0, smartGoal: undefined };
}

export const CreateSmartGoalRequest = {
  fromJSON(object: any): CreateSmartGoalRequest {
    return {
      pocketId: isSet(object.pocketId) ? Number(object.pocketId) : 0,
      smartGoal: isSet(object.smartGoal) ? SmartGoal.fromJSON(object.smartGoal) : undefined,
    };
  },

  toJSON(message: CreateSmartGoalRequest): unknown {
    const obj: any = {};
    if (message.pocketId !== 0) {
      obj.pocketId = Math.round(message.pocketId);
    }
    if (message.smartGoal !== undefined) {
      obj.smartGoal = SmartGoal.toJSON(message.smartGoal);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSmartGoalRequest>, I>>(base?: I): CreateSmartGoalRequest {
    return CreateSmartGoalRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateSmartGoalRequest>, I>>(object: I): CreateSmartGoalRequest {
    const message = createBaseCreateSmartGoalRequest();
    message.pocketId = object.pocketId ?? 0;
    message.smartGoal = (object.smartGoal !== undefined && object.smartGoal !== null)
      ? SmartGoal.fromPartial(object.smartGoal)
      : undefined;
    return message;
  },
};

function createBaseCreateSmartGoalResponse(): CreateSmartGoalResponse {
  return { smartGoalId: 0 };
}

export const CreateSmartGoalResponse = {
  fromJSON(object: any): CreateSmartGoalResponse {
    return { smartGoalId: isSet(object.smartGoalId) ? Number(object.smartGoalId) : 0 };
  },

  toJSON(message: CreateSmartGoalResponse): unknown {
    const obj: any = {};
    if (message.smartGoalId !== 0) {
      obj.smartGoalId = Math.round(message.smartGoalId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSmartGoalResponse>, I>>(base?: I): CreateSmartGoalResponse {
    return CreateSmartGoalResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateSmartGoalResponse>, I>>(object: I): CreateSmartGoalResponse {
    const message = createBaseCreateSmartGoalResponse();
    message.smartGoalId = object.smartGoalId ?? 0;
    return message;
  },
};

function createBaseUpdateSmartGoalRequest(): UpdateSmartGoalRequest {
  return { smartGoal: undefined };
}

export const UpdateSmartGoalRequest = {
  fromJSON(object: any): UpdateSmartGoalRequest {
    return { smartGoal: isSet(object.smartGoal) ? SmartGoal.fromJSON(object.smartGoal) : undefined };
  },

  toJSON(message: UpdateSmartGoalRequest): unknown {
    const obj: any = {};
    if (message.smartGoal !== undefined) {
      obj.smartGoal = SmartGoal.toJSON(message.smartGoal);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSmartGoalRequest>, I>>(base?: I): UpdateSmartGoalRequest {
    return UpdateSmartGoalRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSmartGoalRequest>, I>>(object: I): UpdateSmartGoalRequest {
    const message = createBaseUpdateSmartGoalRequest();
    message.smartGoal = (object.smartGoal !== undefined && object.smartGoal !== null)
      ? SmartGoal.fromPartial(object.smartGoal)
      : undefined;
    return message;
  },
};

function createBaseUpdateSmartGoalResponse(): UpdateSmartGoalResponse {
  return { smartGoalId: 0 };
}

export const UpdateSmartGoalResponse = {
  fromJSON(object: any): UpdateSmartGoalResponse {
    return { smartGoalId: isSet(object.smartGoalId) ? Number(object.smartGoalId) : 0 };
  },

  toJSON(message: UpdateSmartGoalResponse): unknown {
    const obj: any = {};
    if (message.smartGoalId !== 0) {
      obj.smartGoalId = Math.round(message.smartGoalId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateSmartGoalResponse>, I>>(base?: I): UpdateSmartGoalResponse {
    return UpdateSmartGoalResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSmartGoalResponse>, I>>(object: I): UpdateSmartGoalResponse {
    const message = createBaseUpdateSmartGoalResponse();
    message.smartGoalId = object.smartGoalId ?? 0;
    return message;
  },
};

function createBaseDeleteSmartGoalRequest(): DeleteSmartGoalRequest {
  return { smartGoalId: 0 };
}

export const DeleteSmartGoalRequest = {
  fromJSON(object: any): DeleteSmartGoalRequest {
    return { smartGoalId: isSet(object.smartGoalId) ? Number(object.smartGoalId) : 0 };
  },

  toJSON(message: DeleteSmartGoalRequest): unknown {
    const obj: any = {};
    if (message.smartGoalId !== 0) {
      obj.smartGoalId = Math.round(message.smartGoalId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteSmartGoalRequest>, I>>(base?: I): DeleteSmartGoalRequest {
    return DeleteSmartGoalRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteSmartGoalRequest>, I>>(object: I): DeleteSmartGoalRequest {
    const message = createBaseDeleteSmartGoalRequest();
    message.smartGoalId = object.smartGoalId ?? 0;
    return message;
  },
};

function createBaseDeleteSmartGoalResponse(): DeleteSmartGoalResponse {
  return { deleted: false };
}

export const DeleteSmartGoalResponse = {
  fromJSON(object: any): DeleteSmartGoalResponse {
    return { deleted: isSet(object.deleted) ? Boolean(object.deleted) : false };
  },

  toJSON(message: DeleteSmartGoalResponse): unknown {
    const obj: any = {};
    if (message.deleted === true) {
      obj.deleted = message.deleted;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteSmartGoalResponse>, I>>(base?: I): DeleteSmartGoalResponse {
    return DeleteSmartGoalResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteSmartGoalResponse>, I>>(object: I): DeleteSmartGoalResponse {
    const message = createBaseDeleteSmartGoalResponse();
    message.deleted = object.deleted ?? false;
    return message;
  },
};

function createBaseCreateMilestoneRequest(): CreateMilestoneRequest {
  return { smartGoalId: 0, milestone: undefined };
}

export const CreateMilestoneRequest = {
  fromJSON(object: any): CreateMilestoneRequest {
    return {
      smartGoalId: isSet(object.smartGoalId) ? Number(object.smartGoalId) : 0,
      milestone: isSet(object.milestone) ? Milestone.fromJSON(object.milestone) : undefined,
    };
  },

  toJSON(message: CreateMilestoneRequest): unknown {
    const obj: any = {};
    if (message.smartGoalId !== 0) {
      obj.smartGoalId = Math.round(message.smartGoalId);
    }
    if (message.milestone !== undefined) {
      obj.milestone = Milestone.toJSON(message.milestone);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateMilestoneRequest>, I>>(base?: I): CreateMilestoneRequest {
    return CreateMilestoneRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateMilestoneRequest>, I>>(object: I): CreateMilestoneRequest {
    const message = createBaseCreateMilestoneRequest();
    message.smartGoalId = object.smartGoalId ?? 0;
    message.milestone = (object.milestone !== undefined && object.milestone !== null)
      ? Milestone.fromPartial(object.milestone)
      : undefined;
    return message;
  },
};

function createBaseCreateMilestoneResponse(): CreateMilestoneResponse {
  return { milestoneId: 0 };
}

export const CreateMilestoneResponse = {
  fromJSON(object: any): CreateMilestoneResponse {
    return { milestoneId: isSet(object.milestoneId) ? Number(object.milestoneId) : 0 };
  },

  toJSON(message: CreateMilestoneResponse): unknown {
    const obj: any = {};
    if (message.milestoneId !== 0) {
      obj.milestoneId = Math.round(message.milestoneId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateMilestoneResponse>, I>>(base?: I): CreateMilestoneResponse {
    return CreateMilestoneResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateMilestoneResponse>, I>>(object: I): CreateMilestoneResponse {
    const message = createBaseCreateMilestoneResponse();
    message.milestoneId = object.milestoneId ?? 0;
    return message;
  },
};

function createBaseDeleteMilestoneRequest(): DeleteMilestoneRequest {
  return { milestoneId: 0 };
}

export const DeleteMilestoneRequest = {
  fromJSON(object: any): DeleteMilestoneRequest {
    return { milestoneId: isSet(object.milestoneId) ? Number(object.milestoneId) : 0 };
  },

  toJSON(message: DeleteMilestoneRequest): unknown {
    const obj: any = {};
    if (message.milestoneId !== 0) {
      obj.milestoneId = Math.round(message.milestoneId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteMilestoneRequest>, I>>(base?: I): DeleteMilestoneRequest {
    return DeleteMilestoneRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteMilestoneRequest>, I>>(object: I): DeleteMilestoneRequest {
    const message = createBaseDeleteMilestoneRequest();
    message.milestoneId = object.milestoneId ?? 0;
    return message;
  },
};

function createBaseDeleteMilestoneResponse(): DeleteMilestoneResponse {
  return { deleted: false };
}

export const DeleteMilestoneResponse = {
  fromJSON(object: any): DeleteMilestoneResponse {
    return { deleted: isSet(object.deleted) ? Boolean(object.deleted) : false };
  },

  toJSON(message: DeleteMilestoneResponse): unknown {
    const obj: any = {};
    if (message.deleted === true) {
      obj.deleted = message.deleted;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteMilestoneResponse>, I>>(base?: I): DeleteMilestoneResponse {
    return DeleteMilestoneResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteMilestoneResponse>, I>>(object: I): DeleteMilestoneResponse {
    const message = createBaseDeleteMilestoneResponse();
    message.deleted = object.deleted ?? false;
    return message;
  },
};

function createBaseUpdateMilestoneRequest(): UpdateMilestoneRequest {
  return { milestone: undefined };
}

export const UpdateMilestoneRequest = {
  fromJSON(object: any): UpdateMilestoneRequest {
    return { milestone: isSet(object.milestone) ? Milestone.fromJSON(object.milestone) : undefined };
  },

  toJSON(message: UpdateMilestoneRequest): unknown {
    const obj: any = {};
    if (message.milestone !== undefined) {
      obj.milestone = Milestone.toJSON(message.milestone);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateMilestoneRequest>, I>>(base?: I): UpdateMilestoneRequest {
    return UpdateMilestoneRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateMilestoneRequest>, I>>(object: I): UpdateMilestoneRequest {
    const message = createBaseUpdateMilestoneRequest();
    message.milestone = (object.milestone !== undefined && object.milestone !== null)
      ? Milestone.fromPartial(object.milestone)
      : undefined;
    return message;
  },
};

function createBaseUpdateMilestoneResponse(): UpdateMilestoneResponse {
  return { milestone: undefined };
}

export const UpdateMilestoneResponse = {
  fromJSON(object: any): UpdateMilestoneResponse {
    return { milestone: isSet(object.milestone) ? Milestone.fromJSON(object.milestone) : undefined };
  },

  toJSON(message: UpdateMilestoneResponse): unknown {
    const obj: any = {};
    if (message.milestone !== undefined) {
      obj.milestone = Milestone.toJSON(message.milestone);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateMilestoneResponse>, I>>(base?: I): UpdateMilestoneResponse {
    return UpdateMilestoneResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateMilestoneResponse>, I>>(object: I): UpdateMilestoneResponse {
    const message = createBaseUpdateMilestoneResponse();
    message.milestone = (object.milestone !== undefined && object.milestone !== null)
      ? Milestone.fromPartial(object.milestone)
      : undefined;
    return message;
  },
};

function createBaseGetMilestonesBySmartGoalIdRequest(): GetMilestonesBySmartGoalIdRequest {
  return { smartGoalId: 0 };
}

export const GetMilestonesBySmartGoalIdRequest = {
  fromJSON(object: any): GetMilestonesBySmartGoalIdRequest {
    return { smartGoalId: isSet(object.smartGoalId) ? Number(object.smartGoalId) : 0 };
  },

  toJSON(message: GetMilestonesBySmartGoalIdRequest): unknown {
    const obj: any = {};
    if (message.smartGoalId !== 0) {
      obj.smartGoalId = Math.round(message.smartGoalId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMilestonesBySmartGoalIdRequest>, I>>(
    base?: I,
  ): GetMilestonesBySmartGoalIdRequest {
    return GetMilestonesBySmartGoalIdRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetMilestonesBySmartGoalIdRequest>, I>>(
    object: I,
  ): GetMilestonesBySmartGoalIdRequest {
    const message = createBaseGetMilestonesBySmartGoalIdRequest();
    message.smartGoalId = object.smartGoalId ?? 0;
    return message;
  },
};

function createBaseGetMilestonesBySmartGoalIdResponse(): GetMilestonesBySmartGoalIdResponse {
  return { milestones: [] };
}

export const GetMilestonesBySmartGoalIdResponse = {
  toJSON(message: GetMilestonesBySmartGoalIdResponse): unknown {
    const obj: any = {};
    if (message.milestones?.length) {
      obj.milestones = message.milestones.map((e) => Milestone.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMilestonesBySmartGoalIdResponse>, I>>(
    base?: I,
  ): GetMilestonesBySmartGoalIdResponse {
    return GetMilestonesBySmartGoalIdResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetMilestonesBySmartGoalIdResponse>, I>>(
    object: I,
  ): GetMilestonesBySmartGoalIdResponse {
    const message = createBaseGetMilestonesBySmartGoalIdResponse();
    message.milestones = object.milestones?.map((e) => Milestone.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetMilestoneRequest(): GetMilestoneRequest {
  return { milestoneId: 0 };
}

export const GetMilestoneRequest = {
  fromJSON(object: any): GetMilestoneRequest {
    return { milestoneId: isSet(object.milestoneId) ? Number(object.milestoneId) : 0 };
  },

  toJSON(message: GetMilestoneRequest): unknown {
    const obj: any = {};
    if (message.milestoneId !== 0) {
      obj.milestoneId = Math.round(message.milestoneId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMilestoneRequest>, I>>(base?: I): GetMilestoneRequest {
    return GetMilestoneRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetMilestoneRequest>, I>>(object: I): GetMilestoneRequest {
    const message = createBaseGetMilestoneRequest();
    message.milestoneId = object.milestoneId ?? 0;
    return message;
  },
};

function createBaseGetMilestoneResponse(): GetMilestoneResponse {
  return { milestone: undefined };
}

export const GetMilestoneResponse = {
  fromJSON(object: any): GetMilestoneResponse {
    return { milestone: isSet(object.milestone) ? Milestone.fromJSON(object.milestone) : undefined };
  },

  toJSON(message: GetMilestoneResponse): unknown {
    const obj: any = {};
    if (message.milestone !== undefined) {
      obj.milestone = Milestone.toJSON(message.milestone);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMilestoneResponse>, I>>(base?: I): GetMilestoneResponse {
    return GetMilestoneResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetMilestoneResponse>, I>>(object: I): GetMilestoneResponse {
    const message = createBaseGetMilestoneResponse();
    message.milestone = (object.milestone !== undefined && object.milestone !== null)
      ? Milestone.fromPartial(object.milestone)
      : undefined;
    return message;
  },
};

function createBaseGetForecastRequest(): GetForecastRequest {
  return { smartGoalId: 0 };
}

export const GetForecastRequest = {
  fromJSON(object: any): GetForecastRequest {
    return { smartGoalId: isSet(object.smartGoalId) ? Number(object.smartGoalId) : 0 };
  },

  toJSON(message: GetForecastRequest): unknown {
    const obj: any = {};
    if (message.smartGoalId !== 0) {
      obj.smartGoalId = Math.round(message.smartGoalId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetForecastRequest>, I>>(base?: I): GetForecastRequest {
    return GetForecastRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetForecastRequest>, I>>(object: I): GetForecastRequest {
    const message = createBaseGetForecastRequest();
    message.smartGoalId = object.smartGoalId ?? 0;
    return message;
  },
};

function createBaseGetForecastResponse(): GetForecastResponse {
  return { forecast: undefined };
}

export const GetForecastResponse = {
  fromJSON(object: any): GetForecastResponse {
    return { forecast: isSet(object.forecast) ? Forecast.fromJSON(object.forecast) : undefined };
  },

  toJSON(message: GetForecastResponse): unknown {
    const obj: any = {};
    if (message.forecast !== undefined) {
      obj.forecast = Forecast.toJSON(message.forecast);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetForecastResponse>, I>>(base?: I): GetForecastResponse {
    return GetForecastResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetForecastResponse>, I>>(object: I): GetForecastResponse {
    const message = createBaseGetForecastResponse();
    message.forecast = (object.forecast !== undefined && object.forecast !== null)
      ? Forecast.fromPartial(object.forecast)
      : undefined;
    return message;
  },
};

function createBaseCreateBudgetRequest(): CreateBudgetRequest {
  return { milestroneId: 0, budget: undefined };
}

export const CreateBudgetRequest = {
  fromJSON(object: any): CreateBudgetRequest {
    return {
      milestroneId: isSet(object.milestroneId) ? Number(object.milestroneId) : 0,
      budget: isSet(object.budget) ? Budget.fromJSON(object.budget) : undefined,
    };
  },

  toJSON(message: CreateBudgetRequest): unknown {
    const obj: any = {};
    if (message.milestroneId !== 0) {
      obj.milestroneId = Math.round(message.milestroneId);
    }
    if (message.budget !== undefined) {
      obj.budget = Budget.toJSON(message.budget);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateBudgetRequest>, I>>(base?: I): CreateBudgetRequest {
    return CreateBudgetRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateBudgetRequest>, I>>(object: I): CreateBudgetRequest {
    const message = createBaseCreateBudgetRequest();
    message.milestroneId = object.milestroneId ?? 0;
    message.budget = (object.budget !== undefined && object.budget !== null)
      ? Budget.fromPartial(object.budget)
      : undefined;
    return message;
  },
};

function createBaseCreateBudgetResponse(): CreateBudgetResponse {
  return { budgetId: 0 };
}

export const CreateBudgetResponse = {
  fromJSON(object: any): CreateBudgetResponse {
    return { budgetId: isSet(object.budgetId) ? Number(object.budgetId) : 0 };
  },

  toJSON(message: CreateBudgetResponse): unknown {
    const obj: any = {};
    if (message.budgetId !== 0) {
      obj.budgetId = Math.round(message.budgetId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateBudgetResponse>, I>>(base?: I): CreateBudgetResponse {
    return CreateBudgetResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateBudgetResponse>, I>>(object: I): CreateBudgetResponse {
    const message = createBaseCreateBudgetResponse();
    message.budgetId = object.budgetId ?? 0;
    return message;
  },
};

function createBaseUpdateBudgetRequest(): UpdateBudgetRequest {
  return { budget: undefined };
}

export const UpdateBudgetRequest = {
  fromJSON(object: any): UpdateBudgetRequest {
    return { budget: isSet(object.budget) ? Budget.fromJSON(object.budget) : undefined };
  },

  toJSON(message: UpdateBudgetRequest): unknown {
    const obj: any = {};
    if (message.budget !== undefined) {
      obj.budget = Budget.toJSON(message.budget);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateBudgetRequest>, I>>(base?: I): UpdateBudgetRequest {
    return UpdateBudgetRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateBudgetRequest>, I>>(object: I): UpdateBudgetRequest {
    const message = createBaseUpdateBudgetRequest();
    message.budget = (object.budget !== undefined && object.budget !== null)
      ? Budget.fromPartial(object.budget)
      : undefined;
    return message;
  },
};

function createBaseUpdateBudgetResponse(): UpdateBudgetResponse {
  return { budget: undefined };
}

export const UpdateBudgetResponse = {
  fromJSON(object: any): UpdateBudgetResponse {
    return { budget: isSet(object.budget) ? Budget.fromJSON(object.budget) : undefined };
  },

  toJSON(message: UpdateBudgetResponse): unknown {
    const obj: any = {};
    if (message.budget !== undefined) {
      obj.budget = Budget.toJSON(message.budget);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateBudgetResponse>, I>>(base?: I): UpdateBudgetResponse {
    return UpdateBudgetResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateBudgetResponse>, I>>(object: I): UpdateBudgetResponse {
    const message = createBaseUpdateBudgetResponse();
    message.budget = (object.budget !== undefined && object.budget !== null)
      ? Budget.fromPartial(object.budget)
      : undefined;
    return message;
  },
};

function createBaseDeleteBudgetRequest(): DeleteBudgetRequest {
  return { budgetId: 0 };
}

export const DeleteBudgetRequest = {
  fromJSON(object: any): DeleteBudgetRequest {
    return { budgetId: isSet(object.budgetId) ? Number(object.budgetId) : 0 };
  },

  toJSON(message: DeleteBudgetRequest): unknown {
    const obj: any = {};
    if (message.budgetId !== 0) {
      obj.budgetId = Math.round(message.budgetId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteBudgetRequest>, I>>(base?: I): DeleteBudgetRequest {
    return DeleteBudgetRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBudgetRequest>, I>>(object: I): DeleteBudgetRequest {
    const message = createBaseDeleteBudgetRequest();
    message.budgetId = object.budgetId ?? 0;
    return message;
  },
};

function createBaseDeleteBudgetResponse(): DeleteBudgetResponse {
  return { deleted: false };
}

export const DeleteBudgetResponse = {
  fromJSON(object: any): DeleteBudgetResponse {
    return { deleted: isSet(object.deleted) ? Boolean(object.deleted) : false };
  },

  toJSON(message: DeleteBudgetResponse): unknown {
    const obj: any = {};
    if (message.deleted === true) {
      obj.deleted = message.deleted;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteBudgetResponse>, I>>(base?: I): DeleteBudgetResponse {
    return DeleteBudgetResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBudgetResponse>, I>>(object: I): DeleteBudgetResponse {
    const message = createBaseDeleteBudgetResponse();
    message.deleted = object.deleted ?? false;
    return message;
  },
};

function createBaseGetBudgetRequest(): GetBudgetRequest {
  return { budgetId: 0 };
}

export const GetBudgetRequest = {
  fromJSON(object: any): GetBudgetRequest {
    return { budgetId: isSet(object.budgetId) ? Number(object.budgetId) : 0 };
  },

  toJSON(message: GetBudgetRequest): unknown {
    const obj: any = {};
    if (message.budgetId !== 0) {
      obj.budgetId = Math.round(message.budgetId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBudgetRequest>, I>>(base?: I): GetBudgetRequest {
    return GetBudgetRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBudgetRequest>, I>>(object: I): GetBudgetRequest {
    const message = createBaseGetBudgetRequest();
    message.budgetId = object.budgetId ?? 0;
    return message;
  },
};

function createBaseGetBudgetResponse(): GetBudgetResponse {
  return { budget: undefined };
}

export const GetBudgetResponse = {
  fromJSON(object: any): GetBudgetResponse {
    return { budget: isSet(object.budget) ? Budget.fromJSON(object.budget) : undefined };
  },

  toJSON(message: GetBudgetResponse): unknown {
    const obj: any = {};
    if (message.budget !== undefined) {
      obj.budget = Budget.toJSON(message.budget);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBudgetResponse>, I>>(base?: I): GetBudgetResponse {
    return GetBudgetResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBudgetResponse>, I>>(object: I): GetBudgetResponse {
    const message = createBaseGetBudgetResponse();
    message.budget = (object.budget !== undefined && object.budget !== null)
      ? Budget.fromPartial(object.budget)
      : undefined;
    return message;
  },
};

function createBaseGetAllBudgetsRequest(): GetAllBudgetsRequest {
  return { pocketId: 0, smartGoalId: 0, milestoneId: 0 };
}

export const GetAllBudgetsRequest = {
  fromJSON(object: any): GetAllBudgetsRequest {
    return {
      pocketId: isSet(object.pocketId) ? Number(object.pocketId) : 0,
      smartGoalId: isSet(object.smartGoalId) ? Number(object.smartGoalId) : 0,
      milestoneId: isSet(object.milestoneId) ? Number(object.milestoneId) : 0,
    };
  },

  toJSON(message: GetAllBudgetsRequest): unknown {
    const obj: any = {};
    if (message.pocketId !== 0) {
      obj.pocketId = Math.round(message.pocketId);
    }
    if (message.smartGoalId !== 0) {
      obj.smartGoalId = Math.round(message.smartGoalId);
    }
    if (message.milestoneId !== 0) {
      obj.milestoneId = Math.round(message.milestoneId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllBudgetsRequest>, I>>(base?: I): GetAllBudgetsRequest {
    return GetAllBudgetsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAllBudgetsRequest>, I>>(object: I): GetAllBudgetsRequest {
    const message = createBaseGetAllBudgetsRequest();
    message.pocketId = object.pocketId ?? 0;
    message.smartGoalId = object.smartGoalId ?? 0;
    message.milestoneId = object.milestoneId ?? 0;
    return message;
  },
};

function createBaseGetAllBudgetsResponse(): GetAllBudgetsResponse {
  return { budgets: [] };
}

export const GetAllBudgetsResponse = {
  fromJSON(object: any): GetAllBudgetsResponse {
    return { budgets: Array.isArray(object?.budgets) ? object.budgets.map((e: any) => Budget.fromJSON(e)) : [] };
  },

  toJSON(message: GetAllBudgetsResponse): unknown {
    const obj: any = {};
    if (message.budgets?.length) {
      obj.budgets = message.budgets.map((e) => Budget.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllBudgetsResponse>, I>>(base?: I): GetAllBudgetsResponse {
    return GetAllBudgetsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAllBudgetsResponse>, I>>(object: I): GetAllBudgetsResponse {
    const message = createBaseGetAllBudgetsResponse();
    message.budgets = object.budgets?.map((e) => Budget.fromPartial(e)) || [];
    return message;
  },
};

function createBaseHealthCheckRequest(): HealthCheckRequest {
  return {};
}

export const HealthCheckRequest = {
  fromJSON(_: any): HealthCheckRequest {
    return {};
  },

  toJSON(_: HealthCheckRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<HealthCheckRequest>, I>>(base?: I): HealthCheckRequest {
    return HealthCheckRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<HealthCheckRequest>, I>>(_: I): HealthCheckRequest {
    const message = createBaseHealthCheckRequest();
    return message;
  },
};

function createBaseHealthCheckResponse(): HealthCheckResponse {
  return { healthy: false };
}

export const HealthCheckResponse = {
  fromJSON(object: any): HealthCheckResponse {
    return { healthy: isSet(object.healthy) ? Boolean(object.healthy) : false };
  },

  toJSON(message: HealthCheckResponse): unknown {
    const obj: any = {};
    if (message.healthy === true) {
      obj.healthy = message.healthy;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HealthCheckResponse>, I>>(base?: I): HealthCheckResponse {
    return HealthCheckResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<HealthCheckResponse>, I>>(object: I): HealthCheckResponse {
    const message = createBaseHealthCheckResponse();
    message.healthy = object.healthy ?? false;
    return message;
  },
};

function createBaseReadynessCheckRequest(): ReadynessCheckRequest {
  return {};
}

export const ReadynessCheckRequest = {
  fromJSON(_: any): ReadynessCheckRequest {
    return {};
  },

  toJSON(_: ReadynessCheckRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadynessCheckRequest>, I>>(base?: I): ReadynessCheckRequest {
    return ReadynessCheckRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReadynessCheckRequest>, I>>(_: I): ReadynessCheckRequest {
    const message = createBaseReadynessCheckRequest();
    return message;
  },
};

function createBaseReadynessCheckResponse(): ReadynessCheckResponse {
  return { healthy: false };
}

export const ReadynessCheckResponse = {
  fromJSON(object: any): ReadynessCheckResponse {
    return { healthy: isSet(object.healthy) ? Boolean(object.healthy) : false };
  },

  toJSON(message: ReadynessCheckResponse): unknown {
    const obj: any = {};
    if (message.healthy === true) {
      obj.healthy = message.healthy;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ReadynessCheckResponse>, I>>(base?: I): ReadynessCheckResponse {
    return ReadynessCheckResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReadynessCheckResponse>, I>>(object: I): ReadynessCheckResponse {
    const message = createBaseReadynessCheckResponse();
    message.healthy = object.healthy ?? false;
    return message;
  },
};


function createBaseGetInvestmentAcccountRequest(): GetInvestmentAcccountRequest {
  return { userId: 0, investmentAccountId: 0 };
}

export const GetInvestmentAcccountRequest = {
  fromJSON(object: any): GetInvestmentAcccountRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      investmentAccountId: isSet(object.investmentAccountId) ? Number(object.investmentAccountId) : 0,
    };
  },

  toJSON(message: GetInvestmentAcccountRequest): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.investmentAccountId !== 0) {
      obj.investmentAccountId = Math.round(message.investmentAccountId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetInvestmentAcccountRequest>, I>>(base?: I): GetInvestmentAcccountRequest {
    return GetInvestmentAcccountRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetInvestmentAcccountRequest>, I>>(object: I): GetInvestmentAcccountRequest {
    const message = createBaseGetInvestmentAcccountRequest();
    message.userId = object.userId ?? 0;
    message.investmentAccountId = object.investmentAccountId ?? 0;
    return message;
  },
};

function createBaseGetInvestmentAcccountResponse(): GetInvestmentAcccountResponse {
  return { investmentAccount: undefined };
}

export const GetInvestmentAcccountResponse = {
  fromJSON(object: any): GetInvestmentAcccountResponse {
    return {
      investmentAccount: isSet(object.investmentAccount)
        ? InvestmentAccount.fromJSON(object.investmentAccount)
        : undefined,
    };
  },

  toJSON(message: GetInvestmentAcccountResponse): unknown {
    const obj: any = {};
    if (message.investmentAccount !== undefined) {
      obj.investmentAccount = InvestmentAccount.toJSON(message.investmentAccount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetInvestmentAcccountResponse>, I>>(base?: I): GetInvestmentAcccountResponse {
    return GetInvestmentAcccountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetInvestmentAcccountResponse>, I>>(
    object: I,
  ): GetInvestmentAcccountResponse {
    const message = createBaseGetInvestmentAcccountResponse();
    message.investmentAccount = (object.investmentAccount !== undefined && object.investmentAccount !== null)
      ? InvestmentAccount.fromPartial(object.investmentAccount)
      : undefined;
    return message;
  },
};

function createBaseGetMortgageAccountRequest(): GetMortgageAccountRequest {
  return { userId: 0, mortgageAccountId: 0 };
}

export const GetMortgageAccountRequest = {
  fromJSON(object: any): GetMortgageAccountRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      mortgageAccountId: isSet(object.mortgageAccountId) ? Number(object.mortgageAccountId) : 0,
    };
  },

  toJSON(message: GetMortgageAccountRequest): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.mortgageAccountId !== 0) {
      obj.mortgageAccountId = Math.round(message.mortgageAccountId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMortgageAccountRequest>, I>>(base?: I): GetMortgageAccountRequest {
    return GetMortgageAccountRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetMortgageAccountRequest>, I>>(object: I): GetMortgageAccountRequest {
    const message = createBaseGetMortgageAccountRequest();
    message.userId = object.userId ?? 0;
    message.mortgageAccountId = object.mortgageAccountId ?? 0;
    return message;
  },
};

function createBaseGetMortgageAccountResponse(): GetMortgageAccountResponse {
  return { mortageAccount: undefined };
}

export const GetMortgageAccountResponse = {
  fromJSON(object: any): GetMortgageAccountResponse {
    return {
      mortageAccount: isSet(object.mortageAccount) ? MortgageAccount.fromJSON(object.mortageAccount) : undefined,
    };
  },

  toJSON(message: GetMortgageAccountResponse): unknown {
    const obj: any = {};
    if (message.mortageAccount !== undefined) {
      obj.mortageAccount = MortgageAccount.toJSON(message.mortageAccount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetMortgageAccountResponse>, I>>(base?: I): GetMortgageAccountResponse {
    return GetMortgageAccountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetMortgageAccountResponse>, I>>(object: I): GetMortgageAccountResponse {
    const message = createBaseGetMortgageAccountResponse();
    message.mortageAccount = (object.mortageAccount !== undefined && object.mortageAccount !== null)
      ? MortgageAccount.fromPartial(object.mortageAccount)
      : undefined;
    return message;
  },
};

function createBaseGetLiabilityAccountRequest(): GetLiabilityAccountRequest {
  return { userId: 0, liabilityAccountId: 0 };
}

export const GetLiabilityAccountRequest = {
  fromJSON(object: any): GetLiabilityAccountRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      liabilityAccountId: isSet(object.liabilityAccountId) ? Number(object.liabilityAccountId) : 0,
    };
  },

  toJSON(message: GetLiabilityAccountRequest): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.liabilityAccountId !== 0) {
      obj.liabilityAccountId = Math.round(message.liabilityAccountId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLiabilityAccountRequest>, I>>(base?: I): GetLiabilityAccountRequest {
    return GetLiabilityAccountRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetLiabilityAccountRequest>, I>>(object: I): GetLiabilityAccountRequest {
    const message = createBaseGetLiabilityAccountRequest();
    message.userId = object.userId ?? 0;
    message.liabilityAccountId = object.liabilityAccountId ?? 0;
    return message;
  },
};

function createBaseGetLiabilityAccountResponse(): GetLiabilityAccountResponse {
  return { liabilityAccount: undefined };
}

export const GetLiabilityAccountResponse = {
  fromJSON(object: any): GetLiabilityAccountResponse {
    return {
      liabilityAccount: isSet(object.liabilityAccount) ? CreditAccount.fromJSON(object.liabilityAccount) : undefined,
    };
  },

  toJSON(message: GetLiabilityAccountResponse): unknown {
    const obj: any = {};
    if (message.liabilityAccount !== undefined) {
      obj.liabilityAccount = CreditAccount.toJSON(message.liabilityAccount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLiabilityAccountResponse>, I>>(base?: I): GetLiabilityAccountResponse {
    return GetLiabilityAccountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetLiabilityAccountResponse>, I>>(object: I): GetLiabilityAccountResponse {
    const message = createBaseGetLiabilityAccountResponse();
    message.liabilityAccount = (object.liabilityAccount !== undefined && object.liabilityAccount !== null)
      ? CreditAccount.fromPartial(object.liabilityAccount)
      : undefined;
    return message;
  },
};

function createBaseGetStudentLoanAccountRequest(): GetStudentLoanAccountRequest {
  return { userId: 0, studentLoanAccountId: 0 };
}

export const GetStudentLoanAccountRequest = {
  fromJSON(object: any): GetStudentLoanAccountRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      studentLoanAccountId: isSet(object.studentLoanAccountId) ? Number(object.studentLoanAccountId) : 0,
    };
  },

  toJSON(message: GetStudentLoanAccountRequest): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.studentLoanAccountId !== 0) {
      obj.studentLoanAccountId = Math.round(message.studentLoanAccountId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetStudentLoanAccountRequest>, I>>(base?: I): GetStudentLoanAccountRequest {
    return GetStudentLoanAccountRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetStudentLoanAccountRequest>, I>>(object: I): GetStudentLoanAccountRequest {
    const message = createBaseGetStudentLoanAccountRequest();
    message.userId = object.userId ?? 0;
    message.studentLoanAccountId = object.studentLoanAccountId ?? 0;
    return message;
  },
};

function createBaseGetStudentLoanAccountResponse(): GetStudentLoanAccountResponse {
  return { studentLoanAccount: undefined };
}

export const GetStudentLoanAccountResponse = {
  fromJSON(object: any): GetStudentLoanAccountResponse {
    return {
      studentLoanAccount: isSet(object.studentLoanAccount)
        ? StudentLoanAccount.fromJSON(object.studentLoanAccount)
        : undefined,
    };
  },

  toJSON(message: GetStudentLoanAccountResponse): unknown {
    const obj: any = {};
    if (message.studentLoanAccount !== undefined) {
      obj.studentLoanAccount = StudentLoanAccount.toJSON(message.studentLoanAccount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetStudentLoanAccountResponse>, I>>(base?: I): GetStudentLoanAccountResponse {
    return GetStudentLoanAccountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetStudentLoanAccountResponse>, I>>(
    object: I,
  ): GetStudentLoanAccountResponse {
    const message = createBaseGetStudentLoanAccountResponse();
    message.studentLoanAccount = (object.studentLoanAccount !== undefined && object.studentLoanAccount !== null)
      ? StudentLoanAccount.fromPartial(object.studentLoanAccount)
      : undefined;
    return message;
  },
};

function createBaseCreateManualLinkRequest(): CreateManualLinkRequest {
  return { userId: 0, manualAccountLink: undefined };
}

export const CreateManualLinkRequest = {
  fromJSON(object: any): CreateManualLinkRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      manualAccountLink: isSet(object.manualAccountLink) ? Link.fromJSON(object.manualAccountLink) : undefined,
    };
  },

  toJSON(message: CreateManualLinkRequest): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.manualAccountLink !== undefined) {
      obj.manualAccountLink = Link.toJSON(message.manualAccountLink);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateManualLinkRequest>, I>>(base?: I): CreateManualLinkRequest {
    return CreateManualLinkRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateManualLinkRequest>, I>>(object: I): CreateManualLinkRequest {
    const message = createBaseCreateManualLinkRequest();
    message.userId = object.userId ?? 0;
    message.manualAccountLink = (object.manualAccountLink !== undefined && object.manualAccountLink !== null)
      ? Link.fromPartial(object.manualAccountLink)
      : undefined;
    return message;
  },
};

function createBaseCreateManualLinkResponse(): CreateManualLinkResponse {
  return { linkId: 0 };
}

export const CreateManualLinkResponse = {
  fromJSON(object: any): CreateManualLinkResponse {
    return { linkId: isSet(object.linkId) ? Number(object.linkId) : 0 };
  },

  toJSON(message: CreateManualLinkResponse): unknown {
    const obj: any = {};
    if (message.linkId !== 0) {
      obj.linkId = Math.round(message.linkId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateManualLinkResponse>, I>>(base?: I): CreateManualLinkResponse {
    return CreateManualLinkResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateManualLinkResponse>, I>>(object: I): CreateManualLinkResponse {
    const message = createBaseCreateManualLinkResponse();
    message.linkId = object.linkId ?? 0;
    return message;
  },
};

function createBaseGetLinkRequest(): GetLinkRequest {
  return { userId: 0, linkId: 0 };
}

export const GetLinkRequest = {
  fromJSON(object: any): GetLinkRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      linkId: isSet(object.linkId) ? Number(object.linkId) : 0,
    };
  },

  toJSON(message: GetLinkRequest): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.linkId !== 0) {
      obj.linkId = Math.round(message.linkId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLinkRequest>, I>>(base?: I): GetLinkRequest {
    return GetLinkRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetLinkRequest>, I>>(object: I): GetLinkRequest {
    const message = createBaseGetLinkRequest();
    message.userId = object.userId ?? 0;
    message.linkId = object.linkId ?? 0;
    return message;
  },
};

function createBaseGetLinkResponse(): GetLinkResponse {
  return { link: undefined };
}

export const GetLinkResponse = {
  fromJSON(object: any): GetLinkResponse {
    return { link: isSet(object.link) ? Link.fromJSON(object.link) : undefined };
  },

  toJSON(message: GetLinkResponse): unknown {
    const obj: any = {};
    if (message.link !== undefined) {
      obj.link = Link.toJSON(message.link);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLinkResponse>, I>>(base?: I): GetLinkResponse {
    return GetLinkResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetLinkResponse>, I>>(object: I): GetLinkResponse {
    const message = createBaseGetLinkResponse();
    message.link = (object.link !== undefined && object.link !== null) ? Link.fromPartial(object.link) : undefined;
    return message;
  },
};

function createBaseGetLinksRequest(): GetLinksRequest {
  return { userId: 0 };
}

export const GetLinksRequest = {
  fromJSON(object: any): GetLinksRequest {
    return { userId: isSet(object.userId) ? Number(object.userId) : 0 };
  },

  toJSON(message: GetLinksRequest): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLinksRequest>, I>>(base?: I): GetLinksRequest {
    return GetLinksRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetLinksRequest>, I>>(object: I): GetLinksRequest {
    const message = createBaseGetLinksRequest();
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseGetLinksResponse(): GetLinksResponse {
  return { links: [] };
}

export const GetLinksResponse = {
  fromJSON(object: any): GetLinksResponse {
    return { links: Array.isArray(object?.links) ? object.links.map((e: any) => Link.fromJSON(e)) : [] };
  },

  toJSON(message: GetLinksResponse): unknown {
    const obj: any = {};
    if (message.links?.length) {
      obj.links = message.links.map((e) => Link.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetLinksResponse>, I>>(base?: I): GetLinksResponse {
    return GetLinksResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetLinksResponse>, I>>(object: I): GetLinksResponse {
    const message = createBaseGetLinksResponse();
    message.links = object.links?.map((e) => Link.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDeleteLinkRequest(): DeleteLinkRequest {
  return { userId: 0, linkId: 0 };
}

export const DeleteLinkRequest = {
  fromJSON(object: any): DeleteLinkRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      linkId: isSet(object.linkId) ? Number(object.linkId) : 0,
    };
  },

  toJSON(message: DeleteLinkRequest): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.linkId !== 0) {
      obj.linkId = Math.round(message.linkId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteLinkRequest>, I>>(base?: I): DeleteLinkRequest {
    return DeleteLinkRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteLinkRequest>, I>>(object: I): DeleteLinkRequest {
    const message = createBaseDeleteLinkRequest();
    message.userId = object.userId ?? 0;
    message.linkId = object.linkId ?? 0;
    return message;
  },
};

function createBaseDeleteLinkResponse(): DeleteLinkResponse {
  return { linkId: 0 };
}

export const DeleteLinkResponse = {
  fromJSON(object: any): DeleteLinkResponse {
    return { linkId: isSet(object.linkId) ? Number(object.linkId) : 0 };
  },

  toJSON(message: DeleteLinkResponse): unknown {
    const obj: any = {};
    if (message.linkId !== 0) {
      obj.linkId = Math.round(message.linkId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteLinkResponse>, I>>(base?: I): DeleteLinkResponse {
    return DeleteLinkResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteLinkResponse>, I>>(object: I): DeleteLinkResponse {
    const message = createBaseDeleteLinkResponse();
    message.linkId = object.linkId ?? 0;
    return message;
  },
};

function createBaseProcessWebhookRequest(): ProcessWebhookRequest {
  return {
    webhookType: "",
    webhookCode: "",
    itemId: "",
    initialUpdateComplete: false,
    historicalUpdateComplete: "",
    environment: "",
    newTransactions: [],
    removedTransactions: [],
    error: {},
    accountIds: [],
    consentExpirationTime: "",
    accountIdsWithNewLiabilities: [],
    accountIdsWithUpdatedLiabilities: [],
    newHoldings: 0,
    updatedHoldings: 0,
  };
}

export const ProcessWebhookRequest = {
  fromJSON(object: any): ProcessWebhookRequest {
    return {
      webhookType: isSet(object.webhookType) ? String(object.webhookType) : "",
      webhookCode: isSet(object.webhookCode) ? String(object.webhookCode) : "",
      itemId: isSet(object.itemId) ? String(object.itemId) : "",
      initialUpdateComplete: isSet(object.initialUpdateComplete) ? Boolean(object.initialUpdateComplete) : false,
      historicalUpdateComplete: isSet(object.historicalUpdateComplete) ? String(object.historicalUpdateComplete) : "",
      environment: isSet(object.environment) ? String(object.environment) : "",
      newTransactions: Array.isArray(object?.newTransactions) ? object.newTransactions.map((e: any) => String(e)) : [],
      removedTransactions: Array.isArray(object?.removedTransactions)
        ? object.removedTransactions.map((e: any) => String(e))
        : [],
      error: isObject(object.error)
        ? Object.entries(object.error).reduce<{ [key: string]: Any }>((acc, [key, value]) => {
          acc[key] = Any.fromJSON(value);
          return acc;
        }, {})
        : {},
      accountIds: Array.isArray(object?.accountIds) ? object.accountIds.map((e: any) => String(e)) : [],
      consentExpirationTime: isSet(object.consentExpirationTime) ? String(object.consentExpirationTime) : "",
      accountIdsWithNewLiabilities: Array.isArray(object?.accountIdsWithNewLiabilities)
        ? object.accountIdsWithNewLiabilities.map((e: any) => String(e))
        : [],
      accountIdsWithUpdatedLiabilities: Array.isArray(object?.accountIdsWithUpdatedLiabilities)
        ? object.accountIdsWithUpdatedLiabilities.map((e: any) => String(e))
        : [],
      newHoldings: isSet(object.newHoldings) ? Number(object.newHoldings) : 0,
      updatedHoldings: isSet(object.updatedHoldings) ? Number(object.updatedHoldings) : 0,
    };
  },

  toJSON(message: ProcessWebhookRequest): unknown {
    const obj: any = {};
    if (message.webhookType !== "") {
      obj.webhookType = message.webhookType;
    }
    if (message.webhookCode !== "") {
      obj.webhookCode = message.webhookCode;
    }
    if (message.itemId !== "") {
      obj.itemId = message.itemId;
    }
    if (message.initialUpdateComplete === true) {
      obj.initialUpdateComplete = message.initialUpdateComplete;
    }
    if (message.historicalUpdateComplete !== "") {
      obj.historicalUpdateComplete = message.historicalUpdateComplete;
    }
    if (message.environment !== "") {
      obj.environment = message.environment;
    }
    if (message.newTransactions?.length) {
      obj.newTransactions = message.newTransactions;
    }
    if (message.removedTransactions?.length) {
      obj.removedTransactions = message.removedTransactions;
    }
    if (message.error) {
      const entries = Object.entries(message.error);
      if (entries.length > 0) {
        obj.error = {};
        entries.forEach(([k, v]) => {
          obj.error[k] = Any.toJSON(v);
        });
      }
    }
    if (message.accountIds?.length) {
      obj.accountIds = message.accountIds;
    }
    if (message.consentExpirationTime !== "") {
      obj.consentExpirationTime = message.consentExpirationTime;
    }
    if (message.accountIdsWithNewLiabilities?.length) {
      obj.accountIdsWithNewLiabilities = message.accountIdsWithNewLiabilities;
    }
    if (message.accountIdsWithUpdatedLiabilities?.length) {
      obj.accountIdsWithUpdatedLiabilities = message.accountIdsWithUpdatedLiabilities;
    }
    if (message.newHoldings !== 0) {
      obj.newHoldings = Math.round(message.newHoldings);
    }
    if (message.updatedHoldings !== 0) {
      obj.updatedHoldings = Math.round(message.updatedHoldings);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProcessWebhookRequest>, I>>(base?: I): ProcessWebhookRequest {
    return ProcessWebhookRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProcessWebhookRequest>, I>>(object: I): ProcessWebhookRequest {
    const message = createBaseProcessWebhookRequest();
    message.webhookType = object.webhookType ?? "";
    message.webhookCode = object.webhookCode ?? "";
    message.itemId = object.itemId ?? "";
    message.initialUpdateComplete = object.initialUpdateComplete ?? false;
    message.historicalUpdateComplete = object.historicalUpdateComplete ?? "";
    message.environment = object.environment ?? "";
    message.newTransactions = object.newTransactions?.map((e) => e) || [];
    message.removedTransactions = object.removedTransactions?.map((e) => e) || [];
    message.error = Object.entries(object.error ?? {}).reduce<{ [key: string]: Any }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Any.fromPartial(value);
      }
      return acc;
    }, {});
    message.accountIds = object.accountIds?.map((e) => e) || [];
    message.consentExpirationTime = object.consentExpirationTime ?? "";
    message.accountIdsWithNewLiabilities = object.accountIdsWithNewLiabilities?.map((e) => e) || [];
    message.accountIdsWithUpdatedLiabilities = object.accountIdsWithUpdatedLiabilities?.map((e) => e) || [];
    message.newHoldings = object.newHoldings ?? 0;
    message.updatedHoldings = object.updatedHoldings ?? 0;
    return message;
  },
};

function createBaseProcessWebhookRequest_ErrorEntry(): ProcessWebhookRequest_ErrorEntry {
  return { key: "", value: undefined };
}

export const ProcessWebhookRequest_ErrorEntry = {
  fromJSON(object: any): ProcessWebhookRequest_ErrorEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Any.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: ProcessWebhookRequest_ErrorEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = Any.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProcessWebhookRequest_ErrorEntry>, I>>(
    base?: I,
  ): ProcessWebhookRequest_ErrorEntry {
    return ProcessWebhookRequest_ErrorEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProcessWebhookRequest_ErrorEntry>, I>>(
    object: I,
  ): ProcessWebhookRequest_ErrorEntry {
    const message = createBaseProcessWebhookRequest_ErrorEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null) ? Any.fromPartial(object.value) : undefined;
    return message;
  },
};

function createBaseProcessWebhookResponse(): ProcessWebhookResponse {
  return {};
}

export const ProcessWebhookResponse = {
  fromJSON(_: any): ProcessWebhookResponse {
    return {};
  },

  toJSON(_: ProcessWebhookResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ProcessWebhookResponse>, I>>(base?: I): ProcessWebhookResponse {
    return ProcessWebhookResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProcessWebhookResponse>, I>>(_: I): ProcessWebhookResponse {
    const message = createBaseProcessWebhookResponse();
    return message;
  },
};

function createBaseStripeWebhookRequest(): StripeWebhookRequest {
  return { body: "", signature: "" };
}

export const StripeWebhookRequest = {
  fromJSON(object: any): StripeWebhookRequest {
    return {
      body: isSet(object.body) ? String(object.body) : "",
      signature: isSet(object.signature) ? String(object.signature) : "",
    };
  },

  toJSON(message: StripeWebhookRequest): unknown {
    const obj: any = {};
    if (message.body !== "") {
      obj.body = message.body;
    }
    if (message.signature !== "") {
      obj.signature = message.signature;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StripeWebhookRequest>, I>>(base?: I): StripeWebhookRequest {
    return StripeWebhookRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StripeWebhookRequest>, I>>(object: I): StripeWebhookRequest {
    const message = createBaseStripeWebhookRequest();
    message.body = object.body ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
};

function createBaseStripeWebhookResponse(): StripeWebhookResponse {
  return { message: "" };
}

export const StripeWebhookResponse = {
  fromJSON(object: any): StripeWebhookResponse {
    return { message: isSet(object.message) ? String(object.message) : "" };
  },

  toJSON(message: StripeWebhookResponse): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StripeWebhookResponse>, I>>(base?: I): StripeWebhookResponse {
    return StripeWebhookResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StripeWebhookResponse>, I>>(object: I): StripeWebhookResponse {
    const message = createBaseStripeWebhookResponse();
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseCreateSubscriptionRequest(): CreateSubscriptionRequest {
  return { userId: 0, priceId: "" };
}

export const CreateSubscriptionRequest = {
  fromJSON(object: any): CreateSubscriptionRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      priceId: isSet(object.priceId) ? String(object.priceId) : "",
    };
  },

  toJSON(message: CreateSubscriptionRequest): unknown {
    const obj: any = {};
    if (message.userId !== 0) {
      obj.userId = Math.round(message.userId);
    }
    if (message.priceId !== "") {
      obj.priceId = message.priceId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSubscriptionRequest>, I>>(base?: I): CreateSubscriptionRequest {
    return CreateSubscriptionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateSubscriptionRequest>, I>>(object: I): CreateSubscriptionRequest {
    const message = createBaseCreateSubscriptionRequest();
    message.userId = object.userId ?? 0;
    message.priceId = object.priceId ?? "";
    return message;
  },
};

function createBaseCreateSubscriptionResponse(): CreateSubscriptionResponse {
  return { subscriptionId: "", paymentIntentClientSecret: "" };
}

export const CreateSubscriptionResponse = {
  fromJSON(object: any): CreateSubscriptionResponse {
    return {
      subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : "",
      paymentIntentClientSecret: isSet(object.paymentIntentClientSecret)
        ? String(object.paymentIntentClientSecret)
        : "",
    };
  },

  toJSON(message: CreateSubscriptionResponse): unknown {
    const obj: any = {};
    if (message.subscriptionId !== "") {
      obj.subscriptionId = message.subscriptionId;
    }
    if (message.paymentIntentClientSecret !== "") {
      obj.paymentIntentClientSecret = message.paymentIntentClientSecret;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateSubscriptionResponse>, I>>(base?: I): CreateSubscriptionResponse {
    return CreateSubscriptionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateSubscriptionResponse>, I>>(object: I): CreateSubscriptionResponse {
    const message = createBaseCreateSubscriptionResponse();
    message.subscriptionId = object.subscriptionId ?? "";
    message.paymentIntentClientSecret = object.paymentIntentClientSecret ?? "";
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


function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
