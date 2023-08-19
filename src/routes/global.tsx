import { routes } from "src/constant/routes";
import { LoginPage } from "src/pages/authentication/login";
import { ProtectedRoute } from "./protected-routes";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ErrorFallbackPage } from "src/pages/boundary/error-boundary";
import { ChatPage } from "src/pages/chat/chat";
import InsightsPortal from "src/pages/financialportal/insights-portal";
import { FinancialAnalyticsPortal } from "src/pages/financialportal/financial-portal";
import { VerificationPage } from "src/pages/verification/verfication";
import { ResetPasswordPage } from "src/pages/password-reset/reset-password";
import { RequestPasswordResetPage } from "src/pages/password-reset/request-password-reset";
import RegistrationPage from "src/pages/registration/registration-page";
import { PaymentPage } from "src/pages/onboarding/payment/payment";
import { BankAccountConnectionPage } from "src/pages/onboarding/bankaccount-connection/bankaccount-connection";
import { EmailVerificationPage } from "src/pages/registration/EmailVerificationPage";
import { ConnectPlaidAccountButton } from "src/components/connect-plaid-account-button";

/**
 * Global Routes component to define the routing configuration for the application.
 * @returns {JSX.Element} - JSX element representing the routing configuration.
 */
function GlobalRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the authentication page */}
        <Route path={routes.AUTHENTICATION} element={<LoginPage />} />
        <Route path={routes.EMAILVERIFICATION} element={<EmailVerificationPage />} />
        <Route path={routes.PLAID} element={<ConnectPlaidAccountButton title={"Connect a new account"} />} />

        {/* Route for the verification page with a dynamic user ID */}
        <Route path="/verification/:userID" element={<VerificationPage />} />
        <Route
          path={routes.REQUEST_PASSWORD_CHANGE}
          element={<RequestPasswordResetPage />}
        />
        <Route path={routes.RESET_PASSWORD} element={<ResetPasswordPage />} />
        <Route path={routes.REGISTRATION} element={<RegistrationPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path={routes.PAYMENT} element={<PaymentPage />} />
          <Route
            path={routes.CONNECT_BANK_ACCOUNT}
            element={<BankAccountConnectionPage />}
          />

          {/* Default route when no specific route matches */}
          <Route path={"/"} element={<FinancialAnalyticsPortal />} />
          {/* Route for the chat page */}
          <Route path={routes.HOME} element={<ChatPage />} />
          {/* Route for the financial portal */}
          <Route
            path={routes.FINANCIALPORTAL}
            element={<FinancialAnalyticsPortal />}
          />
          {/* Route for the insights portal */}
          <Route path={routes.INSIGHTSPORTAL} element={<InsightsPortal />} />
        </Route>

        {/* 
          Fallback route - This will be shown if no other route matches
          ref: https://blog.diogomartino.com/index.php/2021/11/22/how-to-create-a-fallback-route-in-react-router-6/
        */}
        <Route path="*" element={<ErrorFallbackPage />} />
        {/* 
          Note: The commented-out route for LandingPage is not used in the current configuration.
          If needed, uncomment and provide the corresponding LandingPage component.
        */}
        {/* <Route path={routes.LANDING} element={<LandingPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export { GlobalRoutes };
