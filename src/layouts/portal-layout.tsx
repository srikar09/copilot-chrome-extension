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
  option: keyof typeof OPTIONS;
}> = (props) => {
  const { children, option } = props;
  const financialProfile = useAppSelector(selectUserFinancialProfile);
  const linkedBankAccounts = financialProfile.link;

  return (
    <Layout>
      <div className="md:hidden"></div>
      <div className="hidden flex-col md:flex">
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
          <Tabs defaultValue={OPTIONS.OVERVIEW} className="space-y-4">
            <TabsList className="flex flex-1 gap-3">
              <TabsTrigger
                value={OPTIONS.OVERVIEW}
                className="rounded-2xl border px-6 py-2 font-bold"
              >
                Summary
              </TabsTrigger>
              <TabsTrigger
                value={OPTIONS.ANALYTICS}
                className="rounded-2xl border px-6 py-2 font-bold"
              >
                Analytics
              </TabsTrigger>
            </TabsList>
            <TabsContent value={option} className="space-y-4">
              {children}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export { PortalLayout };
