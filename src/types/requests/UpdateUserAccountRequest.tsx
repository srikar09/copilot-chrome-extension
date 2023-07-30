import { UserAccount } from "src/types/service/message";

/**
 * UpdateUserRequest: Represents the request object invoked against the user
 * service to update a given user account
 */
export interface UpdateUserAccountRequest {
  /**
   * UserAccount to update
   * Validation:
   * - cannot nil hence required
   */
  account: UserAccount | undefined;
}
