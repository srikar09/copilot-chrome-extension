import react from "react";
import { ConnectPlaidAccountButton } from "./connect-plaid-account-button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { PlusCircle } from "lucide-react";
import { useAppSelector } from "src/redux/store/hooks";
import { selectUserFinancialProfile } from "src/redux/slice/authentication/AuthenticationSelector";
import { Badge } from "./ui/badge";

const AccountOverviewSummaryHeader: React.FC<{
  title: string;
  buttonTitle: string;
  count: number;
}> = (props) => {
  const { title, buttonTitle, count } = props;

  return (
    <div className="flex flex-row justify-between">
      <h2 className="ml-5 text-xl font-bold tracking-tight pb-5">
        {title} <span className="ml-1 text-xs"> ({count})</span>
      </h2>
      <AccountSheet buttonTitle={buttonTitle} />
    </div>
  );
};

const AccountSheet: React.FC<{
  buttonTitle: string;
}> = (props) => {
  const { buttonTitle } = props;
  const financialProfile = useAppSelector(selectUserFinancialProfile);
  const { link } = financialProfile;
  const numberOfConnectedAccounts = link.length;
  return (
    <Sheet>
      <SheetTrigger className="m-2 border p-3 font-bold text-md flex flex-row gap-2 rounded-2xl">
        <PlusCircle className="w-6 h-6" />
        Connect Another Account
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-2xl">
            Connected Accounts{" "}
            <span className="font-bold text-xs">
              ({numberOfConnectedAccounts})
            </span>
          </SheetTitle>
          <SheetDescription>
            <p className="text-black text-lg underline">
              Connected Institutions
            </p>
            <div className="flex flex-row flex-wrap gap-2 py-3">
              {link.map((connectedLink, index) => (
                <Badge key={index}>
                  <p> {connectedLink.institutionName} </p>
                </Badge>
              ))}
            </div>
            You have {numberOfConnectedAccounts} connected accounts on our
            platform. If you want to connect more accounts, please click on the
            button below
            <ConnectPlaidAccountButton title={`Connect ${buttonTitle}`} />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export { AccountOverviewSummaryHeader };
