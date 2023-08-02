import { persistentStorage } from "src/lib/persistent-storage";
import { Button } from "./ui/button";
import { Navigate, useNavigate } from "react-router";
import { routes } from "src/constant/routes";
import { cn } from "src/lib/utils";

/**
 * This is defining a functional component called `LogoutButton` that takes in a single argument
 * `props` of type `LogoutButtonProps`. The `LogoutButtonProps` type is an interface that defines the
 * expected shape of the props object that will be passed to the component. The function returns JSX
 * that will be rendered as an `IonButton` component with the specified props and an `onClick` event
 * handler that calls the `logoutHandler` function.
 *
 * @param {LogoutButtonProps} props
 * @returns {React.ReactElement}
 *  */
const LogoutButton: React.FC<{
  active: boolean;
}> = ({ active }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    // We need to wipe the local storage when the component initially mounts
    // because we don't want to persist the user's data if they are not logged in
    // and they refresh the page
    persistentStorage.wipeLocalStorage();
    // redirect to login page
    navigate(routes.AUTHENTICATION);
  };

  return (
    <Button
      onClick={logoutHandler}
      className="ml-3 border-1 text-white bg-red-700 font-bold items-center justify-center"
    >
      <a href="#" className={cn(active ? "text-white" : "")}>
        Sign out
      </a>
    </Button>
  );
};

export { LogoutButton };
