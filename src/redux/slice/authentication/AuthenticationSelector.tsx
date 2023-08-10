import { AuthenticationState } from "src/redux/slice/authentication/AuthenticationState";
import { RootState } from "src/redux/store/store";
import { MelodyFinancialContext } from "src/types/financials/clickhouse_financial_service";
import { SocialProfile } from "src/types/records/social-profile";
import { UserAccount } from "src/types/user/user-account";
import { FinancialProfile } from "src/types/user/financial-profile";
import { Profile } from "src/types/user/social-profile";

/**
 * selectAuthenticationState obtains authentication state object
 * @param state - root state object
 * @returns
 */
export const selectAuthenticationState = (
  state: RootState
): AuthenticationState => state.authentication;

/**
 * selectCurrentUserAccount selects the current user account from authentication state object
 * @param state - root state object
 * @returns
 */
export const selectCurrentUserAccount = (state: RootState): UserAccount =>
  state.authentication.userAccount;

/**
 * selectCurrentSocialProfile selects the current user profile from authentication state object
 * @param state - root state object
 * @returns
 */
export const selectCurrentSocialProfile = (state: RootState): Profile =>
  state.authentication.userProfile;

/**
 * selectCurrentUserID selects the current user profile ID from the authentication state object
 * @param state
 * @returns
 */
export const selectCurrentUserID = (state: RootState): string =>
  state.authentication.userID;

/**
 * selectAuthenticated selects the authentication state of a user
 * @param state
 * @returns
 */
export const selectAuthenticated = (state: RootState): boolean =>
  state.authentication.authenticated;

/**
 * selectUserFinancialProfile selects the current user financial profile from the authentication state object
 * @param state
 * @returns
 */
export const selectUserFinancialProfile = (
  state: RootState
): FinancialProfile => state.authentication.userFinancialProfile;

export const selectUserFinancialContext = (
  state: RootState
): MelodyFinancialContext => state.authentication.userFinancialContext;
