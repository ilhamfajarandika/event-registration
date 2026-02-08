import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const raw = localStorage.getItem("h2h_auth");
  const auth = raw ? JSON.parse(raw) : null;

  if (!auth?.isLoggedIn) {
    return <Navigate to="/auth?mode=signin" replace />;
  }

  return children;
}
