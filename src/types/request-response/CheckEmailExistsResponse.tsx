import { ErrorResponse } from "../error/error";

export class CheckEmailExistsResponse extends ErrorResponse {
  exists = false;

  constructor(data?: Partial<CheckEmailExistsResponse>) {
    super();
    if (data) {
      this.create(data);
    }
  }

  private create(base?: Partial<CheckEmailExistsResponse>): CheckEmailExistsResponse {
    return this.fromPartial(base ?? {});
  }

  private fromPartial(object: Partial<CheckEmailExistsResponse>): CheckEmailExistsResponse {
    const message = new CheckEmailExistsResponse();
    message.exists = object.exists ?? false;
    return message;
  }
}
