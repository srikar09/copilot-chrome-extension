//Importing required packages and components
import { FC, ReactNode } from "react";
import { Nav } from "src/components/nav";
import { cn } from "src/lib/utils";
import { selectAuthenticated } from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";

/**
 * The Layout component is a functional component that provides a general layout to the application.
 * This layout contains the navigation bar and the provided children components.
 * The navigation bar is displayed only if the user is authenticated.
 *
 * @param props - An object containing the children components to be rendered within this layout and an optional className.
 * @returns The Layout component
 */
const Layout: FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  // useSelector hook to extract data from Redux Store, checking if the user is authenticated from the authentication selector
  const isAuthenticated = useAppSelector(selectAuthenticated);

  return (
    <div>
      {isAuthenticated && <Nav />}
      <div
        className={cn(
          "w-screen min-h-full min-w-full p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export { Layout };
