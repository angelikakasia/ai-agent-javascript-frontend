import { apiRequest } from "./api";

/*  Helpers  */

const decodeToken = (token) => {
  try {
    const base64 = token.split(".")[1];
    const normalized = base64.replace(/-/g, "+").replace(/_/g, "/");
    const payload = JSON.parse(atob(normalized));
    return payload.payload;
  } catch {
    console.error("Invalid token");
    return null;
  }
};


/*  Auth  */

export const signUp = async (formData) => {
  const data = await apiRequest("/auth/sign-up", "POST", formData);

  localStorage.setItem("token", data.token);

  return decodeToken(data.token);
};

export const signIn = async (formData) => {
  const data = await apiRequest("/auth/sign-in", "POST", formData);

  localStorage.setItem("token", data.token);

  return decodeToken(data.token);
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getCurrentUser = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;
  return decodeToken(token);
};
