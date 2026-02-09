import React from "react";

export default function AdminInbox({ items = [] }) {
  return (
    <div className="rounded-[22px] bg-white border border-slate-200 shadow-sm p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="font-black text-slate-900">Admin Inbox</div>
        </div>

        <select className="px-3 py-2 rounded-2xl border border-slate-200 bg-white text-sm font-semibold text-slate-700">
          <option>All</option>
          <option>New</option>
          <option>Open</option>
          <option>Closed</option>
        </select>
      </div>

      <div className="mt-4 grid gap-2">
        {items.map((x) => (
          <InboxItem key={x.name} {...x} />
        ))}
      </div>
    </div>
  );
}

function InboxItem({ name, tag, msg }) {
  return (
    <button
      type="button"
      className="w-full text-left rounded-2xl border border-slate-200 bg-white p-4 hover:bg-slate-50 transition"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="font-black text-slate-900">{name}</div>
          <div className="text-xs text-slate-600 mt-1 line-clamp-2">{msg}</div>
        </div>

        <span
          className={`shrink-0 px-3 py-1 rounded-2xl text-xs font-black border ${
            tag === "new"
              ? "bg-emerald-50 text-emerald-700 border-emerald-100"
              : "bg-amber-50 text-amber-700 border-amber-100"
          }`}
        >
          {String(tag).toUpperCase()}
        </span>
      </div>
    </button>
  );
}
