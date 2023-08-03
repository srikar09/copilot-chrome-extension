import { BankAccount } from "src/types/financials/message_financial_service";
import { BankAccountSummaryCard } from "./bank-account-card";
import { Button } from "./ui/button";
import { PlusCircle } from "lucide-react";
import { ConnectPlaidAccountButton } from "./connect-plaid-account-button";
import { AccountOverviewSummaryHeader } from "./account-overview-summary-header";

const BankAccountsOverviewSummary: React.FC<{
  allBankAccounts: BankAccount[];
}> = (props) => {
  const { allBankAccounts } = props;
  return (
    <div className="col-span-7 gap-2">
      <AccountOverviewSummaryHeader
        title={"Bank Accounts"}
        buttonTitle={"Bank Account"}
        count={allBankAccounts.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {allBankAccounts.map((account, idx) => (
          <BankAccountSummaryCard account={account} key={idx} />
        ))}
      </div>
    </div>
  );
};

export { BankAccountsOverviewSummary };
