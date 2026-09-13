import type { LessonMastery, MasteryStatus } from "../types/learning";

const STORAGE_KEY = "stockmate_lesson_mastery";

function getAllMastery(): Record<string, LessonMastery> {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return {};
  }

  try {
    const parsed = JSON.parse(saved);

    if (parsed && typeof parsed === "object") {
      return parsed;
    }

    return {};
  } catch {
    return {};
  }
}

function saveAllMastery(mastery: Record<string, LessonMastery>): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(mastery));
}

export function getLessonMastery(lessonId: string): LessonMastery {
  const allMastery = getAllMastery();

  return (
    allMastery[lessonId] ?? {
      requiredScore: 70,
      bestScore: 0,
      attempts: 0,
      status: "in_progress",
      mistakes: [],
    }
  );
}

export function getMasteryStatus(lessonId: string): MasteryStatus {
  return getLessonMastery(lessonId).status;
}

export function isLessonMastered(lessonId: string): boolean {
  return getLessonMastery(lessonId).status === "passed";
}

export function recordChallengeResult(
  lessonId: string,
  score: number,
  mistakes: string[] = []
): LessonMastery {
  const allMastery = getAllMastery();
  const previous = getLessonMastery(lessonId);

  const bestScore = Math.max(previous.bestScore, score);
  const attempts = previous.attempts + 1;

  const passed = score >= previous.requiredScore;

  const updated: LessonMastery = {
    ...previous,
    bestScore,
    attempts,
    status: passed ? "passed" : "challenge",
    mistakes,
  };

  allMastery[lessonId] = updated;

  saveAllMastery(allMastery);

  return updated;
}

export function setLessonStatus(
  lessonId: string,
  status: MasteryStatus
): LessonMastery {
  const allMastery = getAllMastery();
  const previous = getLessonMastery(lessonId);

  const updated: LessonMastery = {
    ...previous,
    status,
  };

  allMastery[lessonId] = updated;

  saveAllMastery(allMastery);

  return updated;
}

export function getCompletedLessons(): string[] {
  const allMastery = getAllMastery();

  return Object.entries(allMastery)
    .filter(([, mastery]) => mastery.status === "passed")
    .map(([lessonId]) => lessonId);
}

export function isLessonCompleted(lessonId: string): boolean {
  return isLessonMastered(lessonId);
}


export function completeLesson(lessonId: string): void {
  recordChallengeResult(lessonId, 100);
}