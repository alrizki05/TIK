import React from 'react';
import { UserProgress } from '../types/hardware';
import { playSound, getSoundEnabled, setSoundEnabled } from '../utils/audio';
import {
  Cpu,
  Wrench,
  Trophy,
  Award,
  GraduationCap,
  Volume2,
  VolumeX,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  progress: UserProgress;
  soundOn: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange,
  progress,
  soundOn,
  onToggleSound
}) => {
  const navTabs = [
    { id: 'explorer', label: 'Eksplorasi Hardware', icon: Cpu },
    { id: 'builder', label: 'Simulasi Rakit PC', icon: Wrench },
    { id: 'quiz', label: 'Kuis & Game TIK', icon: Trophy },
    { id: 'certificate', label: 'Sertifikat Siswa', icon: Award },
    { id: 'teacher', label: 'Ruang Guru & LKPD', icon: GraduationCap }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Brand */}
          <div
            onClick={() => {
              playSound('click');
              onTabChange('explorer');
            }}
            className="flex items-center gap-3 cursor-pointer shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg">
                  KompuPedia<span className="text-indigo-600 font-black">TIK</span>
                </span>
                <span className="text-[10px] uppercase font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                  Lab Virtual
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                Media Belajar Mandiri Hardware Komputer
              </p>
            </div>
          </div>

          {/* Center Navigation Links (Tabs) */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
            {navTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    playSound('click');
                    onTabChange(tab.id);
                  }}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-500'}`} />
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: XP / Level & Audio Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Student Gamification Badge */}
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
              <div className="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center text-[11px] font-bold shadow-xs">
                {progress.level}
              </div>
              <div className="text-left text-xs">
                <span className="font-bold text-slate-900 block font-mono leading-none">
                  {progress.xp} XP
                </span>
                <span className="text-[10px] text-slate-500 font-medium leading-none">
                  Tingkat Siswa
                </span>
              </div>
            </div>

            {/* Audio Toggle Button */}
            <button
              onClick={onToggleSound}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200"
              title={soundOn ? 'Matikan Suara Efek' : 'Nyalakan Suara Efek'}
            >
              {soundOn ? (
                <Volume2 className="w-4 h-4 text-indigo-600" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Sub Navigation bar */}
        <div className="lg:hidden flex items-center gap-1 overflow-x-auto py-2 border-t border-slate-100">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  playSound('click');
                  onTabChange(tab.id);
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all flex items-center gap-1 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
