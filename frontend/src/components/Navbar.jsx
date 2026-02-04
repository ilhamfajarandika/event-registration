import { Link, NavLink } from "react-router-dom";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-xl text-sm font-semibold transition
       ${isActive ? "bg-white/70 text-skysoft-600" : "text-slate-700 hover:bg-white/60"}`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-skysoft-100/80 backdrop-blur border-b border-white/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-skysoft-600 shadow-soft relative overflow-hidden">
              <div className="absolute -right-2 -top-2 h-8 w-8 rounded-full bg-pinkpop-500/70" />
              <div className="absolute left-2 bottom-2 h-2 w-6 rounded-full bg-white/90" />
            </div>
            <div className="leading-tight">
              <div className="font-black tracking-tight text-slate-900">Heart2Hearts</div>
              <div className="text-xs text-slate-600 -mt-0.5">Concert Ticketing</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/events">Events</NavItem>
            <NavItem to="/packages">Packages</NavItem>
            <NavItem to="/support">Support</NavItem>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/auth"
              className="px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold shadow-soft hover:opacity-95"
            >
              Sign in
            </Link>
            <Link
              to="/auth"
              className="px-4 py-2 rounded-xl bg-pinkpop-500 text-white font-semibold shadow-soft hover:opacity-95"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
