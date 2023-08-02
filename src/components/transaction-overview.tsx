import react, { useEffect, useState } from "react";
import { useGetTransactionsQuery } from "src/redux/queries/transactions/get-transactions";
import { selectCurrentUserID } from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";
import {
  GetReCurringTransactionsRequest,
  GetTransactionsRequest,
} from "src/types/financials/request_response_financial_service";
import { Spinner } from "./spinner";
import {
  ReOccuringTransaction,
  ReOccuringTransactionsFrequency,
  Transaction,
} from "src/types/financials/clickhouse_financial_service";
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
import { useGetRecurringTransactionsQuery } from "src/redux/queries/transactions/get-recurring-transactions";
import { RecurringTransactionAggregate } from "src/types/custom/recurring-transaction-types";
import { formatToTwoDecimalPoints } from "src/lib/utils";
import { Badge } from "./ui/badge";

const TransactionOverview: React.FC = () => {
  // we first get the user id
  const userId = useAppSelector(selectCurrentUserID);

  return (
    <div className="flex flex-col gap-3">
      <RecurringTransactionComponent />
      <TransactionsComponent />
    </div>
  );
};

const RecurringTransactionComponent: React.FC = () => {
  const userId = useAppSelector(selectCurrentUserID);
  const [spinner, setSpinner] = useState<React.ReactElement | null>(
    <Spinner className={"w-8 h-8 mt-3 ml-3"} />
  );
  const [recurringTransactionAggregate, setRecurringTransactionAggregate] =
    useState<RecurringTransactionAggregate>();

  const {
    data: response,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetRecurringTransactionsQuery(
    GetReCurringTransactionsRequest.create({
      userId: Number(userId),
    })
  );

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
    <div>
      {isLoading && spinner}
      <div className="grid grid-cols-5 gap-3">
        {recurringTransactionAggregate &&
          recurringTransactionAggregate.orderedRecurringTransactions.map(
            (tx, idx) => <RecurringTransactionCard key={idx} transaction={tx} />
          )}
      </div>
    </div>
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
      return "SemiMonthly";
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
