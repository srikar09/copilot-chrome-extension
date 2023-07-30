import { RootState } from "src/redux/store/store";

/**
 * selectErrorState returns the error occured
 * @param state - state object
 * @returns
 */
export const selectErrorState = (state: RootState) => state.error;

/**
 * selectErrorMessage returns the error message of some error that may have had occured
 * @param state - state object
 * @returns
 */
export const selectErrorMessage = (state: RootState) => state.error.message;
