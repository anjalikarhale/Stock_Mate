import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { learningWorlds } from "../data/learningData";
import { getCompletedLessons } from "../services/learningProgress";
import type { LearningWorld, Lesson } from "../types/learning";
import StockMarketBasicsGame from "../components/learning/StockMarketBasicsGame";

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
    if (!lesson) return;

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

  /*
   * Protect locked lessons.
   *
   * If this lesson has a prerequisite and that prerequisite
   * has not been mastered, the user cannot access this lesson.
   */
  const completedLessons = getCompletedLessons();

  if (
    lesson.prerequisiteLessonId &&
    !completedLessons.includes(lesson.prerequisiteLessonId)
  ) {
    navigate("/learn");
    return null;
  }

  const currentIndex = world.lessons.findIndex(
    (item: Lesson) => item.id === lesson.id
  );

  const previousLesson = world.lessons[currentIndex - 1];
  const nextLesson = world.lessons[currentIndex + 1];

  /*
   * Next lesson remains locked until the current lesson
   * has been mastered.
   */
  const nextLessonLocked = Boolean(
    nextLesson?.prerequisiteLessonId &&
      !completed &&
      !completedLessons.includes(nextLesson.prerequisiteLessonId)
  );

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-5xl">
        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate("/learn")}
          className="mb-8 flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Learn
        </button>

        {/* Lesson Header */}
        <section className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
              <BookOpen size={24} />
            </div>

            <div>
              <p className="text-sm text-indigo-400">
                World {world.order} • Lesson {lesson.order}
              </p>

              <h1 className="text-3xl font-bold">
                {lesson.title}
              </h1>
            </div>
          </div>

          <p className="max-w-3xl text-lg leading-8 text-slate-400">
            {lesson.description}
          </p>
        </section>

        {/* Concept */}
        <section className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-indigo-400">
            Concept
          </p>

          <h2 className="text-2xl font-semibold">
            {lesson.concept}
          </h2>
        </section>

        {/* Lesson Content */}
        <section className="space-y-6">
          {lesson.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h2 className="mb-4 text-xl font-semibold">
                {section.title}
              </h2>

              <p className="whitespace-pre-line leading-8 text-slate-300">
                {section.content}
              </p>
            </article>
          ))}
        </section>

        {/* Learning Game */}
        {lesson.game && lesson.id === "lesson-1" && (
          <section className="mt-8">
            <StockMarketBasicsGame
              lessonId={lesson.id}
              onMastered={() => {
                setCompleted(true);
              }}
            />
          </section>
        )}

        {/* Mastery Status */}
        <section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold">
                {completed
                  ? "Lesson Mastered 🎉"
                  : "Mastery Challenge Required"}
              </h2>

              <p className="mt-2 text-slate-400">
                {completed
                  ? "You have successfully completed this lesson. The next lesson is now available."
                  : "Complete the practical challenge and master this concept to unlock the next lesson."}
              </p>
            </div>

            <div
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                completed
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "bg-amber-500/10 text-amber-400"
              }`}
            >
              {completed ? "Mastered" : "Locked"}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Previous Lesson */}
          <button
            type="button"
            onClick={() => {
              if (previousLesson) {
                navigate(`/learn/${world.id}/${previousLesson.id}`);
              } else {
                navigate("/learn");
              }
            }}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-5 py-3 font-medium text-slate-300 transition hover:border-slate-600 hover:bg-slate-900 hover:text-white"
          >
            <ArrowLeft size={18} />

            {previousLesson ? "Previous Lesson" : "Back to Learn"}
          </button>

          {/* Next Lesson */}
          <button
            type="button"
            onClick={() => {
              if (nextLesson && !nextLessonLocked) {
                navigate(`/learn/${world.id}/${nextLesson.id}`);
              } else if (!nextLesson) {
                navigate("/learn");
              }
            }}
            disabled={nextLessonLocked}
            className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium transition ${
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
        </section>
      </div>
    </div>
  );
}

export default LessonPage;