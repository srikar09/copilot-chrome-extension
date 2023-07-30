import { AccountType, Media } from "src/types/social/mongo";

/**
 * A note is a response a user can leave on another user's piece of content. Notes can
 * only be seen by the user who created the content (private) and should serve as some form of
 * intimate feedback protocol
 */
export class Note {
  /**
   * Note ID
   * @gotag: bson:"_id,omitempty"
   */
  id = "";
  /**
   * Platform wide ID of the user creating the note
   * @gotag: bson:"simfinyPlatformUserId"
   */
  simfinyPlatformUserId = 0;
  /**
   * ID of either the user profile or the community profile creating the note
   * @gotag: bson:"profileId"
   */
  profileId = 0;
  /**
   * Media payload tied to the note
   * @gotag: bson:"media"
   */
  media: Media | undefined;
  /**
   * Profiles mentioned in the note - NOTE: only the creator of the article whom this
   * note is attached to and the mentioned members will be notified. Additionally, this note
   * will only be viewable by those folks
   * @gotag: bson:"mentions"
   */
  mentions: string[] = [];
  /**
   * Hashtags defined in the note
   * @gotag: bson:"hashtags"
   */
  hashtags: string[] = [];
  /**
   * Time when the note was created
   * @gotag: bson:"createdAt"
   */
  createdAt = "";
  /**
   * Content defining the note
   * @gotag: bson:"content"
   */
  content = "";
  /**
   * AccountType is the account type of the creator of this piece of
   * content
   * @gotag: bson:"authorAccountType"
   */
  authorAccountType: AccountType = AccountType.ACCOUNT_TYPE_UNSPECIFIED;

  constructor(data?: Partial<Note>) {
    if (data) {
      Object.assign(this, {
        ...data,
        media: Media.create(data?.media),
      });
    }
  }
}
