//Importing required packages and components
import { FC, ReactNode } from "react";
import { MainNav } from "src/components/main-nav";
import { Search } from "src/components/search";
import TeamSwitcher from "src/components/team-switcher";
import { Layout } from "src/layouts/layout";
import { selectUserFinancialProfile } from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";

/**
 * The InsightsPortalLayout component is a functional component that wraps the content of the insights portal in a layout
 * It is responsible for rendering the main navigation, team switcher, and search bar
 *
 * @param props - An object containing the children props to be rendered within this layout
 * @returns The InsightsPortalLayout component
 */
const InsightsPortalLayout: FC<{ children?: ReactNode }> = ({ children }) => {
  // useSelector hook to extract data from Redux Store, getting financialProfile from the authentication selector
  const financialProfile = useAppSelector(selectUserFinancialProfile);
  const linkedBankAccounts = financialProfile.link;

  return (
    <Layout>
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
        <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>
      </div>
    </Layout>
  );
};

export { InsightsPortalLayout };
