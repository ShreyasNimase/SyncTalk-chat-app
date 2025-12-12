import { Outlet, NavLink } from "react-router-dom";

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-4">Chat App</h1>

        {/* Switch between Login & Signup */}
        <div className="flex justify-center gap-6 mb-6 text-blue-600 font-semibold">
          <NavLink
            to="login"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-blue-600 pb-1" : ""
            }
          >
            Login
          </NavLink>

          <NavLink
            to="signup"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-blue-600 pb-1" : ""
            }
          >
            Signup
          </NavLink>
        </div>

        {/* Renders Login OR Signup */}
        <Outlet />
      </div>
    </div>
  );
}
