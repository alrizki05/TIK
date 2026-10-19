export type HardwareCategory = 'input' | 'processing' | 'storage' | 'output' | 'peripheral';

export type InteractiveDemoType =
  | 'cpu_stress'
  | 'ram_usage'
  | 'speed_race'
  | 'keyboard_press'
  | 'mouse_clicker'
  | 'gpu_render'
  | 'monitor_hz'
  | 'printer_print'
  | 'mic_meter'
  | 'sound_test'
  | 'scanner_scan'
  | 'webcam_lens'
  | 'psu_power'
  | 'cooler_temp'
  | 'network_ping'
  | 'general';

export interface HardwareItem {
  id: string;
  name: string;
  indonesianName: string;
  category: HardwareCategory;
  categoryLabel: string;
  shortDef: string;
  fullDef: string;
  mainFunction: string;
  everydayAnalogy: {
    title: string;
    description: string;
  };
  industryImpact: {
    title: string;
    description: string;
  };
  keySpecs: { label: string; value: string }[];
  marketExamples: string[];
  howItWorks: string[];
  maintenanceTips: string[];
  funFact: string;
  svgType: string;
  interactiveDemoType: InteractiveDemoType;
  anatomyPoints?: {
    name: string;
    desc: string;
    position: { x: number; y: number };
  }[];
}

export interface QuizQuestion {
  id: string;
  category: HardwareCategory | 'general';
  difficulty: 'Mudah' | 'Sedang' | 'Tantangan';
  question: string;
  scenario?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  hardwareIdRelated?: string;
}

export interface SortingItem {
  id: string;
  name: string;
  category: HardwareCategory;
  hint: string;
  iconName: string;
}

export interface UserProgress {
  xp: number;
  level: number;
  completedHardwareIds: string[];
  quizHighScore: number;
  quizzesTaken: number;
  pcBuiltSuccess: boolean;
  unlockedBadges: string[];
  studentName: string;
  schoolName: string;
  gradeClass: string;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: string;
}
