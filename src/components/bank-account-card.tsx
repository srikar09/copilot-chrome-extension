import { PlusIcon } from "@radix-ui/react-icons";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { formatToTwoDecimalPoints } from "src/lib/utils";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import { BankAccount } from "src/types/financials/message_financial_service";
import { AskMelodiyAILayout } from "src/layouts/ask-melodiy-ai-layout";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { selectUserFinancialProfile } from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";
import { FinancialProfile } from "src/types/user/financial-profile";
import { transformBaseFinancialProfile } from "./chat";

/**
 * Props interface for the BankAccountSummaryCard component.
 */
interface IProps {
  /**
   * The bank account information to display.
   */
  account: BankAccount;
}

/**
 * BankAccountSummaryCard component displays a summary card for a bank account.
 * It shows details like balance, account number, pockets, and goals.
 *
 * @param props - The props for the component.
 * @returns A React functional component.
 */
const BankAccountSummaryCard: React.FC<IProps> = (props) => {
  const financialProfile = transformBaseFinancialProfile(useAppSelector(selectUserFinancialProfile));
  console.log("financialProfile")
  console.log(financialProfile)

  const { account } = props;

  // get number of pockets
  const numberOfPockets = account.pockets.length;
  // get number of goals
  const numberOfGoals = account.pockets.reduce((acc, pocket) => {
    return acc + pocket.goals.length;
  }, 0);

  const samplQuestions: string[] = [
    "How much money do I have in my account?",
    "Am l spending too much in my account?",
    "What fees are associated with my account?",
    "How can l optimize my spending on this account?",
  ];

  return (
    <>
      <AskMelodiyAILayout context={financialProfile} sampleQuestions={samplQuestions}>
        <Card>
          <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
            <div className="space-y-1 text-left">
              <CardTitle className="text-xs text-gray-900 dark:text-gray-200 font-bold">
                ${formatToTwoDecimalPoints(account.currentFunds)}
              </CardTitle>
              <CardTitle
                className="text-xs font-bold"
                style={{
                  fontSize: "11px",
                }}
              >
                {account.name}
              </CardTitle>
              <div>
                <div className="flex flex-1 gap-2 justify-start">
                  <Badge
                    className="bg-white border border-black text-black font-bold"
                    style={{
                      fontSize: "10px",
                    }}
                  >
                    {account.subtype}
                  </Badge>
                </div>
              </div>
              <div>
                <div className="flex gap-1">
                  <span className="text-xs text-gray-600 dark:text-gray-200">
                    Account Number:{" "}
                  </span>
                  <span className="text-xs font-bold">{account.number}</span>
                </div>
              </div>
              <div>
                <Label className="text-2xl font-bold">
                  ${formatToTwoDecimalPoints(account.currentFunds)}
                </Label>
              </div>
            </div>
            <div className="flex flex-shrink items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
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
                    <p className="text-sm">
                      {account.name.toLowerCase()} pockets ({" "}
                      {account.pockets.length})
                    </p>
                  </DropdownMenuLabel>
                  {account.pockets.map((pocket, idx) => (
                    <DropdownMenuCheckboxItem checked key={idx}>
                      <div className="flex flex-row gap-2 items-center text-black font-bold px-2">
                        {/* <CircleIcon className="mr-1 h-3 w-3 fill-black text-black font-bold" /> */}
                        <div className="text-xs font-bold">
                          {formatPocketNameString(pocket.type.toString())}
                        </div>
                        {/* <div className="text-xs font-bold">{pocket.goals.length} </div> */}
                      </div>
                    </DropdownMenuCheckboxItem>
                  ))}
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          {numberOfPockets > 0 && (
            <CardContent>
              <CardTitle className="text-sm font-bold pb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Badge className="w-full flex justify-center">
                      Pockets ({numberOfPockets})
                    </Badge>
                  </div>
                  <div>
                    <Badge className="w-full flex justify-center">
                      Goals ({numberOfGoals})
                    </Badge>
                  </div>
                </div>
              </CardTitle>
            </CardContent>
          )}
        </Card>
      </AskMelodiyAILayout>
    </>
  );
};

/**
 * Helper function to format the pocket name string.
 *
 * @param input - The pocket name string to format.
 * @returns The formatted pocket name string.
 */
function formatPocketNameString(input: string): string {
  const prefix = "POCKET_TYPE_";

  // Remove the prefix
  let formatted = input.startsWith(prefix) ? input.slice(prefix.length) : input;

  // Replace all underscores with spaces
  formatted = formatted.replace(/_/g, " ");

  return formatted.toLowerCase();
}

export { BankAccountSummaryCard };


