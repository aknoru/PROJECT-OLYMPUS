"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Search, Layers, Clock, ArrowRight, Compass } from 'lucide-react';
import { getPlatformManifest } from '../../lib/manifest';

export default function CoursesPage() {
  const manifest = getPlatformManifest();
  const [selectedDomain, setSelectedDomain] = useState<string>('all');
  const [filterQuery, setFilterQuery] = useState('');

  const domains = manifest.domains;

  const filteredDocs = manifest.documents.filter((doc) => {
    const matchesDomain = selectedDomain === 'all' || doc.domain === selectedDomain;
    const matchesQuery = filterQuery === '' || 
      doc.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
      doc.path.toLowerCase().includes(filterQuery.toLowerCase());

    return matchesDomain && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-blue-400" />
          <h1 className="text-2xl font-bold text-white">Engineering Domains & Curriculum Catalog</h1>
        </div>
        <p className="text-xs text-slate-400 max-w-3xl">
          Browse all 13 primary domains, 100+ curriculum modules, laboratories, and assessment question banks in Project Olympus.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
        
        {/* Domain Selector Pill Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 text-xs">
          <button
            onClick={() => setSelectedDomain('all')}
            className={`rounded-lg px-3 py-1.5 font-medium transition-colors shrink-0 ${
              selectedDomain === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            All Domains ({manifest.total_documents})
          </button>

          {domains.slice(0, 5).map((dom) => (
            <button
              key={dom}
              onClick={() => setSelectedDomain(dom)}
              className={`rounded-lg px-3 py-1.5 font-medium transition-colors shrink-0 ${
                selectedDomain === dom
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {dom.split('-')[1]}
            </button>
          ))}
        </div>

        {/* Filter Input */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Filter modules..."
            className="w-full rounded-lg border border-slate-700 bg-slate-800 pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Document Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDocs.slice(0, 30).map((doc) => (
          <Link
            key={doc.id}
            href={`/viewer?path=${encodeURIComponent(doc.path)}`}
            className="group rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-blue-500/40 hover:bg-slate-800/60 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="rounded bg-blue-500/10 px-2 py-0.5 text-[10px] font-mono text-blue-400 border border-blue-500/20">
                  {doc.domain}
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  {doc.type}
                </span>
              </div>
              <h3 className="font-semibold text-sm text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                {doc.title}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-2">
                {doc.description}
              </p>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-800/60">
              <span className="flex items-center gap-1 font-mono">
                <Clock className="h-3 w-3" />
                {doc.reading_time_min}m read
              </span>
              <span className="flex items-center gap-1 font-semibold text-blue-400 group-hover:translate-x-1 transition-transform">
                Read Lesson <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
