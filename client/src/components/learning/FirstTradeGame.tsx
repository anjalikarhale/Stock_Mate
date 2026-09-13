import { useState } from "react";
import { recordChallengeResult } from "../../services/learningProgress";

interface FirstTradeGameProps {
  lessonId: string;
  onMastered: () => void;
}

function FirstTradeGame({
  lessonId,
  onMastered,
}: FirstTradeGameProps) {
  const [round, setRound] = useState(1);
  const [cash, setCash] = useState(10000);
  const [shares, setShares] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [finished, setFinished] = useState(false);
  const [finalScore, setFinalScore] = useState<number | null>(null);

  const questions = [
    {
      question:
        "NovaTech is trading at ₹500. You have ₹10,000 virtual cash. What should you do to enter a position of 10 shares?",
      options: ["Buy 10 shares", "Sell 10 shares", "Do nothing"],
      correct: "Buy 10 shares",
      explanation:
        "Buying 10 shares at ₹500 requires ₹5,000 and creates your first stock position.",
    },
    {
      question:
        "You now own 10 shares. The price rises from ₹500 to ₹550. Which action demonstrates selling your position?",
      options: ["Buy 10 more shares", "Sell 10 shares", "Do nothing"],
      correct: "Sell 10 shares",
      explanation:
        "Selling your 10 shares closes the position. At ₹550, the 10 shares are worth ₹5,500.",
    },
    {
      question:
        "After selling your shares, what happens to your stock position?",
      options: [
        "It becomes 20 shares",
        "It remains 10 shares",
        "It becomes 0 shares",
      ],
      correct: "It becomes 0 shares",
      explanation:
        "Selling all 10 shares closes the position, leaving you with 0 shares.",
    },
  ];

  const currentQuestion = questions[round - 1];

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === currentQuestion.correct;
    const newScore = isCorrect ? score + 1 : score;

    setScore(newScore);

    if (round === questions.length) {
      const percentage = Math.round(
        (newScore / questions.length) * 100
      );

      setFinalScore(percentage);

      recordChallengeResult(lessonId, percentage, []);

      setFeedback(
        isCorrect
          ? `Correct! ${currentQuestion.explanation}`
          : `Not quite. ${currentQuestion.explanation}`
      );

      setFinished(true);

      if (percentage >= 70) {
        onMastered();
      }

      return;
    }

    setFeedback(
      isCorrect
        ? `Correct! ${currentQuestion.explanation}`
        : `Not quite. ${currentQuestion.explanation}`
    );
  };

  const nextRound = () => {
    setFeedback("");
    setRound(round + 1);

    if (round === 1) {
      setCash(5000);
      setShares(10);
    }

    if (round === 2) {
      setCash(10500);
      setShares(0);
    }
  };

  const restartGame = () => {
    setRound(1);
    setCash(10000);
    setShares(0);
    setScore(0);
    setFeedback("");
    setFinished(false);
    setFinalScore(null);
  };

  if (finished) {
    const displayedScore = finalScore ?? 0;
    const passed = displayedScore >= 70;

    return (
      <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
        <h2 className="text-2xl font-bold text-white">
          First Trade Complete
        </h2>

        <p className="mt-3 text-slate-300">
          Your mastery score
        </p>

        <p className="mt-2 text-4xl font-bold text-white">
          {displayedScore}%
        </p>

        <p className="mt-3 text-slate-300">
          {passed
            ? "Great work! You understand the basic buy and sell flow."
            : "You need 70% to unlock the next lesson. Try again and improve your score."}
        </p>

        <button
          type="button"
          onClick={restartGame}
          className="mt-6 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
        >
          {passed ? "Practice Again" : "Retry Challenge"}
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">
            PRACTICAL MISSION
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            First Trade
          </h2>

          <p className="mt-2 text-slate-300">
            Learn how a basic buy and sell transaction works.
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 px-4 py-3">
          <p className="text-xs text-slate-400">
            Round
          </p>

          <p className="text-lg font-bold text-white">
            {round} / {questions.length}
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-slate-800 p-4">
          <p className="text-sm text-slate-400">
            Virtual Cash
          </p>

          <p className="mt-1 text-xl font-bold text-white">
            ₹{cash.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="rounded-xl bg-slate-800 p-4">
          <p className="text-sm text-slate-400">
            Shares
          </p>

          <p className="mt-1 text-xl font-bold text-white">
            {shares}
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-slate-800 p-5">
        <p className="text-lg font-semibold text-white">
          {currentQuestion.question}
        </p>

        <div className="mt-5 grid gap-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => handleAnswer(option)}
              className="rounded-xl border border-white/10 bg-slate-700 px-4 py-3 text-left font-medium text-white transition hover:bg-slate-600"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {feedback && (
        <div className="mt-5 rounded-xl border border-white/10 bg-slate-800 p-4">
          <p className="text-slate-200">
            {feedback}
          </p>

          {round < questions.length && (
            <button
              type="button"
              onClick={nextRound}
              className="mt-4 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Next Round
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default FirstTradeGame;