import React, { useEffect, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Auth() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [mode, setMode] = useState("signin"); // signin | signup

  // ✅ sync mode dengan query param (klik navbar akan langsung ngubah UI)
  useEffect(() => {
    const m = searchParams.get("mode") === "signup" ? "signup" : "signin";
    setMode(m);
  }, [searchParams]);

  const isSignup = mode === "signup";

  const setSignin = () => {
    setMode("signin");
    setSearchParams({ mode: "signin" });
  };

  const setSignup = () => {
    setMode("signup");
    setSearchParams({ mode: "signup" });
  };

  // ✅ handler login/signup -> simpan session sederhana -> redirect dashboard
  const handleSubmit = () => {
    // TODO: nanti ganti call backend beneran
    // contoh endpoint:
    // signin  -> POST /api/auth/login
    // signup  -> POST /api/auth/register

    localStorage.setItem(
      "h2h_auth",
      JSON.stringify({
        isLoggedIn: true,
        role: "user", // nanti bisa "admin"
        mode: isSignup ? "signup" : "signin",
        loginAt: new Date().toISOString(),
      })
    );

    navigate("/dashboard");
  };

  return (
    <motion.div
      className="min-h-screen bg-[#F7FBFF]"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT: FORM */}
          <motion.div
            className="rounded-[28px] bg-white border border-white/70 shadow-soft p-8 md:p-10"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
              {isSignup ? "Create account" : "Welcome back!"}
            </h1>
            <p className="mt-2 text-slate-600">
              {isSignup
                ? "Daftar untuk beli tiket Heart2Hearts lebih cepat."
                : "Login untuk lanjut checkout & akses dashboard kamu."}
            </p>

            {/* Tabs */}
            <div className="mt-8 flex gap-3 rounded-[22px] bg-skysoft-50 border border-skysoft-100 p-2">
              <button
                type="button"
                onClick={setSignin}
                className={`flex-1 py-3 rounded-[18px] font-black transition-all ${
                  !isSignup
                    ? "bg-skysoft-600 text-white shadow-soft"
                    : "bg-transparent text-skysoft-700 hover:bg-white"
                }`}
              >
                Sign in
              </button>

              <button
                type="button"
                onClick={setSignup}
                className={`flex-1 py-3 rounded-[18px] font-black transition-all ${
                  isSignup
                    ? "bg-pinkpop-500 text-white shadow-soft"
                    : "bg-transparent text-skysoft-700 hover:bg-white"
                }`}
              >
                Sign up
              </button>
            </div>

            {/* Form content anim */}
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="mt-8 grid gap-5"
              >
                {isSignup && (
                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      Full name
                    </label>
                    <input
                      className="mt-2 w-full px-4 py-3.5 rounded-2xl bg-white border border-skysoft-200 outline-none focus:ring-4 focus:ring-skysoft-200"
                      placeholder="Nama kamu"
                    />
                  </div>
                )}

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Email
                  </label>
                  <input
                    className="mt-2 w-full px-4 py-3.5 rounded-2xl bg-white border border-skysoft-200 outline-none focus:ring-4 focus:ring-skysoft-200"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Password
                  </label>
                  <input
                    type="password"
                    className="mt-2 w-full px-4 py-3.5 rounded-2xl bg-white border border-skysoft-200 outline-none focus:ring-4 focus:ring-skysoft-200"
                    placeholder="••••••••"
                  />
                </div>

                {!isSignup && (
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="text-sm font-black text-skysoft-700 hover:underline"
                      onClick={() => alert("TODO: Forgot password")}
                    >
                      Forgot Password?
                    </button>
                  </div>
                )}

                {/* ✅ tombol utama: sekarang redirect dashboard */}
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className={`w-full py-4 rounded-2xl text-white font-black shadow-soft hover:opacity-95 ${
                    isSignup ? "bg-pinkpop-500" : "bg-slate-900"
                  }`}
                  onClick={handleSubmit}
                  type="button"
                >
                  {isSignup ? "Create account" : "Login"}
                </motion.button>

                {/* divider */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="h-px w-full bg-slate-200" />
                  <div className="text-sm text-slate-500 whitespace-nowrap">
                    or continue with
                  </div>
                  <div className="h-px w-full bg-slate-200" />
                </div>

                {/* social */}
                <div className="flex items-center justify-center gap-4">
                  <SocialCircle label="G" />
                  <SocialCircle label="" />
                  <SocialCircle label="f" />
                </div>

                <div className="text-center text-sm text-slate-600 pt-2">
                  {isSignup ? (
                    <>
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={setSignin}
                        className="font-black text-skysoft-700 hover:underline"
                      >
                        Login
                      </button>
                    </>
                  ) : (
                    <>
                      Not a member?{" "}
                      <button
                        type="button"
                        onClick={setSignup}
                        className="font-black text-pinkpop-600 hover:underline"
                      >
                        Register now
                      </button>
                    </>
                  )}
                </div>

                <p className="text-xs text-slate-500 text-center">
                  Integrasi MERN: endpoint <code>/api/auth/login</code> &{" "}
                  <code>/api/auth/register</code>
                </p>

                <div className="text-center">
                  <Link
                    to="/"
                    className="text-xs font-black text-skysoft-700 hover:underline"
                  >
                    ← Back to Home
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* RIGHT: PANEL */}
          <motion.div
            className="rounded-[28px] bg-gradient-to-br from-skysoft-50 via-white to-skysoft-100 border border-white/70 shadow-soft overflow-hidden relative min-h-[520px]"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-skysoft-200/40 blur-2xl" />
            <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-pinkpop-500/20 blur-2xl" />

            <div className="relative p-10 h-full flex flex-col items-center justify-center text-center">
              <div className="w-full max-w-md">
                <div className="rounded-[26px] bg-white/75 border border-white shadow-soft p-8">
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-11 w-11 rounded-2xl bg-skysoft-600/90" />
                    <div className="text-left">
                      <div className="text-lg font-black text-slate-900">
                        Heart2Hearts
                      </div>
                      <div className="text-sm text-slate-600">
                        Concert Ticketing
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-slate-600">
                    Make your concert experience easier and organized.
                  </div>

                  <div className="mt-6 grid gap-3 text-left">
                    <MiniRow label="Venue" value="GBK Stadium" />
                    <MiniRow label="City" value="Jakarta" />
                    <MiniRow label="Event days" value="14–15 Februari" />
                    <MiniRow label="E-ticket" value="QR Code ready" />
                  </div>

                  <div className="mt-6 flex items-center justify-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="h-2 w-2 rounded-full bg-slate-300" />
                    <span className="h-2 w-2 rounded-full bg-slate-900" />
                  </div>
                </div>
              </div>

              <div className="mt-10 text-slate-600">
                {isSignup
                  ? "Create account to get started for free."
                  : "Login to continue to your dashboard."}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}

function SocialCircle({ label }) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      type="button"
      onClick={() => alert("TODO: OAuth")}
      className="h-12 w-12 rounded-full bg-slate-900 text-white font-black flex items-center justify-center shadow-soft"
    >
      {label}
    </motion.button>
  );
}

function MiniRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <div className="text-slate-600">{label}</div>
      <div className="font-black text-slate-900">{value}</div>
    </div>
  );
}
