import React from 'react';
import { campusBuses } from '../data/transitData';
import { Clock, CheckCircle2 } from 'lucide-react';

export default function CampusShuttle({ lang }) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          {lang === 'bn' ? 'বিশ্ববিদ্যালয় শাটল ট্র্যাকার' : 'Campus Shuttle Tracker'}
        </h3>
        <span className="text-xs text-[#00F2FE] bg-[#00F2FE]/10 px-2 py-0.5 rounded font-mono">
          {lang === 'bn' ? 'সরাসরি আপডেট' : 'Live Updates'}
        </span>
      </div>

      <div className="space-y-2.5">
        {campusBuses.map((bus) => (
          <div key={bus.id} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold text-[#00F2FE] tracking-wide uppercase">{bus.campus}</span>
                <h4 className="font-semibold text-sm text-white">{lang === 'bn' ? bus.name : bus.nameEn}</h4>
              </div>
              <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded flex items-center gap-1 font-mono">
                <Clock className="w-3 h-3" />
                {bus.nextDept} {lang === 'bn' ? 'মি. বাকি' : 'min'}
              </span>
            </div>

            <p className="text-xs text-slate-400">{lang === 'bn' ? bus.route : bus.routeEn}</p>

            <div className="flex justify-between items-center text-[11px] pt-2 border-t border-white/5">
              <span className="text-slate-400">{lang === 'bn' ? bus.seats : bus.seatsEn}</span>
              <span className="text-emerald-400 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> {lang === 'bn' ? bus.status : bus.statusEn}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}