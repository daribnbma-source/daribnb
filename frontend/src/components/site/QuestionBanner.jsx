import React, { useState } from "react";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { submitNetlifyForm } from "../../lib/netlifyForm";

// Encadré « Une question ? » (même principe que Rentimmo Academy) : pour ceux qui n'écrivent
// pas sur WhatsApp. Le message arrive comme un lead (formulaire « question ») et on répond.
export default function QuestionBanner() {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const isEmail = form.contact.includes("@");
    try {
      await submitNetlifyForm("question", {
        name: form.name,
        email: isEmail ? form.contact : "",
        phone: isEmail ? "" : form.contact,
        service: "Question",
        message: form.message,
      });
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const field =
    "w-full rounded-xl border border-black/15 bg-white px-4 py-3.5 text-sm text-[#1A1A1A] outline-none placeholder:text-[#1A1A1A]/40 focus:border-[#006233]";

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-3xl rounded-3xl border border-black/10 bg-[#F7F6F2] p-8 shadow-[0_6px_0_rgba(26,26,26,0.06)] md:p-12">
          <p className="text-sm font-bold uppercase tracking-wider text-[#006233]">Contact direct</p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.05] text-[#1A1A1A] md:text-4xl">
            Une question sur votre projet ou sur Airbnb ? <span className="text-[#C1272D]">Écrivez-nous.</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#4B5563]">
            Rentabilité de votre bien, réglementation, gestion à distance, choix entre conciergerie et loyer
            fixe… Posez votre question, on vous répond directement, gratuitement.
          </p>

          {sent ? (
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-[#006233]/25 bg-[#006233]/10 p-5" data-testid="question-success">
              <CheckCircle2 size={24} className="shrink-0 text-[#006233]" />
              <p className="text-sm text-[#1A1A1A]">Message envoyé ! On vous répond sous 24h.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-8 grid gap-4" data-testid="question-form">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  required
                  autoComplete="given-name"
                  aria-label="Votre prénom"
                  placeholder="Votre prénom"
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  className={field}
                />
                <input
                  type="text"
                  required
                  autoComplete="email"
                  aria-label="Votre email ou WhatsApp"
                  placeholder="Votre email ou WhatsApp"
                  value={form.contact}
                  onChange={(e) => setForm((p) => ({ ...p, contact: e.target.value }))}
                  className={field}
                />
              </div>
              <textarea
                rows={3}
                required
                aria-label="Votre question"
                placeholder="Votre question en quelques mots…"
                value={form.message}
                onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                className={`${field} resize-none`}
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#1A1A1A] px-7 py-3.5 text-sm font-bold text-white transition-all hover:gap-3 hover:bg-[#C1272D] disabled:opacity-60"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : <>Envoyer ma question <ArrowRight size={15} /></>}
              </button>
              {error && (
                <p className="text-xs text-[#C1272D]">
                  Une erreur est survenue. Réessayez ou écrivez-nous sur WhatsApp.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
