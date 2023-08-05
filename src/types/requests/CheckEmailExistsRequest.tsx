import { IRequest } from "./IRequest";

/*
 * CheckEmailExistsRequest is used to check if an email exists in the database
 *
 * @class CheckEmailExistsRequest
 * @implements {IRequest}
 * */
class CheckEmailExistsRequest implements IRequest {
  /** The email of the user of interest */
  private _email: string = "";

  /**
   * Gets the email of the user of interest
   *
   * @type {string}
   * @memberOf CheckEmailExistsRequest
   */
  public get email(): string {
    return this._email;
  }

  constructor(data?: Partial<CheckEmailExistsRequest>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }

  /*
   * validate the email field of the check email exist request object
   *
   * @returns {boolean}
   *
   * @memberOf CheckEmailExistsRequest
   * */
  isValid(): boolean {
    return this.email !== "";
  }
}

export { CheckEmailExistsRequest };
