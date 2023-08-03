import { useState } from "react";
import { handler } from "src/chat-stream/stream";
import { InputMessage } from "src/components/chat";
import {
  ChatGPTMessage,
  ChatLine,
  LoadingChatLine,
} from "src/components/chat-line";
import { Checkbox } from "src/components/ui/checkbox";
import { ScrollArea } from "src/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";
import { useToast } from "src/components/ui/use-toast";
import { cn } from "src/lib/utils";
import { useGetFinancialContextQuery } from "src/redux/queries/get-financial-context";
import {
  selectCurrentUserID,
  selectCurrentUserProfile,
  selectUserFinancialContext,
} from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";
import { MelodyFinancialContext } from "src/types/financials/clickhouse_financial_service";
import { GetMelodyFinancialContextRequest } from "src/types/financials/request_response_financial_analytics_service";

const initialAnalyticMessage: ChatGPTMessage[] = [
  {
    role: "assistant",
    content: "Ask me anything about this data?",
  },
];

const AnalyticAiCardLayout: React.FC<{
  children: React.ReactNode;
  className?: string;
  context: any;
}> = ({ children, className, context }) => {
  const [messages, setMessages] = useState<ChatGPTMessage[]>(
    initialAnalyticMessage
  );
  const { toast } = useToast();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const profile = useAppSelector(selectCurrentUserProfile);
  const [userKey] = useState(profile.name);
  const [enableGlobalFinancialContext, setEnableGlobalFinancialContext] =
    useState<boolean>(false);

  const userId = useAppSelector(selectCurrentUserID);
  const financialContext = useAppSelector(selectUserFinancialContext);

  // TODO: this needs to be extracted from the financial profile

  const sendMessage = async (message: string) => {
    setLoading(true);
    let questionContext: string = JSON.stringify(context).trim();
    const globalContext = JSON.stringify(financialContext).trim();
    let contextDrivenQuestion: string = "";
    if (enableGlobalFinancialContext) {
      contextDrivenQuestion = `Given this global context ${globalContext}, and this additional 
                              details ${questionContext} act as a smart financial advisor, answer
                               this question concisely: ${message}`;
    } else {
      contextDrivenQuestion = `Given this financial context ${questionContext}, act as a smart 
                              financial advisor, answer this question concisely: ${message}`;
    }

    const newMessages = [
      ...messages,
      { role: "user", content: message } as ChatGPTMessage,
    ];

    setMessages(newMessages);
    const last10messages = [
      ...newMessages.slice(-5),
      { role: "user", content: contextDrivenQuestion } as ChatGPTMessage,
    ]; // remember last 2 messages

    // TODO: wrap around a try catch block
    const data = await handler({
      last10messages: last10messages,
      user: userKey,
      financialContext: context,
    });

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    let lastMessage = "";

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);

      lastMessage = lastMessage + chunkValue;

      setMessages([
        ...newMessages,
        { role: "assistant", content: lastMessage } as ChatGPTMessage,
      ]);

      setLoading(false);
    }
  };

  return (
    <div className={cn("bg-gray-200 rounded-2xl p-3", className)}>
      <div className="flex justify-end pb-2">
        <Select>
          <SelectTrigger
            className={cn(
              "w-[130px] border-none font-bold bg-white",
              className
            )}
          >
            <SelectValue placeholder="Ask Melodiy" />
          </SelectTrigger>
          <SelectContent className="p-1 min-h-[250px] min-w-[300px] max-w-[350px] md:min-w-[500px] md:max-w-md lg:max-h-[700px] rounded-2xl bg-gray-50 border-4 border-gray-300 shadow-md">
            <SelectGroup className="p-2">
              <ScrollArea>
                {messages.map(({ content, role }, index) => (
                  <ChatLine key={index} role={role} content={content} />
                ))}
                {loading && <LoadingChatLine />}{" "}
                <SelectLabel>
                  {" "}
                  {initialAnalyticMessage.length < 2 && (
                    <>
                      <span className="mx-auto flex flex-grow text-gray-600 clear-both">
                        Type a message to start the conversation
                      </span>
                      <div className="flex items-center space-x-2 py-3">
                        <Checkbox
                          id="terms"
                          className="rounded-full"
                          onClick={() => {
                            setEnableGlobalFinancialContext(
                              !enableGlobalFinancialContext
                            );
                          }}
                        />
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Enable Financial Global Context
                        </label>
                      </div>
                    </>
                  )}
                </SelectLabel>
              </ScrollArea>

              <InputMessage
                input={input}
                setInput={setInput}
                sendMessage={sendMessage}
              />
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {children}
    </div>
  );
};

export { AnalyticAiCardLayout };
