import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { isAuthenticated } from "../utils/auth";

let shown = false;

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    if (!shown) {
      toast.warning("Please login to continue");
      shown = true;
    }
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
