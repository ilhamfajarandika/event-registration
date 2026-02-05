import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar.jsx";
import { eventMock } from "../../data/mock.js";

export default function VipPinkSeat() {
  const tier = useMemo(() => eventMock.tiers.find((t) => t.id === "vip-pink"), []);
  const [qty, setQty] = useState(1);
  const [day, setDay] = useState(eventMock.dates[0]?.value ?? "");
  const dayLabel = eventMock.dates.find((d) => d.value === day)?.label ?? day;

  if (!tier) return null;

  return (
    <motion.div
      className="min-h-screen bg-[#FFF7FB]" // ✅ beda background (VIP lebih pink-soft)
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Navbar />

      <section className="max-w-6xl mx-auto px-4 pt-10 pb-12">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT CARD */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="rounded-[28px] bg-white border border-white/70 shadow-soft overflow-hidden"
          >
            {/* ✅ VIP gradient */}
            <div className="h-24 bg-gradient-to-r from-pinkpop-500/85 via-white to-skysoft-300/60" />

            <div className="p-8">
              <div className="text-xs font-black text-pinkpop-600">VIP PINK</div>
              <h1 className="mt-3 text-4xl font-black text-slate-900">{tier.name}</h1>
              <p className="mt-2 text-slate-600 text-lg">{tier.desc}</p>

              {/* 4 info cards (VIP tone) */}
              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                <InfoPill accent="pink" title="Best view" text="Paling dekat panggung, detail maksimal." />
                <InfoPill accent="pink" title="Priority entry" text="Masuk venue lebih dulu, anti antri." />
                <InfoPill accent="pink" title="Merch pack" text="Bonus merch eksklusif VIP." />
                <InfoPill accent="pink" title="QR e-ticket" text="Scan cepat, aman, dan praktis." />
              </div>

              {/* Venue + price + perks */}
              <div className="mt-8 rounded-[24px] bg-pinkpop-500/10 border border-pinkpop-500/20 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-lg font-black text-slate-900">{eventMock.venue}</div>
                  <div className="text-2xl font-black text-slate-900">{tier.price}</div>
                </div>

                <ul className="mt-5 space-y-3">
                  {tier.perks.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-slate-700">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-pinkpop-500" />
                      <span className="text-base">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* bottom nav buttons */}
              <div className="mt-8 flex gap-4">
                <HoverLinkButton to="/seats/cat-1-sky" accent="pink">View Cat 1</HoverLinkButton>
                <HoverLinkButton to="/seats/festival" accent="pink">View Festival</HoverLinkButton>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CHECKOUT CARD */}
          <CheckoutCard
            tier={tier}
            day={day}
            setDay={setDay}
            qty={qty}
            setQty={setQty}
            dayLabel={dayLabel}
            accent="pink"
          />
        </div>
      </section>
    </motion.div>
  );
}

function InfoPill({ title, text, accent = "pink" }) {
  const border = accent === "pink" ? "border-pinkpop-500/20" : "border-skysoft-100";
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

function CheckoutCard({ tier, day, setDay, qty, setQty, dayLabel, accent = "pink" }) {
  const btn = accent === "pink" ? "bg-pinkpop-500" : "bg-skysoft-600";
  const ring = accent === "pink" ? "focus:ring-pinkpop-500/20" : "focus:ring-skysoft-200";
  const border = accent === "pink" ? "border-pinkpop-500/20" : "border-skysoft-200";
  const summaryBg = accent === "pink" ? "bg-pinkpop-500/10 border-pinkpop-500/20" : "bg-skysoft-50 border-skysoft-100";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="rounded-[28px] bg-white border border-white/70 shadow-soft overflow-hidden"
    >
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
              <div className="text-2xl font-black text-slate-900">
                {calcTotal(tier.price, qty)}
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            onClick={() => alert(`Checkout: ${tier.name} • ${dayLabel} • Qty ${qty}`)}
            className={`w-full py-5 rounded-2xl ${btn} text-white font-black shadow-soft hover:opacity-95 text-lg`}
          >
            Buy Ticket
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

function HoverLinkButton({ to, children, accent = "pink" }) {
  const border = accent === "pink" ? "border-pinkpop-500/30" : "border-skysoft-200";
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.99 }}>
      <Link
        to={to}
        className={`inline-flex px-6 py-3 rounded-2xl bg-white border ${border} text-slate-900 font-black hover:bg-white/70`}
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
