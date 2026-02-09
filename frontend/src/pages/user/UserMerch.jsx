import React, { useEffect, useState } from "react";
import UserNavbar from "../../components/UserNavbar";
import Footer from "../../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { merchProducts } from "../../data/mock.js";
import { useNavigate } from "react-router-dom";
import merchBg from "../../assets/merchBg.webp";

export default function UserMerch() {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-20">
        <img
          src={merchBg}
          alt="Merch background"
          className="h-full w-full object-cover"
          style={{ opacity: 0.35 }}
        />
      </div>

      <div className="fixed inset-0 -z-10 bg-white/35" />

      <UserNavbar />

      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex justify-center">
        <div className="text-center">
            <h1 className="text-5xl font-black text-slate-900">Our Merch</h1>
            <div className="mt-1 font-medium text-slate-800">
            Official merch Heart2Hearts untuk Hearts2.
            </div>
        </div>
        </div>


        <section className="mt-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {merchProducts.map((p) => (
              <MerchCard key={p.id} product={p} onOpen={() => setActive(p)} />
            ))}
          </div>
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {active && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-[60] bg-black/40"
              onClick={() => setActive(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Close modal"
            />

            <motion.div
              className="fixed inset-0 z-[70] flex items-center justify-center p-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <div className="w-full max-w-4xl rounded-[28px] bg-white border border-white/70 shadow-2xl overflow-hidden relative">
                <div className="grid md:grid-cols-2">
                  <div className="bg-slate-100">
                    {active.image ? (
                      <img
                        src={active.image}
                        alt={active.name}
                        className="h-[320px] md:h-[520px] w-full object-contain bg-white"
                      />
                    ) : (
                      <div className="h-[320px] md:h-[520px] w-full bg-slate-200" />
                    )}
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-2xl md:text-3xl font-black text-slate-900">
                          {active.name}
                        </div>
                        <div className="mt-1 text-sm text-slate-600">
                          {active.category}
                        </div>
                      </div>

                      {active.badge && (
                        <div className="px-3 py-1.5 rounded-2xl bg-skysoft-50 border border-skysoft-100 text-xs font-black text-slate-900">
                          {active.badge}
                        </div>
                      )}
                    </div>

                    {active.price && (
                      <div className="mt-5 rounded-[18px] bg-skysoft-50 border border-skysoft-100 p-4">
                        <div className="text-xs font-black text-slate-900 tracking-wide">
                          PRICE
                        </div>
                        <div className="mt-1 text-xl font-black text-slate-900">
                          {active.price}
                        </div>
                      </div>
                    )}

                    <div className="mt-5 text-slate-700 leading-relaxed">
                      {active.detail}
                    </div>
                    <div className="mt-7 grid gap-3">
                      <button
                        className="w-full py-3 rounded-2xl bg-white border border-skysoft-200 text-skysoft-700 font-black shadow-soft hover:bg-skysoft-50"
                        onClick={() => setActive(null)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function MerchCard({ product, onOpen }) {
  const { name, category, desc, badge, price, image } = product;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="rounded-[26px] bg-white border border-white/70 shadow-soft overflow-hidden"
    >
      <button
        type="button"
        onClick={onOpen}
        className="relative h-44 w-full bg-slate-100 text-left"
        aria-label={`Open ${name}`}
      >
        {image ? (
          <img src={image} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full bg-slate-200" />
        )}

        {badge && (
          <div className="absolute top-3 left-3 px-3 py-1.5 rounded-2xl bg-white/90 border border-white/70 shadow-soft text-xs font-black text-slate-900">
            {badge}
          </div>
        )}
      </button>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-black text-slate-900 leading-tight">{name}</div>
            <div className="mt-1 text-xs text-slate-600">{category}</div>
          </div>
          {price && (
            <div className="text-sm font-black text-slate-900 whitespace-nowrap">
              {price}
            </div>
          )}
        </div>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed">{desc}</p>

        <button
          className="mt-4 w-full py-3 rounded-2xl bg-skysoft-600 text-white font-black shadow-soft hover:opacity-95"
          onClick={onOpen}
        >
          View item
        </button>
      </div>
    </motion.article>
  );
}
