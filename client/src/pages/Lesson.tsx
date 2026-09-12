import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Gamepad2,
} from "lucide-react";

import { learningWorlds } from "../data/learningData";
import {
  completeLesson,
  getCompletedLessons,
} from "../services/learningProgress";

function Lesson() {
  const { worldId, lessonId } = useParams();
  const navigate = useNavigate();

  const [completed, setCompleted] = useState(false);

  const world = learningWorlds.find(
    (item) => item.id === worldId
  );

  const lesson = world?.lessons.find(
    (item) => item.id === lessonId
  );

  // Check whether the current lesson is completed
  useEffect(() => {
    if (!lessonId) return;

    const completedLessons = getCompletedLessons();

    setCompleted(completedLessons.includes(lessonId));
  }, [lessonId]);

  // Handle invalid lesson
  if (!world || !lesson) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">
            Lesson not found
          </h1>

          <button
            onClick={() => navigate("/learn")}
            className="mt-4 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-400"
          >
            Back to Learning
          </button>
        </div>
      </div>
    );
  }

  // Current lesson position
  const currentIndex = world.lessons.findIndex(
    (item) => item.id === lesson.id
  );

  const previousLesson = world.lessons[currentIndex - 1];
  const nextLesson = world.lessons[currentIndex + 1];

  // Mark lesson as completed
  const markLessonComplete = () => {
    if (!lessonId) return;

    completeLesson(lessonId);

    setCompleted(true);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* Header */}
      <div>
        <button
          onClick={() => navigate("/learn")}
          className="mb-5 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to Worlds
        </button>

        <p className="text-sm font-medium text-indigo-400">
          WORLD {world.order} • LESSON {lesson.order}
        </p>

        <h1 className="mt-2 text-3xl font-bold text-white">
          {lesson.title}
        </h1>

        <p className="mt-2 text-slate-400">
          {lesson.description}
        </p>
      </div>

      {/* Concept Card */}
      <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-400">
          Concept
        </p>

        <p className="mt-2 text-lg font-semibold text-white">
          {lesson.concept}
        </p>

        <p className="mt-1 text-sm text-slate-400">
          +{lesson.xp} XP on completion
        </p>
      </div>

      {/* Lesson Sections */}
      <div className="space-y-5">
        {lesson.sections.map((section) => (
          <section
            key={section.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <div className="flex items-center gap-3">
              <BookOpen
                size={20}
                className="text-indigo-400"
              />

              <h2 className="text-xl font-bold text-white">
                {section.title}
              </h2>
            </div>

            <p className="mt-4 leading-7 text-slate-300">
              {section.content}
            </p>
          </section>
        ))}
      </div>

      {/* Game */}
      {lesson.game && (
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-400">
              <Gamepad2 size={24} />
            </div>

            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
                Interactive Game
              </p>

              <h2 className="mt-1 text-xl font-bold text-white">
                {lesson.game.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {lesson.game.description}
              </p>

              <button
                onClick={() =>
                  alert(
                    `Game coming soon: ${lesson.game?.title}`
                  )
                }
                className="mt-4 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-400"
              >
                Play Game
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Complete Lesson */}
      <div className="border-t border-slate-800 pt-6">
        <div className="flex justify-center">
          <button
            onClick={markLessonComplete}
            disabled={completed}
            className={`rounded-xl px-6 py-3 text-sm font-semibold transition ${
              completed
                ? "cursor-default bg-emerald-500/10 text-emerald-400"
                : "bg-emerald-500 text-white hover:bg-emerald-400"
            }`}
          >
            {completed
              ? "✓ Lesson Completed"
              : "Mark Lesson Complete"}
          </button>
        </div>
      </div>

      {/* Lesson Navigation */}
      <div className="flex items-center justify-between">
        <button
          disabled={!previousLesson}
          onClick={() => {
            if (previousLesson) {
              navigate(
                `/learn/${world.id}/${previousLesson.id}`
              );
            }
          }}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ArrowLeft size={16} />
          Previous
        </button>

        <button
          onClick={() => {
            if (nextLesson) {
              navigate(
                `/learn/${world.id}/${nextLesson.id}`
              );
            } else {
              navigate("/learn");
            }
          }}
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
        >
          {nextLesson ? "Next Lesson" : "Back to Worlds"}
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default Lesson;