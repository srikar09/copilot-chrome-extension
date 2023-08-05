import { PublicationType } from "./publication-type";
import { SocialProfile } from "./social-profile";

/**
 * Class representing a publication.
 */
export class Publication {
  id: number = 0;
  postIds: string[] = [];
  admin?: SocialProfile = new SocialProfile();
  adminSimfinyPlatformUserId: number = 0;
  tags: string[] = [];
  editors: SocialProfile[] = [];
  subjects: string[] = [];
  description: string = "";
  createdAt: string = "";
  type: PublicationType = PublicationType.UNRECOGNIZED;
  publicationName: string = "";

  /**
   * Create a publication.
   * @param {Partial<Publication>} data - Object containing any properties of a publication.
   */
  constructor(data: Partial<Publication>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
