import React from 'react';
import { Phone, ShieldAlert, HeartPulse, Flame, Waves } from 'lucide-react';

export default function ServicesScreen({ lang }) {
  const contacts = [
    { name: 'কেএমপি ট্রাফিক কন্ট্রোল রুম', nameEn: 'KMP Traffic Control', phone: '01713373277', icon: ShieldAlert, color: 'text-cyan-400' },
    { name: 'খুলনা মেডিকেল কলেজ হাসপাতাল', nameEn: 'Khulna Medical College', phone: '041761535', icon: HeartPulse, color: 'text-rose-400' },
    { name: 'সোনাডাঙ্গা ফায়ার সার্ভিস স্টেশন', nameEn: 'Fire Service Sonadanga', phone: '01730002444', icon: Flame, color: 'text-amber-400' },
    { name: 'রূপসা ঘাট ফেরি ও লঞ্চ সার্ভিস', nameEn: 'Rupsha Ferry Control', phone: '01711000000', icon: Waves, color: 'text-blue-400' }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">{lang === 'bn' ? 'জরুরি নাগরিক সেবা ডিরেক্টরি' : 'Emergency City Directory'}</h2>

      <div className="space-y-2.5">
        {contacts.map((c, i) => (
          <div key={i} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center">
                <c.icon className={`w-5 h-5 ${c.color}`} />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-white">{lang === 'bn' ? c.name : c.nameEn}</h4>
                <p className="text-xs text-slate-400 font-mono">{c.phone}</p>
              </div>
            </div>
            <a 
              href={`tel:${c.phone}`} 
              className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 active:scale-95 transition"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}