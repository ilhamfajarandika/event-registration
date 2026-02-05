import { useMemo, useState } from "react";
import { featuredTickets } from "../data/mock.js";

export default function FormPencarian() {
  // Tempat FIX (keterangan saja)
  const venueText = "GBK Stadium, Jakarta";

  // 2 hari event saja
  const dateOptions = [
    { value: "2026-02-14", label: "14 Februari 2026" },
    { value: "2026-02-15", label: "15 Februari 2026" },
  ];

  const [eventDate, setEventDate] = useState(dateOptions[0].value);
  const [tier, setTier] = useState("VIP Pink");
  const [qty, setQty] = useState(1);

  // Tiers ambil dari data pertama (atau fallback)
  const tiers = useMemo(() => {
    const first = featuredTickets?.[0];
    return first?.tiers?.map((t) => t.name) ?? ["VIP Pink"];
  }, []);

  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-2xl bg-skysoft-600/90" />
        <div>
          <div className="font-black text-slate-900">Find Your Ticket</div>
          <div className="text-xs text-slate-600">
            Pilih tanggal event (2 hari saja)
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3">
        {/* TEMPAT (KETERANGAN SAJA) */}
        <div>
          <label className="text-xs font-semibold text-slate-700">Tempat</label>
          <div className="mt-1 w-full px-3 py-2 rounded-2xl bg-white border border-skysoft-200">
            <div className="font-semibold text-slate-900">{venueText}</div>
            <div className="text-xs text-slate-500"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* TANGGAL (2 opsi saja) */}
          <div>
            <label className="text-xs font-semibold text-slate-700">Tanggal</label>
            <select
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="mt-1 w-full px-3 py-2 rounded-2xl bg-white border border-skysoft-200 outline-none focus:ring-4 focus:ring-skysoft-200"
            >
              {dateOptions.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>

          {/* QTY */}
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

        {/* TIER */}
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
          onClick={() =>
            alert(
              `Checkout: ${venueText} • ${
                dateOptions.find((d) => d.value === eventDate)?.label
              } • ${tier} • Qty ${qty}`
            )
          }
          className="mt-1 w-full py-3 rounded-2xl bg-pinkpop-500 text-white font-black shadow-soft hover:opacity-95"
        >
          Book Ticket Now
        </button>
      </div>
    </div>
  );
}
