export enum PublicationType {
  PUBLICATION_TYPE_UNSPECIFIED = 0,
  /** PUBLICATION_TYPE_MAGAZINE - a publication with a fixed publication staff that posts stories around a specific topic */
  PUBLICATION_TYPE_MAGAZINE = 1,
  /** PUBLICATION_TYPE_PLATFORM - a publication that accepts stories published around simfiny */
  PUBLICATION_TYPE_PLATFORM = 2,
  /** PUBLICATION_TYPE_BLOG - A community blog, a publication that is created specifically to share subset (community) news */
  PUBLICATION_TYPE_BLOG = 3,
  /** PUBLICATION_TYPE_SUBJECTS - A collection of individual stories by a set of authors that are part of a whole */
  PUBLICATION_TYPE_SUBJECTS = 4,
  UNRECOGNIZED = -1,
}

export function publicationTypeFromJSON(object: any): PublicationType {
  switch (object) {
    case 0:
    case "PUBLICATION_TYPE_UNSPECIFIED":
      return PublicationType.PUBLICATION_TYPE_UNSPECIFIED;
    case 1:
    case "PUBLICATION_TYPE_MAGAZINE":
      return PublicationType.PUBLICATION_TYPE_MAGAZINE;
    case 2:
    case "PUBLICATION_TYPE_PLATFORM":
      return PublicationType.PUBLICATION_TYPE_PLATFORM;
    case 3:
    case "PUBLICATION_TYPE_BLOG":
      return PublicationType.PUBLICATION_TYPE_BLOG;
    case 4:
    case "PUBLICATION_TYPE_SUBJECTS":
      return PublicationType.PUBLICATION_TYPE_SUBJECTS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PublicationType.UNRECOGNIZED;
  }
}

export function publicationTypeToJSON(object: PublicationType): string {
  switch (object) {
    case PublicationType.PUBLICATION_TYPE_UNSPECIFIED:
      return "PUBLICATION_TYPE_UNSPECIFIED";
    case PublicationType.PUBLICATION_TYPE_MAGAZINE:
      return "PUBLICATION_TYPE_MAGAZINE";
    case PublicationType.PUBLICATION_TYPE_PLATFORM:
      return "PUBLICATION_TYPE_PLATFORM";
    case PublicationType.PUBLICATION_TYPE_BLOG:
      return "PUBLICATION_TYPE_BLOG";
    case PublicationType.PUBLICATION_TYPE_SUBJECTS:
      return "PUBLICATION_TYPE_SUBJECTS";
    case PublicationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
