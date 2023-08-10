import { useForm } from "react-hook-form";
import { cn } from "src/lib/utils";
import { buttonVariants } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "./ui/use-toast";
import { ResetPasswordRequest } from "src/types/request-response/reset-password";
import { useResetPasswordMutation } from "src/redux/mutations/reset-password";
import { persistentStorage } from "src/lib/persistent-storage";
import { constants } from "src/constant/constants";
import { routes } from "src/constant/routes";

interface ResetPasswordFormProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function ResetPasswordForm({
  className,
  ...props
}: ResetPasswordFormProps) {
  const [resetPassword] = useResetPasswordMutation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get("token");
  const navigate = useNavigate();

  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: { password: string; confirmPassword: string }) {
    if (data.password !== data.confirmPassword) {
      toast({
        title: `Passwords do not match`,
      });

      return;
    } else {
      try {
        const response = await resetPassword({
          password: data.password,
          token: token!,
        }).unwrap();
        if (response.err) {
          throw new Error(response.err);
        }

        navigate(routes.AUTHENTICATION);

        toast({
          title: `Password reset successfully`,
        });
      } catch (err) {
        toast({
          title: `Failed to reset password. Please try again later. err: ${err}`,
        });
      }
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid sm:gap-6 md:gap-8 lg:gap-10">
          <div className="grid gap-1">
            <Label>Password</Label>
            <Input
              id="password"
              placeholder="******"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              {...register("password")}
            />
            {errors?.password && (
              <p className="px-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="grid gap-1">
            <Label>Confirm Password</Label>
            <Input
              id="confirmPassword"
              placeholder="******"
              type="password"
              autoCapitalize="none"
              autoComplete="confirmPassword"
              autoCorrect="off"
              disabled={isLoading}
              {...register("confirmPassword")}
            />
            {errors?.confirmPassword && (
              <p className="px-1 text-xs text-red-600">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button className={cn(buttonVariants())} disabled={isLoading}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
