import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { useState } from "react";
import { BankAccountSummaryCard } from "src/components/bank-account-card";
import { CreditAccountSummaryCard } from "src/components/credit-account-card";
import { LinkedAccountCard } from "src/components/linked-account-card";
import { MainNav } from "src/components/main-nav";
import { Overview } from "src/components/overview";
import { RecentSales } from "src/components/recent-sales";
import { Search } from "src/components/search";
import TeamSwitcher from "src/components/team-switcher";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "src/components/ui/card";
import { Layout } from "src/layouts/layout";
import { PortalLayout } from "src/layouts/portal-layout";
import { selectUserFinancialProfile } from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";
import { BankAccount, CreditAccount } from "src/types/financials/message";

enum SelectedAccountType {
  BANK_ACCOUNT = "BANK_ACCOUNT",
  CREDIT_CARD = "CREDIT_CARD",
}
export default function FinancialPortalOverview() {
  const [selectedAccountType, setSelectedAccountType] =
    useState<SelectedAccountType>(SelectedAccountType.BANK_ACCOUNT);
  const financialProfile = useAppSelector(selectUserFinancialProfile);
  const linkedBankAccounts = financialProfile.link;
  // across the linked accounts get all creditAccounts
  const allCreditAccounts = linkedBankAccounts.reduce<CreditAccount[]>(
    (acc, link) => {
      return [...acc, ...link.creditAccounts];
    },
    []
  );

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
  // across the linked accounts get all bankAccounts
  // compute the sum of all bank accounts under this linked account
  // compute the same for all credit cards
  // compute the total balance

  return (
    <PortalLayout option={"OVERVIEW"}>
      <h2 className="ml-5 text-xl font-bold tracking-tight">
        Overview{" "}
        <span className="ml-1 text-xs"> ({linkedBankAccounts.length})</span>
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {linkedBankAccounts.map((link) => (
          <LinkedAccountCard link={link} />
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
        {selectedAccountType == SelectedAccountType.BANK_ACCOUNT && (
          <BankAccountsOverviewSummary allBankAccounts={allBankAccounts} />
        )}
        {selectedAccountType == SelectedAccountType.CREDIT_CARD && (
          <CreditAccountsOverviewSummary
            creditCardToInstitutionNameMap={creditCardToInstitutionNameMap}
          />
        )}
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
    </PortalLayout>
  );
}

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
      <div className="grid grid-cols-3 gap-2">
        {allBankAccounts.map((account) => (
          <BankAccountSummaryCard account={account} />
        ))}
      </div>
    </div>
  );
};

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
        {Object.keys(creditCardToInstitutionNameMap).map((institutionName) => (
          <div className="flex flex-col gap-2">
            {creditCardToInstitutionNameMap[institutionName].length > 0 && (
              <h3 className="text-lg font-bold">{institutionName}</h3>
            )}
            <div className="grid grid-cols-3 gap-2">
              {creditCardToInstitutionNameMap[institutionName].map((card) => (
                <CreditAccountSummaryCard
                  account={card}
                  institutionName={institutionName}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function FinancialPortalActionableInsights() {
  const financialProfile = useAppSelector(selectUserFinancialProfile);
  const actionableInsights = financialProfile.actionableInsights;

  return (
    <PortalLayout option={"ANALYTICS"}>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"></div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
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
        </Card>
      </div>
    </PortalLayout>
  );
}
