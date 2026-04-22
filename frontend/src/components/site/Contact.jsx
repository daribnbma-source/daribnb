import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { api } from "../../lib/api";
import { Mail, Phone, Loader2, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (k) => (e) =>
    setForm((p) => ({ ...p, [k]: e.target?.value ?? e }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Merci de remplir votre nom, email et téléphone.");
      return;
    }
    setLoading(true);
    try {
      await api.post("/contact", form);
      setSent(true);
      toast.success("Message reçu ! On vous rappelle sous 24h.");
      setForm({ name: "", email: "", phone: "", city: "", service: "", message: "" });
    } catch (err) {
      toast.error("Erreur d'envoi. Réessayez ou contactez-nous par WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 md:py-32 bg-[#FAF9F6]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2">
          <span className="text-sm font-bold text-[#FF5A5F] uppercase tracking-wider">
            Contact
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            Parlons de votre bien.
          </h2>
          <p className="mt-4 text-lg text-[#4B5563]">
            Estimation gratuite. Réponse sous 24h. Aucun engagement.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href="tel:+212646218407"
              data-testid="contact-phone-link"
              className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-[#E5E5E5] hover:border-[#FF5A5F]/40 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FF5A5F]/10 flex items-center justify-center group-hover:bg-[#FF5A5F] group-hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-[#FF5A5F] group-hover:text-white" />
              </div>
              <div>
                <div className="text-xs text-[#4B5563]">Téléphone</div>
                <div className="font-bold text-[#1A1A1A]">
                  +212 6 46 21 84 07
                </div>
              </div>
            </a>

            <a
              href="mailto:daribnb.ma@gmail.com"
              data-testid="contact-email-link"
              className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-[#E5E5E5] hover:border-[#006233]/40 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#006233]/10 flex items-center justify-center group-hover:bg-[#006233] transition-colors">
                <Mail className="w-5 h-5 text-[#006233] group-hover:text-white" />
              </div>
              <div>
                <div className="text-xs text-[#4B5563]">Email</div>
                <div className="font-bold text-[#1A1A1A]">
                  daribnb.ma@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/212646218407?text=Bonjour%20Daribnb"
              target="_blank"
              rel="noreferrer"
              data-testid="contact-whatsapp-link"
              className="flex items-center gap-4 p-5 bg-[#25D366] text-white rounded-2xl hover:bg-[#20bd5a] transition-all shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
              </div>
              <div>
                <div className="text-xs opacity-80">Réponse rapide</div>
                <div className="font-bold">WhatsApp</div>
              </div>
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          {sent ? (
            <div
              data-testid="contact-success"
              className="bg-white rounded-3xl p-10 border border-[#006233]/20 shadow-sm text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-[#006233] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                Message reçu !
              </h3>
              <p className="text-[#4B5563] mb-6">
                On vous rappelle sous 24h. À très vite !
              </p>
              <button
                onClick={() => setSent(false)}
                className="text-[#FF5A5F] font-semibold hover:underline"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form
              onSubmit={submit}
              data-testid="contact-form"
              className="bg-white rounded-3xl p-8 md:p-10 border border-[#E5E5E5] shadow-sm space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-[#1A1A1A] mb-2 block">
                    Nom complet *
                  </label>
                  <Input
                    data-testid="contact-name-input"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Votre nom"
                    className="h-12 rounded-xl border-[#E5E5E5]"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1A1A1A] mb-2 block">
                    Téléphone *
                  </label>
                  <Input
                    data-testid="contact-phone-input"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+212 6 00 00 00 00"
                    className="h-12 rounded-xl border-[#E5E5E5]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-[#1A1A1A] mb-2 block">
                  Email *
                </label>
                <Input
                  data-testid="contact-email-input"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="vous@email.com"
                  className="h-12 rounded-xl border-[#E5E5E5]"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-[#1A1A1A] mb-2 block">
                    Ville du bien
                  </label>
                  <Input
                    data-testid="contact-city-input"
                    value={form.city}
                    onChange={update("city")}
                    placeholder="Marrakech, Casa, ..."
                    className="h-12 rounded-xl border-[#E5E5E5]"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1A1A1A] mb-2 block">
                    Service souhaité
                  </label>
                  <Select
                    value={form.service}
                    onValueChange={(v) => setForm((p) => ({ ...p, service: v }))}
                  >
                    <SelectTrigger
                      data-testid="contact-service-select"
                      className="h-12 rounded-xl border-[#E5E5E5]"
                    >
                      <SelectValue placeholder="Choisir..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conciergerie">Conciergerie Airbnb</SelectItem>
                      <SelectItem value="loyer_fixe">Loyer fixe garanti</SelectItem>
                      <SelectItem value="les_deux">Je ne sais pas, conseillez-moi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-[#1A1A1A] mb-2 block">
                  Message
                </label>
                <Textarea
                  data-testid="contact-message-input"
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Parlez-nous de votre bien..."
                  rows={4}
                  className="rounded-xl border-[#E5E5E5] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                data-testid="contact-submit-btn"
                className="w-full h-14 bg-[#FF5A5F] hover:bg-[#E0484D] disabled:opacity-60 text-white rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-base"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Send size={18} />
                    Envoyer ma demande
                  </>
                )}
              </button>
              <p className="text-xs text-[#4B5563] text-center">
                En envoyant ce formulaire, vous acceptez d'être recontacté par Daribnb.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
