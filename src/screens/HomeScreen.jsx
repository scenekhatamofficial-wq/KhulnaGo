import React, { useState } from 'react';
import { 
  Navigation2, AlertTriangle, CheckCircle, ArrowRight, 
  Search, ShieldAlert, Sparkles, MapPin, Gauge, 
  Wind, Clock, ChevronRight, Layers, Volume2, CornerUpRight
} from 'lucide-react';

export default function HomeScreen({ lang, setTab, weather }) {
  const isBn = lang === 'bn';
  const [selectedRoute, setSelectedRoute] = useState('sonadanga-shibbari');

  return (
    <div className="space-y-4 pb-8">
      {/* ১. Nexora স্টাইল টপ গ্রিটিং ও স্মার্ট ক্যাপসুল */}
      <div className="flex items-center justify-between pt-1 px-1">
        <div>
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-cyan-400 tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Khulna Neural Mobility</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white mt-0.5">
            {isBn ? 'শুভ সকাল, যাত্রী' : 'Good morning, Commuter'}
          </h1>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-xl shadow-lg">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-mono font-bold text-slate-200">{weather?.temp || 24}°C</span>
        </div>
      </div>

      {/* ২. Nexora ট্রাফিক হাইলাইট কার্ড */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950 border border-white/10 p-5 backdrop-blur-2xl shadow-xl">
        <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-medium">{isBn ? 'যাত্রার প্রস্তুতি?' : 'Ready to travel?'}</span>
          <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-cyan-300">
            {isBn ? 'লাইভ সেন্সর' : 'Live Sensor'}
          </span>
        </div>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-sm text-slate-300">{isBn ? 'খুলনায় ট্রাফিক স্বাভাবিকের চেয়ে' : 'Traffic is'}</span>
          <span className="text-2xl font-black text-rose-400 font-mono tracking-tight">+18 min</span>
          <span className="text-sm font-semibold text-rose-400">{isBn ? 'বেশি জ্যাম' : 'higher'}</span>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          {isBn 
            ? 'সোনাডাঙ্গা ➔ শিববাড়ি মোড়ে ভারী জ্যাম। কেডিএ বাইপাস রুট ব্যবহারের পরামর্শ।'
            : 'Heavy congestion near Sonadanga Bus Stand. Alternate route via KDA Bypass recommended.'}
        </p>

        {/* Nexora অ্যাকশন বাটন ডুও */}
        <div className="mt-4 grid grid-cols-2 gap-2.5">
          <button 
            onClick={() => setTab('map')}
            className="py-2.5 px-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-xs flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(0,242,254,0.3)] active:scale-95 transition"
          >
            <Navigation2 className="w-3.5 h-3.5 fill-black" />
            {isBn ? 'রুট দেখুন' : 'Confirm Route'}
          </button>
          <button 
            onClick={() => setTab('transit')}
            className="py-2.5 px-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition"
          >
            {isBn ? 'বাস শিডিউল' : 'View Options'}
          </button>
        </div>
      </div>

      {/* ৩. ফুল ইন্টারেক্টিভ নিওন জিপিএস নেভিগেশন ম্যাপ কার্ড (স্ক্রিনশট ৩, ৫ ও ৭ এর আদলে) */}
      <div className="relative overflow-hidden rounded-3xl bg-[#070D18] border border-cyan-500/20 p-4 shadow-2xl">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              {isBn ? 'লাইভ খুলনা জিপিএস নেভিগেশন' : 'Neural GPS Live Track'}
            </h3>
          </div>
          <div className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> N11 Highway
          </div>
        </div>

        {/* ৩ডি পারসপেক্টিভ ডার্ক ম্যাপ ভিউপোর্ট */}
        <div className="relative w-full h-72 rounded-2xl bg-[#09111E] border border-white/10 overflow-hidden flex items-center justify-center">
          {/* ব্যাকগ্রাউন্ড ডিজিটাল রোড গ্রিড লাইন */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#00F2FE_1px,transparent_1px),linear-gradient(to_bottom,#00F2FE_1px,transparent_1px)] bg-[size:28px_28px]" />

          {/* খুলনার নিওন রোড পাথ (কাস্টম এসভিজি ভেক্টর) */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glow-red" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* সেকেন্ডারি রোডস */}
            <path d="M 40 280 Q 120 180 180 150 T 320 80" stroke="#1E293B" strokeWidth="12" fill="none" strokeLinecap="round" />
            <path d="M 40 280 Q 120 180 180 150 T 320 80" stroke="#334155" strokeWidth="2" fill="none" strokeDasharray="4 4" />

            {/* বাইপাস গ্রিন ফ্রি রুট (স্ক্রিনশট ৭ এর মতো) */}
            <path d="M 180 160 Q 240 180 300 120" stroke="#10B981" strokeWidth="4" fill="none" strokeLinecap="round" filter="url(#glow-blue)" />

            {/* মেইন সোনাডাঙ্গা হাইওয়ে — ট্রাফিক জ্যাম সেকশন (রেড) */}
            <path d="M 180 160 L 180 40" stroke="#EF4444" strokeWidth="6" fill="none" strokeLinecap="round" filter="url(#glow-red)" />

            {/* মেইন ক্লিয়ার রুট (নিওন সায়ান) */}
            <path d="M 180 280 L 180 160" stroke="#00F2FE" strokeWidth="6" fill="none" strokeLinecap="round" filter="url(#glow-blue)" />
          </svg>

          {/* ভাসমান HUD অ্যালার্ট পিল ১: লাল ট্রাফিক অ্যালার্ট (স্ক্রিনশট ৭ এর আদলে) */}
          <div className="absolute top-10 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/95 border border-rose-500/50 shadow-[0_0_15px_rgba(244,63,94,0.4)] backdrop-blur-md">
            <span className="p-1 rounded-full bg-rose-500 text-white">
              <AlertTriangle className="w-2.5 h-2.5" />
            </span>
            <div className="text-[10px] leading-tight">
              <span className="text-white font-bold block">সোনাডাঙ্গা মোড়</span>
              <span className="text-rose-400 font-mono font-bold">+15 min jam</span>
            </div>
          </div>

          {/* ভাসমান HUD অ্যালার্ট পিল ২: সবুজ ফাস্টার রুট (স্ক্রিনশট ৭ এর আদলে) */}
          <div className="absolute top-28 right-6 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/95 border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.3)] backdrop-blur-md">
            <CornerUpRight className="w-3 h-3 text-emerald-400" />
            <span className="text-[10px] font-bold text-emerald-300 font-mono">কেডিএ বাইপাস -9m</span>
          </div>

          {/* স্পিড লিমিট সার্কেল ব্যাজ (স্ক্রিনশট ৩ এর মতো) */}
          <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white border-2 border-rose-600 flex flex-col items-center justify-center text-black font-extrabold shadow-lg">
            <span className="text-[11px] leading-none">40</span>
            <span className="text-[7px] uppercase leading-none font-sans">km/h</span>
          </div>

          {/* থ্রি-ডি নেভিগেশন ভেহিকল অ্যারো (স্ক্রিনশট ৩ ও ৭ এর মতো) */}
          <div className="absolute bottom-6 flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center animate-ping absolute" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(0,242,254,0.8)] z-10">
              <Navigation2 className="w-4 h-4 fill-white text-white -rotate-45" />
            </div>
            <span className="mt-1 px-2 py-0.5 rounded-full bg-black/80 border border-white/20 text-[9px] font-mono text-cyan-300">
              ডাকবাংলা পয়েন্ট
            </span>
          </div>
        </div>

        {/* ম্যাপের নিচের ট্রাভেল মেটা স্ট্রিপ */}
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          <div className="p-2 rounded-2xl bg-white/[0.03] border border-white/5">
            <span className="text-[10px] text-slate-400 block">{isBn ? 'দূরত্ব' : 'Distance'}</span>
            <span className="text-xs font-mono font-bold text-white">4.8 km</span>
          </div>
          <div className="p-2 rounded-2xl bg-white/[0.03] border border-white/5">
            <span className="text-[10px] text-slate-400 block">{isBn ? 'পৌঁছানোর সময়' : 'ETA'}</span>
            <span className="text-xs font-mono font-bold text-cyan-400">14 min</span>
          </div>
          <div className="p-2 rounded-2xl bg-white/[0.03] border border-white/5">
            <span className="text-[10px] text-slate-400 block">{isBn ? 'ভাড়া (ইজি/বাস)' : 'Est. Fare'}</span>
            <span className="text-xs font-mono font-bold text-emerald-400">৳ ২০</span>
          </div>
        </div>
      </div>

      {/* ৪. Nexora "Where to?" সার্চ ক্যাপসুল (স্ক্রিনশট ২) */}
      <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-4 backdrop-blur-xl space-y-2.5">
        <div className="flex items-center justify-between text-xs text-slate-300 font-semibold px-1">
          <span>{isBn ? 'কোথায় যাবেন?' : 'Where to?'}</span>
          <Search className="w-3.5 h-3.5 text-cyan-400" />
        </div>

        <div className="space-y-1.5">
          <button 
            onClick={() => setTab('transit')}
            className="w-full p-3 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/5 flex items-center justify-between text-left transition group"
          >
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-105 transition">
                <MapPin className="w-4 h-4" />
              </span>
              <div>
                <h4 className="text-xs font-bold text-white">কুয়েট ক্যাম্পাস (KUET)</h4>
                <p className="text-[10px] text-slate-400">তেলিগাতী, ফুলবাড়িগেট</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition" />
          </button>

          <button 
            onClick={() => setTab('transit')}
            className="w-full p-3 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/5 flex items-center justify-between text-left transition group"
          >
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-105 transition">
                <MapPin className="w-4 h-4" />
              </span>
              <div>
                <h4 className="text-xs font-bold text-white">খুলনা বিশ্ববিদ্যালয় (KU)</h4>
                <p className="text-[10px] text-slate-400">গল্লামারী, জিরো পয়েন্ট</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition" />
          </button>
        </div>
      </div>

      {/* ৫. সাইবার ড্যাশবোর্ড গেজ উইজেট (AQI + ট্রাফিক ইনডেক্স — স্ক্রিনশট ৫) */}
      <div className="grid grid-cols-2 gap-3">
        {/* AQI গেজ কার্ড */}
        <div className="p-4 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Air Quality</span>
            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Good</span>
          </div>
          <div className="my-2 text-center">
            <span className="text-3xl font-black font-mono text-white">AQI 62</span>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-2">
              <div className="bg-gradient-to-r from-emerald-400 via-yellow-400 to-rose-500 w-3/5 h-full rounded-full" />
            </div>
          </div>
          <span className="text-[10px] text-slate-400 text-center">শিববাড়ি পরিচ্ছন্ন বাতাস</span>
        </div>

        {/* ইমার্জেন্সি ৯৯৯ কুইক কার্ড */}
        <div className="p-4 rounded-3xl bg-gradient-to-br from-rose-950/30 to-slate-900/80 border border-rose-500/20 backdrop-blur-xl flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-rose-300 uppercase tracking-wider">KMP SOS</span>
            <ShieldAlert className="w-4 h-4 text-rose-400 animate-pulse" />
          </div>
          <div className="my-1">
            <span className="text-xs text-slate-300 block">{isBn ? 'কেএমপি ট্রাফিক হেল্প' : 'Traffic Control'}</span>
            <span className="text-lg font-mono font-bold text-white tracking-wide">01713373277</span>
          </div>
          <a 
            href="tel:01713373277" 
            className="w-full py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/30 text-rose-300 font-bold text-[10px] text-center transition"
          >
            {isBn ? 'সরাসরি কল করুন' : 'Emergency Call'}
          </a>
        </div>
      </div>
    </div>
  );
}