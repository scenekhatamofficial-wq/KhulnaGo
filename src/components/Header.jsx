import React from 'react';
import { Compass, Globe } from 'lucide-react';

export default function Header({ lang, setLang }) {
  return (
    <header className="px-5 pt-6 pb-4 flex items-center justify-between border-b border-white/5 bg-[#080F1D]/80 backdrop-blur sticky top-0 z-50">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#00F2FE] to-blue-600 flex items-center justify-center shadow-lg shadow-[#00F2FE]/20">
          <Compass className="text-black w-5 h-5" />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight leading-none text-white">KhulnaGo</h1>
          <p className="text-[10px] text-cyan-400 font-medium mt-0.5">
            {lang === 'bn' ? 'স্মার্ট খুলনা ট্রানজিট' : 'Khulna Smart Mobility'}
          </p>
        </div>
      </div>
      <button 
        onClick={() => setLang(l => l === 'bn' ? 'en' : 'bn')}
        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold hover:bg-white/10 transition flex items-center gap-1.5 text-slate-200 cursor-pointer"
      >
        <Globe className="w-3.5 h-3.5 text-cyan-400" />
        {lang === 'bn' ? 'বাংলা' : 'EN'}
      </button>
    </header>
  );
}