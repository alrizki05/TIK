import React, { useState } from 'react';
import { playSound } from '../utils/audio';
import {
  GraduationCap,
  BookOpen,
  Printer,
  Sparkles,
  HelpCircle,
  FileSpreadsheet,
  CheckCircle2,
  Lightbulb,
  Clock,
  Target,
  ShieldAlert,
  Cpu,
  Layers
} from 'lucide-react';

export const TeacherToolkit: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'strategy' | 'modul' | 'lkpd' | 'faq'>('strategy');

  const handlePrintLKPD = () => {
    playSound('click');
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Teacher Toolkit Header */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden no-print">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            <GraduationCap className="w-4 h-4" />
            Ruang Fasilitator Guru Informatika & TIK
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Panduan Mengajar & Modul Ajar TIK
          </h2>
          <p className="text-sm text-slate-200 leading-relaxed">
            Perangkat lengkap bagi Bapak/Ibu Guru untuk memfasilitasi kelas Informatika / TIK dengan metode kontekstual, analogi ramah pemula, simulasi praktikum digital, dan lembar kerja peserta didik siap cetak.
          </p>

          <div className="pt-2 flex items-center gap-4 text-xs text-indigo-300">
            <span>Kurikulum Merdeka</span>
            <span aria-hidden="true">·</span>
            <span>Elemen: Sistem Komputer (SK)</span>
            <span aria-hidden="true">·</span>
            <span>Fase D (SMP) & Fase E (SMA/SMK)</span>
          </div>
        </div>
      </div>

      {/* Sub Tabs Navigation */}
      <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-xl overflow-x-auto no-print">
        {[
          { id: 'strategy', label: '💡 Strategi & Analogi Mengajar', icon: Lightbulb },
          { id: 'modul', label: '📋 Rencana Modul Ajar (RPP)', icon: BookOpen },
          { id: 'lkpd', label: '📝 LKPD Siswa Siap Cetak', icon: FileSpreadsheet },
          { id: 'faq', label: '❓ Bank Jawaban Pertanyaan Siswa', icon: HelpCircle }
        ].map((tab) => {
          const active = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                playSound('click');
                setActiveSubTab(tab.id as 'strategy' | 'modul' | 'lkpd' | 'faq');
              }}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all ${
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

      {/* SUBTAB 1: STRATEGI & ANALOGI */}
      {activeSubTab === 'strategy' && (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              Metode Praktis Mengajar Perangkat Komputer (Anti-Bingung)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Materi perangkat keras seringkali dianggap rumit oleh siswa jika langsung dihadapkan pada istilah teknis (GHz, DDR5, PCIe, Bus Width). Kuncinya adalah menggunakan <strong>Analogi Bertingkat</strong> dan <strong>Eksplorasi Mandiri</strong>:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-2">
                <span className="text-xs font-bold text-indigo-900 block">
                  1. Analogi Dapur Restoran (CPU, RAM, Storage)
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  - <strong>CPU (Kepala Koki):</strong> Yang berpikir dan memasak makanan.<br />
                  - <strong>RAM (Meja Kerja / Talenan):</strong> Meja tempat bahan masakan aktif ditaruh. Jika meja kecil, koki bolak-balik mengambil bahan.<br />
                  - <strong>SSD / Hard Disk (Gudang Belakang):</strong> Lemari penyimpanan bahan permanen yang sangat luas.
                </p>
              </div>

              <div className="p-4 bg-sky-50/70 border border-sky-200 rounded-xl space-y-2">
                <span className="text-xs font-bold text-sky-900 block">
                  2. Analogi Jalan Raya & Jaringan Bus (Motherboard & PCIe)
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  - <strong>Motherboard:</strong> Kawasan tata kota terpadu.<br />
                  - <strong>Jalur Bus & PCIe:</strong> Jalan tol bebas hambatan multi-lajur tempat paket data melaju kencang antar komponen tanpa macet.
                </p>
              </div>

              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
                <span className="text-xs font-bold text-amber-900 block">
                  3. Analogi Tubuh Manusia (Input & Output)
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  - <strong>Input (Indra Penerima):</strong> Keyboard/Mouse (Jari tangan), Kamera Webcam (Mata), Mikrofon (Telinga).<br />
                  - <strong>Output (Indra Penyaji):</strong> Monitor (Wajah ekspresi), Speaker (Mulut bersuara), Printer (Juru tulis fisik).
                </p>
              </div>

              <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl space-y-2">
                <span className="text-xs font-bold text-rose-900 block">
                  4. Keselamatan Kerja & Prosedur Lab (K3LH Komputer)
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Ajarkan siswa untuk tidak menyentuh pin emas kuningan dengan jari berminyak, selalu menyentuh sasis logam sebelum merakit untuk membuang listrik statis tubuh, dan tidak menutup ventilasi laptop.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-3">
            <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Saran Alur Praktik Pembelajaran di Lab Komputer
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              1. <strong>Apersepsi (10 Menit):</strong> Buka tanya jawab: <em>"Kenapa HP atau laptop kita bisa panas saat dipakai main game berjam-jam?"</em> (Mengarahkan ke materi CPU, GPU, dan Cooler).<br />
              2. <strong>Eksplorasi Virtual (25 Menit):</strong> Siswa membuka tab "Eksplorasi Hardware" dan mencoba simulasi interaktif (uji stress CPU, tes RAM, balap salin SSD vs HDD).<br />
              3. <strong>Praktik Rakit PC (25 Menit):</strong> Siswa merakit PC secara virtual di tab "Simulasi Rakit PC" hingga menyala tanpa error POST.<br />
              4. <strong>Evaluasi & Cetak Sertifikat (20 Menit):</strong> Mengerjakan Kuis Asesmen Mandiri dan mencetak sertifikat hasil belajar.
            </p>
          </div>
        </div>
      )}

      {/* SUBTAB 2: MODUL AJAR (RPP RINGKAS) */}
      {activeSubTab === 'modul' && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">
              Kurikulum Merdeka · Informatika
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Modul Ajar: Sistem Komputer & Pengenalan Perangkat Keras
            </h3>
            <p className="text-xs text-slate-500">
              Alokasi Waktu: 2 Pertemuan (4 JP x 40 menit) · Fase D (Kelas 7/8 SMP) atau Fase E (Kelas 10 SMA/SMK)
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            <div>
              <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-1.5 text-xs uppercase tracking-wider">
                <Target className="w-4 h-4 text-indigo-600" />
                Capaian & Tujuan Pembelajaran (TP)
              </h4>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
                <li>Peserta didik mampu mengidentifikasi komponen penyusun komputer beserta spesifikasi dasarnya.</li>
                <li>Peserta didik mampu membedakan fungsi perangkat masukan, pemrosesan, penyimpanan sekunder, dan keluaran.</li>
                <li>Peserta didik mampu mensimulasikan urutan perakitan komponen PC secara sistematis dan mengidentifikasi kode kegagalan POST (Power-On Self-Test).</li>
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2 text-xs uppercase tracking-wider">
                <Clock className="w-4 h-4 text-emerald-600" />
                Rincian Kegiatan Pembelajaran
              </h4>
              
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-800 block text-xs mb-0.5">
                    1. Pertemuan 1: Anatomi & Klasifikasi Hardware
                  </span>
                  <p className="text-xs text-slate-600">
                    Fokus pada pengenalan 18 komponen hardware, pemahaman cara kerja CPU-RAM-Storage, serta bermain game Tantangan Klasifikasi Cepat untuk melatih ingatan kategori perangkat.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-800 block text-xs mb-0.5">
                    2. Pertemuan 2: Perakitan PC & Troubleshooting Hardware
                  </span>
                  <p className="text-xs text-slate-600">
                    Siswa melakukan praktik virtual perakitan komputer di bengkel rakit PC, menganalisis pesan kesalahan BIOS POST jika komponen tidak lengkap, dan menyelesaikan Asesmen Sumatif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 3: LKPD PRINTABLE */}
      {activeSubTab === 'lkpd' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center no-print bg-white p-4 rounded-2xl border border-slate-200">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Lembar Kerja Peserta Didik (LKPD) Siap Cetak
              </h3>
              <p className="text-xs text-slate-500">
                Dapat dicetak langsung untuk dibagikan kepada siswa sebagai instrumen asesmen formatif.
              </p>
            </div>
            <button
              onClick={handlePrintLKPD}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 transition-colors"
            >
              <Printer className="w-4 h-4" />
              Cetak LKPD Sekarang
            </button>
          </div>

          {/* LKPD Document Body */}
          <div className="bg-white border-2 border-slate-300 rounded-2xl p-8 sm:p-10 space-y-6 print:border-none print:m-0 print:p-0">
            <div className="border-b-2 border-slate-800 pb-3 text-center space-y-1">
              <h2 className="text-base sm:text-lg font-extrabold uppercase tracking-wide text-slate-900">
                LEMBAR KERJA PESERTA DIDIK (LKPD) INFORMATIKA
              </h2>
              <p className="text-xs font-semibold text-slate-600 uppercase">
                Materi: Identifikasi & Analisis Fungsi Perangkat Keras Komputer (Hardware TIK)
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs py-2 border-b border-slate-200">
              <div className="space-y-1.5">
                <div>Nama Siswa: ................................................................</div>
                <div>Nomor Absen: ..............................................................</div>
              </div>
              <div className="space-y-1.5">
                <div>Kelas / Rombel: ...........................................................</div>
                <div>Hari / Tanggal: ...........................................................</div>
              </div>
            </div>

            {/* Bagian 1: Menjodohkan */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                A. Menjodohkan Nama Perangkat dan Fungsinya
              </h4>
              <p className="text-xs text-slate-600">
                Pasangkanlah huruf fungsi yang tepat pada kolom jawaban di bawah:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs border border-slate-300">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="border border-slate-300 p-2 text-left w-1/3">Nama Perangkat</th>
                      <th className="border border-slate-300 p-2 text-left w-1/12 text-center">Jawaban</th>
                      <th className="border border-slate-300 p-2 text-left">Pilihan Deskripsi Fungsi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="border border-slate-300 p-2 font-semibold">1. Central Processing Unit (CPU)</td>
                      <td className="border border-slate-300 p-2 text-center">[ ... ]</td>
                      <td className="border border-slate-300 p-2">A. Meja kerja memori sementara tempat penampung instruksi program aktif.</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-2 font-semibold">2. RAM (Random Access Memory)</td>
                      <td className="border border-slate-300 p-2 text-center">[ ... ]</td>
                      <td className="border border-slate-300 p-2">B. Otak utama pengendali seluruh kalkulasi matematika dan logika.</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-2 font-semibold">3. Solid State Drive (SSD)</td>
                      <td className="border border-slate-300 p-2 text-center">[ ... ]</td>
                      <td className="border border-slate-300 p-2">C. Mengubah arus AC 220V dinding menjadi DC voltase stabil untuk hardware.</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-2 font-semibold">4. Power Supply Unit (PSU)</td>
                      <td className="border border-slate-300 p-2 text-center">[ ... ]</td>
                      <td className="border border-slate-300 p-2">D. Media simpan berkas permanen berkecepatan tinggi tanpa komponen bergerak.</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 p-2 font-semibold">5. Kartu Grafis (GPU / VGA)</td>
                      <td className="border border-slate-300 p-2 text-center">[ ... ]</td>
                      <td className="border border-slate-300 p-2">E. Mengolah jutaan piksel render grafis 3D dan animasi video ke monitor.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bagian 2: Analisis Pemecahan Masalah */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                B. Analisis Kasus & Troubleshooting Perangkat Keras
              </h4>
              <div className="space-y-3 text-xs text-slate-700">
                <div>
                  <p className="font-semibold mb-1">
                    1. Budi mengeluhkan komputernya sangat lambat saat membuka puluhan tab browser sekaligus, namun kapasitas SSD-nya masih tersisa 500 GB. Komponen mana yang kapasitasnya penuh dan perlu ditingkatkan? Jelaskan!
                  </p>
                  <div className="h-12 border-b border-dotted border-slate-400"></div>
                </div>

                <div>
                  <p className="font-semibold mb-1">
                    2. Mengapa pada saat merakit prosesor (CPU) kita diwajibkan mengoleskan lapisan pasta termal (thermal paste) tipis sebelum menempelkan heatsink pendingin?
                  </p>
                  <div className="h-12 border-b border-dotted border-slate-400"></div>
                </div>
              </div>
            </div>

            {/* Signatures */}
            <div className="pt-4 flex justify-between items-center text-xs border-t border-slate-200">
              <div>
                <span>Catatan & Umpan Balik Guru:</span>
                <div className="h-10 w-64 border-b border-slate-300"></div>
              </div>
              <div className="text-center">
                <span>Nilai / Paraf Guru:</span>
                <div className="h-12 w-28 border border-slate-400 rounded mt-1 flex items-center justify-center font-bold text-base">
                  / 100
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 4: FAQ (PERTANYAAN KRUSIAL SISWA) */}
      {activeSubTab === 'faq' && (
        <div className="space-y-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-indigo-600" />
              Cheat Sheet: Jawaban Sederhana untuk Pertanyaan Kritis Siswa
            </h3>
            <p className="text-xs text-slate-600">
              Berikut adalah pertanyaan-pertanyaan teknis yang paling sering ditanyakan oleh siswa di lab komputer:
            </p>

            <div className="space-y-3">
              {[
                {
                  q: 'Pak/Bu, kenapa Flashdisk 32 GB pas dicolok cuma terbaca 28.8 GB? Apakah rusak?',
                  a: 'Tidak rusak! Pabrik menghitung dalam format desimal (1 GB = 1.000.000.000 Byte), sedangkan sistem komputer membaca dalam format biner pangkat dua (1 GB = 1.073.741.824 Byte), ditambah alokasi sistem partisi, sehingga kapasitas terbacanya sekitar 28.8 hingga 29 GB.'
                },
                {
                  q: 'Apa bedanya memori RAM dengan penyimpanan SSD?',
                  a: 'RAM bersifat Volatile (sementara, super kencang dalam nanodetik, tapi datanya bersih hilang saat komputer dimatikan). Sedangkan SSD bersifat Non-Volatile (permanen, menyimpan Windows dan tugas Anda bertahun-tahun meskipun komputer dimatikan).'
                },
                {
                  q: 'Apa itu istilah "Dual Channel" pada RAM?',
                  a: 'Memasang dua keping RAM (misal 2x8 GB) pada slot motherboard yang tepat akan membuka dua jalur jalan tol data sekaligus, sehingga bandwidth transfer memorinya menjadi dua kali lipat dibanding hanya memakai satu keping tunggal (1x16 GB).'
                },
                {
                  q: 'Kenapa laptop yang diletakkan di atas kasur cepat panas dan kipasnya berisik?',
                  a: 'Kasur atau bantal yang empuk menutupi kisi-kisi lubang ventilasi udara di bagian bawah laptop. Panas dari CPU terperangkap di dalam dan kipas berputar kencang menyedot serat debu kasur.'
                }
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                  <h4 className="text-xs font-bold text-slate-900 flex items-start gap-2">
                    <span className="text-indigo-600 font-mono font-bold">Q:</span>
                    {item.q}
                  </h4>
                  <p className="text-xs text-slate-600 pl-4 leading-relaxed">
                    <strong className="text-emerald-700">Jawaban Guru: </strong>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
