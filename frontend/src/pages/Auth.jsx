import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Auth() {
  const [mode, setMode] = useState("signin");

  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto px-4 py-12">
        <div className="rounded-[28px] bg-white shadow-soft border border-white/60 p-6">
          <div className="flex gap-2">
            <button
              onClick={() => setMode("signin")}
              className={`flex-1 py-2 rounded-2xl font-black ${
                mode === "signin" ? "bg-skysoft-600 text-white" : "bg-skysoft-100 text-skysoft-600"
              }`}
            >
              Sign in
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 py-2 rounded-2xl font-black ${
                mode === "signup" ? "bg-pinkpop-500 text-white" : "bg-skysoft-100 text-skysoft-600"
              }`}
            >
              Sign up
            </button>
          </div>

          <div className="mt-5">
            <label className="text-xs font-semibold text-slate-700">Email</label>
            <input
              className="mt-1 w-full px-3 py-2 rounded-2xl bg-white border border-skysoft-200 outline-none focus:ring-4 focus:ring-skysoft-200"
              placeholder="you@email.com"
            />
          </div>

          <div className="mt-3">
            <label className="text-xs font-semibold text-slate-700">Password</label>
            <input
              type="password"
              className="mt-1 w-full px-3 py-2 rounded-2xl bg-white border border-skysoft-200 outline-none focus:ring-4 focus:ring-skysoft-200"
              placeholder="••••••••"
            />
          </div>

          <button
            className={`mt-5 w-full py-3 rounded-2xl text-white font-black shadow-soft hover:opacity-95 ${
              mode === "signup" ? "bg-pinkpop-500" : "bg-skysoft-600"
            }`}
            onClick={() => alert(`TODO: call backend /api/auth/${mode}`)}
          >
            {mode === "signup" ? "Create account" : "Login"}
          </button>

          <p className="mt-3 text-xs text-slate-500">
            Integrasi MERN: endpoint <code>/api/auth/login</code> & <code>/api/auth/register</code>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
