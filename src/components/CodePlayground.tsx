'use client';

import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Sparkles, Monitor, Code } from 'lucide-react';

interface CodePlaygroundProps {
  initialCode: string;
  onCodeChange?: (code: string) => void;
}

export const CodePlayground: React.FC<CodePlaygroundProps> = ({
  initialCode,
  onCodeChange
}) => {
  const [code, setCode] = useState(initialCode);
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  useEffect(() => {
    // Generate styled iframe document for kids live preview
    const timeout = setTimeout(() => {
      const fullDoc = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: 'Fredoka', 'Quicksand', system-ui, -apple-system, sans-serif;
                padding: 1.5rem;
                margin: 0;
                background: #FFFBEB;
                color: #1F2937;
              }
              h1 { color: #7C3AED; margin-top: 0; }
              h2 { color: #D97706; }
              h3 { color: #2563EB; }
              p { font-size: 1.1rem; line-height: 1.6; color: #374151; }
              img { max-width: 100%; height: auto; border-radius: 1rem; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
              button {
                background: linear-gradient(to right, #F59E0B, #EC4899);
                color: white;
                border: none;
                padding: 0.75rem 1.5rem;
                font-size: 1rem;
                font-weight: bold;
                border-radius: 1rem;
                cursor: pointer;
                box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
                transition: transform 0.1s ease;
              }
              button:hover { transform: scale(1.05); }
              a { color: #06B6D4; font-weight: bold; text-decoration: underline; }
              ul, ol { padding-left: 1.5rem; font-size: 1.1rem; }
              li { margin-bottom: 0.5rem; }
              div { border-radius: 1rem; }
              table { width: 100%; border-collapse: collapse; margin-top: 1rem; background: white; border-radius: 0.75rem; overflow: hidden; }
              th, td { padding: 0.75rem 1rem; text-align: left; border-bottom: 1px solid #E5E7EB; }
              th { background: #7C3AED; color: white; }
              input { padding: 0.5rem 1rem; border-radius: 0.5rem; border: 2px solid #CBD5E1; font-size: 1rem; margin-top: 0.25rem; }
            </style>
          </head>
          <body>
            ${code}
          </body>
        </html>
      `;
      setSrcDoc(fullDoc);
      if (onCodeChange) onCodeChange(code);
    }, 250);

    return () => clearTimeout(timeout);
  }, [code, onCodeChange]);

  const handleReset = () => {
    setCode(initialCode);
  };

  return (
    <div className="bg-purple-950 rounded-3xl p-4 sm:p-6 border-4 border-purple-800 shadow-2xl space-y-4">
      {/* PLAYGROUND HEADER */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-purple-900/90 p-3 rounded-2xl border border-purple-700">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-amber-400 text-purple-950 flex items-center justify-center font-black">
            <Code className="w-5 h-5" />
          </div>
          <span className="text-white font-extrabold text-lg font-sans">
            Live HTML Magic Lab 🧪
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 bg-purple-800 hover:bg-purple-700 text-purple-200 text-xs font-bold px-3 py-1.5 rounded-xl border border-purple-600 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Code</span>
          </button>

          <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-xl border border-emerald-700">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Live Auto-Render</span>
          </span>
        </div>
      </div>

      {/* EDITOR & PREVIEW GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* LEFT CODE EDITOR */}
        <div className="flex flex-col bg-purple-900 rounded-2xl border-2 border-purple-700 overflow-hidden shadow-inner">
          <div className="bg-purple-950/90 px-4 py-2 text-xs font-extrabold text-purple-300 flex items-center justify-between border-b border-purple-800">
            <span className="flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5 text-amber-400" />
              <span>HTML Code Editor</span>
            </span>
            <span className="text-[10px] text-purple-400">Type HTML tags here!</span>
          </div>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 sm:h-72 p-4 bg-purple-950 text-amber-300 font-mono text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-400 leading-relaxed resize-y selection:bg-purple-700"
            placeholder="Type your HTML tags here..."
            spellCheck={false}
          />
        </div>

        {/* RIGHT LIVE PREVIEW CANVAS */}
        <div className="flex flex-col bg-white rounded-2xl border-2 border-amber-400 overflow-hidden shadow-xl">
          <div className="bg-amber-100 px-4 py-2 text-xs font-extrabold text-purple-950 flex items-center justify-between border-b border-amber-200">
            <span className="flex items-center gap-1.5">
              <Monitor className="w-3.5 h-3.5 text-purple-950" />
              <span>Live Computer Screen Preview 🖥️</span>
            </span>
            <span className="bg-amber-300 text-purple-950 px-2 py-0.5 rounded-full text-[10px] font-black">
              INSTANT RESULT
            </span>
          </div>

          <iframe
            srcDoc={srcDoc}
            title="Live HTML Preview"
            className="w-full h-64 sm:h-72 border-0 bg-amber-50"
            sandbox="allow-scripts"
          />
        </div>
      </div>
    </div>
  );
};
