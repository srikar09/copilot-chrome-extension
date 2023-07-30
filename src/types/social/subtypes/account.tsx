import { Tags } from '../message';
import { Address } from './address';

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
