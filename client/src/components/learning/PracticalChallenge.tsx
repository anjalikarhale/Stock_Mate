import { useState } from "react";
import { CheckCircle2, RotateCcw, Trophy, XCircle } from "lucide-react";
import { recordChallengeResult } from "../../services/learningProgress";

interface ChallengeOption {
  id: string;
  label: string;
  correct: boolean;
  feedback: string;
}

interface PracticalChallengeProps {
  lessonId: string;
  title: string;
  description: string;
  question: string;
  options: ChallengeOption[];
  requiredScore?: number;
  onMastered: () => void;
}

function PracticalChallenge({
  lessonId,
  title,
  description,
  question,
  options,
  requiredScore = 70,
  onMastered,
}: PracticalChallengeProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");

  const submitAnswer = () => {
    if (!selectedOption) {
      return;
    }

    const selected = options.find(
      (option) => option.id === selectedOption
    );

    if (!selected) {
      return;
    }

    const calculatedScore = selected.correct ? 100 : 0;

    setScore(calculatedScore);
    setFeedback(selected.feedback);
    setSubmitted(true);

    recordChallengeResult(
      lessonId,
      calculatedScore,
      selected.correct ? [] : [selected.feedback]
    );

    if (calculatedScore >= requiredScore) {
      onMastered();
    }
  };

  const retryChallenge = () => {
    setSelectedOption(null);
    setSubmitted(false);
    setScore(null);
    setFeedback("");
  };

  return (
    <div className="rounded-2xl border border-indigo-500/30 bg-slate-900 p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2 text-indigo-400">
          <Trophy size={20} />
          <span className="text-sm font-semibold">
            Practical Mastery Challenge
          </span>
        </div>

        <h2 className="text-2xl font-bold text-white">
          {title}
        </h2>

        <p className="mt-2 text-slate-400">
          {description}
        </p>
      </div>

      {/* Question */}
      {!submitted && (
        <>
          <div className="mb-5 rounded-xl border border-slate-800 bg-slate-950 p-5">
            <p className="text-lg font-medium leading-7 text-white">
              {question}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {options.map((option) => (
              <button
                key={option.id}
                type="button"
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

          {/* Submit */}
          <button
            type="button"
            onClick={submitAnswer}
            disabled={!selectedOption}
            className={`mt-6 w-full rounded-xl px-5 py-3 font-semibold transition ${
              selectedOption
                ? "bg-indigo-500 text-white hover:bg-indigo-400"
                : "cursor-not-allowed bg-slate-800 text-slate-500"
            }`}
          >
            Submit Answer
          </button>
        </>
      )}

      {/* Result */}
      {submitted && score !== null && (
        <div className="space-y-5">
          <div
            className={`rounded-xl border p-5 ${
              score >= requiredScore
                ? "border-emerald-500/30 bg-emerald-500/10"
                : "border-red-500/30 bg-red-500/10"
            }`}
          >
            <div className="flex items-center gap-3">
              {score >= requiredScore ? (
                <CheckCircle2
                  size={28}
                  className="text-emerald-400"
                />
              ) : (
                <XCircle
                  size={28}
                  className="text-red-400"
                />
              )}

              <div>
                <h3 className="text-xl font-bold">
                  {score >= requiredScore
                    ? "Challenge Passed!"
                    : "Not Quite Yet"}
                </h3>

                <p className="text-sm text-slate-400">
                  Your score: {score}% • Required: {requiredScore}%
                </p>
              </div>
            </div>
          </div>

          {/* Feedback */}
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
            <p className="mb-2 text-sm font-medium text-slate-400">
              Feedback
            </p>

            <p className="leading-7 text-slate-300">
              {feedback}
            </p>
          </div>

          {/* Retry */}
          {score < requiredScore && (
            <button
              type="button"
              onClick={retryChallenge}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 font-semibold text-white transition hover:bg-indigo-400"
            >
              <RotateCcw size={18} />
              Try Again
            </button>
          )}

          {score >= requiredScore && (
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-center text-emerald-400">
              🎉 Lesson mastered! The next lesson can now be unlocked.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PracticalChallenge;