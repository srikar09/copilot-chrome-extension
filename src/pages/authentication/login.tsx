import { RocketIcon } from "@radix-ui/react-icons";
import { UserAuthForm } from "src/components/login-form";
import { Layout } from "src/layouts/layout";

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <div className="pt-[20%] sm:mx-auto sm:w-full sm:max-w-md">
        <RocketIcon className="mx-auto h-10 w-auto" />
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <UserAuthForm />
          <div>
            <div className="relative mt-10">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { LoginPage };
