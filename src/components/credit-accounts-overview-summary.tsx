import { CreditAccount } from "src/types/financials/message_financial_service";
import { CreditAccountSummaryCard } from "./credit-account-card";
import { AccountOverviewSummaryHeader } from "./account-overview-summary-header";

interface IProps {
  creditCardToInstitutionNameMap: {
    [key: string]: CreditAccount[];
  };
}

const CreditAccountsOverviewSummary: React.FC<IProps> = (props) => {
  const { creditCardToInstitutionNameMap } = props;
  // for each institution name get all credit cards and display them in the CreditAccountSummaryCard

  const creditAccounts = Object.keys(creditCardToInstitutionNameMap).reduce<
    CreditAccount[]
  >((acc, institutionName) => {
    return [
      ...acc,
      ...creditCardToInstitutionNameMap[institutionName].map((card) => ({
        ...card,
        institutionName,
      })),
    ];
  }, []);
  return (
    <div className="col-span-7 gap-2">
      <AccountOverviewSummaryHeader
        title={"Credit Accounts"}
        buttonTitle={"Credit Account"}
        count={creditAccounts.length}
      />

      <div>
        {Object.keys(creditCardToInstitutionNameMap).map(
          (institutionName, idx) => (
            <div className="flex flex-col gap-2" key={idx}>
              {creditCardToInstitutionNameMap[institutionName].length > 0 && (
                <h3 className="text-lg font-bold">{institutionName}</h3>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {creditCardToInstitutionNameMap[institutionName].map(
                  (card, idx) => (
                    <CreditAccountSummaryCard
                      account={card}
                      institutionName={institutionName}
                      key={idx}
                    />
                  )
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export { CreditAccountsOverviewSummary };
