import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { playSound } from '../utils/audio';
import { HardwareVisual } from './HardwareVisuals';
import {
  Wrench,
  Check,
  AlertTriangle,
  RotateCcw,
  Power,
  Sparkles,
  Info,
  Cpu,
  MonitorCheck,
  CheckCircle2,
  Folder,
  Globe,
  Settings,
  Terminal
} from 'lucide-react';

interface PCPart {
  id: string;
  name: string;
  category: string;
  slotTarget: string;
  slotLabel: string;
  svgType: string;
  description: string;
  required: boolean;
}

const AVAILABLE_PARTS: PCPart[] = [
  {
    id: 'part_cpu',
    name: 'Processor (CPU Intel Core i5)',
    category: 'Pemrosesan',
    slotTarget: 'slot_cpu',
    slotLabel: 'Soket CPU LGA',
    svgType: 'cpu',
    description: 'Otak komputer yang harus dipasang menghadap tanda segitiga emas ke soket LGA motherboard.',
    required: true
  },
  {
    id: 'part_cooler',
    name: 'Pasta Termal & Tower Cooler',
    category: 'Pendingin',
    slotTarget: 'slot_cooler',
    slotLabel: 'Pendingin CPU',
    svgType: 'cooler',
    description: 'Menjaga suhu prosesor tetap dingin saat komputasi berat.',
    required: true
  },
  {
    id: 'part_ram',
    name: 'RAM DDR5 16GB Dual Channel',
    category: 'Pemrosesan',
    slotTarget: 'slot_ram',
    slotLabel: 'Slot DIMM RAM',
    svgType: 'ram',
    description: 'Ditekan ke slot memori hingga terdengar bunyi klik pengunci samping.',
    required: true
  },
  {
    id: 'part_ssd',
    name: 'SSD M.2 NVMe 1TB PCIe 4.0',
    category: 'Penyimpanan',
    slotTarget: 'slot_ssd',
    slotLabel: 'Slot M.2 NVMe',
    svgType: 'ssd',
    description: 'Ditancapkan ke soket M.2 dengan sudut 30 derajat lalu dibaut kencang.',
    required: true
  },
  {
    id: 'part_gpu',
    name: 'Kartu Grafis GPU (VGA RTX)',
    category: 'Pemrosesan',
    slotTarget: 'slot_gpu',
    slotLabel: 'Slot PCIe x16',
    svgType: 'gpu',
    description: 'Dipasang di slot ekspansi PCIe x16 utama untuk mengolah grafis dan monitor.',
    required: true
  },
  {
    id: 'part_psu',
    name: 'Power Supply (PSU 650W Gold)',
    category: 'Daya',
    slotTarget: 'slot_psu',
    slotLabel: 'Kompartemen PSU',
    svgType: 'psu',
    description: 'Menyuplai listrik stabil ke 24-pin motherboard dan 8-pin CPU.',
    required: true
  },
  {
    id: 'part_monitor',
    name: 'Kabel Monitor HDMI High-Speed',
    category: 'Keluaran',
    slotTarget: 'slot_display',
    slotLabel: 'Port HDMI Layar',
    svgType: 'monitor',
    description: 'Dihubungkan ke port HDMI GPU agar tampilan layar menyala.',
    required: true
  }
];

interface SimulationProps {
  onSuccessBuild: () => void;
  onRewardXP: (xp: number, message: string) => void;
}

export const PCBuilderSimulation: React.FC<SimulationProps> = ({
  onSuccessBuild,
  onRewardXP
}) => {
  const [installedParts, setInstalledParts] = useState<Record<string, PCPart>>({});
  const [selectedPart, setSelectedPart] = useState<PCPart | null>(null);
  const [bootState, setBootState] = useState<'off' | 'checking' | 'failed' | 'success'>('off');
  const [bootLog, setBootLog] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [osWindow, setOsWindow] = useState<string | null>(null);

  const totalRequired = AVAILABLE_PARTS.length;
  const installedCount = Object.keys(installedParts).length;

  const handleInstallPart = (slotId: string) => {
    if (!selectedPart) return;

    if (selectedPart.slotTarget !== slotId) {
      playSound('error');
      setErrorMessage(
        `Salah posisi! ${selectedPart.name} harus dipasang pada "${selectedPart.slotLabel}", bukan di slot ini.`
      );
      setTimeout(() => setErrorMessage(null), 4000);
      return;
    }

    // Correct slot
    playSound('snap');
    setInstalledParts((prev) => ({
      ...prev,
      [slotId]: selectedPart
    }));
    setSelectedPart(null);
    setErrorMessage(null);
    onRewardXP(15, `Memasang ${selectedPart.name} ke motherboard`);
  };

  const handleUninstallPart = (slotId: string) => {
    playSound('click');
    setInstalledParts((prev) => {
      const next = { ...prev };
      delete next[slotId];
      return next;
    });
    setBootState('off');
  };

  const handleReset = () => {
    playSound('click');
    setInstalledParts({});
    setSelectedPart(null);
    setBootState('off');
    setBootLog([]);
    setErrorMessage(null);
    setOsWindow(null);
  };

  const handlePowerOn = () => {
    setBootState('checking');
    playSound('fan');
    setBootLog(['[POST] Menyalakan arus listrik dari PSU...', '[POST] Memeriksa integritas sirkuit daya...']);

    setTimeout(() => {
      if (!installedParts['slot_cpu']) {
        playSound('error');
        setBootState('failed');
        setBootLog((prev) => [
          ...prev,
          '❌ FATAL ERROR: CPU tidak terdeteksi di soket LGA!',
          'Komputer tidak memiliki otak pemroses instruksi.'
        ]);
        return;
      }

      if (!installedParts['slot_cooler']) {
        playSound('error');
        setBootState('failed');
        setBootLog((prev) => [
          ...prev,
          '⚠️ CPU terdeteksi, tetapi PENDINGIN (Cooler) belum dipasang!',
          'Suhu prosesor langsung mencapai 95°C! Matikan PC untuk mencegah kerusakan.'
        ]);
        return;
      }

      if (!installedParts['slot_ram']) {
        playSound('error');
        setBootState('failed');
        setBootLog((prev) => [
          ...prev,
          '❌ POST BEEP [3x]: Tidak ada modul RAM di slot DIMM!',
          'Komputer tidak memiliki memori penampung sistem operasi.'
        ]);
        return;
      }

      if (!installedParts['slot_ssd']) {
        playSound('error');
        setBootState('failed');
        setBootLog((prev) => [
          ...prev,
          '⚠️ BEEP: RAM OK, namun Media Penyimpanan (SSD) belum terpasang!',
          'Tidak dapat memuat sistem operasi (No Bootable Device Found).'
        ]);
        return;
      }

      if (!installedParts['slot_gpu']) {
        playSound('error');
        setBootState('failed');
        setBootLog((prev) => [
          ...prev,
          '❌ POST ERROR: Kartu Grafis (GPU) tidak terpasang di PCIe!',
          'Tidak ada sinyal video visual yang dapat dikirim ke monitor.'
        ]);
        return;
      }

      if (!installedParts['slot_psu']) {
        playSound('error');
        setBootState('failed');
        setBootLog((prev) => [
          ...prev,
          '❌ Arus listrik putus! PSU belum terhubung ke konektor 24-pin.'
        ]);
        return;
      }

      if (!installedParts['slot_display']) {
        playSound('error');
        setBootState('failed');
        setBootLog((prev) => [
          ...prev,
          '⚠️ Komputer menyala, tetapi Kabel Monitor belum disambungkan!',
          'Layar masih gelap karena kabel HDMI belum terhubung ke kartu grafis.'
        ]);
        return;
      }

      // If all installed:
      playSound('boot');
      setBootState('success');
      setBootLog([
        '✔ [POST OK] CPU: Intel Core i5 16-Core 3.8 GHz Ready',
        '✔ [POST OK] RAM: 16384 MB DDR5 High-Speed Dual Channel OK',
        '✔ [POST OK] STORAGE: 1000 GB NVMe PCIe 4.0 SSD Ready',
        '✔ [POST OK] GPU: Graphics Processor Initialized 1920x1080@144Hz',
        '✔ [POST OK] PSU: 12V / 5V / 3.3V Rails Stable',
        '🚀 MEMUAT SISTEM OPERASI KOMPUPEDIA TIK...',
        '🎉 SELAMAT! KOMPUTER RAKITANMU BERHASIL MENYALA SEMPURNA!'
      ]);

      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });

      onSuccessBuild();
      onRewardXP(100, 'Berhasil merakit PC pertama hingga menyala!');
    }, 1100);
  };

  return (
    <div className="space-y-6">
      {/* Simulation Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-1">
            <Wrench className="w-4 h-4" />
            Bengkel Praktik Rakit Komputer
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Simulasi Perakitan PC Desktop Mandiri
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Ambil komponen dari rak peralatan di sebelah kiri, pasang ke soket yang tepat di motherboard. Setelah semua terpasang, tekan tombol Power untuk uji coba POST!
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-xs text-slate-500 font-medium block">
              Komponen Terpasang
            </span>
            <span className="text-lg font-bold text-slate-900 font-mono">
              {installedCount} / {totalRequired}
            </span>
          </div>

          <button
            onClick={handleReset}
            className="p-2.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors"
            title="Bongkar Ulang Semua"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Error alert if student picks wrong slot */}
      {errorMessage && (
        <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-xs font-medium text-rose-800 flex items-center gap-2.5 animate-in fade-in">
          <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
          {errorMessage}
        </div>
      )}

      {/* Main Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Component Shelf (Left: 5 cols) */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-600" />
              Rak Komponen Siap Pasang
            </h3>
            <span className="text-[11px] text-slate-400">
              Pilih satu lalu pasang
            </span>
          </div>

          <p className="text-xs text-slate-500">
            Klik komponen di bawah untuk mengambilnya, kemudian klik soket yang bersesuaian di motherboard.
          </p>

          <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
            {AVAILABLE_PARTS.map((part) => {
              const isInstalled = Boolean(installedParts[part.slotTarget]);
              const isSelected = selectedPart?.id === part.id;

              return (
                <div
                  key={part.id}
                  onClick={() => {
                    if (isInstalled) return;
                    playSound('click');
                    setSelectedPart(isSelected ? null : part);
                  }}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                    isInstalled
                      ? 'bg-slate-50 border-slate-200 opacity-50 cursor-not-allowed'
                      : isSelected
                      ? 'bg-indigo-50 border-indigo-500 shadow-sm ring-2 ring-indigo-200'
                      : 'bg-white border-slate-200 hover:border-indigo-300 hover:bg-slate-50/60'
                  }`}
                >
                  <div className="w-12 h-12 bg-slate-900 rounded-lg p-1 shrink-0 flex items-center justify-center">
                    <HardwareVisual type={part.svgType} className="w-full h-full object-contain" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900 truncate">
                        {part.name}
                      </span>
                      {isInstalled && (
                        <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                          <Check className="w-3 h-3" /> Terpasang
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-500 block truncate">
                      Target: {part.slotLabel}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {selectedPart && (
            <div className="p-3 bg-indigo-50/80 border border-indigo-200 rounded-xl text-xs space-y-1">
              <span className="font-bold text-indigo-900 block">
                Sedang Memegang: {selectedPart.name}
              </span>
              <p className="text-slate-600 text-[11px]">
                {selectedPart.description}
              </p>
              <p className="text-[11px] text-indigo-700 font-semibold pt-1">
                👉 Klik pada area "{selectedPart.slotLabel}" di diagram PC!
              </p>
            </div>
          )}
        </div>

        {/* Virtual PC Rig & Motherboard (Right: 7 cols) */}
        <div className="lg:col-span-7 bg-slate-950 text-white rounded-2xl p-6 border border-slate-800 shadow-lg flex flex-col justify-between space-y-6">
          
          {/* Top Bar of PC Case */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${
                  bootState === 'success'
                    ? 'bg-emerald-500 shadow-lg shadow-emerald-500/50 animate-pulse'
                    : 'bg-slate-700'
                }`}
              />
              <span className="text-xs font-mono font-medium text-slate-300">
                CASING ATX GAMING · STATUS: {bootState.toUpperCase()}
              </span>
            </div>

            {/* Power Button */}
            <button
              onClick={handlePowerOn}
              disabled={bootState === 'checking'}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md ${
                bootState === 'success'
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/50'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-950/60'
              } disabled:opacity-50`}
            >
              <Power className="w-4 h-4" />
              {bootState === 'checking'
                ? 'Memeriksa POST...'
                : bootState === 'success'
                ? 'PC Nyala (Uji Ulang)'
                : '⚡ Nyalakan PC (Power On)'}
            </button>
          </div>

          {/* Interactive Motherboard Chassis Layout */}
          <div className="relative bg-slate-900 border-2 border-slate-800 rounded-xl p-5 min-h-[360px] flex flex-col justify-between">
            
            {/* Ambient RGB lighting strip if powered on */}
            {bootState === 'success' && (
              <div className="absolute inset-0 rounded-xl pointer-events-none border-2 border-indigo-500/50 shadow-inner shadow-indigo-500/20" />
            )}

            {/* Top row: CPU Socket & Cooler slot + RAM slots */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* CPU & Cooler Area */}
              <div className="space-y-3">
                {/* Slot CPU */}
                <div
                  onClick={() => handleInstallPart('slot_cpu')}
                  className={`p-3 rounded-xl border-2 transition-all cursor-pointer relative ${
                    installedParts['slot_cpu']
                      ? 'bg-slate-800/90 border-emerald-500/70 text-emerald-300'
                      : selectedPart?.slotTarget === 'slot_cpu'
                      ? 'border-indigo-400 bg-indigo-950/60 animate-pulse'
                      : 'border-dashed border-slate-700 hover:border-slate-500 bg-slate-900/50'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider block text-slate-400 mb-1">
                    [1] SOKET CPU LGA 1700
                  </span>
                  {installedParts['slot_cpu'] ? (
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white truncate mr-2">
                        {installedParts['slot_cpu'].name}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUninstallPart('slot_cpu');
                        }}
                        className="text-[10px] text-rose-400 hover:underline shrink-0"
                      >
                        Lepas
                      </button>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-500 font-medium">
                      + Pasang CPU di sini
                    </span>
                  )}
                </div>

                {/* Slot Cooler */}
                <div
                  onClick={() => handleInstallPart('slot_cooler')}
                  className={`p-3 rounded-xl border-2 transition-all cursor-pointer relative ${
                    installedParts['slot_cooler']
                      ? 'bg-slate-800/90 border-emerald-500/70 text-emerald-300'
                      : selectedPart?.slotTarget === 'slot_cooler'
                      ? 'border-indigo-400 bg-indigo-950/60 animate-pulse'
                      : 'border-dashed border-slate-700 hover:border-slate-500 bg-slate-900/50'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider block text-slate-400 mb-1">
                    [2] PENDINGIN HEATSINK & FAN
                  </span>
                  {installedParts['slot_cooler'] ? (
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white truncate mr-2">
                        {installedParts['slot_cooler'].name}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUninstallPart('slot_cooler');
                        }}
                        className="text-[10px] text-rose-400 hover:underline shrink-0"
                      >
                        Lepas
                      </button>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-500 font-medium">
                      + Pasang Fan Cooler di sini
                    </span>
                  )}
                </div>
              </div>

              {/* RAM Slot & M.2 SSD Slot */}
              <div className="space-y-3">
                {/* Slot RAM */}
                <div
                  onClick={() => handleInstallPart('slot_ram')}
                  className={`p-3 rounded-xl border-2 transition-all cursor-pointer relative ${
                    installedParts['slot_ram']
                      ? 'bg-slate-800/90 border-emerald-500/70 text-emerald-300'
                      : selectedPart?.slotTarget === 'slot_ram'
                      ? 'border-indigo-400 bg-indigo-950/60 animate-pulse'
                      : 'border-dashed border-slate-700 hover:border-slate-500 bg-slate-900/50'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider block text-slate-400 mb-1">
                    [3] SLOT DIMM MEMORI RAM
                  </span>
                  {installedParts['slot_ram'] ? (
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white truncate mr-2">
                        {installedParts['slot_ram'].name}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUninstallPart('slot_ram');
                        }}
                        className="text-[10px] text-rose-400 hover:underline shrink-0"
                      >
                        Lepas
                      </button>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-500 font-medium">
                      + Tancapkan RAM di sini
                    </span>
                  )}
                </div>

                {/* Slot M.2 SSD */}
                <div
                  onClick={() => handleInstallPart('slot_ssd')}
                  className={`p-3 rounded-xl border-2 transition-all cursor-pointer relative ${
                    installedParts['slot_ssd']
                      ? 'bg-slate-800/90 border-emerald-500/70 text-emerald-300'
                      : selectedPart?.slotTarget === 'slot_ssd'
                      ? 'border-indigo-400 bg-indigo-950/60 animate-pulse'
                      : 'border-dashed border-slate-700 hover:border-slate-500 bg-slate-900/50'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider block text-slate-400 mb-1">
                    [4] SOKET M.2 NVMe SSD
                  </span>
                  {installedParts['slot_ssd'] ? (
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white truncate mr-2">
                        {installedParts['slot_ssd'].name}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUninstallPart('slot_ssd');
                        }}
                        className="text-[10px] text-rose-400 hover:underline shrink-0"
                      >
                        Lepas
                      </button>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-500 font-medium">
                      + Pasang M.2 SSD di sini
                    </span>
                  )}
                </div>
              </div>

            </div>

            {/* Middle Row: PCIe Slot for GPU */}
            <div
              onClick={() => handleInstallPart('slot_gpu')}
              className={`p-3 rounded-xl border-2 transition-all cursor-pointer my-3 ${
                installedParts['slot_gpu']
                  ? 'bg-slate-800/90 border-emerald-500/70 text-emerald-300'
                  : selectedPart?.slotTarget === 'slot_gpu'
                  ? 'border-indigo-400 bg-indigo-950/60 animate-pulse'
                  : 'border-dashed border-slate-700 hover:border-slate-500 bg-slate-900/50'
              }`}
            >
              <span className="text-[10px] font-mono uppercase tracking-wider block text-slate-400 mb-1">
                [5] SLOT PCIe x16 (KARTU GRAFIS / GPU)
              </span>
              {installedParts['slot_gpu'] ? (
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white truncate mr-2">
                    {installedParts['slot_gpu'].name}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUninstallPart('slot_gpu');
                    }}
                    className="text-[10px] text-rose-400 hover:underline shrink-0"
                  >
                    Lepas
                  </button>
                </div>
              ) : (
                <span className="text-xs text-slate-500 font-medium">
                  + Tancapkan Kartu Grafis GPU ke slot PCIe
                </span>
              )}
            </div>

            {/* Bottom Row: PSU Bay & Display Cable */}
            <div className="grid grid-cols-2 gap-4">
              {/* PSU Slot */}
              <div
                onClick={() => handleInstallPart('slot_psu')}
                className={`p-3 rounded-xl border-2 transition-all cursor-pointer ${
                  installedParts['slot_psu']
                    ? 'bg-slate-800/90 border-emerald-500/70 text-emerald-300'
                    : selectedPart?.slotTarget === 'slot_psu'
                    ? 'border-indigo-400 bg-indigo-950/60 animate-pulse'
                    : 'border-dashed border-slate-700 hover:border-slate-500 bg-slate-900/50'
                }`}
              >
                <span className="text-[10px] font-mono uppercase tracking-wider block text-slate-400 mb-1">
                  [6] KOMPARTEMEN PSU (CATU DAYA)
                </span>
                {installedParts['slot_psu'] ? (
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white truncate mr-2">
                      {installedParts['slot_psu'].name}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUninstallPart('slot_psu');
                      }}
                      className="text-[10px] text-rose-400 hover:underline shrink-0"
                    >
                      Lepas
                    </button>
                  </div>
                ) : (
                  <span className="text-xs text-slate-500 font-medium">
                    + Pasang Power Supply Unit
                  </span>
                )}
              </div>

              {/* Monitor Cable */}
              <div
                onClick={() => handleInstallPart('slot_display')}
                className={`p-3 rounded-xl border-2 transition-all cursor-pointer ${
                  installedParts['slot_display']
                    ? 'bg-slate-800/90 border-emerald-500/70 text-emerald-300'
                    : selectedPart?.slotTarget === 'slot_display'
                    ? 'border-indigo-400 bg-indigo-950/60 animate-pulse'
                    : 'border-dashed border-slate-700 hover:border-slate-500 bg-slate-900/50'
                }`}
              >
                <span className="text-[10px] font-mono uppercase tracking-wider block text-slate-400 mb-1">
                  [7] KABEL MONITOR (PORT HDMI GPU)
                </span>
                {installedParts['slot_display'] ? (
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white truncate mr-2">
                      {installedParts['slot_display'].name}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUninstallPart('slot_display');
                      }}
                      className="text-[10px] text-rose-400 hover:underline shrink-0"
                    >
                      Lepas
                    </button>
                  </div>
                ) : (
                  <span className="text-xs text-slate-500 font-medium">
                    + Sambungkan Kabel HDMI Monitor
                  </span>
                )}
              </div>
            </div>

          </div>

          {/* Virtual Boot Screen Console Display */}
          <div className="bg-black border border-slate-800 rounded-xl p-4 font-mono text-xs space-y-2 min-h-[140px]">
            <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-slate-800 pb-1 mb-1">
              <span className="flex items-center gap-1.5">
                <MonitorCheck className="w-3.5 h-3.5 text-indigo-400" />
                VIRTUAL MONITOR · BIOS & OS DIAGNOSTIC
              </span>
              <span>STATUS: {bootState.toUpperCase()}</span>
            </div>

            {bootState === 'success' ? (
              /* Interactive Desktop Simulator */
              <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-black p-3 rounded-lg border border-indigo-900/60 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-emerald-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    KompuOS TIK Desktop Aktif (1920x1080@144Hz)
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">CPU 28°C · RAM 18%</span>
                </div>

                {/* Clickable Desktop Icons */}
                <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
                  <button
                    onClick={() => {
                      playSound('click');
                      setOsWindow('terminal');
                    }}
                    className="p-2 bg-slate-900/80 hover:bg-slate-800 rounded-lg border border-slate-700 flex flex-col items-center gap-1 transition-colors"
                  >
                    <Terminal className="w-4 h-4 text-sky-400" />
                    <span>Terminal</span>
                  </button>
                  <button
                    onClick={() => {
                      playSound('click');
                      setOsWindow('specs');
                    }}
                    className="p-2 bg-slate-900/80 hover:bg-slate-800 rounded-lg border border-slate-700 flex flex-col items-center gap-1 transition-colors"
                  >
                    <Settings className="w-4 h-4 text-amber-400" />
                    <span>Spesifikasi PC</span>
                  </button>
                  <button
                    onClick={() => {
                      playSound('click');
                      setOsWindow('browser');
                    }}
                    className="p-2 bg-slate-900/80 hover:bg-slate-800 rounded-lg border border-slate-700 flex flex-col items-center gap-1 transition-colors"
                  >
                    <Globe className="w-4 h-4 text-emerald-400" />
                    <span>Web Browser</span>
                  </button>
                  <button
                    onClick={() => {
                      playSound('click');
                      setOsWindow('files');
                    }}
                    className="p-2 bg-slate-900/80 hover:bg-slate-800 rounded-lg border border-slate-700 flex flex-col items-center gap-1 transition-colors"
                  >
                    <Folder className="w-4 h-4 text-indigo-400" />
                    <span>File Manager</span>
                  </button>
                </div>

                {/* OS Window Popup */}
                {osWindow && (
                  <div className="p-2.5 bg-black/90 rounded border border-indigo-400 text-[11px] font-mono text-slate-300">
                    <div className="flex justify-between text-indigo-300 border-b border-slate-800 pb-1 mb-1 font-bold">
                      <span>Aplikasi: {osWindow.toUpperCase()}</span>
                      <button onClick={() => setOsWindow(null)} className="text-rose-400 hover:text-rose-300">
                        ✕ Tutup
                      </button>
                    </div>
                    {osWindow === 'terminal' && (
                      <p className="text-emerald-400">&gt; neofetch: OS: KompuOS v2026 | Kernel: 6.8.0-tik | Uptime: 5 mins | Memory: 3200MB / 16384MB</p>
                    )}
                    {osWindow === 'specs' && (
                      <p>Hardware Verified: Intel 16-Core, 16GB DDR5, RTX GPU, 1TB NVMe Gen4 SSD. All temperatures normal.</p>
                    )}
                    {osWindow === 'browser' && (
                      <p className="text-sky-300">Membuka portal laboratorium TIK... Koneksi gigabit stabil.</p>
                    )}
                    {osWindow === 'files' && (
                      <p>/home/siswa/dokumen_tugas_tik.docx (Ukuran: 2.4 MB)</p>
                    )}
                  </div>
                )}
              </div>
            ) : bootLog.length === 0 ? (
              <p className="text-slate-600 italic">
                Tekan tombol "⚡ Nyalakan PC (Power On)" di kanan atas untuk menguji apakah seluruh perangkat telah terpasang dengan benar.
              </p>
            ) : (
              bootLog.map((log, idx) => (
                <p
                  key={idx}
                  className={`leading-relaxed ${
                    log.includes('ERROR') || log.includes('FATAL')
                      ? 'text-rose-400 font-bold'
                      : log.includes('⚠️')
                      ? 'text-amber-400 font-semibold'
                      : log.includes('OK') || log.includes('SELAMAT')
                      ? 'text-emerald-400 font-semibold'
                      : 'text-slate-300'
                  }`}
                >
                  {log}
                </p>
              ))
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
