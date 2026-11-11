import React from 'react';
import { Compass, Navigation, Bus, ShieldAlert, User } from 'lucide-react';

export default function BottomNav({ tab, setTab, lang }) {
  const navItems = [
    { id: 'home', label: lang === 'bn' ? 'হোম' : 'Home', icon: Compass },
    { id: 'map', label: lang === 'bn' ? 'ম্যাপ' : 'Map', icon: Navigation },
    { id: 'transit', label: lang === 'bn' ? 'শাটল' : 'Transit', icon: Bus },
    { id: 'services', label: lang === 'bn' ? 'সেবা' : 'Services', icon: ShieldAlert },
    { id: 'profile', label: lang === 'bn' ? 'প্রোফাইল' : 'Profile', icon: User }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#080F1D]/95 backdrop-blur-md border-t border-white/10 px-4 py-2.5 flex justify-between items-center z-50">
      {navItems.map(item => (
        <button
          key={item.id}
          onClick={() => setTab(item.id)}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition cursor-pointer ${
            tab === item.id ? 'text-[#00F2FE] bg-[#00F2FE]/10' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <item.icon className="w-5 h-5" />
          <span className="text-[10px] font-medium">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}