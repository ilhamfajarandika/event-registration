import React, { useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/logo.jpg";

export default function UserNavbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const user = useMemo(() => {
    const raw = localStorage.getItem("user");
    const parsed = raw ? JSON.parse(raw) : null;
    return {
      name: parsed?.name || "Aji",
      email: parsed?.email || "you@email.com",
      role: parsed?.role || "user",
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="bg-skysoft-100/80 backdrop-blur border-b border-white/60">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="relative flex items-center justify-between gap-3">
              <Link
                to="/dashboard"
                className="flex items-center gap-2 shrink-0"
              >
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
                  flex items-center gap-2
                  max-w-[55vw] sm:max-w-[60vw] md:max-w-[520px]
                  overflow-x-auto whitespace-nowrap
                  px-1
                "
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                <TopNavItem to="/dashboard">Home</TopNavItem>
                <TopNavItem to="/user-events">Events</TopNavItem>
                <TopNavItem to="/user-merch">Merch</TopNavItem>
              </nav>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="h-11 w-11 shrink-0 rounded-full bg-white border border-skysoft-200 shadow-soft
                          flex items-center justify-center hover:bg-white/60 transition"
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
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-50 bg-black/30"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Close menu"
            />

            <motion.aside
              className="fixed right-0 top-0 z-50 h-full w-[92vw] max-w-[420px] bg-white shadow-2xl border-l border-skysoft-100"
              initial={{ x: 420 }}
              animate={{ x: 0 }}
              exit={{ x: 420 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
            >
              <div className="p-5 border-b border-skysoft-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={logo}
                    alt="Heart2Hearts Logo"
                    className="h-12 w-12 rounded-2xl object-cover shadow-soft"
                    draggable="false"
                  />
                  <div>
                    <div className="font-black text-slate-900">{user.name}</div>
                    <div className="text-xs text-slate-600">{user.email}</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="h-10 w-10 rounded-2xl bg-white border border-skysoft-200 hover:bg-skysoft-50 transition font-black"
                  aria-label="Close drawer"
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
                      navigate("/user-events");
                    }}
                  />
                  <DrawerButton
                    variant="dark"
                    label="Our Merch"
                    onClick={() => {
                      setOpen(false);
                      navigate("/user-merch");
                    }}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => {
                    localStorage.removeItem("h2h_auth");
                    setOpen(false);
                    navigate("/login");
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
        `px-3 py-2 rounded-xl text-sm font-semibold transition shrink-0 ${
          isActive
            ? "bg-white/70 text-skysoft-600"
            : "text-slate-700 hover:bg-white/60"
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
  const normal =
    "bg-white border-skysoft-200 hover:bg-skysoft-50 text-slate-900";
  const dark = "bg-slate-900 border-slate-900 hover:opacity-95 text-white";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${base} ${variant === "dark" ? dark : normal}`}
    >
      {label}
    </button>
  );
}
