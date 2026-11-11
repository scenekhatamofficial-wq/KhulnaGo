import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import TransportScreen from './screens/TransportScreen';
import { fetchKhulnaWeather } from './services/weather';
import { Navigation, Phone, Download, CheckCircle2, Smartphone } from 'lucide-react';

export default function App() {
  const [tab, setTab] = useState('home');
  const [lang, setLang] = useState('bn');
  const [weather, setWeather] = useState({ temp: 26, rainChance: 10, condition: 'Clear' });
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  // APK ডাউনলোডের সরাসরি লিংক (Google Drive বা Netlify লিংক)
  const apkDownloadUrl = "https://drive.google.com/uc?export=download&id=YOUR_APK_FILE_ID";

  useEffect(() => {
    fetchKhulnaWeather().then(data => setWeather(data));

    // সরাসরি ব্রাউজার ইনস্টল ব্যানার ইভেন্ট
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    } else {
      window.open(apkDownloadUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-[#080F1D] text-white flex justify-center selection:bg-[#00F2FE]/30">
      <div className="w-full max-w-md flex flex-col pb-24 border-x border-white/5 min-h-screen">
        <Header lang={lang} setLang={setLang} />

        {/* মোবাইল অ্যাপ ডাউনলোড টপ স্ট্রিপ */}
        <div className="mx-4 mt-3 p-3 rounded-xl bg-gradient-to-r from-blue-600/30 to-cyan-500/20 border border-cyan-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-[#00F2FE]" />
            <span className="text-xs font-semibold text-slate-200">
              {lang === 'bn' ? 'অফিসিয়াল অ্যান্ড্রয়েড অ্যাপ' : 'Official Android App'}
            </span>
          </div>
          <button
            onClick={handleInstallClick}
            className="px-3 py-1 rounded-lg bg-[#00F2FE] text-black text-[11px] font-bold flex items-center gap-1 active:scale-95 transition"
          >
            <Download className="w-3.5 h-3.5" />
            {lang === 'bn' ? 'ইনস্টল / APK' : 'Get App'}
          </button>
        </div>

        <main className="p-4">
          {tab === 'home' && <HomeScreen lang={lang} setTab={setTab} weather={weather} />}
          {tab === 'transit' && <TransportScreen lang={lang} />}
          
          {tab === 'map' && (
            <div className="space-y-3">
              <h2 className="text-lg font-bold">{lang === 'bn' ? 'খুলনা লাইভ ট্রাফিক ফ্লো' : 'Live Traffic Flow'}</h2>
              <div className="w-full h-72 rounded-2xl bg-slate-900 border border-white/10 flex flex-col items-center justify-center p-4 text-center">
                <Navigation className="w-8 h-8 text-[#00F2FE] animate-pulse mb-2" />
                <p className="font-semibold text-sm">সোনাডাঙ্গা ➔ শিববাড়ি মোড়</p>
                <span className="text-xs text-rose-400 font-bold bg-rose-500/10 px-2 py-1 rounded mt-1">
                  {lang === 'bn' ? 'ভারী জ্যাম (গড় গতি: ৮ কিমি/ঘণ্টা)' : 'Heavy Traffic (Avg speed: 8 km/h)'}
                </span>
                <p className="text-[11px] text-slate-400 mt-3">
                  {lang === 'bn' ? 'গল্লামারী বাইপাস এখন সম্পূর্ণ ক্লিয়ার (সবুজ লেয়ার)' : 'Gollamari bypass is currently clear'}
                </p>
              </div>
            </div>
          )}

          {tab === 'services' && (
            <div className="space-y-3">
              <h2 className="text-lg font-bold">{lang === 'bn' ? 'জরুরি নাগরিক সেবা' : 'Emergency Services'}</h2>
              {[
                { name: 'কেএমপি ট্রাফিক কন্ট্রোল রুম', num: '01713373277', desc: 'খুলনা মেট্রোপলিটন পুলিশ' },
                { name: 'খুলনা মেডিকেল কলেজ হাসপাতাল', num: '041761535', desc: 'জরুরি বিভাগ ও অ্যাম্বুলেন্স' },
                { name: 'সোনাডাঙ্গা ফায়ার সার্ভিস স্টেশন', num: '01730002444', desc: 'অগ্নি নির্বাপক দল' }
              ].map((srv, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-sm">{srv.name}</h4>
                    <p className="text-xs text-slate-400">{srv.desc}</p>
                  </div>
                  <a href={`tel:${srv.num}`} className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          )}

          {tab === 'profile' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-center space-y-2">
                <h3 className="font-bold text-base">KhulnaGo v1.0.0</h3>
                <p className="text-xs text-slate-400">স্মার্ট খুলনা সিটি কর্পোরেশন ও ট্রানজিট সিস্টেম</p>
                <div className="pt-2 flex justify-center items-center gap-1.5 text-xs text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" /> অফলাইন ডাটা ক্যাশ সক্রিয়
                </div>
              </div>

              {/* সরাসরি APK ডাউনলোড কার্ড */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-500/30 text-center space-y-3">
                <Smartphone className="w-8 h-8 text-[#00F2FE] mx-auto" />
                <div>
                  <h4 className="font-bold text-sm text-white">অ্যান্ড্রয়েড APK সরাসরি ডাউনলোড</h4>
                  <p className="text-[11px] text-slate-400 mt-1">
                    ইন্টারনেট ছাড়াই কুয়েট/কেইউ শাটল এবং অফিশিয়াল ভাড়া দেখতে অ্যাপটি নামিয়ে নিন।
                  </p>
                </div>
                <a
                  href={apkDownloadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#00F2FE] text-black font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition"
                >
                  <Download className="w-4 h-4" />
                  Download APK (Direct)
                </a>
              </div>
            </div>
          )}
        </main>

        <BottomNav tab={tab} setTab={setTab} lang={lang} />
      </div>
    </div>
  );
}