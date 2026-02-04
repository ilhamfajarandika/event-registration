import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Support() {
  return (
    <div>
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-black text-slate-900">Support</h1>
        <p className="mt-2 text-slate-600">FAQ, refund policy, dan kontak CS.</p>

        <div className="mt-6 rounded-[24px] bg-white shadow-soft border border-white/60 p-6">
          <div className="font-black text-slate-900">FAQ</div>
          <ul className="mt-3 space-y-2 text-slate-700">
            <li>• Bagaimana cara cek e-ticket?</li>
            <li>• Apakah bisa refund?</li>
            <li>• Pembayaran apa saja yang tersedia?</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
