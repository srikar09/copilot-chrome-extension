import { BrainCircuit, BrainCog, PiggyBank } from "lucide-react";
import { useState } from "react";
import { handler } from "src/chat-stream/stream";
import {
  ChatGPTMessage,
  ChatLine,
  LoadingChatLine,
} from "src/components/chat-line";
import { Button } from "src/components/ui/button";
import { Card, CardTitle } from "src/components/ui/card";
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
import { PromptContext } from "src/lib/context-prompt";
import { MIXPANEL_EVENTS, mixPanelClient } from "src/lib/mixpanel";
import { cn } from "src/lib/utils";
import {
  selectCurrentSocialProfile,
  selectCurrentUserAccount,
  selectCurrentUserID,
  selectUserFinancialContext,
} from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";

/**
 * The initial message that the assistant will say.
 * TODO: CONSOLIDATE THIS AND THE OTHER MELODIY CHAT COMPONENT.
 * USE THE MELODIY CHAT COMPONENT HERE. WE HAVE REPLICATED CODE RN
 */
const initialAnalyticMessage: ChatGPTMessage[] = [
  {
    role: "assistant",
    content: "Ask me anything about this data?",
  },
];

function InputMessage({ input, setInput, sendMessage }: any) {
  return (
    <div className="mt-6 flex clear-both">
      <input
        type="text"
        aria-label="chat input"
        required
        className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:text-gray-600 sm:text-sm"
        value={input}
        placeholder="Ask Melodiy AI ..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage(input);
            setInput("");
          }
        }}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Button
        type="submit"
        className="ml-4 flex-none"
        onClick={() => {
          sendMessage(input);
          setInput("");
        }}
      >
        Ask
      </Button>
    </div>
  );
}
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
  sampleQuestions: string[];
}> = ({ children, className, context, sampleQuestions }) => {
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
  const profile = useAppSelector(selectCurrentSocialProfile);
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
  const userAccount = useAppSelector(selectCurrentUserAccount);

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
    const promptGenerator = new PromptContext(financialContext, userAccount);
    let contextDrivenQuestion: string = "";

    if (enableGlobalFinancialContext) {
      // use financial context
      contextDrivenQuestion = promptGenerator.getFinancialContextBasedPrompt(
        message,
        globalContext
      );
    } else {
      contextDrivenQuestion = promptGenerator.getFinancialContextBasedPrompt(
        message,
        questionContext
      );
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
    <div className={cn("bg-gray-100 rounded-2xl p-3", className)}>
      <div className="flex justify-end pb-1">
        <Select>
          <SelectTrigger
            className={cn(
              "w-fit rounded-lg font-bold bg-white flex flex-row gap-2",
              className
            )}
          >
            <BrainCircuit className="h-6 w-6 bg-white text-black font-bold rounded-md p-1" />
            <SelectValue placeholder="Ask Melodiy" />
          </SelectTrigger>
          <SelectContent className="relative p-1 h-[400px] min-w-[300px] max-w-[350px] md:min-w-[500px] md:max-w-md lg:h-[400px] rounded-2xl bg-gray-50 border-4 border-gray-300 shadow-md overflow-auto">
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
                      <span className="mx-auto flex flex-grow text-gray-600 dark:text-gray-300 clear-both">
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
                <div className="grid grid-cols-2 gap-2">
                  {sampleQuestions.map((question, index) => (
                    <Card
                      className="p-2 rounded-lg shadow-md bg-white flex flex-row gap-1"
                      key={index}
                    >
                      <div className="p-1 border rounded-lg bg-black">
                        <BrainCog className="h-6 w-6 bg-black text-white" />
                      </div>
                      <CardTitle
                        className="text-xs"
                        onClick={() => setInput(question)}
                      >
                        {question}
                      </CardTitle>
                    </Card>
                  ))}
                </div>
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
