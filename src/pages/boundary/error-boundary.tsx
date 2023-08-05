import react from "react";

/**
 * ErrorFallbackPage component to render the error page for internal server errors (500).
 * @returns {JSX.Element} - The JSX element representing the ErrorFallbackPage component.
 */
const ErrorFallbackPage: React.FC = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid-cols-2 gap-8 content-center py-8 px-4 mx-auto max-w-screen-xl md:grid lg:py-16 lg:px-6">
          <div className="self-center">
            <h1 className="mb-4 text-2xl font-bold text-primary-600 dark:text-primary-500">
              500 Internal Error
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 lg:mb-10 md:text-4xl dark:text-white">
              Whoops! An Error Occured.
            </p>
          </div>
          <img
            className="hidden mx-auto mb-4 md:flex"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/500/500.svg"
            alt="500 Server Error"
          />
        </div>
      </section>
    </div>
  );
};

export { ErrorFallbackPage };
