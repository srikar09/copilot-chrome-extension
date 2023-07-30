import { routes } from "src/constant/routes";
import { LoginPage } from "src/pages/authentication/login";
import { ProtectedRoute } from "./protected-routes";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ErrorFallbackPage } from "src/pages/boundary/error-boundary";
import { Chat } from "src/components/chat";
import { ChatPage } from "src/pages/chat/chat";
import FinancialPortal from "src/pages/financialprotal/financialportal";

function GlobalRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.AUTHENTICATION} element={<LoginPage />} />
        <Route path={"/"} element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path={routes.HOME} element={<ChatPage />} />
          <Route path={routes.FINANCIALPORTAL} element={<FinancialPortal />} />
        </Route>
        {/* 
          If no other route is hit, this will be the default page shown
          ref: https://blog.diogomartino.com/index.php/2021/11/22/how-to-create-a-fallback-route-in-react-router-6/
        */}
        <Route path="*" element={<ErrorFallbackPage />} />
        {/* <Route path={routes.LANDING} element={<LandingPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export { GlobalRoutes };
