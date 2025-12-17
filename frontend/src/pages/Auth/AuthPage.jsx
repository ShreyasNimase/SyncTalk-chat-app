import { Outlet, NavLink } from "react-router-dom";
import takifyImg from "../../assets/Talkify_pic.png";

export default function AuthPage() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col lg:flex-row items-center justify-center lg:justify-center px-6 lg:px-20 py-6 lg:py-0">
      {/* LEFT SECTION */}
      <div className="flex flex-col items-center text-center lg:text-left flex-1">
        {/* <div className="hidden lg:flex flex-col items-center text-center lg:text-left flex-1"> */}
        <img
          src={takifyImg}
          alt="Chat Illustration"
          className="hidden lg:block w-full max-w-lg xl:max-w-xl mx-auto mb-6"
        />
        <h1 className="text-5xl sm:text-6xl font-bold text-blue-600">
          Talkify
        </h1>
        <p className="mt-2 text-gray-600 text-lg sm:text-xl">
          Connect instantly. Chat effortlessly.
        </p>
      </div>

      {/* RIGHT: AUTH CARD */}
      <div className="flex-1 flex justify-center items-center mt-10 lg:mt-0">
        <div className="bg-white shadow-xl rounded-xl p-6 sm:p-8 w-full max-w-sm">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Chat App
          </h1>

          <div className="flex justify-center gap-6 mb-6 text-blue-600 font-semibold text-lg">
            <NavLink
              to="login"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-blue-600 pb-1" : "text-gray-500"
              }
            >
              Login
            </NavLink>

            <NavLink
              to="signup"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-blue-600 pb-1" : "text-gray-500"
              }
            >
              Signup
            </NavLink>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
}
