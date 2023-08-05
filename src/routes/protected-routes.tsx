import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { persistentStorage } from "src/lib/persistent-storage";
import { validations } from "src/lib/validations";
import { constants } from "src/constant/constants";
import { routes } from "src/constant/routes";

/**
 * ProtectedRoute component to handle protected routes in the application.
 * @param {Object} props - The props for the ProtectedRoute component.
 * @param {string} [props.redirectPath=routes.AUTHENTICATION] - The path to redirect if the user is not authenticated.
 * @param {JSX.Element} [props.children] - The child elements to be rendered within the ProtectedRoute component.
 * @returns {JSX.Element} - The JSX element representing the ProtectedRoute component.
 */
const ProtectedRoute: React.FC<{
  redirectPath?: string;
  children?: JSX.Element;
}> = ({ redirectPath = routes.AUTHENTICATION, children }) => {
  // Check if the JWT token is present and valid
  const token = persistentStorage.getItem(constants.JWT_TOKEN_KEY);
  if (!validations.validateJwt(token)) {
    // If the token is not valid or missing, redirect to the specified path
    return <Navigate to={redirectPath} replace />;
  }

  // If the token is valid, render the child elements or the nested routes within the ProtectedRoute
  return children ? children : <Outlet />;
};

export { ProtectedRoute };
