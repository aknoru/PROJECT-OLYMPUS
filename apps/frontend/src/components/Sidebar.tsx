"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  ChevronRight, 
  Compass, 
  Layers, 
  Map, 
  FolderGit2, 
  FlaskConical, 
  CheckSquare,
  FileCode,
  Award
} from 'lucide-react';
import { getPlatformManifest } from '../lib/manifest';
import { usePlatformStore } from '../store/usePlatformStore';

export const Sidebar: React.FC = () => {
  const [collapsedDomains, setCollapsedDomains] = useState<Record<string, boolean>>({});
  const manifest = getPlatformManifest();
  const { progress } = usePlatformStore();

  const toggleDomain = (domain: string) => {
    setCollapsedDomains((prev) => ({ ...prev, [domain]: !prev[domain] }));
  };

  const domainNames: Record<string, string> = {
    '01-operation-renaissance': '01 Operation Renaissance',
    '02-engineering-foundations': '02 Engineering Foundations',
    '03-fpga-and-digital-design': '03 FPGA & Digital Design',
    '04-embedded-systems': '04 Embedded Systems',
    '05-computer-architecture': '05 Computer Architecture',
    '06-software-and-tooling': '06 Software & Tooling',
    '07-research-and-graduate-study': '07 Research & Graduate Study',
    '08-career-and-placement': '08 Career & Placement',
    '09-communication-and-leadership': '09 Communication & Leadership',
    '10-entrepreneurship-and-deep-tech': '10 Entrepreneurship & Deep Tech',
    '11-finance-wealth-and-investing': '11 Finance & Investing',
    '12-health-resilience-and-performance': '12 Health & Resilience',
    '13-legacy-and-stewardship': '13 Legacy & Stewardship',
  };

  return (
    <aside className="w-64 shrink-0 border-r border-slate-800 bg-slate-900/60 p-4 min-h-[calc(100vh-4rem)] text-xs">
      
      {/* Global Platforms & Indexes */}
      <div className="mb-6 space-y-1">
        <div className="px-2 pb-2 font-semibold uppercase tracking-wider text-slate-400 text-[10px]">
          Knowledge Engine
        </div>
        
        <Link 
          href="/viewer?path=KNOWLEDGE_GRAPH.md" 
          className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
        >
          <Compass className="h-4 w-4 text-blue-400" />
          <span>Knowledge Graph</span>
        </Link>

        <Link 
          href="/viewer?path=LEARNING_PATHS.md" 
          className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
        >
          <Map className="h-4 w-4 text-purple-400" />
          <span>Learning Paths (7 Tracks)</span>
        </Link>

        <Link 
          href="/viewer?path=PROJECT_INDEX.md" 
          className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
        >
          <FolderGit2 className="h-4 w-4 text-emerald-400" />
          <span>Project Index (35+)</span>
        </Link>

        <Link 
          href="/viewer?path=LAB_INDEX.md" 
          className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
        >
          <FlaskConical className="h-4 w-4 text-amber-400" />
          <span>Lab Index (46 Labs)</span>
        </Link>

        <Link 
          href="/viewer?path=ASSESSMENT_INDEX.md" 
          className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
        >
          <CheckSquare className="h-4 w-4 text-rose-400" />
          <span>Assessment Index</span>
        </Link>
      </div>

      {/* Engineering Domains (13 Domains) */}
      <div className="space-y-3">
        <div className="px-2 font-semibold uppercase tracking-wider text-slate-400 text-[10px]">
          Engineering Domains ({manifest.domains.length})
        </div>

        {manifest.domains.map((domainKey) => {
          const isCollapsed = collapsedDomains[domainKey];
          const docs = manifest.documents.filter((d) => d.domain === domainKey);
          const completedCount = docs.filter((d) => progress.completedPaths[d.path]).length;
          const displayName = domainNames[domainKey] || domainKey;

          return (
            <div key={domainKey} className="rounded-lg bg-slate-900/40 border border-slate-800/80 overflow-hidden">
              <button
                onClick={() => toggleDomain(domainKey)}
                className="flex w-full items-center justify-between px-2.5 py-2 text-left font-medium text-slate-200 hover:bg-slate-800/60 transition-colors"
              >
                <div className="flex items-center gap-2 truncate">
                  <BookOpen className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                  <span className="truncate">{displayName}</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-[10px] text-slate-400 font-mono">
                    {completedCount}/{docs.length}
                  </span>
                  <ChevronRight className={`h-3.5 w-3.5 text-slate-500 transition-transform ${isCollapsed ? '' : 'rotate-90'}`} />
                </div>
              </button>

              {!isCollapsed && (
                <div className="border-t border-slate-800/60 py-1 pl-4 pr-1 space-y-0.5 max-h-48 overflow-y-auto">
                  {docs.slice(0, 15).map((doc) => {
                    const isDone = !!progress.completedPaths[doc.path];
                    return (
                      <Link
                        key={doc.id}
                        href={`/viewer?path=${encodeURIComponent(doc.path)}`}
                        className={`flex items-center justify-between gap-2 rounded px-2 py-1 transition-colors ${
                          isDone ? 'text-emerald-400 font-medium hover:bg-emerald-950/30' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                        }`}
                      >
                        <span className="truncate">{doc.title}</span>
                        {isDone && <Award className="h-3 w-3 text-emerald-400 shrink-0" />}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};
