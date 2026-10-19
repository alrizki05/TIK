import { HardwareItem, SortingItem, Badge } from '../types/hardware';

export const HARDWARE_LIST: HardwareItem[] = [
  // ==================== 1. PERANGKAT PEMROSESAN ====================
  {
    id: 'cpu',
    name: 'Processor (CPU)',
    indonesianName: 'Unit Pemrosesan Pusat (Otak Komputer)',
    category: 'processing',
    categoryLabel: 'Pemrosesan',
    shortDef: 'Otak utama yang mengeksekusi instruksi, melakukan perhitungan matematis, dan mengontrol seluruh alur kerja komputer.',
    fullDef: 'Central Processing Unit (CPU) atau prosesor adalah sirkuit terintegrasi silikon mikro yang berfungsi sebagai pusat kendali dan komputasi seluruh sistem komputer. Setiap kali pengguna mengetik tombol, mengklik mouse, atau menjalankan program, CPU yang memproses perintah tersebut miliaran kali per detik (diukur dalam Hertz / GHz).',
    mainFunction: 'Menerima data masukan, menjalankan instruksi perangkat lunak (fetch, decode, execute, writeback), melakukan kalkulasi matematika dan logika (ALU), serta mengkoordinasi kerja semua hardware.',
    everydayAnalogy: {
      title: 'Kepala Koki di Dapur Restoran',
      description: 'Bayangkan sebuah restoran besar. CPU adalah "Kepala Koki" jenius yang membaca pesanan (instruksi), meracik bumbu secepat kilat, dan memberi aba-aba kepada seluruh staf dapur apa yang harus dimasak sekarang.'
    },
    industryImpact: {
      title: 'Arsitektur Komputasi Modern',
      description: 'Menjadi penentu utama performa gaming, kompilasi software pemrograman, dan kecepatan olah data aplikasi profesional.'
    },
    keySpecs: [
      { label: 'Kecepatan Clock', value: '2.5 GHz – 5.8 GHz' },
      { label: 'Jumlah Inti (Core)', value: '4 hingga 24 Core' },
      { label: 'Cache Memory', value: 'L1, L2, dan L3 Cache' },
      { label: 'Produsen Terkenal', value: 'Intel (Core i3/i5/i7/i9), AMD (Ryzen), Apple (M-Series)' }
    ],
    marketExamples: ['Intel Core i5-14600K', 'AMD Ryzen 7 7800X3D', 'Apple M3 Pro'],
    howItWorks: [
      'Fetch: Mengambil instruksi dari memori kerja (RAM).',
      'Decode: Menerjemahkan instruksi menjadi kode biner listrik yang dipahami mesin.',
      'Execute: Menjalankan operasi aritmatika dan logika di sirkuit ALU.',
      'Writeback: Menyimpan hasil perhitungan kembali ke register atau RAM.'
    ],
    maintenanceTips: [
      'Ganti Thermal Paste setiap 1-2 tahun untuk menjaga penghantaran panas ke heatsink.',
      'Pastikan kipas pendingin berputar normal dan sirkulasi udara casing bebas dari gumpalan debu.',
      'Hindari overclocking ekstrem tanpa sistem pendingin cairan atau pendingin udara yang memadai.'
    ],
    funFact: 'Di dalam satu keping CPU modern berukuran sebesar koin receh, terdapat lebih dari 15 hingga 25 MILIAR transistor yang ukurannya hanya beberapa nanometer!',
    svgType: 'cpu',
    interactiveDemoType: 'cpu_stress',
    anatomyPoints: [
      { name: 'IHS (Integrated Heat Spreader)', desc: 'Penutup logam pelindung inti silikon yang menyebarkan panas ke pendingin.', position: { x: 50, y: 50 } },
      { name: 'Golden Triangle / Notch', desc: 'Tanda segitiga emas di sudut untuk panduan arah pasang ke soket agar tidak terbalik.', position: { x: 18, y: 82 } },
      { name: 'Pin Kontak Emas (LGA/PGA)', desc: 'Ratusan titik kontak emas di bagian bawah untuk menghantarkan sinyal data dan daya listrik.', position: { x: 50, y: 88 } }
    ]
  },
  {
    id: 'ram',
    name: 'RAM (Random Access Memory)',
    indonesianName: 'Memori Akses Acak (Meja Kerja Komputer)',
    category: 'processing',
    categoryLabel: 'Pemrosesan',
    shortDef: 'Memori berkecepatan ultra-tinggi bersifat sementara untuk menampung program dan data yang sedang aktif digunakan.',
    fullDef: 'RAM adalah memori volatile (datanya akan hilang ketika komputer dimatikan) yang bertugas menyediakan data kerja siap saji secara instan untuk CPU. Berbeda dengan hard disk yang lambat, RAM bekerja dalam nanodetik sehingga aplikasi dapat berjalan lancar tanpa macet (lag).',
    mainFunction: 'Menyimpan sementara data sistem operasi, aplikasi, dan dokumen yang sedang Anda buka saat ini sehingga prosesor bisa mengaksesnya seketika.',
    everydayAnalogy: {
      title: 'Meja Kerja / Talenan Memasak',
      description: 'Jika SSD/Hard disk adalah "Lemari Arsip Besar" yang ada di ujung ruangan, maka RAM adalah "Meja Kerja di depan Anda". Semakin luas meja Anda (misal 16 GB dibanding 4 GB), semakin banyak buku atau tugas yang bisa dibuka sekaligus tanpa bolak-balik ke lemari.'
    },
    industryImpact: {
      title: 'Multitasking & Produktivitas',
      description: 'Menentukan seberapa banyak aplikasi, browser tab, dan software desain yang bisa berjalan lancar secara serentak tanpa lag.'
    },
    keySpecs: [
      { label: 'Kapasitas Umum', value: '8 GB, 16 GB, 32 GB, 64 GB' },
      { label: 'Generasi Teknologi', value: 'DDR4, DDR5' },
      { label: 'Kecepatan Transfer', value: '3200 MHz hingga 6400+ MHz' },
      { label: 'Sifat Penyimpanan', value: 'Volatile (hilang saat listrik padam)' }
    ],
    marketExamples: ['Kingston Fury DDR4 16GB', 'Corsair Vengeance DDR5 32GB', 'G.Skill Trident Z5'],
    howItWorks: [
      'Ketika Anda mengklik ikon aplikasi (misal browser), sistem menyalin data dari SSD ke RAM.',
      'CPU berkomunikasi dua arah dengan RAM melalui bus data berkecepatan sangat tinggi.',
      'Ketika aplikasi ditutup, blok memori di RAM dibebaskan untuk program lain.'
    ],
    maintenanceTips: [
      'Jangan menyentuh deretan kuningan emas (golden fingers) dengan tangan telanjang untuk mencegah korosi akibat keringat/minyak.',
      'Jika komputer sering blue screen atau berbunyi beep saat dinyalakan, bersihkan pin kuningan RAM secara perlahan dengan karet penghapus pensil bersih.'
    ],
    funFact: 'Kata "Random" berarti CPU dapat melompat langsung ke sel memori mana pun dengan waktu tempuh yang sama persis, tanpa harus membaca urut dari awal!',
    svgType: 'ram',
    interactiveDemoType: 'ram_usage',
    anatomyPoints: [
      { name: 'Keping IC Silikon (Memory Chips)', desc: 'Kotak-kotak hitam tempat transistor mikro menyimpan muatan bit biner data.', position: { x: 50, y: 40 } },
      { name: 'Notch (Kunci Celah)', desc: 'Celah tak simetris di bagian bawah agar modul DDR4 atau DDR5 tidak bisa salah terbalik dipasang.', position: { x: 50, y: 78 } },
      { name: 'Pin Kontak Emas', desc: 'Jejak tembaga berlapis emas anti-oksidasi yang bersentuhan dengan slot DIMM motherboard.', position: { x: 50, y: 92 } }
    ]
  },
  {
    id: 'motherboard',
    name: 'Motherboard (Mainboard)',
    indonesianName: 'Papan Induk / Papan Sirkuit Utama',
    category: 'processing',
    categoryLabel: 'Pemrosesan',
    shortDef: 'Papan sirkuit cetak utama yang menjadi rumah dan jalan tol penghubung seluruh komponen komputer satu sama lain.',
    fullDef: 'Motherboard adalah fondasi fisik dan elektronik komputer. Semua komponen mulai dari prosesor, RAM, kartu grafis, media penyimpanan, hingga colokan USB terpasang langsung atau terhubung kabel ke papan induk ini. Dilengkapi chipset yang mengatur lalu lintas data dan BIOS/UEFI sebagai pengontrol awal.',
    mainFunction: 'Menghubungkan, mendistribusikan aliran daya listrik dari PSU, dan memfasilitasi komunikasi jalur data (bus) antarsemua perangkat keras komputer.',
    everydayAnalogy: {
      title: 'Jaringan Jalan Tol & Sistem Saraf Tubuh',
      description: 'Motherboard seperti sistem kerangka dan saraf pada tubuh manusia. Ia menyatukan otak (CPU), jantung (PSU), dan indra-indra, serta menyediakan urat saraf (jalur PCB) agar sinyal pesan mengalir ke tujuan dengan tepat.'
    },
    industryImpact: {
      title: 'Stabilitas & Jalur Konektivitas',
      description: 'Menentukan kompatibilitas prosesor generasi baru, kecepatan PCIe generasi terbaru, dan kestabilan daya VRM.'
    },
    keySpecs: [
      { label: 'Faktor Bentuk (Form Factor)', value: 'ATX, Micro-ATX (mATX), Mini-ITX' },
      { label: 'Tipe Soket CPU', value: 'LGA1700 (Intel), AM4/AM5 (AMD)' },
      { label: 'Slot Ekspansi', value: 'PCIe 4.0/5.0 x16, M.2 NVMe, SATA' },
      { label: 'Port Belakang (I/O)', value: 'USB 3.2, HDMI, DisplayPort, LAN RJ45, Audio' }
    ],
    marketExamples: ['ASUS TUF Gaming B760M', 'MSI MAG B650 Tomahawk', 'Gigabyte AORUS Elite'],
    howItWorks: [
      'Chipset dan rangkaian sirkuit multilayer mengatur rute sinyal listrik antar komponen.',
      'Chip BIOS/UEFI melakukan uji mandiri saat awal dinyalakan (POST - Power On Self Test).',
      'Modul VRM (Voltage Regulator Module) menstabilkan voltase listrik yang masuk ke CPU.'
    ],
    maintenanceTips: [
      'Hindari penumpukan debu tebal yang dapat menyebabkan korsleting kelembaban pada jalur solder mikro.',
      'Gunakan gelang antistatis atau sentuh sasis logam sebelum merakit untuk membuang listrik statis tubuh.'
    ],
    funFact: 'Sebuah motherboard modern memiliki hingga 8 sampai 12 lapisan sirkuit tembaga mikroskopis yang ditumpuk di dalam papan tipis tersebut!',
    svgType: 'motherboard',
    interactiveDemoType: 'general',
    anatomyPoints: [
      { name: 'Soket Prosesor (CPU Socket)', desc: 'Tempat menaruh CPU dengan tuas pengunci logam kuat.', position: { x: 38, y: 35 } },
      { name: 'Slot RAM (DIMM)', desc: 'Dua atau empat slot panjang vertikal berpola pengunci samping untuk modul memori.', position: { x: 72, y: 32 } },
      { name: 'Slot PCIe x16', desc: 'Slot ekspansi berkecepatan tinggi khusus untuk memasang Kartu Grafis / VGA.', position: { x: 42, y: 70 } },
      { name: 'Port I/O Belakang', desc: 'Kumpulan colokan luar seperti USB, monitor, kabel LAN, dan audio speaker.', position: { x: 12, y: 30 } }
    ]
  },
  {
    id: 'gpu',
    name: 'GPU / Kartu Grafis (VGA)',
    indonesianName: 'Unit Pemroses Grafis / Kartu Tampilan',
    category: 'processing',
    categoryLabel: 'Pemrosesan',
    shortDef: 'Perangkat keras khusus yang memproses jutaan piksel gambar, visual 3D, animasi video, dan tampilan ke layar monitor.',
    fullDef: 'Graphics Processing Unit (GPU) adalah sirkuit elektronik dengan ribuan inti pemrosesan paralel kecil yang dirancang khusus untuk memanipulasi dan mengubah memori dengan cepat guna mempercepat pembuatan gambar dalam frame buffer yang ditujukan untuk output ke tampilan.',
    mainFunction: 'Mengubah sinyal data biner komputer menjadi sinyal visual grafis (gambar, video, game 3D, desain antarmuka) yang dapat ditampilkan oleh layar monitor.',
    everydayAnalogy: {
      title: 'Studio Lukis Animasi Berkecepatan Tinggi',
      description: 'Jika CPU adalah penulis naskah cerita, maka GPU adalah tim pelukis profesional berkekuatan ribuan kuas yang menggambar setiap adegan visual naskah tersebut menjadi 60 sampai 144 lembar gambar per detik!'
    },
    industryImpact: {
      title: 'Industri Kreatif, 3D & Artificial Intelligence',
      description: 'Menjadi motor penggerak animasi film Hollywood, video game interaktif, simulasi sains, dan training model AI modern.'
    },
    keySpecs: [
      { label: 'VRAM (Video Memory)', value: '8 GB hingga 24 GB GDDR6/GDDR6X' },
      { label: 'Konektor Daya', value: '8-Pin PCIe / 12VHPWR' },
      { label: 'Port Output', value: 'HDMI 2.1, DisplayPort 1.4/2.1' },
      { label: 'Produsen Chip', value: 'NVIDIA (GeForce RTX), AMD (Radeon RX), Intel (Arc)' }
    ],
    marketExamples: ['NVIDIA GeForce RTX 4070', 'AMD Radeon RX 7800 XT', 'Intel Arc A770'],
    howItWorks: [
      'Menerima instruksi koordinat 3D dari CPU melalui antarmuka PCIe bus.',
      'Melakukan kalkulasi trigonometri geometri (vertex, rasterisasi, tekstur, pencahayaan ray tracing).',
      'Mengirimkan hasil render warna piksel akhir ke layar melalui kabel HDMI/DisplayPort.'
    ],
    maintenanceTips: [
      'Bersihkan sirip heatsink dan kipas GPU dari debu secara berkala agar suhu kerja tetap di bawah 80°C.',
      'Gunakan bracket penopang GPU jika menggunakan kartu grafis yang tebal dan berat agar slot PCIe motherboard tidak bengkok.'
    ],
    funFact: 'Kini GPU tidak hanya dipakai untuk game, tetapi juga menjadi tulang punggung revolusi kecerdasan buatan (Artificial Intelligence) dunia!',
    svgType: 'gpu',
    interactiveDemoType: 'gpu_render',
    anatomyPoints: [
      { name: 'Kipas Pendingin (Cooling Fans)', desc: 'Meniupkan udara dingin melewati sirip aluminium heatsink pelepasan panas chip.', position: { x: 50, y: 50 } },
      { name: 'Konektor PCIe Bus', desc: 'Jari-jari emas yang ditancapkan ke slot PCIe x16 pada motherboard.', position: { x: 45, y: 88 } },
      { name: 'Port Display HDMI & DP', desc: 'Colokan di bagian samping luar sasis untuk menghubungkan kabel ke monitor.', position: { x: 10, y: 55 } }
    ]
  },

  // ==================== 2. PERANGKAT PENYIMPANAN ====================
  {
    id: 'ssd',
    name: 'SSD (Solid State Drive)',
    indonesianName: 'Media Penyimpanan Padat Berbasis Chip Flash',
    category: 'storage',
    categoryLabel: 'Penyimpanan',
    shortDef: 'Media penyimpanan permanen modern berkecepatan sangat tinggi tanpa komponen bergerak, menggunakan chip memori flash NAND.',
    fullDef: 'Solid State Drive (SSD) adalah media penyimpanan sekunder generasi baru yang menggantikan piringan magnetik hard disk mekanis lama. Karena tidak memiliki piringan berputar atau jarum pembaca, SSD bekerja tanpa suara, tahan terhadap guncangan fisik ringan, dan memiliki kecepatan baca-tulis hingga 10-50 kali lebih kencang dibanding hard disk konvensional.',
    mainFunction: 'Menyimpan sistem operasi (Windows, Linux), aplikasi software, dan dokumen pengguna secara permanen (non-volatile) meskipun komputer dimatikan.',
    everydayAnalogy: {
      title: 'Lemari Berkas Digital Berkecepatan Kilat',
      description: 'Jika Hard disk lama seperti mencari buku di perpustakaan lorong demi lorong berjalan kaki, SSD seperti mesin pencari ajaib yang menyodorkan buku yang Anda minta langsung ke tangan Anda dalam sekejap mata.'
    },
    industryImpact: {
      title: 'Standar Komputasi Modern',
      description: 'Menyingkat waktu booting dari hitungan menit menjadi hitungan detik, serta mempercepat loading game dan aplikasi berat.'
    },
    keySpecs: [
      { label: 'Tipe / Form Factor', value: 'M.2 NVMe PCIe 4.0/5.0, 2.5 inch SATA' },
      { label: 'Kecepatan Baca', value: '550 MB/s (SATA) hingga 7.500+ MB/s (NVMe)' },
      { label: 'Kapasitas Populer', value: '500 GB, 1 TB, 2 TB, 4 TB' },
      { label: 'Sifat Data', value: 'Non-Volatile (tetap tersimpan saat mati)' }
    ],
    marketExamples: ['Samsung 990 Pro NVMe', 'Kingston KC3000', 'Crucial T500'],
    howItWorks: [
      'Data biner 1 dan 0 disimpan dalam bentuk muatan elektron di dalam sel gerbang mengambang transistor NAND.',
      'Pengontrol (controller chip) mengatur pembagian blok baca, tulis, dan proses penyeimbangan keausan (wear leveling).'
    ],
    maintenanceTips: [
      'Sisakan ruang kosong minimal 15-20% dari kapasitas total agar fitur Trim dan performa SSD tetap optimal.',
      'JANGAN LAKUKAN DEFRAGMENTASI (defrag) pada SSD, karena defrag hanya menambah siklus penulisan yang bisa memperpendek usia chip flash.'
    ],
    funFact: 'Komputer yang memakai SSD hanya butuh waktu 5 sampai 10 detik untuk booting menyala dari posisi mati!',
    svgType: 'ssd',
    interactiveDemoType: 'speed_race',
    anatomyPoints: [
      { name: 'NAND Flash Memory IC', desc: 'Chip silikon hitam tempat data biner disimpan permanen tanpa listrik.', position: { x: 65, y: 50 } },
      { name: 'Master Controller', desc: 'Prosesor kecil khusus yang mengatur lalu lintas baca dan tulis data SSD.', position: { x: 30, y: 50 } },
      { name: 'Konektor M.2 Key-M', desc: 'Ujung pin emas yang ditancapkan langsung dan dibaut pada motherboard.', position: { x: 10, y: 50 } }
    ]
  },
  {
    id: 'hdd',
    name: 'Hard Disk Drive (HDD)',
    indonesianName: 'Cakram Keras Magnetik',
    category: 'storage',
    categoryLabel: 'Penyimpanan',
    shortDef: 'Media penyimpanan data berkapasitas besar berbiaya murah yang menggunakan piringan magnetik berputar dan jarum mekanis.',
    fullDef: 'HDD adalah perangkat penyimpanan data sekunder elektromagnetik tradisional. Di dalamnya terdapat satu atau lebih piringan logam magnetik (platter) yang berputar dengan kecepatan sangat tinggi (umumnya 5400 atau 7200 putaran per menit / RPM) serta jarum baca-tulis (head actuator) yang melayang beberapa nanometer di atas permukaan piringan.',
    mainFunction: 'Menyimpan cadangan data (backup), berkas video resolusi tinggi, dan dokumen arsip berukuran besar yang jarang dibuka secara berkala.',
    everydayAnalogy: {
      title: 'Pemutar Piringan Hitam Raksasa',
      description: 'Persis seperti gramofon pemutar piringan musik vinyl: ada piringan yang berputar kencang dan ada jarum pembaca yang bergerak mencari data yang ingin Anda buka.'
    },
    industryImpact: {
      title: 'Gudang Data Center Skala Besar',
      description: 'Masih digunakan secara masif di pusat data cloud dunia seperti Google Drive dan AWS untuk penyimpanan arsip berbiaya rendah per Gigabyte.'
    },
    keySpecs: [
      { label: 'Kecepatan Putar', value: '5400 RPM / 7200 RPM' },
      { label: 'Kecepatan Transfer', value: '80 MB/s – 180 MB/s' },
      { label: 'Ukuran Fisik', value: '3.5 inch (PC Desktop) & 2.5 inch (Laptop)' },
      { label: 'Kapasitas', value: '1 TB, 2 TB, 4 TB, hingga 22 TB' }
    ],
    marketExamples: ['Seagate Barracuda 2TB', 'Western Digital (WD) Blue 2TB', 'Toshiba P300'],
    howItWorks: [
      'Motor spindle memutar piringan platter magnetik hingga ribuan putaran per menit.',
      'Head elektromagnetik bergerak mendeteksi kutub magnet utara/selatan (0 dan 1) di atas sektor piringan.'
    ],
    maintenanceTips: [
      'JANGAN mengguncang atau memindahkan komputer saat sedang menyala agar jarum tidak menabrak piringan (head crash).',
      'Gunakan UPS atau stabilizer listrik agar jarum HDD sempat parkir dengan aman saat listrik padam mendadak.'
    ],
    funFact: 'Jarum pembaca hard disk melayang di atas piringan dengan jarak yang lebih tipis dari sebutir debu!',
    svgType: 'hdd',
    interactiveDemoType: 'speed_race',
    anatomyPoints: [
      { name: 'Piringan Magnetik (Platter)', desc: 'Cakram paduan aluminium/kaca dilapisi material feromagnetik tempat data tersimpan.', position: { x: 55, y: 45 } },
      { name: 'Lengan Jarum Pembaca (Read/Write Head)', desc: 'Jarum elektromagnetik yang melayang membaca kutub magnet biner pada platter.', position: { x: 30, y: 70 } },
      { name: 'Motor Spindle', desc: 'Poros motor presisi tinggi yang memutar piringan hingga 7200 RPM.', position: { x: 55, y: 45 } }
    ]
  },
  {
    id: 'flashdisk',
    name: 'Flashdisk (USB Flash Drive)',
    indonesianName: 'Penyimpan Kilat USB / Pena Data',
    category: 'storage',
    categoryLabel: 'Penyimpanan',
    shortDef: 'Media penyimpanan portabel berukuran kecil dengan antarmuka USB yang praktis untuk membawa dokumen tugas sekolah ke mana saja.',
    fullDef: 'Flashdisk adalah perangkat penyimpanan eksternal kompak berbasis chip memori flash NAND yang terhubung melalui port Universal Serial Bus (USB). Karena bentuknya yang kecil menyerupai gantungan kunci dan tidak membutuhkan catu daya baterai eksternal, flashdisk menjadi standar pertukaran tugas dan berkas harian siswa dan guru di sekolah.',
    mainFunction: 'Menyimpan, mencadangkan, dan memindahkan dokumen tugas, foto, video, dan materi presentasi antar komputer dengan mudah dan cepat.',
    everydayAnalogy: {
      title: 'Tas Jinjing Saku Digital',
      description: 'Flashdisk seperti map berkas mini di dalam saku baju: Anda bisa mengisinya dengan file tugas dari komputer rumah, lalu membawanya ke laboratorium komputer sekolah.'
    },
    industryImpact: {
      title: 'Media Transfer Fleksibel & Bootable Installer',
      description: 'Sangat sering digunakan oleh teknisi untuk membuat bootable USB installer sistem operasi Windows dan Linux.'
    },
    keySpecs: [
      { label: 'Kapasitas', value: '16 GB, 32 GB, 64 GB, 128 GB, 256 GB' },
      { label: 'Tipe Konektor', value: 'USB Tipe-A & USB Tipe-C (OTG)' },
      { label: 'Standar USB', value: 'USB 2.0 (480 Mbps), USB 3.2 Gen 1 (5 Gbps)' }
    ],
    marketExamples: ['SanDisk Ultra Flair USB 3.0', 'Kingston DataTraveler Kyson', 'Samsung Bar Plus'],
    howItWorks: [
      'Dicolokkan ke port USB komputer yang menyuplai daya listrik 5 Volt.',
      'Sistem operasi mendeteksi driver USB Mass Storage Device secara otomatis (Plug and Play).',
      'Data ditulis langsung ke gerbang memori flash non-volatile.'
    ],
    maintenanceTips: [
      'SELALU gunakan fitur "Eject / Safely Remove Hardware" sebelum mencabut flashdisk agar file tidak rusak (corrupt).',
      'Pasang penutup USB agar konektor kuningan tidak kemasukan kotoran atau air.'
    ],
    funFact: 'Sebelum ada flashdisk, media portabel yang dipakai adalah Disket Floppy 1.44 MB yang hanya muat beberapa file teks sederhana!',
    svgType: 'flashdisk',
    interactiveDemoType: 'general'
  },

  // ==================== 3. PERANGKAT MASUKAN (INPUT) ====================
  {
    id: 'keyboard',
    name: 'Keyboard (Papan Ketik)',
    indonesianName: 'Papan Tombol Ketik',
    category: 'input',
    categoryLabel: 'Masukan',
    shortDef: 'Perangkat masukan utama berupa sekumpulan tombol huruf, angka, dan fungsi untuk memasukkan teks serta instruksi perintah.',
    fullDef: 'Keyboard adalah papan input utama berbasis tombol elektromekanikal. Ketika sebuah tombol ditekan, sirkuit matriks di bawahnya terhubung dan mengirimkan kode pindaian (scan code) biner ke komputer untuk diterjemahkan menjadi karakter tulisan atau pintasan perintah (shortcut). Tata letak tombol paling populer di dunia adalah tata letak "QWERTY".',
    mainFunction: 'Memasukkan karakter teks tulisan, angka perhitungan, simbol, serta perintah pintasan (seperti Ctrl+C untuk menyalin, Ctrl+V untuk menempel) ke dalam sistem.',
    everydayAnalogy: {
      title: 'Mesin Tik Cerdas & Pena Digital',
      description: 'Keyboard adalah pena digital Anda untuk berbicara dan menuangkan ide pikiran Anda ke dalam memori komputer.'
    },
    industryImpact: {
      title: 'Antarmuka Utama Manusia dan Mesin',
      description: 'Menjadi alat utama bagi programmer menulis kode baris demi baris, penulis membuat buku, dan staf kantor membuat laporan.'
    },
    keySpecs: [
      { label: 'Tata Letak (Layout)', value: 'QWERTY, Dvorak' },
      { label: 'Tipe Switch Tombol', value: 'Membran (karet lentur), Mekanikal (Blue, Red, Brown Switch)' },
      { label: 'Konektivitas', value: 'Kabel USB, Nirkabel 2.4 GHz, Bluetooth' }
    ],
    marketExamples: ['Logitech K120', 'Razer BlackWidow V4', 'Keychron K2 Mechanical'],
    howItWorks: [
      'Tombol ditekan menyentuh lembaran sirkuit matriks keyboard.',
      'Mikrokontroler keyboard membaca baris dan kolom yang terhubung, menghasilkan "Scan Code".',
      'Sinyal dikirim via USB dan sistem operasi menampilkan huruf yang cocok di layar.'
    ],
    maintenanceTips: [
      'Jauhkan minuman manis, kopi, dan makanan beremah dari dekat keyboard agar tombol tidak lengket atau korslet.',
      'Bersihkan sela-sela tombol secara teratur dengan kuas halus kecil atau blower mini.'
    ],
    funFact: 'Tata letak susunan huruf "QWERTY" diciptakan pada tahun 1873 agar juru ketik tidak mengetik terlalu cepat sehingga tuas mesin tik manual zaman dulu tidak saling bertabrakan!',
    svgType: 'keyboard',
    interactiveDemoType: 'keyboard_press',
    anatomyPoints: [
      { name: 'Tombol Ketik Alfanumerik (Keycaps)', desc: 'Tombol plastik bertuliskan huruf A-Z, angka 0-9, dan tanda baca.', position: { x: 45, y: 50 } },
      { name: 'Tombol Fungsi (F1 - F12)', desc: 'Barisan tombol atas untuk fungsi khusus cepat program komputer.', position: { x: 50, y: 15 } },
      { name: 'Bantalan Angka (Numpad)', desc: 'Gugusan tombol angka di sebelah kanan untuk mempermudah perhitungan matematis cepat.', position: { x: 88, y: 55 } }
    ]
  },
  {
    id: 'mouse',
    name: 'Mouse (Tetikus)',
    indonesianName: 'Tetikus / Perangkat Penunjuk Layar',
    category: 'input',
    categoryLabel: 'Masukan',
    shortDef: 'Perangkat genggam masukan penunjuk grafis untuk menggerakkan kursor, memilih objek, dan mengklik menu di layar monitor.',
    fullDef: 'Mouse adalah alat penunjuk (pointing device) yang mendeteksi gerakan dua dimensi relatif terhadap permukaan meja. Menggunakan sensor optik lampu LED inframerah atau laser dan kamera mikroskopis mini di bawahnya untuk mengambil ribuan foto permukaan per detik guna menghitung pergeseran pointer kursor secara akurat.',
    mainFunction: 'Mengontrol pergerakan kursor di antarmuka grafis (GUI), melakukan klik kiri (eksekusi), klik kanan (menu opsi konteks), dragging (menyeret objek), dan scrolling (menggulung dokumen).',
    everydayAnalogy: {
      title: 'Tangan Telunjuk Virtual di Layar',
      description: 'Mouse adalah perpanjangan jari tangan Anda di dalam dunia layar. Gerakkan mouse ke atas di atas meja, maka kursor di monitor ikut bergerak ke atas.'
    },
    industryImpact: {
      title: 'Evolusi Graphical User Interface (GUI)',
      description: 'Penemuan mouse mengubah komputer dari yang awalnya hanya berbasis teks hitam-putih command line menjadi ramah untuk semua kalangan.'
    },
    keySpecs: [
      { label: 'Tipe Sensor', value: 'Optik LED, Laser' },
      { label: 'Resolusi Presisi (DPI)', value: '800 DPI – 26.000+ DPI' },
      { label: 'Tombol Standar', value: 'Klik Kiri, Klik Kanan, Roda Scroll (Klik Tengah)' }
    ],
    marketExamples: ['Logitech G102 Lightsync', 'Logitech MX Master 3S', 'Razer DeathAdder Essential'],
    howItWorks: [
      'Sensor optik di bawah mouse menyinari permukaan meja dan menangkap ribuan gambar mikro per detik.',
      'Chip prosesor sinyal digital (DSP) membandingkan perbedaan gambar untuk menghitung arah dan jarak geser.',
      'Data koordinat dikirimkan ke komputer ratusan kali per detik (polling rate).'
    ],
    maintenanceTips: [
      'Gunakan mousepad kain bersih agar kaki teflon (mouse feet) di bawah mouse tidak cepat aus dan kotor.',
      'Lap kaca sensor optik dari serat debu atau bulu kain yang tersangkut jika kursor mouse terasa melompat-lompat.'
    ],
    funFact: 'Dinamakan "Mouse" (tikus) oleh penemunya Douglas Engelbart pada tahun 1964 karena bentuk kotak kayunya dan kabel belakangnya yang menjulur persis seperti ekor tikus!',
    svgType: 'mouse',
    interactiveDemoType: 'mouse_clicker',
    anatomyPoints: [
      { name: 'Tombol Klik Kiri', desc: 'Tombol utama untuk memilih objek, membuka aplikasi (dobel klik), dan menekan tombol menu.', position: { x: 38, y: 25 } },
      { name: 'Roda Gulir (Scroll Wheel)', desc: 'Roda karet bergerigi di tengah untuk menggulung halaman web ke atas dan bawah dengan santai.', position: { x: 50, y: 25 } },
      { name: 'Tombol Klik Kanan', desc: 'Tombol pembuka menu konteks opsi tambahan (seperti Copy, Paste, Properties).', position: { x: 62, y: 25 } }
    ]
  },
  {
    id: 'webcam',
    name: 'Webcam (Kamera Web)',
    indonesianName: 'Kamera Web Komputer',
    category: 'input',
    categoryLabel: 'Masukan',
    shortDef: 'Perangkat masukan visual optik yang menangkap video dan foto langsung pengguna untuk panggilan tatap muka daring.',
    fullDef: 'Webcam adalah kamera digital kompak yang terhubung ke komputer untuk menangkap sinyal cahaya lingkungan fisik dan mengubahnya menjadi aliran data video digital terkompresi secara real-time. Menjadi sarana krusial untuk pembelajaran jarak jauh (PJJ), video conference rapat guru, dan streaming edukatif.',
    mainFunction: 'Menangkap gambar wajah dan ekspresi pengguna secara terus-menerus untuk ditransmisikan melalui internet dalam aplikasi seperti Zoom, Google Meet, dan video call.',
    everydayAnalogy: {
      title: 'Mata Komputer untuk Tatap Muka Jarak Jauh',
      description: 'Webcam bertindak sebagai "sepasang mata digital" komputer yang memandang wajah Anda dan memperlihatkannya kepada lawan bicara di seluruh penjuru dunia.'
    },
    industryImpact: {
      title: 'Komunikasi Global & Streaming',
      description: 'Memfasilitasi kerja jarak jauh (work from home), telekonferensi kedokteran, dan streaming edukasi digital.'
    },
    keySpecs: [
      { label: 'Resolusi Gambar', value: '720p HD, 1080p Full HD, 4K UHD' },
      { label: 'Kecepatan Bingkai', value: '30 FPS hingga 60 FPS' },
      { label: 'Fitur Tambahan', value: 'Mikrofon Stereo terintegrasi, Privacy Shutter (Penutup Lensa)' }
    ],
    marketExamples: ['Logitech C920 HD Pro', 'Logitech Brio 500', 'Rapoo C260'],
    howItWorks: [
      'Lensa kamera memfokuskan cahaya ke sensor silikon CMOS.',
      'Sensor mengubah intensitas foton cahaya menjadi sinyal muatan listrik warna RGB (Merah, Hijau, Biru).',
      'Chip internal mengompresi gambar dan mengirimkannya via kabel USB ke software panggilan.'
    ],
    maintenanceTips: [
      'Tutup lensa fisik dengan penutup privasi (privacy shutter) jika webcam tidak sedang digunakan demi keamanan privasi.',
      'Bersihkan lensa menggunakan kain microfiber khusus kacamata tanpa cairan kimia abrasif.'
    ],
    funFact: 'Webcam pertama di dunia diciptakan pada tahun 1991 oleh ilmuwan Universitas Cambridge hanya untuk mengecek teko kopi di ruang rehat tanpa perlu berjalan jauh!',
    svgType: 'webcam',
    interactiveDemoType: 'webcam_lens'
  },
  {
    id: 'microphone',
    name: 'Mikrofon (Microphone)',
    indonesianName: 'Pengubah Gelombang Suara (Mikrofon)',
    category: 'input',
    categoryLabel: 'Masukan',
    shortDef: 'Perangkat masukan audio yang mengubah getaran gelombang suara udara manusia menjadi sinyal listrik audio digital.',
    fullDef: 'Mikrofon adalah transduser elektroakustik. Suara getaran pita suara pengguna menggetarkan diafragma tipis di dalam mikrofon, menghasilkan variasi tegangan listrik mikro yang kemudian diperkuat dan diubah oleh Analog-to-Digital Converter (ADC) komputer menjadi berkas rekaman suara atau suara percakapan daring.',
    mainFunction: 'Merekam suara manusia, instrumen musik, memasukkan perintah suara (voice assistant), serta berkomunikasi dua arah dalam kelas online.',
    everydayAnalogy: {
      title: 'Telinga Pendengar Suara Komputer',
      description: 'Mikrofon adalah telinga digital komputer yang mendengarkan saat Anda berbicara dan mengirimkannya ke CPU untuk diproses.'
    },
    industryImpact: {
      title: 'Industri Penyiaran, Musik & Voice AI',
      description: 'Menjadi sarana rekaman podcast profesional, studio musik, serta pengenalan suara untuk asisten cerdas seperti Google Assistant dan Siri.'
    },
    keySpecs: [
      { label: 'Tipe Diafragma', value: 'Kondensor (sensitif, jernih), Dinamis (tahan bising)' },
      { label: 'Pola Tangkapan', value: 'Kardioid (depan saja), Omnidirectional (semua arah)' },
      { label: 'Koneksi', value: 'Jack Audio 3.5mm, USB Plug-and-Play, XLR' }
    ],
    marketExamples: ['Fifine K669B', 'Rode NT-USB Mini', 'HyperX QuadCast S'],
    howItWorks: [
      'Gelombang suara menabrak diafragma membran tipis yang bergetar.',
      'Getaran diubah menjadi sinyal voltase listrik melalui medan magnet atau kapsul kapasitor.',
      'Komputer mendigitalkan sinyal ke format sampel audio (misal 48 kHz / 24-bit).'
    ],
    maintenanceTips: [
      'Gunakan pelindung busa (pop filter) untuk meredam tiupan angin nafas saat berbicara dekat.',
      'Jangan memukul atau meniup kencang kepala mikrofon karena bisa merusak membran diafragma tipis.'
    ],
    funFact: 'Mikrofon studio kondensor sangat sensitif hingga mampu menangkap detak jam dinding di sudut ruangan!',
    svgType: 'microphone',
    interactiveDemoType: 'mic_meter'
  },
  {
    id: 'scanner',
    name: 'Scanner (Pemindai)',
    indonesianName: 'Mesin Pemindai Dokumen Fisik ke Digital',
    category: 'input',
    categoryLabel: 'Masukan',
    shortDef: 'Perangkat masukan optik untuk menduplikasi lembaran kertas fisik, ijazah, atau foto menjadi berkas gambar digital di komputer.',
    fullDef: 'Scanner adalah perangkat masukan dokumen yang menggunakan sumber cahaya lampu LED bergerak, cermin prisma, dan sensor optik Charge-Coupled Device (CCD) atau Contact Image Sensor (CIS) untuk membaca teks dan gambar di atas lembaran kertas, lalu mengubahnya menjadi berkas file format PDF atau JPG.',
    mainFunction: 'Mendigitalkan berkas fisik (surat tugas, sertifikat penghargaan, KTP, piagam perlombaan, buku cetak) agar dapat diedit, diarsipkan, atau dikirim via email.',
    everydayAnalogy: {
      title: 'Kamera Pengganda Dokumen Otomatis',
      description: 'Scanner menyalin kertas fisik menjadi file gambar digital yang tersimpan rapi di dalam drive komputer.'
    },
    industryImpact: {
      title: 'Digitalisasi Arsip & OCR Otomasi',
      description: 'Mendukung program "Paperless Office" dan pengenalan karakter tulisan otomatis (Optical Character Recognition).'
    },
    keySpecs: [
      { label: 'Resolusi Pindai', value: '600 DPI hingga 4800+ DPI' },
      { label: 'Kedalaman Warna', value: '24-bit / 48-bit Color Depth' },
      { label: 'Tipe Pemindai', value: 'Flatbed (kaca datar), ADF (tarikan otomatis lembaran)' }
    ],
    marketExamples: ['Canon CanoScan LiDE 300', 'Epson Perfection V39', 'HP ScanJet Pro'],
    howItWorks: [
      'Dokumen ditaruh di atas kaca pemindai menghadap ke bawah.',
      'Bilah lampu sorot dan sensor bergerak menyusuri kaca merekam baris demi baris titik piksel.',
      'Software scanner menyusun data titik-titik tersebut menjadi lembaran digital di komputer.'
    ],
    maintenanceTips: [
      'Jaga kebersihan kaca pemindai dari sidik jari minyak dan butiran pasir yang dapat menggores kaca.',
      'Gunakan kain pembersih kaca lembut yang sedikit dibasahi cairan pembersih netral.'
    ],
    funFact: 'Dengan teknologi OCR (Optical Character Recognition), komputer dapat membaca ketikan dari hasil scan dan mengubahnya menjadi teks Word yang bisa langsung diedit!',
    svgType: 'scanner',
    interactiveDemoType: 'scanner_scan'
  },

  // ==================== 4. PERANGKAT KELUARAN (OUTPUT) ====================
  {
    id: 'monitor',
    name: 'Monitor (Layar Tampilan)',
    indonesianName: 'Layar Tampilan Visual Komputer',
    category: 'output',
    categoryLabel: 'Keluaran',
    shortDef: 'Perangkat keluaran visual utama yang menampilkan antarmuka grafis sistem operasi, video, dan hasil olah kerja komputer.',
    fullDef: 'Monitor adalah perangkat output visual yang menyajikan informasi grafis hasil olahan GPU kepada mata manusia. Menggunakan jutaan sel sub-piksel kristal cair (LCD/LED) atau dioda organik pemancar cahaya (OLED) yang dapat memancarkan warna merah, hijau, dan biru dalam berbagai intensitas kecerahan.',
    mainFunction: 'Menampilkan desktop sistem operasi, teks ketikan dokumen, jendela aplikasi, video tayangan, dan permainan interaktif secara real-time.',
    everydayAnalogy: {
      title: 'Papan Tulis Interaktif Layar Penuh',
      description: 'Monitor adalah papan gambar yang memperbarui visualnya puluhan hingga ratusan kali setiap detik agar mata Anda bisa melihat apa yang sedang diproses komputer.'
    },
    industryImpact: {
      title: 'Kanvas Visual Interaktif',
      description: 'Mendukung pekerjaan desainer grafis dengan panel akurasi warna tinggi (100% sRGB / DCI-P3) dan gamer dengan refresh rate 144Hz–360Hz.'
    },
    keySpecs: [
      { label: 'Ukuran Diagonal', value: '21.5 inch, 24 inch, 27 inch, 32 inch' },
      { label: 'Resolusi Layar', value: 'Full HD (1920x1080), 2K QHD, 4K UHD' },
      { label: 'Panel Teknologi', value: 'IPS (warna akurat), VA (kontras tinggi), OLED' },
      { label: 'Refresh Rate', value: '60 Hz, 100 Hz, 144 Hz, 240 Hz+' }
    ],
    marketExamples: ['LG 24MP400 IPS', 'Samsung Odyssey G5', 'Dell UltraSharp U2724D'],
    howItWorks: [
      'Menerima aliran data sinyal piksel digital dari port HDMI atau DisplayPort kartu grafis.',
      'Sirkuit papan T-Con menerjemahkan sinyal koordinat dan mengontrol tegangan listrik tiap kristal cair piksel layar.',
      'Lampu latar LED memancarkan cahaya menembus filter warna hingga membentuk gambar utuh di mata.'
    ],
    maintenanceTips: [
      'Gunakan fitur Eye Saver / Blue Light Filter jika belajar di depan layar dalam waktu lama untuk melindungi kesehatan mata.',
      'Jangan menekan panel layar dengan jari atau ujung pena karena kristal cair panel bisa pecah dan bergaris.'
    ],
    funFact: 'Layar monitor Full HD standar memiliki 2.073.600 piksel mandiri, dan masing-masing memiliki 3 lampu mini merah, hijau, dan biru—total lebih dari 6,2 juta titik cahaya!',
    svgType: 'monitor',
    interactiveDemoType: 'monitor_hz',
    anatomyPoints: [
      { name: 'Panel Layar IPS/LED', desc: 'Permukaan depan berlapis anti-silau (matte) tempat jutaan piksel warna menyala.', position: { x: 50, y: 40 } },
      { name: 'Kaki Penopang (Stand)', desc: 'Penyangga kokoh dengan engsel sudut kemiringan ergonomis untuk pandangan mata siswa.', position: { x: 50, y: 88 } },
      { name: 'Bingkai Bezel Tipis', desc: 'Tepian bingkai pelindung sekeliling panel kaca.', position: { x: 12, y: 15 } }
    ]
  },
  {
    id: 'printer',
    name: 'Printer (Mesin Pencetak)',
    indonesianName: 'Pencetak Dokumen Fisik',
    category: 'output',
    categoryLabel: 'Keluaran',
    shortDef: 'Perangkat keluaran yang mencetak teks tulisan dan gambar digital dari komputer ke atas lembaran media fisik seperti kertas.',
    fullDef: 'Printer adalah peranti periferal output elektromekanis yang mengubah data dokumen digital (seperti makalah Word, laporan nilai, lembar ujian, dan foto) menjadi bentuk fisik berupa cetakan di atas lembaran kertas. Dua jenis paling populer di sekolah dan perkantoran adalah Printer Inkjet (tinta cair) dan Printer Laser (bubuk toner).',
    mainFunction: 'Membuat salinan cetak permanen (hardcopy) dari dokumen elektronik untuk keperluan arsip fisik, tugas portofolio siswa, atau tanda tangan basah resmi.',
    everydayAnalogy: {
      title: 'Juru Tulis Cetak Cepat Berkecepatan Tinggi',
      description: 'Printer bertindak sebagai juru tulis yang menyalin kalimat-kalimat di monitor komputer Anda menjadi tulisan tinta nyata di atas lembaran kertas HVS.'
    },
    industryImpact: {
      title: 'Administrasi & Publikasi Fisik',
      description: 'Mencetak buku pelajaran, sertifikat penghargaan, laporan keuangan, dan kemasan produk industri.'
    },
    keySpecs: [
      { label: 'Teknologi Cetak', value: 'Inkjet / Ink Tank (tinta cair), Laserjet (toner bubuk)' },
      { label: 'Kecepatan Cetak', value: '10 hingga 35+ Halaman Per Menit (PPM)' },
      { label: 'Resolusi Cetak', value: '1200 x 1200 hingga 4800 x 1200 DPI' }
    ],
    marketExamples: ['Epson EcoTank L3210', 'Canon Pixma G2020', 'HP Neverstop Laser'],
    howItWorks: [
      'Printer Inkjet: Nozzle mikroskopis menyemprotkan ribuan tetesan tinta mikron ke kertas dengan presisi panas piezoelektrik.',
      'Printer Laser: Sinar laser menggambar muatan statis di drum silinder magnet, menarik bubuk toner hitam, lalu dipanaskan (fuser) hingga menempel permanen ke serat kertas.'
    ],
    maintenanceTips: [
      'Untuk printer Inkjet, cetaklah minimal 1 halaman teks berwarna setiap minggu agar saluran pipa dan head tinta tidak kering membatu.',
      'Gunakan kertas yang tidak lecek atau lembap agar kertas tidak tersangkut di dalam rol penarik (paper jam).'
    ],
    funFact: 'Printer Ink Tank modern satu botol tinta isi ulangnya bisa mencetak hingga lebih dari 4.500 sampai 7.500 lembar dokumen!',
    svgType: 'printer',
    interactiveDemoType: 'printer_print',
    anatomyPoints: [
      { name: 'Baki Pemuat Kertas (Paper Tray)', desc: 'Wadah tempat menumpuk kertas kosong sebelum ditarik ke dalam mesin.', position: { x: 50, y: 15 } },
      { name: 'Baki Penampung Hasil Cetak', desc: 'Baki depan tempat keluarnya lembaran kertas yang telah selesai dicetak.', position: { x: 50, y: 80 } },
      { name: 'Tangki Tinta Luar (Ink Tank)', desc: 'Tabung transparan untuk mengecek sisa kapasitas tinta hitam dan warna (CMYK).', position: { x: 85, y: 55 } }
    ]
  },
  {
    id: 'speaker',
    name: 'Speaker (Pengeras Suara)',
    indonesianName: 'Pengeras Suara Komputer',
    category: 'output',
    categoryLabel: 'Keluaran',
    shortDef: 'Perangkat keluaran audio yang mengubah sinyal listrik suara dari komputer menjadi gelombang suara yang terdengar di ruangan.',
    fullDef: 'Speaker komputer adalah transduser elektromagnetik keluaran suara. Menggunakan kumparan kawat magnet (voice coil) yang terpasang pada kerucut membran (cone). Sinyal listrik analog frekuensi audio menyebabkan membran bergetar maju-mundur, mendorong udara di sekitarnya dan menciptakan gelombang akustik yang ditangkap gendang telinga manusia.',
    mainFunction: 'Mengeluarkan suara notifikasi sistem, narasi pembelajaran video edukatif, musik latar presentasi, dan suara pembicara dalam sesi kelas virtual.',
    everydayAnalogy: {
      title: 'Pita Suara Bersuara Lantang',
      description: 'Jika mikrofon adalah telinga yang mendengar, maka speaker adalah mulut bersuara jernih yang memperdengarkan musik dan percakapan kepada seluruh pendengar.'
    },
    industryImpact: {
      title: 'Multimedia, Audio Desain & Hiburan',
      description: 'Menyajikan tata suara surround sound untuk produksi film, mixing musik audio, dan pengalaman gaming imersif.'
    },
    keySpecs: [
      { label: 'Konfigurasi Kanal', value: '2.0 Stereo (Kiri-Kanan), 2.1 (dengan Subwoofer Bass)' },
      { label: 'Daya Keluaran (RMS)', value: '5 Watt hingga 60+ Watt RMS' },
      { label: 'Konektivitas', value: 'Kabel Jack 3.5mm, USB Power, Bluetooth Audio' }
    ],
    marketExamples: ['Logitech Z120 USB', 'Edifier R1280T Studio', 'Creative Pebble V3'],
    howItWorks: [
      'Sound card komputer mengirim sinyal arus bolak-balik (AC) audio ke speaker.',
      'Arus melewati kumparan kawat di dalam medan magnet tetap, menciptakan gaya dorong-tarik mekanis.',
      'Membran kerucut bergetar menggetarkan molekul udara menjadi gelombang nada akustik.'
    ],
    maintenanceTips: [
      'Hindari menyetel volume speaker di batas maksimal 100% terus-menerus karena dapat membuat membran robek dan suara menjadi serak pecah (distorsi).',
      'Jauhkan dari benda bermagnet kuat lain agar medan magnet internal tidak terganggu.'
    ],
    funFact: 'Manusia normal hanya bisa mendengar frekuensi suara antara 20 Hertz (bass sangat rendah) hingga 20.000 Hertz (nada tinggi melengking)!',
    svgType: 'speaker',
    interactiveDemoType: 'sound_test'
  },
  {
    id: 'projector',
    name: 'Proyektor (LCD Projector)',
    indonesianName: 'Proyektor Sorot Layar Lebar',
    category: 'output',
    categoryLabel: 'Keluaran',
    shortDef: 'Perangkat keluaran optik proyeksi yang menembakkan pancaran cahaya gambar komputer ke layar kain besar atau dinding kelas.',
    fullDef: 'Proyektor adalah peranti keluaran visual jarak jauh yang sangat penting dalam dunia pendidikan. Menggunakan lampu sorot berkekuatan intensitas tinggi (lampu Halida, LED, atau Laser) yang dipadukan dengan prisma dan panel mikro (3LCD atau chip DLP) untuk memproyeksikan tampilan desktop komputer menjadi gambar berukuran raksasa hingga 100-300 inci di dinding depan kelas.',
    mainFunction: 'Menampilkan materi slide presentasi guru, video pembelajaran bersama, dan demonstrasi aplikasi secara serentak agar dapat dilihat jelas oleh seluruh siswa di ruang kelas.',
    everydayAnalogy: {
      title: 'Bioskop Mini Layar Lebar',
      description: 'Proyektor menyulap dinding putih ruang kelas biasa menjadi layar bioskop raksasa tempat seluruh siswa menyaksikan ilmu pengetahuan bersama-sama.'
    },
    industryImpact: {
      title: 'Pendidikan Kelas & Presentasi Bisnis',
      description: 'Menjadi standar ruang rapat korporasi dan kelas sekolah di seluruh dunia untuk presentasi bersama.'
    },
    keySpecs: [
      { label: 'Tingkat Kecerahan', value: '3.000 hingga 4.500 ANSI Lumens' },
      { label: 'Resolusi Bawaan', value: 'XGA (1024x768), WXGA, Full HD (1080p)' },
      { label: 'Sumber Cahaya', value: 'Lampu UHP, LED, Laser Phosphor' }
    ],
    marketExamples: ['Epson EB-E500 3LCD', 'BenQ MX550', 'ViewSonic PA503W'],
    howItWorks: [
      'Cahaya putih dari lampu sorot dipecah menjadi warna merah, hijau, dan biru melalui cermin dichroic.',
      'Sinyal video komputer mengontrol polarisasi panel kristal mikro yang meneruskan cahaya.',
      'Lensa cembung depan memfokuskan dan memperbesar berkas cahaya ke arah dinding layar.'
    ],
    maintenanceTips: [
      'JANGAN langsung mencabut kabel colokan listrik saat proyektor baru dimatikan; biarkan kipas internalnya berputar mendinginkan lampu hingga berhenti sendiri.',
      'Bersihkan filter debu spons di samping secara teratur setiap 1-2 bulan agar mesin tidak mengalami overheat.'
    ],
    funFact: 'Satuan kekuatan terang proyektor diukur dalam "ANSI Lumens". Untuk ruang kelas dengan lampu menyala terang, idealnya memakai proyektor minimal 3.300 Lumens ke atas!',
    svgType: 'projector',
    interactiveDemoType: 'general'
  },

  // ==================== 5. PERANGKAT DAYA & JARINGAN ====================
  {
    id: 'psu',
    name: 'Power Supply Unit (PSU)',
    indonesianName: 'Unit Catu Daya Listrik Komputer',
    category: 'peripheral',
    categoryLabel: 'Daya & Jaringan',
    shortDef: 'Komponen vital penyuplai daya yang mengubah arus listrik bolak-balik PLN (AC) menjadi arus searah tegangan rendah (DC) stabil.',
    fullDef: 'Power Supply Unit (PSU) adalah jantung energi sistem komputer. Listrik dari stopkontak dinding bertegangan tinggi 220V AC yang berbahaya diubah oleh sirkuit transformator dan kapasitor PSU menjadi voltase DC yang aman dan presisi: +12V (untuk CPU & GPU), +5V (untuk sirkuit logic & USB), dan +3.3V (untuk RAM dan chipset).',
    mainFunction: 'Memasok daya listrik bersih, stabil, dan aman ke seluruh komponen komputer, serta memproteksi hardware dari lonjakan tegangan atau korsleting listrik.',
    everydayAnalogy: {
      title: 'Jantung yang Memompa Darah Segar',
      description: 'Sama seperti jantung manusia yang memompa darah ke seluruh tubuh, PSU memompa aliran daya listrik yang dibutuhkan CPU, RAM, kipas, dan penyimpanan agar tetap hidup.'
    },
    industryImpact: {
      title: 'Fondasi Keselamatan Elektronik',
      description: 'Memiliki sirkuit proteksi penting seperti OVP (Over Voltage), OCP (Over Current), dan SCP (Short Circuit Protection) untuk melindungi komponen mahal dari kerusakan.'
    },
    keySpecs: [
      { label: 'Daya Maksimal', value: '450W, 550W, 650W, 750W, hingga 1000W' },
      { label: 'Sertifikasi Efisiensi', value: '80 Plus Bronze, Gold, Platinum' },
      { label: 'Tipe Kabel', value: 'Non-Modular, Semi-Modular, Full-Modular' },
      { label: 'Konektor Utama', value: '24-pin ATX, 8-pin CPU, PCIe 6+2 pin, SATA' }
    ],
    marketExamples: ['Corsair RM750e Gold', 'Cooler Master MWE 650 Bronze', 'Seasonic Focus GX-650'],
    howItWorks: [
      'Listrik 220V AC dari stopkontak masuk ke filter EMI untuk menyaring gangguan gelombang listrik.',
      'Rangkaian PFC (Power Factor Correction) menstabilkan efisiensi daya.',
      'Transformator switching menurunkan voltase dan disearahkan menjadi rail DC +12V, +5V, +3.3V.'
    ],
    maintenanceTips: [
      'Gunakan PSU bersertifikat resmi minimal "80 Plus Bronze"; jangan memakai PSU murahan abal-abal yang berisiko meledak atau merusak komponen mahal lainnya.',
      'Gunakan stopkontak yang memiliki jalur arde (grounding) tanah yang baik untuk mencegah sengatan listrik halus saat menyentuh casing komputer.'
    ],
    funFact: 'Sertifikasi "80 Plus" berarti PSU tersebut menjamin setidaknya 80% energi listrik dinding benar-benar disalurkan ke komputer, dan kurang dari 20% yang terbuang sia-sia sebagai panas!',
    svgType: 'psu',
    interactiveDemoType: 'psu_power',
    anatomyPoints: [
      { name: 'Kipas Pembuang Panas', desc: 'Kipas 120mm di bagian bawah yang membuang udara panas dari transformator ke luar sasis.', position: { x: 50, y: 50 } },
      { name: 'Colokan Input Listrik AC & Sakelar', desc: 'Soket 3-pin standar kabel power PLN beserta sakelar I/O pemutus daya total.', position: { x: 88, y: 40 } },
      { name: 'Bundel Kabel Konektor Daya', desc: 'Kabel warna-warni yang ditancapkan ke motherboard (24-pin), CPU (8-pin), dan kartu grafis.', position: { x: 12, y: 60 } }
    ]
  },
  {
    id: 'cooler',
    name: 'Heatsink & Fan Cooler',
    indonesianName: 'Pendingin Sirip Logam & Kipas Prosesor',
    category: 'peripheral',
    categoryLabel: 'Daya & Jaringan',
    shortDef: 'Sistem pendingin pelepas panas berlebih yang dihasilkan oleh prosesor agar suhu kerja tetap stabil dan tidak mati mendadak.',
    fullDef: 'CPU Cooler adalah perangkat disipasi panas. Ketika prosesor memproses data, miliaran transistor menghasilkan panas tinggi yang dapat merusak silikon jika tidak segera diserap. Cooler terdiri dari pipa tembaga penghantar (heatpipes), ratusan sirip aluminium tipis (heatsink), serta kipas yang meniupkan aliran udara dingin.',
    mainFunction: 'Menyerap panas dari permukaan prosesor melalui lapisan pasta termal dan membuangnya ke aliran udara luar agar CPU tidak mengalami penurunan performa (thermal throttling).',
    everydayAnalogy: {
      title: 'Kipas Penyejuk Saat Berolahraga Keras',
      description: 'Ketika Anda berlari maraton, tubuh Anda memanas dan membutuhkan angin sejuk agar tidak pingsan. Kipas pendingin ini adalah penyejuk utama bagi CPU yang bekerja keras.'
    },
    industryImpact: {
      title: 'Menjaga Umur Panjang Komponen Silikon',
      description: 'Menjaga temperatur CPU di bawah batas kritis 85°C sehingga frekuensi clock prosesor tetap dapat berjalan pada kecepatan Turbo Boost maksimal.'
    },
    keySpecs: [
      { label: 'Tipe Pendingin', value: 'Air Cooler (Udara) & AIO Liquid Cooler (Cairan Radiator)' },
      { label: 'Tingkat Kebisingan', value: '18 dB hingga 32 dB' },
      { label: 'Ukuran Kipas', value: '120mm / 140mm PWM Fan' }
    ],
    marketExamples: ['DeepCool AK400 Digital', 'Thermalright Peerless Assassin 120 SE', 'Noctua NH-D15'],
    howItWorks: [
      'Panas dari IHS CPU berpindah melalui pasta termal ke plat dasar tembaga cooler.',
      'Cairan di dalam heatpipe menguap membawa panas ke sirip-sirip aluminium di atas.',
      'Kipas berputar meniupkan udara segar menembus sirip pendingin, membuang panas ke belakang casing.'
    ],
    maintenanceTips: [
      'Gunakan kuas atau kaleng semprotan udara bertekanan untuk membersihkan debu kapas yang menyumbat di antara sela-sela sirip heatsink.',
      'Jangan menjalankan komputer tanpa cooler terpasang, karena CPU modern akan langsung mencapai 100°C dalam hitungan detik!'
    ],
    funFact: 'Beberapa komputer canggih bahkan menggunakan sistem pendingin nitrogen cair (Liquid Nitrogen) bersuhu -196°C untuk memecahkan rekor kecepatan komputasi dunia!',
    svgType: 'cooler',
    interactiveDemoType: 'cooler_temp'
  },
  {
    id: 'case',
    name: 'Casing Komputer (PC Case)',
    indonesianName: 'Kotak Casis Pelindung Komputer',
    category: 'peripheral',
    categoryLabel: 'Daya & Jaringan',
    shortDef: 'Kotak sasis berbahan logam dan kaca yang melindungi seluruh komponen bagian dalam dari debu, benturan fisik, serta mengatur aliran udara.',
    fullDef: 'PC Case atau chassis adalah wadah penutup kokoh tempat semua perangkat keras dipasang secara rapi dan aman. Dilengkapi braket pemasangan motherboard, tempat baut media penyimpanan, lubang manajemen kabel (cable management), dan jalur kisi ventilasi masuk-keluar udara (airflow).',
    mainFunction: 'Melindungi sirkuit elektronik sensitif dari benturan mekanis, tumpahan cairan, sengatan listrik eksternal, hewan serangga kecil, dan memfasilitasi aliran udara dingin.',
    everydayAnalogy: {
      title: 'Rumah Tinggal Kokoh yang Aman',
      description: 'Casing adalah rumah pelindung yang kokoh dengan pintu ventilasi yang baik bagi seluruh komponen perangkat keras komputer Anda.'
    },
    industryImpact: {
      title: 'Desain Termal & Estetika Perangkat',
      description: 'Menyediakan jalur sirkulasi udara dingin (intake) dan pembuangan panas (exhaust) serta memamerkan komponen estetika RGB.'
    },
    keySpecs: [
      { label: 'Ukuran Dimensi', value: 'Mid-Tower, Full-Tower, Mini-Tower, ITX' },
      { label: 'Material', value: 'Baja SPCC, Aluminium, Kaca Tempered Glass' },
      { label: 'Dukungan Panel Depan', value: 'Tombol Power/Reset, Port Audio Jack, Port USB 3.2/Type-C' }
    ],
    marketExamples: ['Montech Air 903 Base', 'NZXT H5 Flow', 'Corsair 4000D Airflow'],
    howItWorks: [
      'Kipas intake di bagian depan menyedot udara segar ruangan masuk ke dalam casing.',
      'Udara melewati pendingin CPU dan GPU menyerap panas komponen.',
      'Kipas exhaust di bagian belakang dan atas membuang udara panas keluar dari casing.'
    ],
    maintenanceTips: [
      'Letakkan casing di atas meja atau alas kayu; hindari menaruhnya langsung di atas karpet lantai agar sirkulasi debu tidak tersedot masuk ke PSU di bagian bawah.',
      'Bersihkan filter debu magnetik di bagian depan dan bawah secara berkala.'
    ],
    funFact: 'Tren casing modern kini banyak memakai kaca tempered transparan di sisi samping agar pengguna bisa mengagumi komponen internal dan pencahayaan estetik yang bekerja di dalamnya!',
    svgType: 'case',
    interactiveDemoType: 'general'
  },
  {
    id: 'network',
    name: 'Network Card (NIC / Wi-Fi)',
    indonesianName: 'Kartu Antarmuka Jaringan (LAN & Nirkabel)',
    category: 'peripheral',
    categoryLabel: 'Daya & Jaringan',
    shortDef: 'Perangkat keras komunikasi data yang menghubungkan komputer ke jaringan lokal (LAN) dan jaringan internet global.',
    fullDef: 'Network Interface Card (NIC) adalah komponen komunikasi jaringan yang memungkinkan komputer mengirim dan menerima paket data berkecepatan tinggi melalui kabel Ethernet berkepala RJ45 atau gelombang radio nirkabel Wi-Fi. Setiap kartu jaringan memiliki alamat unik permanen di dunia yang disebut MAC Address.',
    mainFunction: 'Mengubah format data internal komputer menjadi sinyal gelombang elektromagnetik untuk berlayar di jaringan internet, mengakses situs web, dan mengunduh berkas tugas.',
    everydayAnalogy: {
      title: 'Kantor Pos Menuju Dunia Luar',
      description: 'Kartu jaringan adalah kantor pos pribadi komputer Anda yang mengantarkan amplop surat elektronik (paket data) menembus batas kota dan negara melalui kabel optik dan gelombang nirkabel.'
    },
    industryImpact: {
      title: 'Tulang Punggung Konektivitas Internet Global',
      description: 'Memungkinkan streaming video 4K tanpa buffering, transfer file gigabit lokal antar workstation kantor, dan gaming online latency rendah.'
    },
    keySpecs: [
      { label: 'Kecepatan Kabel LAN', value: 'Gigabit Ethernet (1 Gbps / 2.5 Gbps)' },
      { label: 'Standar Nirkabel', value: 'Wi-Fi 6 / 6E (802.11ax), Wi-Fi 7' },
      { label: 'Frekuensi Radio', value: '2.4 GHz (jangkauan luas) & 5 GHz / 6 GHz (kecepatan tinggi)' }
    ],
    marketExamples: ['Intel Wi-Fi 6 AX210', 'TP-Link Archer TX3000E', 'Realtek 2.5GbE Onboard'],
    howItWorks: [
      'Menerima data paket IP dari sistem operasi.',
      'Membungkus paket menjadi bingkai frame data link dengan alamat MAC tujuan.',
      'Mengirimkan sinyal biner melalui kabel tembaga UTP (tegangan listrik) atau antena Wi-Fi (gelombang radio).'
    ],
    maintenanceTips: [
      'Pastikan kait pengunci plastik pada ujung kabel LAN (konektor RJ-45) tidak patah agar koneksi internet tidak sering terputus tiba-tiba.',
      'Posisikan antena Wi-Fi mengarah tegak lurus ke atas untuk penerimaan gelombang sinyal yang merata.'
    ],
    funFact: 'Alamat "MAC Address" yang ada di kartu jaringan komputer Anda adalah nomor unik 12 digit heksadesimal yang dijamin TIDAK ADA YANG KEMBAR di seluruh dunia!',
    svgType: 'network',
    interactiveDemoType: 'network_ping'
  }
];

export const CATEGORY_INFO: Record<string, { label: string; desc: string; icon: string; color: string }> = {
  all: {
    label: 'Semua Perangkat',
    desc: 'Jelajahi seluruh komponen hardware sistem komputer secara menyeluruh.',
    icon: 'Layers',
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200'
  },
  input: {
    label: 'Perangkat Masukan (Input)',
    desc: 'Alat perantara manusia untuk memasukkan data, teks, suara, dan instruksi perintah ke dalam komputer.',
    icon: 'Keyboard',
    color: 'text-sky-600 bg-sky-50 border-sky-200'
  },
  processing: {
    label: 'Perangkat Pemrosesan (Processing)',
    desc: 'Komponen komputasi inti yang mengolah data biner, menjalankan instruksi program, dan mengontrol sistem.',
    icon: 'Cpu',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200'
  },
  storage: {
    label: 'Perangkat Penyimpanan (Storage)',
    desc: 'Media penyimpanan permanen (non-volatile) untuk menyimpan sistem operasi, aplikasi, dan berkas file tugas.',
    icon: 'HardDrive',
    color: 'text-amber-600 bg-amber-50 border-amber-200'
  },
  output: {
    label: 'Perangkat Keluaran (Output)',
    desc: 'Peranti yang menyajikan hasil olahan data komputer dalam bentuk visual layar, cetakan kertas, atau suara.',
    icon: 'Monitor',
    color: 'text-violet-600 bg-violet-50 border-violet-200'
  },
  peripheral: {
    label: 'Daya & Jaringan (Support)',
    desc: 'Komponen pendukung esensial seperti pasokan listrik, sistem pendinginan, wadah sasis, dan koneksi internet.',
    icon: 'Zap',
    color: 'text-rose-600 bg-rose-50 border-rose-200'
  }
};

export const SORTING_GAME_ITEMS: SortingItem[] = [
  { id: 's1', name: 'Keyboard', category: 'input', hint: 'Mengetik huruf dan angka', iconName: 'Keyboard' },
  { id: 's2', name: 'Processor (CPU)', category: 'processing', hint: 'Menghitung dan mengeksekusi instruksi', iconName: 'Cpu' },
  { id: 's3', name: 'Monitor', category: 'output', hint: 'Menampilkan antarmuka gambar di layar', iconName: 'Monitor' },
  { id: 's4', name: 'SSD M.2', category: 'storage', hint: 'Menyimpan sistem operasi dan file secara permanen', iconName: 'HardDrive' },
  { id: 's5', name: 'Mouse', category: 'input', hint: 'Menggerakkan kursor dan mengklik', iconName: 'Mouse' },
  { id: 's6', name: 'RAM DDR4/DDR5', category: 'processing', hint: 'Meja kerja sementara penampung aplikasi aktif', iconName: 'MemoryStick' },
  { id: 's7', name: 'Printer', category: 'output', hint: 'Mencetak dokumen ke lembaran kertas fisik', iconName: 'Printer' },
  { id: 's8', name: 'Flashdisk USB', category: 'storage', hint: 'Menyimpan data portabel untuk dibawa-bawa', iconName: 'Usb' },
  { id: 's9', name: 'Mikrofon', category: 'input', hint: 'Menangkap getaran suara manusia', iconName: 'Mic' },
  { id: 's10', name: 'Kartu Grafis (GPU)', category: 'processing', hint: 'Mengolah grafis 3D dan visual gambar', iconName: 'Tv' },
  { id: 's11', name: 'Speaker', category: 'output', hint: 'Mengeluarkan suara audio ke ruangan', iconName: 'Volume2' },
  { id: 's12', name: 'Hard Disk (HDD)', category: 'storage', hint: 'Piringan magnetik penyimpan arsip data besar', iconName: 'Database' },
  { id: 's13', name: 'Webcam', category: 'input', hint: 'Menangkap video tatap muka langsung', iconName: 'Camera' },
  { id: 's14', name: 'LCD Proyektor', category: 'output', hint: 'Menyorotkan presentasi ke dinding kelas', iconName: 'Projector' },
  { id: 's15', name: 'Scanner', category: 'input', hint: 'Mendigitalkan lembar kertas fisik', iconName: 'FileText' },
  { id: 's16', name: 'Motherboard', category: 'processing', hint: 'Papan sirkuit penghubung semua komponen', iconName: 'CircuitBoard' },
];

export const BADGES_LIST: Badge[] = [
  {
    id: 'first_step',
    title: 'Penjelajah Hardware',
    description: 'Telah membaca dan mengeksplorasi komponen hardware komputer pertamamu.',
    icon: 'Compass',
    condition: 'Buka 1 kartu detail hardware'
  },
  {
    id: 'hardware_master',
    title: 'Pakar Anatomi Komputer',
    description: 'Telah mempelajari seluruh perangkat komputer (Input, Proses, Output, Storage, Daya).',
    icon: 'Award',
    condition: 'Buka minimal 10 detail hardware'
  },
  {
    id: 'pc_builder',
    title: 'Teknisi Perakit PC Handal',
    description: 'Berhasil merakit komponen PC ke motherboard dan menyalakannya dengan sukses!',
    icon: 'Wrench',
    condition: 'Selesaikan Simulasi Rakit PC'
  },
  {
    id: 'quiz_master',
    title: 'Juara Asesmen TIK',
    description: 'Mencapai skor tinggi pada Ujian Evaluasi Pemahaman Hardware Komputer.',
    icon: 'Trophy',
    condition: 'Raih skor kuis >= 80'
  },
  {
    id: 'sorting_champ',
    title: 'Pakar Klasifikasi Cepat',
    description: 'Berhasil mengelompokkan perangkat komputer ke wadah yang tepat tanpa salah.',
    icon: 'Zap',
    condition: 'Selesaikan Tantangan Klasifikasi'
  }
];
