import { apiRequest } from "./api";

/* ---------- Helper ---------- */

const decodeToken = (token) => {
  try {
    const base64 = token.split(".")[1];
    const normalized = base64.replace(/-/g, "+").replace(/_/g, "/");
    const payload = JSON.parse(atob(normalized));
    return payload;
  } catch {
    return null;
  }
};

/* ---------- Auth ---------- */

export const signUp = async (formData) => {
  const data = await apiRequest("/auth/sign-up", "POST", formData);

  if (!data || data.err || !data.token) {
    throw new Error(data?.err || "Signup failed");
  }

  localStorage.setItem("token", data.token);

  return decodeToken(data.token);
};

export const signIn = async (formData) => {
  const data = await apiRequest("/auth/sign-in", "POST", formData);

  if (!data || data.err || !data.token) {
    throw new Error(data?.err || "Signin failed");
  }

  localStorage.setItem("token", data.token);

  return decodeToken(data.token);
};

export const logout = () => {
  localStorage.removeItem("token");
};
