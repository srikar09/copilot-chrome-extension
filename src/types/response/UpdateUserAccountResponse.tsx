import { ErrorResponse } from "src/types/error/error";
import { UserAccount } from "src/types/service/message";

export class UpdateUserAccountResponse extends ErrorResponse {
  accountUpdated = false;
  account: UserAccount | undefined;

  constructor(data?: Partial<UpdateUserAccountResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
        account: UserAccount.create(data?.account),
      });
    }
  }
}
