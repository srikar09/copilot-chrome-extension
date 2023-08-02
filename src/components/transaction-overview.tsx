import react, { useEffect, useState } from "react";
import { useGetTransactionsQuery } from "src/redux/queries/transactions/get-transactions";
import { selectCurrentUserID } from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";
import { GetTransactionsRequest } from "src/types/financials/request_response_financial_service";
import { Spinner } from "./spinner";
import { Transaction } from "src/types/financials/clickhouse_financial_service";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { AnalyticAiCardLayout } from "src/layouts/analytic-ai-card-layout";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { TableNav } from "./data-table-nav";
import { DataTable } from "./data-table";
import { columns } from "./column";
import { promises as fs } from "fs";
import path from "path";
import { taskSchema } from "./data/schema";
import { z } from "zod";
import { taskSet } from "./data/tasks";

const TransactionOverview: React.FC = () => {
  // we first get the user id
  const userId = useAppSelector(selectCurrentUserID);

  return (
    <div>
      <TransactionsComponent />
    </div>
  );
};

const TransactionsComponent: React.FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(50);
  const userId = useAppSelector(selectCurrentUserID);
  const [spinner, setSpinner] = useState<React.ReactElement | null>(
    <Spinner className={"w-8 h-8 mt-3 ml-3"} />
  );
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const {
    data: response,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTransactionsQuery(
    GetTransactionsRequest.create({
      userId: Number(userId),
      pageNumber: pageNumber,
      pageSize: pageSize,
    })
  );

  const processTransactionQuery = () => {
    if (isSuccess && response.transactions) {
      // spinner should be null
      setSpinner(null);
      setTransactions(response.transactions);
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
    } else if (
      isSuccess &&
      (response.transactions?.length == 0 || response.transactions == undefined)
    ) {
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
    <AnalyticAiCardLayout context={undefined}>
      {spinner}
      <h2 className="ml-5 text-xl font-bold tracking-tight">
        Transactions{" "}
        <span className="ml-1 text-xs">({transactions.length}) </span>
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
        <DataTable data={transactions} columns={columns} />
      </div>
    </AnalyticAiCardLayout>
  );
};

export { TransactionOverview };
