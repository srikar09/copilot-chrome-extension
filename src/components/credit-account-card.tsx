import {
  CreditAccount,
  RefinedCreditAccount,
  RefinedLink,
} from "src/types/financials/message_financial_service";
import { AskMelodiyAILayout } from "src/layouts/ask-melodiy-ai-layout";
import { transformBaseFinancialProfile } from "./chat";
import { useAppSelector } from "src/redux/store/hooks";
import { selectUserFinancialProfile } from "src/redux/slice/authentication/AuthenticationSelector";
import { CreditAccountCard } from "melodiy-component-library";

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

  const financialProfile = transformBaseFinancialProfile(
    useAppSelector(selectUserFinancialProfile)
  );
  let creditAccounts: [] = [];

  financialProfile.link.reduce(
    (acc: RefinedCreditAccount[], current: RefinedLink) => {
      const { creditAccounts } = current;
      acc.push(...creditAccounts);
      return acc;
    },
    creditAccounts
  );

  return (
    <AskMelodiyAILayout
      context={creditAccounts}
      sampleQuestions={samplQuestions}
    >
      <CreditAccountCard
        institutionName={institutionName}
        creditAccount={account}
      />
    </AskMelodiyAILayout>
  );
};

export { CreditAccountSummaryCard };
