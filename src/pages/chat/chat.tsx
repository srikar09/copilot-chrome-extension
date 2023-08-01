import { useState } from "react";
import { Chat } from "src/components/chat";
import { Spinner } from "src/components/spinner";
import { Card, CardHeader, CardTitle } from "src/components/ui/card";
import { Layout } from "src/layouts/layout";
import { useGetFinancialContextQuery } from "src/redux/queries/get-financial-context";
import { selectCurrentUserID } from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";
import { MelodyFinancialContext } from "src/types/financials/clickhouse_financial_service";
import { GetMelodyFinancialContextRequest } from "src/types/financials/request_response_financial_analytics_service";

const ChatPage: React.FC = () => {
  const userId = useAppSelector(selectCurrentUserID);
  const [spinner, setSpinner] = useState<React.ReactElement | null>(
    <Spinner className={"w-8 h-8 mt-3 ml-3"} />
  );

  // on component load get the financial context of the user profile
  const {
    data: response,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetFinancialContextQuery(
    GetMelodyFinancialContextRequest.create({
      userId: Number(userId),
    })
  );

  let component = null;
  if (isSuccess && response.melodyFinancialContext) {
    component = <Chat financialContext={response.melodyFinancialContext} />;
  } else if (isError) {
    setSpinner(<div>{error.toString()}</div>);
  } else if (isSuccess && response.melodyFinancialContext == undefined) {
    setSpinner(
      <Card className="py-2">
        <CardHeader>
          <CardTitle>We are still pulling in your data!</CardTitle>
          <p>Sit tight and relax. We are still pulling in your data </p>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col gap-12 justify-center items-center min-h-screen rounded-2xl border bg-gray-100">
        {/* <section className="flex flex-col gap-6">
          <Label>Ask Melodiy Ai</Label>
          <Label className="text-zinc-600">
            In this example, a simple chat bot is implemented using Next.js, API
            Routes, and OpenAI API.
          </Label>
        </section> */}

        {/** TODO:
         *  1. Add a selector to enable users to view their financial data
         *  2. Add a selector to enable users to view their (metrics) health data
         *  3. Pass context to chat component and answer questions adequately
         */}
        {spinner}
        <div className="flex flex-col justify-end border rounded-2xl m-4 p-5 min-h-[700px] bg-white">
          <section className="flex flex-col gap-3">{component}</section>
        </div>
      </div>
    </Layout>
  );
};

export { ChatPage };
