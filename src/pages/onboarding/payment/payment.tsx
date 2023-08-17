import { Link } from "react-router-dom";
import { Logo } from "src/components/Logo";
import { Layout } from "src/layouts/layout";
import {
  selectCurrentUserAccount,
  selectUserFinancialProfile,
} from "src/redux/slice/authentication/AuthenticationSelector";
import { useAppSelector } from "src/redux/store/hooks";

export const PaymentPage = () => {
  const currentUserAccount = useAppSelector(selectCurrentUserAccount);
  const currentFinancialProfile = useAppSelector(selectUserFinancialProfile);

  const { stripeCustomerId } = currentFinancialProfile;
  const { email } = currentUserAccount;
  let targetUrl = "";
  if (stripeCustomerId && email) {
    targetUrl = `https://checkout.melodiy.co/b/8wMbMm0kdecY3hScMP?prefilled_email=${email}&client_reference_id=${stripeCustomerId}`;
  } else if (email) {
    targetUrl = `https://checkout.melodiy.co/b/8wMbMm0kdecY3hScMP?prefilled_email=${email}`;
  } else {
    targetUrl = `https://checkout.melodiy.co/b/8wMbMm0kdecY3hScMP`;
  }

  return (
    <div className="p-10 lg:p-20">
      <Logo />
      <section className="bg-white dark:bg-gray-900 container h-screen flex-col items-center justify-center">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-16 lg:py-16 lg:px-6">
          <div className="text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              How your free trial works
            </h2>
            <div className="grid gap-8 py-8 border-t border-gray-200 lg:grid-cols-1 dark:border-gray-700 sm:grid-cols-2">
              <div className="flex">
                <div className="flex justify-center items-center mr-4 w-12 h-12 bg-white rounded shadow shrink-0 dark:bg-gray-700">
                  <svg
                    className="w-7 h-7 text-gray-900 dark:text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                    Today
                  </h3>
                  <p className="font-light text-gray-500 dark:text-gray-200">
                    Connect all your accounts and ask as many questions as you want. Start talking to your financial co-pilot today !
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex justify-center items-center mr-4 w-12 h-12 bg-white rounded shadow shrink-0 dark:bg-gray-700">
                  <svg
                    className="w-7 h-7 text-gray-900 dark:text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                    In 3 days
                  </h3>
                  <p className="font-light text-gray-500 dark:text-gray-200">
                    Your subscription starts in 3 days unless you have cancelled during the trial period
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex justify-center items-center mr-4 w-12 h-12 bg-white rounded shadow shrink-0 dark:bg-gray-700">
                  <svg
                    className="w-7 h-7 text-gray-900 dark:text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                    You are in control
                  </h3>
                  <p className="font-light text-gray-500 dark:text-gray-200">
                    Be a part of melodiy for however long you want. Cancel anytime you want in just 15 seconds !
                  </p>
                </div>
              </div>
              <div className="flex"></div>
            </div>
          </div>
          <div className="flex flex-col p-6 bg-white rounded-lg shadow xl:p-8 dark:bg-gray-800">
            <div className="justify-between items-center md:flex">
              <div>
                <div className="pt-5">
                  <div className="border rounded-2xl p-4 flex justify-center max-w-[200px] bg-black text-white">
                    <Link to={`${targetUrl}`}>
                      <p className="text-2xl font-bold rounded-2xl">
                        Start your free trial!{" "}
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="flex items-center md:hidden">
                    <div className="mr-1 text-xl font-extrabold text-gray-900 lg:text-5xl dark:text-white">
                      $7.99
                    </div>
                    <span className="text-gray-500 dark:text-gray-200">
                      /month
                    </span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="text-2xl font-extrabold text-gray-900 lg:text-5xl dark:text-white">
                  $7.99
                </div>
                <span className="text-gray-500 dark:text-gray-200">
                  per month
                </span>
              </div>
            </div>

            <a
              href="#"
              className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-5 lg:my-8 dark:focus:ring-primary-900"
            >
              Upgrade now
            </a>
            <div className="justify-between space-y-4 sm:space-y-0 sm:flex">
              <ul role="list" className="space-y-4">
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  <span className="font-light leading-tight text-gray-500 dark:text-gray-200">
                    Tailored Recommendations
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  <span className="font-light leading-tight text-gray-500 dark:text-gray-200">
                    Smart Spending Strategies
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  <span className="font-light leading-tight text-gray-500 dark:text-gray-200">
                    Optimized Investments
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  <span className="font-light leading-tight text-gray-500 dark:text-gray-200">
                    Effective Debt Management
                  </span>
                </li>
              </ul>

              <ul role="list" className="space-y-4">
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  <span className="font-light leading-tight text-gray-500 dark:text-gray-200">
                    Conversational Layer On Your Finances
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  <span className="font-light leading-tight text-gray-500 dark:text-gray-200">
                    Security & Privacy
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  <span className="font-light leading-tight text-gray-500 dark:text-gray-200">
                    Actionable Insights
                  </span>
                </li>
                <li className="flex space-x-2.5">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  <span className="font-light leading-tight text-gray-500 dark:text-gray-200">
                    AI Copilot
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
