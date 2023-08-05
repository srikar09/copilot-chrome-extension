import { useState } from "react";
import { Chat } from "src/components/chat";
import { Spinner } from "src/components/spinner";
import { Card, CardHeader, CardTitle } from "src/components/ui/card";
import { Layout } from "src/layouts/layout";
import { useGetFinancialContextQuery } from "src/redux/queries/get-financial-context";
import { selectCurrentUserID } from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";
import { GetMelodyFinancialContextRequest } from "src/types/financials/request_response_financial_analytics_service";

/**
 * ChatPage component to render the chat page with financial context information.
 * @returns {JSX.Element} - The JSX element representing the ChatPage component.
 */
const ChatPage: React.FC = () => {
  // Get the current user ID from the Redux store
  const userId = useAppSelector(selectCurrentUserID);

  // State to manage the loading spinner and error handling
  const [spinner, setSpinner] = useState<React.ReactElement | null>(
    <Spinner className={"w-8 h-8 mt-3 ml-3"} />
  );

  // Fetch the financial context data for the user
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
    // Render the chat component with the fetched financial context data
    component = <Chat financialContext={response.melodyFinancialContext} />;
  } else if (isError) {
    // Render the error message if an error occurs during data fetching
    setSpinner(<div>{error.toString()}</div>);
  } else if (isSuccess && response.melodyFinancialContext == undefined) {
    // Render a message if the financial context data is still being pulled in
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
        {spinner}
        <div className="flex flex-col justify-end border rounded-2xl m-4 p-5 min-h-[700px] bg-white">
          <section className="flex flex-col gap-3">{component}</section>
        </div>
      </div>
    </Layout>
  );
};

export { ChatPage };
