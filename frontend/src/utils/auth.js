import { jwtDecode } from "jwt-decode";

export const getUser = () => {
  const stored = localStorage.getItem("userInfo");
  if (!stored) return null;

  const user = JSON.parse(stored);

  try {
    const decoded = jwtDecode(user.token);
    
    if (decoded.exp * 1000 < Date.now()) {
      return user; 
    }

    return user;
  } catch (err) {
    console.error("JWT decode error:", err);
    localStorage.removeItem("userInfo");
    return null;
  }
};

export const isAuthenticated = () => !!localStorage.getItem("userInfo");
