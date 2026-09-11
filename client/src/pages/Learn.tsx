import {
  BookOpen,
  Lock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const worlds = [
  {
    number: 1,
    title: "Stock Market Basics",
    description:
      "Learn what stocks are, how markets work, and the basic terms every investor should know.",
    lessons: 8,
    status: "available",
  },
  {
    number: 2,
    title: "Smart Investing",
    description:
      "Understand investing, diversification, risk, returns, mutual funds, ETFs and more.",
    lessons: 10,
    status: "locked",
  },
  {
    number: 3,
    title: "Fundamental Analysis",
    description:
      "Learn how to analyze companies using financial statements, ratios and valuation.",
    lessons: 12,
    status: "locked",
  },
  {
    number: 4,
    title: "Technical Analysis",
    description:
      "Master charts, candlesticks, trends, indicators and price action.",
    lessons: 12,
    status: "locked",
  },
];

function Learn() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-medium text-emerald-400">
          YOUR LEARNING JOURNEY
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Learn the Stock Market
        </h1>

        <p className="mt-2 max-w-2xl text-slate-400">
          Complete interactive worlds, earn XP, unlock achievements,
          and build the confidence to understand the real market.
        </p>
      </div>

      {/* Progress */}
      <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">
              Overall Progress
            </p>

            <h2 className="mt-1 text-2xl font-bold">
              Level 1
            </h2>
          </div>

          <div className="text-right">
            <p className="text-2xl font-bold text-emerald-400">
              0%
            </p>

            <p className="text-sm text-slate-500">
              0 / 42 lessons
            </p>
          </div>
        </div>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full w-0 rounded-full bg-emerald-500" />
        </div>
      </div>

      {/* Worlds */}
      <div>
        <div className="mb-5 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-emerald-400" />

          <h2 className="text-xl font-semibold">
            Learning Worlds
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {worlds.map((world) => {
            const isLocked = world.status === "locked";

            return (
              <div
                key={world.number}
                className={`rounded-2xl border p-6 transition ${
                  isLocked
                    ? "border-slate-800 bg-slate-900/60"
                    : "border-emerald-500/30 bg-slate-900 hover:border-emerald-500/60"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-lg font-bold text-emerald-400">
                    {world.number}
                  </div>

                  {isLocked ? (
                    <Lock className="h-5 w-5 text-slate-600" />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                  )}
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {world.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {world.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    {world.lessons} lessons
                  </span>

                  <button
                    disabled={isLocked}
                    className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                      isLocked
                        ? "cursor-not-allowed bg-slate-800 text-slate-600"
                        : "bg-emerald-600 text-white hover:bg-emerald-500"
                    }`}
                  >
                    {isLocked ? "Locked" : "Start World"}

                    {!isLocked && (
                      <ArrowRight className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Learn;