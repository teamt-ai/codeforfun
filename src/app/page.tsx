'use client';

import React, { useState, useEffect } from 'react';
import { HTML_MODULES, LessonModule } from '@/data/lessons';
import { Navbar } from '@/components/Navbar';
import { LoginModal } from '@/components/LoginModal';
import { CodePlayground } from '@/components/CodePlayground';
import { QuizRunner } from '@/components/QuizRunner';
import { Certificate } from '@/components/Certificate';
import { Sparkles, CheckCircle2, ChevronRight, ChevronLeft, BookOpen, Award, Play } from 'lucide-react';

export default function HomePage() {
  const [coderName, setCoderName] = useState<string | null>(null);
  const [activeModuleId, setActiveModuleId] = useState<number>(1);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('codeforfun_user');
    if (savedUser) setCoderName(savedUser);

    const savedProgress = localStorage.getItem('codeforfun_progress');
    if (savedProgress) {
      try {
        setCompletedModules(JSON.parse(savedProgress));
      } catch (e) {}
    }
  }, []);

  const handleLoginSuccess = (name: string) => {
    setCoderName(name);
  };

  const handleLogout = () => {
    localStorage.removeItem('codeforfun_user');
    setCoderName(null);
  };

  const handleResetProgress = () => {
    if (confirm('Are you sure you want to restart your HTML adventure from Module 1?')) {
      setCompletedModules([]);
      localStorage.removeItem('codeforfun_progress');
      setActiveModuleId(1);
    }
  };

  const handleModuleComplete = (id: number) => {
    if (!completedModules.includes(id)) {
      const updated = [...completedModules, id];
      setCompletedModules(updated);
      localStorage.setItem('codeforfun_progress', JSON.stringify(updated));
    }
  };

  const currentModule: LessonModule = HTML_MODULES.find(m => m.id === activeModuleId) || HTML_MODULES[0];

  if (!coderName) {
    return <LoginModal onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-purple-50 to-pink-50 text-gray-900 font-sans pb-16">
      {/* NAVBAR */}
      <Navbar
        coderName={coderName}
        completedCount={completedModules.length}
        totalModules={HTML_MODULES.length}
        onResetProgress={handleResetProgress}
        onOpenCertificate={() => setShowCertificate(true)}
        onLogout={handleLogout}
      />

      <main className="max-w-7xl mx-auto px-4 pt-6 space-y-8">
        {/* HERO ACADEMY BANNER */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-amber-400 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-amber-400 text-purple-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow">
                <Sparkles className="w-4 h-4" />
                <span>Super Kids HTML Academy</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-sans">
                Learn HTML from Scratch! 🚀
              </h2>
              <p className="text-purple-200 text-base sm:text-lg max-w-2xl font-medium">
                Master web coding through interactive stories, Lego tag analogies, fill-in-the-blanks challenges, and live coding previews!
              </p>
            </div>

            <button
              onClick={() => setShowCertificate(true)}
              className="bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 hover:from-amber-500 hover:to-pink-600 text-white font-black text-lg px-6 py-4 rounded-2xl shadow-xl transform hover:scale-105 active:scale-95 transition-all flex items-center gap-3 border-2 border-amber-300"
            >
              <Award className="w-6 h-6 text-white" />
              <span>Claim Certificate 📜</span>
            </button>
          </div>
        </div>

        {/* MODULE SELECTOR MAP */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-extrabold text-purple-950 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-500" />
              <span>Choose Your HTML Quest Module (10 Lessons):</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {HTML_MODULES.map((mod) => {
              const isActive = mod.id === activeModuleId;
              const isDone = completedModules.includes(mod.id);

              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModuleId(mod.id)}
                  className={`p-4 rounded-2xl border-3 text-left transition-all relative overflow-hidden shadow-md flex flex-col justify-between h-32 ${
                    isActive
                      ? 'bg-purple-900 text-white border-amber-400 shadow-xl scale-105 z-10'
                      : isDone
                      ? 'bg-emerald-50 text-emerald-950 border-emerald-300 hover:border-emerald-400'
                      : 'bg-white text-gray-800 border-purple-200 hover:border-purple-400 hover:bg-purple-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{mod.emoji}</span>
                    {isDone && (
                      <CheckCircle2 className={`w-5 h-5 ${isActive ? 'text-amber-400' : 'text-emerald-500'}`} />
                    )}
                  </div>

                  <div>
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider block ${isActive ? 'text-amber-300' : 'text-purple-600'}`}>
                      Lesson {mod.id}
                    </span>
                    <h4 className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-purple-950'}`}>
                      {mod.title.split('.')[1] || mod.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE MODULE VIEW */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-purple-200 space-y-8">
          {/* LESSON TITLE & HEADER */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-purple-100 pb-6">
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg"
                style={{ backgroundColor: currentModule.bgColor, color: currentModule.color }}
              >
                {currentModule.emoji}
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                  Lesson {currentModule.id} of {HTML_MODULES.length}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-purple-950 mt-1">
                  {currentModule.title}
                </h2>
                <p className="text-gray-600 text-sm font-medium">
                  {currentModule.summary}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1.5 rounded-xl border border-amber-300">
                Badge Reward: {currentModule.badgeName}
              </span>
            </div>
          </div>

          {/* STORY ANALOGY CARD */}
          <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-6 sm:p-8 rounded-3xl border-3 border-amber-300 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{currentModule.analogy.icon}</span>
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-300">
                  Real-World Fun Analogy
                </span>
                <h3 className="text-2xl font-black text-white">
                  {currentModule.analogy.title}
                </h3>
              </div>
            </div>

            <p className="text-purple-100 text-base sm:text-lg leading-relaxed font-medium">
              {currentModule.analogy.description}
            </p>
          </div>

          {/* EXPLANATION SECTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentModule.explanationSections.map((sec, idx) => (
              <div key={idx} className="bg-amber-50/70 p-6 rounded-2xl border-2 border-amber-200 space-y-3">
                <h4 className="text-lg font-extrabold text-purple-950 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <span>{sec.heading}</span>
                </h4>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
                  {sec.text}
                </p>
                {sec.codeExample && (
                  <div className="bg-purple-950 p-3 rounded-xl border border-purple-800 font-mono text-xs text-amber-300 overflow-x-auto">
                    <pre>{sec.codeExample}</pre>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* INTERACTIVE FILL-IN-THE-BLANKS QUIZ */}
          <div className="space-y-3">
            <h3 className="text-xl font-extrabold text-purple-950 flex items-center gap-2">
              <Play className="w-5 h-5 text-emerald-500" />
              <span>Step 1: Complete the Fill-in-the-Blanks Challenge:</span>
            </h3>

            <QuizRunner
              quizzes={currentModule.interactiveChallenge.quizzes}
              badgeName={currentModule.badgeName}
              onModuleComplete={() => handleModuleComplete(currentModule.id)}
            />
          </div>

          {/* LIVE CODE PLAYGROUND LAB */}
          <div className="space-y-3 pt-4">
            <h3 className="text-xl font-extrabold text-purple-950 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span>Step 2: Experiment in the Live HTML Code Lab:</span>
            </h3>

            <CodePlayground initialCode={currentModule.interactiveChallenge.initialCode} />
          </div>

          {/* MODULE NAVIGATION FOOTER */}
          <div className="flex items-center justify-between pt-6 border-t-2 border-purple-100">
            <button
              onClick={() => setActiveModuleId(prev => Math.max(1, prev - 1))}
              disabled={activeModuleId === 1}
              className={`px-5 py-3 rounded-2xl font-black text-sm flex items-center gap-2 transition-all ${
                activeModuleId === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-purple-100 hover:bg-purple-200 text-purple-900 transform hover:scale-105 active:scale-95'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Lesson</span>
            </button>

            <span className="text-xs font-extrabold text-purple-700">
              Module {activeModuleId} of {HTML_MODULES.length}
            </span>

            <button
              onClick={() => setActiveModuleId(prev => Math.min(HTML_MODULES.length, prev + 1))}
              disabled={activeModuleId === HTML_MODULES.length}
              className={`px-6 py-3 rounded-2xl font-black text-sm flex items-center gap-2 shadow-lg transition-all ${
                activeModuleId === HTML_MODULES.length
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white transform hover:scale-105 active:scale-95'
              }`}
            >
              <span>Next Lesson</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>

      {/* CERTIFICATE MODAL */}
      {showCertificate && (
        <Certificate
          coderName={coderName}
          completedModules={completedModules.length}
          totalModules={HTML_MODULES.length}
          onClose={() => setShowCertificate(false)}
        />
      )}
    </div>
  );
}
