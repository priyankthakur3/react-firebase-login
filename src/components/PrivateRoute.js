import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ children, reddirectTo, reverse }) {
  const { currentUser } = useAuth();
  if (reverse) return currentUser ? <Navigate to={reddirectTo} /> : children;
  return currentUser ? children : <Navigate to={reddirectTo} />;
}
