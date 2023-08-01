import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import React from "react";
import { MainNav } from "src/components/main-nav";
import { Search } from "src/components/search";
import TeamSwitcher from "src/components/team-switcher";
import { Layout } from "src/layouts/layout";
import { selectUserFinancialProfile } from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";

const OPTIONS = {
  OVERVIEW: "OVERVIEW",
  ANALYTICS: "ANALYTICS",
};

const PortalLayout: React.FC<{
  children?: React.ReactNode;
}> = (props) => {
  const { children } = props;
  const financialProfile = useAppSelector(selectUserFinancialProfile);
  const linkedBankAccounts = financialProfile.link;
  const [currentTrigger, setCurrentTrigger] = React.useState<string>(
    OPTIONS.OVERVIEW
  );

  return (
    <Layout>
      {/* <div className="md:hidden"></div> */}
      <div className="flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Financial Portal{" "}
              <span className="ml-4 text-sm">
                {" "}
                ({linkedBankAccounts.length}) Linked Accounts
              </span>
            </h2>
          </div>
          {children}
        </div>
      </div>
    </Layout>
  );
};

export { PortalLayout, OPTIONS };
