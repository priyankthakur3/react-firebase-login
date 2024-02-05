import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ children, reddirectTo }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to={reddirectTo} />;
}
