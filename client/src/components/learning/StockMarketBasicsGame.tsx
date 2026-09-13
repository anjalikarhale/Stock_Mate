import { useState } from "react";
import { CheckCircle2, TrendingDown, TrendingUp } from "lucide-react";
import { recordChallengeResult } from "../../services/learningProgress";

interface StockMarketBasicsGameProps {
  lessonId: string;
  onMastered: () => void;
}

interface Round {
  scenario: string;
  price: number;
  question: string;
  options: {
    id: string;
    label: string;
    correct: boolean;
    feedback: string;
  }[];
}

const rounds: Round[] = [
  {
    scenario:
      "You have ₹10,000 of virtual cash. You discover that NovaTech is a publicly listed company.",
    price: 500,
    question: "If you buy 10 shares of NovaTech, what do you own?",
    options: [
      {
        id: "a",
        label: "A small ownership stake in NovaTech",
        correct: true,
        feedback:
          "Correct! Shares represent ownership in a company. Buying shares makes you a shareholder.",
      },
      {
        id: "b",
        label: "A loan given to NovaTech",
        correct: false,
        feedback:
          "Shares represent ownership, not a loan to the company.",
      },
      {
        id: "c",
        label: "The entire company",
        correct: false,
        feedback:
          "Buying 10 shares gives you only a small ownership stake, not the entire company.",
      },
    ],
  },
  {
    scenario:
      "NovaTech's share price rises from ₹500 to ₹550 after you bought your shares.",
    price: 550,
    question: "What happened to the market value of your 10 shares?",
    options: [
      {
        id: "a",
        label: "It increased from ₹5,000 to ₹5,500",
        correct: true,
        feedback:
          "Correct! 10 shares × ₹550 = ₹5,500. The market value increased as the share price rose.",
      },
      {
        id: "b",
        label: "It stayed exactly ₹5,000",
        correct: false,
        feedback:
          "The market value of shares changes when the market price changes.",
      },
      {
        id: "c",
        label: "It became ₹550",
        correct: false,
        feedback:
          "₹550 is the price of one share. You own 10 shares.",
      },
    ],
  },
  {
    scenario:
      "Later, NovaTech's share price falls from ₹550 to ₹450.",
    price: 450,
    question: "What happens to the market value of your 10 shares?",
    options: [
      {
        id: "a",
        label: "It falls to ₹4,500",
        correct: true,
        feedback:
          "Correct! 10 shares × ₹450 = ₹4,500. A lower market price reduces the current value of your shares.",
      },
      {
        id: "b",
        label: "It automatically becomes zero",
        correct: false,
        feedback:
          "A fall in price does not automatically mean the shares are worthless.",
      },
      {
        id: "c",
        label: "It increases to ₹6,000",
        correct: false,
        feedback:
          "When the share price falls, the current market value of your shares also falls.",
      },
    ],
  },
];

function StockMarketBasicsGame({
  lessonId,
  onMastered,
}: StockMarketBasicsGameProps) {
  const [round, setRound] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
const [finalScore, setFinalScore] = useState<number | null>(null);
const [feedback, setFeedback] = useState("");

  const currentRound = rounds[round];

  const submitAnswer = () => {
    if (!selectedOption) return;

    const selected = currentRound.options.find(
      (option) => option.id === selectedOption
    );

    if (!selected) return;

    setFeedback(selected.feedback);

    if (selected.correct) {
      setScore((previous) => previous + 1);
    }
  };

  const nextRound = () => {
    if (round === rounds.length - 1) {
      const finalScore =
        ((score + (isCurrentAnswerCorrect() ? 1 : 0)) / rounds.length) * 100;

     recordChallengeResult(lessonId, finalScore, []);

setFinalScore(Math.round(finalScore));
setFinished(true);

      if (finalScore >= 70) {
        onMastered();
      }

      return;
    }

    setRound((previous) => previous + 1);
    setSelectedOption(null);
    setFeedback("");
  };

  const isCurrentAnswerCorrect = () => {
    const selected = currentRound.options.find(
      (option) => option.id === selectedOption
    );

    return selected?.correct ?? false;
  };

  if (finished) {
   const displayedScore = finalScore ?? 0;
const passed = displayedScore >= 70;

    return (
      <div className="rounded-2xl border border-indigo-500/30 bg-slate-900 p-6">
        <div className="text-center">
          {passed ? (
            <CheckCircle2
              size={56}
              className="mx-auto mb-4 text-emerald-400"
            />
          ) : (
            <TrendingDown
              size={56}
              className="mx-auto mb-4 text-red-400"
            />
          )}

          <h2 className="text-2xl font-bold text-white">
            {passed ? "Mission Complete!" : "Mission Failed"}
          </h2>

          <p className="mt-3 text-slate-400">
            Your mastery score: {displayedScore}%
          </p>

          {passed && (
            <p className="mt-4 text-emerald-400">
              🎉 You mastered Stock Market Basics!
            </p>
          )}

          {!passed && (
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-6 rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white hover:bg-indigo-400"
            >
              Retry Mission
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-indigo-500/30 bg-slate-900 p-6">
      <div className="mb-6">
        <div className="flex items-center gap-2 text-indigo-400">
          <TrendingUp size={20} />
          <span className="text-sm font-semibold">
            Market Mission
          </span>
        </div>

        <h2 className="mt-2 text-2xl font-bold text-white">
          Your First Investment
        </h2>

        <p className="mt-2 text-slate-400">
          Round {round + 1} of {rounds.length}
        </p>
      </div>

      <div className="mb-5 rounded-xl border border-slate-800 bg-slate-950 p-5">
        <p className="leading-7 text-slate-300">
          {currentRound.scenario}
        </p>

        <div className="mt-4 text-xl font-bold text-white">
          NovaTech: ₹{currentRound.price}
        </div>
      </div>

      <div className="mb-5 rounded-xl border border-slate-800 bg-slate-950 p-5">
        <p className="text-lg font-semibold leading-7 text-white">
          {currentRound.question}
        </p>
      </div>

      <div className="space-y-3">
        {currentRound.options.map((option) => (
          <button
            key={option.id}
            type="button"
            disabled={Boolean(feedback)}
            onClick={() => setSelectedOption(option.id)}
            className={`w-full rounded-xl border p-4 text-left transition ${
              selectedOption === option.id
                ? "border-indigo-400 bg-indigo-500/10 text-white"
                : "border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-600"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {feedback && (
        <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950 p-5">
          <p className="text-sm font-semibold text-indigo-400">
            Mission Feedback
          </p>

          <p className="mt-2 leading-7 text-slate-300">
            {feedback}
          </p>
        </div>
      )}

      {!feedback ? (
        <button
          type="button"
          disabled={!selectedOption}
          onClick={submitAnswer}
          className={`mt-6 w-full rounded-xl px-5 py-3 font-semibold ${
            selectedOption
              ? "bg-indigo-500 text-white hover:bg-indigo-400"
              : "cursor-not-allowed bg-slate-800 text-slate-500"
          }`}
        >
          Make Decision
        </button>
      ) : (
        <button
          type="button"
          onClick={nextRound}
          className="mt-6 w-full rounded-xl bg-indigo-500 px-5 py-3 font-semibold text-white hover:bg-indigo-400"
        >
          {round === rounds.length - 1
            ? "Complete Mission"
            : "Next Scenario"}
        </button>
      )}
    </div>
  );
}

export default StockMarketBasicsGame;