const API_URL = import.meta.env.VITE_API_URL;

export const apiRequest = async (endpoint, method = "GET", body = null) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: body ? JSON.stringify(body) : null,
  });

  let data;

  try {
    data = await res.json();
  } catch {
    const text = await res.text();
    throw new Error(text || "Server returned non-JSON response");
  }

  if (!res.ok) {
    throw new Error(data?.error || "Request failed");
  }

  return data;
};
