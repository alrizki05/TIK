import React from 'react';

interface VisualProps {
  type: string;
  className?: string;
  interactive?: boolean;
  activeHotspot?: string | null;
  onHotspotClick?: (name: string) => void;
}

export const HardwareVisual: React.FC<VisualProps> = ({
  type,
  className = 'w-full h-48',
  interactive = false,
  activeHotspot = null,
  onHotspotClick
}) => {
  switch (type) {
    // 1. CPU
    case 'cpu':
      return (
        <svg viewBox="0 0 300 300" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="25" width="250" height="250" rx="14" fill="#065f46" stroke="#047857" strokeWidth="4" />
          <g stroke="#34d399" strokeWidth="1.2" opacity="0.45">
            <line x1="40" y1="40" x2="70" y2="70" />
            <line x1="260" y1="40" x2="230" y2="70" />
            <line x1="40" y1="260" x2="70" y2="230" />
            <line x1="260" y1="260" x2="230" y2="230" />
            <line x1="150" y1="35" x2="150" y2="65" />
            <line x1="150" y1="265" x2="150" y2="235" />
            <line x1="35" y1="150" x2="65" y2="150" />
            <line x1="265" y1="150" x2="235" y2="150" />
          </g>
          <polygon
            points="32,268 46,268 32,254"
            fill="#fbbf24"
            stroke="#f59e0b"
            strokeWidth="1.5"
            className="cursor-pointer"
            onClick={() => onHotspotClick?.('Golden Triangle / Notch')}
          />
          <rect
            x="65"
            y="65"
            width="170"
            height="170"
            rx="10"
            fill="url(#metalGrad)"
            stroke="#94a3b8"
            strokeWidth="3"
            filter="drop-shadow(0 6px 12px rgba(0,0,0,0.35))"
            className={interactive ? 'cursor-pointer hover:stroke-indigo-400 transition-colors' : ''}
            onClick={() => onHotspotClick?.('IHS (Integrated Heat Spreader)')}
          />
          <rect x="80" y="80" width="140" height="140" rx="6" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" opacity="0.4" />
          <text x="150" y="125" textAnchor="middle" fill="#334155" fontSize="16" fontWeight="bold">
            PROCESSOR
          </text>
          <text x="150" y="148" textAnchor="middle" fill="#64748b" fontSize="12" fontFamily="monospace">
            3.8 GHz · 16 CORE
          </text>
          <text x="150" y="170" textAnchor="middle" fill="#0f766e" fontSize="10" fontWeight="600" letterSpacing="1">
            LGA 1700 / AM5
          </text>
          <circle cx="45" cy="45" r="3" fill="#fbbf24" />
          <circle cx="255" cy="45" r="3" fill="#fbbf24" />
          <circle cx="255" cy="255" r="3" fill="#fbbf24" />
          <defs>
            <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f1f5f9" />
              <stop offset="45%" stopColor="#e2e8f0" />
              <stop offset="70%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
          </defs>
        </svg>
      );

    // 2. RAM
    case 'ram':
      return (
        <svg viewBox="0 0 400 160" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="30" width="360" height="95" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="2" />
          <rect x="25" y="35" width="350" height="65" rx="4" fill="url(#ramHeatsink)" stroke="#475569" strokeWidth="1" />
          <path d="M 40 45 L 80 45 L 100 85 L 60 85 Z" fill="#3b82f6" opacity="0.3" />
          <path d="M 120 45 L 160 45 L 180 85 L 140 85 Z" fill="#3b82f6" opacity="0.3" />
          <path d="M 200 45 L 240 45 L 260 85 L 220 85 Z" fill="#3b82f6" opacity="0.3" />
          {[60, 130, 200, 270].map((xPos, idx) => (
            <g key={idx} onClick={() => onHotspotClick?.('Keping IC Silikon (Memory Chips)')} className="cursor-pointer">
              <rect x={xPos} y="48" width="50" height="38" rx="2" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
              <text x={xPos + 25} y="70" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">DDR5</text>
            </g>
          ))}
          <rect x="30" y="26" width="340" height="8" rx="4" fill="url(#rgbGrad)" filter="drop-shadow(0 0 6px rgba(56,189,248,0.7))" />
          <g onClick={() => onHotspotClick?.('Pin Kontak Emas')} className="cursor-pointer">
            {Array.from({ length: 30 }).map((_, i) => (
              <line key={`L-${i}`} x1={32 + i * 5} y1="125" x2={32 + i * 5} y2="142" stroke="#f59e0b" strokeWidth="3" />
            ))}
            <rect x="186" y="123" width="14" height="22" fill="#0f172a" rx="3" onClick={() => onHotspotClick?.('Notch (Kunci Celah)')} />
            {Array.from({ length: 32 }).map((_, i) => (
              <line key={`R-${i}`} x1={205 + i * 5} y1="125" x2={205 + i * 5} y2="142" stroke="#f59e0b" strokeWidth="3" />
            ))}
          </g>
          <defs>
            <linearGradient id="ramHeatsink" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            <linearGradient id="rgbGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="25%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="75%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
      );

    // 3. Motherboard
    case 'motherboard':
      return (
        <svg viewBox="0 0 350 350" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="15" width="320" height="320" rx="8" fill="#0f172a" stroke="#1e293b" strokeWidth="3" />
          <g stroke="#38bdf8" strokeWidth="0.8" opacity="0.3">
            <line x1="30" y1="30" x2="100" y2="30" />
            <line x1="100" y1="30" x2="140" y2="70" />
            <line x1="280" y1="120" x2="310" y2="120" />
            <line x1="80" y1="280" x2="200" y2="280" />
          </g>
          <rect x="15" y="40" width="35" height="150" fill="#94a3b8" rx="2" stroke="#64748b" strokeWidth="1" onClick={() => onHotspotClick?.('Port I/O Belakang')} className="cursor-pointer" />
          <rect x="22" y="55" width="15" height="20" fill="#0284c7" />
          <rect x="22" y="85" width="15" height="20" fill="#0284c7" />
          <rect x="22" y="115" width="15" height="18" fill="#1e293b" />
          <rect x="70" y="40" width="50" height="25" fill="#475569" rx="3" stroke="#334155" />
          <rect x="52" y="80" width="25" height="70" fill="#475569" rx="3" stroke="#334155" />
          <g onClick={() => onHotspotClick?.('Soket Prosesor (CPU Socket)')} className="cursor-pointer">
            <rect x="95" y="80" width="90" height="90" rx="4" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" />
            <rect x="105" y="90" width="70" height="70" rx="2" fill="#64748b" />
            <circle cx="140" cy="125" r="16" fill="#334155" />
            <line x1="88" y1="80" x2="88" y2="175" stroke="#e2e8f0" strokeWidth="3.5" strokeLinecap="round" />
          </g>
          <g onClick={() => onHotspotClick?.('Slot RAM (DIMM)')} className="cursor-pointer">
            <rect x="220" y="70" width="12" height="120" rx="2" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
            <rect x="240" y="70" width="12" height="120" rx="2" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
            <rect x="260" y="70" width="12" height="120" rx="2" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
            <rect x="280" y="70" width="12" height="120" rx="2" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
          </g>
          <g onClick={() => onHotspotClick?.('Slot PCIe x16')} className="cursor-pointer">
            <rect x="65" y="215" width="220" height="18" rx="2" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="80" y1="224" x2="270" y2="224" stroke="#0f172a" strokeWidth="4" />
          </g>
          <rect x="95" y="185" width="100" height="18" rx="2" fill="#334155" stroke="#475569" strokeWidth="1" />
          <rect x="225" y="240" width="75" height="65" rx="4" fill="#334155" stroke="#475569" strokeWidth="1" />
          <text x="262" y="278" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">CHIPSET</text>
        </svg>
      );

    // 4. GPU
    case 'gpu':
      return (
        <svg viewBox="0 0 380 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="30" width="310" height="130" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="2" filter="drop-shadow(0 8px 16px rgba(0,0,0,0.3))" />
          <rect x="35" y="20" width="16" height="155" rx="2" fill="#94a3b8" stroke="#64748b" strokeWidth="1" onClick={() => onHotspotClick?.('Port Display HDMI & DP')} className="cursor-pointer" />
          <rect x="38" y="55" width="10" height="16" fill="#0f172a" rx="1" />
          <rect x="38" y="85" width="10" height="16" fill="#0f172a" rx="1" />
          <g onClick={() => onHotspotClick?.('Kipas Pendingin (Cooling Fans)')} className="cursor-pointer">
            <circle cx="135" cy="95" r="48" fill="#0f172a" stroke="#475569" strokeWidth="2" />
            <circle cx="135" cy="95" r="16" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <path
                key={`f1-${i}`}
                d={`M 135 95 L ${135 + 38 * Math.cos((angle * Math.PI) / 180)} ${95 + 38 * Math.sin((angle * Math.PI) / 180)}`}
                stroke="#64748b"
                strokeWidth="7"
                strokeLinecap="round"
                opacity="0.8"
              />
            ))}
            <circle cx="265" cy="95" r="48" fill="#0f172a" stroke="#475569" strokeWidth="2" />
            <circle cx="265" cy="95" r="16" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <path
                key={`f2-${i}`}
                d={`M 265 95 L ${265 + 38 * Math.cos((angle * Math.PI) / 180)} ${95 + 38 * Math.sin((angle * Math.PI) / 180)}`}
                stroke="#64748b"
                strokeWidth="7"
                strokeLinecap="round"
                opacity="0.8"
              />
            ))}
          </g>
          <g onClick={() => onHotspotClick?.('Konektor PCIe Bus')} className="cursor-pointer">
            <rect x="70" y="160" width="160" height="15" fill="#f59e0b" rx="2" />
            <line x1="110" y1="160" x2="110" y2="175" stroke="#1e293b" strokeWidth="4" />
          </g>
          <rect x="310" y="22" width="35" height="12" fill="#0f172a" rx="2" stroke="#64748b" strokeWidth="1" />
        </svg>
      );

    // 5. SSD
    case 'ssd':
      return (
        <svg viewBox="0 0 360 140" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="30" width="300" height="80" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="2" />
          <g onClick={() => onHotspotClick?.('Konektor M.2 Key-M')} className="cursor-pointer">
            <rect x="30" y="42" width="20" height="56" fill="#f59e0b" rx="1" />
            <rect x="30" y="58" width="22" height="6" fill="#0f172a" />
          </g>
          <circle cx="328" cy="70" r="8" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
          <g onClick={() => onHotspotClick?.('Master Controller')} className="cursor-pointer">
            <rect x="75" y="45" width="45" height="50" rx="3" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
            <text x="97" y="73" textAnchor="middle" fill="#38bdf8" fontSize="8" fontFamily="monospace" fontWeight="bold">CTRL</text>
          </g>
          <rect x="135" y="50" width="28" height="40" rx="2" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
          <g onClick={() => onHotspotClick?.('NAND Flash Memory IC')} className="cursor-pointer">
            <rect x="180" y="45" width="55" height="50" rx="3" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
            <text x="207" y="73" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">NAND 1</text>
            <rect x="250" y="45" width="55" height="50" rx="3" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
            <text x="277" y="73" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">NAND 2</text>
          </g>
          <text x="180" y="125" textAnchor="middle" fill="#64748b" fontSize="10">
            NVMe PCIe 4.0 · 1 TB · 7.000 MB/s
          </text>
        </svg>
      );

    // 6. HDD
    case 'hdd':
      return (
        <svg viewBox="0 0 280 280" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="20" width="230" height="240" rx="12" fill="#334155" stroke="#475569" strokeWidth="3" />
          <rect x="35" y="30" width="210" height="220" rx="8" fill="#1e293b" />
          <g onClick={() => onHotspotClick?.('Piringan Magnetik (Platter)')} className="cursor-pointer">
            <circle cx="150" cy="130" r="85" fill="url(#hddDiscGrad)" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="150" cy="130" r="30" fill="#475569" stroke="#64748b" strokeWidth="2" />
            <circle cx="150" cy="130" r="10" fill="#0f172a" />
          </g>
          <g onClick={() => onHotspotClick?.('Lengan Jarum Pembaca (Read/Write Head)')} className="cursor-pointer">
            <circle cx="70" cy="190" r="22" fill="#64748b" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="70" cy="190" r="8" fill="#f1f5f9" />
            <path d="M 70 190 L 135 135 L 140 140 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
            <circle cx="138" cy="138" r="3" fill="#f59e0b" />
          </g>
          <defs>
            <linearGradient id="hddDiscGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="35%" stopColor="#94a3b8" />
              <stop offset="65%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
          </defs>
        </svg>
      );

    // 7. FLASHDISK (USB Flash Drive)
    case 'flashdisk':
      return (
        <svg viewBox="0 0 320 160" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* USB-A metal connector plug */}
          <rect x="25" y="55" width="55" height="50" rx="3" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="2" />
          <rect x="35" y="66" width="16" height="10" fill="#475569" rx="1" />
          <rect x="35" y="84" width="16" height="10" fill="#475569" rx="1" />
          <rect x="25" y="70" width="30" height="20" fill="#0284c7" />

          {/* Flash Drive Main Body */}
          <rect x="75" y="42" width="200" height="76" rx="14" fill="#1e293b" stroke="#3b82f6" strokeWidth="2.5" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.3))" />
          
          {/* Swivel metal cover / accent */}
          <path d="M 120 42 L 230 42 A 38 38 0 0 1 230 118 L 120 118 Z" fill="#334155" opacity="0.6" />
          
          {/* Activity LED */}
          <circle cx="105" cy="80" r="5" fill="#38bdf8" filter="drop-shadow(0 0 6px rgba(56,189,248,0.9))" />
          
          {/* Typography */}
          <text x="175" y="75" textAnchor="middle" fill="#f8fafc" fontSize="13" fontWeight="bold">
            USB 3.2 FLASH
          </text>
          <text x="175" y="94" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
            64 GB · 150 MB/s
          </text>

          {/* Lanyard keychain hole */}
          <circle cx="260" cy="80" r="10" fill="#0f172a" stroke="#64748b" strokeWidth="2" />
        </svg>
      );

    // 8. KEYBOARD
    case 'keyboard':
      return (
        <svg viewBox="0 0 380 150" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="340" height="110" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.2))" />
          {Array.from({ length: 12 }).map((_, i) => (
            <rect key={`fn-${i}`} x={34 + i * 24} y={32} width={18} height={10} rx="2" fill="#334155" />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <rect key={`r1-${i}`} x={34 + i * 24} y={48} width={18} height={14} rx="2" fill="#475569" />
          ))}
          {Array.from({ length: 11 }).map((_, i) => (
            <rect key={`r2-${i}`} x={38 + i * 24} y={67} width={18} height={14} rx="2" fill="#475569" />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <rect key={`r3-${i}`} x={44 + i * 24} y={86} width={18} height={14} rx="2" fill="#475569" />
          ))}
          <rect x="95" y="105" width="130" height="15" rx="3" fill="#64748b" />
          <rect x="290" y="67" width="26" height="32" rx="2" fill="#38bdf8" />
          <rect x="294" y="105" width="18" height="14" rx="2" fill="#475569" />
        </svg>
      );

    // 9. MOUSE
    case 'mouse':
      return (
        <svg viewBox="0 0 200 240" className={className} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 60 80 C 60 40, 140 40, 140 80 L 145 160 C 145 205, 55 205, 55 160 Z"
            fill="#1e293b"
            stroke="#334155"
            strokeWidth="3"
            filter="drop-shadow(0 8px 12px rgba(0,0,0,0.3))"
          />
          <line x1="100" y1="42" x2="100" y2="100" stroke="#475569" strokeWidth="2" />
          <rect x="94" y="55" width="12" height="28" rx="4" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
          <path d="M 80 160 Q 100 145 120 160" stroke="#818cf8" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      );

    // 10. WEBCAM
    case 'webcam':
      return (
        <svg viewBox="0 0 280 240" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Monitor Mount Clip Stand */}
          <path d="M 120 150 L 120 190 L 90 220 L 190 220 L 160 190 L 160 150 Z" fill="#334155" stroke="#1e293b" strokeWidth="2" />
          <rect x="130" y="130" width="20" height="25" fill="#475569" rx="2" />

          {/* Oval Webcam Body */}
          <rect x="40" y="50" width="200" height="85" rx="42" fill="#0f172a" stroke="#334155" strokeWidth="3" filter="drop-shadow(0 8px 16px rgba(0,0,0,0.35))" />
          
          {/* Glass Lens Outer Ring */}
          <circle cx="140" cy="92" r="32" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
          <circle cx="140" cy="92" r="22" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="140" cy="92" r="12" fill="#0c4a6e" />
          
          {/* Lens Optical Reflection Glint */}
          <circle cx="134" cy="86" r="4" fill="#ffffff" opacity="0.8" />

          {/* Stereo Microphones Holes */}
          <circle cx="70" cy="92" r="3" fill="#334155" />
          <circle cx="76" cy="92" r="3" fill="#334155" />
          <circle cx="204" cy="92" r="3" fill="#334155" />
          <circle cx="210" cy="92" r="3" fill="#334155" />

          {/* Privacy Shutter Switch */}
          <rect x="125" y="44" width="30" height="8" rx="3" fill="#e11d48" />

          {/* Green On-Air Indicator LED */}
          <circle cx="140" cy="62" r="3" fill="#22c55e" filter="drop-shadow(0 0 4px rgba(34,197,94,0.9))" />
        </svg>
      );

    // 11. MICROPHONE (Studio Condenser Mic)
    case 'microphone':
      return (
        <svg viewBox="0 0 240 280" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Desk Stand Base */}
          <ellipse cx="120" cy="255" rx="65" ry="14" fill="#334155" stroke="#1e293b" strokeWidth="2" />
          <rect x="114" y="180" width="12" height="75" fill="#64748b" rx="2" />

          {/* U-Shape Mount Bracket */}
          <path d="M 60 130 C 60 210, 180 210, 180 130" fill="none" stroke="#475569" strokeWidth="8" strokeLinecap="round" />
          <circle cx="60" cy="130" r="7" fill="#94a3b8" />
          <circle cx="180" cy="130" r="7" fill="#94a3b8" />

          {/* Main Cylindrical Microphone Body */}
          <rect x="85" y="30" width="70" height="135" rx="35" fill="#0f172a" stroke="#334155" strokeWidth="2.5" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.3))" />
          
          {/* Metal Mesh Top Grill */}
          <path d="M 85 65 C 85 40, 155 40, 155 65 L 155 95 L 85 95 Z" fill="#334155" />
          <line x1="85" y1="95" x2="155" y2="95" stroke="#64748b" strokeWidth="3" />
          
          {/* Mesh Grid Pattern */}
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={`mesh-${i}`} x1={92 + i * 10} y1="46" x2={92 + i * 10} y2="92" stroke="#64748b" strokeWidth="1" strokeDasharray="2,2" />
          ))}

          {/* Gain Knob in the middle */}
          <circle cx="120" cy="120" r="8" fill="#3b82f6" />
          <line x1="120" y1="114" x2="120" y2="120" stroke="#ffffff" strokeWidth="2" />

          {/* Mute Button LED */}
          <circle cx="120" cy="144" r="4" fill="#22c55e" filter="drop-shadow(0 0 4px rgba(34,197,94,0.9))" />
        </svg>
      );

    // 12. SCANNER (Flatbed Document Scanner)
    case 'scanner':
      return (
        <svg viewBox="0 0 320 200" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Bottom Scanner Base Chassis */}
          <rect x="25" y="60" width="270" height="110" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="3" filter="drop-shadow(0 8px 16px rgba(0,0,0,0.25))" />
          
          {/* Glass Bed */}
          <rect x="40" y="75" width="240" height="70" rx="4" fill="#0284c7" opacity="0.35" stroke="#38bdf8" strokeWidth="1" />
          
          {/* Document being scanned */}
          <rect x="60" y="80" width="110" height="60" fill="#ffffff" rx="2" stroke="#cbd5e1" strokeWidth="1" />
          <line x1="70" y1="92" x2="140" y2="92" stroke="#64748b" strokeWidth="2" />
          <line x1="70" y1="102" x2="155" y2="102" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="70" y1="112" x2="130" y2="112" stroke="#94a3b8" strokeWidth="1.5" />

          {/* Glowing Scanning Laser Bar */}
          <line x1="135" y1="74" x2="135" y2="146" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" filter="drop-shadow(0 0 8px rgba(34,197,94,0.9))" />

          {/* Scanner Lid / Cover (Opened at an angle) */}
          <path d="M 25 60 L 45 25 L 285 25 L 295 60 Z" fill="#334155" stroke="#475569" strokeWidth="2" />

          {/* Front Action Buttons */}
          <circle cx="260" cy="155" r="5" fill="#38bdf8" />
          <circle cx="275" cy="155" r="5" fill="#22c55e" />
        </svg>
      );

    // 13. MONITOR
    case 'monitor':
      return (
        <svg viewBox="0 0 320 250" className={className} xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="235" rx="55" ry="10" fill="#475569" stroke="#334155" strokeWidth="1" />
          <rect x="152" y="165" width="16" height="70" fill="#64748b" rx="2" />
          <rect x="25" y="25" width="270" height="150" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="3" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.25))" />
          <rect x="35" y="35" width="250" height="130" rx="4" fill="#0284c7" />
          <rect x="35" y="148" width="250" height="17" fill="#0f172a" />
          <circle cx="48" cy="156" r="4" fill="#38bdf8" />
          <rect x="60" y="153" width="12" height="7" fill="#334155" rx="1" />
          <rect x="76" y="153" width="12" height="7" fill="#334155" rx="1" />
          <path d="M 35 120 Q 100 80 180 115 T 285 100 L 285 148 L 35 148 Z" fill="#0369a1" />
          <circle cx="230" cy="65" r="14" fill="#fde047" opacity="0.9" />
          <text x="160" y="85" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">
            KompuPedia TIK
          </text>
        </svg>
      );

    // 14. PRINTER
    case 'printer':
      return (
        <svg viewBox="0 0 300 220" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect x="80" y="20" width="140" height="40" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" rx="1" />
          <rect x="35" y="50" width="230" height="120" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="3" />
          <rect x="60" y="110" width="180" height="25" fill="#0f172a" rx="3" />
          <rect x="75" y="118" width="150" height="60" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.2))" />
          <line x1="90" y1="135" x2="170" y2="135" stroke="#3b82f6" strokeWidth="3" />
          <line x1="90" y1="148" x2="200" y2="148" stroke="#94a3b8" strokeWidth="2" />
          <line x1="90" y1="160" x2="180" y2="160" stroke="#94a3b8" strokeWidth="2" />
          <g>
            <rect x="228" y="70" width="28" height="50" rx="3" fill="#0f172a" stroke="#475569" strokeWidth="1" />
            <rect x="232" y="80" width="4" height="30" fill="#0284c7" />
            <rect x="238" y="80" width="4" height="30" fill="#e11d48" />
            <rect x="244" y="80" width="4" height="30" fill="#eab308" />
            <rect x="250" y="80" width="4" height="30" fill="#0f172a" stroke="#cbd5e1" strokeWidth="0.5" />
          </g>
          <circle cx="58" cy="75" r="5" fill="#22c55e" />
        </svg>
      );

    // 15. SPEAKER (Desktop Multimedia Stereo Pair)
    case 'speaker':
      return (
        <svg viewBox="0 0 320 220" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Left Speaker Box */}
          <rect x="35" y="30" width="110" height="165" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="2.5" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.3))" />
          {/* Tweeter High Dome */}
          <circle cx="90" cy="68" r="16" fill="#0f172a" stroke="#475569" strokeWidth="2" />
          <circle cx="90" cy="68" r="8" fill="#38bdf8" />
          {/* Bass Woofer Cone */}
          <circle cx="90" cy="135" r="35" fill="#0f172a" stroke="#64748b" strokeWidth="2.5" />
          <circle cx="90" cy="135" r="22" fill="#334155" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="90" cy="135" r="10" fill="#1e293b" />

          {/* Right Speaker Box (Active Unit with Volume Knob) */}
          <rect x="175" y="30" width="110" height="165" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="2.5" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.3))" />
          <circle cx="230" cy="68" r="16" fill="#0f172a" stroke="#475569" strokeWidth="2" />
          <circle cx="230" cy="68" r="8" fill="#38bdf8" />
          <circle cx="230" cy="130" r="32" fill="#0f172a" stroke="#64748b" strokeWidth="2.5" />
          <circle cx="230" cy="130" r="20" fill="#334155" stroke="#f59e0b" strokeWidth="1.5" />

          {/* Volume Dial and Power LED */}
          <circle cx="230" cy="175" r="8" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
          <circle cx="265" cy="175" r="3" fill="#22c55e" filter="drop-shadow(0 0 4px rgba(34,197,94,0.9))" />
        </svg>
      );

    // 16. PROJECTOR (LCD Classroom Projector)
    case 'projector':
      return (
        <svg viewBox="0 0 320 200" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Main Body */}
          <rect x="30" y="60" width="260" height="95" rx="12" fill="#1e293b" stroke="#334155" strokeWidth="3" filter="drop-shadow(0 8px 16px rgba(0,0,0,0.3))" />
          
          {/* Lens Housing Ring Left */}
          <circle cx="95" cy="107" r="34" fill="#0f172a" stroke="#64748b" strokeWidth="3" />
          <circle cx="95" cy="107" r="24" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="95" cy="107" r="14" fill="#fde047" opacity="0.8" />
          
          {/* Light Beam Cone projecting out */}
          <path d="M 95 107 L 20 80 L 20 134 Z" fill="url(#beamGrad)" opacity="0.6" />

          {/* Heat Exhaust Ventilation Slits Right */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`vent-${i}`} x1={170 + i * 11} y1="85" x2={170 + i * 11} y2="130" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
          ))}

          {/* Top Control Keypad */}
          <rect x="235" y="48" width="35" height="12" rx="2" fill="#334155" />

          {/* Adjustable Screw Feet */}
          <rect x="60" y="155" width="20" height="12" rx="3" fill="#64748b" />
          <rect x="240" y="155" width="20" height="12" rx="3" fill="#64748b" />

          <defs>
            <linearGradient id="beamGrad" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#fde047" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    // 17. PSU (Power Supply Unit)
    case 'psu':
      return (
        <svg viewBox="0 0 280 240" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect x="35" y="30" width="210" height="170" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="2" />
          <circle cx="140" cy="115" r="60" fill="#0f172a" stroke="#475569" strokeWidth="2" />
          <circle cx="140" cy="115" r="45" stroke="#64748b" strokeWidth="1.5" fill="none" />
          <circle cx="140" cy="115" r="30" stroke="#64748b" strokeWidth="1.5" fill="none" />
          <circle cx="140" cy="115" r="16" fill="#f59e0b" />
          <rect x="180" y="45" width="45" height="25" rx="3" fill="#d97706" />
          <text x="202" y="62" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">80 PLUS</text>
          <g>
            <rect x="45" y="55" width="22" height="14" fill="#0f172a" rx="1" />
            <rect x="45" y="75" width="22" height="14" fill="#0f172a" rx="1" />
            <rect x="45" y="95" width="22" height="24" fill="#0f172a" rx="1" />
          </g>
        </svg>
      );

    // 18. COOLER (CPU Tower Air Cooler with Heatsink Fins)
    case 'cooler':
      return (
        <svg viewBox="0 0 280 280" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Base Copper Contact Plate */}
          <rect x="90" y="230" width="100" height="22" rx="3" fill="#b45309" stroke="#d97706" strokeWidth="1.5" />
          
          {/* 4 Copper Heatpipes passing upwards */}
          <rect x="105" y="195" width="10" height="40" fill="#f59e0b" rx="2" />
          <rect x="125" y="195" width="10" height="40" fill="#f59e0b" rx="2" />
          <rect x="145" y="195" width="10" height="40" fill="#f59e0b" rx="2" />
          <rect x="165" y="195" width="10" height="40" fill="#f59e0b" rx="2" />

          {/* Aluminum Heatsink Stack Fins */}
          {Array.from({ length: 16 }).map((_, i) => (
            <rect
              key={`fin-${i}`}
              x="60"
              y={55 + i * 9}
              width="160"
              height="5"
              rx="1.5"
              fill="#94a3b8"
              stroke="#64748b"
              strokeWidth="0.5"
            />
          ))}

          {/* 120mm Attached Fan Shroud */}
          <circle cx="140" cy="125" r="55" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
          <circle cx="140" cy="125" r="18" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />

          {/* Fan Blades */}
          {[0, 50, 100, 150, 200, 250, 300].map((angle, idx) => (
            <path
              key={`blade-${idx}`}
              d={`M 140 125 L ${140 + 44 * Math.cos((angle * Math.PI) / 180)} ${125 + 44 * Math.sin((angle * Math.PI) / 180)}`}
              stroke="#38bdf8"
              strokeWidth="8"
              strokeLinecap="round"
              opacity="0.85"
            />
          ))}
        </svg>
      );

    // 19. CASE (Gaming PC Chassis)
    case 'case':
      return (
        <svg viewBox="0 0 240 300" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Outer Black Case Frame */}
          <rect x="35" y="20" width="170" height="260" rx="10" fill="#0f172a" stroke="#334155" strokeWidth="3" filter="drop-shadow(0 10px 20px rgba(0,0,0,0.4))" />
          
          {/* Front Airflow Mesh Column */}
          <rect x="42" y="32" width="26" height="236" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="1" />
          {Array.from({ length: 14 }).map((_, i) => (
            <circle key={`mesh-${i}`} cx="55" cy={46 + i * 16} r="4" fill="#38bdf8" opacity="0.8" />
          ))}

          {/* Tempered Glass Side Window */}
          <rect x="75" y="32" width="120" height="190" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" opacity="0.9" />

          {/* Internal Components visible through glass */}
          <rect x="95" y="55" width="45" height="45" fill="#475569" rx="3" />
          <circle cx="117" cy="77" r="14" fill="#38bdf8" opacity="0.9" />
          <rect x="90" y="120" width="90" height="25" fill="#334155" rx="3" />

          {/* Lower PSU Shroud Chamber */}
          <rect x="75" y="228" width="120" height="40" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          <text x="135" y="252" textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="monospace">
            POWER CHAMBER
          </text>

          {/* Top Power Button & USB ports */}
          <circle cx="180" cy="26" r="3" fill="#22c55e" />
          <rect x="155" y="24" width="6" height="4" fill="#94a3b8" />
          <rect x="165" y="24" width="6" height="4" fill="#94a3b8" />
        </svg>
      );

    // 20. NETWORK (PCIe Wi-Fi 6 & Gigabit NIC Card)
    case 'network':
      return (
        <svg viewBox="0 0 300 240" className={className} xmlns="http://www.w3.org/2000/svg">
          {/* Dual External High-Gain Antennas pointing up */}
          <line x1="50" y1="120" x2="30" y2="20" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
          <line x1="50" y1="150" x2="35" y2="40" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
          <circle cx="50" cy="120" r="8" fill="#f59e0b" />
          <circle cx="50" cy="150" r="8" fill="#f59e0b" />

          {/* Metal PCIe Backplate */}
          <rect x="44" y="65" width="14" height="150" rx="2" fill="#94a3b8" stroke="#64748b" strokeWidth="1" />

          {/* Main PCB Board */}
          <rect x="58" y="90" width="190" height="95" rx="5" fill="#065f46" stroke="#047857" strokeWidth="2" />
          
          {/* Anodized Red/Black Heatsink Shield */}
          <rect x="80" y="105" width="95" height="65" rx="4" fill="#991b1b" stroke="#dc2626" strokeWidth="1.5" />
          <text x="127" y="142" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">
            Wi-Fi 6E
          </text>

          {/* Golden PCIe x1 Interface Pins */}
          <rect x="90" y="185" width="85" height="15" fill="#f59e0b" rx="2" />
          <rect x="110" y="185" width="6" height="15" fill="#065f46" />

          {/* RJ-45 LAN Port on bracket */}
          <rect x="42" y="80" width="16" height="22" fill="#0f172a" rx="1" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="30" width="140" height="140" rx="16" fill="#1e293b" stroke="#334155" strokeWidth="3" />
          <circle cx="100" cy="100" r="36" fill="#3b82f6" opacity="0.8" />
          <circle cx="100" cy="100" r="20" fill="#1e293b" />
        </svg>
      );
  }
};
