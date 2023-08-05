import { useState } from "react";
import { handler } from "src/chat-stream/stream";
import { InputMessage } from "src/components/chat";
import {
  ChatGPTMessage,
  ChatLine,
  LoadingChatLine,
} from "src/components/chat-line";
import { ScrollArea } from "src/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";
import { Switch } from "src/components/ui/switch";
import { useToast } from "src/components/ui/use-toast";
import { MIXPANEL_EVENTS, mixPanelClient } from "src/lib/mixpanel";
import { cn } from "src/lib/utils";
import {
  selectCurrentUserID,
  selectCurrentUserProfile,
  selectUserFinancialContext,
} from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";

/**
 * The initial message that the assistant will say.
 */
const initialAnalyticMessage: ChatGPTMessage[] = [
  {
    role: "assistant",
    content: "Ask me anything about this data?",
  },
];

/**
 * This is the main layout for the Analytic AI card.
 *
 * @param children - The child components to render within this component.
 * @param className - The CSS classes to apply to the component.
 * @param context - The context for the AI to operate in.
 *
 * @example
 * ```
 * <AskMelodiyAILayout context={context}>
 *   <ChildComponent />
 * </AskMelodiyAILayout>
 * ```
 */
const AskMelodiyAILayout: React.FC<{
  children: React.ReactNode;
  className?: string;
  context: any;
}> = ({ children, className, context }) => {
  /**
   * State variable for the messages in the chat.
   */
  const [messages, setMessages] = useState<ChatGPTMessage[]>(
    initialAnalyticMessage
  );
  /**
   * A hook to show toast messages.
   */
  const { toast } = useToast();
  /**
   * State variable for the input in the chat.
   */
  const [input, setInput] = useState("");
  /**
   * State variable to handle loading states.
   */
  const [loading, setLoading] = useState(false);
  /**
   * User's profile information.
   */
  const profile = useAppSelector(selectCurrentUserProfile);
  /**
   * State variable for the user's key.
   */
  const [userKey] = useState(profile.name);
  /**
   * State variable for the global financial context setting.
   */
  const [enableGlobalFinancialContext, setEnableGlobalFinancialContext] =
    useState<boolean>(false);

  /**
   * User's ID.
   */
  const userId = useAppSelector(selectCurrentUserID);
  /**
   * User's financial context.
   */
  const financialContext = useAppSelector(selectUserFinancialContext);

  /**
   * Function to send a message to the AI.
   *
   * @param message - The message to send.
   */
  const sendMessage = async (message: string) => {
    // increment the question asked metrics in mixpanel
    mixPanelClient.trackEventOfType(MIXPANEL_EVENTS.QUESTION_ASKED);

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
            className={cn("w-fit rounded-full font-bold bg-white", className)}
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
                        <Switch
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

export { AskMelodiyAILayout };
