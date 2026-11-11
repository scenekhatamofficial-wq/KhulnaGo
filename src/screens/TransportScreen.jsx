import React, { useState } from 'react';
import { campusBuses, fareMatrix } from '../data/transitData';
import { Calculator } from 'lucide-react';

export default function TransportScreen({ lang }) {
  const [origin, setOrigin] = useState('shib_bari');
  const [destination, setDestination] = useState('sonadanga');
  const [isHalfPass, setIsHalfPass] = useState(false);

  const routeKey = `${origin}-${destination}`;
  const routeData = fareMatrix[routeKey] || { dist: '৫.০ কিমি', fare: 25 };
  const finalFare = isHalfPass ? Math.ceil(routeData.fare / 2) : routeData.fare;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">{lang === 'bn' ? 'ক্যাম্পাস শাটল ও অফিসিয়াল ভাড়া' : 'Transit & Official Fare'}</h2>

      {/* শাটল লিস্ট */}
      <div className="space-y-2.5">
        {campusBuses.map(b => (
          <div key={b.id} className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-[#00F2FE]">{b.campus}</span>
              <span className="text-xs font-mono bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded">
                {b.nextDept} {lang === 'bn' ? 'মিনিট বাকি' : 'min left'}
              </span>
            </div>
            <p className="font-bold text-sm">{lang === 'bn' ? b.name : b.nameEn}</p>
            <p className="text-xs text-slate-400">{lang === 'bn' ? b.route : b.routeEn}</p>
            <div className="flex justify-between text-[11px] pt-1 text-slate-400 border-t border-white/5">
              <span>{lang === 'bn' ? b.seats : b.seatsEn}</span>
              <span className="text-emerald-400 font-medium">{lang === 'bn' ? b.status : b.statusEn}</span>
            </div>
          </div>
        ))}
      </div>

      {/* বিআরটিএ ও কেসিসি ভাড়া ক্যালকুলেটর */}
      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
        <h3 className="text-xs font-bold uppercase text-slate-400 flex items-center gap-1.5">
          <Calculator className="w-4 h-4 text-[#00F2FE]" />
          {lang === 'bn' ? 'বিআরটিএ ও কেসিসি নির্ধারিত ভাড়া' : 'Official BRTA Fare'}
        </h3>

        <div className="space-y-2">
          <select 
            value={origin} 
            onChange={e => setOrigin(e.target.value)}
            className="w-full bg-slate-900 border border-white/10 rounded-xl p-2.5 text-xs text-white outline-none cursor-pointer"
          >
            <option value="shib_bari">{lang === 'bn' ? 'শিববাড়ি মোড়' : 'Shib Bari Mor'}</option>
            <option value="dakbangla">{lang === 'bn' ? 'ডাকবাংলা' : 'Dakbangla'}</option>
            <option value="phulbarigate">{lang === 'bn' ? 'ফুলবাড়িগেট' : 'Phulbarigate'}</option>
            <option value="gollamari">{lang === 'bn' ? 'গল্লামারী' : 'Gollamari'}</option>
          </select>

          <select 
            value={destination} 
            onChange={e => setDestination(e.target.value)}
            className="w-full bg-slate-900 border border-white/10 rounded-xl p-2.5 text-xs text-white outline-none cursor-pointer"
          >
            <option value="sonadanga">{lang === 'bn' ? 'সোনাডাঙ্গা বাস টার্মিনাল' : 'Sonadanga Bus Terminal'}</option>
            <option value="rupsha">{lang === 'bn' ? 'রূপসা ঘাট' : 'Rupsha Ghat'}</option>
            <option value="kuet">{lang === 'bn' ? 'কুয়েট গেট' : 'KUET Main Gate'}</option>
          </select>
        </div>

        <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02]">
          <span className="text-xs text-slate-300">{lang === 'bn' ? 'শিক্ষার্থী হাফ পাস (৫০% ছাড়)' : 'Student Half Pass (50% Off)'}</span>
          <input 
            type="checkbox" 
            checked={isHalfPass} 
            onChange={e => setIsHalfPass(e.target.checked)} 
            className="w-4 h-4 accent-[#00F2FE] cursor-pointer"
          />
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-white/5">
          <span className="text-xs text-slate-400">{lang === 'bn' ? `দূরত্ব: ${routeData.dist}` : `Distance: ${routeData.dist}`}</span>
          <span className="text-xl font-black text-[#00F2FE]">৳ {finalFare}</span>
        </div>
      </div>
    </div>
  );
}