import React, { useState, useEffect } from "react";
import { X, Gift, Sparkles, Loader2, CheckCircle2 } from "lucide-react";
import { Input } from "../ui/input";
import { api } from "../../lib/api";
import { toast } from "sonner";

const STORAGE_KEY = "daribnb_exit_popup_shown";

export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      sessionStorage.setItem(STORAGE_KEY, "1");
      setOpen(true);
    };

    // Desktop: mouse leaves top of viewport
    const onMouseLeave = (e) => {
      if (e.clientY <= 0) trigger();
    };

    // Mobile fallback: trigger after 25s or on fast scroll up
    const timer = setTimeout(trigger, 25000);
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (lastY - y > 80 && y < 400) trigger();
      lastY = y;
    };

    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Nom et téléphone requis.");
      return;
    }
    setLoading(true);
    try {
      await api.post("/contact", {
        name: form.name,
        email: form.email || "noreply@daribnb.ma",
        phone: form.phone,
        service: "les_deux",
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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm fade-up"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
      >
        {/* Header banner */}
        <div className="relative bg-gradient-to-br from-[#C1272D] to-[#A01D22] text-white px-8 pt-8 pb-8">
          <button
            onClick={() => setOpen(false)}
            data-testid="exit-popup-close"
            aria-label="Fermer"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
          >
            <X size={18} />
          </button>
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            <Gift size={13} />
            Offre limitée
          </div>
          <h3 className="text-2xl md:text-3xl font-bold leading-tight">
            Avant de partir…
          </h3>
          <p className="mt-2 text-white/90 text-sm">
            Recevez votre <span className="font-bold">audit Airbnb offert</span>{" "}
            + estimation personnalisée de vos revenus.
          </p>
        </div>

        <div className="px-6 md:px-8 py-6">
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
                  onClick={() => setOpen(false)}
                  className="mt-5 bg-[#C1272D] hover:bg-[#A01D22] text-white rounded-full px-6 py-2.5 font-semibold text-sm"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-start gap-3 mb-5">
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
                    placeholder="Téléphone (+212 ...)"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    className="h-11 rounded-xl border-[#E5E5E5]"
                    required
                  />
                  <Input
                    data-testid="exit-popup-email"
                    type="email"
                    placeholder="Email (optionnel)"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    className="h-11 rounded-xl border-[#E5E5E5]"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    data-testid="exit-popup-submit"
                    className="w-full h-12 bg-[#C1272D] hover:bg-[#A01D22] disabled:opacity-60 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
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
