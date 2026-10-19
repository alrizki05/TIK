import React, { useState } from 'react';
import { UserProgress, Badge } from '../types/hardware';
import { BADGES_LIST } from '../data/hardwareData';
import { playSound } from '../utils/audio';
import {
  Award,
  Printer,
  Sparkles,
  CheckCircle,
  School,
  User,
  ShieldCheck,
  Calendar,
  Lock
} from 'lucide-react';

interface CertificateProps {
  progress: UserProgress;
  onUpdateStudentInfo: (name: string, school: string, gradeClass: string) => void;
}

export const CertificateView: React.FC<CertificateProps> = ({
  progress,
  onUpdateStudentInfo
}) => {
  const [name, setName] = useState(progress.studentName || 'Siswa Berprestasi');
  const [school, setSchool] = useState(progress.schoolName || 'SMP / SMA Negeri');
  const [gradeClass, setGradeClass] = useState(progress.gradeClass || 'Kelas VII / X Informatika');
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveInfo = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateStudentInfo(name, school, gradeClass);
    setIsEditing(false);
    playSound('correct');
  };

  const handlePrint = () => {
    playSound('click');
    window.print();
  };

  const todayDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="space-y-8">
      {/* Student Profile & Gamification Stats Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6 no-print">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 text-white flex items-center justify-center font-bold text-xl shadow-md">
            Lvl {progress.level}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-900">
                {progress.studentName || 'Profil Teknisi Siswa'}
              </h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-xs text-indigo-600 font-semibold hover:underline"
              >
                {isEditing ? 'Tutup' : 'Ubah Nama'}
              </button>
            </div>
            <p className="text-xs text-slate-500">
              {progress.schoolName || 'Sekolah Penggerak'} · {progress.gradeClass || 'Mata Pelajaran Informatika (TIK)'}
            </p>
            <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-600">
              <span>
                Total XP: <span className="font-bold text-indigo-600">{progress.xp} XP</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>
                Perangkat Dipelajari: <span className="font-bold text-slate-900">{progress.completedHardwareIds.length}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            Cetak / Simpan PDF
          </button>
        </div>
      </div>

      {/* Edit Form Modal/Drawer (if open) */}
      {isEditing && (
        <form
          onSubmit={handleSaveInfo}
          className="bg-indigo-50/70 border border-indigo-200 rounded-2xl p-5 space-y-4 no-print animate-in fade-in"
        >
          <h3 className="text-sm font-bold text-indigo-950 flex items-center gap-2">
            <User className="w-4 h-4 text-indigo-600" />
            Data Diri Siswa untuk Sertifikat
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                Nama Lengkap Siswa
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Muhammad Fajar"
                required
                className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                Nama Sekolah
              </label>
              <input
                type="text"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                placeholder="Contoh: SMP Negeri 1 Nusantara"
                required
                className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-slate-600 block mb-1">
                Kelas / Rombel
              </label>
              <input
                type="text"
                value={gradeClass}
                onChange={(e) => setGradeClass(e.target.value)}
                placeholder="Contoh: Kelas 7A / Fase D"
                required
                className="w-full px-3 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 transition-colors"
            >
              Simpan Data Sertifikat
            </button>
          </div>
        </form>
      )}

      {/* Badges and Achievements Grid */}
      <div className="no-print space-y-3">
        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-500" />
          Koleksi Lencana Penghargaan Siswa
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {BADGES_LIST.map((badge) => {
            const isUnlocked = progress.unlockedBadges.includes(badge.id);
            return (
              <div
                key={badge.id}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  isUnlocked
                    ? 'bg-amber-50/60 border-amber-200 text-slate-900'
                    : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isUnlocked
                        ? 'bg-amber-500 text-white shadow-xs'
                        : 'bg-slate-200 text-slate-400'
                    }`}
                  >
                    {isUnlocked ? (
                      <Award className="w-4 h-4" />
                    ) : (
                      <Lock className="w-4 h-4" />
                    )}
                  </div>
                  {isUnlocked && (
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      Terbuka
                    </span>
                  )}
                </div>
                <h4 className="text-xs font-bold mb-0.5 text-slate-800">
                  {badge.title}
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* The Official Printable Certificate */}
      <div className="bg-white border-8 border-double border-indigo-900 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden text-center space-y-8 print:border-8 print:shadow-none print:m-0">
        
        {/* Subtle Watermark or Corner Embellishments */}
        <div className="absolute top-4 left-4 border-t-2 border-l-2 border-amber-500 w-12 h-12" />
        <div className="absolute top-4 right-4 border-t-2 border-r-2 border-amber-500 w-12 h-12" />
        <div className="absolute bottom-4 left-4 border-b-2 border-l-2 border-amber-500 w-12 h-12" />
        <div className="absolute bottom-4 right-4 border-b-2 border-r-2 border-amber-500 w-12 h-12" />

        {/* Certificate Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-indigo-900 font-bold tracking-widest text-xs uppercase">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            KOMPUPEDIA TIK · KURIKULUM MERDEKA INFORMATIKA
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif uppercase">
            Sertifikat Kelulusan
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium tracking-wide">
            NOMOR SERTIFIKAT: TIK-HW-{Math.abs((progress.xp * 97) % 99999).toString().padStart(5, '0')}
          </p>
        </div>

        {/* Certificate Body */}
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-xs sm:text-sm text-slate-600 italic">
            Diberikan sebagai bukti kelulusan penguasaan kompetensi dasar perangkat keras komputer kepada:
          </p>

          <div className="py-2 border-b-2 border-indigo-200 inline-block px-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-indigo-950 font-serif">
              {progress.studentName || name}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600">
            Asal Sekolah: <span className="font-bold text-slate-800">{progress.schoolName || school}</span> ·{' '}
            <span className="font-semibold text-slate-700">{progress.gradeClass || gradeClass}</span>
          </p>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-xl mx-auto">
            Telah berhasil mempelajari seluruh materi <span className="font-bold">Pengenalan Perangkat Keras Komputer (Hardware TIK)</span>, menyelesaikan simulasi perakitan PC secara mandiri, serta lulus ujian asesmen pemahaman konsep perangkat masukan, pemrosesan, penyimpanan, dan keluaran.
          </p>
        </div>

        {/* Certificate Metadata / Badges in Print */}
        <div className="flex items-center justify-center gap-8 text-xs text-slate-600 pt-2">
          <div className="flex items-center gap-1.5 font-medium">
            <Calendar className="w-4 h-4 text-indigo-600" />
            <span>Tanggal: {todayDate}</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Peringkat: Tingkat {progress.level} ({progress.xp} XP)</span>
          </div>
        </div>

        {/* Signatures */}
        <div className="pt-8 grid grid-cols-2 max-w-lg mx-auto gap-12 text-xs">
          <div className="text-center space-y-1">
            <div className="h-14 flex items-end justify-center">
              <span className="font-serif italic text-slate-400 font-semibold">[Stempel Digital]</span>
            </div>
            <div className="border-t border-slate-300 pt-1 font-bold text-slate-900">
              Sistem Lab KompuPedia
            </div>
            <span className="text-[10px] text-slate-500 block">Platform Belajar Mandiri</span>
          </div>

          <div className="text-center space-y-1">
            <div className="h-14 flex items-end justify-center">
              <span className="font-serif italic text-slate-800 font-semibold">Guru Pengampu TIK</span>
            </div>
            <div className="border-t border-slate-300 pt-1 font-bold text-slate-900">
              Guru TIK / Informatika
            </div>
            <span className="text-[10px] text-slate-500 block">Fasilitator Pembelajaran</span>
          </div>
        </div>
      </div>
    </div>
  );
};
