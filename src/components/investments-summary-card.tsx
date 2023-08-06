import react from "react";
import { selectUserFinancialProfile } from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";
import {
  InvesmentHolding,
  InvestmentAccount,
  Link,
} from "src/types/financials/message_financial_service";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { AskMelodiyAILayout } from "src/layouts/ask-melodiy-ai-layout";
import { cn, formatToTwoDecimalPoints } from "src/lib/utils";
import { HoldingCard } from "./holding-card";
import { AccountOverviewSummaryHeader } from "./account-overview-summary-header";

const InvestmentsSummaryCard: React.FC<{
  accounts: InvestmentAccount[];
}> = ({ accounts }) => {
  if (accounts.length == 0) {
    return null;
  }

  // note link is comprised of a ton of linked accounts
  const [accountIdx, setAccountIdx] = react.useState<number>(0);
  const [selectedAccount, setSelectedAccount] =
    react.useState<InvestmentAccount>(accounts[accountIdx]);

  // display each linked investment account
  // get number of investment accounts
  const numberOfInvestmentAccounts = accounts.length;

  return (
    <div className="gap-2">
      <AccountOverviewSummaryHeader
        title={"Investment Accounts"}
        buttonTitle={"Investment Accounts"}
        count={numberOfInvestmentAccounts}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <LinkedInvestmentAccounts
          investmentAccounts={accounts}
          selectedAccount={selectedAccount}
          setSelectedAccount={setSelectedAccount}
        />
      </div>
      <div className="pt-5">
        <HoldingCard Account={selectedAccount} />
      </div>
    </div>
  );
};

const LinkedInvestmentAccounts: React.FC<{
  investmentAccounts: InvestmentAccount[];
  setSelectedAccount: react.Dispatch<react.SetStateAction<InvestmentAccount>>;
  selectedAccount: InvestmentAccount;
}> = ({ investmentAccounts, setSelectedAccount, selectedAccount }) => {
  if (investmentAccounts.length === 0) {
    return <></>;
  }

  const selectAccount = (idx: number) => {
    setSelectedAccount(investmentAccounts[idx]);
  };

  const samplQuestions: string[] = [
    "What is the current value of my portfolio? ",
    "What investments do I currently hold in my portfolio?",
    "How is my portfolio diversified?",
    "How can I adjust the asset allocation in my portfolio?",
  ];

  return (
    <>
      {investmentAccounts.map((account, idx) => (
        <AskMelodiyAILayout
          context={account}
          key={idx}
          className={
            account.id === selectedAccount.id ? "border-4 border-black" : ""
          }
          sampleQuestions={samplQuestions}
        >
          <Card
            className={cn(
              "flex flex-col bg-white rounded-lg shadow-lg overflow-hidden min-h-[400px] rounded-t-2xl rounded-b-2xl gap-3"
            )}
            onClick={() => selectAccount(idx)}
          >
            <CardHeader className="flex-1 px-6 py-8 flex flex-col">
              <div>
                <p className="font-bold text-lg">
                  {account.name.toUpperCase()}
                  <span
                    className="ml-1 text-xs"
                    style={{
                      fontSize: "10px",
                    }}
                  >
                    {" "}
                    {account.number}
                  </span>
                </p>
              </div>
              <div className="flex flex-row overflow-hidden gap-2">
                <Badge className="bg-black font-bold text-white">
                  {account.holdings.length} Holdings
                </Badge>
                <Badge className="bg-white font-bold text-black border-gray-300">
                  {account.type}
                </Badge>
                <Badge className="bg-white font-bold text-black border-gray-300">
                  {account.subtype}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between">
                  <p className="font-bold text-lg">Total Value</p>
                  <p className="font-bold text-4xl">
                    ${account.currentFunds.toFixed(2)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AskMelodiyAILayout>
      ))}
    </>
  );
};

export { InvestmentsSummaryCard, LinkedInvestmentAccounts };
