import { Any } from './any';
import { Transaction } from './clickhouse';
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
} from './message';

export const protobufPackage = 'api.v1';

/**
 * CreateFinancialProfileRequest: Represents the request object invoked against the user
 * service to create a user profile
 */
export interface CreateFinancialProfileRequest {
  /**
   * User profile to create
   * Validations:
   * - cannot be nil hence required
   */
  profile: UserProfile | undefined;
  /** the email of the account to create */
  email: string;
}

/**
 * CreateFinancialProfileResponse: Represents the response object returned as a response to
 * the `create user profile` request
 */
export interface CreateFinancialProfileResponse {
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
  profile: UserProfile | undefined;
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

export interface HealthCheckResponse {
  healthy: boolean;
}

export interface ReadynessCheckResponse {
  healthy: boolean;
}

export interface PlaidInitiateTokenExchangeRequest {
  /**
   * A unique ID representing the end user. Typically this will be a user ID number from your application.
   * Personally identifiable information, such as an email address or phone number,
   * should not be used in the `client_user_id`. It is currently used as a means of searching logs
   * for the given user in the Plaid Dashboard.
   * Validations:
   * - user_id must be greater than 0
   */
  userId: number;
  /**
   * The user's full legal name. This is an optional field used in
   * the [returning user experience](https://plaid.com/docs/link/returning-user) to associate Items to the user.
   */
  fullName: string;
  /**
   * The user's email address. This field is optional, but required to enable the
   * [pre-authenticated returning user flow](https://plaid.com/docs/link/returning-user/#enabling-the-returning-user-experience).
   */
  email: string;
  /**
   * The user's phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
   * This field is optional, but required to enable the [returning user experience](https://plaid.com/docs/link/returning-user).
   */
  phoneNumber: string;
}

export interface PlaidInitiateTokenExchangeResponse {
  linkToken: string;
  expiration: string;
  plaidRequestId: string;
}

export interface PlaidExchangeTokenRequest {
  /**
   * The user id
   * Validations:
   * - user_id must be greater than 0
   */
  userId: number;
  /**
   * The public token
   * Validations:
   * - cannot be nil hence required
   */
  publicToken: string;
  /** The institution id */
  institutionId: string;
  /** The institution name */
  institutionName: string;
}

export interface PlaidExchangeTokenResponse {
  /** wether the operation was successful */
  success: boolean;
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

export interface GetTransactionsRequest {
  userId: string;
  pageSize: number;
  pageNumber: number;
}

export interface GetTransactionsResponse {
  nextPageNumber: number;
  transactions: Transaction[];
}

export interface ProcessWebhookRequest_ErrorEntry {
  key: string;
  value: Any | undefined;
}

export interface StripeWebhookRequest {
  body: string;
  signature: string;
}

export interface StripeWebhookResponse {
  message: string;
}

function createBaseCreateFinancialProfileRequest(): CreateFinancialProfileRequest {
  return { profile: undefined, email: '' };
}

export const CreateFinancialProfileRequest = {
  create<I extends Exact<DeepPartial<CreateFinancialProfileRequest>, I>>(
    base?: I
  ): CreateFinancialProfileRequest {
    return CreateFinancialProfileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateFinancialProfileRequest>, I>>(
    object: I
  ): CreateFinancialProfileRequest {
    const message = createBaseCreateFinancialProfileRequest();
    message.profile =
      object.profile !== undefined && object.profile !== null
        ? UserProfile.fromPartial(object.profile)
        : undefined;
    message.email = object.email ?? '';
    return message;
  },
};

function createBaseCreateFinancialProfileResponse(): CreateFinancialProfileResponse {
  return { userId: 0 };
}

export const CreateFinancialProfileResponse = {
  create<I extends Exact<DeepPartial<CreateFinancialProfileResponse>, I>>(
    base?: I
  ): CreateFinancialProfileResponse {
    return CreateFinancialProfileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateFinancialProfileResponse>, I>>(
    object: I
  ): CreateFinancialProfileResponse {
    const message = createBaseCreateFinancialProfileResponse();
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseGetUserProfileRequest(): GetUserProfileRequest {
  return { userId: 0 };
}

export const GetUserProfileRequest = {
  create<I extends Exact<DeepPartial<GetUserProfileRequest>, I>>(base?: I): GetUserProfileRequest {
    return GetUserProfileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetUserProfileRequest>, I>>(
    object: I
  ): GetUserProfileRequest {
    const message = createBaseGetUserProfileRequest();
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseGetUserProfileResponse(): GetUserProfileResponse {
  return { profile: undefined };
}

export const GetUserProfileResponse = {
  create<I extends Exact<DeepPartial<GetUserProfileResponse>, I>>(
    base?: I
  ): GetUserProfileResponse {
    return GetUserProfileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetUserProfileResponse>, I>>(
    object: I
  ): GetUserProfileResponse {
    const message = createBaseGetUserProfileResponse();
    message.profile =
      object.profile !== undefined && object.profile !== null
        ? UserProfile.fromPartial(object.profile)
        : undefined;
    return message;
  },
};

function createBaseDeleteUserProfileRequest(): DeleteUserProfileRequest {
  return { userId: 0 };
}

export const DeleteUserProfileRequest = {
  create<I extends Exact<DeepPartial<DeleteUserProfileRequest>, I>>(
    base?: I
  ): DeleteUserProfileRequest {
    return DeleteUserProfileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteUserProfileRequest>, I>>(
    object: I
  ): DeleteUserProfileRequest {
    const message = createBaseDeleteUserProfileRequest();
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseDeleteUserProfileResponse(): DeleteUserProfileResponse {
  return { profileDeleted: false };
}

export const DeleteUserProfileResponse = {
  create<I extends Exact<DeepPartial<DeleteUserProfileResponse>, I>>(
    base?: I
  ): DeleteUserProfileResponse {
    return DeleteUserProfileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteUserProfileResponse>, I>>(
    object: I
  ): DeleteUserProfileResponse {
    const message = createBaseDeleteUserProfileResponse();
    message.profileDeleted = object.profileDeleted ?? false;
    return message;
  },
};

function createBaseUpdateUserProfileRequest(): UpdateUserProfileRequest {
  return { profile: undefined };
}

export const UpdateUserProfileRequest = {
  create<I extends Exact<DeepPartial<UpdateUserProfileRequest>, I>>(
    base?: I
  ): UpdateUserProfileRequest {
    return UpdateUserProfileRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateUserProfileRequest>, I>>(
    object: I
  ): UpdateUserProfileRequest {
    const message = createBaseUpdateUserProfileRequest();
    message.profile =
      object.profile !== undefined && object.profile !== null
        ? UserProfile.fromPartial(object.profile)
        : undefined;
    return message;
  },
};

function createBaseUpdateUserProfileResponse(): UpdateUserProfileResponse {
  return { profileUpdated: false, profile: undefined };
}

export const UpdateUserProfileResponse = {
  create<I extends Exact<DeepPartial<UpdateUserProfileResponse>, I>>(
    base?: I
  ): UpdateUserProfileResponse {
    return UpdateUserProfileResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateUserProfileResponse>, I>>(
    object: I
  ): UpdateUserProfileResponse {
    const message = createBaseUpdateUserProfileResponse();
    message.profileUpdated = object.profileUpdated ?? false;
    message.profile =
      object.profile !== undefined && object.profile !== null
        ? UserProfile.fromPartial(object.profile)
        : undefined;
    return message;
  },
};

function createBaseCreateBankAccountRequest(): CreateBankAccountRequest {
  return { userId: 0, bankAccount: undefined };
}

export const CreateBankAccountRequest = {
  create<I extends Exact<DeepPartial<CreateBankAccountRequest>, I>>(
    base?: I
  ): CreateBankAccountRequest {
    return CreateBankAccountRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateBankAccountRequest>, I>>(
    object: I
  ): CreateBankAccountRequest {
    const message = createBaseCreateBankAccountRequest();
    message.userId = object.userId ?? 0;
    message.bankAccount =
      object.bankAccount !== undefined && object.bankAccount !== null
        ? BankAccount.fromPartial(object.bankAccount)
        : undefined;
    return message;
  },
};

function createBaseCreateBankAccountResponse(): CreateBankAccountResponse {
  return { bankAccountId: 0 };
}

export const CreateBankAccountResponse = {
  create<I extends Exact<DeepPartial<CreateBankAccountResponse>, I>>(
    base?: I
  ): CreateBankAccountResponse {
    return CreateBankAccountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateBankAccountResponse>, I>>(
    object: I
  ): CreateBankAccountResponse {
    const message = createBaseCreateBankAccountResponse();
    message.bankAccountId = object.bankAccountId ?? 0;
    return message;
  },
};

function createBaseGetBankAccountRequest(): GetBankAccountRequest {
  return { bankAccountId: 0 };
}

export const GetBankAccountRequest = {
  create<I extends Exact<DeepPartial<GetBankAccountRequest>, I>>(base?: I): GetBankAccountRequest {
    return GetBankAccountRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBankAccountRequest>, I>>(
    object: I
  ): GetBankAccountRequest {
    const message = createBaseGetBankAccountRequest();
    message.bankAccountId = object.bankAccountId ?? 0;
    return message;
  },
};

function createBaseGetBankAccountResponse(): GetBankAccountResponse {
  return { bankAccount: undefined };
}

export const GetBankAccountResponse = {
  create<I extends Exact<DeepPartial<GetBankAccountResponse>, I>>(
    base?: I
  ): GetBankAccountResponse {
    return GetBankAccountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBankAccountResponse>, I>>(
    object: I
  ): GetBankAccountResponse {
    const message = createBaseGetBankAccountResponse();
    message.bankAccount =
      object.bankAccount !== undefined && object.bankAccount !== null
        ? BankAccount.fromPartial(object.bankAccount)
        : undefined;
    return message;
  },
};

function createBaseDeleteBankAccountRequest(): DeleteBankAccountRequest {
  return { userId: 0, bankAccountId: 0 };
}

export const DeleteBankAccountRequest = {
  create<I extends Exact<DeepPartial<DeleteBankAccountRequest>, I>>(
    base?: I
  ): DeleteBankAccountRequest {
    return DeleteBankAccountRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBankAccountRequest>, I>>(
    object: I
  ): DeleteBankAccountRequest {
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
  create<I extends Exact<DeepPartial<DeleteBankAccountResponse>, I>>(
    base?: I
  ): DeleteBankAccountResponse {
    return DeleteBankAccountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBankAccountResponse>, I>>(
    object: I
  ): DeleteBankAccountResponse {
    const message = createBaseDeleteBankAccountResponse();
    message.deleted = object.deleted ?? false;
    return message;
  },
};

function createBaseUpdateBankAccountRequest(): UpdateBankAccountRequest {
  return { bankAccount: undefined };
}

export const UpdateBankAccountRequest = {
  create<I extends Exact<DeepPartial<UpdateBankAccountRequest>, I>>(
    base?: I
  ): UpdateBankAccountRequest {
    return UpdateBankAccountRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateBankAccountRequest>, I>>(
    object: I
  ): UpdateBankAccountRequest {
    const message = createBaseUpdateBankAccountRequest();
    message.bankAccount =
      object.bankAccount !== undefined && object.bankAccount !== null
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
    message.updated !== undefined && (obj.updated = message.updated);
    message.bankAccount !== undefined &&
      (obj.bankAccount = message.bankAccount ? BankAccount.toJSON(message.bankAccount) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateBankAccountResponse>, I>>(
    base?: I
  ): UpdateBankAccountResponse {
    return UpdateBankAccountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateBankAccountResponse>, I>>(
    object: I
  ): UpdateBankAccountResponse {
    const message = createBaseUpdateBankAccountResponse();
    message.updated = object.updated ?? false;
    message.bankAccount =
      object.bankAccount !== undefined && object.bankAccount !== null
        ? BankAccount.fromPartial(object.bankAccount)
        : undefined;
    return message;
  },
};

function createBaseGetPocketRequest(): GetPocketRequest {
  return { pocketId: 0 };
}

export const GetPocketRequest = {
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
  create<I extends Exact<DeepPartial<GetPocketResponse>, I>>(base?: I): GetPocketResponse {
    return GetPocketResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPocketResponse>, I>>(object: I): GetPocketResponse {
    const message = createBaseGetPocketResponse();
    message.pocket =
      object.pocket !== undefined && object.pocket !== null
        ? Pocket.fromPartial(object.pocket)
        : undefined;
    return message;
  },
};

function createBaseGetSmartGoalsByPocketIdRequest(): GetSmartGoalsByPocketIdRequest {
  return { pocketId: 0 };
}

export const GetSmartGoalsByPocketIdRequest = {
  create<I extends Exact<DeepPartial<GetSmartGoalsByPocketIdRequest>, I>>(
    base?: I
  ): GetSmartGoalsByPocketIdRequest {
    return GetSmartGoalsByPocketIdRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetSmartGoalsByPocketIdRequest>, I>>(
    object: I
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
  create<I extends Exact<DeepPartial<GetSmartGoalsByPocketIdResponse>, I>>(
    base?: I
  ): GetSmartGoalsByPocketIdResponse {
    return GetSmartGoalsByPocketIdResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetSmartGoalsByPocketIdResponse>, I>>(
    object: I
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
  create<I extends Exact<DeepPartial<CreateSmartGoalRequest>, I>>(
    base?: I
  ): CreateSmartGoalRequest {
    return CreateSmartGoalRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateSmartGoalRequest>, I>>(
    object: I
  ): CreateSmartGoalRequest {
    const message = createBaseCreateSmartGoalRequest();
    message.pocketId = object.pocketId ?? 0;
    message.smartGoal =
      object.smartGoal !== undefined && object.smartGoal !== null
        ? SmartGoal.fromPartial(object.smartGoal)
        : undefined;
    return message;
  },
};

function createBaseCreateSmartGoalResponse(): CreateSmartGoalResponse {
  return { smartGoalId: 0 };
}

export const CreateSmartGoalResponse = {
  create<I extends Exact<DeepPartial<CreateSmartGoalResponse>, I>>(
    base?: I
  ): CreateSmartGoalResponse {
    return CreateSmartGoalResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateSmartGoalResponse>, I>>(
    object: I
  ): CreateSmartGoalResponse {
    const message = createBaseCreateSmartGoalResponse();
    message.smartGoalId = object.smartGoalId ?? 0;
    return message;
  },
};

function createBaseUpdateSmartGoalRequest(): UpdateSmartGoalRequest {
  return { smartGoal: undefined };
}

export const UpdateSmartGoalRequest = {
  create<I extends Exact<DeepPartial<UpdateSmartGoalRequest>, I>>(
    base?: I
  ): UpdateSmartGoalRequest {
    return UpdateSmartGoalRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSmartGoalRequest>, I>>(
    object: I
  ): UpdateSmartGoalRequest {
    const message = createBaseUpdateSmartGoalRequest();
    message.smartGoal =
      object.smartGoal !== undefined && object.smartGoal !== null
        ? SmartGoal.fromPartial(object.smartGoal)
        : undefined;
    return message;
  },
};

function createBaseUpdateSmartGoalResponse(): UpdateSmartGoalResponse {
  return { smartGoalId: 0 };
}

export const UpdateSmartGoalResponse = {
  create<I extends Exact<DeepPartial<UpdateSmartGoalResponse>, I>>(
    base?: I
  ): UpdateSmartGoalResponse {
    return UpdateSmartGoalResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateSmartGoalResponse>, I>>(
    object: I
  ): UpdateSmartGoalResponse {
    const message = createBaseUpdateSmartGoalResponse();
    message.smartGoalId = object.smartGoalId ?? 0;
    return message;
  },
};

function createBaseDeleteSmartGoalRequest(): DeleteSmartGoalRequest {
  return { smartGoalId: 0 };
}

export const DeleteSmartGoalRequest = {
  create<I extends Exact<DeepPartial<DeleteSmartGoalRequest>, I>>(
    base?: I
  ): DeleteSmartGoalRequest {
    return DeleteSmartGoalRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteSmartGoalRequest>, I>>(
    object: I
  ): DeleteSmartGoalRequest {
    const message = createBaseDeleteSmartGoalRequest();
    message.smartGoalId = object.smartGoalId ?? 0;
    return message;
  },
};

function createBaseDeleteSmartGoalResponse(): DeleteSmartGoalResponse {
  return { deleted: false };
}

export const DeleteSmartGoalResponse = {
  create<I extends Exact<DeepPartial<DeleteSmartGoalResponse>, I>>(
    base?: I
  ): DeleteSmartGoalResponse {
    return DeleteSmartGoalResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteSmartGoalResponse>, I>>(
    object: I
  ): DeleteSmartGoalResponse {
    const message = createBaseDeleteSmartGoalResponse();
    message.deleted = object.deleted ?? false;
    return message;
  },
};

function createBaseCreateMilestoneRequest(): CreateMilestoneRequest {
  return { smartGoalId: 0, milestone: undefined };
}

export const CreateMilestoneRequest = {
  create<I extends Exact<DeepPartial<CreateMilestoneRequest>, I>>(
    base?: I
  ): CreateMilestoneRequest {
    return CreateMilestoneRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateMilestoneRequest>, I>>(
    object: I
  ): CreateMilestoneRequest {
    const message = createBaseCreateMilestoneRequest();
    message.smartGoalId = object.smartGoalId ?? 0;
    message.milestone =
      object.milestone !== undefined && object.milestone !== null
        ? Milestone.fromPartial(object.milestone)
        : undefined;
    return message;
  },
};

function createBaseCreateMilestoneResponse(): CreateMilestoneResponse {
  return { milestoneId: 0 };
}

export const CreateMilestoneResponse = {
  create<I extends Exact<DeepPartial<CreateMilestoneResponse>, I>>(
    base?: I
  ): CreateMilestoneResponse {
    return CreateMilestoneResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateMilestoneResponse>, I>>(
    object: I
  ): CreateMilestoneResponse {
    const message = createBaseCreateMilestoneResponse();
    message.milestoneId = object.milestoneId ?? 0;
    return message;
  },
};

function createBaseDeleteMilestoneRequest(): DeleteMilestoneRequest {
  return { milestoneId: 0 };
}

export const DeleteMilestoneRequest = {
  create<I extends Exact<DeepPartial<DeleteMilestoneRequest>, I>>(
    base?: I
  ): DeleteMilestoneRequest {
    return DeleteMilestoneRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteMilestoneRequest>, I>>(
    object: I
  ): DeleteMilestoneRequest {
    const message = createBaseDeleteMilestoneRequest();
    message.milestoneId = object.milestoneId ?? 0;
    return message;
  },
};

function createBaseDeleteMilestoneResponse(): DeleteMilestoneResponse {
  return { deleted: false };
}

export const DeleteMilestoneResponse = {
  create<I extends Exact<DeepPartial<DeleteMilestoneResponse>, I>>(
    base?: I
  ): DeleteMilestoneResponse {
    return DeleteMilestoneResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteMilestoneResponse>, I>>(
    object: I
  ): DeleteMilestoneResponse {
    const message = createBaseDeleteMilestoneResponse();
    message.deleted = object.deleted ?? false;
    return message;
  },
};

function createBaseUpdateMilestoneResponse(): UpdateMilestoneResponse {
  return { milestone: undefined };
}

export const UpdateMilestoneResponse = {
  create<I extends Exact<DeepPartial<UpdateMilestoneResponse>, I>>(
    base?: I
  ): UpdateMilestoneResponse {
    return UpdateMilestoneResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateMilestoneResponse>, I>>(
    object: I
  ): UpdateMilestoneResponse {
    const message = createBaseUpdateMilestoneResponse();
    message.milestone =
      object.milestone !== undefined && object.milestone !== null
        ? Milestone.fromPartial(object.milestone)
        : undefined;
    return message;
  },
};

function createBaseUpdateMilestoneRequest(): UpdateMilestoneRequest {
  return { milestone: undefined };
}

export const UpdateMilestoneRequest = {
  create<I extends Exact<DeepPartial<UpdateMilestoneResponse>, I>>(
    base?: I
  ): UpdateMilestoneResponse {
    return UpdateMilestoneResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateMilestoneResponse>, I>>(
    object: I
  ): UpdateMilestoneResponse {
    const message = createBaseUpdateMilestoneResponse();
    message.milestone =
      object.milestone !== undefined && object.milestone !== null
        ? Milestone.fromPartial(object.milestone)
        : undefined;
    return message;
  },
};

function createBaseGetMilestonesBySmartGoalIdRequest(): GetMilestonesBySmartGoalIdRequest {
  return { smartGoalId: 0 };
}

export const GetMilestonesBySmartGoalIdRequest = {
  create<I extends Exact<DeepPartial<GetMilestonesBySmartGoalIdRequest>, I>>(
    base?: I
  ): GetMilestonesBySmartGoalIdRequest {
    return GetMilestonesBySmartGoalIdRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetMilestonesBySmartGoalIdRequest>, I>>(
    object: I
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
  create<I extends Exact<DeepPartial<GetMilestonesBySmartGoalIdResponse>, I>>(
    base?: I
  ): GetMilestonesBySmartGoalIdResponse {
    return GetMilestonesBySmartGoalIdResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetMilestonesBySmartGoalIdResponse>, I>>(
    object: I
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
  create<I extends Exact<DeepPartial<GetMilestoneRequest>, I>>(base?: I): GetMilestoneRequest {
    return GetMilestoneRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetMilestoneRequest>, I>>(
    object: I
  ): GetMilestoneRequest {
    const message = createBaseGetMilestoneRequest();
    message.milestoneId = object.milestoneId ?? 0;
    return message;
  },
};

function createBaseGetMilestoneResponse(): GetMilestoneResponse {
  return { milestone: undefined };
}

export const GetMilestoneResponse = {
  create<I extends Exact<DeepPartial<GetMilestoneResponse>, I>>(base?: I): GetMilestoneResponse {
    return GetMilestoneResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetMilestoneResponse>, I>>(
    object: I
  ): GetMilestoneResponse {
    const message = createBaseGetMilestoneResponse();
    message.milestone =
      object.milestone !== undefined && object.milestone !== null
        ? Milestone.fromPartial(object.milestone)
        : undefined;
    return message;
  },
};

function createBaseGetForecastRequest(): GetForecastRequest {
  return { smartGoalId: 0 };
}

export const GetForecastRequest = {
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
  create<I extends Exact<DeepPartial<GetForecastResponse>, I>>(base?: I): GetForecastResponse {
    return GetForecastResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetForecastResponse>, I>>(
    object: I
  ): GetForecastResponse {
    const message = createBaseGetForecastResponse();
    message.forecast =
      object.forecast !== undefined && object.forecast !== null
        ? Forecast.fromPartial(object.forecast)
        : undefined;
    return message;
  },
};

function createBaseCreateBudgetRequest(): CreateBudgetRequest {
  return { milestroneId: 0, budget: undefined };
}

export const CreateBudgetRequest = {
  create<I extends Exact<DeepPartial<CreateBudgetRequest>, I>>(base?: I): CreateBudgetRequest {
    return CreateBudgetRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateBudgetRequest>, I>>(
    object: I
  ): CreateBudgetRequest {
    const message = createBaseCreateBudgetRequest();
    message.milestroneId = object.milestroneId ?? 0;
    message.budget =
      object.budget !== undefined && object.budget !== null
        ? Budget.fromPartial(object.budget)
        : undefined;
    return message;
  },
};

function createBaseCreateBudgetResponse(): CreateBudgetResponse {
  return { budgetId: 0 };
}

export const CreateBudgetResponse = {
  create<I extends Exact<DeepPartial<CreateBudgetResponse>, I>>(base?: I): CreateBudgetResponse {
    return CreateBudgetResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateBudgetResponse>, I>>(
    object: I
  ): CreateBudgetResponse {
    const message = createBaseCreateBudgetResponse();
    message.budgetId = object.budgetId ?? 0;
    return message;
  },
};

function createBaseUpdateBudgetRequest(): UpdateBudgetRequest {
  return { budget: undefined };
}

export const UpdateBudgetRequest = {
  create<I extends Exact<DeepPartial<UpdateBudgetRequest>, I>>(base?: I): UpdateBudgetRequest {
    return UpdateBudgetRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateBudgetRequest>, I>>(
    object: I
  ): UpdateBudgetRequest {
    const message = createBaseUpdateBudgetRequest();
    message.budget =
      object.budget !== undefined && object.budget !== null
        ? Budget.fromPartial(object.budget)
        : undefined;
    return message;
  },
};

function createBaseUpdateBudgetResponse(): UpdateBudgetResponse {
  return { budget: undefined };
}

export const UpdateBudgetResponse = {
  create<I extends Exact<DeepPartial<UpdateBudgetResponse>, I>>(base?: I): UpdateBudgetResponse {
    return UpdateBudgetResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpdateBudgetResponse>, I>>(
    object: I
  ): UpdateBudgetResponse {
    const message = createBaseUpdateBudgetResponse();
    message.budget =
      object.budget !== undefined && object.budget !== null
        ? Budget.fromPartial(object.budget)
        : undefined;
    return message;
  },
};

function createBaseDeleteBudgetRequest(): DeleteBudgetRequest {
  return { budgetId: 0 };
}

export const DeleteBudgetRequest = {
  create<I extends Exact<DeepPartial<DeleteBudgetRequest>, I>>(base?: I): DeleteBudgetRequest {
    return DeleteBudgetRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBudgetRequest>, I>>(
    object: I
  ): DeleteBudgetRequest {
    const message = createBaseDeleteBudgetRequest();
    message.budgetId = object.budgetId ?? 0;
    return message;
  },
};

function createBaseDeleteBudgetResponse(): DeleteBudgetResponse {
  return { deleted: false };
}

export const DeleteBudgetResponse = {
  create<I extends Exact<DeepPartial<DeleteBudgetResponse>, I>>(base?: I): DeleteBudgetResponse {
    return DeleteBudgetResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DeleteBudgetResponse>, I>>(
    object: I
  ): DeleteBudgetResponse {
    const message = createBaseDeleteBudgetResponse();
    message.deleted = object.deleted ?? false;
    return message;
  },
};

function createBaseGetBudgetRequest(): GetBudgetRequest {
  return { budgetId: 0 };
}

export const GetBudgetRequest = {
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
  create<I extends Exact<DeepPartial<GetBudgetResponse>, I>>(base?: I): GetBudgetResponse {
    return GetBudgetResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBudgetResponse>, I>>(object: I): GetBudgetResponse {
    const message = createBaseGetBudgetResponse();
    message.budget =
      object.budget !== undefined && object.budget !== null
        ? Budget.fromPartial(object.budget)
        : undefined;
    return message;
  },
};

function createBaseGetAllBudgetsRequest(): GetAllBudgetsRequest {
  return { pocketId: 0, smartGoalId: 0, milestoneId: 0 };
}

export const GetAllBudgetsRequest = {
  create<I extends Exact<DeepPartial<GetAllBudgetsRequest>, I>>(base?: I): GetAllBudgetsRequest {
    return GetAllBudgetsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAllBudgetsRequest>, I>>(
    object: I
  ): GetAllBudgetsRequest {
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
  create<I extends Exact<DeepPartial<GetAllBudgetsResponse>, I>>(base?: I): GetAllBudgetsResponse {
    return GetAllBudgetsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAllBudgetsResponse>, I>>(
    object: I
  ): GetAllBudgetsResponse {
    const message = createBaseGetAllBudgetsResponse();
    message.budgets = object.budgets?.map((e) => Budget.fromPartial(e)) || [];
    return message;
  },
};

function createBaseHealthCheckResponse(): HealthCheckResponse {
  return { healthy: false };
}

export const HealthCheckResponse = {
  create<I extends Exact<DeepPartial<HealthCheckResponse>, I>>(base?: I): HealthCheckResponse {
    return HealthCheckResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<HealthCheckResponse>, I>>(
    object: I
  ): HealthCheckResponse {
    const message = createBaseHealthCheckResponse();
    message.healthy = object.healthy ?? false;
    return message;
  },
};

function createBaseReadynessCheckResponse(): ReadynessCheckResponse {
  return { healthy: false };
}

export const ReadynessCheckResponse = {
  create<I extends Exact<DeepPartial<ReadynessCheckResponse>, I>>(
    base?: I
  ): ReadynessCheckResponse {
    return ReadynessCheckResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ReadynessCheckResponse>, I>>(
    object: I
  ): ReadynessCheckResponse {
    const message = createBaseReadynessCheckResponse();
    message.healthy = object.healthy ?? false;
    return message;
  },
};

function createBasePlaidInitiateTokenExchangeRequest(): PlaidInitiateTokenExchangeRequest {
  return { userId: 0, fullName: '', email: '', phoneNumber: '' };
}

export const PlaidInitiateTokenExchangeRequest = {
  create<I extends Exact<DeepPartial<PlaidInitiateTokenExchangeRequest>, I>>(
    base?: I
  ): PlaidInitiateTokenExchangeRequest {
    return PlaidInitiateTokenExchangeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PlaidInitiateTokenExchangeRequest>, I>>(
    object: I
  ): PlaidInitiateTokenExchangeRequest {
    const message = createBasePlaidInitiateTokenExchangeRequest();
    message.userId = object.userId ?? 0;
    message.fullName = object.fullName ?? '';
    message.email = object.email ?? '';
    message.phoneNumber = object.phoneNumber ?? '';
    return message;
  },
};

function createBasePlaidInitiateTokenExchangeResponse(): PlaidInitiateTokenExchangeResponse {
  return { linkToken: '', expiration: '', plaidRequestId: '' };
}

export const PlaidInitiateTokenExchangeResponse = {
  create<I extends Exact<DeepPartial<PlaidInitiateTokenExchangeResponse>, I>>(
    base?: I
  ): PlaidInitiateTokenExchangeResponse {
    return PlaidInitiateTokenExchangeResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PlaidInitiateTokenExchangeResponse>, I>>(
    object: I
  ): PlaidInitiateTokenExchangeResponse {
    const message = createBasePlaidInitiateTokenExchangeResponse();
    message.linkToken = object.linkToken ?? '';
    message.expiration = object.expiration ?? '';
    message.plaidRequestId = object.plaidRequestId ?? '';
    return message;
  },
};

function createBasePlaidExchangeTokenRequest(): PlaidExchangeTokenRequest {
  return { userId: 0, publicToken: '', institutionId: '', institutionName: '' };
}

export const PlaidExchangeTokenRequest = {
  create<I extends Exact<DeepPartial<PlaidExchangeTokenRequest>, I>>(
    base?: I
  ): PlaidExchangeTokenRequest {
    return PlaidExchangeTokenRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PlaidExchangeTokenRequest>, I>>(
    object: I
  ): PlaidExchangeTokenRequest {
    const message = createBasePlaidExchangeTokenRequest();
    message.userId = object.userId ?? 0;
    message.publicToken = object.publicToken ?? '';
    message.institutionId = object.institutionId ?? '';
    message.institutionName = object.institutionName ?? '';
    return message;
  },
};

function createBasePlaidExchangeTokenResponse(): PlaidExchangeTokenResponse {
  return { success: false };
}

export const PlaidExchangeTokenResponse = {
  create<I extends Exact<DeepPartial<PlaidExchangeTokenResponse>, I>>(
    base?: I
  ): PlaidExchangeTokenResponse {
    return PlaidExchangeTokenResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PlaidExchangeTokenResponse>, I>>(
    object: I
  ): PlaidExchangeTokenResponse {
    const message = createBasePlaidExchangeTokenResponse();
    message.success = object.success ?? false;
    return message;
  },
};

function createBaseGetInvestmentAcccountRequest(): GetInvestmentAcccountRequest {
  return { userId: 0, investmentAccountId: 0 };
}

export const GetInvestmentAcccountRequest = {
  create<I extends Exact<DeepPartial<GetInvestmentAcccountRequest>, I>>(
    base?: I
  ): GetInvestmentAcccountRequest {
    return GetInvestmentAcccountRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetInvestmentAcccountRequest>, I>>(
    object: I
  ): GetInvestmentAcccountRequest {
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
  create<I extends Exact<DeepPartial<GetInvestmentAcccountResponse>, I>>(
    base?: I
  ): GetInvestmentAcccountResponse {
    return GetInvestmentAcccountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetInvestmentAcccountResponse>, I>>(
    object: I
  ): GetInvestmentAcccountResponse {
    const message = createBaseGetInvestmentAcccountResponse();
    message.investmentAccount =
      object.investmentAccount !== undefined && object.investmentAccount !== null
        ? InvestmentAccount.fromPartial(object.investmentAccount)
        : undefined;
    return message;
  },
};

function createBaseGetMortgageAccountRequest(): GetMortgageAccountRequest {
  return { userId: 0, mortgageAccountId: 0 };
}

export const GetMortgageAccountRequest = {
  create<I extends Exact<DeepPartial<GetMortgageAccountRequest>, I>>(
    base?: I
  ): GetMortgageAccountRequest {
    return GetMortgageAccountRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetMortgageAccountRequest>, I>>(
    object: I
  ): GetMortgageAccountRequest {
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
  create<I extends Exact<DeepPartial<GetMortgageAccountResponse>, I>>(
    base?: I
  ): GetMortgageAccountResponse {
    return GetMortgageAccountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetMortgageAccountResponse>, I>>(
    object: I
  ): GetMortgageAccountResponse {
    const message = createBaseGetMortgageAccountResponse();
    message.mortageAccount =
      object.mortageAccount !== undefined && object.mortageAccount !== null
        ? MortgageAccount.fromPartial(object.mortageAccount)
        : undefined;
    return message;
  },
};

function createBaseGetLiabilityAccountRequest(): GetLiabilityAccountRequest {
  return { userId: 0, liabilityAccountId: 0 };
}

export const GetLiabilityAccountRequest = {
  create<I extends Exact<DeepPartial<GetLiabilityAccountRequest>, I>>(
    base?: I
  ): GetLiabilityAccountRequest {
    return GetLiabilityAccountRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetLiabilityAccountRequest>, I>>(
    object: I
  ): GetLiabilityAccountRequest {
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
  create<I extends Exact<DeepPartial<GetLiabilityAccountResponse>, I>>(
    base?: I
  ): GetLiabilityAccountResponse {
    return GetLiabilityAccountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetLiabilityAccountResponse>, I>>(
    object: I
  ): GetLiabilityAccountResponse {
    const message = createBaseGetLiabilityAccountResponse();
    message.liabilityAccount =
      object.liabilityAccount !== undefined && object.liabilityAccount !== null
        ? CreditAccount.fromPartial(object.liabilityAccount)
        : undefined;
    return message;
  },
};

function createBaseGetStudentLoanAccountRequest(): GetStudentLoanAccountRequest {
  return { userId: 0, studentLoanAccountId: 0 };
}

export const GetStudentLoanAccountRequest = {
  create<I extends Exact<DeepPartial<GetStudentLoanAccountRequest>, I>>(
    base?: I
  ): GetStudentLoanAccountRequest {
    return GetStudentLoanAccountRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetStudentLoanAccountRequest>, I>>(
    object: I
  ): GetStudentLoanAccountRequest {
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
  create<I extends Exact<DeepPartial<GetStudentLoanAccountResponse>, I>>(
    base?: I
  ): GetStudentLoanAccountResponse {
    return GetStudentLoanAccountResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetStudentLoanAccountResponse>, I>>(
    object: I
  ): GetStudentLoanAccountResponse {
    const message = createBaseGetStudentLoanAccountResponse();
    message.studentLoanAccount =
      object.studentLoanAccount !== undefined && object.studentLoanAccount !== null
        ? StudentLoanAccount.fromPartial(object.studentLoanAccount)
        : undefined;
    return message;
  },
};

function createBaseCreateManualLinkRequest(): CreateManualLinkRequest {
  return { userId: 0, manualAccountLink: undefined };
}

export const CreateManualLinkRequest = {
  create<I extends Exact<DeepPartial<CreateManualLinkRequest>, I>>(
    base?: I
  ): CreateManualLinkRequest {
    return CreateManualLinkRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateManualLinkRequest>, I>>(
    object: I
  ): CreateManualLinkRequest {
    const message = createBaseCreateManualLinkRequest();
    message.userId = object.userId ?? 0;
    message.manualAccountLink =
      object.manualAccountLink !== undefined && object.manualAccountLink !== null
        ? Link.fromPartial(object.manualAccountLink)
        : undefined;
    return message;
  },
};

function createBaseCreateManualLinkResponse(): CreateManualLinkResponse {
  return { linkId: 0 };
}

export const CreateManualLinkResponse = {
  create<I extends Exact<DeepPartial<CreateManualLinkResponse>, I>>(
    base?: I
  ): CreateManualLinkResponse {
    return CreateManualLinkResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateManualLinkResponse>, I>>(
    object: I
  ): CreateManualLinkResponse {
    const message = createBaseCreateManualLinkResponse();
    message.linkId = object.linkId ?? 0;
    return message;
  },
};

function createBaseGetLinkRequest(): GetLinkRequest {
  return { userId: 0, linkId: 0 };
}

export const GetLinkRequest = {
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
  create<I extends Exact<DeepPartial<GetLinkResponse>, I>>(base?: I): GetLinkResponse {
    return GetLinkResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetLinkResponse>, I>>(object: I): GetLinkResponse {
    const message = createBaseGetLinkResponse();
    message.link =
      object.link !== undefined && object.link !== null ? Link.fromPartial(object.link) : undefined;
    return message;
  },
};

function createBaseGetLinksRequest(): GetLinksRequest {
  return { userId: 0 };
}

export const GetLinksRequest = {
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
    webhookType: '',
    webhookCode: '',
    itemId: '',
    initialUpdateComplete: false,
    historicalUpdateComplete: '',
    environment: '',
    newTransactions: [],
    removedTransactions: [],
    error: {},
    accountIds: [],
    consentExpirationTime: '',
    accountIdsWithNewLiabilities: [],
    accountIdsWithUpdatedLiabilities: [],
    newHoldings: 0,
    updatedHoldings: 0,
  };
}

export const ProcessWebhookRequest = {
  create<I extends Exact<DeepPartial<ProcessWebhookRequest>, I>>(base?: I): ProcessWebhookRequest {
    return ProcessWebhookRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProcessWebhookRequest>, I>>(
    object: I
  ): ProcessWebhookRequest {
    const message = createBaseProcessWebhookRequest();
    message.webhookType = object.webhookType ?? '';
    message.webhookCode = object.webhookCode ?? '';
    message.itemId = object.itemId ?? '';
    message.initialUpdateComplete = object.initialUpdateComplete ?? false;
    message.historicalUpdateComplete = object.historicalUpdateComplete ?? '';
    message.environment = object.environment ?? '';
    message.newTransactions = object.newTransactions?.map((e) => e) || [];
    message.removedTransactions = object.removedTransactions?.map((e) => e) || [];
    message.error = Object.entries(object.error ?? {}).reduce<{ [key: string]: Any }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = Any.fromPartial(value);
        }
        return acc;
      },
      {}
    );
    message.accountIds = object.accountIds?.map((e) => e) || [];
    message.consentExpirationTime = object.consentExpirationTime ?? '';
    message.accountIdsWithNewLiabilities = object.accountIdsWithNewLiabilities?.map((e) => e) || [];
    message.accountIdsWithUpdatedLiabilities =
      object.accountIdsWithUpdatedLiabilities?.map((e) => e) || [];
    message.newHoldings = object.newHoldings ?? 0;
    message.updatedHoldings = object.updatedHoldings ?? 0;
    return message;
  },
};

function createBaseProcessWebhookRequest_ErrorEntry(): ProcessWebhookRequest_ErrorEntry {
  return { key: '', value: undefined };
}

export const ProcessWebhookRequest_ErrorEntry = {
  create<I extends Exact<DeepPartial<ProcessWebhookRequest_ErrorEntry>, I>>(
    base?: I
  ): ProcessWebhookRequest_ErrorEntry {
    return ProcessWebhookRequest_ErrorEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ProcessWebhookRequest_ErrorEntry>, I>>(
    object: I
  ): ProcessWebhookRequest_ErrorEntry {
    const message = createBaseProcessWebhookRequest_ErrorEntry();
    message.key = object.key ?? '';
    message.value =
      object.value !== undefined && object.value !== null
        ? Any.fromPartial(object.value)
        : undefined;
    return message;
  },
};

function createBaseStripeWebhookRequest(): StripeWebhookRequest {
  return { body: '', signature: '' };
}

export const StripeWebhookRequest = {
  create<I extends Exact<DeepPartial<StripeWebhookRequest>, I>>(base?: I): StripeWebhookRequest {
    return StripeWebhookRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StripeWebhookRequest>, I>>(
    object: I
  ): StripeWebhookRequest {
    const message = createBaseStripeWebhookRequest();
    message.body = object.body ?? '';
    message.signature = object.signature ?? '';
    return message;
  },
};

function createBaseStripeWebhookResponse(): StripeWebhookResponse {
  return { message: '' };
}

export const StripeWebhookResponse = {
  create<I extends Exact<DeepPartial<StripeWebhookResponse>, I>>(base?: I): StripeWebhookResponse {
    return StripeWebhookResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StripeWebhookResponse>, I>>(
    object: I
  ): StripeWebhookResponse {
    const message = createBaseStripeWebhookResponse();
    message.message = object.message ?? '';
    return message;
  },
};

declare let self: any | undefined;
declare let window: any | undefined;
declare let global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  }
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw 'Unable to locate global object';
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === 'object' && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
