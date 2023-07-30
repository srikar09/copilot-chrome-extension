import { CommunityProfile } from "src/types/social/message";

export class CreateCommunityProfileRequest {
  profile: CommunityProfile = CommunityProfile.create();
  userId: Number = 0;

  constructor(data?: Partial<CreateCommunityProfileRequest>) {
    if (data) {
      Object.assign(this, {
        ...data,
        profile: CommunityProfile.create(data.profile),
      });
    }
  }
}
