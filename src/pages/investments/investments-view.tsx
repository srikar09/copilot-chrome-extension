import { PiggyBankIcon } from "lucide-react";
import React from "react";

import { AccountOverviewSummaryHeader } from "src/components/account-overview-summary-header";
import { HoldingCard } from "src/components/holding-card";
import { InvestmentViewSidebar } from "src/components/sidebar/investments-view-sidebar";
import { Avatar } from "src/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "src/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "src/components/ui/sheet";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs";
import { GlobalEconomicCalendarChart } from "src/components/widgets/economic-calendar";
import { GlobalStockHeatmapChart } from "src/components/widgets/global-stock-heatmap";
import { AskMelodiyAILayout } from "src/layouts/ask-melodiy-ai-layout";
import { cn } from "src/lib/utils";
import { InvestmentSidebarOption } from "src/types";
import {
  InvestmentAccount,
  InvestmentSecurity,
} from "src/types/financials/message_financial_service";

interface IInvestmentProps {
  investment_accounts: InvestmentAccount[];
}

interface IInvestmentState {
  investment_accounts: InvestmentAccount[];
  securities: InvestmentSecurity[];
  selected_sidebar_tab: InvestmentSidebarOption;
}

/*
 * InvestmentAccountsView serves as the overarching summary for all investments a given user has
 *
 * @class InvestmentAccountsView
 * @extends {React.Component<IInvestmentProps, IInvestmentState>}
 */
class InvestmentAccountsView extends React.Component<
  IInvestmentProps,
  IInvestmentState
> {
  constructor(props: IInvestmentProps) {
    super(props);
    this.state = {
      investment_accounts: props.investment_accounts,
      securities: props.investment_accounts
        .map((account) => {
          return account.securities;
        })
        .flat(),
      selected_sidebar_tab: "OVERVIEW",
    };

    // computes the aggregated balance across all accounts
    this.computeBalanceSumAcrossAllAccounts =
      this.computeBalanceSumAcrossAllAccounts.bind(this);

    // computes the number of investment accounts
    this.computeNumberOfInvestmentAccounts =
      this.computeNumberOfInvestmentAccounts.bind(this);

    this._selectSidebarOption = this._selectSidebarOption.bind(this);
  }

  /*
   * computeBalanceSumAcrossAllAccounts computes the total sum of balances
   * across all accounts
   *
   * @returns {Number}
   *
   * @memberOf InvestmentAccountsView
   * */
  computeBalanceSumAcrossAllAccounts(): number {
    const { investment_accounts } = this.state;
    return investment_accounts
      .map((account) => {
        return account.currentFunds;
      })
      .reduce((a, b) => a + b, 0);
  }

  /*
   * computeNumberOfInvestmentAccounts computes the total number of accounts
   * that are invested
   *
   * @returns {Number}
   *
   * @memberOf InvestmentAccountsView
   * */
  computeNumberOfInvestmentAccounts(): number {
    const { investment_accounts } = this.state;
    return investment_accounts.length;
  }

  private _selectSidebarOption = (option: InvestmentSidebarOption) => {
    this.setState({ selected_sidebar_tab: option });
  };

  private _computeContext = (): any => {
    // create a hashmap comprised of account balances across all accounts
    const account_balances = this.state.investment_accounts
      .map((account) => {
        return {
          [account.name]: account.currentFunds,
        };
      })
      .reduce((a, b) => {
        return Object.assign(a, b);
      }, {});

    // get a set of security names from the securities array
    const security_names = new Set(
      this.state.securities.map((security) => {
        return security.name;
      })
    );

    return {
      account_balances,
      security_names,
    };
  };

  render() {
    return (
      <>
        <div className="md:hidden">
          <Avatar className="block dark:hidden" />
          <Avatar className="hidden dark:block" />
        </div>
        <div className="hidden md:block">
          <div className="border-t">
            <div className="bg-background">
              <div className="grid lg:grid-cols-5">
                {/** Sidebar is used to control the various types of subscriptions being shown to an end-user */}
                <InvestmentViewSidebar
                  className="hidden lg:block"
                  setSelectedOption={this._selectSidebarOption}
                  selectedOption={"OVERVIEW"}
                />
                <div className="col-span-3 lg:col-span-4 lg:border-l">
                  {this.state.selected_sidebar_tab === "OVERVIEW" && (
                    <OverviewPane
                      totalBalance={this.computeBalanceSumAcrossAllAccounts()}
                      numberOfInvestmentAccounts={this.computeNumberOfInvestmentAccounts()}
                      accounts={this.state.investment_accounts}
                    />
                  )}
                  {this.state.selected_sidebar_tab === "HOLDINGS" && (
                    <AskMelodiyAILayout
                      context={this._computeContext()}
                      className="m-2"
                    >
                      {/** Show holdings */}
                    </AskMelodiyAILayout>
                  )}
                  {this.state.selected_sidebar_tab === "TRANSACTIONS" && (
                    <AskMelodiyAILayout
                      context={this._computeContext()}
                      className="m-2"
                    >
                      {/** Show holdings */}
                    </AskMelodiyAILayout>
                  )}
                  {this.state.selected_sidebar_tab === "PERFORMANCE" && (
                    <AskMelodiyAILayout
                      context={this._computeContext()}
                      className="m-2"
                    >
                      {/** Show holdings */}
                    </AskMelodiyAILayout>
                  )}
                  {/** If sidebar tab upcoming show the upcoming recurring transactions */}
                  {this.state.selected_sidebar_tab === "SECURITIES" && (
                    <AskMelodiyAILayout
                      context={this._computeContext()}
                      className="m-2"
                    >
                      {/** Show holdings */}
                    </AskMelodiyAILayout>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const OverviewPane: React.FC<{
  totalBalance: number;
  numberOfInvestmentAccounts: number;
  accounts: InvestmentAccount[];
}> = ({ totalBalance, numberOfInvestmentAccounts, accounts }) => {
  return (
    <div className="m-4">
      <h2 className="ml-5 text-xl font-bold tracking-tight pb-5">
        {" "}
        <span className="ml-1 text-4xl"> ${totalBalance}</span>
      </h2>
      <AccountOverviewSummaryHeader
        title={"Investment Accounts"}
        buttonTitle={"Investment Accounts"}
        count={numberOfInvestmentAccounts}
      />
      <Tabs defaultValue="accounts">
        <TabsList>
          <TabsTrigger value="accounts">Accounts</TabsTrigger>
          <TabsTrigger value="market-overview">Market Overview</TabsTrigger>
          <TabsTrigger value="top-performers">Top Performers</TabsTrigger>
        </TabsList>
        <TabsContent value="market-overview">
          <GlobalStockHeatmapChart />
        </TabsContent>
        <TabsContent value="top-performers">
          <GlobalEconomicCalendarChart />
        </TabsContent>
        <TabsContent value="accounts">
          <InvestmentAccountsSection accounts={accounts} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface IIInvestmentAccountsSectionProps {
  accounts: InvestmentAccount[];
}

const InvestmentAccountsSection: React.FC<IIInvestmentAccountsSectionProps> = (
  props
) => {
  const { accounts } = props;
  const [selectedAccount, setSelectedAccount] = React.useState<
    InvestmentAccount | undefined
  >(accounts.length > 0 ? accounts[0] : undefined);

  return (
    <Sheet>
      <AskMelodiyAILayout context={accounts}>
        <SheetTrigger className="grid grid-cols-2 gap-5 justify-start">
          {accounts.map((account, idx) => (
            <Card
              className={cn(
                "p-5",
                account.id === selectedAccount?.id ? "border border-black" : ""
              )}
              key={idx}
              onClick={() => setSelectedAccount(account)}
            >
              <CardHeader>
                <div className="max-w-sm flex flex-row justify-between">
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-col ">
                      <div className="border p-2 rounded-lg border-black">
                        <PiggyBankIcon className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-lg font-bold ">{account.name}</p>
                      <p className="text-xs font-bold">{account.number}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col">
                    <p className="text-xs font-bold">Account Type</p>
                    <p className="text-xs">{account.type}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs font-bold">Account Subtype</p>
                    <p className="text-xs">{account.subtype}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs font-bold">Account Number</p>
                    <p className="text-xs">{account.number}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col">
                  <p className="text-2xl font-bold">
                    ${account.currentFunds}
                    <span className="ml-1 text-xs">(current funds)</span>
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </SheetTrigger>
      </AskMelodiyAILayout>
      <SheetContent className="w-[500px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <div className="pt-5">
            {selectedAccount && <HoldingCard Account={selectedAccount} />}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

interface IInvestmentAccountCardProps {
  account: InvestmentAccount;
}

const InvestmentAccountCard: React.FC<IInvestmentAccountCardProps> = (
  props
) => {
  const { account } = props;

  return (
    <Card className="p-5">
      <CardHeader>
        <div className="max-w-sm flex flex-row justify-between">
          <div className="flex flex-row gap-2">
            <div className="flex flex-col ">
              <div className="border p-2 rounded-lg border-black">
                <PiggyBankIcon className="w-8 h-8" />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-bold ">{account.name}</p>
              <p className="text-xs font-bold">{account.number}</p>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <p className="text-xs font-bold">Account Type</p>
            <p className="text-xs">{account.type}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs font-bold">Account Subtype</p>
            <p className="text-xs">{account.subtype}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-xs font-bold">Account Number</p>
            <p className="text-xs">{account.number}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col">
          <p className="text-2xl font-bold">
            ${account.currentFunds}
            <span className="ml-1 text-xs">(current funds)</span>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export { InvestmentAccountsView };
