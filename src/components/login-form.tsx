import { cn } from "src/lib/utils";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

import { AuthenticateRequest } from "src/types/requests/AuthenticateUserRequest";
import { useAuthenticatedUserMutation } from "src/redux/mutations/AuthenticateUserMutation";
import { persistentStorage } from "src/lib/persistent-storage";
import { constants } from "src/constant/constants";
import { routes } from "src/constant/routes";
import { Label } from "@radix-ui/react-context-menu";
import { buttonVariants } from "./ui/button";
import { toast } from "./ui/use-toast";
import { Input } from "./ui/input";
import { Spinner } from "./spinner";
import { useGetFinancialContextQuery } from "src/redux/queries/GetFinancialContext";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
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

  async function onSubmit(data: { email: string; password: string }) {
    setIsLoading(true);

    const formattedRequest = new AuthenticateRequest({
      Username: data.email.trim(),
      Password: data.password.trim(),
    });

    const record = await authenticateUser(formattedRequest).unwrap();
    const { user_account } = record;
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
    persistentStorage.setItem(
      constants.USER_FINANCIAL_PROFILE_KEY,
      record.user_financial_profile
    );

    navigate(routes.HOME);

    setIsLoading(false);

    return toast({
      title: "Successfully logged in!",
      description: "You have been successfully logged in!",
    });
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
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
            {isLoading && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
            Sign In with Email
          </button>
        </div>
      </form>
    </div>
  );
}
