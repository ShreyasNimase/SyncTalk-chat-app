import { useNavigate } from "react-router-dom";
import takifyImg from "../assets/Talkify_pic.png";// your chat illustration pic

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50">
      <img
        src={takifyImg}
        alt="Chat App"
        className="w-64 sm:w-80 md:w-96 mb-6"
      />

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
        Welcome to Takify Chat App
      </h1>

      <p className="mt-2 text-gray-600 max-w-md">
        Chat instantly with your friends. Simple, fast, secure messaging.
      </p>

      <button
        onClick={() => navigate("/auth/login")}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition"
      >
        Get Started
      </button>
    </div>
  );
}

export default Home;
