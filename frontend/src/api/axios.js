import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/user/refresh",
          {},
          { withCredentials: true }
        );

        const user = JSON.parse(localStorage.getItem("userInfo"));
        user.token = res.data.token;
        localStorage.setItem("userInfo", JSON.stringify(user));

        error.config.headers.Authorization = `Bearer ${res.data.token}`;
        return axios(error.config); // retry request
      } catch {
        localStorage.removeItem("userInfo");
        window.location.href = "/auth/login";
      }
    }

    return Promise.reject(error);
  }
);

export default api;
