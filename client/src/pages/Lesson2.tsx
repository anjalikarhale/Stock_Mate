import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Lesson2() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-medium text-emerald-400">
          WORLD 1 • LESSON 2
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          How Does the Stock Market Work?
        </h1>

        <p className="mt-2 text-slate-400">
          Understand how buyers, sellers, companies and stock exchanges
          interact in the market.
        </p>
      </div>

      {/* Main Lesson */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10">
          <TrendingUp className="h-7 w-7 text-emerald-400" />
        </div>

        <h2 className="text-2xl font-bold">
          What happens when you buy a stock?
        </h2>

        <p className="mt-4 leading-7 text-slate-300">
          When you place a buy order, your broker sends that order to
          the market. The order is matched with a seller who is willing
          to sell at a suitable price.
        </p>

        {/* Flow */}
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          <div className="rounded-xl bg-slate-800 p-4 text-center">
            <p className="font-semibold">1. You</p>
            <p className="mt-1 text-sm text-slate-400">
              Place an order
            </p>
          </div>

          <div className="rounded-xl bg-slate-800 p-4 text-center">
            <p className="font-semibold">2. Broker</p>
            <p className="mt-1 text-sm text-slate-400">
              Sends the order
            </p>
          </div>

          <div className="rounded-xl bg-slate-800 p-4 text-center">
            <p className="font-semibold">3. Exchange</p>
            <p className="mt-1 text-sm text-slate-400">
              Matches orders
            </p>
          </div>

          <div className="rounded-xl bg-slate-800 p-4 text-center">
            <p className="font-semibold">4. Trade</p>
            <p className="mt-1 text-sm text-slate-400">
              Order gets executed
            </p>
          </div>
        </div>

        <h2 className="mt-8 text-2xl font-bold">
          What is a Stock Exchange?
        </h2>

        <p className="mt-4 leading-7 text-slate-300">
          A stock exchange is an organized marketplace where securities
          can be bought and sold. In India, two major stock exchanges
          are the National Stock Exchange (NSE) and Bombay Stock
          Exchange (BSE).
        </p>

        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-5">
          <p className="font-semibold text-emerald-400">
            Remember
          </p>

          <p className="mt-2 leading-7 text-slate-400">
            The stock market does not work like a normal shop. Prices
            change continuously based on buying and selling activity,
            demand and supply, company information and market
            expectations.
          </p>
        </div>

        {/* Key Takeaway */}
        <div className="mt-8 flex gap-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
          <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-emerald-400" />

          <div>
            <p className="font-semibold text-emerald-400">
              Key Takeaway
            </p>

            <p className="mt-1 text-sm leading-6 text-slate-400">
              Your order goes through a broker and is matched on the
              exchange with another market participant.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={() => navigate("/learn/world-1/lesson-1")}
          className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Previous Lesson
        </button>

        <button
          onClick={() => navigate("/learn")}
          className="flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2 font-medium text-white transition hover:bg-emerald-500"
        >
          Complete Lesson
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default Lesson2;