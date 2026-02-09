import React, { useMemo } from "react";
import Navbar from "../../components/UserNavbar";
import Footer from "../../components/Footer";
import UserFeaturedTickets from "../../components/UserFeaturedTicket.jsx";
import { useNavigate } from "react-router-dom";
import { eventMock } from "../../data/mock.js";
import bgConcert from "../../assets/concert.jpg";

export default function UserEvent() {
  const navigate = useNavigate();

  const seatRouteByTierId = useMemo(
    () => ({
      "vip-pink": "/user/seats/vip-pink",
      "cat-1-sky": "/user/seats/cat-1-sky",
      festival: "/user/seats/festival",
    }),
    []
  );

  const handleBuyNow = ({ tierId, qty = 1, date }) => {
    const base = seatRouteByTierId[tierId];

    if (!base) {
      console.warn("No route mapping for tierId:", tierId);
      const el = document.getElementById("seat-tiers");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const selectedDate = date || eventMock.dates?.[0]?.value || "";
    const q = new URLSearchParams({
      date: selectedDate,
      qty: String(Math.max(1, Number(qty || 1))),
    }).toString();

    navigate(`${base}?${q}`);
  };

  return (
    <div
      className="min-h-screen bg-skysoft-50"
      style={{
        backgroundImage: `url(${bgConcert})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />

      <div className="bg-white/65">
        <div className="max-w-6xl mx-auto px-4 pt-8 pb-6">
          <h1 className="text-5xl font-black text-slate-900 text-center">Our Event</h1>
          <p className="mt-2 text-slate-800 text-center">
            Halaman event khusus user untuk cek info dan langsung beli tiket.
          </p>

          <div className="mt-6 rounded-[28px] border border-skysoft-200 bg-skysoft-100/90 shadow-soft overflow-hidden">
            <div className="p-6 md:p-8 grid md:grid-cols-[1.4fr_1fr] gap-6 items-start">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white/70 border border-white/60 text-xs font-black text-skysoft-700">
                  User access • Ticket ready
                </div>

                <h2 className="mt-4 text-2xl md:text-3xl font-black text-slate-900">
                  {eventMock.title || "Heart2Hearts is coming to Jakarta!"}
                </h2>

                <p className="mt-3 text-slate-700 leading-relaxed">
                  Kamu sudah login, jadi kamu bisa{" "}
                  <span className="font-black">langsung war ticket</span> tanpa ribet. Pilih seat tier favoritmu
                  dan siapin QR e-ticket untuk masuk venue.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-2xl bg-white/70 border border-white/60 text-xs font-black text-slate-900">
                    Venue: {eventMock.venue}
                  </span>
                  <span className="px-3 py-1.5 rounded-2xl bg-white/70 border border-white/60 text-xs font-black text-slate-900">
                    Date: {eventMock.dates?.map((d) => d.label).join(" • ") || "14–15 Februari 2026"}
                  </span>
                  <span className="px-3 py-1.5 rounded-2xl bg-white/70 border border-white/60 text-xs font-black text-slate-900">
                    E-ticket: QR Code
                  </span>
                </div>

                <div className="mt-6 rounded-[22px] bg-white/70 border border-white/60 p-4">
                  <div className="font-black text-slate-900">Quick tips</div>
                  <div className="mt-1 text-slate-700">
                    Pilih seat tier dulu, lanjut checkout, dan pastikan email kamu aktif buat nerima QR e-ticket.
                  </div>
                </div>
              </div>

              <div className="rounded-[24px] bg-white/70 border border-white/60 p-5">
                <div className="text-xs font-black text-slate-900 tracking-wider">USER ACTION</div>

                <div className="mt-4 grid gap-3">
                  <InfoRow label="Status" value="Logged in" />
                  <InfoRow label="Access" value="Can purchase tickets" />
                  <InfoRow label="Delivery" value="Email + QR e-ticket" />
                  <InfoRow label="Support" value="Help Center" />
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("seat-tiers");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="mt-6 w-full py-3 rounded-2xl bg-skysoft-600 text-white font-black shadow-soft hover:opacity-95"
                >
                  Pilih Seat & Pricing
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/dashboard")}
                  className="mt-3 w-full py-3 rounded-2xl bg-white/80 border border-white/60 text-slate-900 font-black shadow-soft hover:opacity-95"
                >
                  Lihat Ticket Saya
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="seat-tiers">
          <UserFeaturedTickets onBuyNow={handleBuyNow} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 text-sm">
      <div className="text-slate-600">{label}</div>
      <div className="font-black text-slate-900 text-right">
        {value}
      </div>
    </div>
  );
}
