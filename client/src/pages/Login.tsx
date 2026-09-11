import { useState } from "react";
import { api } from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await api.login({
      email,
      password,
    });

    if (result.token) {
      localStorage.setItem("stockmate_token", result.token);
      localStorage.setItem(
        "stockmate_user",
        JSON.stringify(result.user)
      );

      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-2xl bg-slate-900 p-8 shadow-xl"
      >
        <h1 className="mb-2 text-3xl font-bold text-white">
          Welcome to StockMate
        </h1>

        <p className="mb-6 text-slate-400">
          Login to continue your learning journey.
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none"
          required
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;