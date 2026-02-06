import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import UserNavbar from "../../components/UserNavbar";
import Footer from "../../components/Footer";
import QrTicketModal from "../../components/QrTicketModal";
import { eventMock } from "../../data/mock.js";

export default function UserDashboard() {
  const userName = useMemo(() => {
    const raw = localStorage.getItem("h2h_auth");
    const parsed = raw ? JSON.parse(raw) : null;
    return parsed?.name || "Aji";
  }, []);

  // mock data pembelian (nanti dari /api/registrations/my)
  const [ticket] = useState(() => ({
    registrationId: "REG-2026-00021",
    status: "PAID",
    tierId: "vip-pink",
    qty: 2,
    city: eventMock.city,
    dateValue: eventMock.dates?.[0]?.value || "2026-02-14",
    eventTitle: eventMock.title,
    venue: eventMock.venue,
    dateLabel: eventMock.dates?.[0]?.label || "14 Februari",
  }));

  const tier = useMemo(() => eventMock.tiers.find((t) => t.id === ticket.tierId), [ticket.tierId]);

  const [qrOpen, setQrOpen] = useState(false);

  return (
    <motion.div
      className="min-h-screen bg-[#F7FBFF]"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <UserNavbar />

      {/* HERO */}
      <section className="w-full">
        <div className="max-w-6xl mx-auto px-4 pt-8 pb-6">
          <div className="rounded-[28px] overflow-hidden border border-white/70 shadow-soft bg-white">
            <div className="h-44 bg-gradient-to-r from-skysoft-600/80 via-white to-pinkpop-500/25" />
            <div className="p-6 md:p-8 -mt-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-skysoft-200 shadow-soft">
                <span className="h-2 w-2 rounded-full bg-pinkpop-500" />
                <span className="text-xs font-black text-slate-900 tracking-wider">
                  USER DASHBOARD
                </span>
              </div>

              <h1 className="mt-4 text-3xl md:text-4xl font-black text-slate-900">
                Hi, {userName} <span className="inline-block">👋</span>
              </h1>

              <p className="mt-2 text-slate-600 max-w-2xl">
                Pantau status pembelian ticket, akses QR e-ticket, dan lihat detail konser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="rounded-[28px] bg-white border border-white/70 shadow-soft overflow-hidden">
          <div className="h-20 bg-gradient-to-r from-skysoft-200/70 via-white to-pinkpop-500/25" />

          <div className="p-6 md:p-8 -mt-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-black text-skysoft-700">YOUR TICKET</div>
                <h2 className="mt-1 text-2xl font-black text-slate-900">{ticket.eventTitle}</h2>
                <div className="mt-1 text-sm text-slate-600">
                  {ticket.venue} • {ticket.dateLabel} • {ticket.city}
                </div>
              </div>

              <span className="px-4 py-1.5 rounded-2xl bg-skysoft-100 text-skysoft-700 text-xs font-black">
                {ticket.status}
              </span>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard label="Seat Tier" value={tier?.name || "-"} />
              <StatCard label="Qty" value={`${ticket.qty}`} />
              <StatCard label="City" value={ticket.city} />
              <StatCard label="Price" value={tier?.price || "-"} />
            </div>

            <div className="mt-6 rounded-[22px] bg-skysoft-50 border border-skysoft-100 p-5">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="font-black text-slate-900 flex items-center gap-2">
                    E-ticket kamu siap <span>✅</span>
                  </div>
                  <div className="text-sm text-slate-600 mt-1">
                    Klik tombol untuk lihat QR dan detail registrasi.
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setQrOpen(true)}
                    className="px-5 py-3 rounded-2xl bg-slate-900 text-white font-black shadow-soft hover:opacity-95 transition"
                  >
                    View E-Ticket (QR)
                  </button>

                  <button
                    type="button"
                    onClick={() => alert("TODO: route ke /events atau /events/:id")}
                    className="px-5 py-3 rounded-2xl bg-white border border-skysoft-200 text-skysoft-700 font-black hover:bg-skysoft-50 transition"
                  >
                    Event Detail
                  </button>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <StepCard title="Order created" desc="Kamu memilih seat & qty." active percent={100} />
                <StepCard title="Payment verified" desc="Tiket aktif & QR tersedia." active percent={100} />
                <StepCard title="Checked-in" desc="QR sudah discan di venue." active={false} percent={0} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Modal QR (tanpa pindah halaman) */}
      <QrTicketModal
        open={qrOpen}
        onClose={() => setQrOpen(false)}
        ticket={{
          registrationId: ticket.registrationId,
          status: ticket.status,
          tierName: tier?.name,
          qty: ticket.qty,
          eventTitle: ticket.eventTitle,
          venue: ticket.venue,
          dateLabel: ticket.dateLabel,
          qrValue: `H2H|${ticket.registrationId}|${tier?.name}|${ticket.qty}|${ticket.dateValue}`,
        }}
      />

      <Footer />
    </motion.div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl bg-white border border-skysoft-100 p-5">
      <div className="text-xs text-slate-600">{label}</div>
      <div className="mt-1 font-black text-slate-900">{value}</div>
    </div>
  );
}

function StepCard({ title, desc, active, percent }) {
  return (
    <div className="rounded-2xl bg-white border border-skysoft-100 p-5">
      <div className="font-black text-slate-900">{title}</div>
      <div className="mt-1 text-xs text-slate-600">{desc}</div>

      <div className="mt-4 h-2 rounded-full bg-slate-100 overflow-hidden">
        <div
          className={`h-full rounded-full ${active ? "bg-skysoft-600" : "bg-slate-300"}`}
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="mt-2 text-[11px] text-slate-500">{active ? "Active" : "Pending"}</div>
    </div>
  );
}
