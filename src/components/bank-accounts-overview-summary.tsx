// import { BankAccount } from "src/types/financials/message_financial_service";
import { BankAccountSummaryCard } from "./bank-account-card";
import { AccountOverviewSummaryHeader } from "./account-overview-summary-header";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";
import { BankAccountTransactions } from "./account-transactions";
import { BankAccountCard, BankAccount } from "melodiy-component-library";

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
  if (allBankAccounts.length == 0) {
    return null;
  }

  const [selectedAccount, setSelectedAccount] = useState<BankAccount>(
    allBankAccounts[0]
  );

  return (
    <div className="col-span-7 gap-2">
      <Sheet>
        <AccountOverviewSummaryHeader
          title={"Bank Accounts"}
          buttonTitle={"Bank Account"}
          count={allBankAccounts.length}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {allBankAccounts.map((account, idx) => (
            <>
              <BankAccountSummaryCard account={account} key={idx} />
            </>
          ))}
        </div>
        <SheetContent className="w-full h-[30%]" side={"bottom"}>
          <h2 className="pt-6 text-lg font-bold tracking-tight">
            {selectedAccount.name.toUpperCase()}{" "}
            <span className="ml-1 text-xs"> {selectedAccount.number}</span>
          </h2>
          <p className="text-4xl font-bold tracking-tight pb-5">
            ${selectedAccount.balance.toFixed(2)}{" "}
            <span className="ml-1 text-xs"> {selectedAccount.subtype}</span>
          </p>
          <BankAccountTransactions
            plaidAccountId={selectedAccount.plaidAccountId}
          />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export { BankAccountsOverviewSummary };
