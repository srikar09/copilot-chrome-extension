import React, { useState } from "react";
import { ChatGPTMessage, ChatLine, LoadingChatLine } from "./chat-line";
import {
  selectCurrentUserAccount,
  selectCurrentSocialProfile,
} from "src/redux/slice/authentication/AuthenticationSelector";
import { BrainCog } from "lucide-react";
import { Switch } from "src/components/ui/switch";
import {
  SelectGroup,
  SelectLabel,
} from "src/components/ui/select";
import { Card, CardTitle } from "src/components/ui/card";

import { useAppSelector } from "src/redux/store/hooks";
import { Button } from "./ui/button";
import { handler } from "src/chat-stream/stream";
import { MelodyFinancialContext, RefinedMelodyFinancialContext } from "src/types/financials/clickhouse_financial_service";
import { PromptContext } from "src/lib/context-prompt";
import { FinancialProfile, RefinedFinancialProfile } from "src/types/user/financial-profile";
import { RefinedCreditAccount, RefinedInvesmentHolding, RefinedInvestmentAccount, RefinedInvestmentSecurity, RefinedLink } from "src/types/financials/message_financial_service";
import { ScrollArea } from "src/components/ui/scroll-area";

// default first message to display in UI (not necessary to define the prompt)
export const initialMessages: ChatGPTMessage[] = [
  {
    role: "assistant",
    content: "Hi! I am Melodiy AI. Ask me anything related to your finances!",
  },
];

function InputMessage ({ input, setInput, sendMessage }: any)  {
  return (
  <div className="mt-6 flex clear-both">
    <input
      type="text"
      aria-label="chat input"
      required
      className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
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
)}

/*
  Todo: Have a base financial context class that all other contexts can inherit from 

  Maybe
*/

/*
  Context types allows any other 
*/
type ContextTypes = {
  contextName: string, 
  context: any
};

type ChatProps = {
  baseContext: any;
  sampleQuestions: string[];
  secondaryContext?: ContextTypes[] ;
};

const initialAnalyticMessage: ChatGPTMessage[] = [
  {
    role: "assistant",
    content: "Ask me anything about this data?",
  },
];

/*
  Base chat component that accepts financial context and sample questions
  should convert any to a class type that all contexts can inherit from 
*/
function Chat({baseContext, sampleQuestions, secondaryContext}: ChatProps) {
  const [messages, setMessages] = useState<ChatGPTMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const profile = useAppSelector(selectCurrentSocialProfile);
  const [userKey] = useState(profile.name);
  const userAccount = useAppSelector(selectCurrentUserAccount);
  const [context, setContext] = useState(baseContext);

  const sendMessage = async (
    message: string,
  ) => {
    setLoading(true);
    const promptGenerator = new PromptContext(context, userAccount);
  
    const contextDrivenQuestion =
      promptGenerator.getFinancialContextBasedPrompt(message);
  
    const newMessages = [
      ...messages,
      { role: "user", content: message } as ChatGPTMessage,
    ];
  
    setMessages(newMessages);
    const last10messages = [
      ...newMessages.slice(-2),
      { role: "user", content: contextDrivenQuestion } as ChatGPTMessage,
    ]; // remember last 2 messages
  
    // TODO: wrap around a try catch block
    const data = await handler({
      last10messages: last10messages,
      user: userKey,
      financialContext: baseContext,
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
  }

  return (
    <div className="max-w-screen px-2 flex flex-col ">
       <ScrollArea>
                {messages.map(({ content, role }, index) => (
                  <ChatLine key={index} role={role} content={content} />
                ))}
                {loading && <LoadingChatLine />}{" "}
                <SelectGroup>
                <SelectLabel>
                  {" "}
                  {initialAnalyticMessage.length < 2 && (
                    <>
                      <span className="mx-auto flex flex-grow text-gray-600 dark:text-gray-600 clear-both">
                        If you dont pick an option below, you can ask quesitons regarding your overall finances!
                      </span>
                    </>
                  )}
                  { secondaryContext?.map((secondaryContext)=>(
                     <div key={secondaryContext.contextName} className="flex items-center space-x-2 py-3">
                     <Switch
                       id="terms"
                       className="rounded-full"
                       onClick={() => {
                          if(context===secondaryContext){
                            setContext(baseContext)
                          }
                          else{
                            setContext(secondaryContext)
                          }
                       }}
                     />
                     <label
                       htmlFor="terms"
                       className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                     >
                       Ask questions against {secondaryContext.contextName}
                     </label>
                   </div>
                  ) 
                ) }
                </SelectLabel>
                </SelectGroup>
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
    </div>
  );
}

/*
 Transforms the base context to improve the quality of responses coming from chat gpt
  Current functionality: 
    1) Removes the balance fields from credit accounts to prevent open AI models from getting confused
*/
function transformBaseFinancialContext(financialContext: MelodyFinancialContext): RefinedMelodyFinancialContext{
    const refinedCreditAccounts = financialContext.creditAccounts.map((creditAccount):RefinedCreditAccount=>{
      return{
        id:creditAccount.id,
        userId: creditAccount.userId,
        name: creditAccount.name,
        number: creditAccount.number,
        type: creditAccount.type,
        currentFunds: creditAccount.currentFunds,
        balanceLimit: creditAccount.balanceLimit,
        plaidAccountId: creditAccount.plaidAccountId,
        subtype: creditAccount.subtype,
        isOverdue: creditAccount.isOverdue,
        lastPaymentAmount: creditAccount.lastPaymentAmount,
        lastPaymentDate: creditAccount.lastPaymentDate,
        lastStatementIssueDate: creditAccount.lastStatementIssueDate,
        minimumAmountDueDate: creditAccount.minimumAmountDueDate,
        nextPaymentDate: creditAccount.nextPaymentDate,
        aprs: creditAccount.aprs,
        lastStatementBalance: creditAccount.lastStatementBalance,
        minimumPaymentAmount: creditAccount.minimumPaymentAmount,
        nextPaymentDueDate: creditAccount.nextPaymentDueDate
      }
    }
  )
  const refinedFinancialContext:RefinedMelodyFinancialContext = {...financialContext}; 
  refinedFinancialContext.creditAccounts= refinedCreditAccounts
  return refinedFinancialContext
}

/*
  This function transforms the base financial profile 
  to improve the quality of responses coming out of chat gpt
  
  Current functionality: 
    credit Accounts: 
      1) Removes the balance fields from credit accounts
    Investments: 
      1) Reduces holdings object size. Maps holdings to refined holdings
      2) Reduces securities object size. Maps securities to refined securities
*/
function transformBaseFinancialProfile(financialProfile: FinancialProfile):RefinedFinancialProfile{
  const refinedLinkAccounts = financialProfile.link.map((link):RefinedLink=> {
    const refinedCreditAccounts =  link.creditAccounts.map((creditAccount):RefinedCreditAccount=>{
      return{
        id:creditAccount.id,
        userId: creditAccount.userId,
        name: creditAccount.name,
        number: creditAccount.number,
        type: creditAccount.type,
        currentFunds: creditAccount.currentFunds,
        balanceLimit: creditAccount.balanceLimit,
        plaidAccountId: creditAccount.plaidAccountId,
        subtype: creditAccount.subtype,
        isOverdue: creditAccount.isOverdue,
        lastPaymentAmount: creditAccount.lastPaymentAmount,
        lastPaymentDate: creditAccount.lastPaymentDate,
        lastStatementIssueDate: creditAccount.lastStatementIssueDate,
        minimumAmountDueDate: creditAccount.minimumAmountDueDate,
        nextPaymentDate: creditAccount.nextPaymentDate,
        aprs: creditAccount.aprs,
        lastStatementBalance: creditAccount.lastStatementBalance,
        minimumPaymentAmount: creditAccount.minimumPaymentAmount,
        nextPaymentDueDate: creditAccount.nextPaymentDueDate
      }
    }
    )
    const refinedInvestmentAccounts:RefinedInvestmentAccount[] = link.investmentAccounts.map((investmentAccount)=>{
      
      const refinedHoldings: RefinedInvesmentHolding[] = investmentAccount.holdings.map((holding): RefinedInvesmentHolding=> {
        return{
          costBasis: holding.costBasis,
          institutionPrice: holding.institutionPrice,
          institutionPriceAsOf: holding.institutionPriceAsOf,
          isoCurrencyCode: holding.isoCurrencyCode,
          quantity: holding.quantity
        }
      })

      const refinedSecurities:RefinedInvestmentSecurity[] =  investmentAccount.securities.map((security)=> {
        return {
          tickerSymbol: security.tickerSymbol,
          type: security.type, 
          closePrice: security.closePrice,
          closePriceAsOf: security.closePriceAsOf,
          cusip: security.cusip, 
          isCashEquivalent:security.isCashEquivalent,
          isoCurrencyCode: security.isoCurrencyCode,
          name: security.name
        }
      })

      return{
        id:investmentAccount.id,
        userId:investmentAccount.userId,
        name:investmentAccount.name,
        number:investmentAccount.number,
        type: investmentAccount.type,
        currentFunds: investmentAccount.currentFunds,
        balanceLimit: investmentAccount.balanceLimit,
        plaidAccountId: investmentAccount.plaidAccountId,
        subtype: investmentAccount.subtype,
        holdings: refinedHoldings,
        securities: refinedSecurities
      }
    })
    const refinedLinkAccount:RefinedLink = {...link}
    refinedLinkAccount.creditAccounts = refinedCreditAccounts
    refinedLinkAccount.investmentAccounts=refinedInvestmentAccounts
    return refinedLinkAccount;
  } )

  const refinedFinancialProfile:RefinedFinancialProfile = {...financialProfile}
  refinedFinancialProfile.link = refinedLinkAccounts
  return refinedFinancialProfile;
}

export { InputMessage, Chat, transformBaseFinancialContext, transformBaseFinancialProfile };  
export type { ContextTypes, ChatProps };

