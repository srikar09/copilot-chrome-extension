import { Link } from "src/types/financials/message_financial_service";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const LinkedAccountCard: React.FC<{
  link: Link;
}> = (props) => {
  const { link } = props;
  const { plaidLink } = link;
  // compute the sum of all bank accounts under this linked account
  const totalBankAccountBalance = link.bankAccounts.reduce((acc, account) => {
    return acc + account.balance;
  }, 0);

  // compute the same for all credit cards
  const totalCreditCardBalance = link.creditAccounts.reduce((acc, card) => {
    return acc + card.currentFunds;
  }, 0);

  // compute the total balance
  const totalBalance = totalBankAccountBalance + totalCreditCardBalance;
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {plaidLink?.institutionName}
        </CardTitle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-4 w-4 text-muted-foreground"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${totalBalance}</div>
        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
      </CardContent>
    </Card>
  );
};

export { LinkedAccountCard };
