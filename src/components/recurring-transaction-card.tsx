import { ArrowDownNarrowWide, RocketIcon } from "lucide-react";
import { formatDate, formatToTwoDecimalPoints } from "src/lib/utils";
import { selectCurrentUserProfile } from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";
import { UpcomingRecurringTransactions } from "src/types/custom/recurring-transaction-types";
import { Card, CardHeader, CardContent } from "./ui/card";
import { frequencyToString } from "./recurring-transaction-component";
import { Badge } from "./ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import {
  ReOccuringTransaction,
  ReOccuringTransactionsFrequency,
} from "src/types/financials/clickhouse_financial_service";

const RecurrinTransactionCard: React.FC<{
  transaction: ReOccuringTransaction;
  nextTransactionDate?: string;
}> = (props) => {
  const { transaction, nextTransactionDate } = props;
  const user = useAppSelector(selectCurrentUserProfile);
  // if transaction  will occur at a date less than the current date then return null
  if (
    transaction.isActive === false ||
    transaction.frequency ===
      ReOccuringTransactionsFrequency.RE_OCCURING_TRANSACTIONS_FREQUENCY_UNSPECIFIED ||
    transaction.frequency === ReOccuringTransactionsFrequency.UNRECOGNIZED
  ) {
    return null;
  }

  return (
    <Card className="rounded-3xl">
      <CardHeader>
        <div className="grid grid-flow-row-dense grid-cols-3">
          {nextTransactionDate && (
            <div className="col-span-3">
              <p className="text-xs font-bold">
                Next Payment Due On {formatDate(nextTransactionDate)}
              </p>
            </div>
          )}
          <div className="col-span-3 pt-2">
            <div className="flex flew-row gap-2 justify-between">
              <p className="text-xs font-bold">
                {transaction.transactionIds.length} total transactions
              </p>
              <div>
                <p className="text-xs font-bold underline">
                  {Number(transaction.lastAmount) < 0 ? "Income" : "Expense"}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <ArrowDownNarrowWide className="border border-black rounded-full" />
          <Badge
            className="text-xs font-bold rounded-2xl shadow-sm"
            variant={"outline"}
          >
            Billed {frequencyToString(transaction.frequency.toString())}
          </Badge>
          <Badge
            className="text-xs font-bold rounded-2xl shadow-sm"
            variant={"outline"}
          >
            {transaction.isActive ? "Active" : "InActive"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="px-4">
        <div className="flex flex-row justify-between py-2">
          <div className="flex flex-1 justify-between gap-1">
            <div>
              <p className="text-bold text-xl font-bold">
                {transaction.merchantName}
              </p>
            </div>
            <p className="font-bold text-xl">
              $
              {formatToTwoDecimalPoints(
                Math.abs(Number(transaction.lastAmount))
              )}
            </p>
          </div>
        </div>
        <div>
          <Alert className="pt-3">
            <RocketIcon className="h-4 w-4" />
            <AlertTitle className="underline">Transaction Details</AlertTitle>
            <AlertDescription
              className="text-xs font-bold"
              style={{
                fontSize: "10px",
              }}
            >
              {transaction.description}
            </AlertDescription>
          </Alert>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold text-sm">
              View More ...
            </AccordionTrigger>
            <AccordionContent
              className="text-xs font-bold"
              style={{
                fontSize: "10px",
              }}
            >
              <div className="flex flex-1 flex-wrap gap-2 border rounded-2xl p-2">
                <p className="text-xs font-bold p-1">
                  Tagged: {"  "}
                  {replaceUnderscoreWithSpace(
                    transaction.personalFinanceCategoryPrimary.toLowerCase()
                  )}{" "}
                  and{" "}
                  {replaceUnderscoreWithSpace(
                    transaction.personalFinanceCategoryDetailed.toLowerCase()
                  )}
                </p>
                <p className="text-xs font-bold p-1">
                  First payed on{" "}
                  {formatDate(transaction.firstDate).toLowerCase()}
                </p>
                <p className="text-xs font-bold p-1">
                  Last payed on {formatDate(transaction.lastDate).toLowerCase()}
                </p>
                <p className="text-xs font-bold p-1">
                  Last amount payed was $
                  {formatToTwoDecimalPoints(
                    Math.abs(Number(transaction.lastAmount))
                  )}
                </p>
              </div>
              {/** First Payment Date */}

              {/** Last Payment Date */}

              {/** Outflow */}

              {/** Status */}

              {/**  */}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

function replaceUnderscoreWithSpace(str: string): string {
  return str.replace(/_/g, " ");
}

export { RecurrinTransactionCard };
