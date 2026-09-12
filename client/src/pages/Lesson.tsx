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
import type { LearningWorld, Lesson } from "../types/learning";

function LessonPage() {
  const { worldId, lessonId } = useParams<{
    worldId: string;
    lessonId: string;
  }>();

  const navigate = useNavigate();

  const [completed, setCompleted] = useState(false);

  const world: LearningWorld | undefined = learningWorlds.find(
    (item: LearningWorld) => item.id === worldId
  );

  const lesson: Lesson | undefined = world?.lessons.find(
    (item: Lesson) => item.id === lessonId
  );

  useEffect(() => {
    if (!lesson) {
      return;
    }

    const completedLessons = getCompletedLessons();

    setCompleted(completedLessons.includes(lesson.id));
  }, [lesson]);

  if (!world || !lesson) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <h1 className="mb-3 text-2xl font-bold">
            Lesson Not Found
          </h1>

          <p className="mb-6 text-slate-400">
            The lesson you are looking for does not exist.
          </p>

          <button
            type="button"
            onClick={() => navigate("/learn")}
            className="rounded-xl bg-indigo-500 px-5 py-3 font-medium text-white transition hover:bg-indigo-400"
          >
            Back to Learn
          </button>
        </div>
      </div>
    );
  }

  const currentIndex = world.lessons.findIndex(
    (item: Lesson) => item.id === lesson.id
  );

  const previousLesson = world.lessons[currentIndex - 1];
  const nextLesson = world.lessons[currentIndex + 1];

  const completedLessons = getCompletedLessons();

  const nextLessonLocked = Boolean(
    nextLesson?.prerequisiteLessonId &&
      !completedLessons.includes(
        nextLesson.prerequisiteLessonId
      )
  );

  const markLessonComplete = () => {
    completeLesson(lesson.id);
    setCompleted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <button
            type="button"
            onClick={() => navigate("/learn")}
            className="mb-5 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={18} />
            Back to Learn
          </button>

          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="mb-2 text-sm font-medium text-indigo-400">
                {world.title}
              </p>

              <h1 className="text-3xl font-bold">
                {lesson.title}
              </h1>

              <p className="mt-2 max-w-2xl text-slate-400">
                {lesson.description}
              </p>
            </div>

            <div className="hidden rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 text-center sm:block">
              <div className="text-2xl font-bold text-yellow-400">
                +{lesson.xp}
              </div>

              <div className="text-xs text-slate-400">
                XP
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-6 py-8">

        {/* Core Concept */}
        <section className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-indigo-500/10 p-3">
              <BookOpen
                size={22}
                className="text-indigo-400"
              />
            </div>

            <div>
              <p className="text-sm text-slate-400">
                Core Concept
              </p>

              <h2 className="text-xl font-semibold">
                {lesson.concept}
              </h2>
            </div>
          </div>
        </section>

        {/* Lesson Sections */}
        <div className="space-y-6">
          {lesson.sections.map(
            (
              section: { title: string; content: string },
              index: number
            ) => (
              <section
                key={`${lesson.id}-section-${index}`}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
                <h2 className="mb-4 text-xl font-semibold">
                  {section.title}
                </h2>

                <p className="whitespace-pre-line leading-7 text-slate-300">
                  {section.content}
                </p>
              </section>
            )
          )}
        </div>

        {/* Learning Game */}
        {lesson.game && (
          <section className="mt-8 rounded-2xl border border-indigo-500/30 bg-indigo-500/5 p-6">
            <div className="mb-5 flex items-start gap-4">
              <div className="rounded-xl bg-indigo-500/10 p-3">
                <Gamepad2
                  size={24}
                  className="text-indigo-400"
                />
              </div>

              <div>
                <p className="text-sm font-medium text-indigo-400">
                  Learn by Playing
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  {lesson.game.title}
                </h2>

                <p className="mt-2 text-slate-400">
                  {lesson.game.description}
                </p>
              </div>
            </div>

            <div className="mb-5 rounded-xl border border-slate-800 bg-slate-950/50 p-4">
              <p className="text-sm text-slate-400">
                What you will learn
              </p>

              <p className="mt-1 font-medium text-white">
                {lesson.game.concept}
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                alert(
                  `Game "${lesson.game?.title}" will be added in the next development stage.`
                );
              }}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 font-medium text-white transition hover:bg-indigo-400"
            >
              <Gamepad2 size={18} />
              Play Game
            </button>
          </section>
        )}

        {/* Complete Lesson */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-lg font-semibold">
                {completed
                  ? "Lesson Completed 🎉"
                  : "Ready to complete this lesson?"}
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Complete this lesson to unlock the next stage
                of your learning journey.
              </p>
            </div>

            <button
              type="button"
              onClick={markLessonComplete}
              disabled={completed}
              className={`rounded-xl px-5 py-3 font-medium transition ${
                completed
                  ? "cursor-not-allowed bg-emerald-500/20 text-emerald-400"
                  : "bg-emerald-500 text-white hover:bg-emerald-400"
              }`}
            >
              {completed
                ? "Completed ✓"
                : `Complete Lesson +${lesson.xp} XP`}
            </button>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row">

          {/* Previous Lesson */}
          <button
            type="button"
            onClick={() => {
              if (previousLesson) {
                navigate(
                  `/learn/${world.id}/${previousLesson.id}`
                );
              }
            }}
            disabled={!previousLesson}
            className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium transition ${
              previousLesson
                ? "bg-slate-800 text-white hover:bg-slate-700"
                : "cursor-not-allowed bg-slate-900 text-slate-600"
            }`}
          >
            <ArrowLeft size={18} />

            {previousLesson
              ? "Previous Lesson"
              : "No Previous Lesson"}
          </button>

          {/* Next Lesson */}
          <button
            type="button"
            onClick={() => {
              if (nextLesson && !nextLessonLocked) {
                navigate(
                  `/learn/${world.id}/${nextLesson.id}`
                );
              } else if (!nextLesson) {
                navigate("/learn");
              }
            }}
            disabled={nextLessonLocked}
            className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium transition ${
              nextLessonLocked
                ? "cursor-not-allowed bg-slate-800 text-slate-500"
                : "bg-indigo-500 text-white hover:bg-indigo-400"
            }`}
          >
            {nextLessonLocked
              ? "Complete Previous Lesson First"
              : nextLesson
                ? "Next Lesson"
                : "Back to Learn"}

            <ArrowRight size={18} />
          </button>
        </div>
      </main>
    </div>
  );
}

export default LessonPage;