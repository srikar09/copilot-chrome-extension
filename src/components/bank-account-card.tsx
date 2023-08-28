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
import { RefinedLink } from "src/types/financials/message_financial_service";
import { AskMelodiyAILayout } from "src/layouts/ask-melodiy-ai-layout";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import {
  selectCurrentUserID,
  selectUserFinancialProfile,
} from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";
import { transformBaseFinancialProfile } from "./chat";
import {
  BankAccount,
  BankAccountCard,
  GetAccountBalanceHistoryRequest,
} from "melodiy-component-library";
import {
  GetAccountBalanceHistory,
  useGetAccountBalanceHistoryQuery,
} from "src/redux/queries/balance-history/get-user-account-balance-history";
import { Spinner } from "./spinner";
import { useGetAllConnectedAccountsBalanceHistoryQuery } from "src/redux/queries/balance-history/get-balance-history";
import { GetUserAccountBalanceHistoryRequest } from "src/types/request-response/get-user-account-balance-history";

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
  const financialProfile = transformBaseFinancialProfile(
    useAppSelector(selectUserFinancialProfile)
  );
  let bankAccounts: BankAccount[] = [];
  financialProfile.link.reduce((acc: BankAccount[], current: RefinedLink) => {
    const { bankAccounts } = current;
    acc.push(...bankAccounts);
    return acc;
  }, bankAccounts);

  const currentUserId = useAppSelector(selectCurrentUserID);

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

  // call the backend and obtain the historical account balance for this
  const req = new GetUserAccountBalanceHistoryRequest({
    userId: Number(currentUserId),
    plaidAccountId: account.plaidAccountId,
  });

  const {
    data: response,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllConnectedAccountsBalanceHistoryQuery(req);

  let accountHistoricalBalance;
  let spinner = <Spinner className={"w-8 h-8 mt-3 ml-3"} />;

  if (isSuccess && response.accountBalanceHistory) {
    accountHistoricalBalance = response.accountBalanceHistory;
  } else if (isLoading) {
    spinner = <Spinner className={"w-8 h-8 mt-3 ml-3"} />;
  } else if (
    isSuccess &&
    (response.accountBalanceHistory?.length == 0 ||
      response.accountBalanceHistory == undefined)
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

  return (
    <>
      <AskMelodiyAILayout
        context={bankAccounts}
        sampleQuestions={samplQuestions}
      >
        <BankAccountCard
          bankAccount={new BankAccount(account)}
          className="bg-white"
          enableDemoMode={false}
          historicalAccountBalance={accountHistoricalBalance ?? []}
        />
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
