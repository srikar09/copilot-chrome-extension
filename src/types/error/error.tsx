class ErrorMetadata {
  code?: number;
  status?: string;
  message?: string;
  details?: string[];

  constructor(data?: Partial<ErrorMetadata>) {
    if (data) {
      Object.assign(this, {
        ...data,
      });
    }
  }
}

class BackendError {
  response: {
    errors: ErrorMetadata[];
  } = { errors: [] };

  constructor(data?: Partial<BackendError>) {
    if (data) {
      Object.assign(this, {
        ...data,
        response: {
          errors: data?.response?.errors?.map((error) => new ErrorMetadata(error)),
        },
      });
    }
  }
}

class ErrorMessage {
  http_body: BackendError = new BackendError();
  http_status_code = 0;

  constructor(data?: Partial<ErrorMessage>) {
    if (data) {
      Object.assign(this, {
        ...data,
        http_body: new BackendError(data?.http_body),
        http_status_code: data?.http_status_code,
      });
    }
  }
}

class ErrorResponse {
  error_message: ErrorMessage = new ErrorMessage();
  constructor(data?: Partial<ErrorResponse>) {
    if (data) {
      Object.assign(this, {
        ...data,
        error_message: new ErrorMessage(data?.error_message),
      });
    }
  }
}

export { ErrorResponse, ErrorMessage, BackendError, ErrorMetadata };
