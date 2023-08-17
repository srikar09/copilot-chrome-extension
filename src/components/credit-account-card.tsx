import { ChevronDownIcon, StarIcon } from "@radix-ui/react-icons";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  formatDate,
  formatToTwoDecimalPoints,
  removeUnderScores,
} from "src/lib/utils";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import { CreditAccount } from "src/types/financials/message_financial_service";
import { AskMelodiyAILayout } from "src/layouts/ask-melodiy-ai-layout";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { transformBaseFinancialProfile } from "./chat";
import { useAppSelector } from "src/redux/store/hooks";
import { selectUserFinancialProfile } from "src/redux/slice/authentication/AuthenticationSelector";

interface IProps {
  account: CreditAccount;
  institutionName: string;
}



const CreditAccountSummaryCard: React.FC<IProps> = (props) => {
  const { account, institutionName } = props;
  const samplQuestions: string[] = [
    "What is my account's interest rate?",
    "What is my minimum payment, and when is it due?",
    "What is my credit limit?",
    "How is my credit utilization ratio calculated?",
  ];

  const financialProfile = transformBaseFinancialProfile(useAppSelector(selectUserFinancialProfile));
  return (
    <AskMelodiyAILayout context={financialProfile} sampleQuestions={samplQuestions}>
      <Card>
        <CardHeader className="grid grid-cols-1 md:grid-cols-2 items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle className="text-xs text-gray-600 dark:text-gray-200 font-bold">
              ${formatToTwoDecimalPoints(account.currentFunds)}
            </CardTitle>
            <CardTitle
              className="text-xs font-bold"
              style={{
                fontSize: "11px",
              }}
            >
              {institutionName} Credit Card
            </CardTitle>
            <div>
              <div className="flex flex-1 gap-2 justify-start">
                <Badge
                  className="bg-white border border-black text-black font-bold"
                  style={{
                    fontSize: "8px",
                  }}
                >
                  {account.type}
                </Badge>
                <Badge
                  className="bg-white border border-black text-black "
                  style={{
                    fontSize: "8px",
                  }}
                >
                  Overdue: {account.isOverdue === false ? "No" : "Yes"}
                </Badge>
              </div>
            </div>
            <div>
              <div className="flex gap-1">
                <span className="text-xs text-gray-600 dark:text-gray-200">Account Number: </span>
                <span className="text-xs font-bold">{account.number}</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Label className="text-2xl font-bold">
                Currently owe: ${formatToTwoDecimalPoints(account.currentFunds)}
              </Label>
              <p
                style={{
                  fontSize: "10px",
                }}
                className="font-bold"
              >
                Card balance limit ${account.balanceLimit}
              </p>
              <p
                style={{
                  fontSize: "10px",
                }}
                className="font-bold"
              >
                ${formatToTwoDecimalPoints(account.minimumPaymentAmount)} due on{" "}
                {formatDate(account.nextPaymentDueDate)}
              </p>
            </div>
          </div>
          <div className="flex justify-end items-end space-x-1 rounded-md bg-secondary text-secondary-foreground">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="px-2 shadow-none">
                  <ChevronDoubleDownIcon className="h-4 w-4 text-secondary-foreground m-2 " />
                  More
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                alignOffset={-5}
                className="w-[200px]"
                forceMount
              >
                <DropdownMenuLabel className="flex items-center justify-center">
                  {institutionName} Credit Card
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Next payment date: {formatDate(account.nextPaymentDueDate)}
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  className="flex items-center justify-center"
                  checked
                >
                  Oustanding Balance: $
                  {formatToTwoDecimalPoints(account.currentFunds)}
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <div className="flex flex-1 flex-wrap">
          {account.aprs.length > 0 && (
            <CardContent>
              <CardTitle className="text-sm font-bold p-5">
                <div className="grid grid-cols-1 gap-3 divide-y">
                  <div className="text-xs gap-5 p-6 border rounded-3xl shadow-md w-full flex justify-between bg-white text-black">
                    <div className="flex flex-col justify-start items-start">
                      <p className="text-xs"> Last Payed</p>
                      <p> {formatDate(account.lastPaymentDate)} </p>
                    </div>
                    <div className="flex flex-col justify-end items-end">
                      <p className="text-xs"> Last Issued</p>
                      <p> {formatDate(account.lastStatementIssueDate)} </p>
                    </div>
                  </div>
                  <div className="text-xs gap-5 p-6 border rounded-3xl shadow-md w-full flex justify-between bg-white text-black">
                    <div className="flex flex-col justify-start items-start">
                      <p className="text-xs"> Last Statement Balance</p>
                      <p>
                        {formatToTwoDecimalPoints(account.lastStatementBalance)}{" "}
                      </p>
                    </div>
                    <div className="flex flex-col justify-end items-end">
                      <p className="text-xs"> Last Payment Amount</p>
                      <p>
                        {formatToTwoDecimalPoints(account.lastPaymentAmount)}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </CardTitle>
              <div className="flex flex-row  space-x-4 text-sm gap-y-1 text-muted-foreground border rounded-lg p-5">
                {account.aprs.map((apr, idx) => (
                  <div
                    key={idx}
                    className="p-2 flex flex-row gap-2 items-center border rounded-lg bg-white text-black border-black px-2"
                  >
                    <div
                      className="text-xs font-bold"
                      style={{
                        fontSize: "10px",
                      }}
                    >
                      {removeUnderScores(apr.type)}
                    </div>
                    <div
                      className="text-xs font-bold"
                      style={{
                        fontSize: "10px",
                      }}
                    >
                      %{apr.percentage}{" "}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          )}
        </div>
      </Card>
    </AskMelodiyAILayout>
  );
};

export { CreditAccountSummaryCard };
