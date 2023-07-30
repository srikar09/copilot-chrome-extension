import { AccountType, PostType, Comment } from "src/types/social/mongo";

/**
 * CreateCommentRequest: Represents the request object invoked against the
 * social service to create a comment
 */
export class CreateCommentRequest {
  /** The ID of the post to whom to add the comment | type: string */
  postId = "";
  /**
   * the user ID trying to create a comment (NOTE: userID refers to the
   * ID from the vantage point of the user service. This ID is the single source
   * of truth for a given user across our suite of services) | type: uint64
   */
  userId = 0;
  /** The ID of the community trying to create a comment | type: uint64 */
  communityProfileId = 0;
  /** The type of account making the request to create a comment | type: string */
  accountType: AccountType = AccountType.ACCOUNT_TYPE_UNSPECIFIED;
  /** The actual comment payload | type: json_object */
  comment: Comment | undefined = Comment.create({});
  /** The type of post being reacted to | type: string */
  postType: PostType = PostType.POST_TYPE_UNSPECIFIED;

  constructor(data?: Partial<CreateCommentRequest>) {
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
    if (this.postId === "") {
      return false;
    }

    if (this.userId === 0) {
      return false;
    }

    if (this.accountType === AccountType.ACCOUNT_TYPE_UNSPECIFIED) {
      return false;
    }

    if (this.comment === undefined) {
      return false;
    }

    if (this.postType === PostType.POST_TYPE_UNSPECIFIED) {
      return false;
    }

    return true;
  }
}
