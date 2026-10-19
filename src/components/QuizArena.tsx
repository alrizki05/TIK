import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { QUIZ_QUESTIONS } from '../data/quizData';
import { SORTING_GAME_ITEMS } from '../data/hardwareData';
import { QuizQuestion, SortingItem } from '../types/hardware';
import { playSound } from '../utils/audio';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  HelpCircle,
  Timer,
  Flame,
  ArrowRight,
  Brain,
  Layers,
  Award
} from 'lucide-react';

interface QuizArenaProps {
  onQuizComplete: (score: number, total: number) => void;
  onRewardXP: (xp: number, message: string) => void;
}

export const QuizArena: React.FC<QuizArenaProps> = ({
  onQuizComplete,
  onRewardXP
}) => {
  const [activeTab, setActiveTab] = useState<'assessment' | 'sorting'>('assessment');

  // Assessment Quiz State
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Sorting Challenge State
  const [sortIndex, setSortIndex] = useState(0);
  const [sortScore, setSortScore] = useState(0);
  const [sortStreak, setSortStreak] = useState(0);
  const [sortTimeLeft, setSortTimeLeft] = useState(60);
  const [sortActive, setSortActive] = useState(false);
  const [sortFinished, setSortFinished] = useState(false);
  const [lastSortFeedback, setLastSortFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);

  // Timer for sorting game
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (sortActive && sortTimeLeft > 0 && !sortFinished) {
      timer = setInterval(() => {
        setSortTimeLeft((t) => {
          if (t <= 1) {
            setSortFinished(true);
            setSortActive(false);
            playSound('fanfare');
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [sortActive, sortTimeLeft, sortFinished]);

  // Handler for Multiple-Choice Questions
  const currentQuestion: QuizQuestion = QUIZ_QUESTIONS[currentQIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    playSound('click');
    setSelectedAnswer(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);

    const isCorrect = selectedAnswer === currentQuestion.correctIndex;
    if (isCorrect) {
      playSound('correct');
      const newScore = score + 1;
      const newStreak = streak + 1;
      setScore(newScore);
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
      onRewardXP(25 + newStreak * 5, `Menjawab benar soal #${currentQIndex + 1}!`);
    } else {
      playSound('error');
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    playSound('click');
    if (currentQIndex + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
      const finalScorePercent = Math.round(((score + (selectedAnswer === currentQuestion.correctIndex ? 0 : 0)) / QUIZ_QUESTIONS.length) * 100);
      onQuizComplete(score, QUIZ_QUESTIONS.length);
      if (finalScorePercent >= 75) {
        playSound('fanfare');
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleRestartQuiz = () => {
    playSound('click');
    setCurrentQIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setQuizFinished(false);
  };

  // Handler for Sorting Challenge
  const handleStartSortGame = () => {
    playSound('click');
    setSortIndex(0);
    setSortScore(0);
    setSortStreak(0);
    setSortTimeLeft(60);
    setSortActive(true);
    setSortFinished(false);
    setLastSortFeedback(null);
  };

  const handleSortSelection = (category: string) => {
    if (!sortActive || sortFinished) return;
    const currentItem = SORTING_GAME_ITEMS[sortIndex];
    const isCorrect = currentItem.category === category;

    if (isCorrect) {
      playSound('correct');
      setSortScore((s) => s + 1);
      setSortStreak((st) => st + 1);
      setLastSortFeedback({
        isCorrect: true,
        text: `Tepat! ${currentItem.name} adalah ${category.toUpperCase()}`
      });
      onRewardXP(15, `Klasifikasi tepat: ${currentItem.name}`);
    } else {
      playSound('error');
      setSortStreak(0);
      setLastSortFeedback({
        isCorrect: false,
        text: `Keliru! ${currentItem.name} sebenarnya adalah ${currentItem.category.toUpperCase()}`
      });
    }

    if (sortIndex + 1 < SORTING_GAME_ITEMS.length) {
      setSortIndex((i) => i + 1);
    } else {
      // Completed all items
      setSortFinished(true);
      setSortActive(false);
      playSound('fanfare');
      confetti({ particleCount: 90, spread: 70 });
    }
  };

  return (
    <div className="space-y-6">
      {/* Tab Switcher */}
      <div className="flex items-center justify-center">
        <div className="p-1 bg-slate-200/80 rounded-xl flex items-center gap-1">
          <button
            onClick={() => {
              playSound('click');
              setActiveTab('assessment');
            }}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'assessment'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Brain className="w-4 h-4 text-indigo-600" />
            Ujian Evaluasi Mandiri (Pilihan Ganda)
          </button>
          <button
            onClick={() => {
              playSound('click');
              setActiveTab('sorting');
            }}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'sorting'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-4 h-4 text-amber-500" />
            Tantangan Klasifikasi Cepat (Sorting Game)
          </button>
        </div>
      </div>

      {/* MODE 1: ASSESSMENT QUIZ */}
      {activeTab === 'assessment' && (
        <div className="max-w-3xl mx-auto space-y-6">
          {!quizFinished ? (
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-8 space-y-6">
              
              {/* Question Header & Streak Tracker */}
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                    Soal {currentQIndex + 1} dari {QUIZ_QUESTIONS.length}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-slate-500">
                      Tingkat: <span className="font-semibold text-slate-700">{currentQuestion.difficulty}</span>
                    </span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="text-xs text-slate-500">
                      Kategori: <span className="font-semibold text-slate-700 capitalize">{currentQuestion.category}</span>
                    </span>
                  </div>
                </div>

                {/* Score & Streak */}
                <div className="flex items-center gap-3">
                  {streak > 1 && (
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 animate-pulse">
                      <Flame className="w-4 h-4 text-amber-500" />
                      {streak}x Beruntun!
                    </div>
                  )}
                  <div className="text-right">
                    <span className="text-xs text-slate-400 font-medium block">Skor Benar</span>
                    <span className="text-sm font-bold text-slate-900 font-mono">
                      {score} / {currentQIndex + (isAnswerSubmitted ? 1 : 0)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-indigo-600 h-full transition-all duration-300"
                  style={{
                    width: `${((currentQIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`
                  }}
                />
              </div>

              {/* Scenario Box (if present) */}
              {currentQuestion.scenario && (
                <div className="p-4 bg-indigo-50/60 border border-indigo-150 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  <span className="font-bold text-indigo-900 block mb-1">
                    📖 Studi Kasus Siswa:
                  </span>
                  {currentQuestion.scenario}
                </div>
              )}

              {/* Main Question Text */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {currentQuestion.question}
              </h3>

              {/* Multiple Choice Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = selectedAnswer === idx;
                  const isCorrect = idx === currentQuestion.correctIndex;

                  let optionStyle =
                    'border-slate-200 bg-white hover:border-indigo-300 hover:bg-slate-50/60 text-slate-800';

                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      optionStyle =
                        'border-emerald-500 bg-emerald-50/80 text-emerald-950 font-bold ring-2 ring-emerald-200';
                    } else if (isSelected && !isCorrect) {
                      optionStyle =
                        'border-rose-400 bg-rose-50/80 text-rose-950 font-medium ring-2 ring-rose-200';
                    } else {
                      optionStyle = 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
                    }
                  } else if (isSelected) {
                    optionStyle =
                      'border-indigo-500 bg-indigo-50/70 text-indigo-950 font-bold ring-2 ring-indigo-200';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswerSubmitted}
                      className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-3 ${optionStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center font-mono font-bold text-xs text-slate-700 shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{option}</span>
                      </div>

                      {isAnswerSubmitted && (
                        <div>
                          {isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                          )}
                          {isSelected && !isCorrect && (
                            <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                          )}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Pedagogical Explanation Box (Shows after submitting answer) */}
              {isAnswerSubmitted && (
                <div className="p-4 bg-slate-900 text-white rounded-xl text-xs space-y-2 animate-in fade-in">
                  <div className="flex items-center gap-1.5 font-bold text-amber-400">
                    <Sparkles className="w-4 h-4" />
                    Penjelasan Guru TIK:
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-end pt-2">
                {!isAnswerSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                    className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Kunci Jawaban
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center gap-2"
                  >
                    <span>
                      {currentQIndex + 1 === QUIZ_QUESTIONS.length
                        ? 'Lihat Hasil Akhir'
                        : 'Soal Selanjutnya'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Finished Scorecard */
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 text-center space-y-6">
              <div className="w-20 h-20 bg-indigo-50 border border-indigo-200 rounded-2xl mx-auto flex items-center justify-center shadow-inner">
                <Trophy className="w-10 h-10 text-amber-500" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                  Ujian Evaluasi Selesai
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  {Math.round((score / QUIZ_QUESTIONS.length) * 100) >= 80
                    ? 'Luar Biasa! Pemahaman Sangat Baik'
                    : Math.round((score / QUIZ_QUESTIONS.length) * 100) >= 60
                    ? 'Bagus! Sudah Menguasai Dasar TIK'
                    : 'Tetap Semangat! Pelajari Ulang Komponen'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                  Kamu telah menyelesaikan seluruh asesmen pengenalan perangkat komputer dengan baik.
                </p>
              </div>

              {/* Stat summary cards */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[11px] text-slate-400 block mb-1">Skor Akhir</span>
                  <span className="text-xl font-bold text-slate-900 font-mono">
                    {Math.round((score / QUIZ_QUESTIONS.length) * 100)}%
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[11px] text-slate-400 block mb-1">Benar</span>
                  <span className="text-xl font-bold text-emerald-600 font-mono">
                    {score} / {QUIZ_QUESTIONS.length}
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[11px] text-slate-400 block mb-1">Rekor Streak</span>
                  <span className="text-xl font-bold text-amber-500 font-mono">
                    {maxStreak}x
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <button
                  onClick={handleRestartQuiz}
                  className="px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl transition-colors flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Ulangi Kuis
                </button>
                <button
                  onClick={() => {
                    playSound('click');
                    setActiveTab('sorting');
                  }}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-2"
                >
                  <span>Coba Game Klasifikasi</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* MODE 2: SPEED SORTING CHALLENGE */}
      {activeTab === 'sorting' && (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
            
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-amber-500" />
                  Tantangan Klasifikasi Cepat
                </h3>
                <p className="text-xs text-slate-500">
                  Kelompokkan setiap perangkat ke dalam wadah yang tepat secepat mungkin!
                </p>
              </div>

              {sortActive && (
                <div className="flex items-center gap-2 text-xs font-bold bg-slate-900 text-white px-3 py-1.5 rounded-xl font-mono">
                  <Timer className="w-4 h-4 text-amber-400" />
                  {sortTimeLeft}s
                </div>
              )}
            </div>

            {!sortActive && !sortFinished ? (
              /* Welcome screen for sorting challenge */
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-amber-50 border border-amber-200 rounded-2xl mx-auto flex items-center justify-center">
                  <Layers className="w-8 h-8 text-amber-600" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-900">
                    Siap Menguji Kecepatan Ingatanmu?
                  </h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Kamu memiliki waktu 60 detik untuk menyortir 16 perangkat komputer ke 4 kategori: Masukan (Input), Pemrosesan, Penyimpanan (Storage), dan Keluaran (Output).
                  </p>
                </div>
                <button
                  onClick={handleStartSortGame}
                  className="px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-xl shadow-sm transition-all"
                >
                  🚀 Mulai Tantangan (60 Detik)
                </button>
              </div>
            ) : sortFinished ? (
              /* Finished Sorting Game */
              <div className="text-center py-8 space-y-5">
                <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-2xl mx-auto flex items-center justify-center">
                  <Award className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-slate-900">
                    Tantangan Selesai!
                  </h4>
                  <p className="text-xs text-slate-500">
                    Kamu berhasil menyortir{' '}
                    <span className="font-bold text-slate-900">{sortScore}</span> dari{' '}
                    <span className="font-bold text-slate-900">{SORTING_GAME_ITEMS.length}</span> perangkat dengan tepat.
                  </p>
                </div>

                <div className="flex justify-center gap-3">
                  <button
                    onClick={handleStartSortGame}
                    className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors"
                  >
                    Main Lagi
                  </button>
                </div>
              </div>
            ) : (
              /* Active Sorting Play Area */
              <div className="space-y-6">
                
                {/* Stats Bar */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>
                    Item: <span className="font-bold text-slate-800">{sortIndex + 1}</span> / {SORTING_GAME_ITEMS.length}
                  </span>
                  <span>
                    Skor: <span className="font-bold text-emerald-600">{sortScore}</span>
                  </span>
                  {sortStreak > 1 && (
                    <span className="text-amber-600 font-bold">
                      🔥 {sortStreak} Streak
                    </span>
                  )}
                </div>

                {/* Target Hardware Item Card */}
                {SORTING_GAME_ITEMS[sortIndex] && (
                  <div className="bg-slate-900 text-white p-6 rounded-2xl text-center space-y-2 border border-slate-800 shadow-md">
                    <span className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase">
                      PERANGKAT SAAT INI
                    </span>
                    <h2 className="text-2xl font-extrabold text-white">
                      {SORTING_GAME_ITEMS[sortIndex].name}
                    </h2>
                    <p className="text-xs text-slate-400">
                      Petunjuk: "{SORTING_GAME_ITEMS[sortIndex].hint}"
                    </p>
                  </div>
                )}

                {/* Last feedback banner */}
                {lastSortFeedback && (
                  <div
                    className={`p-2.5 rounded-xl text-center text-xs font-semibold ${
                      lastSortFeedback.isCorrect
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-rose-50 text-rose-800 border border-rose-200'
                    }`}
                  >
                    {lastSortFeedback.text}
                  </div>
                )}

                {/* 4 Classification Buckets (Buttons) */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleSortSelection('input')}
                    className="p-4 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-xl text-center transition-all group"
                  >
                    <span className="text-xs font-bold text-sky-900 block group-hover:scale-105 transition-transform">
                      1. Masukan (Input)
                    </span>
                    <span className="text-[10px] text-sky-600">
                      Memasukkan data/perintah
                    </span>
                  </button>

                  <button
                    onClick={() => handleSortSelection('processing')}
                    className="p-4 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl text-center transition-all group"
                  >
                    <span className="text-xs font-bold text-emerald-900 block group-hover:scale-105 transition-transform">
                      2. Pemrosesan
                    </span>
                    <span className="text-[10px] text-emerald-600">
                      Mengolah & menghitung
                    </span>
                  </button>

                  <button
                    onClick={() => handleSortSelection('storage')}
                    className="p-4 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-xl text-center transition-all group"
                  >
                    <span className="text-xs font-bold text-amber-900 block group-hover:scale-105 transition-transform">
                      3. Penyimpanan
                    </span>
                    <span className="text-[10px] text-amber-600">
                      Menyimpan file permanen
                    </span>
                  </button>

                  <button
                    onClick={() => handleSortSelection('output')}
                    className="p-4 bg-violet-50 hover:bg-violet-100 border border-violet-200 rounded-xl text-center transition-all group"
                  >
                    <span className="text-xs font-bold text-violet-900 block group-hover:scale-105 transition-transform">
                      4. Keluaran (Output)
                    </span>
                    <span className="text-[10px] text-violet-600">
                      Menampilkan hasil ke layar/kertas
                    </span>
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
};
