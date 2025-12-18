import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { getUser } from "../utils/auth";

const AuthWatcher = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Do NOT run watcher on auth pages
    if (location.pathname.startsWith("/auth")) return;

    const interval = setInterval(() => {
      const user = getUser();

      // Only logout if user WAS logged in
      if (!user) {
        toast.warning("Session expired. Please login again.");
        navigate("/auth/login", { replace: true });
        clearInterval(interval);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [navigate, location.pathname]);

  return null;
};

export default AuthWatcher;
