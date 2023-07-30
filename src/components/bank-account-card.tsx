import { ChevronDownIcon, PlusIcon } from "@radix-ui/react-icons";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { BankAccount } from "src/types/financials/message";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { formatToTwoDecimalPoints } from "src/lib/utils";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";

const BankAccountSummaryCard: React.FC<{
  account: BankAccount;
}> = (props) => {
  const { account } = props;

  // get number of pockets
  const numberOfPockets = account.pockets.length;
  // get number of goals
  const numberOfGoals = account.pockets.reduce((acc, pocket) => {
    return acc + pocket.goals.length;
  }, 0);

  return (
    <Card>
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle className="text-xs text-gray-600 font-bold">
            ${formatToTwoDecimalPoints(account.currentFunds)}
          </CardTitle>
          <CardTitle
            className="text-xs font-bold"
            style={{
              fontSize: "11px",
            }}
          >
            {account.name}
          </CardTitle>
          <div>
            <div className="flex flex-1 gap-2 justify-start">
              <Badge className="bg-white border border-black text-black">
                {account.subtype}
              </Badge>
              <Badge className="bg-white border border-black text-black">
                {account.currency.toLowerCase()}
              </Badge>
            </div>
          </div>
          <div>
            <div className="flex gap-1">
              <span className="text-xs text-gray-600">Account Number: </span>
              <span className="text-xs font-bold">{account.number}</span>
            </div>
          </div>
          <div>
            <Label className="text-2xl font-bold">
              ${formatToTwoDecimalPoints(account.balance)}
            </Label>
          </div>
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
          <Button variant="secondary" className="px-3 shadow-none">
            <PlusIcon className="mr-2 h-4 w-4" />
            More
          </Button>
          <Separator orientation="vertical" className="h-[20px]" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" className="px-2 shadow-none">
                <ChevronDownIcon className="h-4 w-4 text-secondary-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              alignOffset={-5}
              className="w-[200px]"
              forceMount
            >
              <DropdownMenuLabel className="flex items-center justify-center">
                <p className="text-sm">
                  {account.name.toLowerCase()} pockets ({" "}
                  {account.pockets.length})
                </p>
              </DropdownMenuLabel>
              {account.pockets.map((pocket) => (
                <DropdownMenuCheckboxItem checked>
                  <div className="flex flex-row gap-2 items-center text-black font-bold px-2">
                    {/* <CircleIcon className="mr-1 h-3 w-3 fill-black text-black font-bold" /> */}
                    <div className="text-xs font-bold">
                      {formatPocketNameString(pocket.type.toString())}
                    </div>
                    {/* <div className="text-xs font-bold">{pocket.goals.length} </div> */}
                  </div>
                </DropdownMenuCheckboxItem>
              ))}
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      {numberOfPockets > 0 && (
        <CardContent>
          <CardTitle className="text-sm font-bold pb-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Badge className="w-full flex justify-center">
                  Pockets ({numberOfPockets})
                </Badge>
              </div>
              <div>
                <Badge className="w-full flex justify-center">
                  Goals ({numberOfGoals})
                </Badge>
              </div>
            </div>
          </CardTitle>
        </CardContent>
      )}
    </Card>
  );
};

function formatPocketNameString(input: string): string {
  const prefix = "POCKET_TYPE_";

  // Remove the prefix
  let formatted = input.startsWith(prefix) ? input.slice(prefix.length) : input;

  // Replace all underscores with spaces
  formatted = formatted.replace(/_/g, " ");

  return formatted.toLowerCase();
}

export { BankAccountSummaryCard };
