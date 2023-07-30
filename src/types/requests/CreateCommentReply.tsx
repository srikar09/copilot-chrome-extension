import { CommentReply, PostType } from "src/types/social/mongo";

/**
 * @description The request to create a comment reply
 * - userId: the ID of the user creating the reply
 * - postId: the ID of the post the reply is for
 * - commentId: the ID of the comment the reply is for
 * - reply: the reply to create
 * - postType: the type of post the reply is for
 *
 * @export
 * @class CreateCommentReply
 * */
export class CreateCommentReplyRequest {
  userId = 0;
  postId = "";
  commentId = "";
  reply: CommentReply | undefined = undefined;
  postType: PostType = PostType.POST_TYPE_UNSPECIFIED;

  constructor(data?: Partial<CreateCommentReplyRequest>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /**
   * Validate the request object
   *
   * @returns {boolean}
   *
   * @memberOf CreateCommentReply
   * */
  public validate(): boolean {
    if (this.userId === 0) {
      return false;
    }

    if (this.postId === "") {
      return false;
    }

    if (this.commentId === "") {
      return false;
    }

    if (!this.reply) {
      return false;
    }

    if (this.postType === PostType.POST_TYPE_UNSPECIFIED) {
      return false;
    }

    return true;
  }
}
