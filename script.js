/* =====================================================
   XI.5 IPS — Digital Class Experience (Landing Page)
   Vanilla JS
===================================================== */

const AVATAR_COLORS = ["#6C5CE7", "#22D3EE", "#FFB020", "#FF6B8B", "#4BC190", "#5B8DEF"];
function colorFor(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}
function initials(name) { return name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase(); }

/* ---------- DUMMY DATA ---------- */
const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const scheduleByDay = {
  Monday: [
    { time: "07:00 - 08:30", subject: "Agama" },
    { time: "08:30 - 10:00", subject: "B. Inggris Lanjut" },
    { time: "10:15 - 11:45", subject: "Penjas" },
    { time: "12:30 - 14:00", subject: "PKN" },
    { time: "14:00 - 15:30", subject: "Seni Musik" }
  ],
  Tuesday: [
    { time: "07:00 - 08:30", subject: "MTK Wajib" },
    { time: "08:30 - 10:45", subject: "Informatika" },
    { time: "10:45 - 13:00", subject: "Ekonomi" },
    { time: "13:00 - 15:30", subject: "Bahasa Indonesia" }
  ],
  Wednesday: [
    { time: "07:00 - 08:30", subject: "Ekonomi" },
    { time: "08:30 - 10:00", subject: "Sejarah" },
    { time: "10:00 - 11:45", subject: "Informatika" },
    { time: "12:30 - 14:00", subject: "B. Inggris Lanjut" },
    { time: "14:00 - 15:30", subject: "MTK Wajib" }
  ],
  Thursday: [
    { time: "07:00 - 09:15", subject: "B. Inggris Wajib" },
    { time: "09:15 - 11:45", subject: "MTK Lanjut" },
    { time: "12:30 - 13:15", subject: "BK" },
    { time: "13:15 - 14:00", subject: "B. Jawa" },
    { time: "14:00 - 15:30", subject: "Geografi" }
  ],
  Friday: [
    { time: "07:00 - 08:30", subject: "MTK Wajib" },
    { time: "08:30 - 10:00", subject: "B. Indonesia" },
    { time: "10:15 - 11:00", subject: "MTK Lanjut" }
  ]
};

// Isi field "photo" di bawah dengan path/URL foto masing-masing siswa untuk
// menggantikan inisial nama. Kosongkan ("") kalau belum ada fotonya.
const members = [
  { name: "Afifah Arthanamidya", nis: "0108905785", gender: "P", role: "Member", photo: "" },
  { name: "Agustin Sasi Rahmadani", nis: "0097731447", gender: "P", role: "Member"  , photo: "" },
  { name: "Algis Danadyaksa", nis: "0101655333", gender: "L", role: "Ketua Kelas" , photo: "" }, 
  { name: "Ardianyah Effendi", nis: "0091325951", gender: "L", role: "Member" , photo: "" },
  { name: "Asyla Nayranee Ardhi", nis: "0103419235", gender: "P", role: "Member" , photo: "" },
  { name: "Bagus Rizky Ramadhani", nis: "0104553024", gender: "L", role: "Member", photo: "" },
  { name: "Briliyan Azzora Saffir", nis: "0098113636", gender: "P", role: "Sekretaris 2" , photo: "" },
  { name: "Christian Henoch Dhiyan Prayogo", nis: "0105663731", gender: "L", role: "Member", photo: "" },
  { name: "Diego Yeremi Pasaribu", nis: "0109018790", gender: "L", role: "Member" , photo: "" },
  { name: "Fariz Atha Pratama", nis: "0099189975", gender: "L", role: "Member" , photo: "" },
  { name: "Farrel Jo Priatgoro", nis: "0099227486", gender: "L", role: "Member"  , photo: "" },
  { name: "Febrian Debi Al Rasyid", nis: "0102961813", gender: "L", role: "Member"  , photo: "" },
  { name: "Jaka Satriya", nis: "0104354085", gender: "L", role: "Member" , photo: "" },
  { name: "Junior Satya Wardhana", nis: "0107966954", gender: "L", role: "Member"  , photo: "" },
  { name: "Kenzo Fatih Adzhani", nis: "0099664024", gender: "L", role: "Member" , photo: "" },
  { name: "Lionel Andreas Messi Al Farizi", nis: "0107531248", gender: "L", role: "Member", photo: "" },
  { name: "Livia Melvin Andhika", nis: "0094583156", gender: "P", role: "Member" , photo: "" },
  { name: "Moh Farkhan Effendi", nis: "0092153579", gender: "L", role: "Member" , photo: "" },
  { name: "Muhammad Farrel Maulana Azka", nis: "0093413795", gender: "L", role: "Wakil Ketua" , photo: "" },
  { name: "Muhammad Favian Alrie Putra", nis: "0095176805", gender: "L", role: "Member" , photo: "" },
  { name: "Muhammad Masykur Abas Maulana", nis: "0093273242", gender: "L", role: "Member" , photo: "" },
  { name: "Muhammad Tazakka Nurriz", nis: "0109307824", gender: "L", role: "Member"  , photo: "" },
  { name: "Naura Salsabilla", nis: "0096801550", gender: "P", role: "Member" , photo: "" },
  { name: "Nur Rima Patria Rahmawani", nis: "0096742539", gender: "P", role: "Member" , photo: "" },
  { name: "Rafa Fawwaz Maulana", nis: "0109896127", gender: "L", role: "Member" , photo: "" },
  { name: "Rajwa Azaria", nis: "0102322221", gender: "P", role: "Member" , photo: "" },
  { name: "Reyna Majidda", nis: "0108823868", gender: "P", role: "Bendahara 2"  , photo: "" },
  { name: "Ridho Akbar Dwikana", nis: "0104341655", gender: "L", role: "Member" , photo: "" },
  { name: "Sawwa Safaroh", nis: "01004263676", gender: "L", role: "Sekretaris 1" , photo: "" },
  { name: "Viola Inka Aurellya", nis: "0097674597", gender: "P", role: "" , photo: "" },
  { name: "Violetta Novia Rizky", nis: "0105917776", gender: "P", role: ""  , photo: "" },
  { name: "Yemima Quiinsya Nikita Budiman", nis: "0109271234", gender: "L", role: "" , photo: "" },
  { name: "Zulfa Al Kharima", nis: "0101234567", gender: "L", role: "Bendahara 1"  , photo: "" }
];

// Isi field "src" untuk mengganti foto contoh dengan foto asli kelas kamu
// (contoh: "assets/images/galeri/kerja-bakti.jpg"). Kosongkan untuk memakai
// foto contoh dari internet sebagai placeholder sementara.
const galleryImages = [
  { caption: "Praktikum Lab Komputer", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAkxSSMgipr6B57BO7wNTE3mQAu_rIxoWRs2EPaKxfBA&s=10", query: "classroom-computer-lab", size: "wide" },
  { caption: "Presentasi Tugas", src: "", query: "students-presentation", size: "" },
  { caption: "Kerja Bakti Kelas", src: "", query: "students-cleaning-classroom", size: "tall" },
  { caption: "Foto Bersama Wali Kelas", src: "", query: "classroom-group-photo", size: "" },
  { caption: "Study Tour", src: "", query: "students-field-trip", size: "" },
  { caption: "Class Meeting", src: "", query: "school-sports-event", size: "wide" },
  { caption: "Diskusi Kelompok", src: "", query: "students-group-study", size: "" },
  { caption: "Perayaan Ulang Tahun Kelas", src: "", query: "classroom-celebration", size: "" }
];

/* ---------- HELPERS ---------- */
function placeholderImg(query, i, w = 480, h = 480) {
  return `https://source.unsplash.com/${w}x${h}/?${encodeURIComponent(query)}&sig=${i}`;
}
function fallbackImg(label, w = 480, h = 480) {
  return `https://placehold.co/${w}x${h}/12152A/EEF0FB?text=${encodeURIComponent(label)}`;
}

/* =====================================================
   NAVBAR
===================================================== */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".mobile-item, .footer-links a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- ACTIVE NAV VIA SCROLLSPY ---------- */
function initScrollSpy() {
  const sections = ["home", "about", "features", "schedule", "gallery", "contact"]
    .map(id => document.getElementById(id))
    .filter(Boolean);
  const navItems = document.querySelectorAll(".nav-item, .mobile-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navItems.forEach(item => item.classList.toggle("active", item.dataset.section === id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach(sec => observer.observe(sec));
}

/* =====================================================
   SCROLL REVEAL
===================================================== */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(item => observer.observe(item));
}

/* =====================================================
   ANIMATED COUNTER
===================================================== */
function initCounters() {
  const counters = document.querySelectorAll(".counter");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });
  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1200;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  }
  requestAnimationFrame(tick);
}

/* =====================================================
   SCHEDULE PREVIEW
===================================================== */
function renderSchedule() {
  const now = new Date();
  const dayName = DAY_NAMES[now.getDay()];
  const displayDay = scheduleByDay[dayName] && scheduleByDay[dayName].length ? dayName : "Monday";
  document.getElementById("scheduleDayName").textContent = displayDay;

  const items = scheduleByDay[displayDay];
  const track = document.getElementById("scheduleTrack");
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  track.innerHTML = items.map((item, i) => {
    const [h, m] = item.time.split(":").map(Number);
    const startMin = h * 60 + m;
    const nextStart = items[i + 1] ? (() => { const [h2, m2] = items[i + 1].time.split(":").map(Number); return h2 * 60 + m2; })() : startMin + 90;
    const isNow = displayDay === dayName && nowMinutes >= startMin && nowMinutes < nextStart;
    const isPast = displayDay === dayName && nowMinutes >= nextStart;
    return `
      <div class="sched-card ${isNow ? "now" : ""}">
        <div class="sched-time">${item.time}</div>
        <div class="sched-subject">${item.subject}</div>
        <span class="sched-status">${isNow ? "Happening now" : isPast ? "Finished" : "Upcoming"}</span>
      </div>
    `;
  }).join("");
}

/* =====================================================
   MEMBERS
===================================================== */
function photoImgTag(member) {
  if (!member.photo) return "";
  return `<img src="${member.photo}" alt="Foto ${member.name}" loading="lazy" onerror="this.style.display='none'">`;
}

let membersShown = 6;
function renderMembers() {
  const grid = document.getElementById("memberGrid");
  const visible = members.slice(0, membersShown);
  grid.innerHTML = visible.map(m => `
    <div class="member-card">
      <div class="member-avatar" style="background:${colorFor(m.name)}">${initials(m.name)}${photoImgTag(m)}</div>
      <strong>${m.name}</strong>
      <span>${m.role}</span>
    </div>
  `).join("");
}

function initMembers() {
  renderMembers();
  const btn = document.getElementById("viewAllMembers");
  btn.addEventListener("click", () => {
    if (membersShown >= members.length) {
      membersShown = 6;
      btn.textContent = "View All Members";
    } else {
      membersShown = members.length;
      btn.textContent = "Show Less";
    }
    renderMembers();
    showToast(`Menampilkan ${membersShown} dari ${members.length} anggota kelas.`);
  });
}

/* =====================================================
   GALLERY (BENTO + LIGHTBOX)
   Manual — edit array `galleryImages` di atas untuk mengganti foto.
===================================================== */
function renderGallery() {
  const wrap = document.getElementById("bentoGallery");
  wrap.innerHTML = galleryImages.map((g, i) => {
    const src = g.src || placeholderImg(g.query, i, 500, 500);
    return `
      <div class="gallery-tile ${g.size}">
        <img src="${src}" alt="${g.caption}" loading="lazy" onerror="this.src='${fallbackImg(g.caption, 500, 500)}'">
        <span class="gt-icon"><i class="fa-solid fa-expand"></i></span>
      </div>
    `;
  }).join("");

  wrap.querySelectorAll(".gallery-tile").forEach(tile => {
    tile.addEventListener("click", () => {
      const img = tile.querySelector("img");
      openLightbox(img.src, img.alt);
    });
  });
}

function openLightbox(src, alt) {
  document.getElementById("lightboxImg").src = src;
  document.getElementById("lightboxImg").alt = alt;
  document.getElementById("lightbox").classList.add("open");
}
function initLightbox() {
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}
function closeLightbox() { document.getElementById("lightbox").classList.remove("open"); }

/* =====================================================
   TOAST
===================================================== */
function showToast(msg) {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-info"></i><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = "all .25s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateX(20px)";
    setTimeout(() => toast.remove(), 260);
  }, 3200);
}

/* =====================================================
   DASHBOARD BUTTONS (functional: scroll to preview + toast)
===================================================== */
function initDashboardButtons() {
  document.querySelectorAll("[data-open-dashboard]").forEach(btn => {
    btn.addEventListener("click", () => {
      const preview = document.getElementById("preview");
      if (preview) preview.scrollIntoView({ behavior: "smooth", block: "start" });
      showToast("Dashboard kelas siap dijelajahi di bawah ini!");
    });
  });
}

/* =====================================================
   SMOOTH SCROLL FOR ANCHORS (with sticky navbar offset)
===================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const navHeight = document.getElementById("navbar").offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight + 1;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

/* =====================================================
   FOOTER YEAR
===================================================== */
function initFooterYear() {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
}

/* =====================================================
   INIT
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initScrollSpy();
  initReveal();
  initCounters();
  initSmoothScroll();
  initDashboardButtons();
  initLightbox();
  initFooterYear();

  renderSchedule();
  initMembers();
  renderGallery();
});