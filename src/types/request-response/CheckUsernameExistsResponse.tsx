import { ErrorResponse } from "../error/error";

export class CheckUsernameExistsResponse extends ErrorResponse {
  exists = false;

  constructor(data?: Partial<CheckUsernameExistsResponse>) {
    super();
    if (data) {
      this.create(data);
    }
  }

  private create(base?: Partial<CheckUsernameExistsResponse>): CheckUsernameExistsResponse {
    return this.fromPartial(base ?? {});
  }

  private fromPartial(object: Partial<CheckUsernameExistsResponse>): CheckUsernameExistsResponse {
    const message = new CheckUsernameExistsResponse();
    message.exists = object.exists ?? false;
    return message;
  }
}
