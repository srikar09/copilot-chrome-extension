import { IRequest } from "./IRequest";

/*
 * CheckUsernameExistsRequests is used to assert if a username exists in the database
 *
 * @class CheckUsernameExistsRequest
 * @implements {IRequest}
 * */
class CheckUsernameExistsRequest implements IRequest {
  /** The username of the user of interest */
  username: string = "";

  constructor(data?: Partial<CheckUsernameExistsRequest>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /*
   * Validates the username of the user of interest in not
   * empty or invalid
   *
   * @returns {boolean}
   *
   * @memberOf CheckUsernameExistsRequest
   * */
  isValid(): boolean {
    return this.username !== "";
  }
}

export { CheckUsernameExistsRequest };
