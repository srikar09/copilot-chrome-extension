import { ErrorResponse } from "src/types/error/error";
import { AccountType, Post } from "src/types/social/mongo";

export class CreatePostRequest {
  /**
   * the user ID trying to create a post (NOTE: userID refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  userId = 0;
  /**
   * The ID of the community profile attempting to create the post  | type:
   * uint64
   */
  communityProfileId = 0;
  /** The post payload | type: json_object */
  post: Post = Post.create({});
  /** The type of profile making the request | type: string */
  accountType: AccountType = AccountType.ACCOUNT_TYPE_UNSPECIFIED;

  constructor(data?: Partial<CreatePostRequest>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /**
   * validate the request object
   *
   * @returns {boolean}
   *
   * @memberOf CreatePostRequest
   */
  validate(): boolean {
    if (this.userId === 0) {
      return false;
    }

    if (this.accountType === AccountType.ACCOUNT_TYPE_UNSPECIFIED) {
      return false;
    }

    return true;
  }
}
