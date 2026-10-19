import { QuizQuestion } from '../types/hardware';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    category: 'processing',
    difficulty: 'Mudah',
    question: 'Komponen perangkat keras yang sering disebut sebagai "Otak Komputer" dan bertugas mengeksekusi instruksi program adalah...',
    options: [
      'Hard Disk Drive (HDD)',
      'Central Processing Unit (CPU)',
      'Power Supply Unit (PSU)',
      'Random Access Memory (RAM)'
    ],
    correctIndex: 1,
    explanation: 'CPU (Processor) adalah unit pengendali utama tempat seluruh perhitungan aritmatika dan logika dijalankan, layaknya otak pada tubuh manusia.',
    hardwareIdRelated: 'cpu'
  },
  {
    id: 'q2',
    category: 'processing',
    difficulty: 'Sedang',
    scenario: 'Doni sedang mengerjakan tugas sekolah dan membuka 15 tab Google Chrome bersamaan dengan aplikasi Microsoft Word dan Spotify. Tiba-tiba komputernya terasa sangat lambat (ngelag).',
    question: 'Berdasarkan kasus Doni, komponen komputer mana yang kemungkinan besar kapasitas tampungnya sudah penuh terpakai?',
    options: [
      'RAM (Random Access Memory)',
      'Power Supply (PSU)',
      'Kartu Jaringan (Wi-Fi Card)',
      'Kamera Webcam'
    ],
    correctIndex: 0,
    explanation: 'RAM bertindak seperti meja kerja. Ketika Anda membuka banyak aplikasi sekaligus dalam waktu bersamaan, kapasitas RAM yang terbatas akan penuh sehingga komputer menjadi lambat atau freeze.',
    hardwareIdRelated: 'ram'
  },
  {
    id: 'q3',
    category: 'storage',
    difficulty: 'Sedang',
    scenario: 'Ibu Guru Ani ingin membeli laptop baru untuk mengajar. Beliau ingin laptopnya menyala dalam waktu kurang dari 10 detik dan membuka file materi pembelajaran secara instan tanpa menunggu lama.',
    question: 'Media penyimpanan jenis apa yang paling tepat disarankan untuk laptop Ibu Ani?',
    options: [
      'Disket Floppy 1.44 MB',
      'Hard Disk Drive (HDD) 5400 RPM',
      'Solid State Drive (SSD) NVMe',
      'Compact Disc (CD-ROM)'
    ],
    correctIndex: 2,
    explanation: 'SSD NVMe menggunakan chip memori flash berkecepatan ribuan megabyte per detik tanpa piringan mekanik berputar, membuat proses booting hanya membutuhkan 5-10 detik saja.',
    hardwareIdRelated: 'ssd'
  },
  {
    id: 'q4',
    category: 'input',
    difficulty: 'Mudah',
    question: 'Manakah dari kelompok perangkat berikut ini yang SEMUANYA merupakan perangkat masukan (Input Device)?',
    options: [
      'Monitor, Speaker, dan Printer',
      'Keyboard, Mouse, dan Mikrofon',
      'CPU, RAM, dan Motherboard',
      'SSD, Hard Disk, dan Flashdisk'
    ],
    correctIndex: 1,
    explanation: 'Keyboard (teks), Mouse (koordinat kursor), dan Mikrofon (suara) semuanya berfungsi memasukkan data dari pengguna ke dalam komputer.',
    hardwareIdRelated: 'keyboard'
  },
  {
    id: 'q5',
    category: 'output',
    difficulty: 'Mudah',
    scenario: 'Rani telah selesai menyusun laporan praktikum TIK dalam format PDF. Guru meminta Rani mengumpulkan laporan tersebut dalam bentuk lembaran kertas fisik.',
    question: 'Perangkat keras keluaran apa yang harus disambungkan Rani ke komputernya?',
    options: [
      'Scanner',
      'Barcode Reader',
      'Printer',
      'Webcam'
    ],
    correctIndex: 2,
    explanation: 'Printer adalah perangkat output yang mencetak dokumen digital di komputer menjadi salinan fisik di atas kertas (hardcopy). Sementara Scanner adalah kebalikannya (input perangkat pemindai kertas ke komputer).',
    hardwareIdRelated: 'printer'
  },
  {
    id: 'q6',
    category: 'processing',
    difficulty: 'Mudah',
    question: 'Papan sirkuit utama tempat menancapkan prosesor, kartu grafis, RAM, serta menjadi jalur kabel penghubung seluruh komponen disebut...',
    options: [
      'Heatsink Fan',
      'Motherboard (Mainboard)',
      'Power Supply Unit',
      'Sound Card'
    ],
    correctIndex: 1,
    explanation: 'Motherboard (papan induk) adalah fondasi sirkuit PCB tempat semua komponen terpasang dan saling berkomunikasi lewat jalur bus data.',
    hardwareIdRelated: 'motherboard'
  },
  {
    id: 'q7',
    category: 'storage',
    difficulty: 'Tantangan',
    question: 'Apa perbedaan utama yang paling mendasar antara sifat memori RAM dengan media penyimpanan SSD/HDD?',
    options: [
      'RAM berkapasitas ratusan Terabyte, sedangkan SSD hanya beberapa Megabyte',
      'RAM bersifat Volatile (data hilang saat listrik mati), sedangkan SSD bersifat Non-Volatile (data tetap tersimpan)',
      'RAM hanya bisa digunakan untuk menyimpan video, sedangkan SSD hanya untuk teks',
      'RAM memiliki piringan logam berputar di dalamnya, sedangkan SSD tidak memiliki listrik'
    ],
    correctIndex: 1,
    explanation: 'RAM bersifat volatile (sementara), begitu komputer dimatikan semua isi di dalamnya bersih kembali. Sebaliknya SSD/HDD bersifat non-volatile (permanen), file tugas Anda tetap aman tersimpan bertahun-tahun.',
    hardwareIdRelated: 'ram'
  },
  {
    id: 'q8',
    category: 'peripheral',
    difficulty: 'Sedang',
    scenario: 'Sebuah komputer desktop di lab sekolah mendadak mati total, tidak ada lampu indikator menyala sama sekali dan kipas pendingin tidak berputar saat tombol power ditekan, padahal stopkontak listrik PLN dinding normal.',
    question: 'Komponen penyuplai daya listrik mana yang dicurigai mengalami kerusakan pertama kali?',
    options: [
      'Power Supply Unit (PSU)',
      'Monitor Komputer',
      'Mouse Optik',
      'Kabel HDMI'
    ],
    correctIndex: 0,
    explanation: 'PSU (Power Supply Unit) adalah jantung daya komputer yang mengubah arus listrik bolak-balik 220V dari dinding PLN menjadi arus DC untuk menyuplai motherboard dan komponen internal.',
    hardwareIdRelated: 'psu'
  },
  {
    id: 'q9',
    category: 'processing',
    difficulty: 'Sedang',
    scenario: 'Siswa kelas multimedia ingin melakukan rendering video animasi 3D resolusi 4K dan bermain game simulasi arsitektur gedung dengan lancar.',
    question: 'Perangkat keras pemrosesan khusus apa yang sangat menentukan kecepatan render grafis visual 3D tersebut?',
    options: [
      'Kartu Suara (Sound Card)',
      'Optical Drive (DVD-RW)',
      'Kartu Grafis / GPU (VGA Card)',
      'Port USB Hub'
    ],
    correctIndex: 2,
    explanation: 'GPU (Graphics Processing Unit) memiliki ribuan core pemrosesan paralel yang dirancang khusus untuk merender kalkulasi visual 3D, efek pencahayaan, dan jutaan frame piksel video.',
    hardwareIdRelated: 'gpu'
  },
  {
    id: 'q10',
    category: 'peripheral',
    difficulty: 'Sedang',
    question: 'Mengapa pada saat merakit prosesor ke motherboard kita diwajibkan mengoleskan "Thermal Paste" di atas permukaan besi prosesor sebelum memasang heatsink kipas pendingin?',
    options: [
      'Sebagai lem perekat kuat agar prosesor tidak bisa dilepas selamanya',
      'Untuk mengisi celah udara mikro mikroskopis antara permukaan CPU dan pendingin sehingga panas berpindah dengan sempurna',
      'Untuk menambah tegangan arus listrik agar prosesor berjalan lebih cepat',
      'Sebagai pelumas anti karat agar prosesor tidak berdecit'
    ],
    correctIndex: 1,
    explanation: 'Thermal paste (pasta termal) berfungsi meratakan permukaan mikro dan mengusir udara (udara adalah penghantar panas yang buruk) sehingga panas dari CPU bisa mengalir optimal ke sirip heatsink.',
    hardwareIdRelated: 'cooler'
  },
  {
    id: 'q11',
    category: 'output',
    difficulty: 'Mudah',
    scenario: 'Pak Guru ingin menampilkan materi presentasi animasi grafis dan video pembelajaran di depan seluruh siswa kelas yang berjumlah 36 anak agar tampak besar di layar depan kelas.',
    question: 'Perangkat keluaran apa yang paling ideal disambungkan ke laptop Pak Budi?',
    options: [
      'Printer Dot Matrix',
      'LCD Proyektor (InFocus)',
      'Bantalan Sentuh (Touchpad)',
      'Hard Disk Eksternal'
    ],
    correctIndex: 1,
    explanation: 'Proyektor LCD memancarkan cahaya gambar ke layar kain putih atau dinding kelas sehingga tayangan slide dapat disaksikan bersama oleh seluruh siswa di ruangan dengan jelas.',
    hardwareIdRelated: 'projector'
  },
  {
    id: 'q12',
    category: 'input',
    difficulty: 'Sedang',
    question: 'Jika seseorang ingin mengubah lembaran ijazah kelulusan atau piagam penghargaan berbahan kertas fisik menjadi file dokumen gambar berformat PDF di komputer, peranti apa yang digunakan?',
    options: [
      'Plotter',
      'Scanner (Pemindai)',
      'Speaker',
      'Flashdisk'
    ],
    correctIndex: 1,
    explanation: 'Scanner (pemindai) adalah perangkat input optik yang merekam lembaran kertas dokumen menggunakan sensor cahaya dan mengubahnya menjadi berkas digital.',
    hardwareIdRelated: 'scanner'
  }
];
