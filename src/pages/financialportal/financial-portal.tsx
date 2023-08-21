import React, { useState } from "react";
import { BankAccountsOverviewSummary } from "src/components/bank-accounts-overview-summary";
import { CreditAccountsOverviewSummary } from "src/components/credit-accounts-overview-summary";
import { LinkedAccountCard } from "src/components/linked-account-card";
import { OPTIONS, PortalLayout } from "src/layouts/portal-layout";
import { selectUserFinancialProfile } from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";
import {
  BankAccount,
  CreditAccount,
  InvestmentAccount,
} from "src/types/financials/message_financial_service";
import { AnalyticsPortal } from "./analytics-portal";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs";
import { InvestmentsSummaryCard } from "src/components/investments-summary-card";
import { TransactionOverview } from "src/components/transaction-overview";
import { RecurringTransactionOverview } from "src/components/recurring-transaction-component";
import { InvestmentAccountsView } from "../investments/investments-view";

/**
 * Enum representing different types of selected account types in the portal.
 */
enum SelectedAccountType {
  BANK_ACCOUNT = "BANK_ACCOUNT",
  CREDIT_CARD = "CREDIT_CARD",
  INVESTMENT_ACCOUNT = "INVESTMENT_ACCOUNT",
  TRANSACTIONS = "TRANSACTIONS",
  SUBSCRIPTIONS = "SUBSCRIPTIONS",
  INVESTMENTS_ACCOUNT_V2 = "INVESTMENTS_ACCOUNT_V2",
}

/**
 * The main financial analytics portal component that renders summary and analytics tabs.
 */
const FinancialAnalyticsPortal: React.FC = () => {
  return (
    <PortalLayout>
      <Tabs defaultValue={OPTIONS.OVERVIEW} className="space-y-4">
        <TabsList className="m-1 py-2 bg-black">
          <TabsTrigger value={OPTIONS.OVERVIEW}>Summary</TabsTrigger>
          {/* <TabsTrigger value={OPTIONS.ANALYTICS}>Analytics</TabsTrigger> */}
        </TabsList>
        <TabsContent value={OPTIONS.OVERVIEW} className="space-y-4">
          <FinancialPortal />
        </TabsContent>
        <TabsContent value={OPTIONS.ANALYTICS} className="space-y-4">
          <AnalyticsPortal />
        </TabsContent>
      </Tabs>
    </PortalLayout>
  );
};

/**
 * Component displaying the financial portal overview.
 */
const FinancialPortal: React.FC = () => {
  const [selectedAccountType, setSelectedAccountType] =
    useState<SelectedAccountType>(SelectedAccountType.BANK_ACCOUNT);
  const financialProfile = useAppSelector(selectUserFinancialProfile);
  const linkedBankAccounts = financialProfile.link;
  const creditCardToInstitutionNameMap = linkedBankAccounts.reduce<{
    [key: string]: CreditAccount[];
  }>((acc, card) => {
    return {
      ...acc,
      [card.institutionName]: card.creditAccounts,
    };
  }, {});

  const allBankAccounts = linkedBankAccounts.reduce<BankAccount[]>(
    (acc, link) => {
      return [...acc, ...link.bankAccounts];
    },
    []
  );

  const allInvestmentAccounts = linkedBankAccounts.reduce<InvestmentAccount[]>(
    (acc, link) => {
      return [...acc, ...link.investmentAccounts];
    },
    []
  );

  // across the linked accounts get all bankAccounts
  // compute the sum of all bank accounts under this linked account
  // compute the same for all credit cards
  // compute the total balance
  return (
    <>
      <div className="sm:block hidden">
        <h2 className="ml-5 text-xl font-bold tracking-tight">
          Overview{" "}
          <span className="ml-1 text-xs"> ({linkedBankAccounts.length})</span>
        </h2>
        <div className="py-3 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {linkedBankAccounts.map((link, idx) => (
            <LinkedAccountCard link={link} key={idx} />
          ))}
        </div>
        <Tabs defaultValue={SelectedAccountType.BANK_ACCOUNT}>
          <TabsList className="m-1 bg-black py-2">
            <TabsTrigger value={SelectedAccountType.BANK_ACCOUNT}>
              Bank Account
            </TabsTrigger>
            <TabsTrigger value={SelectedAccountType.CREDIT_CARD}>
              Credit Account
            </TabsTrigger>
            <TabsTrigger value={SelectedAccountType.INVESTMENT_ACCOUNT}>
              Investment Account
            </TabsTrigger>
            <TabsTrigger value={SelectedAccountType.TRANSACTIONS}>
              Transactions
            </TabsTrigger>
            <TabsTrigger value={SelectedAccountType.SUBSCRIPTIONS}>
              Subscriptions
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value={SelectedAccountType.BANK_ACCOUNT}
            className="pt-20 md:pt-15 lg:pt-10"
          >
            <BankAccountsOverviewSummary allBankAccounts={allBankAccounts} />
          </TabsContent>
          <TabsContent
            value={SelectedAccountType.CREDIT_CARD}
            className="pt-20 md:pt-15 lg:pt-10"
          >
            <CreditAccountsOverviewSummary
              creditCardToInstitutionNameMap={creditCardToInstitutionNameMap}
            />
          </TabsContent>
          <TabsContent
            value={SelectedAccountType.INVESTMENT_ACCOUNT}
            className="pt-20 md:pt-15 lg:pt-10"
          >
            <InvestmentAccountsView
              investment_accounts={allInvestmentAccounts}
            />
          </TabsContent>
          <TabsContent
            value={SelectedAccountType.TRANSACTIONS}
            className="pt-20 md:pt-15 lg:pt-10"
          >
            <TransactionOverview />
          </TabsContent>
          <TabsContent
            value={SelectedAccountType.SUBSCRIPTIONS}
            className="pt-20 md:pt-15 lg:pt-10"
          >
            <RecurringTransactionOverview />
          </TabsContent>
        </Tabs>
      </div>
      <div className="mb-2 md:hidden block lg:hidden" >
        <select 
          value={selectedAccountType}
          onChange={(e) => setSelectedAccountType(e.target.value as SelectedAccountType)}
          className="m-1 bg-black py-2 text-white"
        >
          <option value={SelectedAccountType.BANK_ACCOUNT}>Bank Account</option>
          <option value={SelectedAccountType.CREDIT_CARD}>Credit Account</option>
          <option value={SelectedAccountType.INVESTMENT_ACCOUNT}>Investment Account</option>
          <option value={SelectedAccountType.TRANSACTIONS}>Transactions</option>
          <option value={SelectedAccountType.SUBSCRIPTIONS}>Subscriptions</option>
        </select>

        {selectedAccountType === SelectedAccountType.BANK_ACCOUNT && (
          <BankAccountsOverviewSummary allBankAccounts={allBankAccounts} />
        )}
        {selectedAccountType === SelectedAccountType.CREDIT_CARD && (
          <CreditAccountsOverviewSummary creditCardToInstitutionNameMap={creditCardToInstitutionNameMap} />
        )}
        {selectedAccountType === SelectedAccountType.INVESTMENT_ACCOUNT && (
          <InvestmentAccountsView investment_accounts={allInvestmentAccounts} />
        )}
        {selectedAccountType === SelectedAccountType.TRANSACTIONS && (
          <TransactionOverview />
        )}
        {selectedAccountType === SelectedAccountType.SUBSCRIPTIONS && (
          <RecurringTransactionOverview />
        )}
      </div>
    </>
  );
};

export { FinancialAnalyticsPortal };
