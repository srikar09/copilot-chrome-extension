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
import { Card, CardHeader, CardTitle } from "./ui/card";

/**
 * Props interface for the AccountOverviewSummaryHeader component.
 */
interface IProps {
  /**
   * The title to display for the account overview.
   */
  title: string;
  /**
   * The title to display for the "Connect Another Account" button.
   */
  buttonTitle: string;
  /**
   * The total count of accounts to display.
   */
  count: number;
}

/**
 * AccountOverviewSummaryHeader component displays a header for the account overview.
 * It shows the title of the account overview and the "Connect Another Account" button.
 *
 * @param props - The props for the component.
 * @returns A React functional component.
 */
const AccountOverviewSummaryHeader: React.FC<IProps> = (props) => {
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

/**
 * AccountSheet component displays the connected accounts in a sheet.
 * It shows the "Connect Another Account" button and a list of connected accounts.
 *
 * @param props - The props for the component.
 * @returns A React functional component.
 */
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 py-3">
              {link.map((connectedLink, index) => (
                <Card key={index} className="p-3">
                  <CardHeader>
                    <CardTitle>
                      <p> {connectedLink.institutionName} </p>
                      <p
                        style={{
                          fontSize: "10px",
                        }}
                        className="font-bold leading-3"
                      >
                        {" "}
                        {connectedLink.newAccountsAvailable
                          ? "New Accounts Avalaible"
                          : "No New Accounts Available"}
                      </p>
                    </CardTitle>
                    {!connectedLink.shouldBeUpdated ? (
                      <></>
                    ) : (
                      <div
                        style={{
                          fontSize: "10px",
                        }}
                      >
                        <ConnectPlaidAccountButton
                          title={`Need To Update Account (${connectedLink.institutionName})`}
                          linkId={connectedLink.id}
                        />
                      </div>
                    )}
                  </CardHeader>
                </Card>
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
