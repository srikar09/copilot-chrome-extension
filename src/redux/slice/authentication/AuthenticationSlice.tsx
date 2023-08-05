import { createSlice } from "@reduxjs/toolkit";
import { InitialAuthenticationState } from "./AuthenticationState";
import { authenticateUser, deAuthenticateUser } from "./AuthenticationReducer";
import { api } from "src/redux/api/api";

import { AuthenticateUser } from "src/redux/mutations/authenticate-user";
import { persistentStorage } from "src/lib/persistent-storage";
import { constants } from "src/constant/constants";
import { validations } from "src/lib/validations";

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: InitialAuthenticationState,
  reducers: {
    authenticateUser,
    deAuthenticateUser,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        // when the query/mutation is fullfilled, this dispatch action is executed automatically
        AuthenticateUser.endpoints.authenticatedUser.matchFulfilled,
        (state, { payload }) => {
          state.authenticated = validations.validateObject(payload);
          state.userID = payload.user_account.userAccountID!;
          state.userAccount = payload.user_account;
          state.userProfile = payload.user_profile;
          state.userFinancialProfile = payload.user_financial_profile.profile;
          state.userFinancialContext =
            payload.user_financial_profile.financialContext;

          // necessary given protected route checks for cached token
          persistentStorage.setItem(constants.JWT_TOKEN_KEY, payload.token);
          persistentStorage.setItem(
            constants.USER_ID_KEY,
            payload.user_account.userAccountID
          );
          persistentStorage.setItem(
            constants.USER_ACCOUNT_KEY,
            payload.user_account
          );
          persistentStorage.setItem(
            constants.USER_PROFILE_KEY,
            payload.user_profile
          );
          persistentStorage.setItem(
            constants.USER_FINANCIAL_PROFILE_KEY,
            payload.user_financial_profile
          );
        }
      )
      .addMatcher(
        AuthenticateUser.endpoints.authenticatedUser.matchFulfilled,
        (state, { payload }) => {
          state.userAccount = payload.user_account;
          // we update the account stored in browser cache since this is the field value
          // referenced on page reloads
          persistentStorage.setItem(constants.USER_ACCOUNT_KEY, payload);
        }
      );
  },
});

export const authenticationActions = authenticationSlice.actions;
export default authenticationSlice.reducer;
