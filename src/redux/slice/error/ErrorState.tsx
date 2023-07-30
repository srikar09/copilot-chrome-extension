import { BackendError } from "src/types/error/error";

export interface ErrorState {
  message: BackendError;
  statusCode: number;
}

export const InitialErrorState: ErrorState = {
  message: {} as BackendError,
  statusCode: 0,
};
