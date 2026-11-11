import React from 'react';
import { Home, Navigation2, Bus, ShieldAlert, User, Sparkles } from 'lucide-react';

export default function BottomNav({ tab, setTab, lang }) {
  const isBn = lang === 'bn';

  const navItems = [
    { id: 'home', icon: Home, label: isBn ? 'হোম' : 'Home' },
    { id: 'map', icon: Navigation2, label: isBn ? 'ম্যাপ' : 'Map' },
    { id: 'action', icon: Sparkles, isCenter: true },
    { id: 'transit', icon: Bus, label: isBn ? 'বাস' : 'Bus' },
    { id: 'profile', icon: User, label: isBn ? 'আইডি' : 'User' },
  ];

  return (
    <div className="fixed bottom-4 inset-x-0 flex justify-center z-50 pointer-events-none px-4">
      <nav className="pointer-events-auto flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-900/85 backdrop-blur-2xl border border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.8)]">
        {navItems.map((item, idx) => {
          if (item.isCenter) {
            return (
              <button
                key={idx}
                onClick={() => setTab('map')}
                className="w-11 h-11 mx-1 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-black shadow-[0_0_20px_rgba(0,242,254,0.6)] active:scale-90 transition transform"
              >
                <Sparkles className="w-5 h-5 fill-black stroke-black" />
              </button>
            );
          }

          const isActive = tab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`flex flex-col items-center justify-center w-12 py-1.5 rounded-full transition-all duration-300 ${
                isActive 
                  ? 'text-cyan-400 font-bold' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <item.icon className={`w-4 h-4 ${isActive ? 'stroke-[2.5] scale-110' : ''} transition`} />
              <span className="text-[10px] mt-0.5 tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}