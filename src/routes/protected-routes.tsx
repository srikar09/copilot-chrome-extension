import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { persistentStorage } from "src/lib/persistent-storage";
import { validations } from "src/lib/validations";
import { constants } from "src/constant/constants";
import { routes } from "src/constant/routes";

const ProtectedRoute: React.FC<{
  redirectPath?: string;
  children?: JSX.Element;
}> = ({ redirectPath = routes.AUTHENTICATION, children }) => {
  const token = persistentStorage.getItem(constants.JWT_TOKEN_KEY);
  if (!validations.validateJwt(token)) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export { ProtectedRoute };
