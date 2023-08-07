import { ErrorResponse } from "../error/error";
import { SocialRelationshipMetadata } from 'src/types/social/common';
import { UserAccount } from 'src/types/records/user-account';

export class GetUpdatedUserAccountResponse extends ErrorResponse {
  account: UserAccount | undefined;
  constructor(data: Partial<GetUpdatedUserAccountResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
