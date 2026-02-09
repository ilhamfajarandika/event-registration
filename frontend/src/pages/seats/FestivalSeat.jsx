import React, { useMemo, useState } from "react";
import { useLocation, useNavigate, useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar.jsx";
import { eventMock } from "../../data/mock.js";

export default function FestivalSeat() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sp] = useSearchParams();

  const tier = useMemo(() => eventMock.tiers.find((t) => t.id === "festival"), []);

  const initialQty = Math.max(1, Number(sp.get("qty") || 1));
  const initialDate = sp.get("date") || eventMock.dates[0]?.value || "";

  const [qty, setQty] = useState(initialQty);
  const [day, setDay] = useState(initialDate);

  const dayLabel = eventMock.dates.find((d) => d.value === day)?.label ?? day;

  const handleBuy = () => {
    const raw = localStorage.getItem("h2h_auth");
    const auth = raw ? JSON.parse(raw) : null;
    const isLoggedIn = Boolean(auth?.isLoggedIn);

    if (!isLoggedIn) {
      const redirectTo = `${location.pathname}?date=${encodeURIComponent(day)}&qty=${encodeURIComponent(
        qty
      )}`;
      navigate(`/login?redirect=${encodeURIComponent(redirectTo)}`);
      return;
    }

    alert(`✅ Logged in. Proceed checkout: ${tier?.name} • ${dayLabel} • Qty ${qty}`);
  };

  if (!tier) return null;

  return (
    <motion.div
      className="min-h-screen bg-[#F3FBFF]"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Navbar />

      <section className="max-w-6xl mx-auto px-4 pt-10 pb-12">
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="rounded-[28px] bg-white border border-white/70 shadow-soft overflow-hidden"
          >
            <div className="h-24 bg-gradient-to-r from-skysoft-600/85 via-white to-pinkpop-500/40" />

            <div className="p-8">
              <h1 className="mt-3 text-4xl font-black text-slate-900">{tier.name}</h1>
              <p className="mt-2 text-slate-600 text-lg">{tier.desc}</p>

              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                <InfoPill accent="sky" title="Standing area" text="Paling seru buat sing-along." />
                <InfoPill accent="sky" title="Hype vibes" text="Feel crowd & energy konser maksimal." />
                <InfoPill accent="sky" title="Merch access" text="Tetap bisa beli official merch." />
                <InfoPill accent="sky" title="QR e-ticket" text="Scan masuk lebih cepat." />
              </div>

              <div className="mt-8 rounded-[24px] bg-skysoft-50 border border-skysoft-100 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-lg font-black text-slate-900">{eventMock.venue}</div>
                  <div className="text-2xl font-black text-slate-900">{tier.price}</div>
                </div>

                <ul className="mt-5 space-y-3">
                  {tier.perks.map((p, idx) => (
                    <li key={p} className="flex items-start gap-3 text-slate-700">
                      <span
                        className={`mt-2 h-2.5 w-2.5 rounded-full ${
                          idx % 2 === 0 ? "bg-skysoft-600" : "bg-pinkpop-500"
                        }`}
                      />
                      <span className="text-base">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <CheckoutCard
            tier={tier}
            day={day}
            setDay={setDay}
            qty={qty}
            setQty={setQty}
            dayLabel={dayLabel}
            accent="sky"
            onClose={() => {
              if (window.history.length > 1) navigate(-1);
              else navigate("/events");
            }}
            onBuy={handleBuy}
          />
        </div>
      </section>
    </motion.div>
  );
}

function InfoPill({ title, text, accent = "sky" }) {
  const border = accent === "sky" ? "border-skysoft-100" : "border-pinkpop-500/20";
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={`rounded-[18px] bg-white border ${border} p-5`}
    >
      <div className="text-lg font-black text-slate-900">{title}</div>
      <div className="mt-1 text-sm text-slate-600">{text}</div>
    </motion.div>
  );
}

function CheckoutCard({ tier, day, setDay, qty, setQty, dayLabel, accent = "sky", onClose, onBuy }) {
  const btn = accent === "sky" ? "bg-skysoft-600" : "bg-pinkpop-500";
  const ring = accent === "sky" ? "focus:ring-skysoft-200" : "focus:ring-pinkpop-500/20";
  const border = accent === "sky" ? "border-skysoft-200" : "border-pinkpop-500/20";
  const summaryBg =
    accent === "sky" ? "bg-skysoft-50 border-skysoft-100" : "bg-pinkpop-500/10 border-pinkpop-500/20";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="rounded-[28px] bg-white border border-white/70 shadow-soft overflow-hidden relative"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 h-11 w-11 rounded-2xl bg-white border border-slate-200 shadow-soft hover:bg-slate-50 transition font-black text-slate-900"
        aria-label="Close checkout"
        title="Close"
      >
        ✕
      </button>

      <div className="p-8">
        <div className="text-xs font-black text-slate-900 tracking-wide">CHECKOUT</div>
        <h2 className="mt-4 text-4xl font-black text-slate-900">Buy {tier.name}</h2>

        <div className="mt-10 grid gap-6">
          <div>
            <label className="text-sm font-semibold text-slate-700">Tanggal</label>
            <select
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className={`mt-3 w-full px-4 py-4 rounded-2xl bg-white border ${border} outline-none focus:ring-4 ${ring} text-lg`}
            >
              {eventMock.dates.map((d) => (
                <option key={d.id} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-700">Qty</label>
            <input
              value={qty}
              onChange={(e) => setQty(Math.max(1, Number(e.target.value || 1)))}
              type="number"
              min={1}
              max={10}
              className={`mt-3 w-full px-4 py-4 rounded-2xl bg-white border ${border} outline-none focus:ring-4 ${ring} text-lg`}
            />
          </div>

          <div className={`rounded-[22px] ${summaryBg} border p-6`}>
            <div className="flex items-center justify-between">
              <div className="text-lg font-black text-slate-900">Summary</div>
              <div className="text-sm text-slate-600">{dayLabel}</div>
            </div>

            <div className="mt-6 space-y-4 text-base">
              <Row label="Tier" value={tier.name} />
              <Row label="Qty" value={`${qty}`} />
              <Row label="Price" value={tier.price} />
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/50 pt-6">
              <div className="text-base text-slate-600">Total</div>
              <div className="text-2xl font-black text-slate-900">{calcTotal(tier.price, qty)}</div>
            </div>
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            onClick={onBuy}
            className={`w-full py-5 rounded-2xl ${btn} text-white font-black shadow-soft hover:opacity-95 text-lg`}
          >
            Buy Ticket
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function HoverLinkButton({ to, children, accent = "sky" }) {
  const border = accent === "sky" ? "border-skysoft-200" : "border-pinkpop-500/30";
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }}>
      <Link
        to={to}
        className={`inline-flex px-6 py-3 rounded-2xl bg-white border ${border} text-slate-900 font-black hover:bg-skysoft-50`}
      >
        {children}
      </Link>
    </motion.div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="text-slate-600">{label}</div>
      <div className="font-black text-slate-900 text-right">{value}</div>
    </div>
  );
}

function calcTotal(priceText, qty) {
  const num = Number(String(priceText).replace(/[^\d]/g, "")) || 0;
  const total = num * qty;
  return "Rp " + total.toLocaleString("id-ID");
}
