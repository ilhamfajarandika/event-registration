import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UserNavbar from "../../components/UserNavbar";
import Footer from "../../components/Footer";

export default function Profile() {
  // Mock user (nanti ganti dari API / state global)
  const user = useMemo(
    () => ({
      name: "aji",
      username: "skiestimez",
      gmail: "ajin7133@gmail.com",
      phone: "08xxxxxxxxxx",
      gender: "Laki-laki",
      avatarUrl: "", // bisa kosong, nanti tampil inisial
    }),
    []
  );

  const [profile, setProfile] = useState(user);
  const [openEdit, setOpenEdit] = useState(false);

  return (
    <motion.div
      className="min-h-screen bg-[#0B0F14]" // dark seperti referensi
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <UserNavbar />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-xl md:text-2xl font-black text-white">Edit profil</h1>
        <div className="mt-6 rounded-[22px] bg-white/10 border border-white/10 shadow-soft overflow-hidden">
          <div className="p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Avatar name={profile.name} url={profile.avatarUrl} />
              <div className="leading-tight">
                <div className="text-white font-black">{profile.username}</div>
                <div className="text-white/70 text-sm">{profile.name}</div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => alert("TODO: upload foto (frontend only)")}
              className="px-4 py-2 rounded-2xl bg-skysoft-600 text-white font-black hover:opacity-95 transition"
            >
              Ubah foto
            </button>
          </div>
        </div>

        <Section title="Gmail">
          <ReadOnlyInput value={profile.gmail} placeholder="Gmail" />
          <p className="mt-2 text-xs text-white/50">
            Gmail bersifat read-only (mengikuti akun login).
          </p>
        </Section>

        <Section title="Nomor Telepon">
          <ReadOnlyInput value={profile.phone} placeholder="Nomor Telepon" />
        </Section>

        <Section title="Jenis Kelamin">
          <ReadOnlySelect value={profile.gender} />
          <p className="mt-2 text-xs text-white/50">
            Ini tidak akan menjadi bagian dari profil publik Anda.
          </p>
        </Section>

        <div className="mt-8 text-xs text-white/50">
          Info profil tertentu, seperti nama, email, dan nomor telepon, bisa digunakan untuk kebutuhan akun.
        </div>

        <div className="mt-10 flex justify-end">
          <button
            type="button"
            onClick={() => setOpenEdit(true)}
            className="w-full sm:w-auto px-8 py-3 rounded-2xl bg-skysoft-600 text-white font-black shadow-soft hover:opacity-95 transition"
          >
            Ubah profil
          </button>
        </div>
      </div>

      <Footer />

      <EditProfileModal
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        initial={profile}
        onSave={(next) => {
          setProfile(next);
          setOpenEdit(false);
        }}
      />
    </motion.div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mt-8">
      <div className="text-sm font-black text-white mb-3">{title}</div>
      <div className="rounded-[22px] bg-white/10 border border-white/10 shadow-soft p-4">
        {children}
      </div>
    </div>
  );
}

function ReadOnlyInput({ value, placeholder }) {
  return (
    <input
      value={value || ""}
      readOnly
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-2xl bg-black/20 border border-white/10 text-white placeholder:text-white/40 outline-none"
    />
  );
}

function ReadOnlySelect({ value }) {
  return (
    <div className="relative">
      <select
        value={value || ""}
        disabled
        className="w-full px-4 py-3 rounded-2xl bg-black/20 border border-white/10 text-white outline-none appearance-none cursor-not-allowed"
      >
        <option className="text-black">Laki-laki</option>
        <option className="text-black">Perempuan</option>
      </select>
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/50">
        ▾
      </div>
    </div>
  );
}

function Avatar({ name, url }) {
  const initial = (name?.trim()?.[0] || "A").toUpperCase();
  if (url) {
    return (
      <img
        src={url}
        alt="avatar"
        className="h-14 w-14 rounded-2xl object-cover border border-white/10"
      />
    );
  }
  return (
    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-skysoft-600 to-pinkpop-500 flex items-center justify-center font-black text-white border border-white/10">
      {initial}
    </div>
  );
}


function EditProfileModal({ open, onClose, initial, onSave }) {
  const [form, setForm] = useState(() => ({
    name: initial?.name || "",
    email: initial?.gmail || "",
    phone: initial?.phone || "",
    password: "",
    confirmPassword: "",
  }));

  // sync kalau initial berubah
  React.useEffect(() => {
    if (!open) return;
    setForm({
      name: initial?.name || "",
      email: initial?.gmail || "",
      phone: initial?.phone || "",
      password: "",
      confirmPassword: "",
    });
  }, [open, initial]);

  const [err, setErr] = useState("");

  const submit = () => {
    setErr("");

    if (!form.name.trim()) return setErr("Nama wajib diisi.");
    if (!form.email.trim()) return setErr("Email wajib diisi.");
    if (form.password && form.password.length < 6)
      return setErr("Password minimal 6 karakter.");
    if (form.password !== form.confirmPassword)
      return setErr("Konfirmasi password tidak sama.");

    onSave?.({
      ...initial,
      name: form.name,
      gmail: form.email,
      phone: form.phone,

    });
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            onClick={onClose}
            className="fixed inset-0 z-[70] bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Close modal"
          />

          <motion.div
            className="fixed inset-0 z-[71] overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="min-h-full flex items-center justify-center p-4 py-10">
              <motion.div
                className="w-full max-w-xl rounded-[28px] bg-[#0F1620] border border-white/10 shadow-2xl overflow-hidden"
                initial={{ y: 18, scale: 0.98 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 18, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                role="dialog"
                aria-modal="true"
              >
                <div className="p-5 border-b border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-black text-skysoft-300 tracking-wider">
                      UPDATE PROFILE
                    </div>
                    <div className="mt-1 text-xl font-black text-white">
                      Ubah data profil
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    className="h-10 w-10 rounded-2xl bg-white/5 border border-white/10 text-white font-black hover:bg-white/10 transition"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-6 grid gap-4">
                  {err && (
                    <div className="rounded-2xl bg-pinkpop-500/15 border border-pinkpop-500/25 p-4 text-pinkpop-200 text-sm">
                      {err}
                    </div>
                  )}

                  <Field label="Nama">
                    <input
                      value={form.name}
                      onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:ring-4 focus:ring-skysoft-600/20"
                      placeholder="Nama kamu"
                    />
                  </Field>

                  <Field label="Email">
                    <input
                      value={form.email}
                      onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:ring-4 focus:ring-skysoft-600/20"
                      placeholder="you@email.com"
                    />
                    <p className="mt-2 text-xs text-white/45">
                      (Jika sistem kamu mau email read-only, tinggal disable di sini.)
                    </p>
                  </Field>

                  <Field label="Nomor Telepon">
                    <input
                      value={form.phone}
                      onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:ring-4 focus:ring-skysoft-600/20"
                      placeholder="08xxxxxxxxxx"
                    />
                  </Field>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Field label="Password baru">
                      <input
                        type="password"
                        value={form.password}
                        onChange={(e) => setForm((s) => ({ ...s, password: e.target.value }))}
                        className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:ring-4 focus:ring-skysoft-600/20"
                        placeholder="••••••••"
                      />
                    </Field>

                    <Field label="Konfirmasi password">
                      <input
                        type="password"
                        value={form.confirmPassword}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, confirmPassword: e.target.value }))
                        }
                        className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:ring-4 focus:ring-skysoft-600/20"
                        placeholder="••••••••"
                      />
                    </Field>
                  </div>

                  <div className="pt-2 flex gap-3 justify-end">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-black hover:bg-white/10 transition"
                    >
                      Batal
                    </button>

                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.99 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                      type="button"
                      onClick={submit}
                      className="px-6 py-3 rounded-2xl bg-skysoft-600 text-white font-black shadow-soft hover:opacity-95 transition"
                    >
                      Simpan perubahan
                    </motion.button>
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

function Field({ label, children }) {
  return (
    <div>
      <div className="text-sm font-semibold text-white/80">{label}</div>
      <div className="mt-2">{children}</div>
    </div>
  );
}
