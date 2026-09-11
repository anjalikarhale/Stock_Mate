const API_URL = import.meta.env.VITE_API_URL;

export const api = {
  register: async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },

  login: async (data: {
    email: string;
    password: string;
  }) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },

  getMe: async () => {
    const token = localStorage.getItem("stockmate_token");

    const response = await fetch(`${API_URL}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.json();
  },
};

console.log("StockMate API loaded:", api);