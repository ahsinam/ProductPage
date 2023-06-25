import React from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "../../redux/store";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const userData = useAppSelector((state) => state.userData);

  if (!userData.user.length) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
