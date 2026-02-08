import { Link } from "react-router-dom";
import { eventMock } from "../data/mock.js";

export default function UserFeaturedTickets({ onBuyNow }) {
  const defaultQty = 1;
  const defaultDate = eventMock.dates?.[0]?.value || "";

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900">Seat Tiers & Pricing</h2>
        <p className="mt-2 text-slate-600">Harga Tier Seat.</p>
      </div>

      <div className="mt-7 grid md:grid-cols-3 gap-5">
        {eventMock.tiers.map((tier) => (
          <div
            key={tier.id}
            className="rounded-[24px] bg-white border border-white/60 shadow-soft overflow-hidden"
          >
            <div className="h-28 bg-gradient-to-r from-skysoft-200 via-white to-pinkpop-400/30" />

            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-lg font-black text-slate-900">{tier.name}</div>
                  <div className="mt-1 text-sm text-slate-600">{tier.desc}</div>
                </div>

                <span className="shrink-0 px-3 py-1 rounded-2xl bg-skysoft-100 text-skysoft-600 text-xs font-black">
                  {eventMock.city}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-slate-600">Price</div>
                <div className="text-xl font-black text-slate-900">{tier.price}</div>
              </div>

              {onBuyNow ? (
                <button
                  type="button"
                  onClick={() => onBuyNow({ tierId: tier.id, qty: defaultQty, date: defaultDate })}
                  className="mt-5 block text-center w-full py-2.5 rounded-2xl bg-skysoft-600 text-white font-black hover:opacity-95"
                >
                  Buy Now
                </button>
              ) : (
                <Link
                  to={`/user/seats/${tier.id}`}
                  className="mt-5 block text-center w-full py-2.5 rounded-2xl bg-skysoft-600 text-white font-black hover:opacity-95"
                >
                  Buy Now
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center text-xs text-slate-500">
        Venue: <span className="font-semibold text-slate-700">{eventMock.venue}</span>
      </div>
    </section>
  );
}
