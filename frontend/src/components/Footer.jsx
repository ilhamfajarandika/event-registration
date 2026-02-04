import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-skysoft-100">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <div className="font-black text-slate-900 text-lg">Heart2Hearts</div>
          <p className="mt-2 text-sm text-slate-600">
            Feel far. Pay less. Travel? Kita konser 😄
          </p>
          <div className="mt-4 flex gap-2">
            <div className="h-9 w-9 rounded-2xl bg-skysoft-100" />
            <div className="h-9 w-9 rounded-2xl bg-skysoft-100" />
            <div className="h-9 w-9 rounded-2xl bg-skysoft-100" />
          </div>
        </div>

        <div>
          <div className="font-black text-slate-900">Event</div>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <div>Jakarta</div>
            <div>Singapore</div>
            <div>Osaka</div>
            <div>Gangnam</div>
          </div>
        </div>

        <div>
          <div className="font-black text-slate-900">Company</div>
          <div className="mt-3 space-y-2 text-sm">
            <Link className="text-slate-600 hover:text-skysoft-600" to="/">
              About
            </Link>
            <div className="text-slate-600">Packages</div>
            <div className="text-slate-600">Contact</div>
          </div>
        </div>

        <div>
          <div className="font-black text-slate-900">Extra Links</div>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <div>Customer Support</div>
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-slate-500 pb-6">
        © {new Date().getFullYear()} Heart2Hearts Ticketing.
      </div>
    </footer>
  );
}
