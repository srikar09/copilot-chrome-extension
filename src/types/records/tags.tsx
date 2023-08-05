/**
 * Class representing metadata tags associated with an account.
 */
class Tags {
  /** Tag id */
  private _id: number;
  /** Name of the tag */
  private _tagName: string;

  /** Description of the tag */
  private _tagDescription: string;

  /** Metadata associated with the tag */
  private _metadata: string[];

  /**
   * Getter $id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter $tagName
   * @return {string}
   */
  public get tagName(): string {
    return this._tagName;
  }

  /**
   * Getter $tagDescription
   * @return {string}
   */
  public get tagDescription(): string {
    return this._tagDescription;
  }

  /**
   * Getter $metadata
   * @return {string[]}
   */
  public get metadata(): string[] {
    return this._metadata;
  }

  /**
   * Setter $id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter $tagName
   * @param {string} value
   */
  public set tagName(value: string) {
    this._tagName = value;
  }

  /**
   * Setter $tagDescription
   * @param {string} value
   */
  public set tagDescription(value: string) {
    this._tagDescription = value;
  }

  /**
   * Setter $metadata
   * @param {string[]} value
   */
  public set metadata(value: string[]) {
    this._metadata = value;
  }

  /**
   * Create a tag.
   * @param {number} id - The id of the tag.
   * @param {string} tagName - The name of the tag, cannot be empty and must be at least 3 characters long.
   * @param {string} tagDescription - The description of the tag, cannot be empty and must be at least 10 characters long.
   * @param {string[]} metadata - The metadata associated with the tag, must provide between 1 and 10 metadata tags.
   */
  constructor(
    id: number,
    tagName: string,
    tagDescription: string,
    metadata: string[]
  ) {
    this._id = id;
    this._tagName = tagName;
    this._tagDescription = tagDescription;
    this._metadata = metadata;
  }
}

export { Tags };
