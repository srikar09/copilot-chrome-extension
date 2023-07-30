import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { ErrorState } from "src/redux/slice/error/ErrorState";

/**
 * populateError mutates state with new error state object
 * @param state - state object to apply mutations to
 * @param action - entity necessary to mutate state
 * @returns
 */
export const populateError: CaseReducer<
  ErrorState,
  PayloadAction<ErrorState>
> = (state, action) => {
  // it is ok to do this given immer work under the hood
  state.message = action.payload.message;
  state.statusCode = action.payload.statusCode;
  return state;
};
