import React from 'react';
import { Navigation, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function LiveMap({ lang }) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="text-base font-bold text-white">
          {lang === 'bn' ? 'খুলনা লাইভ ট্রাফিক ম্যাপ' : 'Khulna Live Traffic'}
        </h2>
        <span className="text-xs text-emerald-400 flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5" /> {lang === 'bn' ? 'ওপেন ডেটা' : 'Open Data'}
        </span>
      </div>

      <div className="w-full h-80 rounded-2xl bg-slate-900 border border-white/10 p-4 flex flex-col justify-between relative overflow-hidden">
        <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs font-bold text-rose-300">
              {lang === 'bn' ? 'সোনাডাঙ্গা মোড় — তীব্র যানজট' : 'Sonadanga Mor — Heavy Traffic'}
            </h4>
            <p className="text-[11px] text-slate-300">
              {lang === 'bn' ? 'গতি: ৮ কিমি/ঘণ্টা (+১৫ মিনিট বিলম্ব)' : 'Speed: 8 km/h (+15m delay)'}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center my-auto py-6">
          <div className="w-14 h-14 rounded-full bg-[#00F2FE]/10 flex items-center justify-center border border-[#00F2FE]/30 animate-pulse">
            <Navigation className="w-6 h-6 text-[#00F2FE]" />
          </div>
          <p className="text-xs font-semibold mt-3 text-slate-200">
            {lang === 'bn' ? 'কেডিএ বাইপাস রুট সম্পূর্ণ ক্লিয়ার' : 'KDA Bypass route clear'}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-center text-xs">
          <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
            <span className="text-slate-400 block text-[10px]">{lang === 'bn' ? 'গল্লামারী ব্রিজ' : 'Gollamari Bridge'}</span>
            <span className="text-emerald-400 font-bold">{lang === 'bn' ? 'স্বাভাবিক' : 'Normal'}</span>
          </div>
          <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
            <span className="text-slate-400 block text-[10px]">{lang === 'bn' ? 'শিববাড়ি মোড়' : 'Shib Bari Mor'}</span>
            <span className="text-amber-400 font-bold">{lang === 'bn' ? 'মাঝারি' : 'Moderate'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}