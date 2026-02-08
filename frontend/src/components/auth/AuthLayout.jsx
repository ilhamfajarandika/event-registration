import { motion } from "framer-motion";

export default function AuthLayout({ title, subtitle, children, hintText }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* LEFT: FORM */}
        <motion.div
          className="rounded-[28px] bg-white border border-white/70 shadow-soft p-8 md:p-10"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-slate-900">{title}</h1>
          <p className="mt-2 text-slate-600">{subtitle}</p>

          <div className="mt-8">{children}</div>
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
                    <div className="text-lg font-black text-slate-900">Heart2Hearts</div>
                    <div className="text-sm text-slate-600">Concert Ticketing</div>
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

            {hintText ? <div className="mt-10 text-slate-600">{hintText}</div> : null}
          </div>
        </motion.div>
      </div>
    </div>
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
