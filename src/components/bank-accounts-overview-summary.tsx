import { BankAccount } from "src/types/financials/message_financial_service";
import { BankAccountSummaryCard } from "./bank-account-card";

const BankAccountsOverviewSummary: React.FC<{
  allBankAccounts: BankAccount[];
}> = (props) => {
  const { allBankAccounts } = props;
  return (
    <div className="col-span-7 gap-2">
      <h2 className="ml-5 text-xl font-bold tracking-tight pb-5">
        Bank Accounts{" "}
        <span className="ml-1 text-xs"> ({allBankAccounts.length})</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2">
        {allBankAccounts.map((account, idx) => (
          <BankAccountSummaryCard account={account} key={idx} />
        ))}
      </div>
    </div>
  );
};

export { BankAccountsOverviewSummary };
