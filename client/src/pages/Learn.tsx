import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Lock, Play, Trophy } from "lucide-react";

import { learningWorlds } from "../data/learningData";
import { getCompletedLessons } from "../services/learningProgress";

function Learn() {
  const navigate = useNavigate();

  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  // Load completed lessons
  useEffect(() => {
    const savedLessons = getCompletedLessons();
    setCompletedLessons(savedLessons);
  }, []);

  // Total number of lessons
  const totalLessons = learningWorlds.reduce(
    (total, world) => total + world.lessons.length,
    0
  );

  // Total completed lessons
  const completedLessonCount = learningWorlds.reduce(
    (total, world) =>
      total +
      world.lessons.filter((lesson) =>
        completedLessons.includes(lesson.id)
      ).length,
    0
  );

  // Overall progress
  const progress =
    totalLessons === 0
      ? 0
      : Math.round(
          (completedLessonCount / totalLessons) * 100
        );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="text-sm font-medium text-indigo-400">
          LEARNING HUB
        </p>

        <h1 className="mt-2 text-3xl font-bold text-white">
          Master the Market
        </h1>

        <p className="mt-2 text-slate-400">
          Learn concepts, play simulations, make decisions and
          build real market skills.
        </p>
      </div>

      {/* Overall Progress */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">
              Overall Progress
            </p>

            <p className="mt-1 text-2xl font-bold text-white">
              {progress}%
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-400">
            <BookOpen size={18} />
            {completedLessonCount}/{totalLessons} lessons
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-indigo-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Learning Worlds */}
      <div className="space-y-5">
        {learningWorlds.map((world, worldIndex) => {
          // Completed lessons in this world
          const worldCompleted = world.lessons.filter((lesson) =>
            completedLessons.includes(lesson.id)
          ).length;

          // World progress
          const worldProgress =
            world.lessons.length === 0
              ? 0
              : Math.round(
                  (worldCompleted / world.lessons.length) * 100
                );

          // First world is always unlocked.
          // Every next world unlocks only when the previous
          // world has been completely finished.
          const previousWorld =
            learningWorlds[worldIndex - 1];

          const previousWorldCompleted =
            previousWorld?.lessons.every((lesson) =>
              completedLessons.includes(lesson.id)
            ) ?? true;

          const worldLocked =
            worldIndex !== 0 && !previousWorldCompleted;

          // Find first incomplete lesson
          const firstIncompleteLesson = world.lessons.find(
            (lesson) => !completedLessons.includes(lesson.id)
          );

          const worldCompletedFully =
            world.lessons.length > 0 &&
            world.lessons.every((lesson) =>
              completedLessons.includes(lesson.id)
            );

          return (
            <div
              key={world.id}
              className={`rounded-2xl border p-6 transition ${
                worldLocked
                  ? "border-slate-800 bg-slate-950/60"
                  : "border-slate-700 bg-slate-900 hover:border-indigo-500/50"
              }`}
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                {/* World Information */}
                <div className="flex gap-4">
                  {/* World Icon */}
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                      worldLocked
                        ? "bg-slate-800 text-slate-500"
                        : "bg-indigo-500/10 text-indigo-400"
                    }`}
                  >
                    {worldLocked ? (
                      <Lock size={22} />
                    ) : (
                      <Trophy size={22} />
                    )}
                  </div>

                  {/* World Details */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-indigo-400">
                      World {world.order}
                    </p>

                    <h2 className="mt-1 text-xl font-bold text-white">
                      {world.title}
                    </h2>

                    <p className="mt-1 max-w-2xl text-sm text-slate-400">
                      {world.description}
                    </p>

                    {/* Locked Message */}
                    {worldLocked && previousWorld && (
                      <p className="mt-2 text-xs text-slate-500">
                        Complete {previousWorld.title} to unlock
                        this world.
                      </p>
                    )}
                  </div>
                </div>

                {/* Start / Continue / Locked Button */}
                <button
                  type="button"
                  disabled={worldLocked}
                  onClick={() => {
                    if (worldLocked) {
                      return;
                    }

                    if (firstIncompleteLesson) {
                      navigate(
                        `/learn/${world.id}/${firstIncompleteLesson.id}`
                      );
                    }
                  }}
                  className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                    worldLocked
                      ? "cursor-not-allowed bg-slate-800 text-slate-500"
                      : "bg-indigo-500 text-white hover:bg-indigo-400"
                  }`}
                >
                  {worldLocked ? (
                    <>
                      <Lock size={16} />
                      Locked
                    </>
                  ) : worldCompletedFully ? (
                    <>
                      <Trophy size={16} />
                      Completed
                    </>
                  ) : worldCompleted > 0 ? (
                    <>
                      <Play size={16} />
                      Continue World
                    </>
                  ) : (
                    <>
                      <Play size={16} />
                      Start World
                    </>
                  )}
                </button>
              </div>

              {/* World Progress */}
              {!worldLocked && (
                <div className="mt-6">
                  <div className="mb-2 flex justify-between text-xs text-slate-400">
                    <span>
                      {worldCompleted}/{world.lessons.length} lessons
                    </span>

                    <span>{worldProgress}%</span>
                  </div>

                  <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-indigo-500 transition-all duration-500"
                      style={{
                        width: `${worldProgress}%`,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Learn;