/**
 * @description Represents a tag
 * @author Yoan Yomba
 * @class Tag
 */
class Tag {
  static fromPartial(e: any): any {
    throw new Error("Method not implemented.");
  }
  id?: string;
  tagName?: string;
  tagDescription?: string;
  metadata: string[] = [];

  /**
   * Creates an instance of Tag.
   * @author Yoan Yomba
   * @param {Partial<Tag>} [data]
   * @memberof Tag
   */
  constructor(data?: Partial<Tag>) {
    if (data)
      Object.assign(this, {
        ...data,
        metadata: data?.metadata || [],
      });
  }

  /**
   * If the tag_description property is defined, return it, otherwise return an empty string
   * @returns The tag_description property of the object, or an empty string if it is undefined.
   */
  getDescription(): string {
    return this.tagDescription || '';
  }

  /**
   * If the tagName property is defined, return it, otherwise return an empty string
   * @returns The tagName property of the object, or an empty string if it is undefined.
   */
  getName(): string {
    return this.tagName || '';
  }

  /**
   * If the metadata property is defined, return it, otherwise return an empty array
   * @returns  The metadata property of the object, or an empty array if it is undefined.
   */
  getMetadata(): string[] {
    return this.metadata || [];
  }
}

export { Tag };
