"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { BrainCircuit, RotateCcw, Check, X, Sparkles, Trophy } from 'lucide-react';
import { usePlatformStore } from '../../store/usePlatformStore';

interface FlashcardItem {
  id: string;
  question: string;
  answer: string;
  domain: string;
}

const SAMPLE_FLASHCARDS: FlashcardItem[] = [
  {
    id: 'fc-1',
    question: 'What is the characteristic equation for matrix eigenvalues?',
    answer: 'det(A - λI) = 0',
    domain: '01-engineering-mathematics',
  },
  {
    id: 'fc-2',
    question: 'What is the condition for maximum power transfer in AC circuits?',
    answer: 'Z_L = Z_th* (Load impedance equals complex conjugate of Thevenin impedance)',
    domain: '02-network-theory',
  },
  {
    id: 'fc-3',
    question: 'What is the Fourier Transform of e^(-at) u(t)?',
    answer: '1 / (a + jω)',
    domain: '03-signals-and-systems',
  },
  {
    id: 'fc-4',
    question: 'When should non-blocking assignments (<=) be used in Verilog?',
    answer: 'Inside sequential always @(posedge clk) blocks to prevent simulation-synthesis race conditions.',
    domain: '03-fpga-and-digital-design',
  },
  {
    id: 'fc-5',
    question: 'What is the Carson\'s Rule formula for FM bandwidth?',
    answer: 'B_T = 2(Δf + f_m) = 2 f_m (β + 1)',
    domain: '08-communications',
  },
];

export default function FlashcardsPage() {
  const { addXP } = usePlatformStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);

  const card = SAMPLE_FLASHCARDS[currentIndex];

  const handleResponse = (knows: boolean) => {
    if (knows) {
      addXP(10); // +10 XP per correct card
    }
    setIsFlipped(false);
    if (currentIndex + 1 < SAMPLE_FLASHCARDS.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCompletedCount(SAMPLE_FLASHCARDS.length);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setCompletedCount(0);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-mono text-purple-400 border border-purple-500/20">
          <BrainCircuit className="h-4 w-4" />
          Spaced Repetition Active Recall
        </div>
        <h1 className="text-2xl font-bold text-white">Daily Flashcard Review</h1>
        <p className="text-xs text-slate-400">
          Reinforce core definitions, formulas, and theorems. Reviewing daily boosts long-term retrieval!
        </p>
      </div>

      {completedCount > 0 && currentIndex >= SAMPLE_FLASHCARDS.length ? (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 text-center space-y-6">
          <Trophy className="h-12 w-12 text-amber-400 mx-auto animate-bounce" />
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-white">Review Session Complete!</h2>
            <p className="text-xs text-slate-400">You reviewed {completedCount} flashcards and earned +{completedCount * 10} XP.</p>
          </div>
          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-6 py-2.5 text-xs font-semibold text-white hover:bg-purple-500 transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            Restart Review Session
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          
          {/* Card Counter */}
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Card {currentIndex + 1} of {SAMPLE_FLASHCARDS.length}</span>
            <span className="font-mono text-purple-400">{card.domain}</span>
          </div>

          {/* Flashcard Frame */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer min-h-64 rounded-2xl border border-slate-700 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 p-8 shadow-2xl flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-[1.01]"
          >
            {!isFlipped ? (
              <div className="space-y-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">Question (Click to Flip)</span>
                <p className="text-lg font-semibold text-white leading-relaxed">{card.question}</p>
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in">
                <span className="text-[10px] uppercase font-mono tracking-widest text-purple-400">Answer</span>
                <p className="text-xl font-mono text-emerald-300 leading-relaxed">{card.answer}</p>
              </div>
            )}
          </div>

          {/* Actions */}
          {isFlipped && (
            <div className="flex items-center justify-center gap-4 animate-in fade-in">
              <button
                onClick={() => handleResponse(false)}
                className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 px-6 py-3 text-xs font-semibold text-rose-400 hover:bg-rose-500/20 transition-colors"
              >
                <X className="h-4 w-4" />
                <span>Need Review</span>
              </button>

              <button
                onClick={() => handleResponse(true)}
                className="flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-500 transition-colors"
              >
                <Check className="h-4 w-4" />
                <span>Got It Right (+10 XP)</span>
              </button>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
