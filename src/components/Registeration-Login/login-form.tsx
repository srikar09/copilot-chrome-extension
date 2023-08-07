import { cn } from "src/lib/utils";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useAuthenticatedUserMutation } from "src/redux/mutations/authenticate-user";
import { persistentStorage } from "src/lib/persistent-storage";
import { constants } from "src/constant/constants";
import { routes } from "src/constant/routes";
import { Label } from "@radix-ui/react-context-menu";
import { buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import { Spinner } from "../spinner";
import { MIXPANEL_EVENTS, mixPanelClient } from "src/lib/mixpanel";
import { AuthenticateRequest } from "src/types/request-response/authenticate-user";
import HappyToast from "../Toast/HappyToast";
import ToastWarning from "../Toast/ToastWarning";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [toast, setToast] = useState<React.ReactElement | null>(); 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);
  const searchParams = useSearchParams();
  const [authenticateUser] = useAuthenticatedUserMutation();
  const navigate = useNavigate();
  const history = useNavigate();

  const navigateToRegisteration = () => {
    history(`${routes.REGISTRATION}`);
  }

  async function onSubmit(data: { email: string; password: string }) {
    setIsLoading(true);

    const formattedRequest = new AuthenticateRequest({
      Username: data.email.trim(),
      Password: data.password.trim(),
    });
    try {
      const record = await authenticateUser(formattedRequest).unwrap();
      const { user_account, user_financial_profile } = record;
      const { profile, financialContext } = user_financial_profile;
      // emit login mixpanel event
      mixPanelClient.trackEvent(MIXPANEL_EVENTS.LOGIN);

      // Set the userID and userProfileID in browserCache
      persistentStorage.setItem(constants.JWT_TOKEN_KEY, record.token);
      persistentStorage.setItem(
        constants.USER_ID_KEY,
        record.user_account.userAccountID
      );
      persistentStorage.setItem(
        constants.USER_PROFILE_ID_KEY,
        record.user_profile.id
      );
      persistentStorage.setItem(constants.USER_ACCOUNT_KEY, record.user_account);
      persistentStorage.setItem(constants.USER_PROFILE_KEY, record.user_profile);
      persistentStorage.setItem(constants.USER_FINANCIAL_PROFILE_KEY, profile);
      persistentStorage.setItem(
        constants.USER_FINANCIAL_CONTEXT_KEY,
        financialContext
      );

      navigate(routes.HOME);

      setIsLoading(false);
      setToast( <HappyToast 
        show={true} 
        message={" Login sucessful!"}
        autoHideDuration={3000}
      />)
    } catch (err) {
      setIsLoading(false);
      setToast( <ToastWarning 
        show={true} 
        message={" Wrong email / password combination. Please try again"}
        autoHideDuration={3000}
      />)
    }
    
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {toast}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid sm:gap-6 md:gap-8 lg:gap-10">
          <div className="grid gap-1">
            <Label>Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
              {...register("email")}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="grid gap-1">
            <Label>Password</Label>
            <Input
              id="password"
              placeholder="****"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
              {...register("password")}
            />
            {errors?.password && (
              <p className="px-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            Sign In with Email
          </button>
        </div>
      </form>
       <button onClick={() => {
        navigateToRegisteration()
      }} disabled={isLoading}>
          {isLoading && <Spinner className="mr-2 h-4 w-4 animate-spin"/>}
          Create a new account
        </button>
    </div>
  );
}
