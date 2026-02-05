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
      name: "VIP Pink",
      price: "Rp 2.500.000",
      desc: "Best view + akses eksklusif paling dekat panggung.",
      perks: ["Best view", "Priority entry", "Merch pack", "QR e-ticket"],
    },
    {
      id: "cat-1-sky",
      name: "Cat 1 Sky",
      price: "Rp 1.750.000",
      desc: "Tribune utama, view nyaman dan value terbaik.",
      perks: ["Tribune utama", "Entry reguler", "Akses merch", "QR e-ticket"],
    },
    {
      id: "festival",
      name: "Festival",
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
      { name: "VIP Pink", price: "Rp 2.500.000" },
      { name: "Cat 1 Sky", price: "Rp 1.750.000" },
      { name: "Festival", price: "Rp 1.250.000" },
    ],
  },
];

export const popularShows = [
  { title: "H2H: Skywave Night", city: "Jakarta" },
  { title: "H2H: Pink Pulse Live", city: "Bandung" },
  { title: "H2H: Hearts Unite", city: "Surabaya" },
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
