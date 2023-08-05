import { Address } from "../records/address";
import { Tags } from "../records/tags";
import { IRequest } from "./IRequest";

/*
 * UserRegistrationAccountDetails is a type that represents the account details
 * of a user that is being registered
 *
 * @export
 * @class UserRegistrationAccountDetails
 * */
export class UserRegistrationAccountDetails {
  /** account id */
  id = 0;
  /**
   * account email
   * Validations:
   * - must be an email and required
   */
  email = "";
  /**
   * the address associated with the user
   * Validations:
   * - can be empty
   */
  address: Address | undefined;
  /**
   * simple description specific to account should be less than 200 characters
   * Validations:
   * - can be empty
   */
  bio = "";
  /**
   * profile headline
   * Validations:
   * - can be empty
   */
  headline = "";
  /**
   * account phone number
   * Validations:
   * - mcan be empty
   */
  phoneNumber = "";
  /**
   * sample tags easily associable to account
   * account first name
   * Validations:
   * - must be at provide between 1 and 10 tags
   */
  tags: Tags[] = [];
  /** authentication service account id */
  authnAccountId = 0;
  /** infers wether the account is active */
  isActive = false;
  /**
   * account first name
   * Validations:
   * - can be empty
   */
  firstname = "";
  /**
   * account last name
   * Validations:
   * - can be empty
   */
  lastname = "";
  /**
   * account user name
   * Validations:
   * - must be at least 10 character
   */
  username = "";
  /** account is private */
  isPrivate = false;
  /**
   * isEmailVerified is a field denoting wether or not the user account has
   * indeed verified their email address
   */
  isEmailVerified = false;
  createdAt: Date | undefined;
  verifiedAt: Date | undefined;

  constructor(data?: Partial<UserRegistrationAccountDetails>) {
    if (data) {
      Object.assign(this, {
        ...data,
        address: new Address(this.address),
      });
    }
  }
}

/**
 * @description The request to create a user account
 * @author Yoan Yomba
 * @export
 * @class CreateAccountRequest
 */
export class CreateAccountRequest implements IRequest {
  account: UserRegistrationAccountDetails =
    new UserRegistrationAccountDetails();
  communityIdsToFollow: number[] = [];
  profileImage = "";
  password = "";

  constructor(data?: Partial<CreateAccountRequest>) {
    if (data) {
      Object.assign(this, {
        ...data,
        account: new UserRegistrationAccountDetails(data?.account),
      });
    }
  }

  /*
   * Validate the create account request object
   *
   * @returns {boolean}
   *
   * @memberOf CreateAccountRequest
   * */
  isValid(): boolean {
    return (
      this.account.email.length > 0 &&
      this.account.username.length > 0 &&
      this.password.length > 10 &&
      this.profileImage.length > 0
    );
  }
}
