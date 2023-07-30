import { Address } from "src/types/social/subtypes/address";
import { Tag } from "src/types/social/subtypes/tag";

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
  address?: Address = new Address();
  bio?: string = "";
  email = "";
  firstname?: string;
  lastname?: string;
  username = "";
  headline?: string;
  phoneNumber?: string;
  userAccountID?: string;
  userAuthnAccountID?: string;
  id = "";
  tags: Tag[] = [];
  created_at?: string;
  isEmailVerified?: boolean;
  isPrivate?: boolean;
  verifiedAt?: string;
  isActive?: boolean;
  authnAccountId?: string;
  createdAt?: string;

  /**
   * A constructor function that takes in a data object and assigns the data to the UserAccount class.
   * @param [data] - The data that you want to assign to the object.
   */
  constructor(data?: Partial<UserAccount>) {
    if (data)
      Object.assign(this, {
        ...data,
        // address: new Address(data?.address),
        tags: data?.tags?.map((tag) => new Tag(tag)),
        id: data?.userAccountID !== undefined ? data?.userAccountID : data?.id,
        authnAccountId:
          data?.userAuthnAccountID !== undefined
            ? data?.userAuthnAccountID
            : data?.authnAccountId,
      });
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
  getTags(): Tag[] {
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

  /**
   * @description Returns the ID of the account
   * @author Yoan Yomba
   * @returns {*}  {string}
   * @memberof UserAccount
   */
  getID(): string | undefined {
    return this.id;
  }
}

export { UserAccount };
