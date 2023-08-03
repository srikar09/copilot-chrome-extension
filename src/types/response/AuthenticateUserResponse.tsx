import { ErrorResponse } from "../error/error";
import { MelodyFinancialContext } from "../financials/clickhouse_financial_service";
import { UserAccount } from "../user/account";
import { FinancialProfile } from "../user/financialProfile";
import { Profile } from "../user/profile";

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
  user_profile: Profile = new Profile();
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
        user_profile: new Profile(data?.user_profile),
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
