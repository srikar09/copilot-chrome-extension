import { UserAccount } from "src/types/user/account";
import { FinancialProfile } from "src/types/user/financialProfile";
import { Profile } from "src/types/user/profile";

export interface AuthenticationState {
  authenticated: boolean;
  userID: string;
  userAccount: UserAccount;
  userProfile: Profile;
  userFinancialProfile: FinancialProfile;
}

export const InitialAuthenticationState: AuthenticationState = {
  authenticated: false,
  userID: "",
  userAccount: {} as UserAccount,
  userProfile: {} as Profile,
  userFinancialProfile: {} as FinancialProfile,
};
