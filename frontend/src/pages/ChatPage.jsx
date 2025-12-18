import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUser } from "../utils/auth";

function ChatPage() {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    toast.success("Logged out");

    setTimeout(() => navigate("/auth/login"), 500);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow p-4 text-xl font-semibold">Chat App</div>

      <div className="flex flex-col items-center mt-10">
        <img
          src={user.pic}
          alt="profile_pic"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />

        <h1 className="text-2xl font-bold mb-1">Welcome, {user.name}</h1>

        <p className="text-gray-500 mb-6">
          Start chatting with your friends 🚀
        </p>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ChatPage;
