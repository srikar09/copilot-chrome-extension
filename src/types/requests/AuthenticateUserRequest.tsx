/**
 * @description The request to authenticate a user
 * @author Yoan Yomba
 * @export
 * @class AuthenticateRequest
 */
export class AuthenticateRequest {
  Username = "";
  Password = "";

  constructor(data?: Partial<AuthenticateRequest>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}
