"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  CheckCircle2, 
  Bookmark, 
  Clock, 
  FileText, 
  Layers, 
  Share2, 
  Bot, 
  Code,
  List,
  Award
} from 'lucide-react';
import { usePlatformStore } from '../store/usePlatformStore';
import { DocumentEntry } from '../lib/types';

interface MarkdownViewerProps {
  document: DocumentEntry;
  content: string;
}

export const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ document: doc, content }) => {
  const { progress, toggleCompletedPath, toggleBookmark, toggleAITutor, saveNote } = usePlatformStore();
  const [activeTab, setActiveTab] = useState<'content' | 'notes'>('content');
  const [noteText, setNoteText] = useState(progress.notes[doc.path] || '');

  const isCompleted = !!progress.completedPaths[doc.path];
  const isBookmarked = !!progress.bookmarks[doc.path];

  const handleSaveNote = () => {
    saveNote(doc.path, noteText);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto p-6">
      
      {/* Main Content Column */}
      <div className="flex-1 min-w-0 space-y-6">
        
        {/* Document Header Metadata */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-mono text-blue-400 border border-blue-500/20">
                {doc.domain}
              </span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-mono text-slate-300">
                {doc.type}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                <Clock className="h-3.5 w-3.5" />
                {doc.reading_time_min} min read ({doc.word_count} words)
              </span>
            </div>

            {/* Top Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleBookmark(doc.path)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  isBookmarked
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                    : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                <Bookmark className="h-4 w-4" />
                <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
              </button>

              <button
                onClick={() => toggleCompletedPath(doc.path)}
                className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  isCompleted
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                    : 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/30'
                }`}
              >
                <CheckCircle2 className="h-4 w-4" />
                <span>{isCompleted ? 'Completed (+50 XP)' : 'Mark as Complete'}</span>
              </button>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {doc.title}
          </h1>

          {doc.description && (
            <p className="text-sm text-slate-300 leading-relaxed italic border-l-2 border-blue-500 pl-3">
              {doc.description}
            </p>
          )}

          {/* Quick AI Explanation Button */}
          <div className="pt-2 flex items-center justify-between border-t border-slate-800 text-xs">
            <span className="text-slate-400">Stuck or need an intuitive analogy for this chapter?</span>
            <button
              onClick={() => toggleAITutor(true, doc.path)}
              className="flex items-center gap-1.5 font-semibold text-blue-400 hover:text-blue-300"
            >
              <Bot className="h-4 w-4" />
              <span>Ask OLYMPUS AI Tutor</span>
            </button>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-800 text-sm font-medium">
          <button
            onClick={() => setActiveTab('content')}
            className={`pb-3 px-4 border-b-2 transition-colors ${
              activeTab === 'content'
                ? 'border-blue-500 text-blue-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Lesson Content
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`pb-3 px-4 border-b-2 transition-colors ${
              activeTab === 'notes'
                ? 'border-blue-500 text-blue-400 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Personal Notes ({noteText ? 'Saved' : 'Empty'})
          </button>
        </div>

        {/* Tab 1: Rendered Markdown Content */}
        {activeTab === 'content' && (
          <div className="prose prose-invert max-w-none rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-4 leading-relaxed text-sm text-slate-200">
            <div className="whitespace-pre-wrap font-sans">
              {content}
            </div>
          </div>
        )}

        {/* Tab 2: Personal Notes Editor */}
        {activeTab === 'notes' && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
            <h3 className="font-bold text-sm text-white">Personal Notes & Reflections</h3>
            <p className="text-xs text-slate-400">
              Write key derivations, formulas, or reminders. Notes are saved automatically to your browser storage.
            </p>
            <textarea
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Write your study notes here..."
              rows={12}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none font-mono"
            />
            <div className="flex justify-end">
              <button
                onClick={handleSaveNote}
                className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500"
              >
                Save Note
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Right Table of Contents Sidebar */}
      {doc.toc && doc.toc.length > 0 && (
        <div className="w-full lg:w-64 shrink-0 space-y-4">
          <div className="sticky top-20 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-3">
            <div className="flex items-center gap-2 font-semibold text-xs text-slate-300">
              <List className="h-4 w-4 text-blue-400" />
              <span>Table of Contents</span>
            </div>

            <nav className="space-y-1 text-xs max-h-96 overflow-y-auto">
              {doc.toc.map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.slug}`}
                  className={`block py-1 text-slate-400 hover:text-white transition-colors truncate ${
                    item.level === 1 ? 'font-semibold text-slate-200' : item.level === 2 ? 'pl-2' : 'pl-4 text-[11px]'
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
              <div>Code Snippets: <span className="font-mono text-white">{doc.code_count}</span></div>
              <div>Mermaid Diagrams: <span className="font-mono text-white">{doc.mermaid_count}</span></div>
              <div>Math Equations: <span className="font-mono text-white">{doc.math_count}</span></div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
