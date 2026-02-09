export const eventMock = {
  id: "heart2hearts-2026",
  title: "Heart2Hearts Concert",
  city: "Jakarta",
  venue: "GBK Stadium, Jakarta",
  dates: [
    { id: "day1", value: "2026-02-14", label: "14 Februari 2026" },
    { id: "day2", value: "2026-02-15", label: "15 Februari 2026" },
  ],
  tiers: [
    {
      id: "vip-pink",
      name: "VIP",
      price: "Rp 2.500.000",
      desc: "Best view + akses eksklusif paling dekat panggung.",
      perks: ["Best view", "Priority entry", "Merch pack", "QR e-ticket"],
    },
    {
      id: "cat-1-sky",
      name: "ADVANCE",
      price: "Rp 1.750.000",
      desc: "Tribune utama, view nyaman dan value terbaik.",
      perks: ["Tribune utama", "Entry reguler", "Akses merch", "QR e-ticket"],
    },
    {
      id: "festival",
      name: "REGULER",
      price: "Rp 1.250.000",
      desc: "Standing area paling seru buat sing-along.",
      perks: ["Standing area", "First come", "Akses merch", "QR e-ticket"],
    },
  ],
};

export const featuredTickets = [
  {
    city: "Jakarta",
    venue: "GBK Stadium",
    date: "2026-05-21",
    tiers: [
      { name: "VIP", price: "Rp 2.500.000" },
      { name: "ADVANCE", price: "Rp 1.750.000" },
      { name: "REGULER", price: "Rp 1.250.000" },
    ],
  },
];

export const popularShows = [
  { title: "H2H: Skywave Night", city: "Jakarta" },
  { title: "H2H: Pink Pulse Live", city: "Jakarta" },
  { title: "H2H: Hearts Unite", city: "Jakarta" },
  { title: "H2H: Fanmeet Special", city: "Yogyakarta" },
  { title: "H2H: Encore Session", city: "Bali" },
];

export const testimoni = [
  {
    name: "Alya Putri",
    text: "Checkout cepat banget, pilih kursi juga jelas. Warna websitenya cute tapi tetap clean!",
  },
  {
    name: "Raka Pratama",
    text: "Notifikasi email langsung masuk. Aku suka bagian rekomendasi show-nya.",
  },
  {
    name: "Nabila Sari",
    text: "Tampilan mobile-nya rapi. Aku beli VIP Pink tanpa bingung.",
  },
];

export const userDashboardMock = {
  user: {
    name: "Aji",
    email: "ajin7133@gmail.com",
  },
  registration: {
    id: "reg-001",
    status: "PAID", // "NONE" | "PENDING" | "PAID" | "CHECKED_IN"
    tierId: "vip-pink",
    qty: 2,
    dayValue: "2026-02-14",
    purchasedAt: "2026-02-06T19:20:00Z",
    checkInAt: null,
  },
};

import fanlightImg from "../assets/merch/Fanlight.webp";
import photobookImg from "../assets/merch/Photobook.webp";
import albumImg from "../assets/merch/MiniAlbum.webp";
import tshirtImg from "../assets/merch/Tshirt.webp";

export const merchProducts = [
  {
    id: "fanlight",
    name: "H2H Fanlight",
    category: "Accessories",
    desc: "Fanlight official dengan desain unik dan fitur canggih.",
    detail:
      "Nyalakan momen konsermu bareng Heart2Hearts dengan fanlight yang nyaman digenggam dan tampil elegan saat menyala. Warna cahaya bisa kamu atur untuk menyesuaikan mood lagu dari vibe hangat pas ballad sampai terang maksimal saat lagu hype. Cocok buat fanchant, recording fancam, sampai jadi pajangan cantik di kamar sebagai simbol ‘we’re in this together, heart to heart’.",
    badge: "NEW",
    image: fanlightImg,
  },
  {
    id: "photobook",
    name: "Photobook H2H",
    category: "Photobook",
    desc: "Photobook official dengan kualitas gambar tinggi dan desain eksklusif.",
    detail:
      "Photobook koleksi wajib buat para Heartsu dibuat dengan kualitas cetak tajam dan tone warna yang rich, bikin tiap ekspresi dan detail styling terlihat hidup. Berisi 100 halaman foto eksklusif dari beberapa konsep pemotretan: mulai dari look yang soft & dreamy sampai aura stage-ready yang bold. Pas buat kamu yang suka ‘rewatch’ era comeback, cari bias-wrecker moment, atau sekadar menikmati visual Heart2Hearts kapan pun tanpa nunggu timeline rame.",
    badge: "NEW",
    image: photobookImg,
  },
  {
    id: "mini-album",
    name: "Mini Album H2H",
    category: "Album",
    desc: "Mini album official dengan playlist yang lengkap dan desain eksklusif.",
    detail:
      "Mini album yang dirancang buat nemenin harimu dari track pertama sampai terakhir—ringkas, tapi berasa penuh. Di dalamnya ada 1 CD berisi 5 lagu hits Heart2Hearts yang siap kamu putar ulang saat ngerjain tugas, commute, atau healing malam. Packaging-nya dibuat collectible dengan desain eksklusif yang cocok dipajang bareng koleksi era-era H2H lainnya—biar setiap comeback terasa ‘nempel’ dan jadi bagian dari cerita fandom kamu.",
    badge: "NEW",
    image: albumImg,
  },
  {
    id: "tshirt-set",
    name: "Tshirt Set",
    category: "Apparel",
    desc: "Tshirt official dengan desain eksklusif dan ada foto idolamu.",
    detail:
      "Tshirt yang siap jadi ‘uniform’ fandom kamu—desainnya clean tapi statement, dengan visual Heart2Hearts yang bikin look kamu langsung keliatan stan approved. Bahannya nyaman dipakai harian: buat nonton konten H2H maraton, datang ke event, sampai mix & match streetwear. Set berisi 1 tshirt ukuran M/L/XL sesuai pilihan, dan paling pas dipadukan dengan aksesori favoritmu biar vibe kamu makin ‘heart to heart’.",
    badge: "NEW",
    image: tshirtImg,
  },
];



export const adminStats = [
  { label: "Total Sales", value: "1,457", sub: "Ticket sold", icon: "💳" },
  { label: "Users", value: "1,457", sub: "Registered users", icon: "👤" },
  { label: "Open Rate", value: "1,457%", sub: "Opening Web", icon: "📬" },
  { label: "Review Score", value: "4.8", sub: "Web Performance", icon: "🖱️" },
];

export const adminInboxItems = [
  { name: "Emily Butler", tag: "new", msg: "I’m having trouble accessing my QR ticket." },
  { name: "Eugenia Bates", tag: "open", msg: "Can I change the concert date after purchase?" },
  { name: "Brett Jennings", tag: "open", msg: "Payment success but ticket not showing in dashboard." },
  { name: "Cory Chandler", tag: "new", msg: "Is VIP merch pack available on site pickup?" },
  { name: "Rockson Rhodes", tag: "open", msg: "Need invoice for my company purchase." },
];

// ✅ ADMIN MOCK: daftar pembeli ticket (nanti ganti dari backend)
export const adminTicketBuyersMock = [
  {
    id: "U-001",
    name: "Aji",
    email: "aji@email.com",
    status: "PAID",
    tierId: "vip-pink",
    tierName: "VIP",
    qty: 2,
    date: "2026-02-14",

    // ✅ tambahan check-in (scan QR)
    checkedIn: true,
    checkedInAt: "2026-02-14 17:42",
  },
  {
    id: "U-002",
    name: "Nandana",
    email: "nandana@email.com",
    status: "PAID",
    tierId: "cat-1-sky",
    tierName: "ADVANCE",
    qty: 1,
    date: "2026-02-15",

    checkedIn: false,
    checkedInAt: null,
  },
  {
    id: "U-003",
    name: "Raka",
    email: "raka@email.com",
    status: "PENDING",
    tierId: "festival",
    tierName: "REGULER",
    qty: 1,
    date: "2026-02-14",

    checkedIn: false,
    checkedInAt: null,
  },
  {
    id: "U-004",
    name: "Sinta",
    email: "sinta@email.com",
    status: "UNPAID",
    tierId: "cat-1-sky",
    tierName: "ADVANCE",
    qty: 2,
    date: "2026-02-15",

    checkedIn: false,
    checkedInAt: null,
  },
  {
    id: "U-005",
    name: "Dimas",
    email: "dimas@email.com",
    status: "PAID",
    tierId: "festival",
    tierName: "REGULER",
    qty: 1,
    date: "2026-02-14",

    checkedIn: true,
    checkedInAt: "2026-02-14 18:10",
  },
];
