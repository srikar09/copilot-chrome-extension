import { ErrorResponse } from "../error/error";

/*
 * Class that captures the response object as a product of the create user
 * api call
 *
 * @class CreateUserResponse
 * @extends {ErrorResponse}
 * */
class CreateUserResponse extends ErrorResponse {
  userId: number = 0;

  constructor(data?: Partial<CreateUserResponse>) {
    super(data);
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}

export { CreateUserResponse };
