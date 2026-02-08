import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { eventMock } from "../data/mock.js"; 

export default function FormPencarian() {
  const navigate = useNavigate();
  const venueText = eventMock.venue || "GBK Stadium, Jakarta";

  const dateOptions = useMemo(() => {
    if (Array.isArray(eventMock.dates) && eventMock.dates.length) return eventMock.dates;
    return [
      { value: "2026-02-14", label: "14 Februari 2026" },
      { value: "2026-02-15", label: "15 Februari 2026" },
    ];
  }, []);

  const tiers = useMemo(() => eventMock.tiers || [], []);
  const [eventDate, setEventDate] = useState(dateOptions[0]?.value || "");
  const [tierId, setTierId] = useState(""); 
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (!tierId && tiers.length) setTierId(tiers[0].id);
  }, [tierId, tiers]);

  const tierIdToPath = {
    "vip-pink": "/seats/vip-pink",
    "cat-1-sky": "/seats/cat-1-sky",
    festival: "/seats/festival",
  };

  const handleBook = () => {
    console.log("[BOOK] tierId:", tierId);
    console.log("[BOOK] path:", tierIdToPath[tierId]);
    const path = tierIdToPath[tierId];
    if (!path) {
      alert(`Tier ID tidak dikenali: "${tierId}". Cek mapping tierIdToPath.`);
      return;
    }

    const params = new URLSearchParams({
      date: eventDate,
      qty: String(Math.max(1, Number(qty || 1))),
    }).toString();

    navigate(`${path}?${params}`);
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-10 w-10 rounded-2xl object-cover" />
        <div>
          <div className="font-black text-slate-900">Find Your Ticket</div>
          <div className="text-xs text-slate-600">Pilih tanggal event (2 hari saja)</div>
        </div>
      </div>

      <div className="mt-4 grid gap-3">
        <div>
          <label className="text-xs font-semibold text-slate-700">Tempat</label>
          <div className="mt-1 w-full px-3 py-2 rounded-2xl bg-white border border-skysoft-200">
            <div className="font-semibold text-slate-900">{venueText}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
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
            value={tierId}
            onChange={(e) => setTierId(e.target.value)}
            className="mt-1 w-full px-3 py-2 rounded-2xl bg-white border border-skysoft-200 outline-none focus:ring-4 focus:ring-skysoft-200">
            {tiers.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={handleBook}
          className="mt-1 w-full py-3 rounded-2xl bg-pinkpop-500 text-white font-black shadow-soft hover:opacity-95">
          Book Ticket Now
        </button>
      </div>
    </div>
  );
}
