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
import { selectUserFinancialProfile } from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";
import { transformBaseFinancialProfile } from "./chat";
import { BankAccount, BankAccountCard } from "melodiy-component-library";

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
      <AskMelodiyAILayout
        context={bankAccounts}
        sampleQuestions={samplQuestions}
      >
        <BankAccountCard
          bankAccount={new BankAccount(account)}
          className="bg-white"
          enableDemoMode={false}
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
