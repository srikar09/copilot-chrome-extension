import { IRequest } from "./IRequest";

/**
 * @description The request to authenticate a user
 * @author Yoan Yomba
 * @export
 * @class AuthenticateRequest
 */
export class AuthenticateRequest implements IRequest {
  Username = "";
  Password = "";

  constructor(data?: Partial<AuthenticateRequest>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /*
   * Validates the authenticate request object.
   * Ensures the username and password fields are not empty
   *
   * @returns {boolean}
   *
   * @memberOf AuthenticateRequest
   * */
  isValid(): boolean {
    return this.Username !== "" && this.Password !== "";
  }
}
