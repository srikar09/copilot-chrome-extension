import { useState } from "react";
import { ChatGPTMessage, ChatLine, LoadingChatLine } from "./chat-line";
import { selectCurrentUserProfile } from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";
import { Button } from "./ui/button";
import { handler } from "src/chat-stream/stream";

// default first message to display in UI (not necessary to define the prompt)
export const initialMessages: ChatGPTMessage[] = [
  {
    role: "assistant",
    content: "Hi! I am Melodiy AI. Ask me anything!",
  },
];

const InputMessage = ({ input, setInput, sendMessage }: any) => (
  <div className="mt-6 flex clear-both">
    <input
      type="text"
      aria-label="chat input"
      required
      className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
      value={input}
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

export function Chat() {
  const [messages, setMessages] = useState<ChatGPTMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const profile = useAppSelector(selectCurrentUserProfile);
  const [userKey] = useState(profile.name);

  // send message to API /api/chat endpoint
  const sendMessage = async (message: string) => {
    setLoading(true);
    const newMessages = [
      ...messages,
      { role: "user", content: message } as ChatGPTMessage,
    ];
    setMessages(newMessages);
    const last10messages = newMessages.slice(-10); // remember last 10 messages

    // TODO: wrap around a try catch block
    const data = await handler({
      last10messages: last10messages,
      user: userKey,
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
    <div className="rounded-2xl border-zinc-100  lg:border lg:p-6 w-fit">
      {messages.map(({ content, role }, index) => (
        <ChatLine key={index} role={role} content={content} />
      ))}

      {loading && <LoadingChatLine />}

      {messages.length < 2 && (
        <span className="mx-auto flex flex-grow text-gray-600 clear-both">
          Type a message to start the conversation
        </span>
      )}
      <InputMessage
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
      />
    </div>
  );
}
