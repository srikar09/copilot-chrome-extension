import { useEffect, useState } from "react";
import { useGetTransactionsQuery } from "src/redux/queries/transactions/get-transactions";
import { selectCurrentUserID } from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";
import { Spinner } from "./spinner";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { AskMelodiyAILayout } from "src/layouts/ask-melodiy-ai-layout";

import { columns } from "./data-table/data-column";
import { TableNav } from "./data-table/data-table-nav";
import { DataTable } from "./data-table/data-table";
import { GetTransactionsRequest } from "src/types/request-response/get-transactions";
import {
  Transaction,
  TransactionAnalyticsByMonth,
  TransactionDataTable,
} from "melodiy-component-library";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const TransactionOverview: React.FC = () => {
  // we first get the user id
  const userId = useAppSelector(selectCurrentUserID);

  return (
    <div className="flex flex-col gap-3">
      <TransactionsComponent />
    </div>
  );
};

const TransactionsComponent: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(50);
  const userId = useAppSelector(selectCurrentUserID);

  const req = new GetTransactionsRequest({
    userId: Number(userId),
    pageNumber: pageNumber,
    pageSize: pageSize,
  });

  const {
    data: response,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTransactionsQuery(req);

  let txnComponent;
  let spinner = <Spinner className={"w-8 h-8 mt-3 ml-3"} />;
  let numTransactions = 0;

  if (isSuccess && response.transactions) {
    // spinner should be null
    txnComponent = (
      <>
        <Tabs defaultValue="transactions" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="transactions">Transaction Summary</TabsTrigger>
            <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
          </TabsList>
          <TabsContent value="transactions">
            <TransactionDataTable transactions={response.transactions} />
          </TabsContent>
          <TabsContent value="breakdown">
            <TransactionAnalyticsByMonth
              transactions={response.transactions}
              className="bg-white"
            />
          </TabsContent>
        </Tabs>
      </>
    );

    numTransactions = response.transactions.length;
  } else if (isLoading) {
    spinner = <Spinner className={"w-8 h-8 mt-3 ml-3"} />;
  } else if (isError) {
    spinner = (
      <Card className="py-2">
        <CardHeader>
          <CardTitle>
            An error occured while pulling your transactions{" "}
          </CardTitle>
        </CardHeader>
      </Card>
    );
  } else if (
    isSuccess &&
    (response.transactions?.length == 0 || response.transactions == undefined)
  ) {
    spinner = (
      <Card className="py-2">
        <CardHeader>
          <CardTitle>We are still pulling in your data!</CardTitle>
          <p>Sit tight and relax. We are still pulling in your data </p>
        </CardHeader>
      </Card>
    );
  }

  const sampleQuestions: string[] = [
    "Is there a transaction limit on my account?",
    "How can I set up alerts for large transactions?",
    "Across what categories am l spending most?",
    "How can I optimize my spending?",
  ];

  return (
    <AskMelodiyAILayout context={undefined} sampleQuestions={sampleQuestions}>
      {spinner}
      <h2 className="ml-5 text-xl font-bold tracking-tight">
        Transactions <span className="ml-1 text-xs">({numTransactions}) </span>
      </h2>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <TableNav />
          </div>
        </div>
        {txnComponent}
      </div>
    </AskMelodiyAILayout>
  );
};

export { TransactionOverview };
