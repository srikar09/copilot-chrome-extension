import React, { useState } from "react";
import { BankAccountsOverviewSummary } from "src/components/bank-accounts-overview-summary";
import { CreditAccountsOverviewSummary } from "src/components/credit-accounts-overview-summary";
import { LinkedAccountCard } from "src/components/linked-account-card";
import { Button } from "src/components/ui/button";
import { OPTIONS, PortalLayout } from "src/layouts/portal-layout";
import { selectUserFinancialProfile } from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";
import {
  BankAccount,
  CreditAccount,
} from "src/types/financials/message_financial_service";
import { AnalyticsPortal } from "./analytics-portal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

enum SelectedAccountType {
  BANK_ACCOUNT = "BANK_ACCOUNT",
  CREDIT_CARD = "CREDIT_CARD",
  INVESTMENT_ACCOUNT = "INVESTMENT_ACCOUNT",
}

const FinancialAnalyticsPortal: React.FC = () => {
  return (
    <PortalLayout>
      <Tabs defaultValue={OPTIONS.OVERVIEW} className="space-y-4">
        <TabsList className="flex flex-1 gap-3">
          <TabsTrigger
            value={OPTIONS.OVERVIEW}
            className="rounded-2xl border px-6 py-2 font-bold"
          >
            Summary
          </TabsTrigger>
          <TabsTrigger
            value={OPTIONS.ANALYTICS}
            className="rounded-2xl border px-6 py-2 font-bold"
          >
            Analytics
          </TabsTrigger>
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

  // across the linked accounts get all bankAccounts
  // compute the sum of all bank accounts under this linked account
  // compute the same for all credit cards
  // compute the total balance

  return (
    <>
      <div>
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
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-3 border p-2 rounded-2xl">
            <TabsTrigger
              value={SelectedAccountType.BANK_ACCOUNT}
              className="bg-gray-100 rounded-2xl max-w-md p-2 items-center justify-center font-bold"
            >
              Bank Account
            </TabsTrigger>
            <TabsTrigger
              value={SelectedAccountType.CREDIT_CARD}
              className="bg-gray-100 rounded-2xl max-w-md p-2 items-center justify-center font-bold"
            >
              Credit Account
            </TabsTrigger>
            <TabsTrigger
              value={SelectedAccountType.INVESTMENT_ACCOUNT}
              className="bg-gray-100 rounded-2xl max-w-md p-2 items-center justify-center font-bold"
            >
              Investment Account
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
        </Tabs>
      </div>
    </>
  );
};

export { FinancialAnalyticsPortal };
