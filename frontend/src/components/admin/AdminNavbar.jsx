import React, { useMemo, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const auth = useMemo(() => {
    const raw = localStorage.getItem("h2h_auth");
    return raw ? JSON.parse(raw) : null;
  }, []);

  const isLoggedIn = Boolean(auth?.isLoggedIn);
  const userName = auth?.name || "Admin";

  useEffect(() => {
    const onClick = (e) => {
      const el = e.target.closest("[data-profile-root='true']");
      if (!el) setMenuOpen(false);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("h2h_auth");
    setMenuOpen(false);
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-skysoft-100/80 backdrop-blur border-b border-white/60">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="relative flex items-center justify-between gap-3">
            {/* LEFT LOGO */}
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

            <div className="flex items-center gap-2 shrink-0" data-profile-root="true">
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className="h-11 w-11 rounded-full bg-white border border-skysoft-200 shadow-soft overflow-hidden hover:bg-white/60 transition"
                aria-label="Open profile menu"
                title="Profile"
              >
                <img src={logo} alt="Profile" className="h-full w-full object-cover" />
              </button>

              {menuOpen && (
                <div className="absolute right-0 top-[60px] w-[260px] rounded-2xl bg-white border border-skysoft-100 shadow-2xl overflow-hidden">
                  <div className="p-4 border-b border-skysoft-100">
                    <div className="flex items-center gap-3">
                      <img
                        src={logo}
                        alt="Avatar"
                        className="h-10 w-10 rounded-2xl object-cover shadow-soft"
                        draggable="false"
                      />
                      <div className="min-w-0">
                        <div className="font-black text-slate-900 truncate">{userName}</div>
                        <div className="text-xs text-slate-600 mt-0.5">
                          {isLoggedIn ? "Signed in" : "Guest mode"}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 grid gap-2">
                    {isLoggedIn ? (
                      <>
                        <button
                          type="button"
                          onClick={() => {
                            setMenuOpen(false);
                            navigate("/profile");
                          }}
                          className="w-full text-left px-4 py-3 rounded-2xl bg-white border border-slate-200 font-black text-slate-900 hover:bg-slate-50"
                        >
                          Profile
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setMenuOpen(false);
                            navigate("/dashboard");
                          }}
                          className="w-full text-left px-4 py-3 rounded-2xl bg-white border border-slate-200 font-black text-slate-900 hover:bg-slate-50"
                        >
                          Dashboard
                        </button>

                        <button
                          type="button"
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-3 rounded-2xl bg-slate-900 border border-slate-900 font-black text-white hover:opacity-95"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setMenuOpen(false);
                          navigate("/");
                        }}
                        className="w-full text-left px-4 py-3 rounded-2xl bg-slate-900 border border-slate-900 font-black text-white hover:opacity-95"
                      >
                        Logout
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
