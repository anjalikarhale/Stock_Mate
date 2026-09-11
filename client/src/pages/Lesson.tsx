import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Lesson() {
    const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-medium text-emerald-400">
          WORLD 1 • LESSON 1
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          What is the Stock Market?
        </h1>

        <p className="mt-2 text-slate-400">
          Let's understand the foundation of investing before
          entering the market.
        </p>
      </div>

      {/* Lesson Card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10">
          <BookOpen className="h-7 w-7 text-emerald-400" />
        </div>

        <h2 className="text-2xl font-bold">
          What is a Stock?
        </h2>

        <p className="mt-4 leading-7 text-slate-300">
          A stock represents a small ownership share in a company.
          When you buy a company's stock, you become a shareholder
          of that company.
        </p>

        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-5">
          <p className="font-semibold text-emerald-400">
            Simple Example
          </p>

          <p className="mt-2 leading-7 text-slate-400">
            Imagine a company is divided into 1,00,000 shares.
            If you own 1,000 shares, you own a small portion of
            that company.
          </p>
        </div>

        <h2 className="mt-8 text-2xl font-bold">
          Why do companies issue stocks?
        </h2>

        <p className="mt-4 leading-7 text-slate-300">
          Companies can raise money by selling shares to investors.
          They can use this capital to expand their business,
          develop products, repay debt, or fund other activities.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-slate-800 p-4">
            <p className="font-semibold">Company</p>
            <p className="mt-1 text-sm text-slate-400">
              Raises capital
            </p>
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            <p className="font-semibold">Investor</p>
            <p className="mt-1 text-sm text-slate-400">
              Gets ownership
            </p>
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            <p className="font-semibold">Market</p>
            <p className="mt-1 text-sm text-slate-400">
              Enables trading
            </p>
          </div>
        </div>

        {/* Key Takeaway */}
        <div className="mt-8 flex gap-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
          <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-emerald-400" />

          <div>
            <p className="font-semibold text-emerald-400">
              Key Takeaway
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-400">
              A stock is a unit of ownership in a company.
              Buying stocks allows investors to participate in
              the growth and performance of businesses.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-6 flex justify-between">
        <button className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-slate-400 transition hover:bg-slate-800 hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Previous
        </button>

       <button
  onClick={() => navigate("/learn")}
  className="flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2 font-medium text-white transition hover:bg-emerald-500"
>
  Back to Worlds
  <ArrowRight className="h-4 w-4" />
</button>
      </div>
    </div>
  );
}

export default Lesson;