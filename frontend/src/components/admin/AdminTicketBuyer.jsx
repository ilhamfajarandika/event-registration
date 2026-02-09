import React, { useMemo, useState } from "react";
import { adminTicketBuyersMock } from "../../data/mock.js";

export default function AdminTicketBuyer() {
  const buyers = useMemo(() => adminTicketBuyersMock, []);
  const [filter, setFilter] = useState("ALL"); // ALL | PAID | NOTPAID

  const paidCount = buyers.filter((b) => b.status === "PAID").length;
  const notPaidCount = buyers.length - paidCount;

  const visible = buyers.filter((b) => {
    if (filter === "PAID") return b.status === "PAID";
    if (filter === "NOTPAID") return b.status !== "PAID";
    return true;
  });

  return (
    <div className="rounded-[22px] bg-white border border-slate-200 shadow-sm p-5">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <div className="font-black text-slate-900">Ticket Buyers</div>
          <div className="text-xs text-slate-600 mt-1">
            List user yang sudah beli ticket dan yang belum (mock.js).
          </div>
        </div>

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
            All ({buyers.length})
          </button>

          <button
            type="button"
            onClick={() => setFilter("PAID")}
            className={`px-3 py-2 rounded-2xl text-xs font-black border transition ${
              filter === "PAID"
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            Paid ({paidCount})
          </button>

          <button
            type="button"
            onClick={() => setFilter("NOTPAID")}
            className={`px-3 py-2 rounded-2xl text-xs font-black border transition ${
              filter === "NOTPAID"
                ? "bg-amber-500 text-white border-amber-500"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            Not Paid ({notPaidCount})
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="px-3 py-1.5 rounded-2xl text-xs font-black border bg-emerald-50 text-emerald-700 border-emerald-100">
          PAID: {paidCount}
        </span>
        <span className="px-3 py-1.5 rounded-2xl text-xs font-black border bg-amber-50 text-amber-700 border-amber-100">
          NOT PAID: {notPaidCount}
        </span>
      </div>

      <div className="mt-5 grid gap-3">
        {visible.map((b) => (
          <BuyerRow key={b.id} buyer={b} />
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

function BuyerRow({ buyer }) {
  const isPaid = buyer.status === "PAID";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 hover:bg-slate-50 transition">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <div className="font-black text-slate-900 truncate">{buyer.name}</div>
            <span
              className={`px-2.5 py-1 rounded-2xl text-[11px] font-black border ${
                isPaid
                  ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                  : "bg-amber-50 text-amber-700 border-amber-100"
              }`}
            >
              {buyer.status}
            </span>
          </div>

          <div className="mt-1 text-xs text-slate-600 truncate">{buyer.email}</div>

          <div className="mt-2 flex flex-wrap gap-2">
            <Pill label={`Tier: ${buyer.tierName || buyer.tierId}`} />
            <Pill label={`Qty: ${buyer.qty}`} />
            <Pill label={`Date: ${buyer.date}`} />
          </div>
        </div>
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
