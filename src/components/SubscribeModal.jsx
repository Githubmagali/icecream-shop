"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

// Storage key: cambia el nombre si tenés varios modales en el sitio
const STORAGE_KEY = "heladeria_subscribe_dismissed";

const PROVINCIAS = [
  "Buenos Aires",
  "CABA",
  "Córdoba",
  "Santa Fe",
  "Mendoza",
  "Entre Ríos",
  "Tucumán",
  "Salta",
  "Neuquén",
  "Río Negro",
  "Otra",
];

const EMPTY_FORM = {
  email: "",
  nombre: "",
  apellido: "",
  provincia: "",
  ciudad: "",
};

export default function SubscribeModal({ autoOpenDelay = 5 }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);

  // Auto-open una vez por sesión, con un pequeño delay para no golpear al entrar
  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (dismissed) return;
    const t = setTimeout(() => setOpen(true), autoOpenDelay);
    return () => clearTimeout(t);
  }, [autoOpenDelay]);

  // Foco inicial + cierre con Escape + scroll lock
  useEffect(() => {
    if (!open) return;
    firstFieldRef.current?.focus();
    document.body.style.overflow = "hidden";

    function onKeyDown(e) {
      if (e.key === "Escape") handleClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function handleClose() {
    setOpen(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) handleClose();
  }

  function updateField(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((er) => ({ ...er, [field]: undefined }));
  }

  function validate() {
    const next = {};
    if (!form.email.trim()) next.email = "Ingresá tu email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Ese email no parece válido.";
    if (!form.nombre.trim()) next.nombre = "Ingresá tu nombre.";
    if (!form.apellido.trim()) next.apellido = "Ingresá tu apellido.";
    if (!form.provincia) next.provincia = "Elegí tu provincia.";
    if (!form.ciudad.trim()) next.ciudad = "Ingresá tu ciudad.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("request_failed");
      setStatus("success");
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch (err) {
      setStatus("error");
    }
  }

  if (!open) return null;

  return (
    <div
      onMouseDown={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#2b1a12]/55 p-4"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="subscribe-title"
        className="relative w-full max-w-[480px] rounded-[28px] bg-[#FFFBF5] p-8 shadow-[0_30px_60px_-15px_rgba(61,43,31,0.35)] sm:p-10"
      >
        {/* topping decorativo */}
        <div className="pointer-events-none absolute -top-5 left-9 h-10 w-10 rounded-full bg-[#F6A6BE]" />
        <div className="pointer-events-none absolute -top-2 left-16 h-5 w-5 rounded-full bg-[#7FC8A9]" />

        <button
          onClick={handleClose}
          aria-label="Cerrar"
          className="absolute right-6 top-6 rounded-full p-1 text-[#7A6656] transition hover:bg-[#F3E9DD] hover:text-[#3D2B1F]"
        >
          <X size={20} />
        </button>

        {status === "success" ? (
          <SuccessView onClose={handleClose} />
        ) : (
          <>
            <h2
              id="subscribe-title"
              className="pr-8 text-[28px] font-semibold leading-tight text-[#3D2B1F]"
              style={{ fontFamily: "var(--font-heading, inherit)" }}
            >
              Sumate al Ice Cream club
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-[#7A6656]">
              Dejanos tus datos y te mandamos sabores nuevos, promos y un
              cupón de bienvenida.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
              <Field
                label="Email"
                error={errors.email}
                inputRef={firstFieldRef}
                type="email"
                autoComplete="email"
                placeholder="tu@email.com"
                value={form.email}
                onChange={(v) => updateField("email", v)}
              />

              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Nombre"
                  error={errors.nombre}
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={(v) => updateField("nombre", v)}
                />
                <Field
                  label="Apellido"
                  error={errors.apellido}
                  placeholder="Tu apellido"
                  value={form.apellido}
                  onChange={(v) => updateField("apellido", v)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <SelectField
                  label="Provincia"
                  error={errors.provincia}
                  value={form.provincia}
                  onChange={(v) => updateField("provincia", v)}
                  options={PROVINCIAS}
                />
                <Field
                  label="Ciudad"
                  error={errors.ciudad}
                  placeholder="Tu ciudad"
                  value={form.ciudad}
                  onChange={(v) => updateField("ciudad", v)}
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-[#B23A3A]">
                  Algo salió mal. Probá de nuevo en un momento.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 w-full rounded-2xl bg-[#E8527A] py-3.5 text-[16px] font-medium text-white transition hover:bg-[#D93F68] disabled:opacity-70"
              >
                {status === "loading" ? "Enviando..." : "Sumarme"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Field({ label, error, value, onChange, inputRef, ...rest }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-[#7A6656]">
        {label}
      </span>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-xl border bg-white px-4 py-2.5 text-[15px] text-[#3D2B1F] outline-none transition placeholder:text-[#B7A996] focus:border-[#E8527A] focus:ring-2 focus:ring-[#F6A6BE]/40 ${
          error ? "border-[#B23A3A]" : "border-[#E7DCCC]"
        }`}
        {...rest}
      />
      {error && <span className="mt-1 block text-[12px] text-[#B23A3A]">{error}</span>}
    </label>
  );
}

function SelectField({ label, error, value, onChange, options }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-[#7A6656]">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-xl border bg-white px-4 py-2.5 text-[15px] text-[#3D2B1F] outline-none transition focus:border-[#E8527A] focus:ring-2 focus:ring-[#F6A6BE]/40 ${
          error ? "border-[#B23A3A]" : "border-[#E7DCCC]"
        }`}
      >
        <option value="">Elegí una opción</option>
        {options.map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </select>
      {error && <span className="mt-1 block text-[12px] text-[#B23A3A]">{error}</span>}
    </label>
  );
}

function SuccessView({ onClose }) {
  return (
    <div className="pt-2 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#E7F5EC] text-2xl">
        🍦
      </div>
      <h2 className="text-[22px] font-semibold text-[#3D2B1F]">
        ¡Ya estás adentro!
      </h2>
      <p className="mt-2 text-[15px] leading-relaxed text-[#7A6656]">
        En un rato te llega un email con tu cupón. Mientras tanto, seguí
        mirando los sabores.
      </p>
      <button
        onClick={onClose}
        className="mt-6 w-full rounded-2xl bg-[#3D2B1F] py-3 text-[15px] font-medium text-white transition hover:bg-[#2b1e15]"
      >
        Seguir mirando
      </button>
    </div>
  );
}