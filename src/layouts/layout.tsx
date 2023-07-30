import { Nav } from "src/components/nav";
import { cn } from "src/lib/utils";
import { selectAuthenticated } from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";

const Layout: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
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
