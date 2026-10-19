import React, { useState, useEffect } from 'react';
import { UserProgress } from './types/hardware';
import { Navbar } from './components/Navbar';
import { HardwareExplorer } from './components/HardwareExplorer';
import { PCBuilderSimulation } from './components/PCBuilderSimulation';
import { QuizArena } from './components/QuizArena';
import { CertificateView } from './components/CertificateView';
import { TeacherToolkit } from './components/TeacherToolkit';
import { playSound, setSoundEnabled, getSoundEnabled } from './utils/audio';
import { Sparkles, Award } from 'lucide-react';

const STORAGE_KEY = 'kompupedia_tik_progress_v1';

const INITIAL_PROGRESS: UserProgress = {
  xp: 0,
  level: 1,
  completedHardwareIds: [],
  quizHighScore: 0,
  quizzesTaken: 0,
  pcBuiltSuccess: false,
  unlockedBadges: [],
  studentName: '',
  schoolName: '',
  gradeClass: ''
};

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('explorer');
  const [soundOn, setSoundOn] = useState<boolean>(true);
  const [toast, setToast] = useState<{ message: string; xp?: number } | null>(null);

  const [progress, setProgress] = useState<UserProgress>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          return JSON.parse(saved);
        }
      } catch {
        // ignore storage error
      }
    }
    return INITIAL_PROGRESS;
  });

  // Save to localStorage whenever progress changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // ignore
    }
  }, [progress]);

  // Recalculate level based on XP
  const calculateLevel = (xp: number) => {
    if (xp >= 700) return 5;
    if (xp >= 450) return 4;
    if (xp >= 250) return 3;
    if (xp >= 100) return 2;
    return 1;
  };

  const handleRewardXP = (earnedXp: number, message: string) => {
    setProgress((prev) => {
      const nextXp = prev.xp + earnedXp;
      const nextLevel = calculateLevel(nextXp);
      const newBadges = [...prev.unlockedBadges];

      // Check first badge
      if (prev.completedHardwareIds.length >= 1 && !newBadges.includes('first_step')) {
        newBadges.push('first_step');
      }
      // Check 10 components badge
      if (prev.completedHardwareIds.length >= 10 && !newBadges.includes('hardware_master')) {
        newBadges.push('hardware_master');
      }

      return {
        ...prev,
        xp: nextXp,
        level: nextLevel,
        unlockedBadges: newBadges
      };
    });

    setToast({ message, xp: earnedXp });
    setTimeout(() => setToast(null), 3000);
  };

  const handleMarkRead = (hardwareId: string) => {
    setProgress((prev) => {
      if (prev.completedHardwareIds.includes(hardwareId)) return prev;
      const updated = [...prev.completedHardwareIds, hardwareId];
      const newBadges = [...prev.unlockedBadges];
      if (updated.length >= 1 && !newBadges.includes('first_step')) {
        newBadges.push('first_step');
      }
      if (updated.length >= 10 && !newBadges.includes('hardware_master')) {
        newBadges.push('hardware_master');
      }
      return {
        ...prev,
        completedHardwareIds: updated,
        unlockedBadges: newBadges
      };
    });
  };

  const handleSuccessBuild = () => {
    setProgress((prev) => {
      const newBadges = [...prev.unlockedBadges];
      if (!newBadges.includes('pc_builder')) {
        newBadges.push('pc_builder');
      }
      return {
        ...prev,
        pcBuiltSuccess: true,
        unlockedBadges: newBadges
      };
    });
  };

  const handleQuizComplete = (score: number, total: number) => {
    const scorePercent = Math.round((score / total) * 100);
    setProgress((prev) => {
      const newBadges = [...prev.unlockedBadges];
      if (scorePercent >= 80 && !newBadges.includes('quiz_master')) {
        newBadges.push('quiz_master');
      }
      return {
        ...prev,
        quizzesTaken: prev.quizzesTaken + 1,
        quizHighScore: Math.max(prev.quizHighScore, scorePercent),
        unlockedBadges: newBadges
      };
    });
    handleRewardXP(50, `Menyelesaikan Ujian Asesmen TIK (${scorePercent}%)`);
  };

  const handleUpdateStudentInfo = (name: string, school: string, gradeClass: string) => {
    setProgress((prev) => ({
      ...prev,
      studentName: name,
      schoolName: school,
      gradeClass: gradeClass
    }));
  };

  const handleToggleSound = () => {
    const nextState = !soundOn;
    setSoundOn(nextState);
    setSoundEnabled(nextState);
    if (nextState) {
      playSound('click');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        progress={progress}
        soundOn={soundOn}
        onToggleSound={handleToggleSound}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'explorer' && (
          <HardwareExplorer
            completedIds={progress.completedHardwareIds}
            onMarkRead={handleMarkRead}
            onRewardXP={handleRewardXP}
          />
        )}

        {activeTab === 'builder' && (
          <PCBuilderSimulation
            onSuccessBuild={handleSuccessBuild}
            onRewardXP={handleRewardXP}
          />
        )}

        {activeTab === 'quiz' && (
          <QuizArena
            onQuizComplete={handleQuizComplete}
            onRewardXP={handleRewardXP}
          />
        )}

        {activeTab === 'certificate' && (
          <CertificateView
            progress={progress}
            onUpdateStudentInfo={handleUpdateStudentInfo}
          />
        )}

        {activeTab === 'teacher' && <TeacherToolkit />}
      </main>

      {/* Gamification Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-3 animate-in slide-in-from-bottom-5 duration-200">
          <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>{toast.message}</span>
              {toast.xp && (
                <span className="text-amber-400 font-mono font-bold">
                  +{toast.xp} XP
                </span>
              )}
            </div>
            <span className="text-[10px] text-slate-400">
              Progres belajar mandiri tersimpan
            </span>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-xs text-slate-500 text-center no-print mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            <strong>KompuPedia TIK</strong> · Laboratorium Virtual Interaktif Pembelajaran Hardware Komputer & Informatika
          </p>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Kurikulum Merdeka Informatika</span>
            <span aria-hidden="true">·</span>
            <span>Simulasi POST BIOS</span>
            <span aria-hidden="true">·</span>
            <span>Uji Hands-on Hardware</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
