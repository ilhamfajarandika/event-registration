import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-xl text-sm font-semibold transition shrink-0
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
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="relative flex items-center justify-between gap-3">
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img
                src={logo}
                alt="Heart2Hearts Logo"
                className="h-9 w-9 rounded-2xl object-cover shadow-soft"
                draggable="false"
              />

              <div className="leading-tight hidden sm:block">
                <div className="font-black tracking-tight text-slate-900">
                  Heart2Hearts
                </div>
                <div className="text-xs text-slate-600 -mt-0.5">
                  Concert Ticketing
                </div>
              </div>
            </Link>

            <nav
              className="
                absolute left-1/2 -translate-x-1/2
                flex items-center gap-1
                max-w-[52vw] sm:max-w-[60vw] md:max-w-[520px]
                overflow-x-auto whitespace-nowrap
                px-1
              "
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <NavItem to="/">Home</NavItem>
              <NavItem to="/events">Events</NavItem>
              <NavItem to="/merch">Merch</NavItem>
            </nav>

            <div className="flex items-center gap-2 shrink-0">
              <Link
                to="/login"
                className="px-3 sm:px-4 py-2 rounded-xl bg-white text-slate-900 font-semibold shadow-soft hover:opacity-95 text-sm"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-3 sm:px-4 py-2 rounded-xl bg-pinkpop-500 text-white font-semibold shadow-soft hover:opacity-95 text-sm"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
