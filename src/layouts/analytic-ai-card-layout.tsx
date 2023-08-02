import { useState } from "react";
import { handler } from "src/chat-stream/stream";
import { InputMessage } from "src/components/chat";
import {
  ChatGPTMessage,
  ChatLine,
  LoadingChatLine,
} from "src/components/chat-line";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";
import { cn } from "src/lib/utils";
import { selectCurrentUserProfile } from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";

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
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const profile = useAppSelector(selectCurrentUserProfile);
  const [userKey] = useState(profile.name);

  const sendMessage = async (message: string) => {
    setLoading(true);
    let contextDrivenQuestion = `Given this financial context ${JSON.stringify(
      context
    )}, act as a cool smart financial copilot and respond without mentioning context: ${message}`;

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

    console.log("Edge function returned.");

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
          <SelectContent className="p-1 min-w-[300px] max-w-[350px] md:min-w-[500px] md:max-w-md lg:max-h-[700px] rounded-2xl">
            <SelectGroup className="p-2">
              {messages.map(({ content, role }, index) => (
                <ChatLine key={index} role={role} content={content} />
              ))}

              {loading && <LoadingChatLine />}

              <SelectLabel>
                {" "}
                {initialAnalyticMessage.length < 2 && (
                  <span className="mx-auto flex flex-grow text-gray-600 clear-both">
                    Type a message to start the conversation
                  </span>
                )}
              </SelectLabel>

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
