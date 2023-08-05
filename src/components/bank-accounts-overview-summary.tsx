import { BankAccount } from "src/types/financials/message_financial_service";
import { BankAccountSummaryCard } from "./bank-account-card";
import { AccountOverviewSummaryHeader } from "./account-overview-summary-header";

/**
 * Props interface for the BankAccountsOverviewSummary component.
 */
interface IProps {
  /**
   * An array of BankAccount objects representing all bank accounts to be displayed.
   */
  allBankAccounts: BankAccount[];
}

/**
 * BankAccountsOverviewSummary component displays an overview of all bank accounts.
 * It shows a header with the total count of bank accounts and a list of bank account cards.
 *
 * @param props - The props for the component.
 * @returns A React functional component.
 */
const BankAccountsOverviewSummary: React.FC<IProps> = (props) => {
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
