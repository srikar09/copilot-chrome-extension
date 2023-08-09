/**
 * Importing MelodyFinancialContext and UserAccount from specific modules
 */
import { MelodyFinancialContext } from "src/types/financials/clickhouse_financial_service";
import { UserAccount, createBaseUserAccount } from "src/types/records/user-account";

/**
 * IContextPrompt interface defines a contract for the PromptContext class.
 * It has one method getFinancialContextBasedPrompt, which should return a string value.
 */
interface IContextPrompt {
  /**
   * @param question The question to be used for the prompt.
   * @param additionalContext Additional context to be used to generate the prompt.
   * @returns A string value representing the prompt.
   */
  getFinancialContextBasedPrompt(
    question: string,
    additionalContext?: any | undefined
  ): string;
}

/**
 * The PromptContext class implements the IContextPrompt interface.
 * It is a Singleton class that holds global financial context and user account.
 */
class PromptContext implements IContextPrompt {
  /**
   * A private instance of MelodyFinancialContext to hold the global context.
   */
  private _globalContext: MelodyFinancialContext =
    MelodyFinancialContext.create({});

  /**
   * A private static instance of the PromptContext for Singleton implementation.
   */
  private static instance: PromptContext;

  /**
   * A private instance of UserAccount.
   */
  private _userAccount =  createBaseUserAccount();

  /**
   * The constructor of the PromptContext class.
   * @param globalContext The global financial context.
   * @param userAccount The user account.
   */
  public constructor(
    globalContext: MelodyFinancialContext,
    userAccount: UserAccount
  ) {
    this._globalContext = globalContext;
    this._userAccount = userAccount;
  }

  /**
   * getFinancialContextBasedPrompt method is used to get the prompt based on the global financial context and additional context.
   * @param question The question to be used for the prompt.
   * @param additionalContext Additional context to be used to generate the prompt.
   * @returns A string value representing the prompt.
   */
  public getFinancialContextBasedPrompt(
    question: string,
    additionalContext?: any
  ): string {
    if (additionalContext) {
      let questionContext: string = JSON.stringify(additionalContext).trim();
      return `Given this global context 
              ${this._globalContext}, and this additional 
              details ${questionContext} act as a cool financial advisor, answer
            this question in a personal fashion for ${this._userAccount.username}: ${question}`;
    }

    return `
            Given this financial context 
            ${JSON.stringify(
              this._globalContext
            )}, act as a cool financial advisor 
            and answer the following in a personal fashion for ${
              this._userAccount.username
            }: ${question}
            `;
  }
}

/**
 * Exporting the PromptContext class.
 */
export { PromptContext };
