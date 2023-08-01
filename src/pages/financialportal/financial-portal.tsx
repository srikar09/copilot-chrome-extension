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
        <div className="flex flex-1 gap-4">
          <Button
            variant={"outline"}
            className="w-full font-bold rounded-full"
            onClick={() =>
              setSelectedAccountType(SelectedAccountType.BANK_ACCOUNT)
            }
          >
            <span className="text-sm">Bank Accounts</span>
          </Button>
          <Button
            variant={"outline"}
            className="w-full font-bold rounded-full"
            onClick={() =>
              setSelectedAccountType(SelectedAccountType.CREDIT_CARD)
            }
          >
            <span className="text-sm">Credit Cards</span>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/**
           * TODO:
           *  1) Credit Card Summary (In One Place For All Cards) For Each Linked Account
           *  2) Bank Account Summary (In One Place For All Accounts) For Each Linked Account
           */}
          <AccountSelectorSection selectedAccountType={selectedAccountType} />
          {/* <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card> */}
        </div>
      </div>
    </>
  );
};

const AccountSelectorSection: React.FC<{
  selectedAccountType: SelectedAccountType;
}> = (props) => {
  const financialProfile = useAppSelector(selectUserFinancialProfile);
  const linkedBankAccounts = financialProfile.link;
  const { selectedAccountType } = props;
  // create a hashmap of credit card to institution name
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
  return (
    <>
      {selectedAccountType === SelectedAccountType.BANK_ACCOUNT && (
        <BankAccountsOverviewSummary allBankAccounts={allBankAccounts} />
      )}
      {selectedAccountType === SelectedAccountType.CREDIT_CARD && (
        <CreditAccountsOverviewSummary
          creditCardToInstitutionNameMap={creditCardToInstitutionNameMap}
        />
      )}
    </>
  );
};

export { FinancialAnalyticsPortal };