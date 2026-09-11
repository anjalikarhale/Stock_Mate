const API_URL = import.meta.env.VITE_API_URL;

export const getCurrentUser = async () => {
  const token = localStorage.getItem("stockmate_token");

  const response = await fetch(`${API_URL}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};