export const getUser = () => {
  const user = localStorage.getItem("userInfo");
  return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => !!getUser();
