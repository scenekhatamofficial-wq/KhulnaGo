import React, { useState } from 'react';
import { fareMatrix } from '../data/transitData';
import { Calculator } from 'lucide-react';

export default function FareCalculator({ lang }) {
  const [origin, setOrigin] = useState('shib_bari');
  const [destination, setDestination] = useState('sonadanga');
  const [isHalfPass, setIsHalfPass] = useState(false);

  const routeKey = `${origin}-${destination}`;
  const routeData = fareMatrix[routeKey] || { dist: '৫.০ কিমি', fare: 25 };
  const finalFare = isHalfPass ? Math.ceil(routeData.fare / 2) : routeData.fare;

  return (
    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
      <h3 className="text-xs font-bold uppercase text-slate-400 flex items-center gap-1.5">
        <Calculator className="w-4 h-4 text-[#00F2FE]" />
        {lang === 'bn' ? 'বিআরটিএ ও কেসিসি নির্ধারিত ভাড়া' : 'Official BRTA Fare'}
      </h3>

      <div className="space-y-2">
        <div>
          <label className="text-[10px] text-slate-400 block mb-1">{lang === 'bn' ? 'শুরুর স্থান' : 'From'}</label>
          <select 
            value={origin} 
            onChange={e => setOrigin(e.target.value)}
            className="w-full bg-slate-900 border border-white/10 rounded-xl p-2.5 text-xs text-white outline-none"
          >
            <option value="shib_bari">{lang === 'bn' ? 'শিববাড়ি মোড়' : 'Shib Bari Mor'}</option>
            <option value="dakbangla">{lang === 'bn' ? 'ডাকবাংলা' : 'Dakbangla'}</option>
            <option value="phulbarigate">{lang === 'bn' ? 'ফুলবাড়িগেট' : 'Phulbarigate'}</option>
            <option value="gollamari">{lang === 'bn' ? 'গল্লামারী' : 'Gollamari'}</option>
          </select>
        </div>

        <div>
          <label className="text-[10px] text-slate-400 block mb-1">{lang === 'bn' ? 'গন্তব্য' : 'To'}</label>
          <select 
            value={destination} 
            onChange={e => setDestination(e.target.value)}
            className="w-full bg-slate-900 border border-white/10 rounded-xl p-2.5 text-xs text-white outline-none"
          >
            <option value="sonadanga">{lang === 'bn' ? 'সোনাডাঙ্গা বাস টার্মিনাল' : 'Sonadanga Bus Terminal'}</option>
            <option value="rupsha">{lang === 'bn' ? 'রূপসা ঘাট' : 'Rupsha Ghat'}</option>
            <option value="kuet">{lang === 'bn' ? 'কুয়েট গেট' : 'KUET Main Gate'}</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
        <span className="text-xs text-slate-300">
          {lang === 'bn' ? 'শিক্ষার্থী হাফ পাস (৫০% ছাড়)' : 'Student Half Pass (50% Off)'}
        </span>
        <input 
          type="checkbox" 
          checked={isHalfPass} 
          onChange={e => setIsHalfPass(e.target.checked)} 
          className="w-4 h-4 accent-[#00F2FE] cursor-pointer"
        />
      </div>

      <div className="flex justify-between items-center pt-2 border-t border-white/5">
        <span className="text-xs text-slate-400">
          {lang === 'bn' ? `আনুমানিক দূরত্ব: ${routeData.dist}` : `Estimated Distance: ${routeData.dist}`}
        </span>
        <span className="text-xl font-black text-[#00F2FE]">৳ {finalFare}</span>
      </div>
    </div>
  );
}