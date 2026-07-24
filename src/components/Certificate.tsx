'use client';

import React, { useRef } from 'react';
import { Award, Printer, Sparkles, X, CheckCircle } from 'lucide-react';

interface CertificateProps {
  coderName: string;
  completedModules: number;
  totalModules: number;
  onClose: () => void;
}

export const Certificate: React.FC<CertificateProps> = ({
  coderName,
  completedModules,
  totalModules,
  onClose
}) => {
  const certRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-md overflow-y-auto">
      <div className="w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-8 border-amber-400 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full transition-colors print:hidden"
        >
          <X className="w-6 h-6" />
        </button>

        {/* PRINTABLE CERTIFICATE CARD */}
        <div
          ref={certRef}
          className="border-4 border-dashed border-purple-300 rounded-2xl p-6 sm:p-10 text-center bg-gradient-to-b from-amber-50/50 via-white to-purple-50/50 relative overflow-hidden"
        >
          {/* WATERMARK STAMP */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-400 text-purple-950 rounded-full mb-4 shadow-lg">
            <Award className="w-12 h-12" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-purple-950 uppercase tracking-wide font-sans mb-1">
            Certificate of Excellence 📜
          </h2>
          <p className="text-sm font-bold text-amber-600 tracking-widest uppercase mb-6">
            Official CodeForFun HTML Academy Award
          </p>

          <p className="text-gray-600 font-medium text-base mb-2">
            This Official Certificate is Proudly Presented To:
          </p>

          <h3 className="text-4xl sm:text-5xl font-black text-purple-900 border-b-4 border-amber-400 pb-2 mb-6 inline-block font-sans px-8">
            {coderName || 'Master Kid Coder'}
          </h3>

          <p className="text-gray-700 text-base max-w-xl mx-auto leading-relaxed mb-6 font-medium">
            For successfully mastering <span className="font-bold text-purple-900">{completedModules} out of {totalModules} HTML Modules</span>, learning tags, elements, attributes, headings, photos, forms, and building web pages from scratch!
          </p>

          <div className="flex flex-wrap items-center justify-around gap-6 pt-6 border-t-2 border-dashed border-purple-200">
            <div className="text-left">
              <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Date Issued</span>
              <span className="font-bold text-gray-800">{new Date().toLocaleDateString()}</span>
            </div>

            <div className="flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-2xl font-black text-xs border border-emerald-300 shadow-sm">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Certified HTML Developer 🚀</span>
            </div>

            <div className="text-right">
              <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Academy Seal</span>
              <span className="font-bold text-purple-900 font-sans">CodeForFun 🎈</span>
            </div>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="mt-6 flex flex-wrap items-center justify-end gap-3 print:hidden">
          <button
            onClick={handlePrint}
            className="px-6 py-3 bg-purple-900 hover:bg-purple-800 text-white font-black rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <Printer className="w-5 h-5" />
            <span>Print or Save PDF Certificate 🖨️</span>
          </button>
        </div>
      </div>
    </div>
  );
};
