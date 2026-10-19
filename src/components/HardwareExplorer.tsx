import React, { useState, useMemo } from 'react';
import { HARDWARE_LIST, CATEGORY_INFO } from '../data/hardwareData';
import { HardwareItem, HardwareCategory } from '../types/hardware';
import { HardwareVisual } from './HardwareVisuals';
import { HardwareDetailModal } from './HardwareDetailModal';
import { playSound } from '../utils/audio';
import {
  Search,
  CheckCircle,
  Lightbulb,
  ArrowRight,
  BookOpen,
  Sparkles,
  Zap
} from 'lucide-react';

interface ExplorerProps {
  completedIds: string[];
  onMarkRead: (id: string) => void;
  onRewardXP: (xp: number, message: string) => void;
}

export const HardwareExplorer: React.FC<ExplorerProps> = ({
  completedIds,
  onMarkRead,
  onRewardXP
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalItem, setActiveModalItem] = useState<HardwareItem | null>(null);

  const filteredItems = useMemo(() => {
    return HARDWARE_LIST.filter((item) => {
      const matchCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.indonesianName.toLowerCase().includes(q) ||
        item.shortDef.toLowerCase().includes(q) ||
        item.mainFunction.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenDetail = (item: HardwareItem) => {
    playSound('click');
    setActiveModalItem(item);
    if (!completedIds.includes(item.id)) {
      onMarkRead(item.id);
      onRewardXP(15, `Mempelajari perangkat ${item.name}`);
    }
  };

  const currentCategoryInfo = CATEGORY_INFO[selectedCategory] || CATEGORY_INFO.all;

  return (
    <div className="space-y-6">
      {/* Hero Banner for Learning */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-indigo-300 uppercase">
            <BookOpen className="w-4 h-4" />
            Laboratorium Hardware TIK
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Kenali Perangkat Keras Komputer
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Klik dan jelajahi 18 komponen komputer lengkap di bawah ini. Uji kinerjanya melalui simulator hands-on, analogi sehari-hari, anatomi sirkuit visual, dan spesifikasi teknologi industri.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
            <div>
              <span className="font-bold text-white text-base mr-1.5">
                {completedIds.length}
              </span>
              / {HARDWARE_LIST.length} Komponen Dipelajari
            </div>
            <span aria-hidden="true">·</span>
            <div>
              Progres Belajar:{' '}
              <span className="font-semibold text-emerald-400">
                {Math.round((completedIds.length / HARDWARE_LIST.length) * 100)}%
              </span>
            </div>
          </div>
        </div>

        {/* Decorative background visual */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none hidden md:flex items-center justify-center">
          <HardwareVisual type="cpu" className="w-80 h-80" />
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        {/* Category Tabs */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'Semua (18)' },
              { id: 'input', label: '1. Masukan (Input)' },
              { id: 'processing', label: '2. Pemrosesan' },
              { id: 'storage', label: '3. Penyimpanan' },
              { id: 'output', label: '4. Keluaran' },
              { id: 'peripheral', label: '5. Daya & Casis' }
            ].map((tab) => {
              const active = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    playSound('click');
                    setSelectedCategory(tab.id);
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
                    active
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari komponen TIK..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Explanation Note */}
        <div className="p-3.5 bg-white border border-slate-200 rounded-xl flex items-center justify-between gap-4">
          <div className="text-xs text-slate-600">
            <span className="font-bold text-slate-800 mr-2">
              {currentCategoryInfo.label}:
            </span>
            {currentCategoryInfo.desc}
          </div>
          <span className="text-xs font-mono text-slate-400 shrink-0">
            Menampilkan {filteredItems.length} perangkat
          </span>
        </div>
      </div>

      {/* Grid of Hardware Cards */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
          <p className="text-slate-600 text-sm font-medium">
            Tidak ditemukan perangkat komputer yang cocok dengan pencarian "{searchQuery}".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-3 text-xs font-semibold text-indigo-600 hover:underline"
          >
            Reset Pencarian
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => {
            const isCompleted = completedIds.includes(item.id);

            return (
              <div
                key={item.id}
                onClick={() => handleOpenDetail(item)}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-xl transition-all duration-200 flex flex-col overflow-hidden cursor-pointer relative"
              >
                {/* Completed Badge Indicator */}
                {isCompleted && (
                  <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                    <CheckCircle className="w-3 h-3" />
                    Sudah Dipelajari
                  </div>
                )}

                {/* SVG Visual Header */}
                <div className="bg-slate-900 p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-950 transition-colors">
                  <HardwareVisual
                    type={item.svgType}
                    className="w-full h-44 object-contain transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 left-3 flex items-center gap-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300 bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-xs">
                      {item.categoryLabel}
                    </span>
                    <span className="text-[10px] font-medium text-emerald-300 bg-emerald-950/80 px-1.5 py-0.5 rounded flex items-center gap-1 backdrop-blur-xs">
                      <Zap className="w-2.5 h-2.5 text-emerald-400" />
                      Live Demo
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {item.indonesianName}
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.shortDef}
                    </p>
                  </div>

                  {/* Analogi Teaser */}
                  <div className="pt-3 border-t border-slate-100 flex items-start gap-2">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <div className="text-[11px] text-slate-600">
                      <span className="font-semibold text-slate-800">Analogi: </span>
                      <span className="text-slate-600">{item.everydayAnalogy.title}</span>
                    </div>
                  </div>

                  {/* Action button */}
                  <div className="pt-2 flex items-center justify-between text-xs font-semibold text-indigo-600 group-hover:text-indigo-700">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                      Buka Simulator & Anatomi
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Hardware Detail Modal */}
      <HardwareDetailModal
        item={activeModalItem}
        onClose={() => setActiveModalItem(null)}
        onRewardXP={onRewardXP}
      />
    </div>
  );
};
