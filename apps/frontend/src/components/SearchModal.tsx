"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Search, X, BookOpen, ArrowRight, CornerDownLeft } from 'lucide-react';
import { usePlatformStore } from '../store/usePlatformStore';
import { searchDocuments } from '../lib/search';
import { SearchRecord } from '../lib/types';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, toggleSearch, searchQuery, setSearchQuery } = usePlatformStore();
  const [results, setResults] = useState<SearchRecord[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        toggleSearch(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        toggleSearch(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, toggleSearch]);

  useEffect(() => {
    if (searchQuery.trim()) {
      setResults(searchDocuments(searchQuery));
    } else {
      setResults([]);
    }
  }, [searchQuery]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 bg-slate-950/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl rounded-xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-slate-800 px-4 py-3">
          <Search className="h-5 w-5 text-blue-400 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 1,000+ engineering topics, equations, code, or equations..."
            className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
            autoFocus
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="text-slate-400 hover:text-white">
              <X className="h-4 w-4" />
            </button>
          )}
          <button 
            onClick={() => toggleSearch(false)}
            className="rounded bg-slate-800 px-2 py-1 text-xs text-slate-400 hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2">
          {searchQuery && results.length === 0 && (
            <div className="p-8 text-center text-sm text-slate-400">
              No matching markdown documents found for &quot;{searchQuery}&quot;.
            </div>
          )}

          {!searchQuery && (
            <div className="p-4 text-xs text-slate-400 text-center">
              Type keywords like <code className="text-blue-400">Fourier</code>, <code className="text-blue-400">Verilog</code>, <code className="text-blue-400">ARM</code>, <code className="text-blue-400">Eigenvalues</code>, or <code className="text-blue-400">GATE</code>.
            </div>
          )}

          {results.map((res) => (
            <Link
              key={res.id}
              href={`/viewer?path=${encodeURIComponent(res.path)}`}
              onClick={() => toggleSearch(false)}
              className="flex items-start justify-between rounded-lg p-3 hover:bg-slate-800/80 transition-colors group"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-blue-400 shrink-0" />
                  <span className="font-semibold text-sm text-white group-hover:text-blue-400 transition-colors">
                    {res.title}
                  </span>
                  <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] text-slate-400 font-mono">
                    {res.domain}
                  </span>
                </div>
                <p className="text-xs text-slate-400 line-clamp-1">{res.excerpt}</p>
              </div>
              <CornerDownLeft className="h-4 w-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
