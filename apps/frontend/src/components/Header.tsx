"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Search, 
  Flame, 
  Zap, 
  Bot, 
  Sun, 
  Moon, 
  BookOpen, 
  LayoutDashboard, 
  BrainCircuit,
  GraduationCap 
} from 'lucide-react';
import { usePlatformStore } from '../store/usePlatformStore';

export const Header: React.FC = () => {
  const { 
    progress, 
    toggleSearch, 
    toggleAITutor, 
    isDarkMode, 
    toggleTheme 
  } = usePlatformStore();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-wider text-white">PROJECT OLYMPUS</span>
              <span className="hidden sm:block text-xs text-blue-400 font-mono">Engineering OS v1.2</span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            <Link 
              href="/" 
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <LayoutDashboard className="h-4 w-4 text-blue-400" />
              Dashboard
            </Link>
            <Link 
              href="/courses" 
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <BookOpen className="h-4 w-4 text-emerald-400" />
              Domains & Curricula
            </Link>
            <Link 
              href="/flashcards" 
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <BrainCircuit className="h-4 w-4 text-purple-400" />
              Flashcards & Review
            </Link>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          
          {/* Global Search Button */}
          <button
            onClick={() => toggleSearch(true)}
            className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-1.5 text-xs text-slate-400 hover:border-slate-600 hover:text-white transition-all"
          >
            <Search className="h-3.5 w-3.5 text-slate-400" />
            <span className="hidden sm:inline">Search Markdown Knowledge...</span>
            <kbd className="hidden sm:inline-block rounded border border-slate-700 bg-slate-900 px-1.5 text-[10px] font-mono text-slate-400">
              Cmd K
            </kbd>
          </button>

          {/* Daily Streak */}
          <div 
            className="flex items-center gap-1.5 rounded-lg border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-xs font-semibold text-amber-400"
            title="Daily Learning Streak"
          >
            <Flame className="h-4 w-4 text-amber-400 animate-pulse" />
            <span>{progress.streakDays}d Streak</span>
          </div>

          {/* XP Points */}
          <div 
            className="flex items-center gap-1.5 rounded-lg border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-xs font-semibold text-blue-400"
            title="Experience Points (XP)"
          >
            <Zap className="h-4 w-4 text-blue-400" />
            <span>{progress.xp} XP</span>
          </div>

          {/* AI Tutor Toggle Button */}
          <button
            onClick={() => toggleAITutor(true)}
            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-blue-600/30 hover:brightness-110 active:scale-95 transition-all"
          >
            <Bot className="h-4 w-4 text-white" />
            <span className="hidden sm:inline">AI Tutor</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            title="Toggle Light/Dark Theme"
          >
            {isDarkMode ? <Sun className="h-4 w-4 text-amber-300" /> : <Moon className="h-4 w-4 text-slate-700" />}
          </button>

        </div>
      </div>
    </header>
  );
};
