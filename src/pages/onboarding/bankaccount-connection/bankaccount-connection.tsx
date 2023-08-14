import { ConnectPlaidAccountButton } from "src/components/connect-plaid-account-button";

export const BankAccountConnectionPage = () => {
  return (
    <div className="p-10 lg:p-20">
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-16 lg:py-16 lg:px-6 ">
          <div className="text-gray-500 sm:text-lg mb-6">
            <div className="grid grid-cols-2">
              <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 md:text-4xl dark:text-white">
                Connect Your financial Accounts
              </h2>
              <div>
                <ConnectPlaidAccountButton title={`Connect Account`} />
              </div>
            </div>
            <p className='font-light text-xl text-gray-700 dark:text-gray-700 mb-4'></p>
            <p className='font-light text-xl text-gray-700 dark:text-gray-700 mb-4'>Connect all your financial accounts ranging from bank accounts to brokerages and experience a streamlined, holistic view of your financial world</p>
            <div className="grid gap-6 lg:grid-cols-1 dark:border-gray-700 sm:grid-cols-2">
              <div className="flex">
                <div className="mr-4 shrink-0">
                  <svg
                    className="w-8 h-8 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"></path>
                  </svg>
                </div>
                <div>
                  <p className="mb-1 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                  Safety & Security
                  </p>
                  <p className="font-light text-gray-500 dark:text-gray-400">
                  Your financial security is our top priority. We employ state-of-the-art encryption and security measures to ensure that your data is protected and remains confidential.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 shrink-0">
                  <svg
                    className="w-8 h-8 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                  </svg>
                </div>
                <div>
                  <p className="mb-1 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Real-time Insights
                  </p>
                  <p className="font-light text-gray-500 dark:text-gray-400">
                    Rather than manually entering transactions or updating
                    balances, Melodiy can provide real-time insights based on
                    the latest data from your bank account. This ensures you
                    always have the most up-to-date view of your finances.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 shrink-0">
                  <svg
                    className="w-8 h-8 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"></path>
                  </svg>
                </div>
                <div>
                  <p className="mb-1 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Seamless Financial Planning
                  </p>
                  <p className="font-light text-gray-500 dark:text-gray-400">
                    Integrating your bank account allows Melodiy to factor in
                    your actual financial data when helping you set and achieve
                    financial goals, whether its saving for a big purchase,
                    investing for the future, or planning for retirement.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 shrink-0">
                  <svg
                    className="w-8 h-8 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"></path>
                  </svg>
                </div>
                <div>
                  <p className="mb-1 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    Proactive Alerts
                  </p>
                  <p className="font-light text-gray-500 dark:text-gray-400">
                    With a connected bank account, Melodiy can proactively alert
                    you to potential issues such as upcoming bills, low
                    balances, or unusual spending activity, helping you avoid
                    potential fees or financial pitfalls.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="mx-auto mb-4 sm:flex border rounded-2xl"
            src="https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            alt="table professor illustration"
          />
        </div>
      </section>
    </div>
  );
};
