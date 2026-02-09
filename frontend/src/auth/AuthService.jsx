import api from "../api/axios";

export const register = async (data) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};

export const login = async (data) => {
  const res = await api.post("/auth/login", data);

  console.log("LOGIN RESPONSE:", res.data);

  localStorage.setItem("token", res.data.token);
  localStorage.setItem("user", JSON.stringify(res.data.user));

  return res.data;
};

export const logout = async (data) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
