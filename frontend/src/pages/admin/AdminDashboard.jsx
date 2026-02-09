import { motion } from "framer-motion";

import AdminNavbar from "../../components/admin/AdminNavbar.jsx";
import AdminStatCard from "../../components/admin/AdminStatCard.jsx";
import AdminCheckinTracking from "../../components/admin/AdminCheckinTracking.jsx";
import AdminInbox from "../../components/admin/AdminInbox.jsx";

import { adminStats, adminInboxItems } from "../../data/mock.js";

import adminBg from "../../assets/adminBg.jpg";

export default function AdminDashboard() {
  return (
    <motion.div
      className="min-h-screen relative overflow-hidden"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="fixed inset-0 -z-20">
        <img
          src={adminBg}
          alt="Admin background"
          className="h-full w-full object-cover"
          style={{ opacity: 0.3 }} 
        />
      </div>

      <div className="fixed inset-0 -z-10 bg-white/40" />

      <AdminNavbar />

      <main className="max-w-7xl mx-auto px-4 py-7">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900">
              Home
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Overview performance, outreach, and support inbox.
            </p>
          </div>
        </div>

        <section className="mt-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {adminStats.map((s) => (
              <AdminStatCard key={s.label} {...s} />
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-4 lg:grid-cols-2">
          <AdminCheckinTracking />
          <AdminInbox items={adminInboxItems} />
        </section>
      </main>
    </motion.div>
  );
}
