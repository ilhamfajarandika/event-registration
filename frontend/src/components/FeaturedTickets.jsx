import { featuredTickets } from "../data/mock.js";

export default function FeaturedTickets() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900">
          Exclusive Heart2Hearts Deals
        </h2>
        <p className="mt-2 text-slate-600">
          Pilihan jadwal konser dengan tier tiket paling populer.
        </p>
      </div>

      <div className="mt-7 grid md:grid-cols-3 gap-5">
        {featuredTickets.map((item) => (
          <div
            key={item.city}
            className="rounded-[24px] bg-white border border-white/60 shadow-soft overflow-hidden"
          >
            <div className="h-28 bg-gradient-to-r from-skysoft-200 via-white to-pinkpop-400/30" />
            <div className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-lg font-black text-slate-900">{item.city}</div>
                  <div className="text-sm text-slate-600">{item.venue}</div>
                </div>
                <span className="px-3 py-1 rounded-2xl bg-skysoft-100 text-skysoft-600 text-xs font-black">
                  {item.date}
                </span>
              </div>

              <div className="mt-4 space-y-2">
                {item.tiers.map((t) => (
                  <div key={t.name} className="flex items-center justify-between text-sm">
                    <div className="font-semibold text-slate-700">{t.name}</div>
                    <div className="font-black text-slate-900">{t.price}</div>
                  </div>
                ))}
              </div>

              <button className="mt-5 w-full py-2.5 rounded-2xl bg-skysoft-600 text-white font-black hover:opacity-95">
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
