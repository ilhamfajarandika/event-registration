import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import authBg from "../assets/authBg.jpg"; 

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); 
  const [msg, setMsg] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus("error");
      setMsg("Email wajib diisi.");
      return;
    }

    setStatus("loading");
    setMsg("");

    try {
      await new Promise((r) => setTimeout(r, 700));

      setStatus("success");
      setMsg("Kalau email terdaftar, kami sudah kirim link untuk ubah password. Cek inbox/spam ya.");
    } catch (err) {
      setStatus("error");
      setMsg("Gagal mengirim email reset. Coba lagi.");
    }
  };

  return (
    <motion.div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${authBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Navbar />

      <div className="min-h-screen bg-black/20">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="max-w-xl mx-auto">
            <motion.div
              className="rounded-[28px] bg-white border border-white/70 shadow-soft p-8 md:p-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-black text-slate-900">
                    Forgot Password
                  </h1>
                  <p className="mt-2 text-slate-600">
                    Masukkan email kamu untuk diverifikasi. Kami akan kirim link untuk ubah password.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    window.history.length > 1 ? navigate(-1) : navigate("/login")
                  }
                  className="h-11 w-11 rounded-2xl bg-white border border-slate-200 shadow-soft hover:bg-slate-50 transition font-black text-slate-900"
                  aria-label="Close"
                  title="Close"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={onSubmit} className="mt-8 grid gap-5">
                <div>
                  <label className="text-sm font-semibold text-slate-700">Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="mt-2 w-full px-4 py-3.5 rounded-2xl bg-white border border-skysoft-200 outline-none focus:ring-4 focus:ring-skysoft-200"
                    placeholder="you@email.com"
                  />
                </div>

                {msg && (
                  <div
                    className={`rounded-2xl border p-4 text-sm ${
                      status === "success"
                        ? "bg-skysoft-50 border-skysoft-100 text-slate-700"
                        : "bg-pinkpop-500/10 border-pinkpop-500/20 text-slate-700"
                    }`}
                  >
                    {msg}
                  </div>
                )}

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  disabled={status === "loading"}
                  className={`w-full py-4 rounded-2xl text-white font-black shadow-soft hover:opacity-95 ${
                    status === "loading"
                      ? "bg-slate-400 cursor-not-allowed"
                      : "bg-slate-900"
                  }`}
                  type="submit"
                >
                  {status === "loading" ? "Sending..." : "Send reset link"}
                </motion.button>

                <div className="text-center text-sm text-slate-600">
                  Ingat password?{" "}
                  <Link to="/login" className="font-black text-skysoft-700 hover:underline">
                    Back to Login
                  </Link>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </motion.div>
  );
}
