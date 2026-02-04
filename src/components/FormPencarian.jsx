import { useMemo, useState } from "react";
import { featuredTickets } from "../data/mock.js";

export default function FormPencarian() {
  const cities = useMemo(() => featuredTickets.map((x) => x.city), []);
  const [city, setCity] = useState(cities[0] ?? "");
  const [date, setDate] = useState("");
  const [tier, setTier] = useState("VIP Pink");
  const [qty, setQty] = useState(1);

  const tiers = useMemo(() => {
    const found = featuredTickets.find((x) => x.city === city);
    return found?.tiers?.map((t) => t.name) ?? ["VIP Pink"];
  }, [city]);

  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-2xl bg-skysoft-600/90" />
        <div>
          <div className="font-black text-slate-900">Find Your Ticket</div>
          <div className="text-xs text-slate-600">Cari konser dan langsung checkout</div>
        </div>
      </div>

      <div className="mt-4 grid gap-3">
        <div>
          <label className="text-xs font-semibold text-slate-700">City</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-1 w-full px-3 py-2 rounded-2xl bg-white border border-skysoft-200 outline-none focus:ring-4 focus:ring-skysoft-200"
          >
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-semibold text-slate-700">Date</label>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="mt-1 w-full px-3 py-2 rounded-2xl bg-white border border-skysoft-200 outline-none focus:ring-4 focus:ring-skysoft-200"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700">Qty</label>
            <input
              value={qty}
              onChange={(e) => setQty(Math.max(1, Number(e.target.value || 1)))}
              type="number"
              min={1}
              max={10}
              className="mt-1 w-full px-3 py-2 rounded-2xl bg-white border border-skysoft-200 outline-none focus:ring-4 focus:ring-skysoft-200"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-slate-700">Tier</label>
          <select
            value={tier}
            onChange={(e) => setTier(e.target.value)}
            className="mt-1 w-full px-3 py-2 rounded-2xl bg-white border border-skysoft-200 outline-none focus:ring-4 focus:ring-skysoft-200"
          >
            {tiers.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={() => alert(`Checkout: ${city} • ${date || "select date"} • ${tier} • Qty ${qty}`)}
          className="mt-1 w-full py-3 rounded-2xl bg-pinkpop-500 text-white font-black shadow-soft hover:opacity-95"
        >
          Book Ticket Now
        </button>
      </div>
    </div>
  );
}
