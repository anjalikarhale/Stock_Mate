import { useState } from "react";
import { api } from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    try {
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
      } else {
        setError(result.message || "Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Unable to connect to StockMate server");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl"
      >
        <h1 className="mb-2 text-3xl font-bold text-white">
          Welcome to StockMate
        </h1>

        <p className="mb-6 text-slate-400">
          Login to continue your learning journey.
        </p>

        {error && (
          <div className="mb-4 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-emerald-500"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none focus:border-emerald-500"
          required
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-emerald-600 p-3 font-semibold text-white transition hover:bg-emerald-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;