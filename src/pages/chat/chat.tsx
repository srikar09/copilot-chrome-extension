import { useState } from "react";
import {
  Chat,
  ContextTypes,
  transformBaseFinancialContext,
  transformBaseFinancialProfile,
} from "src/components/chat";
import { Spinner } from "src/components/spinner";
import { Card, CardHeader, CardTitle } from "src/components/ui/card";
import { AskMelodiyAILayout } from "src/layouts/ask-melodiy-ai-layout";
import { Layout } from "src/layouts/layout";
import { selectUserFinancialProfile } from "src/redux/slice/authentication/AuthenticationSelector";
import {
  selectCurrentUserID,
  selectUserFinancialContext,
} from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";
import {
  BankAccount,
  InvestmentAccount,
  MortgageAccount,
  RefinedCreditAccount,
  RefinedInvestmentAccount,
  RefinedLink,
  StudentLoanAccount,
} from "src/types/financials/message_financial_service";

/**
 * ChatPage component to render the chat page with financial context information.
 * @returns {JSX.Element} - The JSX element representing the ChatPage component.
 */
const samplQuestions: string[] = [
  "How much money do I have in my account?",
  "What is my credit utilization rate?",
  "Tell me about my holdings?",
  "How can l optimize my spending on this account?",
];

const ChatPage: React.FC = () => {
  // Get the current user ID from the Redux store
  const userId = useAppSelector(selectCurrentUserID);
  const financialContext = useAppSelector(selectUserFinancialContext);
  const financialProfile = transformBaseFinancialProfile(
    useAppSelector(selectUserFinancialProfile)
  );

  const investmentAccounts = financialProfile.link.reduce<
    RefinedInvestmentAccount[]
  >((acc, link) => {
    return [...acc, ...link.investmentAccounts];
  }, []);
  /*
    TODO: Get these funcitons to be util functions that can be shared across components for context
  */
  let creditAccounts: [] = [];
  financialProfile.link.reduce(
    (acc: RefinedCreditAccount[], current: RefinedLink) => {
      const { creditAccounts } = current;
      acc.push(...creditAccounts);
      return acc;
    },
    creditAccounts
  );

  let bankAccounts: BankAccount[] = [];
  financialProfile.link.reduce((acc: BankAccount[], current: RefinedLink) => {
    const { bankAccounts } = current;
    acc.push(...bankAccounts);
    return acc;
  }, bankAccounts);

  let mortgageAccounts: MortgageAccount[] = [];

  financialProfile.link.reduce(
    (acc: MortgageAccount[], current: RefinedLink) => {
      const { mortgageAccounts } = current;
      acc.push(...mortgageAccounts);
      return acc;
    },
    mortgageAccounts
  );

  let studentLoanAccounts: StudentLoanAccount[] = [];
  financialProfile.link.reduce(
    (acc: StudentLoanAccount[], current: RefinedLink) => {
      const { studentLoanAccounts } = current;
      acc.push(...studentLoanAccounts);
      return acc;
    },
    studentLoanAccounts
  );

  const baseContext: ContextTypes = {
    contextName: "default - general finances",
    context: transformBaseFinancialContext(financialContext),
  };

  const secondaryContexts: ContextTypes[] = [
    {
      contextName: "your investments",
      context: investmentAccounts,
    },
    {
      contextName: "your bank accounts",
      context: bankAccounts,
    },
    {
      contextName: "your credit accounts",
      context: creditAccounts,
    },
    {
      contextName: "your mortgage accounts",
      context: creditAccounts,
    },
    {
      contextName: "your student loan accounts",
      context: studentLoanAccounts,
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col gap-12 justify-center items-center min-h-screen rounded-2xl border bg-gray-100">
        <div className="flex flex-col justify-end border rounded-2xl m-4 p-5 min-h-[700px] bg-white sm:w-[70%] w-[90%]">
          <section className="flex flex-col gap-3">
            {" "}
            <Chat
              baseContext={baseContext}
              sampleQuestions={samplQuestions}
              secondaryContext={secondaryContexts}
              className="w-fit h-full"
            />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export { ChatPage };
