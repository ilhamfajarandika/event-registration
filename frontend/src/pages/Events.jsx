import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturedTickets from "../components/FeaturedTickets";

// ✅ samakan dengan background Landing Page kamu
import bgConcert from "../assets/concert.jpg"; 

export default function Events() {
  return (
    <div
      className="min-h-screen bg-skysoft-50"
      style={{
        backgroundImage: `url(${bgConcert})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />

      <div className="bg-white/65">
        <div className="max-w-6xl mx-auto px-4 pt-8 pb-6">
          <h1 className="text-5xl font-black text-slate-900 text-center">Events</h1>

          <p className="mt-2 text-slate-600">
          </p>

          <div className="mt-6 rounded-[28px] border border-skysoft-200 bg-skysoft-100/90 shadow-soft overflow-hidden">
            <div className="p-6 md:p-8 grid md:grid-cols-[1.4fr_1fr] gap-6 items-start">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white/70 border border-white/60 text-xs font-black text-skysoft-700">
                  Official event highlight
                </div>

                <h2 className="mt-4 text-2xl md:text-3xl font-black text-slate-900">
                  Heart2Hearts is coming to Jakarta!
                </h2>

                <p className="mt-3 text-slate-700 leading-relaxed">
                  Heart2Hearts lagi <span className="font-black">hits banget</span> akhir-akhir ini—lagu-lagunya
                  sering muncul di FYP dan fan interaction-nya selalu bikin heboh.
                  Sekarang waktunya mereka mampir ke <span className="font-black">Jakarta</span> buat konser yang
                  paling ditunggu-tunggu.
                </p>


                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-2xl bg-white/70 border border-white/60 text-xs font-black text-slate-900">
                    Venue: GBK Stadium, Jakarta
                  </span>
                  <span className="px-3 py-1.5 rounded-2xl bg-white/70 border border-white/60 text-xs font-black text-slate-900">
                    Date: 14–15 Februari 2026
                  </span>
                  <span className="px-3 py-1.5 rounded-2xl bg-white/70 border border-white/60 text-xs font-black text-slate-900">
                    E-ticket: QR Code
                  </span>
                </div>

                <div className="mt-6 rounded-[22px] bg-white/70 border border-white/60 p-4">
                  <div className="font-black text-slate-900">Message for Hearts2 💙</div>
                  <div className="mt-1 text-slate-700">
                    Hearts2 siap-siap <span className="font-black">war ticket</span> ya! Kita ketemu di venue,
                    nyanyi bareng, dan bikin Jakarta bergetar 🔥
                  </div>
                </div>
              </div>

              <div className="rounded-[24px] bg-white/70 border border-white/60 p-5">
                <div className="text-xs font-black text-slate-900 tracking-wider">EVENT INFO</div>

                <div className="mt-4 grid gap-3">
                  <InfoRow label="Artist" value="Heart2Hearts" />
                  <InfoRow label="City" value="Jakarta" />
                  <InfoRow label="Venue" value="GBK Stadium" />
                  <InfoRow label="Days" value="2 Days Only" />
                  <InfoRow label="Ticket" value="Tier Seats + QR e-ticket" />
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("seat-tiers");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="mt-6 w-full py-3 rounded-2xl bg-skysoft-600 text-white font-black shadow-soft hover:opacity-95"
                >
                  Lihat Seat & Pricing
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="seat-tiers">
          <FeaturedTickets />
        </div>

        <Footer />
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 text-sm">
      <div className="text-slate-600">{label}</div>
      <div className="font-black text-slate-900 text-right">{value}</div>
    </div>
  );
}
