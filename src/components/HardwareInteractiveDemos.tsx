import React, { useState, useEffect } from 'react';
import { InteractiveDemoType } from '../types/hardware';
import { playSound } from '../utils/audio';
import {
  Activity,
  Flame,
  Zap,
  HardDrive,
  Keyboard as KeyboardIcon,
  MousePointer,
  Tv,
  Printer as PrinterIcon,
  Volume2,
  Camera,
  RotateCcw,
  Sparkles,
  Wifi
} from 'lucide-react';

interface DemoProps {
  type: InteractiveDemoType;
  componentName: string;
}

export const HardwareInteractiveDemo: React.FC<DemoProps> = ({ type, componentName }) => {
  // 1. CPU Stress Simulator
  const [clockSpeed, setClockSpeed] = useState<number>(3.5);
  const [cpuLoad, setCpuLoad] = useState<number>(35);

  // 2. RAM Multi-app Simulator
  const [openApps, setOpenApps] = useState<string[]>(['Sistem Operasi (3.2 GB)']);

  // 3. Storage Speed Race
  const [raceRunning, setRaceRunning] = useState(false);
  const [ssdProgress, setSsdProgress] = useState(0);
  const [hddProgress, setHddProgress] = useState(0);

  // 4. Keyboard tester
  const [typedText, setTypedText] = useState('TIK2026');

  // 5. Mouse CPS
  const [clicks, setClicks] = useState(0);

  // 6. Monitor Refresh Rate
  const [hzMode, setHzMode] = useState<60 | 144>(60);

  // 7. GPU Raytracing Render
  const [raytracing, setRaytracing] = useState(true);

  // 8. Printer animation
  const [isPrinting, setIsPrinting] = useState(false);

  // 9. Scanner animation
  const [isScanning, setIsScanning] = useState(false);

  // 10. Webcam capture
  const [snapEffect, setSnapEffect] = useState(false);

  // 11. Network ping test
  const [pingRunning, setPingRunning] = useState(false);
  const [pingMs, setPingMs] = useState<number | null>(14);

  // CPU live stats
  const cpuTemp = Math.round(38 + (clockSpeed - 2.0) * 12 + (cpuLoad / 100) * 20);
  const opsPerSec = (clockSpeed * 4.2).toFixed(1);

  // RAM Calculation
  const appMemoryWeights: Record<string, number> = {
    'Sistem Operasi (3.2 GB)': 3.2,
    'Google Chrome 20 Tab (4.5 GB)': 4.5,
    'Game 3D Cyber (6.8 GB)': 6.8,
    'Aplikasi Edit Video 4K (5.2 GB)': 5.2,
    'Spotify Musik (0.8 GB)': 0.8
  };
  const totalRamUsed = openApps.reduce((acc, app) => acc + (appMemoryWeights[app] || 1), 0);
  const ramPercent = Math.min(100, Math.round((totalRamUsed / 16) * 100));

  // Storage race effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (raceRunning) {
      timer = setInterval(() => {
        setSsdProgress((p) => {
          if (p >= 100) return 100;
          return p + 25; // SSD finishes in 4 ticks
        });
        setHddProgress((p) => {
          if (p >= 100) {
            setRaceRunning(false);
            return 100;
          }
          return p + 4; // HDD takes 25 ticks
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [raceRunning]);

  const handleStartRace = () => {
    playSound('click');
    setSsdProgress(0);
    setHddProgress(0);
    setRaceRunning(true);
  };

  const handleToggleApp = (appName: string) => {
    playSound('click');
    setOpenApps((prev) =>
      prev.includes(appName) ? prev.filter((a) => a !== appName) : [...prev, appName]
    );
  };

  const handleKeyPress = (char: string) => {
    playSound('keyclick');
    setTypedText((prev) => (prev.length > 14 ? char : prev + char));
  };

  const handleMouseClick = () => {
    playSound('click');
    setClicks((c) => c + 1);
  };

  const handlePrint = () => {
    if (isPrinting) return;
    playSound('printer');
    setIsPrinting(true);
    setTimeout(() => setIsPrinting(false), 2400);
  };

  const handleScan = () => {
    if (isScanning) return;
    playSound('scanner');
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2200);
  };

  const handleWebcamSnap = () => {
    playSound('shutter');
    setSnapEffect(true);
    setTimeout(() => setSnapEffect(false), 500);
  };

  const handleTestPing = () => {
    playSound('ping');
    setPingRunning(true);
    setTimeout(() => {
      setPingMs(Math.floor(Math.random() * 8) + 10);
      setPingRunning(false);
    }, 600);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-white space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-indigo-400" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
            Laboratorium Hands-on: Uji Kinerja Nyata
          </span>
        </div>
        <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800">
          Simulasi Interaktif
        </span>
      </div>

      {/* 1. CPU DEMO */}
      {type === 'cpu_stress' && (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Frekuensi Clock</span>
              <span className="text-base font-bold text-amber-400 font-mono">
                {clockSpeed.toFixed(1)} GHz
              </span>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Suhu Inti</span>
              <span
                className={`text-base font-bold font-mono ${
                  cpuTemp > 75 ? 'text-rose-400' : 'text-emerald-400'
                }`}
              >
                {cpuTemp}°C
              </span>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Instruksi / Detik</span>
              <span className="text-base font-bold text-sky-400 font-mono">
                {opsPerSec} Milyar
              </span>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between text-slate-400">
              <span>Atur Beban Komputasi Prosesor:</span>
              <span className="font-mono text-white font-bold">{cpuLoad}% Load</span>
            </div>
            <input
              type="range"
              min="10"
              max="100"
              value={cpuLoad}
              onChange={(e) => {
                setCpuLoad(Number(e.target.value));
                setClockSpeed(2.4 + (Number(e.target.value) / 100) * 3.0);
              }}
              className="w-full accent-indigo-500 cursor-pointer"
            />
          </div>
          <p className="text-[11px] text-slate-400 italic">
            💡 Geser slider untuk melihat bagaimana CPU meningkatkan frekuensi clock dan suhu panasnya saat beban komputasi bertambah tinggi.
          </p>
        </div>
      )}

      {/* 2. RAM DEMO */}
      {type === 'ram_usage' && (
        <div className="space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-300">Penggunaan Memori RAM (Total: 16 GB DDR5):</span>
            <span className="font-bold text-emerald-400 font-mono">
              {totalRamUsed.toFixed(1)} GB ({ramPercent}%)
            </span>
          </div>

          <div className="w-full bg-slate-800 h-3.5 rounded-full overflow-hidden p-0.5 border border-slate-700">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                ramPercent > 85 ? 'bg-rose-500' : ramPercent > 60 ? 'bg-amber-400' : 'bg-emerald-500'
              }`}
              style={{ width: `${ramPercent}%` }}
            />
          </div>

          <div className="pt-1">
            <span className="text-[11px] text-slate-400 block mb-1.5">
              Klik aplikasi di bawah untuk membuka/menutupnya di RAM:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {Object.keys(appMemoryWeights).map((app) => {
                const isOpen = openApps.includes(app);
                return (
                  <button
                    key={app}
                    onClick={() => handleToggleApp(app)}
                    className={`text-xs px-2.5 py-1.5 rounded-lg font-medium transition-all ${
                      isOpen
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {isOpen ? '✔ ' : '+ '} {app}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 3. STORAGE SPEED RACE (SSD vs HDD) */}
      {type === 'speed_race' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-300">Uji Salin Berkas Video 10 GB:</span>
            <button
              onClick={handleStartRace}
              disabled={raceRunning}
              className="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-bold transition-all disabled:opacity-50"
            >
              🏁 Mulai Balap Kecepatan
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-bold text-sky-400">⚡ SSD M.2 NVMe (7.000 MB/s)</span>
                <span className="font-mono text-xs">{ssdProgress}% Selesai</span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-sky-400 h-full transition-all duration-100"
                  style={{ width: `${ssdProgress}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-bold text-slate-400">🐌 Hard Disk HDD 7200 RPM (140 MB/s)</span>
                <span className="font-mono text-xs">{hddProgress}% Selesai</span>
              </div>
              <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-amber-500 h-full transition-all duration-100"
                  style={{ width: `${hddProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. KEYBOARD DEMO */}
      {type === 'keyboard_press' && (
        <div className="space-y-3">
          <div className="bg-black p-3 rounded-lg border border-slate-800 font-mono text-sm flex items-center justify-between">
            <span className="text-emerald-400">
              &gt; {typedText}
              <span className="animate-pulse">_</span>
            </span>
            <button
              onClick={() => setTypedText('')}
              className="text-[10px] text-slate-500 hover:text-slate-300"
            >
              Hapus
            </button>
          </div>

          <div className="flex flex-wrap gap-1.5 justify-center pt-1">
            {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '1', '2', '3', 'SPACE'].map(
              (char) => (
                <button
                  key={char}
                  onClick={() => handleKeyPress(char === 'SPACE' ? ' ' : char)}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-indigo-600 text-white rounded-lg text-xs font-mono font-bold active:scale-95 transition-all shadow-xs border border-slate-700"
                >
                  {char}
                </button>
              )
            )}
          </div>
        </div>
      )}

      {/* 5. MOUSE CLICKER DEMO */}
      {type === 'mouse_clicker' && (
        <div className="space-y-3 text-center">
          <div className="flex justify-around items-center text-xs">
            <div>
              <span className="text-slate-400 block text-[11px]">Total Klik</span>
              <span className="text-xl font-bold text-amber-400 font-mono">{clicks}x</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px]">Sensor Polling</span>
              <span className="text-base font-bold text-emerald-400 font-mono">1000 Hz</span>
            </div>
          </div>

          <button
            onClick={handleMouseClick}
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 active:scale-98 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
          >
            <MousePointer className="w-4 h-4" />
            Klik Tombol Ini untuk Uji Respon Mikro-Switch!
          </button>
        </div>
      )}

      {/* 6. MONITOR REFRESH RATE DEMO */}
      {type === 'monitor_hz' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-300">Pilih Frekuensi Refresh Rate:</span>
            <div className="flex gap-1.5">
              <button
                onClick={() => setHzMode(60)}
                className={`px-3 py-1 rounded text-xs font-bold ${
                  hzMode === 60 ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                60 Hz Standar
              </button>
              <button
                onClick={() => setHzMode(144)}
                className={`px-3 py-1 rounded text-xs font-bold ${
                  hzMode === 144 ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                144 Hz Gaming
              </button>
            </div>
          </div>

          {/* UFO Animation Box */}
          <div className="h-16 bg-black rounded-lg border border-slate-800 relative overflow-hidden flex items-center">
            <div
              className={`w-8 h-8 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50 flex items-center justify-center font-bold text-slate-900 text-[10px] animate-pulse`}
              style={{
                animation: `bounceX ${hzMode === 144 ? '1.2s' : '2.4s'} infinite alternate ease-in-out`
              }}
            >
              🛸
            </div>
          </div>
          <style>{`
            @keyframes bounceX {
              0% { transform: translateX(10px); }
              100% { transform: translateX(360px); }
            }
          `}</style>
          <p className="text-[11px] text-slate-400">
            Perhatikan pergerakan objek di atas. Pada 144 Hz, gambar diperbarui 144 kali per detik sehingga mata melihat gerakan objek jauh lebih halus tanpa bayangan buram.
          </p>
        </div>
      )}

      {/* 7. GPU RAY TRACING DEMO */}
      {type === 'gpu_render' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-300">Simulasi Render Cahaya (Ray Tracing):</span>
            <button
              onClick={() => {
                playSound('click');
                setRaytracing(!raytracing);
              }}
              className={`px-3 py-1 rounded text-xs font-bold ${
                raytracing ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
              }`}
            >
              RTX: {raytracing ? 'ON (Aktif)' : 'OFF (Mati)'}
            </button>
          </div>

          <div
            className={`h-24 rounded-lg flex items-center justify-center transition-all duration-300 ${
              raytracing
                ? 'bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-800 border-2 border-indigo-400 shadow-lg shadow-indigo-500/30'
                : 'bg-slate-800 border border-slate-700'
            }`}
          >
            <div className="text-center space-y-1">
              <span className="text-xs font-bold tracking-widest uppercase block">
                {raytracing ? '✨ Real-time Ray Tracing & Refleksi 4K' : 'Biasa (Rasterisasi Standar)'}
              </span>
              <span className="text-[11px] text-slate-300 font-mono">
                {raytracing ? '120 FPS · DLSS 3.5 AI Super Resolution' : '60 FPS · Tekstur Datar'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 8. PRINTER DEMO */}
      {type === 'printer_print' && (
        <div className="space-y-3 text-center">
          <button
            onClick={handlePrint}
            disabled={isPrinting}
            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
          >
            <PrinterIcon className="w-4 h-4" />
            {isPrinting ? 'Sedang Menyemprotkan Tinta...' : 'Uji Cetak Dokumen Tugas (Test Print)'}
          </button>
          {isPrinting && (
            <div className="p-3 bg-white text-slate-900 rounded-lg text-xs font-mono animate-in slide-in-from-top-4 duration-300 shadow-md">
              📄 [PRINT JOB OK] Dokumen Laporan Siswa TIK Berhasil Dicetak!
            </div>
          )}
        </div>
      )}

      {/* 9. SCANNER DEMO */}
      {type === 'scanner_scan' && (
        <div className="space-y-3 text-center">
          <button
            onClick={handleScan}
            disabled={isScanning}
            className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
          >
            <Sparkles className="w-4 h-4" />
            {isScanning ? 'Lampu Sensor Sedang Memindai...' : 'Uji Pindai Dokumen Fisik (Scan Now)'}
          </button>
          {isScanning && (
            <div className="p-3 bg-emerald-950 border border-emerald-500 text-emerald-300 rounded-lg text-xs font-mono animate-pulse">
              ✔ Sensor CCD Berhasil Mendigitalkan Berkas Fisik ke Format PDF!
            </div>
          )}
        </div>
      )}

      {/* 10. WEBCAM DEMO */}
      {type === 'webcam_lens' && (
        <div className="space-y-3">
          <div
            className={`h-24 bg-slate-950 rounded-lg border flex items-center justify-center relative transition-all ${
              snapEffect ? 'bg-white border-white' : 'border-slate-800'
            }`}
          >
            <div className="w-16 h-16 border border-emerald-400 rounded flex items-center justify-center text-[10px] text-emerald-400 font-mono">
              [Face Detect]
            </div>
            <div className="absolute top-2 right-2 flex items-center gap-1 text-[10px] text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              1080p 60FPS
            </div>
          </div>
          <button
            onClick={handleWebcamSnap}
            className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2"
          >
            <Camera className="w-4 h-4" /> Ambil Foto Wajah (Shutter Test)
          </button>
        </div>
      )}

      {/* 11. NETWORK PING DEMO */}
      {type === 'network_ping' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300">Latensi Jaringan Komputer (Ping Google Server):</span>
            <span className="font-mono text-emerald-400 font-bold">
              {pingRunning ? 'Mengirim Paket...' : `${pingMs} ms (Sangat Cepat)`}
            </span>
          </div>
          <button
            onClick={handleTestPing}
            disabled={pingRunning}
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Wifi className="w-4 h-4" /> Uji Ping Latensi (ICMP Test)
          </button>
        </div>
      )}

      {/* Fallback / General Component Demo */}
      {(!type ||
        type === 'general' ||
        type === 'psu_power' ||
        type === 'cooler_temp' ||
        type === 'sound_test' ||
        type === 'mic_meter') && (
        <div className="space-y-2 text-xs text-slate-300">
          <div className="flex items-center justify-between bg-slate-950 p-3 rounded-lg border border-slate-800">
            <span>Status Koneksi Komponen:</span>
            <span className="text-emerald-400 font-bold font-mono">NORMAL / OPTIMAL (100%)</span>
          </div>
          <p className="text-[11px] text-slate-400">
            Perangkat {componentName} telah terkalibrasi secara optimal dengan bus data motherboard.
          </p>
        </div>
      )}
    </div>
  );
};
