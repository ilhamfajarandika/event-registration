import { testimoni } from "../data/mock.js";


export default function Testimoni() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-12">
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-black text-slate-900">Heart2Hearts Clients</h3>
        <p className="mt-2 text-slate-600">Review dari pengguna yang sudah checkout.</p>
      </div>

      <div className="mt-7 grid md:grid-cols-3 gap-5">
        {testimoni.map((t) => (
          <div key={t.name} className="rounded-[24px] bg-white shadow-soft border border-white/60 p-5">
            <div className="flex items-center gap-2">
              <div className="text-pinkpop-500">★★★★★</div>
              <div className="text-xs text-slate-500">verified</div>
            </div>
            <p className="mt-3 text-slate-700 leading-relaxed">“{t.text}”</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-skysoft-200" />
              <div className="font-black text-slate-900">{t.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
