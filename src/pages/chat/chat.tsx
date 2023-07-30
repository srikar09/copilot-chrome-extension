import { Chat } from "src/components/chat";
import { Label } from "src/components/ui/label";
import { Layout } from "src/layouts/layout";

const ChatPage: React.FC = () => {
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
        <div className="flex flex-col justify-end border rounded-2xl m-4 p-5 min-h-[700px] bg-white">
          <section className="flex flex-col gap-3">
            <Chat />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export { ChatPage };
