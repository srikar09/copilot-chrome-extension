import { ArrowDownNarrowWide } from "lucide-react";
import { formatDate, formatToTwoDecimalPoints } from "src/lib/utils";
import { selectCurrentUserProfile } from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";
import { UpcomingRecurringTransactions } from "src/types/custom/recurring-transaction-types";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Avatar } from "./ui/avatar";
import { frequencyToString } from "./recurring-transaction-component";

const BillsDueCard: React.FC<{
  upcomingTransaction: UpcomingRecurringTransactions;
}> = (props) => {
  const { upcomingTransaction } = props;
  const { transaction, nextTransactionDate } = upcomingTransaction;
  const user = useAppSelector(selectCurrentUserProfile);
  // if transaction  will occur at a date less than the current date then return null

  return (
    <Card className="rounded-3xl">
      <CardHeader>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-black font-bold">Upcoming Bill</p>
            <p className="font-bold text-xl">{transaction.merchantName}</p>
          </div>
          <p className="text-xs font-bold">{formatDate(nextTransactionDate)}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="p-4 flex flex-row justify-between">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-3xl">
              ${formatToTwoDecimalPoints(Number(transaction.lastAmount))}
            </p>
            <div className="flex flex-row gap-1 py-2">
              <ArrowDownNarrowWide className="border border-black rounded-full" />
              <p className="font-bold text-xs py-1">
                {" "}
                {frequencyToString(transaction.frequency.toString())}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Avatar className="my-2 border border-black">
              <img
                src={user.profileImageUrl}
                className="w-10 h-10 rounded-2xl"
              />
            </Avatar>
            <p className="text-xs font-bold">@{user.name}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { BillsDueCard };
