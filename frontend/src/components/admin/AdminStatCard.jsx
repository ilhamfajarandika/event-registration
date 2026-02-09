import React from "react";
import { motion } from "framer-motion";

export default function AdminStatCard({ label, value, sub, icon }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="rounded-[22px] bg-white border border-slate-200 shadow-sm p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-black text-slate-500 tracking-wider">{label}</div>
          <div className="mt-2 text-2xl font-black text-slate-900">{value}</div>
          <div className="mt-1 text-xs text-slate-500">{sub}</div>
        </div>
        <div className="h-10 w-10 rounded-2xl bg-slate-100 border border-slate-200 grid place-items-center">
          <span className="text-lg">{icon}</span>
        </div>
      </div>
    </motion.div>
  );
}
