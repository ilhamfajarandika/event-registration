import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FeaturedTickets from "../components/FeaturedTickets";

export default function Events() {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <h1 className="text-3xl font-black text-slate-900">Events</h1>
        <p className="mt-2 text-slate-600">List event (nanti ambil dari backend /api/events).</p>
      </div>
      <FeaturedTickets />
      <Footer />
    </div>
  );
}
