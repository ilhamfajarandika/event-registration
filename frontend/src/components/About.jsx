import nextDropBg from "../assets/NextDrop.jpg"; 
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-10">
      <div className="rounded-[28px] bg-white border border-white/60 shadow-soft overflow-hidden">
        <div className="p-6 md:p-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900">About Us</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Heart2Hearts Ticketing dibuat untuk pengalaman beli tiket konser yang cepat dan aman.
              Mulai dari pemilihan tanggal, seat tiernya, sampai checkout semua dibuat simpel.
            </p>

            <ul className="mt-4 space-y-2 text-slate-700 font-semibold">
              <li>• QR e-ticket + email confirmation</li>
              <li>• Tier & seat jelas</li>
            </ul>
          </div>

          <div className="relative rounded-[24px] border border-skysoft-100 min-h-[240px] overflow-hidden">
            <img
              src={nextDropBg}
              alt="Next drop background"
              className="absolute inset-0 w-full h-full object-cover"
              draggable="false"
            />

            <div className="absolute inset-0 bg-white/50" />
            <div className="absolute bottom-5 left-5 right-5 rounded-[20px] bg-white/80 backdrop-blur border border-white/70 p-4">
              <div className="font-black text-slate-900">Our Merch</div>
              <div className="text-sm text-slate-600">Merch bundle and Photocard</div>
              <Link
                to="/merch"
                className="mt-3 inline-block px-4 py-2 rounded-2xl bg-pinkpop-500 text-white font-black">
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
