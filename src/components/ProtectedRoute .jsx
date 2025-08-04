import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAdminAuthenticated = localStorage.getItem("admin-auth") === "true";

  if (!isAdminAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
