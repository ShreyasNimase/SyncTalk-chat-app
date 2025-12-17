import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // loader
  const [error, setError] = useState(""); // error message

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/login",
        form,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      
      toast.success("Login successful");

      // Save token to localStorage
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      console.log(localStorage.getItem("userInfo"));

      // Redirect to chat page
      navigate("/chats");
    } catch (err) {
      console.error("Login Error:", err);
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // Auto-fill guest credentials
  const fillGuestCredentials = () => {
    setForm({
      email: "guest@example.com",
      password: "123456",
    });
    toast.info("Guest credentials filled");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      {error && <p className="bg-red-100 text-red-700 p-2 rounded">{error}</p>}

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
        required
      />

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          required
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-sm text-blue-600"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 rounded-lg transition text-white 
          ${loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"}
        `}
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      <button
        type="button"
        onClick={fillGuestCredentials}
        className="w-full bg-red-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition"
      >
        Get Guest User Credentials
      </button>
    </form>
  );
}
