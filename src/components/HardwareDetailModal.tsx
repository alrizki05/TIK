import React, { useState } from 'react';
import { HardwareItem } from '../types/hardware';
import { HardwareVisual } from './HardwareVisuals';
import { HardwareInteractiveDemo } from './HardwareInteractiveDemos';
import { playSound } from '../utils/audio';
import {
  X,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  Briefcase,
  Wrench,
  Info,
  Layers
} from 'lucide-react';

interface ModalProps {
  item: HardwareItem | null;
  onClose: () => void;
  onRewardXP: (xp: number, message: string) => void;
}

export const HardwareDetailModal: React.FC<ModalProps> = ({ item, onClose, onRewardXP }) => {
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);
  const [miniQuizAnswered, setMiniQuizAnswered] = useState(false);
  const [miniQuizCorrect, setMiniQuizCorrect] = useState(false);

  if (!item) return null;

  const handleHotspotClick = (name: string) => {
    setSelectedHotspot(name);
    playSound('click');
  };

  const handleMiniCheck = (isCorrect: boolean) => {
    if (miniQuizAnswered) return;
    setMiniQuizAnswered(true);
    setMiniQuizCorrect(isCorrect);
    if (isCorrect) {
      playSound('correct');
      onRewardXP(20, `Memahami fungsi utama ${item.name}!`);
    } else {
      playSound('error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/90">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-150">
              {item.categoryLabel}
            </span>
            <div>
              <h2 className="text-xl font-bold text-slate-900 leading-tight">
                {item.name}
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                {item.indonesianName}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              playSound('click');
              onClose();
            }}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Top Section: Interactive Visual & Short Def */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 p-5 rounded-2xl flex flex-col items-center justify-center border border-slate-800 shadow-inner relative group">
              <HardwareVisual
                type={item.svgType}
                className="w-full h-52 object-contain"
                interactive={true}
                activeHotspot={selectedHotspot}
                onHotspotClick={handleHotspotClick}
              />
              <span className="text-[11px] text-slate-400 font-mono mt-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                Klik bagian diagram untuk mempelajari anatominya
              </span>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <div className="bg-indigo-50/70 border border-indigo-100 p-4 rounded-xl">
                <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                  <Info className="w-4 h-4 text-indigo-600" />
                  Fungsi Utama (Kegunaan Praktis)
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {item.mainFunction}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                  Definisi Lengkap
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.fullDef}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Hands-on Live Demo Simulator */}
          <HardwareInteractiveDemo
            type={item.interactiveDemoType}
            componentName={item.name}
          />

          {/* Interactive Anatomy Hotspots */}
          {item.anatomyPoints && item.anatomyPoints.length > 0 && (
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                <Layers className="w-4 h-4 text-indigo-600" />
                Bagian & Anatomi Komponen (Klik untuk membaca)
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.anatomyPoints.map((pt) => {
                  const isActive = selectedHotspot === pt.name;
                  return (
                    <button
                      key={pt.name}
                      onClick={() => handleHotspotClick(pt.name)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all text-left ${
                        isActive
                          ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-200'
                          : 'bg-white text-slate-700 border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/40'
                      }`}
                    >
                      {pt.name}
                    </button>
                  );
                })}
              </div>

              {selectedHotspot && (
                <div className="mt-3 p-3 bg-white rounded-lg border border-indigo-150 text-xs text-slate-700 animate-in fade-in duration-150">
                  <span className="font-bold text-indigo-950 block mb-0.5">
                    {selectedHotspot}:
                  </span>
                  {item.anatomyPoints.find((p) => p.name === selectedHotspot)?.desc}
                </div>
              )}
            </div>
          )}

          {/* Everyday Analogy & Industry Impact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Analogi Kehidupan Sehari-hari */}
            <div className="bg-amber-50/80 border border-amber-200 p-4 rounded-xl relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-amber-100 text-amber-800 rounded-lg">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                    Analogi Sehari-hari
                  </h4>
                  <span className="text-xs font-semibold text-amber-800">
                    {item.everydayAnalogy.title}
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {item.everydayAnalogy.description}
              </p>
            </div>

            {/* Peran Industri & Karir Teknologi */}
            <div className="bg-sky-50/80 border border-sky-200 p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-sky-100 text-sky-800 rounded-lg">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-sky-900 uppercase tracking-wider">
                    Peran di Industri & Karir TIK
                  </h4>
                  <span className="text-xs font-semibold text-sky-800">
                    {item.industryImpact.title}
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {item.industryImpact.description}
              </p>
            </div>
          </div>

          {/* Specs & How it works */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Key Specs Table */}
            <div className="border border-slate-200 rounded-xl p-4 bg-white">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                Karakteristik & Spesifikasi Teknis
              </h4>
              <dl className="divide-y divide-slate-100 text-xs">
                {item.keySpecs.map((spec, i) => (
                  <div key={i} className="py-2 flex justify-between gap-4">
                    <dt className="text-slate-500 font-medium">{spec.label}</dt>
                    <dd className="text-slate-900 font-semibold text-right font-mono">{spec.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-3 pt-3 border-t border-slate-100">
                <span className="text-[11px] text-slate-400 block mb-1">Contoh di Pasaran:</span>
                <p className="text-xs text-indigo-600 font-medium font-mono">
                  {item.marketExamples.join(', ')}
                </p>
              </div>
            </div>

            {/* Cara Kerja Ringkas */}
            <div className="border border-slate-200 rounded-xl p-4 bg-white flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                  Alur Cara Kerja Komponen
                </h4>
                <ol className="space-y-2 text-xs text-slate-600 list-decimal list-inside">
                  {item.howItWorks.map((step, idx) => (
                    <li key={idx} className="leading-relaxed">
                      <span className="text-slate-800">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1">
                  <Wrench className="w-3.5 h-3.5 text-slate-500" />
                  Tips Perawatan:
                </div>
                <p className="text-[11px] text-slate-600 leading-normal">
                  {item.maintenanceTips[0]}
                </p>
              </div>
            </div>
          </div>

          {/* Fun Fact banner */}
          <div className="bg-slate-900 text-slate-200 p-4 rounded-xl flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-white block mb-0.5">Tahukah Kamu? (Fakta Menarik TIK)</span>
              <p className="text-slate-300 leading-relaxed">{item.funFact}</p>
            </div>
          </div>

          {/* Mini Check for Gamification (+20 XP) */}
          <div className="bg-indigo-50/70 border border-indigo-200 p-4 rounded-xl">
            <h4 className="text-xs font-bold text-indigo-950 uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>🎯 Uji Pemahaman Kilat (+20 XP)</span>
              {miniQuizAnswered && miniQuizCorrect && (
                <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Jawaban Tepat! +20 XP
                </span>
              )}
            </h4>
            <p className="text-xs text-slate-700 mb-3">
              Apakah <span className="font-bold text-slate-900">{item.name}</span> termasuk dalam kategori{' '}
              <span className="font-bold text-indigo-700">{item.categoryLabel}</span>?
            </p>

            {!miniQuizAnswered ? (
              <div className="flex gap-2">
                <button
                  onClick={() => handleMiniCheck(true)}
                  className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  Ya, Tepat Sekali!
                </button>
                <button
                  onClick={() => handleMiniCheck(false)}
                  className="px-4 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-xs font-semibold transition-colors"
                >
                  Bukan, Salah
                </button>
              </div>
            ) : (
              <p className="text-xs text-slate-600">
                {miniQuizCorrect
                  ? `Hebat! ${item.name} memang berfungsi sebagai perangkat ${item.categoryLabel}.`
                  : `Kurang tepat. ${item.name} termasuk perangkat ${item.categoryLabel}.`}
              </p>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={() => {
              playSound('click');
              onClose();
            }}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-sm transition-colors"
          >
            Selesai Membaca
          </button>
        </div>
      </div>
    </div>
  );
};
