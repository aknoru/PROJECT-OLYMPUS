"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Flame, 
  Zap, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Award, 
  TrendingUp, 
  Compass, 
  ArrowRight,
  Brain,
  Layers,
  Calendar
} from 'lucide-react';
import { usePlatformStore } from '../store/usePlatformStore';
import { getPlatformManifest } from '../lib/manifest';

export const Dashboard: React.FC = () => {
  const { progress } = usePlatformStore();
  const manifest = getPlatformManifest();

  const completedCount = Object.keys(progress.completedPaths).filter(
    (k) => progress.completedPaths[k]
  ).length;
  const totalCount = manifest.total_documents;
  const completionPercentage = Math.round((completedCount / totalCount) * 100) || 12; // default visual baseline

  const recentDocuments = manifest.documents.slice(0, 5);

  return (
    <div className="space-y-8 p-6 max-w-7xl mx-auto">
      
      {/* Top Banner & Welcome */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-blue-900/60 via-slate-900 to-indigo-950/60 p-6 border border-blue-500/20 shadow-xl">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-mono text-blue-300 border border-blue-500/30">
              Integrated Campaign Active
            </span>
            <span className="text-xs text-slate-400 font-mono">Relative Day 1 / 184</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Welcome back to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Project Olympus</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl">
            Targeting GATE ECE, GATE EIE, and IIT-JAM Mathematics via an 85% common core overlay. 
            All learning progress and notes persist offline in your browser.
          </p>
        </div>

        {/* Action Button */}
        <Link
          href="/viewer?path=01-operation-renaissance/02-roadmap/184-day-roadmap-integrated-ece-eie-jam.md"
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-all shrink-0"
        >
          <span>Continue 184-Day Roadmap</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Metric 1: Progress */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Syllabus Completion</span>
            <TrendingUp className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-white">{completionPercentage}%</span>
            <span className="text-xs text-slate-400 font-mono">({completedCount}/{totalCount} docs)</span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
              style={{ width: `${Math.max(8, completionPercentage)}%` }}
            />
          </div>
        </div>

        {/* Metric 2: Streak */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Learning Streak</span>
            <Flame className="h-4 w-4 text-amber-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-white">{progress.streakDays}</span>
            <span className="text-xs text-slate-400 font-mono">days active</span>
          </div>
          <p className="text-[11px] text-amber-400/90 font-medium">Keep study momentum alive today!</p>
        </div>

        {/* Metric 3: XP */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Experience Points</span>
            <Zap className="h-4 w-4 text-blue-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-white">{progress.xp}</span>
            <span className="text-xs text-slate-400 font-mono">XP</span>
          </div>
          <p className="text-[11px] text-blue-400/90 font-medium">+50 XP per completed lesson</p>
        </div>

        {/* Metric 4: Daily Time */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Study Time Today</span>
            <Clock className="h-4 w-4 text-purple-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-white">{progress.studyMinutesToday}</span>
            <span className="text-xs text-slate-400 font-mono">mins</span>
          </div>
          <p className="text-[11px] text-purple-400/90 font-medium">Target: 8.0 hours for Phase 1</p>
        </div>

      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (2 Cols): Learning Tracks & Active Projects */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Active Engineering Projects */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-emerald-400" />
                <h2 className="font-bold text-lg text-white">Active Engineering Projects</h2>
              </div>
              <Link href="/viewer?path=PROJECT_INDEX.md" className="text-xs font-semibold text-blue-400 hover:underline">
                View All 35+ Projects →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Project 1 */}
              <Link 
                href="/viewer?path=projects/active/EF-01-4bit-alu/README.md"
                className="group rounded-xl border border-slate-800 bg-slate-900/80 p-4 hover:border-emerald-500/40 hover:bg-slate-800/60 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-400 border border-emerald-500/20">
                    Verilog HDL
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Active</span>
                </div>
                <h3 className="font-semibold text-sm text-white group-hover:text-emerald-400 transition-colors">
                  EF-01 4-Bit ALU Project
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  Synthesisable 4-bit ALU in Verilog with automated testbench and waveform verification.
                </p>
              </Link>

              {/* Project 2 */}
              <Link 
                href="/viewer?path=projects/active/EF-02-arm-cortex-m-driver/README.md"
                className="group rounded-xl border border-slate-800 bg-slate-900/80 p-4 hover:border-blue-500/40 hover:bg-slate-800/60 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="rounded bg-blue-500/10 px-2 py-0.5 text-[10px] font-mono text-blue-400 border border-blue-500/20">
                    Embedded C
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Active</span>
                </div>
                <h3 className="font-semibold text-sm text-white group-hover:text-blue-400 transition-colors">
                  EF-02 Bare-Metal UART Driver
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  Memory-mapped C UART driver for ARM Cortex-M with ring buffer interrupts.
                </p>
              </Link>

            </div>
          </div>

          {/* Core Engineering Domains Explorer */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-400" />
                <h2 className="font-bold text-lg text-white">Engineering Domain Curricula</h2>
              </div>
              <Link href="/courses" className="text-xs font-semibold text-blue-400 hover:underline">
                Browse All 13 Domains →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {manifest.domains.slice(0, 6).map((dom) => (
                <Link
                  key={dom}
                  href={`/viewer?path=${dom}/README.md`}
                  className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 hover:bg-slate-800/80 hover:border-slate-700 transition-all group"
                >
                  <div className="space-y-0.5">
                    <h3 className="font-semibold text-xs text-white group-hover:text-blue-400 transition-colors">
                      {dom.replace(/-/g, ' ').toUpperCase()}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {manifest.domain_counts[dom] || 10} modules & lessons
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-white transition-colors shrink-0" />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (1 Col): Quick Practice, Question Banks & Recent Docs */}
        <div className="space-y-8">
          
          {/* Question Banks */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-400" />
              <h2 className="font-bold text-base text-white">High-Yield Question Banks</h2>
            </div>

            <div className="space-y-2.5 text-xs">
              <Link
                href="/viewer?path=assessments/question-banks/QB-EF-MATH-01.md"
                className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/80 p-3 hover:border-purple-500/40 hover:bg-slate-800/60 transition-colors"
              >
                <div>
                  <div className="font-semibold text-white">QB-EF-MATH-01</div>
                  <div className="text-[11px] text-slate-400">Engineering Math (Eigenvalues, Rank, Gauss)</div>
                </div>
                <span className="rounded bg-purple-500/10 px-2 py-0.5 text-[10px] text-purple-400 font-mono">
                  Active
                </span>
              </Link>

              <Link
                href="/viewer?path=assessments/question-banks/QB-EF-NET-01.md"
                className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/80 p-3 hover:border-purple-500/40 hover:bg-slate-800/60 transition-colors"
              >
                <div>
                  <div className="font-semibold text-white">QB-EF-NET-01</div>
                  <div className="text-[11px] text-slate-400">Network Theory (Thevenin, RLC Resonance)</div>
                </div>
                <span className="rounded bg-purple-500/10 px-2 py-0.5 text-[10px] text-purple-400 font-mono">
                  Active
                </span>
              </Link>
            </div>
          </div>

          {/* Recent Curricula Activity */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Compass className="h-5 w-5 text-blue-400" />
              <h2 className="font-bold text-base text-white">Curriculum Highlights</h2>
            </div>

            <div className="space-y-2 text-xs">
              {recentDocuments.map((doc) => (
                <Link
                  key={doc.id}
                  href={`/viewer?path=${encodeURIComponent(doc.path)}`}
                  className="flex items-center justify-between rounded-lg p-2.5 hover:bg-slate-800/60 transition-colors"
                >
                  <span className="text-slate-300 hover:text-white font-medium truncate">
                    {doc.title}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono shrink-0">
                    {doc.reading_time_min}m read
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
