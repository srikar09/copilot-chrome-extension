import { Note } from "src/types/custom/Note";
import { PostType } from "src/types/social/mongo";

/**
 * CreateNoteRequest is a request object for creating a note
 *
 * @export
 * @class CreateNoteRequest
 * */
export class CreateNoteRequest {
  postType: PostType = PostType.POST_TYPE_UNSPECIFIED;
  note: Note = new Note();

  constructor(data?: Partial<CreateNoteRequest>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  validate(): boolean {
    if (this.postType === PostType.POST_TYPE_UNSPECIFIED) {
      return false;
    }

    if (this.note === undefined) {
      return false;
    }

    return true;
  }
}
