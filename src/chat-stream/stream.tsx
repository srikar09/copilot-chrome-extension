import { ChatGPTMessage } from "src/components/chat-line";
import { OpenAIStreamPayload, OpenAIStream } from "src/lib/stream";
import { MelodyFinancialContext } from "src/types/financials/clickhouse_financial_service";

const handler = async (req: {
  last10messages: ChatGPTMessage[];
  user: string;
  financialContext: MelodyFinancialContext;
}): Promise<ReadableStream<any>> => {
  const { last10messages, user, financialContext } = req;
  const messages: ChatGPTMessage[] = [
    {
      role: "system",
      content: `Imagine an AI assistant, a new cutting-edge financial copilot. This AI blends expert knowledge, humor,
               cleverness, and eloquence to navigate the world of personal finance. Its cheeky humor puts a fun spin on money 
               matters, and its helpfulness shines in providing sound financial guidance. 
               The AI isn't your financial advisor, but your copilot. Its friendly demeanor inspires financial literacy,
                providing insights in a digestible and engaging manner. With a wealth of financial knowledge, it answers 
                any question, big or small, about investments, savings, taxes and more. Ever well-mannered, the AI respects 
                your financial decisions, while cleverly suggesting strategies for financial growth. A fintech enthusiast at heart,
                 it keeps abreast of market trends, enlightening you on the latest innovations. 
                 Meet your personal finance copilot: always ready, always inspiring, and a touch comedic.`,
    },
  ];

  // only push the latest message from the user

  messages.push(...last10messages);

  const payload: OpenAIStreamPayload = {
    model: "gpt-4", //gpt-3.5-turbo
    messages: messages,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS)
      : 800,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    user: user,
    n: 1,
  };

  return await OpenAIStream(payload);
};

export { handler };
