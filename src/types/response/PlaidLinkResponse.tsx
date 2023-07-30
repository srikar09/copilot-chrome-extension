import { ErrorResponse } from "src/types/error/error";

export class PlaidLinkResponse extends ErrorResponse {
  linkToken = "";
  expiration = "";
  plaidRequestId = "";

  constructor(data?: Partial<PlaidLinkResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
