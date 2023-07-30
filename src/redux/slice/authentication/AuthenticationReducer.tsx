import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  AuthenticationState,
  InitialAuthenticationState,
} from "./AuthenticationState";

/**
 * authenticateUser authenticates a user onto the platform
 * @param state - state object to apply mutations to
 * @param action - entity necessary to mutate state
 * @returns
 */
export const authenticateUser: CaseReducer<
  AuthenticationState,
  PayloadAction<AuthenticationState>
> = (state, action) => {
  state.authenticated = action.payload.authenticated;
  state.userID = action.payload.userID;
  state.userAccount = action.payload.userAccount;
  state.userProfile = action.payload.userProfile;
  state.userFinancialProfile = action.payload.userFinancialProfile;
  return state;
};

/**
 * deAuthenticateUser de-authenticates a user onto the platform
 * @param state - state object to apply mutations to
 * @param action - entity necessary to mutate state
 * @returns
 */
export const deAuthenticateUser: CaseReducer<
  AuthenticationState,
  PayloadAction<AuthenticationState>
> = (state, action) => {
  state = InitialAuthenticationState;
  return state;
};
