import { Card } from "@tremor/react";
import { useEffect, useState } from "react";
import { useGetTransactionsForBankAccountQuery } from "src/redux/queries/transactions/get-transactions-for-bank-accout";
import { selectCurrentUserID } from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";
import { Transaction } from "src/types/financials/clickhouse_financial_service";
import { GetTransactionsForBankAccountRequest } from "src/types/request-response/get-transactions-for-bank-account";
import { Spinner } from "./spinner";
import { CardHeader, CardTitle } from "./ui/card";
import { AskMelodiyAILayout } from "src/layouts/ask-melodiy-ai-layout";
import { DataTable } from "./data-table/data-table";
import { columns } from "./data-table/data-column";

interface IAccountTransactionsProps {
  plaidAccountId: string;
}

const BankAccountTransactions: React.FC<IAccountTransactionsProps> = ({
  plaidAccountId,
}) => {
  const [pageSize, setPageSize] = useState<number>(50);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const currentUserId = useAppSelector(selectCurrentUserID);

  const request = new GetTransactionsForBankAccountRequest({
    userId: Number(currentUserId),
    plaidAccountId: plaidAccountId,
    pageNumber: pageNumber,
    pageSize: pageSize,
  });

  const {
    data: response,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTransactionsForBankAccountQuery(request);

  useEffect(() => {
    if (isSuccess && response.transactions) {
      setTransactions(response.transactions);
    }
  }, [isSuccess, response]);

  let spinner = <Spinner className={"w-8 h-8 mt-3 ml-3"} />;

  if (isSuccess && response.transactions) {
    spinner = <></>;
  } else if (isError) {
    spinner = <div>{error.toString()}</div>;
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
        Transactions{" "}
        <span className="ml-1 text-xs">({transactions.length}) </span>
      </h2>
      <DataTable data={transactions} columns={columns} />
    </AskMelodiyAILayout>
  );
};

export { BankAccountTransactions };
