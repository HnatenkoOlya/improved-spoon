import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";
import { Navigate } from "react-router";

const PublicRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (isAuth) {
    return <Navigate to="/profile" replace />;
  }
  return children;
};
export default PublicRoute;
