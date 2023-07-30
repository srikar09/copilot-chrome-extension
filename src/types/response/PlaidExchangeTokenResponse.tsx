import { ErrorResponse } from "src/types/error/error";

export class PlaidExchangeTokenResponse extends ErrorResponse {
  /** wether the operation was successful */
  success = false;

  constructor(data?: Partial<PlaidExchangeTokenResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
