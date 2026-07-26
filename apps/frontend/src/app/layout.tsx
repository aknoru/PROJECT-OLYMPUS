import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { SearchModal } from '../components/SearchModal';
import { AITutorModal } from '../components/AITutorModal';

export const metadata: Metadata = {
  title: 'Project Olympus — AI Engineering OS & Learning Platform',
  description: 'World-class Markdown-native Engineering Operating System and AI Learning Platform for ECE, FPGA, Embedded Systems, Computer Architecture, and GATE/IIT-JAM Prep.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased">
        <Header />
        
        <div className="flex-1 flex">
          <Sidebar />
          <main className="flex-1 overflow-x-hidden">
            {children}
          </main>
        </div>

        <SearchModal />
        <AITutorModal />
      </body>
    </html>
  );
}
