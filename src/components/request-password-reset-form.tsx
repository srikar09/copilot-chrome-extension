import { useState } from "react";
import { useForm } from "react-hook-form";
import { cn } from "src/lib/utils";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { buttonVariants } from "./ui/button";
import { useCheckEmailExistsMutation } from "src/redux/mutations/check-email-exists";
import { useToast } from "./ui/use-toast";
import { useRequestPasswordChangeMutation } from "src/redux/mutations/request-password-change";
import { RequestPasswordResetRequest } from "../types/request-response/initiate-password-reset";

interface RequestPasswordResetFormProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function RequestPasswordResetForm({
  className,
  ...props
}: RequestPasswordResetFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const { toast } = useToast();
  const [checkEmailExists] = useCheckEmailExistsMutation();
  const [requestPasswordReset] = useRequestPasswordChangeMutation();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  async function onSubmit(data: { email: string }) {
    // check if the email exists
    // and if it does we send the password reset email
    try {
      const response = await checkEmailExists({ email: data.email }).unwrap();
      if (response.exists) {
        const passwordChangeResponse = await requestPasswordReset({
          email: data.email,
        }).unwrap();

        if (passwordChangeResponse.success) {
          toast({
            title: `Password reset email sent to ${data.email}`,
          });
        }
      } else {
        toast({
          title: `Email does not exist. Please provide a valid email`,
        });
      }
    } catch (err) {
      toast({
        title: `Failed to reset password. Please try again later. err: ${err}`,
      });
    }
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
              disabled={isLoading}
              {...register("email")}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
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
