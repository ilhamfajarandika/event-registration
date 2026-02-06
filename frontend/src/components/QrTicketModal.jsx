import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import QRCode from "react-qr-code";

export default function QrTicketModal({ open, onClose, ticket }) {
  // close dengan ESC
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const qrValue =
    ticket?.qrValue ||
    `H2H|REG:${ticket?.registrationId || "mock-reg"}|TIER:${ticket?.tierName || "VIP"}|QTY:${
      ticket?.qty || 1
    }`;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* overlay */}
          <motion.button
            type="button"
            className="fixed inset-0 z-[60] bg-black/35"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Close QR modal"
          />

          {/* ✅ wrapper full-screen (scroll safe) */}
          <motion.div
            className="fixed inset-0 z-[61] overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* ✅ padding top/bottom biar ga kepotong */}
            <div className="min-h-full flex items-center justify-center p-4 py-10">
              <motion.div
                className="w-full max-w-lg rounded-[28px] bg-white border border-white/70 shadow-2xl overflow-hidden"
                initial={{ y: 18, scale: 0.98 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 18, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                role="dialog"
                aria-modal="true"
              >
                {/* header */}
                <div className="p-5 border-b border-skysoft-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-black text-skysoft-700 tracking-wider">
                      E-TICKET
                    </div>
                    <div className="mt-1 text-xl font-black text-slate-900">
                      QR Code Check-in
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    className="h-10 w-10 rounded-2xl bg-white border border-skysoft-200 hover:bg-skysoft-50 transition font-black"
                  >
                    ✕
                  </button>
                </div>

                {/* body */}
                <div className="p-6">
                  <div className="rounded-[24px] bg-gradient-to-r from-skysoft-50 via-white to-pinkpop-500/10 border border-skysoft-100 p-6">
                    <div className="flex items-center justify-between">
                      <div className="font-black text-slate-900">
                        {ticket?.eventTitle || "Heart2Hearts Concert"}
                      </div>
                      <span className="px-3 py-1 rounded-2xl bg-skysoft-100 text-skysoft-700 text-xs font-black">
                        {ticket?.status || "PAID"}
                      </span>
                    </div>

                    <div className="mt-1 text-sm text-slate-600">
                      {ticket?.venue || "GBK Stadium, Jakarta"} •{" "}
                      {ticket?.dateLabel || "14 Februari"}
                    </div>

                    {/* ✅ QR REAL */}
                    <div className="mt-5 grid place-items-center">
                      <div className="rounded-[22px] bg-white border border-skysoft-200 shadow-soft p-4">
                        <div className="rounded-[18px] bg-white p-3">
                          <QRCode
                            value={qrValue}
                            size={210}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            viewBox={`0 0 256 256`}
                          />
                        </div>

                        <div className="mt-3 text-center">
                          <div className="text-xs text-slate-500">Registration ID</div>
                          <div className="mt-1 font-mono text-xs text-slate-900">
                            {ticket?.registrationId || "mock"}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 grid sm:grid-cols-3 gap-3">
                      <Mini label="Tier" value={ticket?.tierName || "-"} />
                      <Mini label="Qty" value={`${ticket?.qty || 1}`} />
                      <Mini label="ID" value={ticket?.registrationId || "mock"} mono />
                    </div>
                  </div>

                  {/* tips */}
                  <div className="mt-4 rounded-[22px] bg-skysoft-50 border border-skysoft-100 p-5">
                    <div className="font-black text-slate-900">Tips check-in</div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-skysoft-600" />
                        <span>Siapkan QR ini saat masuk venue.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-pinkpop-500" />
                        <span>Pastikan layar terang & koneksi stabil.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-skysoft-600" />
                        <span>Bawa identitas jika diperlukan.</span>
                      </li>
                    </ul>
                  </div>

                  {/* actions */}
                  <div className="mt-5 flex gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard?.writeText(qrValue);
                        alert("QR data copied!");
                      }}
                      className="flex-1 px-5 py-3 rounded-2xl bg-white border border-skysoft-200 text-skysoft-700 font-black hover:bg-skysoft-50 transition"
                    >
                      Copy QR Data
                    </button>

                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 px-5 py-3 rounded-2xl bg-slate-900 text-white font-black shadow-soft hover:opacity-95 transition"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Mini({ label, value, mono }) {
  return (
    <div className="rounded-2xl bg-white border border-skysoft-100 p-4">
      <div className="text-xs text-slate-600">{label}</div>
      <div className={`mt-1 font-black text-slate-900 ${mono ? "font-mono text-xs" : ""}`}>
        {value}
      </div>
    </div>
  );
}
