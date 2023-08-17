import { useState } from "react";
import { Chat, transformBaseFinancialContext } from "src/components/chat";
import { Spinner } from "src/components/spinner";
import { Card, CardHeader, CardTitle } from "src/components/ui/card";
import { AskMelodiyAILayout } from "src/layouts/ask-melodiy-ai-layout";
import { Layout } from "src/layouts/layout";
import { useGetFinancialContextQuery } from "src/redux/queries/get-financial-context";
import {
  selectCurrentUserID,
  selectUserFinancialContext,
} from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";

/**
 * ChatPage component to render the chat page with financial context information.
 * @returns {JSX.Element} - The JSX element representing the ChatPage component.
 */
const samplQuestions: string[] = [
  "How much money do I have in my account?",
  "Am l spending too much in my account?",
  "What fees are associated with my account?",
  "How can l optimize my spending on this account?",
];

const ChatPage: React.FC = () => {
  // Get the current user ID from the Redux store
  const userId = useAppSelector(selectCurrentUserID);
  const financialContext = useAppSelector(selectUserFinancialContext);
  return (
    <Layout>
      <div className="flex flex-col gap-12 justify-center items-center min-h-screen rounded-2xl border bg-gray-100">
        <div className="flex flex-col justify-end border rounded-2xl m-4 p-5 min-h-[700px] bg-white">
          <section className="flex flex-col gap-3">
            <Chat baseContext={transformBaseFinancialContext(financialContext)} sampleQuestions={samplQuestions}/>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export { ChatPage };
