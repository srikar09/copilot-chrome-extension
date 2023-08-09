import { Bookmark } from "../social/message";
import { Tag } from "../social/subtypes/tag";

/**
 * The profile of a user is the single entity around which all social interactions
 * are all referenced from. It is the entity that fascilitates all things social and enables
 * the user to interact with other users.
 *
 *
 * @remarks
 *
 * ```ts
 * var profile = new Profile({...});
 * ```
 * @sealed
 */
class Profile {
  /**
   * The number of followers this profile has.
   *
   * @type {string}
   */
  followers = '';
  /**
   * The number of users this profile is following.
   *
   * @type {string}
   */
  following = '';
  /**
   * the id of the profile
   *
   * @type {string}
   */
  id = '';
  /**
   * this is the username of the profile
   *
   * @type {string}
   */
  name = '';
  /**
   * The set of tags associated to this profile
   *
   * @type {Tag[]}
   */
  tags: Tag[] = [];
  /**
   * Deliniates wether the profile is a private or public one
   *
   * @type {boolean}
   */
  private = false;
  /**
   * The profile image url.
   *
   * @type {string}
   */
  profileImageUrl = '';
  /**
   * User profile id.
   * This is the id of the user that owns the profile.
   * NOTE: this is the same as the id field referenced above.
   * However we are keeping this field for backwards compatibility.
   *
   * @type {string}
   */
  userProfileid = '';

  bookmarks: Bookmark = Bookmark.create();

  /**
   * Creates an instance of Profile.
   *
   * @constructor
   * @param {?Partial<Profile>} [data]
   */
  constructor(data?: Partial<Profile>) {
    if (data) {
      Object.assign(this, {
        ...data,
        tags: data?.tags || [],
      });
    }
  }

  /**
   * Checks if the profile is private.
   * @returns {boolean} True if the profile is private, false otherwise.
   */
  isPrivate(): boolean {
    return this.private;
  }

  /**
   * Deciphers wether or not to show the profile's content
   * @returns {boolean} True if the profile is not private, false otherwise.
   */
  shouldShowContent(): boolean {
    return !this.isPrivate();
  }

  /**
   * Gets the profile image url.
   *
   * @returns {string} The profile image url.
   */
  getProfileImageUrl(): string {
    return this.profileImageUrl;
  }

  /**
   * Gets the tags of the profile.
   *
   * @returns {(Tag[] | string[])} The tags of the profile.
   */
  getTags(): Tag[] | string[] {
    return this.tags;
  }

  /**
   * Gets the number of tags the profile has.
   *
   * @returns {number} The number of tags the profile has.
   */
  getTagCount(): number {
    return this.tags.length;
  }

  /**
   * Gets the tag names of the profile.
   * @returns {string[]} The tag names of the profile.
   */
  getTagNames(): string[] {
    return this.tags.map((tag) => (tag as Tag).getName());
  }

  /**
   * Gets the number of followers this profile has.
   *
   * @returns {string} The number of followers this profile has.
   */
  getFollowerCount(): number {
    return Number(this.followers);
  }

  /**
   * Get the number of users following this profile.
   * @returns {string} The number of users following this profile.
   */
  getfollowingCount(): number {
    return Number(this.following);
  }
}

export { Profile };
