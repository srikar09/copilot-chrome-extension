import { DeepPartial, Exact, isSet } from "../request-response/utils";
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

  /** UserAccount: represents a user account in the context of simfinni */  
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
  /** UserAccount: represents a user account in the context of simfinni */
export interface UserAccount {
  /** account id */
  id: number;
  /**
   * account email
   * Validations:
   * - must be an email and required
   */
  email: string;
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
  bio: string;
  /**
   * profile headline
   * Validations:
   * - can be empty
   */
  headline: string;
  /**
   * account phone number
   * Validations:
   * - mcan be empty
   */
  phoneNumber: string;
  /**
   * sample tags easily associable to account
   * account first name
   * Validations:
   * - must be at provide between 1 and 10 tags
   */
  tags: Tags[];
  /** authentication service account id */
  authnAccountId: number;
  /** infers wether the account is active */
  isActive: boolean;
  /**
   * account first name
   * Validations:
   * - can be empty
   */
  firstname: string;
  /**
   * account last name
   * Validations:
   * - can be empty
   */
  lastname: string;
  /**
   * account user name
   * Validations:
   * - must be at least 10 character
   */
  username: string;
  /** account is private */
  isPrivate: boolean;
  /**
   * isEmailVerified is a field denoting wether or not the user account has
   * indeed verified their email address
   */
  isEmailVerified: boolean;
  createdAt: Date | undefined;
  verifiedAt: Date | undefined;
}

export function createBaseUserAccount(): UserAccount {
    return {
      id: 0,
      email: '',
      address: undefined,
      bio: '',
      headline: '',
      phoneNumber: '',
      tags: [],
      authnAccountId: 0,
      isActive: false,
      firstname: '',
      lastname: '',
      username: '',
      isPrivate: false,
      isEmailVerified: false,
      createdAt: undefined,
      verifiedAt: undefined,
    };
}
  
export const UserAccount = {
    fromJSON(object: any): UserAccount {
      return {
        id: isSet(object.id) ? Number(object.id) : 0,
        email: isSet(object.email) ? String(object.email) : '',
        address: isSet(object.address) ? Address.fromJSON(object.address) : undefined,
        bio: isSet(object.bio) ? String(object.bio) : '',
        headline: isSet(object.headline) ? String(object.headline) : '',
        phoneNumber: isSet(object.phoneNumber) ? String(object.phoneNumber) : '',
        tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => Tags.fromJSON(e)) : [],
        authnAccountId: isSet(object.authnAccountId) ? Number(object.authnAccountId) : 0,
        isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
        firstname: isSet(object.firstname) ? String(object.firstname) : '',
        lastname: isSet(object.lastname) ? String(object.lastname) : '',
        username: isSet(object.username) ? String(object.username) : '',
        isPrivate: isSet(object.isPrivate) ? Boolean(object.isPrivate) : false,
        isEmailVerified: isSet(object.isEmailVerified) ? Boolean(object.isEmailVerified) : false,
        createdAt: undefined,
        verifiedAt: undefined,
      };
    },
  
    toJSON(message: UserAccount): unknown {
      const obj: any = {};
      message.id !== undefined && (obj.id = Math.round(message.id));
      message.email !== undefined && (obj.email = message.email);
      message.address !== undefined &&
        (obj.address = message.address ? Address.toJSON(message.address) : undefined);
      message.bio !== undefined && (obj.bio = message.bio);
      message.headline !== undefined && (obj.headline = message.headline);
      message.phoneNumber !== undefined && (obj.phoneNumber = message.phoneNumber);
      if (message.tags) {
        obj.tags = message.tags.map((e) => (e ? Tags.toJSON(e) : undefined));
      } else {
        obj.tags = [];
      }
      message.authnAccountId !== undefined &&
        (obj.authnAccountId = Math.round(message.authnAccountId));
      message.isActive !== undefined && (obj.isActive = message.isActive);
      message.firstname !== undefined && (obj.firstname = message.firstname);
      message.lastname !== undefined && (obj.lastname = message.lastname);
      message.username !== undefined && (obj.username = message.username);
      message.isPrivate !== undefined && (obj.isPrivate = message.isPrivate);
      message.isEmailVerified !== undefined && (obj.isEmailVerified = message.isEmailVerified);
      message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
      message.verifiedAt !== undefined && (obj.verifiedAt = message.verifiedAt.toISOString());
      return obj;
    },
  
    create<I extends Exact<DeepPartial<UserAccount>, I>>(base?: I): UserAccount {
      return UserAccount.fromPartial(base ?? {});
    },
  
    fromPartial<I extends Exact<DeepPartial<UserAccount>, I>>(object: I): UserAccount {
      const message = createBaseUserAccount();
      message.id = object.id ?? 0;
      message.email = object.email ?? '';
      message.address =
        object.address !== undefined && object.address !== null
          ? Address.fromPartial(object.address)
          : undefined;
      message.bio = object.bio ?? '';
      message.headline = object.headline ?? '';
      message.phoneNumber = object.phoneNumber ?? '';
      message.tags = object.tags?.map((e) => Tags.fromPartial(e)) || [];
      message.authnAccountId = object.authnAccountId ?? 0;
      message.isActive = object.isActive ?? false;
      message.firstname = object.firstname ?? '';
      message.lastname = object.lastname ?? '';
      message.username = object.username ?? '';
      message.isPrivate = object.isPrivate ?? false;
      message.isEmailVerified = object.isEmailVerified ?? false;
      message.createdAt = object.createdAt ?? undefined;
      message.verifiedAt = object.verifiedAt ?? undefined;
      return message;
    },
};
  
  

  

