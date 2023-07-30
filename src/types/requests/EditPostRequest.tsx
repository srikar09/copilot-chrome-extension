import { Post, PostType } from "src/types/social/mongo";

/**
 * @description The request to edit a post
 * - postId: the ID of the post to edit
 * - postType: the type of post to edit
 * - post: the post to edit
 *
 * @export
 * @class EditPostRequest
 * */
export class EditPostRequest {
  postId = "";
  postType: PostType = PostType.POST_TYPE_UNSPECIFIED;
  post: Post | undefined;

  constructor(data?: Partial<EditPostRequest>) {
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
   * @memberOf EditPostRequest
   */
  public validate(): boolean {
    if (this.postId === "") {
      return false;
    }

    if (this.postType === PostType.POST_TYPE_UNSPECIFIED) {
      return false;
    }

    if (!this.post) {
      return false;
    }

    return true;
  }

  /*
   * Get the post ID
   *
   * @returns {string}
   *
   * @memberOf EditPostRequest
   * */
  public GetPostId(): string {
    return this.postId;
  }

  /*
   *  Get the post type
   *
   * @returns {PostType}
   *
   * @memberOf EditPostRequest
   * */
  public GetPostType(): PostType {
    return this.postType;
  }

  /*
   * Get the post
   *
   * @returns {(Post | undefined)}
   *
   * @memberOf EditPostRequest
   * */
  public GetPost(): Post | undefined {
    return this.post;
  }
}
