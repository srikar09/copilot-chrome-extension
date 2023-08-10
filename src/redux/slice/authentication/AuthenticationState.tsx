import { MelodyFinancialContext } from "src/types/financials/clickhouse_financial_service";
import { SocialProfile } from "src/types/records/social-profile";
import { UserAccount } from "src/types/user/user-account";
import { FinancialProfile } from "src/types/user/financial-profile";
import { Profile } from "src/types/user/social-profile";

export interface AuthenticationState {
  authenticated: boolean;
  userID: string;
  userAccount: UserAccount;
  userProfile: Profile;
  userFinancialProfile: FinancialProfile;
  userFinancialContext: MelodyFinancialContext;
}

export const InitialAuthenticationState: AuthenticationState = {
  authenticated: false,
  userID: "",
  userAccount: {} as UserAccount,
  userProfile: {} as Profile,
  userFinancialProfile: {} as FinancialProfile,
  userFinancialContext: {} as MelodyFinancialContext,
};
