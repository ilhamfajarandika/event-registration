import FormPencarian from "./FormPencarian.jsx";
import { Music2, Ticket, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-10 pb-6">
      <div className="relative overflow-hidden rounded-[28px] bg-white shadow-soft border border-white/60">
        <div className="absolute inset-0 bg-gradient-to-br from-skysoft-100 via-white to-skysoft-50" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-skysoft-300/60 blur-2xl" />
        <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-pinkpop-400/30 blur-2xl" />

        <div className="relative p-6 md:p-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-skysoft-100 border border-white/70">
              <Sparkles className="h-4 w-4 text-pinkpop-500" />
              <span className="text-sm font-semibold text-slate-700">
                Official ticketing • Heart 2 Hearts Tour
              </span>
            </div>

            <h1 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-slate-900">
              BOOK YOUR SEAT, <span className="text-skysoft-600">FEEL</span> THE
              <span className="text-pinkpop-500"> EXPERIENCE</span>
            </h1>

            <p className="mt-3 text-slate-600 max-w-xl">
              Pilih Negara, tanggal, dan kategori tiket untuk konser grup idol <b>Heart2Hearts</b>.
              Checkout cepat, aman, dan kantong-friendly.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-white border border-skysoft-200 shadow-soft">
                <Ticket className="h-4 w-4 text-skysoft-600" />
                <span className="text-sm font-semibold text-slate-700">Seat & tier jelas</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-white border border-skysoft-200 shadow-soft">
                <Music2 className="h-4 w-4 text-pinkpop-500" />
                <span className="text-sm font-semibold text-slate-700">Event terverifikasi</span>
              </div>
            </div>
          </div>

          <div className="md:pl-6">
            <div className="rounded-[24px] bg-skysoft-50 border border-skysoft-100 p-4 md:p-5 shadow-soft">
              <FormPencarian />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
