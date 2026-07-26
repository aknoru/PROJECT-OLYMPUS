import { create } from 'zustand';
import { UserProgress, Flashcard, AIMessage } from '../lib/types';

interface PlatformState {
  progress: UserProgress;
  flashcards: Flashcard[];
  aiHistory: AIMessage[];
  isAITutorOpen: boolean;
  activeContextPath: string | null;
  searchQuery: string;
  isSearchOpen: boolean;
  isDarkMode: boolean;

  // Actions
  toggleCompletedPath: (path: string) => void;
  toggleBookmark: (path: string) => void;
  saveNote: (path: string, note: string) => void;
  addXP: (amount: number) => void;
  recordStudyTime: (minutes: number) => void;
  toggleAITutor: (open?: boolean, contextPath?: string) => void;
  addAIMessage: (msg: Omit<AIMessage, 'id' | 'timestamp'>) => void;
  setSearchQuery: (query: string) => void;
  toggleSearch: (open?: boolean) => void;
  toggleTheme: () => void;
  recordQuizScore: (quizId: string, score: number) => void;
}

const LOCAL_STORAGE_KEY = 'olympus_platform_user_state';

const loadInitialState = (): { progress: UserProgress; flashcards: Flashcard[] } => {
  if (typeof window === 'undefined') {
    return {
      progress: {
        completedPaths: {},
        bookmarks: {},
        notes: {},
        xp: 150,
        streakDays: 4,
        lastActiveDate: new Date().toISOString().split('T')[0],
        studyMinutesToday: 45,
        quizScores: {},
      },
      flashcards: [],
    };
  }

  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        progress: parsed.progress || {
          completedPaths: {},
          bookmarks: {},
          notes: {},
          xp: 150,
          streakDays: 4,
          lastActiveDate: new Date().toISOString().split('T')[0],
          studyMinutesToday: 45,
          quizScores: {},
        },
        flashcards: parsed.flashcards || [],
      };
    }
  } catch (e) {
    console.error('Failed to load local storage state:', e);
  }

  return {
    progress: {
      completedPaths: {},
      bookmarks: {},
      notes: {},
      xp: 150,
      streakDays: 4,
      lastActiveDate: new Date().toISOString().split('T')[0],
      studyMinutesToday: 45,
      quizScores: {},
    },
    flashcards: [],
  };
};

const initial = loadInitialState();

export const usePlatformStore = create<PlatformState>((set, get) => ({
  progress: initial.progress,
  flashcards: initial.flashcards,
  aiHistory: [
    {
      id: 'welcome-msg',
      role: 'assistant',
      content: 'Hello! I am OLYMPUS AI Tutor. Ask me any question about Engineering Mathematics, Signals, Circuits, Verilog, Embedded Systems, or GATE/IIT-JAM prep!',
      timestamp: new Date().toISOString(),
    },
  ],
  isAITutorOpen: false,
  activeContextPath: null,
  searchQuery: '',
  isSearchOpen: false,
  isDarkMode: true,

  toggleCompletedPath: (path: string) => {
    set((state) => {
      const current = !!state.progress.completedPaths[path];
      const nextCompleted = { ...state.progress.completedPaths, [path]: !current };
      const nextXP = current ? Math.max(0, state.progress.xp - 50) : state.progress.xp + 50;

      const nextProgress = {
        ...state.progress,
        completedPaths: nextCompleted,
        xp: nextXP,
      };

      if (typeof window !== 'undefined') {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ progress: nextProgress, flashcards: state.flashcards }));
      }
      return { progress: nextProgress };
    });
  },

  toggleBookmark: (path: string) => {
    set((state) => {
      const current = !!state.progress.bookmarks[path];
      const nextBookmarks = { ...state.progress.bookmarks, [path]: !current };

      const nextProgress = {
        ...state.progress,
        bookmarks: nextBookmarks,
      };

      if (typeof window !== 'undefined') {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ progress: nextProgress, flashcards: state.flashcards }));
      }
      return { progress: nextProgress };
    });
  },

  saveNote: (path: string, note: string) => {
    set((state) => {
      const nextNotes = { ...state.progress.notes, [path]: note };
      const nextProgress = { ...state.progress, notes: nextNotes };

      if (typeof window !== 'undefined') {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ progress: nextProgress, flashcards: state.flashcards }));
      }
      return { progress: nextProgress };
    });
  },

  addXP: (amount: number) => {
    set((state) => {
      const nextProgress = { ...state.progress, xp: state.progress.xp + amount };
      if (typeof window !== 'undefined') {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ progress: nextProgress, flashcards: state.flashcards }));
      }
      return { progress: nextProgress };
    });
  },

  recordStudyTime: (minutes: number) => {
    set((state) => {
      const nextProgress = { ...state.progress, studyMinutesToday: state.progress.studyMinutesToday + minutes };
      if (typeof window !== 'undefined') {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ progress: nextProgress, flashcards: state.flashcards }));
      }
      return { progress: nextProgress };
    });
  },

  toggleAITutor: (open?: boolean, contextPath?: string) => {
    set((state) => ({
      isAITutorOpen: open !== undefined ? open : !state.isAITutorOpen,
      activeContextPath: contextPath || state.activeContextPath,
    }));
  },

  addAIMessage: (msg) => {
    set((state) => ({
      aiHistory: [
        ...state.aiHistory,
        {
          ...msg,
          id: 'msg-' + Date.now(),
          timestamp: new Date().toISOString(),
        },
      ],
    }));
  },

  setSearchQuery: (query: string) => set({ searchQuery: query }),
  toggleSearch: (open?: boolean) => set((state) => ({ isSearchOpen: open !== undefined ? open : !state.isSearchOpen })),
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

  recordQuizScore: (quizId: string, score: number) => {
    set((state) => {
      const nextScores = { ...state.progress.quizScores, [quizId]: score };
      const nextProgress = { ...state.progress, quizScores: nextScores };
      if (typeof window !== 'undefined') {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ progress: nextProgress, flashcards: state.flashcards }));
      }
      return { progress: nextProgress };
    });
  },
}));
