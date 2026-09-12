export type LessonType =
  | "theory"
  | "interactive"
  | "game"
  | "quiz"
  | "simulation";

export interface LessonSection {
  title: string;
  content: string;
}

export interface LearningGame {
  id: string;
  title: string;
  description: string;
  concept: string;
  type: "decision" | "simulation" | "analysis" | "strategy";
}

export interface Lesson {
  id: string;
  worldId: string;
  prerequisiteLessonId?: string;
  title: string;
  description: string;
  concept: string;
  order: number;
  sections: LessonSection[];
  types: LessonType[];
  game?: LearningGame;
  xp: number;
  completed: boolean;
}

export interface LearningWorld {
  id: string;
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
  locked: boolean;
  completed: boolean;
}