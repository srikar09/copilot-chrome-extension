import { ErrorResponse } from "../error/error";
import { MelodyFinancialContext } from "../financials/clickhouse_financial_service";
import { SocialProfile } from "../records/social-profile";
import { UserAccount } from "../records/user-account";
import { FinancialProfile } from "../user/financialProfile";

type FinancialProfileResponse = {
  profile: FinancialProfile;
  financialContext: MelodyFinancialContext;
};

/**
 * @description The response when a user is authenticated
 * @author Yoan Yomba
 * @export
 * @class AuthenticationResponse
 * @extends {ErrorResponse}
 */
export class AuthenticationResponse extends ErrorResponse {
  code = 0;
  err = "";
  token = "";
  user_account: UserAccount = new UserAccount();
  user_profile: SocialProfile = new SocialProfile();
  user_financial_profile: FinancialProfileResponse = {
    profile: new FinancialProfile(),
    financialContext: MelodyFinancialContext.create({}),
  };

  constructor(data?: Partial<AuthenticationResponse>) {
    super();
    if (data) {
      Object.assign(this, {
        ...data,
        user_account: new UserAccount(data?.user_account),
        user_profile: new SocialProfile(data?.user_profile),
        user_financial_profile: {
          profile: new FinancialProfile(data?.user_financial_profile?.profile),
          financialContext: MelodyFinancialContext.create(
            data?.user_financial_profile?.financialContext
          ),
        },
      });
    }
  }
}
