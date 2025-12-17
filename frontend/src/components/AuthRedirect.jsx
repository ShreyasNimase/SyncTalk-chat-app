import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const AuthRedirect = ({ children }) => {
  return isAuthenticated() ? <Navigate to="/chats" replace /> : children;
};

export default AuthRedirect;
