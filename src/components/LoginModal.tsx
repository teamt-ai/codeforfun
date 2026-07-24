'use client';

import React, { useState } from 'react';
import { Sparkles, KeyRound, Rocket } from 'lucide-react';

interface LoginModalProps {
  onLoginSuccess: (name: string) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ onLoginSuccess }) => {
  const [code, setCode] = useState('');
  const [kidName, setKidName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim().toLowerCase() === 'codeforfun') {
      const finalName = kidName.trim() || 'Young Coder';
      localStorage.setItem('codeforfun_user', finalName);
      onLoginSuccess(finalName);
    } else {
      setError('Oops! Secret code is "codeforfun" 🔑 Try typing: codeforfun');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-900/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border-4 border-amber-400 text-center relative overflow-hidden transform transition-all hover:scale-[1.01]">
        {/* Decorative Circles */}
        <div className="absolute -top-12 -left-12 w-28 h-28 bg-purple-300 rounded-full blur-xl opacity-60"></div>
        <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-amber-300 rounded-full blur-xl opacity-60"></div>

        <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 rounded-full mb-4 text-amber-500 shadow-inner animate-bounce">
          <Rocket className="w-10 h-10" />
        </div>

        <h2 className="text-3xl font-extrabold text-purple-900 mb-2 tracking-wide font-sans">
          Welcome to CodeForFun! 🚀
        </h2>
        <p className="text-gray-600 text-sm font-medium mb-6">
          Type the secret passcode <span className="font-bold text-amber-600 underline">codeforfun</span> to unlock the HTML Magic Academy!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-left text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
              Your Coder Name (Optional)
            </label>
            <input
              type="text"
              value={kidName}
              onChange={(e) => setKidName(e.target.value)}
              placeholder="e.g. Alex the Coder 🧙‍♂️"
              className="w-full px-4 py-3 rounded-2xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none text-gray-800 text-center font-bold text-lg transition-colors placeholder:font-normal placeholder:text-sm"
            />
          </div>

          <div>
            <label className="block text-left text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">
              Secret Passcode (Hint: codeforfun)
            </label>
            <div className="relative">
              <input
                type="text"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setError('');
                }}
                placeholder="type: codeforfun"
                required
                className="w-full px-4 py-3 rounded-2xl border-2 border-amber-300 focus:border-amber-500 focus:outline-none text-gray-900 text-center font-black text-xl tracking-widest bg-amber-50"
              />
              <KeyRound className="absolute right-4 top-3.5 text-amber-500 w-5 h-5" />
            </div>
          </div>

          {error && (
            <p className="text-xs font-bold text-red-500 bg-red-50 py-2 px-3 rounded-xl border border-red-200">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 hover:from-amber-500 hover:to-pink-600 text-white font-black text-xl rounded-2xl shadow-lg hover:shadow-xl transform active:scale-95 transition-all flex items-center justify-center gap-2 group"
          >
            <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>Enter Magic Academy!</span>
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-6">
          No email required • Pure Front-End Fun 🎈
        </p>
      </div>
    </div>
  );
};
