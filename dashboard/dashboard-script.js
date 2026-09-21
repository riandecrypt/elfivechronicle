/* =====================================================
   XI.5 IPS — Classroom Digital
   Vanilla JS — data, rendering, interactivity
===================================================== */

/* ---------- DUMMY DATA ---------- */

const DAYS = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat",];
const SCHOOL_DAYS = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat",];

const AVATAR_COLORS = ["#2F3E9E", "#3F8CD9", "#2F9E6E", "#F2A93B", "#C2577A", "#7A5CF2", "#DB7A3E"];
function colorFor(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}
function initials(name) {
  return name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
}

// Foto siswa sepenuhnya manual: isi field "photo" pada masing-masing siswa
// di array `students` di bawah dengan path/URL foto. Kosongkan kalau belum ada,
// nanti otomatis tampil inisial nama.
function photoFor(student) {
  return student.photo || "";
}
function photoImgTag(student, extraAttrs) {
  const src = photoFor(student);
  if (!src) return "";
  return `<img src="${src}" alt="Foto ${student.name}" ${extraAttrs || ""} onerror="this.style.display='none'">`;
}

// Tambahkan path/URL foto masing-masing siswa di field "photo" di bawah ini.
// Kosongkan ("") kalau belum punya foto — otomatis akan tampil inisial nama.
// Contoh: photo: "assets/images/siswa/ahmad-rizky.jpg" atau URL foto online.
const students = [
  { absen: 1, name: "Afifah Arthanamidya", nis: "0108905785", gender: "P", role: "Member", photo: "" },
  { absen: 2, name: "Agustin Sasi Rahmadani", nis: "0097731447", gender: "P", role: "Member"  , photo: "" },
  { absen: 3, name: "Algis Danadyaksa", nis: "0101655333", gender: "L", role: "Ketua Kelas" , photo: "" }, 
  { absen: 4, name: "Ardianyah Effendi", nis: "0091325951", gender: "L", role: "Member" , photo: "" },
  { absen: 5, name: "Asyla Nayranee Ardhi", nis: "0103419235", gender: "P", role: "Member" , photo: "" },
  { absen: 6, name: "Bagus Rizky Ramadhani", nis: "0104553024", gender: "L", role: "Member", photo: "" },
  { absen: 7, name: "Briliyan Azzora Saffir", nis: "0098113636", gender: "P", role: "Sekretaris 2" , photo: "" },
  { absen: 8, name: "Christian Henoch Dhiyan Prayogo", nis: "0105663731", gender: "L", role: "Member", photo: "" },
  { absen: 9, name: "Diego Yeremi Pasaribu", nis: "0109018790", gender: "L", role: "Member" , photo: "" },
  { absen: 10, name: "Fariz Atha Pratama", nis: "0099189975", gender: "L", role: "Member" , photo: "" },
  { absen: 11, name: "Farrel Jo Priatgoro", nis: "0099227486", gender: "L", role: "Member"  , photo: "" },
  { absen: 12, name: "Febrian Debi Al Rasyid", nis: "0102961813", gender: "L", role: "Member"  , photo: "" },
  { absen: 13, name: "Jaka Satriya", nis: "0104354085", gender: "L", role: "Member" , photo: "" },
  { absen: 14, name: "Junior Satya Wardhana", nis: "0107966954", gender: "L", role: "Member"  , photo: "" },
  { absen: 15, name: "Kenzo Fatih Adzhani", nis: "0099664024", gender: "L", role: "Member" , photo: "" },
  { absen: 16, name: "Lionel Andreas Messi Al Farizi", nis: "0107531248", gender: "L", role: "Member", photo: "" },
  { absen: 17, name: "Livia Melvin Andhika", nis: "0094583156", gender: "P", role: "Member" , photo: "" },
  { absen: 18, name: "Moh Farkhan Effendi", nis: "0092153579", gender: "L", role: "Member" , photo: "" },
  { absen: 19, name: "Muhammad Farrel Maulana Azka", nis: "0093413795", gender: "L", role: "Wakil Ketua" , photo: "" },
  { absen: 20, name: "Muhammad Favian Alrie Putra", nis: "0095176805", gender: "L", role: "Member" , photo: "" },
  { absen: 21, name: "Muhammad Masykur Abas Maulana", nis: "0093273242", gender: "L", role: "Member" , photo: "" },
  { absen: 22, name: "Muhammad Tazakka Nurriz", nis: "0109307824", gender: "L", role: "Member"  , photo: "" },
  { absen: 23, name: "Naura Salsabilla", nis: "0096801550", gender: "P", role: "Member" , photo: "" },
  { absen: 24, name: "Nur Rima Patria Rahmawani", nis: "0096742539", gender: "P", role: "Member" , photo: "" },
  { absen: 25, name: "Rafa Fawwaz Maulana", nis: "0109896127", gender: "L", role: "Member" , photo: "" },
  { absen: 26, name: "Rajwa Azaria", nis: "0102322221", gender: "P", role: "Member" , photo: "" },
  { absen: 27, name: "Reyna Majidda", nis: "0108823868", gender: "P", role: "Bendahara 2"  , photo: "" },
  { absen: 28, name: "Ridho Akbar Dwikana", nis: "0104341655", gender: "L", role: "Member" , photo: "" },
  { absen: 29, name: "Sawwa Safaroh", nis: "01004263676", gender: "L", role: "Sekretaris 1" , photo: "" },
  { absen: 30, name: "Viola Inka Aurellya", nis: "0097674597", gender: "P", role: "" , photo: "" },
  { absen: 31, name: "Violetta Novia Rizky", nis: "0105917776", gender: "P", role: ""  , photo: "" },
  { absen: 32, name: "Yemima Quiinsya Nikita Budiman", nis: "0109271234", gender: "L", role: "" , photo: "" },
  { absen: 33, name: "Zulfa Al Kharima", nis: "0101234567", gender: "L", role: "Bendahara 1"  , photo: "" }
];

const teachers = [
  { name: "Muhammad Fakhrurrozi, S.Pd", mapel: "Wali Kelas / Agama", code: "OZ", jadwal: "Senin"},
  { name: "Desy S.Pd", mapel: "B. Inggris Lanjut", code: "DA", jadwal: "Senin, Rabu" },
  { name: "Mukhamad Nur Seto, S.Pd", mapel: "Penjas", code: "SO", jadwal: "Senin" },
  { name: "Fifit Komalasari S.Pd", mapel: "PKN", code: "FK", jadwal: "Senin" },
  { name: "Rizki Martadi K S.Pd", mapel: "Seni Musik", code: "RM", jadwal: "Senin" },
  { name: "Endang Nurliastuti.Pd", mapel: "MTK Wajib", code: "ED", jadwal: "Selasa, Rabu" },
  { name: "Nuniek Aprilyasih S.Pd", mapel: "Informatika", code: "NN", jadwal: "Selasa, Rabu" },
  { name: "Endah Mulatining S. S.Pd", mapel: "Ekonomi", code: "EM", jadwal: "Selasa, Rabu" },
  { name: "Yunita Puspitasari S.Pd", mapel: "Bahasa Indonesia", code: "YP", jadwal: "Selasa, Jumat" },
  { name: "Salsabila FirdausS.Pd", mapel: "Sejarah", code: "SB", jadwal: "Rabu" },
  { name: "Ni'matul Izzah S.Pd", mapel: "B. Inggris Wajib", code: "NM", jadwal: "Kamis" },
  { name: "M. Carolina Sekti W. S.Pd", mapel: "MTK Lanjut", code: "LC", jadwal: "Kamis, Jumat" },
  { name: "Yuni Mentari S.Pd", mapel: "BK", code: "YM", jadwal: "Kamis" },
  { name: "Dian Intan Muthlika S.Pd", mapel: "B. Jawa", code: "DY", jadwal: "Kamis" },
  { name: "Nur Hijriyah Budi Asih S.Pd", mapel: "Geografi", code: "HJ", jadwal: "Kamis, Jumat" }
];

const schedule = {
  Senin: [
    { time: "07:00 - 08:30", mapel: "Agama", guru: "Muhammad Fakhrurrozi S.Pdi", ruang: "Ruang XI.5" },
    { time: "08:30 - 10:00", mapel: "B. Inggris Lanjut", guru: "Desy S.Pd", ruang: "Ruang XI.5" },
    { time: "10:15 - 11:45", mapel: "Penjas", guru: "Mukhamad Nur Seto, S.Pd", ruang: "Ruang XI.5" },
    { time: "12:30 - 14:00", mapel: "PKN", guru: "Fifit Komalasari S.Pd", ruang: "Ruang XI.5" },
    { time: "14:00 - 15:30", mapel: "Seni Musik", guru: "Rizki Martadi K S.Pd", ruang: "Ruang XI.5" }
  ],
  Selasa: [
    { time: "07:00 - 08:30", mapel: "MTK Wajib", guru: "Endang Nurliastuti.Pd", ruang: "Ruang XI.5" },
    { time: "08:30 - 10:45", mapel: "Informatika", guru: "Nuniek Aprilyasih S.Pd", ruang: "Ruang XI.5/LAB 2" },
    { time: "10:45 - 13:00", mapel: "Ekonomi", guru: "Endah Mulatining S. S.Pd", ruang: "Ruang XI.5" },
    { time: "13:00 - 15:30", mapel: "Bahasa Indonesia", guru: "Yunita Puspitasari S.Pd", ruang: "Ruang XI.5" },
  ],
  Rabu: [
    { time: "07:00 - 08:30", mapel: "Ekonomi", guru: "Endah Mulatining S. S.Pd", ruang: "Ruang XI.5" },
    { time: "08:30 - 10:00", mapel: "Sejarah", guru: "Salsabila FirdausS.Pd", ruang: "Ruang XI.5" },
    { time: "10:00 - 11:45", mapel: "Informatika", guru: "Nuniek Aprilyasih S.Pd", ruang: "Ruang XI.5/LAB 2" },
    { time: "12:30 - 14:00", mapel: "B. Inggris Lanjut", guru: "Desy S.Pd", ruang: "Ruang XI.5" },
    { time: "14:00 - 15:30", mapel: "MTK Wajib", guru: "Endang Nurliastuti.Pd", ruang: "Ruang XI.5" },
  ],
  Kamis: [
    { time: "07:00 - 09:15", mapel: "B. Inggris Wajib", guru: "Ni'matul Izzah S.Pd", ruang: "Ruang XI.5" },
    { time: "09:15 - 11:45", mapel: "MTK Lanjut", guru: "M. Carolina Sekti W. S.Pd", ruang: "Ruang XI.5" },
    { time: "12:30 - 13:15", mapel: "BK", guru: "Mentari S.Pd", ruang: "Ruang XI.5" },
    { time: "13:15 - 14:00", mapel: "B. Jawa", guru: "Dian Intan Muthlika S.Pd", ruang: "Ruang XI.5" },
    { time: "14:00 - 15:30", mapel: "Geografi", guru: "Nur Hijriyah Budi Asih S.Pd", ruang: "Ruang XI.5" },
  ],
  Jumat: [
    { time: "07:00 - 08:30", mapel: "Geografi", guru: "Nur Hijriyah Budi Asih S.Pd", ruang: "Ruang XI.5" },
    { time: "08:30 - 10:00", mapel: "B. Indonesia", guru: "Fitria Ningsih", ruang: "Ruang XI.5" },
    { time: "10:15 - 11:00", mapel: "MTK Lanjut", guru: "M. Carolina Sekti W. S.Pd", ruang: "Ruang XI.5" }
  ]
};

const piket = {
  Senin: ["Bagus Rizky", "Christian Henoch", "Muhammad Favian", "Reyna Majidda", "Ridho Akbar Dwikana", "Viola Inka Aurellya", "Yemima Quiinsya"],
  Selasa: ["Afifah Arthanamidya", "Ardianyah Effendi", "Febrian Debi Al Rasyid", "Junior Satya Wardhana", "Muhammad Farrel Maulana", "Violetta Novia Rizky", "Zulfa Al Kharima"],
  Rabu: ["Algis Danadyaksa", "Diego Yeremi Pasaribu", "Jaka Satriya", "Kenzo Fatih", "Nur Rima Patria", "Sawwa Safaroh"],
  Kamis: ["Agustin Sasi Rahmadani", "Fariz Atha Pratama", "Farrel Jo Priatgoro", "Lionel Andreas Messi", "Livia Melvin Andhika", "Naura Salsabilla"],
  Jumat: ["Asyla Nayranee Ardhi", "Briliyan Azzora Saffir", "Moh Farkhan Effendi", "M. Masykur Abas Maulana", "Rajwa Azaria", "Rafa Fawwaz Maulana"],
};

const tasks = [
  { title: "Poster Digital Kampanye Sosial", mapel: "Prakarya dan Kewirausahaan", guru: "Nurul Hidayah", deadline: "2026-09-22", status: "belum" },
  { title: "Analisis Peta Persebaran Penduduk", mapel: "Geografi", guru: "Dian Kusuma", deadline: "2026-09-25", status: "proses" },
  { title: "Makalah Perubahan Sosial", mapel: "Sosiologi", guru: "Slamet Riyadi", deadline: "2026-09-20", status: "proses" },
  { title: "Esai Bahasa Indonesia", mapel: "Bahasa Indonesia", guru: "Ratna Wulandari", deadline: "2026-09-19", status: "belum" },
  { title: "Latihan Soal Trigonometri", mapel: "Matematika", guru: "Sri Wahyuni", deadline: "2026-09-18", status: "selesai" },
  { title: "Analisis Kondisi Ekonomi Daerah", mapel: "Ekonomi", guru: "Muhammad Fakhrurrozi", deadline: "2026-09-28", status: "belum" },
  { title: "Speaking Practice: Self Introduction", mapel: "Bahasa Inggris", guru: "Lestari Handayani", deadline: "2026-09-21", status: "selesai" },
  { title: "Makalah Wawasan Kebangsaan", mapel: "PPKn", guru: "Fitria Ningsih", deadline: "2026-09-30", status: "belum" },
  { title: "Rangkuman Sejarah Kemerdekaan", mapel: "Sejarah", guru: "Agus Salim", deadline: "2026-09-24", status: "belum" }
];

const announcements = [
  { title: "Ulangan Harian Matematika", body: "Besok akan diadakan ulangan harian Matematika bab Trigonometri. Silakan pelajari kembali materi dari pertemuan sebelumnya.", date: "2026-09-19", time: "14:20", cat: "Akademik" },
  { title: "Bawa Peta Buta Besok", body: "Untuk pertemuan Geografi besok, seluruh siswa diwajibkan membawa peta buta dan alat mewarnai masing-masing.", date: "2026-09-18", time: "16:00", cat: "Perlengkapan" },
  { title: "Kerja Bakti Hari Jumat", body: "Kerja bakti membersihkan lingkungan kelas akan dilaksanakan hari Jumat setelah pulang sekolah. Mohon partisipasi seluruh anggota kelas.", date: "2026-09-17", time: "09:10", cat: "Kegiatan" },
  { title: "Pengumpulan Iuran Kas", body: "Iuran kas kelas bulan ini mohon dikumpulkan paling lambat akhir minggu kepada bendahara kelas.", date: "2026-09-15", time: "08:00", cat: "Kas" }
];

const events = [
  { title: "Ulangan Tengah Semester", date: "2026-10-05", desc: "Pelaksanaan UTS untuk seluruh mata pelajaran semester ganjil.", tag: "Ulangan" },
  { title: "Study Tour ke Museum dan Instansi Pemerintah", date: "2026-10-18", desc: "Kunjungan edukatif untuk memperdalam wawasan sejarah dan sosial siswa.", tag: "Study Tour" },
  { title: "Class Meeting Semester Ganjil", date: "2026-12-15", desc: "Rangkaian lomba antar kelas menjelang libur semester.", tag: "Class Meeting" },
  { title: "Kerja Bakti Kelas", date: "2026-09-25", desc: "Membersihkan dan menata ulang ruang kelas.", tag: "Kerja Bakti" },
  { title: "Ulang Tahun Siti Aulia", date: "2026-09-14", desc: "Perayaan kecil ulang tahun anggota kelas.", tag: "Ulang Tahun" }
];

const kasTransactions = [
  { date: "2026-09-01", desc: "Iuran kas kelas", jenis: "masuk", jumlah: 500000 },
  { date: "2026-09-05", desc: "Iuran kas kelas", jenis: "masuk", jumlah: 480000 },
  { date: "2026-09-08", desc: "Membeli alat kebersihan", jenis: "keluar", jumlah: 75000 },
  { date: "2026-09-12", desc: "Sumbangan kegiatan sekolah", jenis: "keluar", jumlah: 100000 },
  { date: "2026-09-15", desc: "Iuran kas kelas", jenis: "masuk", jumlah: 460000 },
  { date: "2026-09-16", desc: "Membeli spidol dan penghapus", jenis: "keluar", jumlah: 45000 },
  { date: "2026-09-18", desc: "Iuran kas kelas", jenis: "masuk", jumlah: 500000 }
];

const absensiData = { hadir: 30, izin: 2, sakit: 1, alpa: 0 };

// Foto galeri sepenuhnya manual: isi field "src" pada masing-masing item di bawah
// dengan path/URL foto asli kelas kamu (contoh: "assets/images/galeri/kerja-bakti.jpg").
// Selama "src" masih kosong, otomatis dipakai foto contoh dari internet sebagai placeholder.
const galeri = [
  { caption: "Kerja Bakti Kelas", src: "", query: "students-cleaning-classroom" },
  { caption: "Diskusi Kelompok Sosiologi", src: "", query: "students-group-discussion" },
  { caption: "Class Meeting", src: "", query: "students-sports-day" },
  { caption: "Diskusi Kelompok", src: "", query: "students-group-study" },
  { caption: "Presentasi Tugas", src: "", query: "student-presentation" },
  { caption: "Perayaan Ulang Tahun Kelas", src: "", query: "classroom-celebration" },
  { caption: "Study Tour", src: "", query: "students-field-trip" },
  { caption: "Foto Bersama Wali Kelas", src: "", query: "classroom-group-photo" }
];

const strukturLain = [
  
];

/* ---------- STATE ---------- */
const state = {
  siswaView: "card",
  siswaGenderFilter: "all",
  siswaSort: "absen",
  siswaQuery: "",
  tugasStatusFilter: "all",
  tugasSort: "deadline",
  tugasQuery: "",
  jadwalDay: SCHOOL_DAYS.includes(todayName()) ? todayName() : "Senin"
};

function todayName() { return DAYS[new Date().getDay()]; }
function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function formatRupiah(n) { return "Rp" + n.toLocaleString("id-ID"); }
function formatDateID(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

/* =====================================================
   THEME
===================================================== */
function initTheme() {
  const saved = localStorage.getItem("xirpl-theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  document.getElementById("themeToggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("xirpl-theme", next);
    if (kasChartInstance) renderKasChart(); // refresh chart colors
  });
}

/* =====================================================
   SIDEBAR / NAV
===================================================== */
function initSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  document.getElementById("hamburger").addEventListener("click", () => {
    sidebar.classList.add("open");
    overlay.classList.add("show");
  });
  const closeSidebar = () => { sidebar.classList.remove("open"); overlay.classList.remove("show"); };
  document.getElementById("sidebarClose").addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  document.querySelectorAll(".nav-link, .link-more").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      goToPage(link.dataset.page);
      closeSidebar();
    });
  });
}

function goToPage(page) {
  document.querySelectorAll(".page-section").forEach(sec => sec.classList.add("hidden"));
  const target = document.getElementById(`page-${page}`);
  if (target) target.classList.remove("hidden");
  document.querySelectorAll(".nav-link").forEach(l => l.classList.toggle("active", l.dataset.page === page));
  document.getElementById("page-" + page)?.scrollIntoView({ behavior: "instant", block: "start" });
  window.scrollTo({ top: 0, behavior: "instant" });
}

/* =====================================================
   CLOCK / GREETING
===================================================== */
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString("id-ID", { hour12: false });
  const date = now.toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  document.getElementById("liveClock").textContent = time;
  document.getElementById("liveDate").textContent = date;

  const hour = now.getHours();
  let greet = "Selamat Malam";
  if (hour >= 4 && hour < 11) greet = "Selamat Pagi";
  else if (hour >= 11 && hour < 15) greet = "Selamat Siang";
  else if (hour >= 15 && hour < 18) greet = "Selamat Sore";
  document.getElementById("greeting").textContent = `${greet}, kelas XI.5 IPS!`;
}

/* =====================================================
   TOAST
===================================================== */
function showToast(msg, type = "default") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  const icon = type === "success" ? "fa-circle-check" : type === "error" ? "fa-circle-exclamation" : "fa-circle-info";
  toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(20px)";
    toast.style.transition = "all .25s ease";
    setTimeout(() => toast.remove(), 260);
  }, 3200);
}

/* =====================================================
   DASHBOARD
===================================================== */
function renderDashboard() {
  document.getElementById("statSiswa").textContent = students.length;
  document.getElementById("statGuru").textContent = teachers.length;
  const mapelSet = new Set(teachers.map(t => t.mapel));
  document.getElementById("statMapel").textContent = mapelSet.size;

  const tName = todayName();
  const todaySchedule = schedule[tName] || [];
  document.getElementById("statJadwalHariIni").textContent = todaySchedule.length;
  document.getElementById("nextClassDay").textContent = tName;

  renderNextClass(todaySchedule);

  document.getElementById("dashPiketDay").textContent = tName;
  const piketList = document.getElementById("dashPiketList");
  piketList.innerHTML = "";
  const todayPiket = piket[tName];
  if (todayPiket) {
    todayPiket.forEach(name => {
      const li = document.createElement("li");
      li.innerHTML = `<i class="fa-solid fa-user"></i> ${name}`;
      piketList.appendChild(li);
    });
  } else {
    piketList.innerHTML = `<li class="empty-note" style="background:none;">Tidak ada piket hari ini.</li>`;
  }

  const dashAnnounce = document.getElementById("dashPengumuman");
  dashAnnounce.innerHTML = "";
  const recentAnnounce = [...announceStore].sort((a, b) => new Date(b.date + "T" + (b.time || "00:00")) - new Date(a.date + "T" + (a.time || "00:00"))).slice(0, 3);
  recentAnnounce.forEach(a => {
    const div = document.createElement("div");
    div.className = "announce-mini";
    div.innerHTML = `
      <div class="am-icon"><i class="fa-solid fa-bullhorn"></i></div>
      <div><strong>${a.title}</strong><span>${formatDateID(a.date)}${a.time ? " &middot; " + a.time : ""}</span></div>
    `;
    dashAnnounce.appendChild(div);
  });
}

function renderNextClass(todaySchedule) {
  const box = document.getElementById("nextClassBox");
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  function toMinutes(str) {
    const [h, m] = str.split(":").map(Number);
    return h * 60 + m;
  }

  let next = null;
  for (const item of todaySchedule) {
    const [start] = item.time.split(" - ");
    if (toMinutes(start) >= nowMinutes) { next = item; break; }
  }

  if (!next) {
    box.innerHTML = `<p class="empty-note">Tidak ada pelajaran lagi hari ini. Sampai jumpa besok!</p>`;
    return;
  }

  const [start] = next.time.split(" - ");
  const diff = toMinutes(start) - nowMinutes;
  const countdownText = diff <= 0 ? "Berlangsung" : `${Math.floor(diff / 60)}j ${diff % 60}m lagi`;

  box.innerHTML = `
    <div class="nc-time">${start}<span>WIB</span></div>
    <div class="nc-info">
      <strong>${next.mapel}</strong>
      <span>${next.guru} &middot; ${next.ruang}</span>
    </div>
    <div class="nc-countdown">${countdownText}</div>
  `;
}

/* =====================================================
   JADWAL
===================================================== */
function renderJadwalTabs() {
  const wrap = document.getElementById("jadwalTabs");
  wrap.innerHTML = "";
  SCHOOL_DAYS.forEach(day => {
    const btn = document.createElement("button");
    btn.className = "day-tab" + (day === state.jadwalDay ? " active" : "") + (day === todayName() ? " is-today" : "");
    btn.textContent = day;
    btn.addEventListener("click", () => { state.jadwalDay = day; renderJadwalTabs(); renderJadwalList(); });
    wrap.appendChild(btn);
  });
}

function renderJadwalList() {
  const list = document.getElementById("jadwalList");
  list.innerHTML = "";
  const items = schedule[state.jadwalDay] || [];
  const isToday = state.jadwalDay === todayName();
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  function toMinutes(str) { const [h, m] = str.split(":").map(Number); return h * 60 + m; }

  if (items.length === 0) {
    list.innerHTML = `<p class="empty-note">Tidak ada jadwal pelajaran pada hari ini.</p>`;
    return;
  }

  items.forEach(item => {
    const [start, end] = item.time.split(" - ");
    let status = "upcoming", statusLabel = "Akan Datang", isCurrent = false;
    if (isToday) {
      if (nowMinutes >= toMinutes(start) && nowMinutes <= toMinutes(end)) { status = "now"; statusLabel = "Sedang Berlangsung"; isCurrent = true; }
      else if (nowMinutes > toMinutes(end)) { status = "done"; statusLabel = "Selesai"; }
    } else {
      status = "done"; statusLabel = "-";
    }
    const div = document.createElement("div");
    div.className = "schedule-item" + (isCurrent ? " current" : "");
    div.innerHTML = `
      <div class="si-time">${item.time}</div>
      <div class="si-info"><strong>${item.mapel}</strong><span>${item.guru} &middot; ${item.ruang}</span></div>
      <div class="si-status ${status}">${statusLabel}</div>
    `;
    list.appendChild(div);
  });
}

/* =====================================================
   PIKET
===================================================== */
function renderPiket() {
  const tName = todayName();
  const banner = document.getElementById("piketToday");
  if (piket[tName]) {
    banner.innerHTML = `<i class="fa-solid fa-broom"></i> Jadwal Piket Hari Ini (${tName}): ${piket[tName].join(", ")}`;
  } else {
    banner.innerHTML = `<i class="fa-solid fa-broom"></i> Hari ini (${tName}) tidak ada jadwal piket.`;
  }

  const grid = document.getElementById("piketGrid");
  grid.innerHTML = "";
  SCHOOL_DAYS.forEach(day => {
    const card = document.createElement("div");
    card.className = "piket-card" + (day === tName ? " today" : "");
    card.innerHTML = `
      <h4>${day} ${day === tName ? '<span class="pc-badge">Hari Ini</span>' : ""}</h4>
      <ul>${piket[day].map(n => `<li><i class="fa-solid fa-user"></i>${n}</li>`).join("")}</ul>
    `;
    grid.appendChild(card);
  });
}

/* =====================================================
   SISWA
===================================================== */
function getFilteredStudents() {
  let list = students.filter(s => {
    const matchGender = state.siswaGenderFilter === "all" || s.gender === state.siswaGenderFilter;
    const matchQuery = s.name.toLowerCase().includes(state.siswaQuery.toLowerCase());
    return matchGender && matchQuery;
  });
  if (state.siswaSort === "nama") list = list.sort((a, b) => a.name.localeCompare(b.name));
  else list = list.sort((a, b) => a.absen - b.absen);
  return list;
}

function renderSiswa() {
  const list = getFilteredStudents();
  const cardView = document.getElementById("siswaCardView");
  const tableBody = document.getElementById("siswaTableBody");

  if (list.length === 0) {
    cardView.innerHTML = `<p class="empty-note">Tidak ada siswa yang cocok dengan pencarian.</p>`;
    tableBody.innerHTML = `<tr><td colspan="5" class="empty-note">Tidak ada data.</td></tr>`;
    return;
  }

  cardView.innerHTML = list.map(s => `
    <div class="student-card" data-nis="${s.nis}">
      <div class="student-avatar" style="background:${colorFor(s.name)}">${initials(s.name)}${photoImgTag(s, 'loading="lazy"')}</div>
      <strong>${s.name}</strong>
      <div class="sc-nis">No. ${s.absen} &middot; ${s.nis}</div>
      ${s.role ? `<span class="sc-role">${s.role}</span>` : ""}
    </div>
  `).join("");

  tableBody.innerHTML = list.map(s => `
    <tr>
      <td>${s.absen}</td>
      <td><div class="st-name-cell"><span class="st-mini-avatar" style="background:${colorFor(s.name)}">${initials(s.name)}${photoImgTag(s, 'loading="lazy"')}</span>${s.name}</div></td>
      <td>${s.nis}</td>
      <td>${s.gender === "L" ? "Laki-laki" : "Perempuan"}</td>
      <td>${s.role || "-"}</td>
    </tr>
  `).join("");

  cardView.querySelectorAll(".student-card").forEach(card => {
    card.addEventListener("click", () => {
      const s = students.find(st => st.nis === card.dataset.nis);
      openStudentModal(s);
    });
  });
}

function openStudentModal(s) {
  openModal(`
    <div class="modal-top"><h3>Detail Siswa</h3><button onclick="closeModal()"><i class="fa-solid fa-xmark"></i></button></div>
    <div class="modal-avatar" style="background:${colorFor(s.name)}">${initials(s.name)}${photoImgTag(s)}</div>
    <div style="text-align:center; margin-bottom:16px;"><strong style="font-size:1.05rem;">${s.name}</strong></div>
    <div class="modal-row"><span>No. Absen</span><strong>${s.absen}</strong></div>
    <div class="modal-row"><span>NIS</span><strong>${s.nis}</strong></div>
    <div class="modal-row"><span>Jenis Kelamin</span><strong>${s.gender === "L" ? "Laki-laki" : "Perempuan"}</strong></div>
    <div class="modal-row"><span>Jabatan</span><strong>${s.role || "Anggota"}</strong></div>
  `);
}

function initSiswaControls() {
  document.getElementById("siswaSearch").addEventListener("input", (e) => { state.siswaQuery = e.target.value; renderSiswa(); });
  document.getElementById("siswaFilterGender").addEventListener("change", (e) => { state.siswaGenderFilter = e.target.value; renderSiswa(); });
  document.getElementById("siswaSort").addEventListener("change", (e) => { state.siswaSort = e.target.value; renderSiswa(); });

  const cardBtn = document.getElementById("siswaViewCard");
  const tableBtn = document.getElementById("siswaViewTable");
  const cardView = document.getElementById("siswaCardView");
  const tableView = document.getElementById("siswaTableView");
  cardBtn.addEventListener("click", () => {
    cardBtn.classList.add("active"); tableBtn.classList.remove("active");
    cardView.classList.remove("hidden"); tableView.classList.add("hidden");
  });
  tableBtn.addEventListener("click", () => {
    tableBtn.classList.add("active"); cardBtn.classList.remove("active");
    tableView.classList.remove("hidden"); cardView.classList.add("hidden");
  });
}

/* =====================================================
   GURU
===================================================== */
function renderGuru() {
  const grid = document.getElementById("guruGrid");
  grid.innerHTML = teachers.map(t => `
    <div class="teacher-card">
      <div class="teacher-avatar" style="background:${colorFor(t.name)}">${initials(t.name)}</div>
      <div>
        <strong>${t.name}</strong>
        <div class="tc-mapel">${t.mapel}</div>
        <span class="tc-code">${t.code} &middot; ${t.jadwal}</span>
      </div>
    </div>
  `).join("");
}

/* =====================================================
   STRUKTUR
===================================================== */
function renderStruktur() {
  const ketua = students.find(s => s.role === "Ketua Kelas");
  const wakil = students.find(s => s.role === "Wakil Ketua");
  const sekretaris = students.find(s => s.role === "Sekretaris 1");
  const sekretaris2 = students.find(s => s.role === "Sekretaris 2");
  const bendahara = students.find(s => s.role === "Bendahara 1");
  const bendahara2 = students.find(s => s.role === "Bendahara 2");

  document.getElementById("strukturTop").innerHTML = `
    <div class="struktur-card leader" style="max-width:220px;">
      <div class="struktur-icon"><i class="fa-solid fa-crown"></i></div>
      <strong>${ketua ? ketua.name : "-"}</strong>
      <span>Ketua Kelas</span>
    </div>
  `;

  const others = [
    { role: "Wakil Ketua", name: wakil?.name, icon: "fa-user-tie" },
    { role: "Sekretaris", name: sekretaris?.name, icon: "fa-pen" },
    { role: "Bendahara", name: bendahara?.name, icon: "fa-coins" },
    { role: "Sekretaris 2", name: sekretaris2?.name, icon: "fa-pen" },
    { role: "Bendahara 2", name: bendahara2?.name, icon: "fa-coins" },
    ...strukturLain.map(s => ({ role: s.role, name: s.name, icon: s.icon }))
  ];

  document.getElementById("strukturGrid").innerHTML = others.map(o => `
    <div class="struktur-card">
      <div class="struktur-icon"><i class="fa-solid ${o.icon}"></i></div>
      <strong>${o.name || "-"}</strong>
      <span>${o.role}</span>
    </div>
  `).join("");
}

/* =====================================================
   TUGAS (dengan tambah / edit / hapus, tersimpan di browser)
===================================================== */
const TASK_STORE_KEY = "xi5ips-tasks";
function genId() { return "tsk_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
function escapeAttr(str) { return String(str).replace(/"/g, "&quot;"); }

function loadTasks() {
  try {
    const saved = localStorage.getItem(TASK_STORE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) { /* ignore corrupt data, fall back to defaults */ }
  return tasks.map(t => ({ ...t, id: genId() }));
}
function persistTasks() { localStorage.setItem(TASK_STORE_KEY, JSON.stringify(taskStore)); }
let taskStore = loadTasks();

function getFilteredTasks() {
  let list = taskStore.filter(t => {
    const matchStatus = state.tugasStatusFilter === "all" || t.status === state.tugasStatusFilter;
    const matchQuery = t.title.toLowerCase().includes(state.tugasQuery.toLowerCase()) || t.mapel.toLowerCase().includes(state.tugasQuery.toLowerCase());
    return matchStatus && matchQuery;
  });
  if (state.tugasSort === "mapel") list = list.sort((a, b) => a.mapel.localeCompare(b.mapel));
  else list = list.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  return list;
}

function daysUntil(dateStr) {
  const target = new Date(dateStr + "T23:59:59");
  const now = new Date();
  const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
  return diff;
}

function renderTugas() {
  const list = getFilteredTasks();
  const wrap = document.getElementById("tugasList");
  if (taskStore.length === 0) {
    wrap.innerHTML = `<p class="empty-note">Belum ada tugas. Klik "Tambah Tugas" untuk menambahkan.</p>`;
    return;
  }
  if (list.length === 0) {
    wrap.innerHTML = `<p class="empty-note">Tidak ada tugas yang cocok.</p>`;
    return;
  }
  const statusLabel = { belum: "Belum Dikerjakan", proses: "Sedang Dikerjakan", selesai: "Selesai" };
  wrap.innerHTML = list.map(t => {
    const d = daysUntil(t.deadline);
    let countdown;
    if (t.status === "selesai") countdown = "Selesai";
    else if (d < 0) countdown = "Terlambat";
    else if (d === 0) countdown = "Hari ini";
    else countdown = `${d} hari lagi`;
    return `
      <div class="task-item" data-id="${t.id}">
        <div class="task-icon"><i class="fa-solid fa-file-lines"></i></div>
        <div class="task-info">
          <strong>${t.title}</strong>
          <span>${t.mapel}${t.guru ? " &middot; " + t.guru : ""}</span>
        </div>
        <div class="task-deadline">${formatDateID(t.deadline)}<strong>${countdown}</strong></div>
        <span class="status-badge ${t.status}">${statusLabel[t.status]}</span>
        <button class="task-delete-btn" title="Hapus tugas" onclick="event.stopPropagation(); confirmDeleteTask('${t.id}')"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
  }).join("");

  wrap.querySelectorAll(".task-item").forEach(item => {
    item.addEventListener("click", () => {
      const t = taskStore.find(tk => tk.id === item.dataset.id);
      if (t) openTaskFormModal(t);
    });
  });
}

function openTaskFormModal(existing) {
  const isEdit = !!existing;
  openModal(`
    <div class="modal-top"><h3>${isEdit ? "Edit Tugas" : "Tambah Tugas"}</h3><button onclick="closeModal()"><i class="fa-solid fa-xmark"></i></button></div>
    <form id="taskForm" class="task-form">
      <label>Judul Tugas
        <input type="text" id="tfTitle" required value="${isEdit ? escapeAttr(existing.title) : ""}" placeholder="Misal: Membuat Rangkuman Bab 3">
      </label>
      <label>Mata Pelajaran
        <input type="text" id="tfMapel" required value="${isEdit ? escapeAttr(existing.mapel) : ""}" placeholder="Misal: Sosiologi">
      </label>
      <label>Guru <span style="font-weight:400;">(opsional)</span>
        <input type="text" id="tfGuru" value="${isEdit ? escapeAttr(existing.guru || "") : ""}" placeholder="Misal: Slamet Riyadi">
      </label>
      <label>Deadline
        <input type="date" id="tfDeadline" required value="${isEdit ? existing.deadline : ""}">
      </label>
      <label>Status
        <select id="tfStatus">
          <option value="belum" ${isEdit && existing.status === "belum" ? "selected" : ""}>Belum Dikerjakan</option>
          <option value="proses" ${isEdit && existing.status === "proses" ? "selected" : ""}>Sedang Dikerjakan</option>
          <option value="selesai" ${isEdit && existing.status === "selesai" ? "selected" : ""}>Selesai</option>
        </select>
      </label>
      <div class="task-form-actions">
        ${isEdit ? `<button type="button" class="btn-mini btn-mini-ghost" onclick="confirmDeleteTask('${existing.id}')"><i class="fa-solid fa-trash"></i> Hapus</button>` : `<span></span>`}
        <button type="submit" class="btn-mini"><i class="fa-solid fa-check"></i> ${isEdit ? "Simpan Perubahan" : "Tambah Tugas"}</button>
      </div>
    </form>
  `);

  document.getElementById("taskForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("tfTitle").value.trim();
    const mapel = document.getElementById("tfMapel").value.trim();
    const guru = document.getElementById("tfGuru").value.trim();
    const deadline = document.getElementById("tfDeadline").value;
    const status = document.getElementById("tfStatus").value;
    if (!title || !mapel || !deadline) { showToast("Lengkapi judul, mapel, dan deadline.", "error"); return; }

    if (isEdit) {
      Object.assign(existing, { title, mapel, guru, deadline, status });
    } else {
      taskStore.push({ id: genId(), title, mapel, guru, deadline, status });
    }
    persistTasks();
    renderTugas();
    closeModal();
    showToast(isEdit ? "Tugas berhasil diperbarui." : "Tugas baru berhasil ditambahkan.", "success");
  });
}

function confirmDeleteTask(id) {
  const t = taskStore.find(tk => tk.id === id);
  if (!t) return;
  if (confirm(`Hapus tugas "${t.title}"?`)) deleteTask(id);
}
function deleteTask(id) {
  taskStore = taskStore.filter(t => t.id !== id);
  persistTasks();
  renderTugas();
  closeModal();
  showToast("Tugas dihapus.", "success");
}

function initTugasControls() {
  document.getElementById("tugasSearch").addEventListener("input", (e) => { state.tugasQuery = e.target.value; renderTugas(); });
  document.getElementById("tugasFilterStatus").addEventListener("change", (e) => { state.tugasStatusFilter = e.target.value; renderTugas(); });
  document.getElementById("tugasSort").addEventListener("change", (e) => { state.tugasSort = e.target.value; renderTugas(); });
  document.getElementById("addTaskBtn").addEventListener("click", () => openTaskFormModal(null));
}


/* =====================================================
   PENGUMUMAN (dengan tambah / edit / hapus, tersimpan di browser)
===================================================== */
const ANNOUNCE_STORE_KEY = "xi5ips-announcements";
function loadAnnouncements() {
  try {
    const saved = localStorage.getItem(ANNOUNCE_STORE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) { /* ignore corrupt data, fall back to defaults */ }
  return announcements.map(a => ({ ...a, id: genId() }));
}
function persistAnnouncements() { localStorage.setItem(ANNOUNCE_STORE_KEY, JSON.stringify(announceStore)); }
let announceStore = loadAnnouncements();

function renderPengumuman() {
  const wrap = document.getElementById("pengumumanList");
  if (announceStore.length === 0) {
    wrap.innerHTML = `<p class="empty-note">Belum ada pengumuman. Klik "Tambah Pengumuman" untuk menambahkan.</p>`;
    return;
  }
  const sorted = [...announceStore].sort((a, b) => new Date(b.date + "T" + (b.time || "00:00")) - new Date(a.date + "T" + (a.time || "00:00")));
  wrap.innerHTML = sorted.map(a => `
    <div class="announce-card" data-id="${a.id}">
      <div class="announce-card-head">
        <strong>${a.title}</strong>
        <span class="announce-cat">${a.cat}</span>
        <span class="announce-date">${formatDateID(a.date)}${a.time ? " &middot; " + a.time : ""}</span>
        <button class="task-delete-btn" title="Hapus pengumuman" onclick="event.stopPropagation(); confirmDeleteAnnouncement('${a.id}')"><i class="fa-solid fa-trash"></i></button>
      </div>
      <p>${a.body}</p>
    </div>
  `).join("");

  wrap.querySelectorAll(".announce-card").forEach(card => {
    card.addEventListener("click", () => {
      const a = announceStore.find(an => an.id === card.dataset.id);
      if (a) openAnnounceFormModal(a);
    });
  });
}

function openAnnounceFormModal(existing) {
  const isEdit = !!existing;
  openModal(`
    <div class="modal-top"><h3>${isEdit ? "Edit Pengumuman" : "Tambah Pengumuman"}</h3><button onclick="closeModal()"><i class="fa-solid fa-xmark"></i></button></div>
    <form id="announceForm" class="task-form">
      <label>Judul
        <input type="text" id="afTitle" required value="${isEdit ? escapeAttr(existing.title) : ""}" placeholder="Misal: Ulangan Harian Sosiologi">
      </label>
      <label>Isi Pengumuman
        <textarea id="afBody" required rows="3" placeholder="Tulis detail pengumuman di sini...">${isEdit ? existing.body : ""}</textarea>
      </label>
      <label>Kategori
        <input type="text" id="afCat" required value="${isEdit ? escapeAttr(existing.cat) : ""}" placeholder="Misal: Akademik, Kegiatan, Kas">
      </label>
      <label>Tanggal
        <input type="date" id="afDate" required value="${isEdit ? existing.date : todayISO()}">
      </label>
      <label>Waktu <span style="font-weight:400;">(opsional)</span>
        <input type="time" id="afTime" value="${isEdit ? (existing.time || "") : ""}">
      </label>
      <div class="task-form-actions">
        ${isEdit ? `<button type="button" class="btn-mini btn-mini-ghost" onclick="confirmDeleteAnnouncement('${existing.id}')"><i class="fa-solid fa-trash"></i> Hapus</button>` : `<span></span>`}
        <button type="submit" class="btn-mini"><i class="fa-solid fa-check"></i> ${isEdit ? "Simpan Perubahan" : "Tambah Pengumuman"}</button>
      </div>
    </form>
  `);

  document.getElementById("announceForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("afTitle").value.trim();
    const body = document.getElementById("afBody").value.trim();
    const cat = document.getElementById("afCat").value.trim();
    const date = document.getElementById("afDate").value;
    const time = document.getElementById("afTime").value;
    if (!title || !body || !cat || !date) { showToast("Lengkapi judul, isi, kategori, dan tanggal.", "error"); return; }

    if (isEdit) {
      Object.assign(existing, { title, body, cat, date, time });
    } else {
      announceStore.push({ id: genId(), title, body, cat, date, time });
    }
    persistAnnouncements();
    renderPengumuman();
    renderDashboard();
    closeModal();
    showToast(isEdit ? "Pengumuman berhasil diperbarui." : "Pengumuman baru berhasil ditambahkan.", "success");
  });
}

function confirmDeleteAnnouncement(id) {
  const a = announceStore.find(an => an.id === id);
  if (!a) return;
  if (confirm(`Hapus pengumuman "${a.title}"?`)) deleteAnnouncement(id);
}
function deleteAnnouncement(id) {
  announceStore = announceStore.filter(a => a.id !== id);
  persistAnnouncements();
  renderPengumuman();
  renderDashboard();
  closeModal();
  showToast("Pengumuman dihapus.", "success");
}

/* =====================================================
   EVENT (dengan tambah / edit / hapus, tersimpan di browser)
===================================================== */
const EVENT_STORE_KEY = "xi5ips-events";
function loadEvents() {
  try {
    const saved = localStorage.getItem(EVENT_STORE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) { /* ignore corrupt data, fall back to defaults */ }
  return events.map(ev => ({ ...ev, id: genId() }));
}
function persistEvents() { localStorage.setItem(EVENT_STORE_KEY, JSON.stringify(eventStore)); }
let eventStore = loadEvents();

function renderEvent() {
  const wrap = document.getElementById("eventTimeline");
  if (eventStore.length === 0) {
    wrap.innerHTML = `<p class="empty-note">Belum ada event. Klik "Tambah Event" untuk menambahkan.</p>`;
    return;
  }
  const sorted = [...eventStore].sort((a, b) => new Date(a.date) - new Date(b.date));
  const now = new Date();
  wrap.innerHTML = sorted.map(ev => {
    const isPast = new Date(ev.date) < now;
    return `
      <div class="timeline-item ${isPast ? "past" : ""}" data-id="${ev.id}">
        <div class="timeline-card">
          <div class="timeline-card-head">
            <strong>${ev.title}</strong>
            <span class="timeline-tag">${ev.tag}</span>
            <span class="timeline-date">${formatDateID(ev.date)}</span>
            <button class="task-delete-btn" title="Hapus event" onclick="event.stopPropagation(); confirmDeleteEvent('${ev.id}')"><i class="fa-solid fa-trash"></i></button>
          </div>
          <p>${ev.desc}</p>
        </div>
      </div>
    `;
  }).join("");

  wrap.querySelectorAll(".timeline-item").forEach(item => {
    item.addEventListener("click", () => {
      const ev = eventStore.find(e => e.id === item.dataset.id);
      if (ev) openEventFormModal(ev);
    });
  });
}

function openEventFormModal(existing) {
  const isEdit = !!existing;
  openModal(`
    <div class="modal-top"><h3>${isEdit ? "Edit Event" : "Tambah Event"}</h3><button onclick="closeModal()"><i class="fa-solid fa-xmark"></i></button></div>
    <form id="eventForm" class="task-form">
      <label>Nama Event
        <input type="text" id="efTitle" required value="${isEdit ? escapeAttr(existing.title) : ""}" placeholder="Misal: Class Meeting Semester Ganjil">
      </label>
      <label>Deskripsi
        <textarea id="efDesc" required rows="3" placeholder="Tulis detail kegiatan di sini...">${isEdit ? existing.desc : ""}</textarea>
      </label>
      <label>Kategori/Tag
        <input type="text" id="efTag" required value="${isEdit ? escapeAttr(existing.tag) : ""}" placeholder="Misal: Ulangan, Study Tour, Kerja Bakti">
      </label>
      <label>Tanggal
        <input type="date" id="efDate" required value="${isEdit ? existing.date : todayISO()}">
      </label>
      <div class="task-form-actions">
        ${isEdit ? `<button type="button" class="btn-mini btn-mini-ghost" onclick="confirmDeleteEvent('${existing.id}')"><i class="fa-solid fa-trash"></i> Hapus</button>` : `<span></span>`}
        <button type="submit" class="btn-mini"><i class="fa-solid fa-check"></i> ${isEdit ? "Simpan Perubahan" : "Tambah Event"}</button>
      </div>
    </form>
  `);

  document.getElementById("eventForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("efTitle").value.trim();
    const desc = document.getElementById("efDesc").value.trim();
    const tag = document.getElementById("efTag").value.trim();
    const date = document.getElementById("efDate").value;
    if (!title || !desc || !tag || !date) { showToast("Lengkapi nama, deskripsi, kategori, dan tanggal.", "error"); return; }

    if (isEdit) {
      Object.assign(existing, { title, desc, tag, date });
    } else {
      eventStore.push({ id: genId(), title, desc, tag, date });
    }
    persistEvents();
    renderEvent();
    closeModal();
    showToast(isEdit ? "Event berhasil diperbarui." : "Event baru berhasil ditambahkan.", "success");
  });
}

function confirmDeleteEvent(id) {
  const ev = eventStore.find(e => e.id === id);
  if (!ev) return;
  if (confirm(`Hapus event "${ev.title}"?`)) deleteEvent(id);
}
function deleteEvent(id) {
  eventStore = eventStore.filter(e => e.id !== id);
  persistEvents();
  renderEvent();
  closeModal();
  showToast("Event dihapus.", "success");
}

function initPengumumanEventControls() {
  document.getElementById("addAnnounceBtn").addEventListener("click", () => openAnnounceFormModal(null));
  document.getElementById("addEventBtn").addEventListener("click", () => openEventFormModal(null));
}


/* =====================================================
   ABSENSI (dengan tambah / edit / hapus, tersimpan di browser)
===================================================== */
const ABSEN_STORE_KEY = "xi5ips-absensi";
function loadAbsensi() {
  try {
    const saved = localStorage.getItem(ABSEN_STORE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) { /* ignore corrupt data, fall back to defaults */ }
  return [{ id: genId(), date: "2026-09-19", hadir: absensiData.hadir, izin: absensiData.izin, sakit: absensiData.sakit, alpa: absensiData.alpa }];
}
function persistAbsensi() { localStorage.setItem(ABSEN_STORE_KEY, JSON.stringify(absenStore)); }
let absenStore = loadAbsensi();

function renderAbsensi() {
  const totals = absenStore.reduce((acc, r) => {
    acc.hadir += r.hadir; acc.izin += r.izin; acc.sakit += r.sakit; acc.alpa += r.alpa;
    return acc;
  }, { hadir: 0, izin: 0, sakit: 0, alpa: 0 });

  document.getElementById("absenHadir").textContent = totals.hadir;
  document.getElementById("absenIzin").textContent = totals.izin;
  document.getElementById("absenSakit").textContent = totals.sakit;
  document.getElementById("absenAlpa").textContent = totals.alpa;

  const total = totals.hadir + totals.izin + totals.sakit + totals.alpa;
  const bars = [
    { label: "Hadir", value: totals.hadir, color: "var(--success)" },
    { label: "Izin", value: totals.izin, color: "var(--info)" },
    { label: "Sakit", value: totals.sakit, color: "var(--accent)" },
    { label: "Alpa", value: totals.alpa, color: "var(--danger)" }
  ];
  document.getElementById("absenBars").innerHTML = bars.map(b => {
    const pct = total ? Math.round((b.value / total) * 100) : 0;
    return `
      <div class="absen-bar-row">
        <span>${b.label}</span>
        <div class="absen-bar-track"><div class="absen-bar-fill" style="width:${pct}%; background:${b.color}"></div></div>
        <span>${pct}%</span>
      </div>
    `;
  }).join("");

  const tbody = document.getElementById("absenTableBody");
  if (absenStore.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="empty-note">Belum ada data absensi. Klik "Tambah Data Absensi" untuk menambahkan.</td></tr>`;
  } else {
    const sorted = [...absenStore].sort((a, b) => new Date(b.date) - new Date(a.date));
    tbody.innerHTML = sorted.map(r => `
      <tr data-id="${r.id}" style="cursor:pointer;">
        <td>${formatDateID(r.date)}</td>
        <td>${r.hadir}</td>
        <td>${r.izin}</td>
        <td>${r.sakit}</td>
        <td>${r.alpa}</td>
        <td><button class="task-delete-btn" title="Hapus data" onclick="event.stopPropagation(); confirmDeleteAbsensi('${r.id}')"><i class="fa-solid fa-trash"></i></button></td>
      </tr>
    `).join("");
    tbody.querySelectorAll("tr[data-id]").forEach(row => {
      row.addEventListener("click", () => {
        const r = absenStore.find(a => a.id === row.dataset.id);
        if (r) openAbsensiFormModal(r);
      });
    });
  }
}

function openAbsensiFormModal(existing) {
  const isEdit = !!existing;
  openModal(`
    <div class="modal-top"><h3>${isEdit ? "Edit Data Absensi" : "Tambah Data Absensi"}</h3><button onclick="closeModal()"><i class="fa-solid fa-xmark"></i></button></div>
    <form id="absensiForm" class="task-form">
      <label>Tanggal
        <input type="date" id="abDate" required value="${isEdit ? existing.date : todayISO()}">
      </label>
      <label>Hadir
        <input type="number" id="abHadir" required min="0" value="${isEdit ? existing.hadir : ""}" placeholder="Jumlah siswa hadir">
      </label>
      <label>Izin
        <input type="number" id="abIzin" required min="0" value="${isEdit ? existing.izin : 0}">
      </label>
      <label>Sakit
        <input type="number" id="abSakit" required min="0" value="${isEdit ? existing.sakit : 0}">
      </label>
      <label>Alpa
        <input type="number" id="abAlpa" required min="0" value="${isEdit ? existing.alpa : 0}">
      </label>
      <div class="task-form-actions">
        ${isEdit ? `<button type="button" class="btn-mini btn-mini-ghost" onclick="confirmDeleteAbsensi('${existing.id}')"><i class="fa-solid fa-trash"></i> Hapus</button>` : `<span></span>`}
        <button type="submit" class="btn-mini"><i class="fa-solid fa-check"></i> ${isEdit ? "Simpan Perubahan" : "Tambah Data"}</button>
      </div>
    </form>
  `);

  document.getElementById("absensiForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const date = document.getElementById("abDate").value;
    const hadir = parseInt(document.getElementById("abHadir").value, 10) || 0;
    const izin = parseInt(document.getElementById("abIzin").value, 10) || 0;
    const sakit = parseInt(document.getElementById("abSakit").value, 10) || 0;
    const alpa = parseInt(document.getElementById("abAlpa").value, 10) || 0;
    if (!date) { showToast("Lengkapi tanggal.", "error"); return; }

    if (isEdit) {
      Object.assign(existing, { date, hadir, izin, sakit, alpa });
    } else {
      absenStore.push({ id: genId(), date, hadir, izin, sakit, alpa });
    }
    persistAbsensi();
    renderAbsensi();
    closeModal();
    showToast(isEdit ? "Data absensi berhasil diperbarui." : "Data absensi baru berhasil ditambahkan.", "success");
  });
}

function confirmDeleteAbsensi(id) {
  const r = absenStore.find(a => a.id === id);
  if (!r) return;
  if (confirm(`Hapus data absensi tanggal ${formatDateID(r.date)}?`)) deleteAbsensi(id);
}
function deleteAbsensi(id) {
  absenStore = absenStore.filter(a => a.id !== id);
  persistAbsensi();
  renderAbsensi();
  closeModal();
  showToast("Data absensi dihapus.", "success");
}

function initAbsensiControls() {
  document.getElementById("addAbsensiBtn").addEventListener("click", () => openAbsensiFormModal(null));
}

/* =====================================================
   KAS (dengan tambah / edit / hapus, tersimpan di browser)
===================================================== */
const KAS_STORE_KEY = "xi5ips-kas";
function loadKas() {
  try {
    const saved = localStorage.getItem(KAS_STORE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) { /* ignore corrupt data, fall back to defaults */ }
  return kasTransactions.map(t => ({ ...t, id: genId() }));
}
function persistKas() { localStorage.setItem(KAS_STORE_KEY, JSON.stringify(kasStore)); }
let kasStore = loadKas();
let kasChartInstance = null;

function renderKas() {
  const masuk = kasStore.filter(t => t.jenis === "masuk").reduce((sum, t) => sum + t.jumlah, 0);
  const keluar = kasStore.filter(t => t.jenis === "keluar").reduce((sum, t) => sum + t.jumlah, 0);
  document.getElementById("kasSaldo").textContent = formatRupiah(masuk - keluar);
  document.getElementById("kasMasuk").textContent = formatRupiah(masuk);
  document.getElementById("kasKeluar").textContent = formatRupiah(keluar);

  const tbody = document.getElementById("kasTableBody");
  if (kasStore.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="empty-note">Belum ada transaksi. Klik "Tambah Transaksi" untuk menambahkan.</td></tr>`;
  } else {
    const sorted = [...kasStore].sort((a, b) => new Date(b.date) - new Date(a.date));
    tbody.innerHTML = sorted.map(t => `
      <tr data-id="${t.id}" style="cursor:pointer;">
        <td>${formatDateID(t.date)}</td>
        <td>${t.desc}</td>
        <td><span class="status-badge ${t.jenis === "masuk" ? "selesai" : "belum"}">${t.jenis === "masuk" ? "Pemasukan" : "Pengeluaran"}</span></td>
        <td>${formatRupiah(t.jumlah)}</td>
        <td><button class="task-delete-btn" title="Hapus transaksi" onclick="event.stopPropagation(); confirmDeleteKas('${t.id}')"><i class="fa-solid fa-trash"></i></button></td>
      </tr>
    `).join("");
    tbody.querySelectorAll("tr[data-id]").forEach(row => {
      row.addEventListener("click", () => {
        const t = kasStore.find(k => k.id === row.dataset.id);
        if (t) openKasFormModal(t);
      });
    });
  }

  renderKasChart();
}

function openKasFormModal(existing) {
  const isEdit = !!existing;
  openModal(`
    <div class="modal-top"><h3>${isEdit ? "Edit Transaksi" : "Tambah Transaksi"}</h3><button onclick="closeModal()"><i class="fa-solid fa-xmark"></i></button></div>
    <form id="kasForm" class="task-form">
      <label>Keterangan
        <input type="text" id="kfDesc" required value="${isEdit ? escapeAttr(existing.desc) : ""}" placeholder="Misal: Iuran kas kelas">
      </label>
      <label>Jenis
        <select id="kfJenis">
          <option value="masuk" ${isEdit && existing.jenis === "masuk" ? "selected" : ""}>Pemasukan</option>
          <option value="keluar" ${isEdit && existing.jenis === "keluar" ? "selected" : ""}>Pengeluaran</option>
        </select>
      </label>
      <label>Jumlah (Rp)
        <input type="number" id="kfJumlah" required min="0" step="500" value="${isEdit ? existing.jumlah : ""}" placeholder="Misal: 50000">
      </label>
      <label>Tanggal
        <input type="date" id="kfDate" required value="${isEdit ? existing.date : todayISO()}">
      </label>
      <div class="task-form-actions">
        ${isEdit ? `<button type="button" class="btn-mini btn-mini-ghost" onclick="confirmDeleteKas('${existing.id}')"><i class="fa-solid fa-trash"></i> Hapus</button>` : `<span></span>`}
        <button type="submit" class="btn-mini"><i class="fa-solid fa-check"></i> ${isEdit ? "Simpan Perubahan" : "Tambah Transaksi"}</button>
      </div>
    </form>
  `);

  document.getElementById("kasForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const desc = document.getElementById("kfDesc").value.trim();
    const jenis = document.getElementById("kfJenis").value;
    const jumlah = parseInt(document.getElementById("kfJumlah").value, 10);
    const date = document.getElementById("kfDate").value;
    if (!desc || !date || !jumlah || jumlah <= 0) { showToast("Lengkapi keterangan, jumlah, dan tanggal dengan benar.", "error"); return; }

    if (isEdit) {
      Object.assign(existing, { desc, jenis, jumlah, date });
    } else {
      kasStore.push({ id: genId(), desc, jenis, jumlah, date });
    }
    persistKas();
    renderKas();
    closeModal();
    showToast(isEdit ? "Transaksi berhasil diperbarui." : "Transaksi baru berhasil ditambahkan.", "success");
  });
}

function confirmDeleteKas(id) {
  const t = kasStore.find(k => k.id === id);
  if (!t) return;
  if (confirm(`Hapus transaksi "${t.desc}"?`)) deleteKas(id);
}
function deleteKas(id) {
  kasStore = kasStore.filter(k => k.id !== id);
  persistKas();
  renderKas();
  closeModal();
  showToast("Transaksi dihapus.", "success");
}

function initKasControls() {
  document.getElementById("addKasBtn").addEventListener("click", () => openKasFormModal(null));
}

function renderKasChart() {
  const ctx = document.getElementById("kasChart");
  if (!ctx) return;
  const chronological = [...kasStore].sort((a, b) => new Date(a.date) - new Date(b.date));
  let balance = 0;
  const labels = [], data = [];
  chronological.forEach(t => {
    balance += t.jenis === "masuk" ? t.jumlah : -t.jumlah;
    labels.push(new Date(t.date).toLocaleDateString("id-ID", { day: "numeric", month: "short" }));
    data.push(balance);
  });

  const styles = getComputedStyle(document.documentElement);
  const primary = styles.getPropertyValue("--primary").trim();
  const ink = styles.getPropertyValue("--ink").trim();
  const border = styles.getPropertyValue("--border").trim();

  if (kasChartInstance) kasChartInstance.destroy();
  if (labels.length === 0) return;
  kasChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "Saldo Kas",
        data,
        borderColor: primary,
        backgroundColor: primary + "22",
        fill: true,
        tension: 0.35,
        pointRadius: 3
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: border }, ticks: { color: ink } },
        y: { grid: { color: border }, ticks: { color: ink, callback: v => "Rp" + (v / 1000) + "k" } }
      }
    }
  });
}

/* =====================================================
   GALERI (manual — edit langsung array `galeri` di atas untuk mengganti foto)
===================================================== */
function renderGaleri() {
  const grid = document.getElementById("galeriGrid");
  grid.innerHTML = galeri.map((g, i) => {
    const src = g.src || `https://source.unsplash.com/400x400/?${encodeURIComponent(g.query)}&sig=${i}`;
    return `
      <div class="gallery-item">
        <img src="${src}" alt="${g.caption}" loading="lazy" onerror="this.src='https://placehold.co/400x400/2F3E9E/FFFFFF?text=${encodeURIComponent(g.caption)}'">
        <div class="gallery-caption">${g.caption}</div>
      </div>
    `;
  }).join("");

  grid.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      document.getElementById("lightboxImg").src = img.src;
      document.getElementById("lightboxImg").alt = img.alt;
      document.getElementById("lightbox").classList.remove("hidden");
    });
  });
}

function initLightbox() {
  document.getElementById("lightboxClose").addEventListener("click", () => document.getElementById("lightbox").classList.add("hidden"));
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") document.getElementById("lightbox").classList.add("hidden");
  });
}

/* =====================================================
   MODAL
===================================================== */
function openModal(html) {
  document.getElementById("modalBox").innerHTML = html;
  document.getElementById("modalOverlay").classList.remove("hidden");
}
function closeModal() { document.getElementById("modalOverlay").classList.add("hidden"); }
function initModal() {
  document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "modalOverlay") closeModal();
  });
}

/* =====================================================
   GLOBAL SEARCH
===================================================== */
function initGlobalSearch() {
  const input = document.getElementById("globalSearch");
  const results = document.getElementById("searchResults");

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.classList.add("hidden"); return; }

    const matches = [];
    students.filter(s => s.name.toLowerCase().includes(q)).slice(0, 4).forEach(s =>
      matches.push({ label: s.name, cat: "Siswa", icon: "fa-user", page: "siswa" }));
    teachers.filter(t => t.name.toLowerCase().includes(q) || t.mapel.toLowerCase().includes(q)).slice(0, 4).forEach(t =>
      matches.push({ label: t.name, cat: "Guru", icon: "fa-chalkboard-user", page: "guru" }));
    taskStore.filter(t => t.title.toLowerCase().includes(q)).slice(0, 4).forEach(t =>
      matches.push({ label: t.title, cat: "Tugas", icon: "fa-list-check", page: "tugas" }));
    announceStore.filter(a => a.title.toLowerCase().includes(q)).slice(0, 4).forEach(a =>
      matches.push({ label: a.title, cat: "Pengumuman", icon: "fa-bullhorn", page: "pengumuman" }));
    eventStore.filter(ev => ev.title.toLowerCase().includes(q)).slice(0, 4).forEach(ev =>
      matches.push({ label: ev.title, cat: "Event", icon: "fa-calendar-star", page: "event" }));
    Object.keys(schedule).forEach(day => {
      schedule[day].filter(s => s.mapel.toLowerCase().includes(q)).forEach(s =>
        matches.push({ label: `${s.mapel} (${day})`, cat: "Jadwal", icon: "fa-calendar-days", page: "jadwal" }));
    });

    if (matches.length === 0) {
      results.innerHTML = `<div class="search-empty">Tidak ada hasil untuk "${input.value}"</div>`;
    } else {
      results.innerHTML = matches.slice(0, 10).map(m => `
        <div class="search-result-item" data-page="${m.page}">
          <i class="fa-solid ${m.icon}"></i><span>${m.label}</span><span class="srt-cat">${m.cat}</span>
        </div>
      `).join("");
      results.querySelectorAll(".search-result-item").forEach(el => {
        el.addEventListener("click", () => {
          goToPage(el.dataset.page);
          results.classList.add("hidden");
          input.value = "";
        });
      });
    }
    results.classList.remove("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrap")) results.classList.add("hidden");
  });
}

/* =====================================================
   NOTIFICATIONS
===================================================== */
const NOTIF_STORAGE_KEY = "xi5ips-dismissed-notifs";
function getBaseNotifications() {
  const list = [];
  taskStore.filter(t => t.status !== "selesai" && daysUntil(t.deadline) <= 2 && daysUntil(t.deadline) >= 0).forEach(t => {
    list.push({ id: "task-" + t.id, text: `Tugas "${t.title}" (${t.mapel}) deadline ${daysUntil(t.deadline) === 0 ? "hari ini" : "dalam " + daysUntil(t.deadline) + " hari"}.` });
  });
  [...announceStore].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 2).forEach(a => {
    list.push({ id: "ann-" + a.id, text: a.title + " — " + a.body.slice(0, 60) + "..." });
  });
  return list;
}

function initNotifications() {
  const btn = document.getElementById("notifBtn");
  const panel = document.getElementById("notifPanel");
  const dot = document.getElementById("notifDot");

  function dismissed() { return JSON.parse(localStorage.getItem(NOTIF_STORAGE_KEY) || "[]"); }
  function renderPanel() {
    const dismissedIds = dismissed();
    const items = getBaseNotifications().filter(n => !dismissedIds.includes(n.id));
    dot.classList.toggle("show", items.length > 0);
    if (items.length === 0) {
      panel.innerHTML = `<div class="notif-empty">Tidak ada notifikasi baru.</div>`;
      return;
    }
    panel.innerHTML = items.map(n => `
      <div class="notif-item" data-id="${n.id}">
        <i class="fa-solid fa-bell"></i>
        <span>${n.text}</span>
        <button data-dismiss="${n.id}"><i class="fa-solid fa-xmark"></i></button>
      </div>
    `).join("");
    panel.querySelectorAll("[data-dismiss]").forEach(b => {
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = b.dataset.dismiss;
        const list = dismissed();
        list.push(id);
        localStorage.setItem(NOTIF_STORAGE_KEY, JSON.stringify(list));
        renderPanel();
      });
    });
  }

  btn.addEventListener("click", () => {
    panel.classList.toggle("hidden");
    if (!panel.classList.contains("hidden")) renderPanel();
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".notif-wrap")) panel.classList.add("hidden");
  });
  renderPanel();
}

/* =====================================================
   INIT
===================================================== */
function renderAll() {
  renderDashboard();
  renderJadwalTabs();
  renderJadwalList();
  renderPiket();
  renderSiswa();
  renderGuru();
  renderStruktur();
  renderTugas();
  renderPengumuman();
  renderEvent();
  renderAbsensi();
  renderKas();
  renderGaleri();
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initSidebar();
  initModal();
  initLightbox();
  initGlobalSearch();
  initNotifications();
  initSiswaControls();
  initTugasControls();
  initPengumumanEventControls();
  initKasControls();
  initAbsensiControls();

  updateClock();
  setInterval(() => {
    updateClock();
    renderNextClass(schedule[todayName()] || []);
    renderJadwalList();
  }, 1000 * 30);
  setInterval(updateClock, 1000);

  renderAll();
  goToPage("dashboard");

  setTimeout(() => showToast("Selamat datang di Classroom Digital XI.5 IPS!", "success"), 500);
});