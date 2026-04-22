import React from "react";
import { Check, Zap, Shield } from "lucide-react";

const PLANS = [
  {
    id: "commission",
    tag: "Flexible",
    icon: Zap,
    title: "Conciergerie",
    price: "20%",
    unit: "de commission",
    desc: "Vous gardez la main sur vos revenus. On prend un pourcentage uniquement si vous gagnez.",
    features: [
      "Aucun frais fixe",
      "Revenus optimisés",
      "Rapport mensuel transparent",
      "Idéal pour maximiser le potentiel",
    ],
    color: "red",
    cta: "Je veux la conciergerie",
  },
  {
    id: "fixed",
    tag: "Populaire",
    icon: Shield,
    title: "Loyer Fixe Garanti",
    price: "~70%",
    unit: "du revenu estimé, net",
    desc: "Vous recevez un loyer fixe chaque mois, on gère le reste. Zéro risque, zéro effort.",
    features: [
      "Revenu garanti même en basse saison",
      "Virement mensuel ponctuel",
      "Entretien pris en charge",
      "Contrat professionnel",
    ],
    color: "green",
    cta: "Je veux le loyer fixe",
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section
      id="tarifs"
      data-testid="pricing-section"
      className="py-24 md:py-32 bg-[#FAF9F6]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-bold text-[#FF5A5F] uppercase tracking-wider">
            Tarifs transparents
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            Choisissez votre formule.
          </h2>
          <p className="mt-4 text-lg text-[#4B5563]">
            Pas de frais cachés. Pas d'engagement abusif. On aligne nos
            intérêts sur les vôtres.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PLANS.map((p) => {
            const isGreen = p.color === "green";
            return (
              <div
                key={p.id}
                data-testid={`pricing-${p.id}`}
                className={`relative rounded-3xl p-8 md:p-10 transition-all hover:shadow-2xl ${
                  isGreen
                    ? "bg-[#006233] text-white"
                    : "bg-white border border-[#E5E5E5]"
                } ${p.highlight ? "md:scale-105" : ""}`}
              >
                {p.tag && (
                  <div
                    className={`absolute -top-3 left-8 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      isGreen
                        ? "bg-[#FF5A5F] text-white"
                        : "bg-[#1A1A1A] text-white"
                    }`}
                  >
                    {p.tag}
                  </div>
                )}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    isGreen ? "bg-white/15" : "bg-[#FF5A5F]/10"
                  }`}
                >
                  <p.icon
                    className={`w-6 h-6 ${
                      isGreen ? "text-white" : "text-[#FF5A5F]"
                    }`}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-black">{p.price}</span>
                  <span
                    className={`text-sm ${
                      isGreen ? "text-white/80" : "text-[#4B5563]"
                    }`}
                  >
                    {p.unit}
                  </span>
                </div>
                <p
                  className={`mb-6 ${
                    isGreen ? "text-white/85" : "text-[#4B5563]"
                  }`}
                >
                  {p.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isGreen ? "bg-white/20" : "bg-[#006233]/10"
                        }`}
                      >
                        <Check
                          size={12}
                          className={isGreen ? "text-white" : "text-[#006233]"}
                          strokeWidth={3}
                        />
                      </span>
                      <span
                        className={`text-sm ${
                          isGreen ? "text-white/95" : "text-[#1A1A1A]"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  data-testid={`pricing-cta-${p.id}`}
                  className={`block text-center rounded-full px-6 py-4 font-semibold transition-all ${
                    isGreen
                      ? "bg-white text-[#006233] hover:bg-[#f5f5f5]"
                      : "bg-[#FF5A5F] text-white hover:bg-[#E0484D]"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
