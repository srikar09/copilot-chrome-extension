import { Address } from "./address";
import { Tags } from "./tags";

/**
 * The UserAccount is the single reference point of a user within simfiny's backend. All operations
 * cannot be performed with this account being first defined
 *
 * @remarks
 * NOTE: gateway does some manipulation resulting in the following transformations
 *   id -> userAccountID
 *   authnId -> userAuthnAccountID
 *
 * ```ts
 * var account = new UserAccount({...});
 * ```
 *
 * @class UserAccount
 */
class UserAccount {
  /** account id */
  id: number = 0;
  /**
   * account email
   * Validations:
   * - must be an email and required
   */
  email: string = "";
  /**
   * the address associated with the user
   * Validations:
   * - can be empty
   */
  address: Address = new Address();
  /**
   * simple description specific to account should be less than 200 characters
   * Validations:
   * - can be empty
   */
  bio: string = "";
  /**
   * profile headline
   * Validations:
   * - can be empty
   */
  headline: string = "";
  /**
   * account phone number
   * Validations:
   * - mcan be empty
   */
  phoneNumber: string = "";
  /**
   * sample tags easily associable to account
   * account first name
   * Validations:
   * - must be at provide between 1 and 10 tags
   */
  tags: Tags[] = [];
  /** authentication service account id */
  authnAccountId: number = 0;
  /** infers wether the account is active */
  isActive: boolean = false;
  /**
   * account first name
   * Validations:
   * - can be empty
   */
  firstname: string = "";
  /**
   * account last name
   * Validations:
   * - can be empty
   */
  lastname: string = "";
  /**
   * account user name
   * Validations:
   * - must be at least 10 character
   */
  username: string = "";
  /** account is private */
  isPrivate: boolean = false;
  /**
   * isEmailVerified is a field denoting wether or not the user account has
   * indeed verified their email address
   */
  isEmailVerified: boolean = false;
  createdAt: Date | undefined;
  verifiedAt: Date | undefined;

  /*
   * userAccountID is a field denoting the user account id
   *
   * @type {string}
   * @memberOf UserAccount
   * */
  userAccountID?: string;

  /**
   * userAuthnAccountID is a field denoting the user authn account id
   *
   * @type {string}
   * @memberOf UserAccount
   */
  userAuthnAccountID?: string;

  constructor(data?: Partial<UserAccount>) {
    if (data) {
      Object.assign(this, {
        ...data,
        id: data?.userAccountID !== undefined ? data?.userAccountID : data?.id,
        authnAccountId:
          data?.userAuthnAccountID !== undefined
            ? data?.userAuthnAccountID
            : data?.authnAccountId,
      });
    }
  }

  /**
   * Returns the username of the account
   *
   * @return {*}  {string}
   * @memberof UserAccount
   */
  getUserName(): string {
    return this.username;
  }

  /**
   * Returns the tags associated with a given account
   *
   * @return {*}  {Tag[]}
   * @memberof UserAccount
   */
  getTags(): Tags[] {
    return this.tags;
  }

  /**
   * Returns the number of tags associated with a given account
   *
   * @return {*}  {number}
   * @memberof UserAccount
   */
  getTagCount(): number {
    return this.tags.length;
  }

  /**
   * Deciphers wether the account has a verified email or not
   *
   * @return {*}  {boolean}
   * @memberof UserAccount
   */
  isAccountVerified(): boolean | undefined {
    return this.isEmailVerified && this.isActive;
  }

  /**
   * Deciphers wether the account's content should be shown or not
   *
   * @return {*}  {boolean}
   * @memberof UserAccount
   */
  shouldShowContent(): boolean | undefined {
    return this.isActive && !this.isPrivate;
  }

  /**
   * Obtains the bio of the account
   *
   * @return {*}  {string}
   * @memberof UserAccount
   */
  getBio(): string | undefined {
    return this.bio;
  }

  /**
   * Obtains the headline of the account
   *
   * @return {*}  {string}
   * @memberof UserAccount
   */
  getHeadline(): string | undefined {
    return this.headline;
  }
}

export { UserAccount };
