export interface TOCItem {
  level: number;
  title: string;
  slug: string;
}

export interface DocumentEntry {
  id: string;
  path: string;
  title: string;
  type: string;
  status: string;
  domain: string;
  version: string;
  owner: string;
  description: string;
  word_count: number;
  reading_time_min: number;
  mermaid_count: number;
  math_count: number;
  code_count: number;
  languages: string[];
  toc: TOCItem[];
}

export interface PlatformManifest {
  schema_version: string;
  generated_at: string;
  total_documents: number;
  domains: string[];
  domain_counts: Record<string, number>;
  documents: DocumentEntry[];
}

export interface SearchRecord {
  id: string;
  path: string;
  title: string;
  domain: string;
  type: string;
  excerpt: string;
  headings: string[];
}

export interface UserProgress {
  completedPaths: Record<string, boolean>; // path -> boolean
  bookmarks: Record<string, boolean>;
  notes: Record<string, string>; // path -> note markdown
  xp: number;
  streakDays: number;
  lastActiveDate: string;
  studyMinutesToday: number;
  quizScores: Record<string, number>; // quizId -> score percentage
}

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  domain: string;
  sourcePath: string;
  nextReviewDate: string;
  intervalDays: number;
  easeFactor: number;
}

export interface AIMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  contextPath?: string;
}
