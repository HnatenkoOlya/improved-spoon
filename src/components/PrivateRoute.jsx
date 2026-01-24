import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default PrivateRoute;
