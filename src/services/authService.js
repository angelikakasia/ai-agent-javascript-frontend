import { apiRequest } from "./api";

export const signUp = async (formData) => {
  const data = await apiRequest("/auth/sign-up", "POST", formData);

  if (data.err) throw new Error(data.err);

  localStorage.setItem("token", data.token);

  return JSON.parse(atob(data.token.split(".")[1])).payload;
};

export const signIn = async (formData) => {
  const data = await apiRequest("/auth/sign-in", "POST", formData);

  if (data.err) throw new Error(data.err);

  localStorage.setItem("token", data.token);

  return JSON.parse(atob(data.token.split(".")[1])).payload;
};
