"use client";

import React, { useState } from 'react';
import { Bot, X, Send, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';
import { usePlatformStore } from '../store/usePlatformStore';

export const AITutorModal: React.FC = () => {
  const { isAITutorOpen, toggleAITutor, aiHistory, addAIMessage, activeContextPath } = usePlatformStore();
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isAITutorOpen) return null;

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input;
    setInput('');

    addAIMessage({
      role: 'user',
      content: userText,
      contextPath: activeContextPath || undefined,
    });

    setIsGenerating(true);

    // Simulate RAG AI Response using repository knowledge context
    setTimeout(() => {
      let reply = `Based on the Project Olympus knowledge base`;
      if (activeContextPath) {
        reply += ` (${activeContextPath})`;
      }
      reply += `:\n\nHere is a clear explanation of **${userText}**:\n\n`;

      if (userText.toLowerCase().includes('fourier') || userText.toLowerCase().includes('signal')) {
        reply += `The Continuous Fourier Transform represents a time-domain signal $x(t)$ in the frequency domain:\n\n$$X(\\omega) = \\int_{-\\infty}^{\\infty} x(t) e^{-j\\omega t} dt$$\n\nKey Concept: It converts continuous signals into spectral densities. See [03 Signals and Systems](02-engineering-foundations/03-signals-and-systems/README.md).`;
      } else if (userText.toLowerCase().includes('verilog') || userText.toLowerCase().includes('alu')) {
        reply += `In Verilog, non-blocking assignments (\`<=\`) MUST be used inside sequential \`always @(posedge clk)\` blocks to prevent simulation-synthesis race conditions. Blocking assignments (\`=\`) are strictly for combinational logic.\n\nCheck project [EF-01 4-Bit ALU](projects/active/EF-01-4bit-alu/README.md) for code examples.`;
      } else if (userText.toLowerCase().includes('gate') || userText.toLowerCase().includes('roadmap')) {
        reply += `Your 184-Day Integrated Roadmap maps GATE ECE, GATE EIE, and IIT-JAM Mathematics with 85% common core overlay. Focus on Linear Algebra, Networks, Signals, and Control Systems first.`;
      } else {
        reply += `1. **Core Concept:** This topic belongs to domain modules in Project Olympus.\n2. **Engineering Application:** Key equations and problem-solving steps are mapped in the syllabus tree.\n3. **Recommended Action:** Solve the high-yield question bank in \`assessments/question-banks/\` to reinforce retrieval!`;
      }

      addAIMessage({
        role: 'assistant',
        content: reply,
      });

      setIsGenerating(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex h-[580px] w-96 flex-col rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-800/80 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 shadow-md">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-sm text-white">OLYMPUS AI Tutor</h3>
            <p className="text-[10px] text-blue-400 font-mono">Context-Aware RAG Engine</p>
          </div>
        </div>
        <button onClick={() => toggleAITutor(false)} className="text-slate-400 hover:text-white">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Active Context Banner */}
      {activeContextPath && (
        <div className="flex items-center gap-2 border-b border-slate-800 bg-blue-950/40 px-3 py-1.5 text-[11px] text-blue-300">
          <BookOpen className="h-3.5 w-3.5 text-blue-400 shrink-0" />
          <span className="truncate">Context: {activeContextPath}</span>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs">
        {aiHistory.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-xl p-3 ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-slate-800 text-slate-200 border border-slate-700/60 rounded-bl-none'
              }`}
            >
              <div className="whitespace-pre-wrap">{msg.content}</div>
            </div>
            <span className="mt-1 text-[9px] text-slate-500 font-mono">
              {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        ))}

        {isGenerating && (
          <div className="flex items-center gap-2 text-slate-400 italic text-[11px]">
            <Sparkles className="h-4 w-4 text-blue-400 animate-spin" />
            <span>Consulting Project Olympus knowledge base...</span>
          </div>
        )}
      </div>

      {/* Quick Prompts */}
      <div className="border-t border-slate-800/80 bg-slate-900/80 p-2 flex gap-1 overflow-x-auto text-[10px]">
        <button 
          onClick={() => setInput('Explain Fourier Transform formula')}
          className="shrink-0 rounded bg-slate-800 px-2 py-1 text-slate-300 hover:bg-slate-700 hover:text-white"
        >
          Fourier Transform
        </button>
        <button 
          onClick={() => setInput('Explain Verilog blocking vs non-blocking')}
          className="shrink-0 rounded bg-slate-800 px-2 py-1 text-slate-300 hover:bg-slate-700 hover:text-white"
        >
          Verilog Rules
        </button>
        <button 
          onClick={() => setInput('Summarize GATE 184-Day Roadmap')}
          className="shrink-0 rounded bg-slate-800 px-2 py-1 text-slate-300 hover:bg-slate-700 hover:text-white"
        >
          GATE Roadmap
        </button>
      </div>

      {/* Input Form */}
      <div className="flex items-center gap-2 border-t border-slate-800 p-3 bg-slate-900">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask AI Tutor anything..."
          className="flex-1 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-xs text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
