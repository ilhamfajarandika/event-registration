import React from "react";
import { popularShows } from "../data/mock.js";


export default function PopularShows() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-10">
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-black text-slate-900">Popular Shows</h3>
        <p className="mt-2 text-slate-600">Show Terdahulu Yang Paling Banyak Dibooking</p>
      </div>

      <div className="mt-6 flex gap-4 overflow-x-auto pb-3">
        {popularShows.map((s) => (
          <div
            key={s.title}
            className="min-w-[220px] rounded-[22px] bg-white border border-white/60 shadow-soft p-4"
          >
            <div className="h-10 w-10 rounded-2xl bg-pinkpop-500/90" />
            <div className="mt-3 font-black text-slate-900">{s.title}</div>
            <div className="text-sm text-slate-600">{s.city}</div>
            <button className="mt-4 w-full py-2 rounded-2xl bg-skysoft-100 text-skysoft-600 font-black hover:bg-skysoft-200">
              View
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
