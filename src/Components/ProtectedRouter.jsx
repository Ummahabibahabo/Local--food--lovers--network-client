// import React, { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { AuthContext } from "./AuthContext";

import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user ? children : <Navigate to="/loginPage" replace />;
};

export default ProtectedRoute;
