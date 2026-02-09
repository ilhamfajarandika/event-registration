import React, { useMemo, useState } from "react";
import { adminTicketBuyersMock } from "../../data/mock.js";

export default function AdminCheckinTracking() {
  const people = useMemo(() => adminTicketBuyersMock, []);

  // ALL | CHECKED_IN | NOT_YET
  const [filter, setFilter] = useState("ALL");

  // ✅ optional: hanya tampilkan yang sudah PAID (lebih realistis)
  const paidPeople = people.filter((p) => p.status === "PAID");

  const checkedCount = paidPeople.filter((p) => p.checkedIn).length;
  const notCheckedCount = paidPeople.length - checkedCount;

  const visible = paidPeople.filter((p) => {
    if (filter === "CHECKED_IN") return p.checkedIn === true;
    if (filter === "NOT_YET") return p.checkedIn === false;
    return true;
  });

  return (
    <div className="rounded-[22px] bg-white border border-slate-200 shadow-sm p-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <div className="font-black text-slate-900">Check-in Status</div>
          <div className="text-xs text-slate-600 mt-1">
            List user yang sudah scan QR (check-in) dan yang belum (mock.js).
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setFilter("ALL")}
            className={`px-3 py-2 rounded-2xl text-xs font-black border transition ${
              filter === "ALL"
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            All ({paidPeople.length})
          </button>

          <button
            type="button"
            onClick={() => setFilter("CHECKED_IN")}
            className={`px-3 py-2 rounded-2xl text-xs font-black border transition ${
              filter === "CHECKED_IN"
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            Checked-in ({checkedCount})
          </button>

          <button
            type="button"
            onClick={() => setFilter("NOT_YET")}
            className={`px-3 py-2 rounded-2xl text-xs font-black border transition ${
              filter === "NOT_YET"
                ? "bg-amber-500 text-white border-amber-500"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            Not Yet ({notCheckedCount})
          </button>
        </div>
      </div>

      {/* Summary pills */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="px-3 py-1.5 rounded-2xl text-xs font-black border bg-emerald-50 text-emerald-700 border-emerald-100">
          CHECKED-IN: {checkedCount}
        </span>
        <span className="px-3 py-1.5 rounded-2xl text-xs font-black border bg-amber-50 text-amber-700 border-amber-100">
          NOT YET: {notCheckedCount}
        </span>
      </div>

      {/* List */}
      <div className="mt-5 grid gap-3">
        {visible.map((p) => (
          <CheckinRow key={p.id} person={p} />
        ))}

        {visible.length === 0 && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            Tidak ada data untuk filter ini.
          </div>
        )}
      </div>
    </div>
  );
}

function CheckinRow({ person }) {
  const ok = person.checkedIn === true;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 hover:bg-slate-50 transition">
      <div className="flex items-start justify-between gap-3">
        {/* left */}
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <div className="font-black text-slate-900 truncate">{person.name}</div>

            <span
              className={`px-2.5 py-1 rounded-2xl text-[11px] font-black border ${
                ok
                  ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                  : "bg-amber-50 text-amber-700 border-amber-100"
              }`}
            >
              {ok ? "CHECKED-IN" : "NOT YET"}
            </span>
          </div>

          <div className="mt-1 text-xs text-slate-600 truncate">{person.email}</div>

          <div className="mt-2 flex flex-wrap gap-2">
            <Pill label={`Tier: ${person.tierName || person.tierId}`} />
            <Pill label={`Qty: ${person.qty}`} />
            <Pill label={`Date: ${person.date}`} />
            {ok && person.checkedInAt && <Pill label={`Scanned: ${person.checkedInAt}`} />}
          </div>
        </div>

        {/* right action (placeholder) */}
        <button
          type="button"
          onClick={() => alert(`TODO: open check-in detail ${person.id}`)}
          className="shrink-0 px-3 py-2 rounded-2xl bg-slate-900 text-white text-xs font-black hover:opacity-95"
        >
          Detail
        </button>
      </div>
    </div>
  );
}

function Pill({ label }) {
  return (
    <span className="px-3 py-1.5 rounded-2xl bg-slate-100 border border-slate-200 text-[11px] font-black text-slate-700">
      {label}
    </span>
  );
}
