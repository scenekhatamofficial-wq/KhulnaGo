import React from 'react';
import { User, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

export default function ProfileScreen({ lang }) {
  return (
    <div className="space-y-4">
      <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3.5">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#00F2FE] to-blue-600 flex items-center justify-center text-black font-black text-lg">
          <User className="w-6 h-6 text-black" />
        </div>
        <div>
          <h3 className="font-bold text-base text-white">{lang === 'bn' ? 'খুলনাবাসী নাগরিক' : 'Khulna Citizen'}</h3>
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#00F2FE]" /> {lang === 'bn' ? 'খুলনা, বাংলাদেশ' : 'Khulna, Bangladesh'}
          </p>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3 text-xs">
        <div className="flex justify-between items-center py-1">
          <span className="text-slate-400">{lang === 'bn' ? 'অ্যাপ সংস্করণ' : 'App Version'}</span>
          <span className="font-mono text-white">v1.0.0 (Capacitor Native)</span>
        </div>
        <div className="flex justify-between items-center py-1 border-t border-white/5">
          <span className="text-slate-400">{lang === 'bn' ? 'ডেটা সোর্স' : 'Data Source'}</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> BRTA & Open-Meteo
          </span>
        </div>
      </div>
    </div>
  );
}