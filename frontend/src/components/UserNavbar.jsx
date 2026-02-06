import React, { useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function UserNavbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const user = useMemo(() => {
    const raw = localStorage.getItem("h2h_auth");
    const parsed = raw ? JSON.parse(raw) : null;
    return {
      name: parsed?.name || "Aji",
      email: parsed?.email || "you@email.com",
      role: parsed?.role || "user",
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-white/60">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-skysoft-600 to-pinkpop-500" />
            <div className="leading-tight">
              <div className="font-black text-slate-900">Heart2Hearts</div>
              <div className="text-xs text-slate-600">Concert Ticketing</div>
            </div>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-2">
            <TopNavItem to="/dashboard">Home</TopNavItem>
            <TopNavItem to="/events">Events</TopNavItem>
            <TopNavItem to="/packages">Packages</TopNavItem>
            <TopNavItem to="/support">Support</TopNavItem>
          </nav>

          {/* Profile icon */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="h-11 w-11 rounded-full bg-white border border-skysoft-200 shadow-soft flex items-center justify-center hover:bg-skysoft-50 transition"
              aria-label="Open user menu"
              title="User menu"
            >
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-skysoft-600 to-pinkpop-500 grid place-items-center">
                <span className="text-white font-black">
                  {(user.name || "U").slice(0, 1).toUpperCase()}
                </span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* overlay */}
            <motion.button
              type="button"
              className="fixed inset-0 z-50 bg-black/30"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Close menu"
            />

            {/* panel */}
            <motion.aside
              className="fixed right-0 top-0 z-50 h-full w-[92vw] max-w-[420px] bg-white shadow-2xl border-l border-skysoft-100"
              initial={{ x: 420 }}
              animate={{ x: 0 }}
              exit={{ x: 420 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
            >
              <div className="p-5 border-b border-skysoft-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-skysoft-600 to-pinkpop-500" />
                  <div>
                    <div className="font-black text-slate-900">{user.name}</div>
                    <div className="text-xs text-slate-600">{user.email}</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="h-10 w-10 rounded-2xl bg-white border border-skysoft-200 hover:bg-skysoft-50 transition font-black"
                >
                  ✕
                </button>
              </div>

              <div className="p-5">
                <div className="text-xs font-black text-slate-900 tracking-wider">
                  QUICK ACTIONS
                </div>

                <div className="mt-4 grid gap-3">
                  <DrawerButton
                    variant="dark"
                    label="Profile"
                    onClick={() => {
                      setOpen(false);
                      navigate("/profile");
                    }}
                  />
                  <DrawerButton
                    label="View Event Detail"
                    onClick={() => {
                      setOpen(false);
                      navigate("/events");
                    }}
                  />
                  <DrawerButton
                    variant="dark"
                    label="Help & Support"
                    onClick={() => {
                      setOpen(false);
                      navigate("/support");
                    }}
                  />
                </div>

                <div className="mt-6 rounded-[22px] bg-skysoft-50 border border-skysoft-100 p-5">
                  <div className="font-black text-slate-900">Tips sebelum konser</div>

                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-skysoft-600" />
                      <span>Datang 60 menit lebih awal.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-pinkpop-500" />
                      <span>Siapkan QR e-ticket di HP.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-skysoft-600" />
                      <span>Bawa identitas jika diperlukan.</span>
                    </li>
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    localStorage.removeItem("h2h_auth");
                    setOpen(false);
                    navigate("/auth?mode=signin");
                  }}
                  className="mt-6 w-full py-3 rounded-2xl bg-white border border-skysoft-200 text-skysoft-700 font-black hover:bg-skysoft-50 transition"
                >
                  Logout
                </button>

                <div className="mt-3 text-xs text-slate-500">
                  Role: <span className="font-bold">{user.role}</span>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function TopNavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2 rounded-2xl font-black transition ${
          isActive ? "bg-skysoft-100 text-skysoft-700" : "text-slate-700 hover:bg-skysoft-50"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

function DrawerButton({ label, onClick, variant }) {
  const base =
    "w-full text-left px-5 py-4 rounded-2xl border font-black transition shadow-soft";
  const normal = "bg-white border-skysoft-200 hover:bg-skysoft-50 text-slate-900";
  const dark = "bg-slate-900 border-slate-900 hover:opacity-95 text-white";

  return (
    <button type="button" onClick={onClick} className={`${base} ${variant === "dark" ? dark : normal}`}>
      {label}
    </button>
  );
}
