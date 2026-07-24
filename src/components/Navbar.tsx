'use client';

import React from 'react';
import { Rocket, Trophy, Award, RefreshCw, KeyRound, Sparkles } from 'lucide-react';

interface NavbarProps {
  coderName: string;
  completedCount: number;
  totalModules: number;
  onResetProgress: () => void;
  onOpenCertificate: () => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  coderName,
  completedCount,
  totalModules,
  onResetProgress,
  onOpenCertificate,
  onLogout
}) => {
  const percent = Math.round((completedCount / totalModules) * 100);

  return (
    <header className="bg-purple-900 text-white sticky top-0 z-40 shadow-xl border-b-4 border-amber-400">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-amber-400 text-purple-950 rounded-2xl flex items-center justify-center shadow-lg font-black text-2xl transform -rotate-3 hover:rotate-0 transition-transform">
            <Rocket className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-1 font-sans">
              CodeForFun <span className="text-amber-400 text-sm font-bold bg-purple-800 px-2 py-0.5 rounded-full border border-purple-600">HTML for Kids</span>
            </h1>
            <p className="text-xs text-purple-200 font-medium hidden sm:block">
              Learn HTML from scratch with magic Lego bricks!
            </p>
          </div>
        </div>

        {/* PROGRESS BAR & STATS */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-3 bg-purple-950/80 px-4 py-2 rounded-2xl border border-purple-700">
            <div className="flex flex-col items-end">
              <span className="text-xs text-purple-300 font-bold uppercase tracking-wider">
                Progress ({completedCount}/{totalModules})
              </span>
              <div className="w-28 sm:w-36 bg-purple-900 rounded-full h-3.5 p-0.5 border border-purple-600">
                <div
                  className="bg-gradient-to-r from-amber-400 to-pink-500 h-full rounded-full transition-all duration-500 shadow-sm"
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
            </div>
            <div className="flex items-center gap-1 bg-amber-400 text-purple-950 px-2.5 py-1 rounded-xl font-black text-sm shadow">
              <Trophy className="w-4 h-4 text-purple-950" />
              <span>{percent}%</span>
            </div>
          </div>

          {/* CERTIFICATE BUTTON (IF 100% OR COMPLETED) */}
          {completedCount > 0 && (
            <button
              onClick={onOpenCertificate}
              className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-purple-950 font-black text-xs px-3 py-2 rounded-xl shadow-md transform hover:scale-105 active:scale-95 transition-all"
            >
              <Award className="w-4 h-4" />
              <span className="hidden sm:inline">My Certificate 📜</span>
            </button>
          )}

          {/* USER BADGE & PASSCODE NOTICE */}
          <div className="flex items-center gap-2">
            <span className="hidden md:inline-flex items-center gap-1.5 bg-purple-800 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-xl border border-purple-600">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{coderName}</span>
            </span>

            <span className="hidden lg:inline-flex items-center gap-1 bg-amber-400/20 text-amber-300 text-xs font-mono font-bold px-2.5 py-1 rounded-lg border border-amber-400/40">
              <KeyRound className="w-3 h-3 text-amber-400" />
              <span>codeforfun</span>
            </span>

            <button
              onClick={onResetProgress}
              title="Reset Progress"
              className="p-2 text-purple-300 hover:text-white hover:bg-purple-800 rounded-xl transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>

            <button
              onClick={onLogout}
              className="text-xs font-bold bg-purple-800 hover:bg-purple-700 text-purple-200 px-3 py-1.5 rounded-xl border border-purple-600 transition-colors"
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
