'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { QuizQuestion } from '@/data/lessons';
import { CheckCircle2, HelpCircle, Sparkles, ArrowRight, RefreshCcw } from 'lucide-react';

interface QuizRunnerProps {
  quizzes: QuizQuestion[];
  badgeName: string;
  onModuleComplete: () => void;
}

export const QuizRunner: React.FC<QuizRunnerProps> = ({
  quizzes,
  badgeName,
  onModuleComplete
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const currentQuiz = quizzes[currentIndex];

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  };

  const handleSelectOption = (option: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuiz.id]: option
    }));
    setIsCorrect(null);
  };

  const handleCheckAnswer = () => {
    const chosen = selectedAnswers[currentQuiz.id];
    const isAnswerRight = currentQuiz.blankAnswers.includes(chosen);

    if (isAnswerRight) {
      setIsCorrect(true);
      triggerConfetti();
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    setIsCorrect(null);
    setShowHint(false);
    if (currentIndex < quizzes.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Completed all quizzes in this module!
      onModuleComplete();
      triggerConfetti();
    }
  };

  const chosenOption = selectedAnswers[currentQuiz.id] || '';

  return (
    <div className="bg-white rounded-3xl p-6 border-4 border-amber-300 shadow-xl space-y-6">
      <div className="flex items-center justify-between border-b-2 border-amber-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="bg-amber-400 text-purple-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
            Fill-in-the-Blanks Quiz ({currentIndex + 1} of {quizzes.length})
          </span>
        </div>

        <button
          onClick={() => setShowHint(!showHint)}
          className="flex items-center gap-1 text-xs font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-xl border border-purple-200 transition-colors"
        >
          <HelpCircle className="w-4 h-4 text-purple-600" />
          <span>{showHint ? 'Hide Hint' : 'Need a Hint? 💡'}</span>
        </button>
      </div>

      {/* QUIZ PROMPT */}
      <div>
        <h4 className="text-xl font-extrabold text-purple-950 mb-3">
          {currentQuiz.prompt}
        </h4>

        {/* CODE SNIPPET DISPLAY */}
        <div className="bg-purple-950 p-4 rounded-2xl border-2 border-purple-800 font-mono text-base text-amber-300 shadow-inner flex items-center justify-center">
          <span className="tracking-wide">
            {currentQuiz.codeSnippet.split('<__?>')[0]}
            <span className="bg-amber-400 text-purple-950 px-3 py-1 rounded-lg font-black underline mx-1 animate-pulse inline-block min-w-[3rem] text-center">
              {chosenOption || '___'}
            </span>
            {currentQuiz.codeSnippet.split('<__?>')[1]}
          </span>
        </div>
      </div>

      {/* HINT DISPLAY */}
      {showHint && (
        <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-amber-900 text-sm font-semibold flex items-start gap-3 animate-fadeIn">
          <Sparkles className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Hint: </span>
            {currentQuiz.explanation}
          </div>
        </div>
      )}

      {/* MULTIPLE CHOICE OPTIONS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {currentQuiz.options.map((opt, idx) => {
          const isSelected = chosenOption === opt;
          return (
            <button
              key={idx}
              onClick={() => handleSelectOption(opt)}
              className={`p-3 sm:p-4 rounded-2xl border-3 font-mono font-black text-lg sm:text-xl transition-all shadow-md transform hover:scale-105 active:scale-95 flex items-center justify-center ${
                isSelected
                  ? 'bg-purple-600 text-white border-purple-800 shadow-purple-200'
                  : 'bg-gray-50 hover:bg-purple-50 text-purple-950 border-gray-200 hover:border-purple-300'
              }`}
            >
              {opt || '(none)'}
            </button>
          );
        })}
      </div>

      {/* ACTION BUTTONS & FEEDBACK */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        {isCorrect === true && (
          <div className="w-full sm:w-auto bg-emerald-50 text-emerald-800 font-extrabold px-4 py-3 rounded-2xl border border-emerald-300 flex items-center gap-2 animate-bounce">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            <span>SUPER BOOM! That is 100% Correct! 🎉</span>
          </div>
        )}

        {isCorrect === false && (
          <div className="w-full sm:w-auto bg-red-50 text-red-800 font-extrabold px-4 py-3 rounded-2xl border border-red-300 flex items-center gap-2">
            <RefreshCcw className="w-5 h-5 text-red-500 animate-spin" />
            <span>Almost there! Try another answer option!</span>
          </div>
        )}

        <div className="w-full sm:w-auto ml-auto flex gap-3">
          {isCorrect !== true ? (
            <button
              onClick={handleCheckAnswer}
              disabled={!chosenOption}
              className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl font-black text-lg shadow-lg flex items-center justify-center gap-2 transition-all ${
                chosenOption
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white transform hover:scale-105 active:scale-95'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <Sparkles className="w-5 h-5" />
              <span>Check Answer!</span>
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-lg rounded-2xl shadow-xl transform hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 animate-pulse"
            >
              <span>{currentIndex < quizzes.length - 1 ? 'Next Challenge' : 'Complete Module! 🏆'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
