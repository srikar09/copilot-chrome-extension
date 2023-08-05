import { UserAccount } from "../records/user-account";

export class CreateUserRequest {
  /**
   * User account to create
   * Validations:
   * - cannot be nil hence required
   */
  account: UserAccount | undefined;
  /**
   * set of community IDs to follow
   * Validations:
   * - at least 0 and at most 20 community ids supported at one time
   */
  communityIdsToFollow: number[] = [];
  /**
   * The profile image of the user
   * Validations:
   * - must be a valid URI
   */
  profileImage: string = "";
  /**
   * The password  of the user
   * Validations:
   * - must be a at least 10 characters long
   */
  password: string = "";

  constructor(data?: Partial<CreateUserRequest>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
