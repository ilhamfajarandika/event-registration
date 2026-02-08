import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthLayout from "../components/auth/AuthLayout";
import LoginBg from "../assets/RegisterBG.webp";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {


    localStorage.setItem(
      "h2h_auth",
      JSON.stringify({
        isLoggedIn: true,
        role: "user", // nanti dari backend
        name: "Aji",
        email,
        loginAt: new Date().toISOString(),
      })
    );

    navigate("/dashboard");
  };

  return (
    <motion.div
      className="relative overflow-hidden min-h-screen"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{
        backgroundImage: `url(${LoginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/30" />
      <div className="relative z-10">
      <Navbar />

      <AuthLayout
        title="Welcome back!"
        subtitle="Login untuk lanjut checkout & akses dashboard kamu."

      >
        <div className="grid gap-5">
          <div>
            <label className="text-sm font-semibold text-slate-700">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full px-4 py-3.5 rounded-2xl bg-white border border-skysoft-200 outline-none focus:ring-4 focus:ring-skysoft-200"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-700">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="mt-2 w-full px-4 py-3.5 rounded-2xl bg-white border border-skysoft-200 outline-none focus:ring-4 focus:ring-skysoft-200"
              placeholder="••••••••"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm font-black text-skysoft-700 hover:underline"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </button>
          </div>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="w-full py-4 rounded-2xl text-white font-black shadow-soft hover:opacity-95 bg-slate-900"
            onClick={handleLogin}
            type="button"
          >
            Login
          </motion.button>

          <div className="text-center text-sm text-slate-600 pt-2">
            Not a member?{" "}
            <Link to="/register" className="font-black text-pinkpop-600 hover:underline">
              Register now
            </Link>
          </div>


          <div className="text-center">
            <Link to="/" className="text-xs font-black text-skysoft-700 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </AuthLayout>

      <Footer />
      </div>
    </motion.div>
  );
}
