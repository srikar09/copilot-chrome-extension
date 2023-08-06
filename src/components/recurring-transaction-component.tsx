import {
  ArrowDownToDot,
  ArrowUpFromDot,
  ArrowUpNarrowWide,
  CandlestickChart,
  Rocket,
} from "lucide-react";
import React, { useEffect, useState } from "react";

import { Button } from "src/components/ui/button";
import { cn } from "src/lib/utils";
import {
  selectCurrentSocialProfile,
  selectUserFinancialProfile,
} from "src/redux/slice/authentication/AuthenticationSelector";
import { formatToTwoDecimalPoints } from "src/lib/utils";
import { RecurringTransactionAggregate } from "src/types/custom/recurring-transaction-types";
import { useAppSelector } from "src/redux/store/hooks";
import { selectCurrentUserID } from "src/redux/slice/authentication/AuthenticationSelector";
import { useGetRecurringTransactionsQuery } from "src/redux/queries/transactions/get-recurring-transactions";
import { ReOccuringTransaction } from "src/types/financials/clickhouse_financial_service";
import { Spinner } from "src/components/spinner";
import { Card, CardHeader, CardTitle } from "src/components/ui/card";
import { Badge } from "./ui/badge";
import { SubscriptionsView } from "src/pages/subscriptions/subscriptions-view";
import { GetReCurringTransactionsRequest } from "src/types/request-response/get-recurring-transactions";

enum SidebarOption {
  INFLOW = "INFLOW",
  OUTFLOW = "OUTFLOW",
  UPCOMING = "UPCOMING",
  DRILLDOWN = "DRILLDOWN",
  OVERVIEW = "OVERVIEW",
}

const RecurringTransactionOverview: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const user = useAppSelector(selectCurrentSocialProfile);
  const financialProfile = useAppSelector(selectUserFinancialProfile);
  const [selectedSidebarOption, setSelectedSidebarOption] =
    useState<SidebarOption>(SidebarOption.OVERVIEW);

  const userId = useAppSelector(selectCurrentUserID);
  const [spinner, setSpinner] = useState<React.ReactElement | null>(
    <Spinner className={"w-8 h-8 mt-3 ml-3"} />
  );
  const [recurringTransactionAggregate, setRecurringTransactionAggregate] =
    useState<RecurringTransactionAggregate>();

  const req = new GetReCurringTransactionsRequest({
    userId: Number(userId),
  });
  const {
    data: response,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetRecurringTransactionsQuery(req);

  const processTransactionQuery = () => {
    if (isSuccess && response) {
      // spinner should be null
      setSpinner(null);
      setRecurringTransactionAggregate(response);
    } else if (isLoading) {
      setSpinner(<Spinner className={"w-8 h-8 mt-3 ml-3"} />);
    } else if (isError) {
      setSpinner(
        <Card className="py-2">
          <CardHeader>
            <CardTitle>
              An error occured while pulling your transactions{" "}
            </CardTitle>
          </CardHeader>
        </Card>
      );
    } else if (isSuccess && response == undefined) {
      setSpinner(
        <Card className="py-2">
          <CardHeader>
            <CardTitle>We are still pulling in your data!</CardTitle>
            <p>Sit tight and relax. We are still pulling in your data </p>
          </CardHeader>
        </Card>
      );
    }
  };

  useEffect(() => {
    processTransactionQuery();
  }, [isLoading, isError, response]);

  return (
    <>
      {recurringTransactionAggregate && (
        <SubscriptionsView
          recurring_transactions={
            recurringTransactionAggregate?.orderedRecurringTransactions
          }
        />
      )}
      {/* <div className="md:hidden">
        <Avatar className="block dark:hidden" />
        <Avatar className="hidden dark:block" />
      </div>
      <div className="hidden md:block">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <SubscriptionSidebar
                className="hidden lg:block"
                selectedOption={SidebarOption.INFLOW}
                setSelectedOption={setSelectedSidebarOption}
              />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {selectedSidebarOption === SidebarOption.UPCOMING &&
                      recurringTransactionAggregate?.upcomingRecurringTransactions.map(
                        (upcomingTransaction, index) => (
                          <BillsDueCard
                            upcomingTransaction={upcomingTransaction}
                            key={index}
                          />
                        )
                      )}
                  </div>

                  {selectedSidebarOption === SidebarOption.OVERVIEW && (
                    <Tabs defaultValue="music" className="h-full space-y-6">
                      <div className="space-between flex items-center">
                        <TabsList>
                          <TabsTrigger value="music" className="relative">
                            Insights
                          </TabsTrigger>
                          <TabsTrigger value="podcasts">Metrics</TabsTrigger>
                        </TabsList>
                        <div className="ml-auto mr-4">
                          <ConnectPlaidAccountButton
                            title={"Connect Another Account"}
                          />
                        </div>
                      </div>
                      <TabsContent
                        value="music"
                        className="border-none p-0 outline-none"
                      >
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h2 className="text-2xl font-semibold tracking-tight">
                              Subscriptions
                            </h2>
                            <p className="text-sm text-muted-foreground">
                              All your subscriptions in one place
                            </p>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="relative">
                          <ScrollArea>
                            {isLoading && spinner}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                              {recurringTransactionAggregate &&
                                recurringTransactionAggregate.orderedRecurringTransactions.map(
                                  (tx, idx) => (
                                    <RecurringTransactionCard
                                      key={idx}
                                      transaction={tx}
                                    />
                                  )
                                )}
                            </div>
                            <ScrollBar orientation="vertical" />
                          </ScrollArea>
                        </div>
                      </TabsContent>
                      <TabsContent
                        value="podcasts"
                        className="h-full flex-col border-none p-0 data-[state=active]:flex"
                      >
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h2 className="text-2xl font-semibold tracking-tight">
                              Weekly Insights
                            </h2>
                            <p className="text-sm text-muted-foreground">
                              Finding new ways to optimize your money. Updated
                              weekly.
                            </p>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <PodcastEmptyPlaceholder />
                      </TabsContent>
                    </Tabs>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

const RecurringTransactionCard: React.FC<{
  transaction: ReOccuringTransaction;
}> = (props) => {
  const { transaction } = props;
  return (
    <div>
      <Card>
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle className="text-xs text-gray-600 font-bold">
              ${formatToTwoDecimalPoints(Number(transaction.lastAmount))}
            </CardTitle>
            <CardTitle
              className="text-xs font-bold"
              style={{
                fontSize: "11px",
              }}
            >
              {transaction.merchantName}
            </CardTitle>
            <div>
              <div className="flex flex-1 gap-2 justify-start">
                <Badge className="bg-white border border-black text-black">
                  {transaction.isActive ? "Active" : "InActive"}
                </Badge>
                <Badge className="bg-white border border-black text-black">
                  {frequencyToString(transaction.frequency.toString())}
                </Badge>
              </div>
            </div>
            <div>
              <div className="flex gap-1">
                <span className="text-xs text-gray-600">Account Number: </span>
                <span className="text-xs font-bold">
                  {transaction.lastDate}
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

const frequencyToString = (frequency: string): string => {
  console.log(frequency);
  switch (frequency) {
    case "RE_OCCURING_TRANSACTIONS_FREQUENCY_ANNUALLY":
      return "Annually";
    case "RE_OCCURING_TRANSACTIONS_FREQUENCY_MONTHLY":
      return "Monthly";
    case "RE_OCCURING_TRANSACTIONS_FREQUENCY_BIWEEKLY":
      return "BiWeekly";
    case "RE_OCCURING_TRANSACTIONS_FREQUENCY_SEMI_MONTHLY":
      return "Semi-Monthly";
    case "RE_OCCURING_TRANSACTIONS_FREQUENCY_WEEKLY":
      return "Weekly";
    case "RE_OCCURING_TRANSACTIONS_FREQUENCY_UNSPECIFIED":
      return "Unspecified";
    case "UNRECOGNIZED":
      return "Unrecognized";
    default:
      return "Unknown";
  }
};

export {
  RecurringTransactionOverview,
  RecurringTransactionCard,
  frequencyToString,
};
