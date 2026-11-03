import React, { useState, useEffect } from "react";
import { X, Gift, Sparkles, Loader2, CheckCircle2 } from "lucide-react";
import { Input } from "../ui/input";
import { submitNetlifyForm } from "../../lib/netlifyForm";
import { toast } from "sonner";

import { hasConverted } from "../../lib/tracking";

const STORAGE_KEY = "daribnb_exit_popup_dismissed";
const SNOOZE_MS = 14 * 24 * 3600 * 1000;

const snoozed = () => {
  try {
    const t = Number(localStorage.getItem(STORAGE_KEY) || 0);
    return Date.now() - t < SNOOZE_MS;
  } catch {
    return false;
  }
};

// Ordinateur : seulement quand la souris quitte la page par le haut, après une vraie lecture.
// Mobile : petit bandeau en bas après 60 % de défilement, jamais d'écran plein.
// Jamais chez quelqu'un qui a déjà envoyé une demande ou cliqué sur WhatsApp / téléphone.
export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const close = () => {
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {}
    setOpen(false);
  };

  useEffect(() => {
    if (snoozed() || hasConverted()) return;
    const isMobile = !window.matchMedia("(pointer: fine)").matches || window.innerWidth < 1024;
    setMobile(isMobile);
    const start = Date.now();
    let triggered = false;
    const depth = () =>
      (window.scrollY + window.innerHeight) / Math.max(document.documentElement.scrollHeight, 1);
    const trigger = () => {
      if (triggered || hasConverted()) return;
      triggered = true;
      setOpen(true);
    };

    const onMouseLeave = (e) => {
      if (e.clientY <= 0 && Date.now() - start > 20000 && depth() > 0.3) trigger();
    };
    const onScroll = () => {
      if (Date.now() - start > 20000 && depth() > 0.6) trigger();
    };

    if (isMobile) window.addEventListener("scroll", onScroll, { passive: true });
    else document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Nom et téléphone requis.");
      return;
    }
    setLoading(true);
    try {
      await submitNetlifyForm("exit-intent", {
        name: form.name,
        email: form.email || "",
        phone: form.phone,
        message: "Demande via pop-up : Audit Airbnb offert + estimation gratuite",
      });
      setSent(true);
      toast.success("Demande reçue ! On vous rappelle sous 24h.");
    } catch (err) {
      toast.error("Erreur. Réessayez ou contactez-nous par WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      data-testid="exit-intent-popup"
      className={
        mobile
          ? "fixed inset-x-0 bottom-0 z-[100] p-3 fade-up"
          : "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm fade-up"
      }
      onClick={mobile ? undefined : close}
    >
      <div
        role="dialog"
        aria-modal={mobile ? "false" : "true"}
        aria-labelledby="exit-popup-title"
        onClick={(e) => e.stopPropagation()}
        className={`relative mx-auto w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-2xl ${mobile ? "max-h-[45vh]" : "max-h-[92vh]"}`}
      >
        {/* Header banner — sticky so the close X stays accessible while scrolling */}
        <div className={`sticky top-0 z-10 bg-gradient-to-br from-[#C1272D] to-[#A01D22] text-white ${mobile ? "px-5 pt-5 pb-4" : "px-8 pt-8 pb-8"}`}>
          <button
            onClick={close}
            data-testid="exit-popup-close"
            aria-label="Fermer"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
          >
            <X size={18} />
          </button>
          <div className={`inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${mobile ? "mb-2" : "mb-3"}`}>
            <Gift size={13} />
            Audit gratuit
          </div>
          <h3 id="exit-popup-title" className={`${mobile ? "text-xl" : "text-2xl md:text-3xl"} font-bold leading-tight`}>
            Combien votre bien pourrait-il rapporter ?
          </h3>
          <p className={`mt-2 text-white/90 text-sm ${mobile ? "hidden" : ""}`}>
            Recevez votre <span className="font-bold">audit Airbnb offert</span> et une estimation personnalisée de vos revenus, sans engagement.
          </p>
        </div>

        <div className={mobile ? "px-5 py-4" : "px-6 md:px-8 py-6"}>
          {sent ? (
              <div className="text-center py-4" data-testid="exit-popup-success">
                <CheckCircle2 className="w-14 h-14 text-[#006233] mx-auto mb-3" />
                <h4 className="font-bold text-[#1A1A1A] text-lg">
                  Parfait, c'est noté !
                </h4>
                <p className="text-sm text-[#4B5563] mt-2">
                  On vous rappelle sous 24h avec votre audit & estimation.
                </p>
                <button
                  onClick={close}
                  className="mt-5 bg-[#C1272D] hover:bg-[#A01D22] text-white rounded-full px-6 py-2.5 font-semibold text-sm"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <>
                <div className={`${mobile ? "hidden" : "flex"} items-start gap-3 mb-5`}>
                  <div className="w-10 h-10 rounded-full bg-[#C1272D]/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-[#C1272D]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#1A1A1A] font-semibold">
                      100% gratuit. Sans engagement.
                    </p>
                    <p className="text-xs text-[#4B5563] mt-0.5">
                      Laissez vos coordonnées, je vous rappelle personnellement.
                    </p>
                  </div>
                </div>

                <form onSubmit={submit} className="space-y-3">
                  <Input
                    data-testid="exit-popup-name"
                    aria-label="Votre prénom"
                    autoComplete="given-name"
                    autoFocus={!mobile}
                    placeholder="Votre prénom"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    className="h-11 rounded-xl border-[#E5E5E5]"
                    required
                  />
                  <Input
                    data-testid="exit-popup-phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    aria-label="Téléphone ou WhatsApp"
                    placeholder="Téléphone / WhatsApp"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    className="h-11 rounded-xl border-[#E5E5E5]"
                    required
                  />
                  {!mobile && <Input
                    data-testid="exit-popup-email"
                    type="email"
                    autoComplete="email"
                    aria-label="Email (facultatif)"
                    placeholder="Email (facultatif)"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    className="h-11 rounded-xl border-[#E5E5E5]"
                  />}
                  <button
                    type="submit"
                    disabled={loading}
                    data-testid="exit-popup-submit"
                    className="cta-pulse w-full h-12 bg-[#C1272D] hover:bg-[#A01D22] disabled:opacity-60 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      "Recevoir mon audit offert"
                    )}
                  </button>
                </form>
                <p className="text-[11px] text-[#4B5563] text-center mt-3">
                  🇲🇦 Rappel sous 24h par un expert Airbnb local.
                </p>
              </>
            )}
        </div>
      </div>
    </div>
  );
}
