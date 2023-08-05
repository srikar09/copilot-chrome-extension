import "./App.css";
import { ErrorFallbackPage } from "./pages/boundary/error-boundary";
import { GlobalRoutes } from "./routes/global";
import { ErrorBoundary } from "react-error-boundary";
import { constants } from "./constant/constants";
import { persistentStorage } from "./lib/persistent-storage";
import { validations } from "./lib/validations";
import { authenticationActions } from "./redux/slice/authentication/AuthenticationSlice";
import { useAppDispatch } from "./redux/store/hooks";

function App() {
  const dispatch = useAppDispatch();
  if (persistentStorage.getItem(constants.JWT_TOKEN_KEY)) {
    const token = persistentStorage.getItem(constants.JWT_TOKEN_KEY);
    const userID = persistentStorage.getItem(constants.USER_ID_KEY);
    const userAccount = persistentStorage.getItem(constants.USER_ACCOUNT_KEY);
    const userProfile = persistentStorage.getItem(constants.USER_PROFILE_KEY);
    const financialProfile = persistentStorage.getItem(
      constants.USER_FINANCIAL_PROFILE_KEY
    );

    const financialContext = persistentStorage.getItem(
      constants.USER_FINANCIAL_CONTEXT_KEY
    );

    if (validations.validateJwt(token) && validations.validateStr(userID)) {
      persistentStorage.setItem(constants.JWT_TOKEN_KEY, token);
      const payload = {
        authenticated: true,
        userID: userID,
        userAccount: userAccount,
        userProfile: userProfile,
        userFinancialProfile: financialProfile,
        userFinancialContext: financialContext,
      };
      dispatch(authenticationActions.authenticateUser(payload));
    }
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackPage}>
      <div className="flex min-h-screen flex-col min-w-full  bg-background font-sans antialiased">
        <GlobalRoutes />
      </div>
    </ErrorBoundary>
  );
}

export default App;
