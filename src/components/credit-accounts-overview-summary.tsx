import { CreditAccount } from "src/types/financials/message_financial_service";
import { CreditAccountSummaryCard } from "./credit-account-card";

const CreditAccountsOverviewSummary: React.FC<{
  creditCardToInstitutionNameMap: {
    [key: string]: CreditAccount[];
  };
}> = (props) => {
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
      <h2 className="ml-5 text-xl font-bold tracking-tight pb-5">
        Credit Accounts{" "}
        <span className="ml-1 text-xs"> ({creditAccounts.length})</span>
      </h2>
      <div>
        {Object.keys(creditCardToInstitutionNameMap).map(
          (institutionName, idx) => (
            <div className="flex flex-col gap-2" key={idx}>
              {creditCardToInstitutionNameMap[institutionName].length > 0 && (
                <h3 className="text-lg font-bold">{institutionName}</h3>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
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
