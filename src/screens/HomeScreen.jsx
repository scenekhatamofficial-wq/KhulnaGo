import React from 'react';
import { Volume2, Bus, Navigation, ShieldAlert, Wind, Clock, CheckCircle2 } from 'lucide-react';
import { campusBuses } from '../data/transitData';

export default function HomeScreen({ lang, setTab, weather }) {
  const playVoiceAlert = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'bn-BD';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-4">
      {/* AI ট্রাফিক অ্যালার্ট কার্ড */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 relative overflow-hidden">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-[11px] font-bold tracking-wider text-amber-400 uppercase flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              {lang === 'bn' ? 'AI ট্রাফিক সতর্কবার্তা' : 'Live AI Situation Brief'}
            </span>
            <h2 className="text-2xl font-black mt-1 text-white">
              +18 min <span className="text-xs font-normal text-slate-400">{lang === 'bn' ? 'স্বাভাবিকের চেয়ে বেশি' : 'vs normal'}</span>
            </h2>
          </div>
          <button 
            onClick={() => playVoiceAlert("সোনাডাঙ্গা বাসস্ট্যান্ড এলাকায় তীব্র যানজট, বিকল্প ময়লাপোতা রোড ব্যবহার করুন")}
            className="p-2.5 rounded-xl bg-[#00F2FE]/10 border border-[#00F2FE]/20 text-[#00F2FE] active:scale-95 transition cursor-pointer"
            title="ভয়েস শুনুন"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-slate-300 mt-2 leading-relaxed">
          {lang === 'bn' 
            ? 'সোনাডাঙ্গা মোড়ে সড়ক সংস্কার ও পিক আওয়ারের কারণে অতিরিক্ত জ্যাম। শিববাড়ি থেকে কেডিএ বাইপাস ব্যবহার করুন।'
            : 'Heavy congestion near Sonadanga Bus Stand. Alternate route via KDA Bypass is recommended.'}
        </p>
      </div>

      {/* কুইক অ্যাকশন গ্রিড */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { icon: Bus, label: lang === 'bn' ? 'শাটল' : 'Shuttle', action: () => setTab('transit') },
          { icon: Navigation, label: lang === 'bn' ? 'ম্যাপ' : 'Map', action: () => setTab('map') },
          { icon: ShieldAlert, label: '999 SOS', action: () => window.open('tel:999') },
          { icon: Wind, label: `AQI 68`, action: () => setTab('services') }
        ].map((item, idx) => (
          <button 
            key={idx}
            onClick={item.action}
            className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col items-center gap-1.5 hover:bg-white/[0.08] active:scale-95 transition cursor-pointer"
          >
            <item.icon className="w-5 h-5 text-[#00F2FE]" />
            <span className="text-[11px] font-medium text-slate-300">{item.label}</span>
          </button>
        ))}
      </div>

      {/* খুলনার আবহাওয়া স্ট্রিপ */}
      <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-between text-xs">
        <span className="text-slate-300">
          {lang === 'bn' ? 'খুলনা আবহাওয়া:' : 'Khulna Weather:'} <strong className="text-white">{weather.temp}°C</strong> ({weather.condition})
        </span>
        <span className="text-cyan-400 font-semibold">{lang === 'bn' ? 'বৃষ্টির সম্ভাবনা:' : 'Rain:'} {weather.rainChance}%</span>
      </div>

      {/* ক্যাম্পাস শাটল কার্ড */}
      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {lang === 'bn' ? 'পরবর্তী বিশ্ববিদ্যালয় শাটল' : 'Upcoming Campus Shuttle'}
          </h3>
          <span className="text-xs font-bold text-[#00F2FE] bg-[#00F2FE]/10 px-2 py-0.5 rounded-md font-mono flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {campusBuses[0].nextDept} {lang === 'bn' ? 'মি. বাকি' : 'min left'}
          </span>
        </div>
        <div className="flex items-center justify-between border-t border-white/5 pt-2">
          <div>
            <h4 className="font-semibold text-sm">{lang === 'bn' ? campusBuses[0].name : campusBuses[0].nameEn}</h4>
            <p className="text-xs text-slate-400">{lang === 'bn' ? campusBuses[0].route : campusBuses[0].routeEn}</p>
          </div>
          <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2 py-1 rounded flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> {lang === 'bn' ? campusBuses[0].status : campusBuses[0].statusEn}
          </span>
        </div>
      </div>
    </div>
  );
}