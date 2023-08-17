import { Link } from "react-router-dom";
import { Logo, Logomark } from "src/components/Logo";
import { UserAuthForm } from "src/components/login-form";
import { RegistrationForm } from "src/components/registration-form";
import { TermsAndConditions } from "src/components/terms-and-conditions/terms-and-conditions";
import { buttonVariants } from "src/components/ui/button";
import { routes } from "src/constant/routes";
import { cn } from "src/lib/utils";

export default function RegistrationPage() {
  return (
    <>
      <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          to={routes.AUTHENTICATION}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            " hidden sm:block absolute right-4 top-4  text-xl font-bold "
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Logo className="text-bold text-2xl"></Logo>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Your AI powered financial sidekick .&rdquo;
              </p>
              <footer className="text-sm">Melodiy AI</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-2">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            {/** TODO: Remove This */}
            <RegistrationForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              <div className="flex flex-1 gap-2 justify-center items-center">
                <TermsAndConditions
                  title="Terms of Service"
                  disableCheckbox={true}
                  className="underline underline-offset-4 hover:text-primary"
                />
                <TermsAndConditions
                  title="Privacy Policy"
                  disableCheckbox={true}
                  className="underline underline-offset-4 hover:text-primary"
                />
              </div>
            </p>
            <Link
              to={routes.AUTHENTICATION}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-xl font-bold md:hidden lg:hidden"
              )}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
