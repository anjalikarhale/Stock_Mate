function Dashboard() {
  return (
    <div>
      <div className="mb-8">
        <p className="mb-2 text-sm text-emerald-400">
          GOOD MORNING 👋
        </p>

        <h1 className="text-3xl font-bold">
          Welcome back to StockMate
        </h1>

        <p className="mt-2 text-slate-400">
          Learn the market. Practice trading. Build your confidence.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">Virtual Balance</p>
          <h2 className="mt-2 text-2xl font-bold">₹1,00,000</h2>
          <p className="mt-2 text-sm text-emerald-400">Available to trade</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">Portfolio Value</p>
          <h2 className="mt-2 text-2xl font-bold">₹1,00,000</h2>
          <p className="mt-2 text-sm text-slate-400">No positions yet</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">Learning XP</p>
          <h2 className="mt-2 text-2xl font-bold">0 XP</h2>
          <p className="mt-2 text-emerald-400">Level 1</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
          <p className="text-sm text-slate-400">Learning Streak</p>
          <h2 className="mt-2 text-2xl font-bold">🔥 0 Days</h2>
          <p className="mt-2 text-slate-400">Start learning today</p>
        </div>
      </div>

      {/* Continue Learning */}
      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm font-medium text-emerald-400">
          CONTINUE LEARNING
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          Stock Market Basics
        </h2>

        <p className="mt-2 text-slate-400">
          Start your journey by understanding how the stock market works.
        </p>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full w-0 rounded-full bg-emerald-500" />
        </div>

        <p className="mt-2 text-sm text-slate-500">
          0% completed
        </p>
      </div>
    </div>
  );
}

export default Dashboard;