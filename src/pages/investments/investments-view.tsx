import { PiggyBankIcon } from "lucide-react";
import {
  InvestmentAccount,
  InvestmentAccountCard,
  InvestmentSecurity,
} from "melodiy-component-library";
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
  CardTitle,
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
import { GlobalCryptoScreenerWidget } from "src/components/widgets/crypto-screener";
import { GlobalEconomicCalendarChart } from "src/components/widgets/economic-calendar";
import { GlobalStockHeatmapChart } from "src/components/widgets/global-stock-heatmap";
import { GlobalStockScreenerWidget } from "src/components/widgets/stock-screener";
import { AskMelodiyAILayout } from "src/layouts/ask-melodiy-ai-layout";
import { cn } from "src/lib/utils";
import { InvestmentSidebarOption } from "src/types";

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
                  {this.state.selected_sidebar_tab === "CRYPTO" && (
                    <div className="m-2">
                      {/** Show holdings */}
                      <GlobalCryptoScreenerWidget />
                    </div>
                  )}
                  {this.state.selected_sidebar_tab === "STOCKS" && (
                    <div className="m-4 border rounded-2xl">
                      <GlobalStockScreenerWidget />
                    </div>
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
  // compute the total number of holdings across all accounts
  const totalNumberOfHoldings = accounts.reduce((acc, account) => {
    return acc + account.holdings.length;
  }, 0);

  // compute the total number of securities across all accounts
  const totalNumberOfSecurities = accounts.reduce((acc, account) => {
    return acc + account.securities.length;
  }, 0);

  // compute the number of shares held across all accounts
  const totalNumberOfShares = accounts.reduce((acc, account) => {
    return (
      acc +
      account.holdings.reduce((acc, holding) => {
        return acc + holding.quantity;
      }, 0)
    );
  }, 0);

  // compute average cost basis
  const averageCostBasis =
    accounts.reduce((acc, account) => {
      return (
        acc +
        account.holdings.reduce((acc, holding) => {
          return acc + holding.costBasis;
        }, 0)
      );
    }, 0) / totalNumberOfHoldings;

  return (
    <div className="m-4">
      <h2 className="ml-5 text-xl font-bold tracking-tight pb-5">
        {" "}
        <span className="ml-1 text-4xl"> Total balance: ${totalBalance}</span>
      </h2>
      <AccountOverviewSummaryHeader
        title={"Investment Accounts"}
        buttonTitle={"Investment Accounts"}
        count={numberOfInvestmentAccounts}
      />
      <div className="pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <InvestmentAccountStatistic
            title={"Total Shares Held"}
            value={totalNumberOfShares.toString()}
            statisticDetails={""}
          />
          <InvestmentAccountStatistic
            title={"Securities Across All Accounts"}
            value={totalNumberOfSecurities.toString()}
            statisticDetails={""}
          />
          <InvestmentAccountStatistic
            title={"Average Cost Basis"}
            value={"$ " + Number(averageCostBasis.toFixed(2)).toString()}
            statisticDetails={""}
          />
        </div>
      </div>
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

const InvestmentAccountStatistic: React.FC<{
  title: string;
  value: string;
  statisticDetails: string;
}> = ({ title, value, statisticDetails }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-4 w-4 text-muted-foreground"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{statisticDetails}</p>
      </CardContent>
    </Card>
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

  const samplQuestions: string[] = [
    "What is the current value of my portfolio? ",
    "What investments do I currently hold in my portfolio?",
    "How is my portfolio diversified?",
    "How can I adjust the asset allocation in my portfolio?",
  ];

  return (
    <Sheet>
      <AskMelodiyAILayout context={accounts} sampleQuestions={samplQuestions}>
        <SheetTrigger className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {accounts.map((account, idx) => (
            <Card
              className={cn(
                "p-5",
                account.id === selectedAccount?.id ? "border border-black" : ""
              )}
              key={idx}
              // onClick={() => setSelectedAccount(account)}
            >
              <InvestmentAccountCard
                investmentAccount={new InvestmentAccount(account)}
              />
            </Card>
          ))}
        </SheetTrigger>
      </AskMelodiyAILayout>
      <SheetContent className="w-[500px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="font-bold text-xl">
            {selectedAccount && selectedAccount.name.toUpperCase()}
          </SheetTitle>
          <div className="pt-5">
            {selectedAccount && <HoldingCard Account={selectedAccount} />}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export { InvestmentAccountsView };
