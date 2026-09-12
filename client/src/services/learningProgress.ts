const STORAGE_KEY = "stockmate_completed_lessons";

export function getCompletedLessons(): string[] {
  const savedLessons = localStorage.getItem(STORAGE_KEY);

  if (!savedLessons) {
    return [];
  }

  try {
    const parsed = JSON.parse(savedLessons);

    if (Array.isArray(parsed)) {
      return parsed;
    }

    return [];
  } catch {
    return [];
  }
}

export function isLessonCompleted(
  lessonId: string
): boolean {
  const completedLessons = getCompletedLessons();

  return completedLessons.includes(lessonId);
}

export function completeLesson(
  lessonId: string
): void {
  const completedLessons = getCompletedLessons();

  if (!completedLessons.includes(lessonId)) {
    completedLessons.push(lessonId);
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(completedLessons)
  );
}