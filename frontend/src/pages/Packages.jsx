import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Packages() {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-black text-slate-900">Packages</h1>
        <p className="mt-2 text-slate-600">
          Contoh: Ticket + Merch bundle, VIP perks, Early access (nanti bisa dari /api/packages).
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {["VIP Pink Bundle", "Sky Seat Saver", "Fan Meet Add-on"].map((x) => (
            <div key={x} className="rounded-[24px] bg-white shadow-soft border border-white/60 p-5">
              <div className="font-black text-slate-900">{x}</div>
              <p className="mt-2 text-sm text-slate-600">
                Placeholder package card. Nanti data dinamis dari backend.
              </p>
              <button className="mt-4 w-full py-2.5 rounded-2xl bg-skysoft-600 text-white font-black">
                View details
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
