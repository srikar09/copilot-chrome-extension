import { Bookmark } from "./bookmark";
import { Tags } from "./tags";

/**
 * The SocialProfile of a user is the single entity around which all social interactions
 * are all referenced from. It is the entity that fascilitates all things social and enables
 * the user to interact with other users.
 *
 *
 * @remarks
 *
 * ```ts
 * var profile = new SocialProfile({...});
 * ```
 * @sealed
 */
class SocialProfile {
  /** User profile ID */
  id: number = 0;
  /**
   * User profile id.
   * This is the id of the user that owns the profile.
   * NOTE: this is the same as the id field referenced above.
   * However we are keeping this field for backwards compatibility.
   *
   * @type {string}
   */
  userProfileid = "";
  /** Tags are interests */
  tags: Tags[] = [];
  /**
   * Profile name is the name tied to the user profile
   * user name must be at least 5 characters long
   */
  name: string = "";
  /**
   * Private defines wether only approved followers can see what this profile
   * posts
   */
  private: boolean = false;
  /** Followers outlines the number of followers this user profile has */
  followers: number = 0;
  /** Number of people account is following */
  following: number = 0;
  /**
   * Notification timeline Id. Notification for anything a user/group is
   * following
   */
  notificationFeedTimelineId: string = "";
  /** Personal timeline ID Has activities for a user that can be followed */
  personalFeedTimelineId: string = "";
  /**
   * Newsfeed timeline ID Displays all followed and group activities the user
   * follows
   */
  newsFeedTimelineId: string = "";
  /** ProfileImageUrl witholds the url of a given profile image */
  profileImageUrl: string = "";
  /** all the bookmarked pieces of content on the platform */
  bookmarks: Bookmark | undefined = new Bookmark();
  /** The id of the algolia record referencing this user */
  algoliaId: string = "";

  constructor(data?: Partial<SocialProfile>) {
    if (data) {
      Object.assign(this, {
        ...data,
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
  getTags(): Tags[] | string[] {
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
    return this.tags.map((tag) => (tag as Tags).tagName);
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

export { SocialProfile };
