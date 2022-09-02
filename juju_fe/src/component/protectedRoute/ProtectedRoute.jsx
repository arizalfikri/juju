import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLogin = localStorage.getItem("accessToken");
  if (!isLogin) return <Navigate to={"/login"} />;
  return children;
}
