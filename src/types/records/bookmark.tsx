import { Publication } from "./publication";

/**
 * Class representing a bookmark.
 */
class Bookmark {
  /** The id of the bookmarked record */
  public id: number = 0;

  /** The array of postIds in the bookmark */
  public postIds: string[] = [];

  /** The array of publications in the bookmark */
  public publications: Publication[] = [];

  /**
   * Create a bookmark.
   * @param {number} id - The id of the bookmarked record.
   * @param {string[]} postIds - The ids of the posts in the bookmark.
   * @param {Publication[]} publications - The publications in the bookmark.
   */
  constructor(data?: Partial<Bookmark>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}

export { Bookmark };
