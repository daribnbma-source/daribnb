import React from "react";
import { Check, Zap, Shield, Rocket } from "lucide-react";

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
    color: "white",
    cta: "Je veux la conciergerie",
  },
  {
    id: "super",
    tag: "Boost one-shot",
    icon: Rocket,
    title: "Super Daribnb",
    price: "Sur mesure",
    unit: "prestation unique",
    desc: "L'audit + optimisation complète de votre annonce. Vous gérez, on transforme vos revenus.",
    features: [
      "Photos professionnelles",
      "Refonte annonce & SEO",
      "Stratégie tarifaire",
      "Coaching 1-to-1 inclus",
      "Objectif CA fixé ensemble",
    ],
    color: "dark",
    cta: "Booster mon annonce",
    highlight: true,
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
      "Revenu garanti même basse saison",
      "Virement mensuel ponctuel",
      "Entretien pris en charge",
      "Contrat professionnel",
    ],
    color: "green",
    cta: "Je veux le loyer fixe",
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

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {PLANS.map((p) => {
            const isGreen = p.color === "green";
            const isDark = p.color === "dark";
            const baseCls = isGreen
              ? "bg-[#006233] text-white"
              : isDark
              ? "bg-gradient-to-br from-[#1A1A1A] via-[#2a2a2a] to-[#1A1A1A] text-white"
              : "bg-white border border-[#E5E5E5] text-[#1A1A1A]";
            return (
              <div
                key={p.id}
                data-testid={`pricing-${p.id}`}
                className={`relative rounded-3xl p-8 md:p-10 transition-all hover:shadow-2xl overflow-hidden ${baseCls} ${
                  p.highlight ? "md:scale-[1.03] md:-translate-y-2 shadow-xl" : ""
                }`}
              >
                {isDark && (
                  <>
                    <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#FF5A5F]/15 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#006233]/15 rounded-full blur-3xl pointer-events-none" />
                  </>
                )}
                {p.tag && (
                  <div
                    className={`relative inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-5 ${
                      isGreen
                        ? "bg-[#FF5A5F] text-white"
                        : isDark
                        ? "bg-gradient-to-r from-[#FF5A5F] to-[#FF8A5F] text-white shadow-lg"
                        : "bg-[#1A1A1A] text-white"
                    }`}
                  >
                    {p.tag}
                  </div>
                )}
                <div
                  className={`relative w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    isGreen || isDark ? "bg-white/15" : "bg-[#FF5A5F]/10"
                  }`}
                >
                  <p.icon
                    className={`w-6 h-6 ${
                      isGreen || isDark ? "text-white" : "text-[#FF5A5F]"
                    }`}
                  />
                </div>
                <h3 className="relative text-2xl font-bold mb-2">
                  {isDark ? (
                    <>
                      <span className="bg-gradient-to-r from-[#FF5A5F] to-[#FF8A5F] bg-clip-text text-transparent">
                        Super
                      </span>{" "}
                      Daribnb
                    </>
                  ) : (
                    p.title
                  )}
                </h3>
                <div className="relative flex items-baseline gap-2 mb-4 flex-wrap">
                  <span className="text-4xl md:text-5xl font-black">{p.price}</span>
                  <span
                    className={`text-sm ${
                      isGreen || isDark ? "text-white/75" : "text-[#4B5563]"
                    }`}
                  >
                    {p.unit}
                  </span>
                </div>
                <p
                  className={`relative mb-6 text-[15px] ${
                    isGreen || isDark ? "text-white/85" : "text-[#4B5563]"
                  }`}
                >
                  {p.desc}
                </p>
                <ul className="relative space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          isGreen
                            ? "bg-white/20"
                            : isDark
                            ? "bg-[#FF5A5F]/20"
                            : "bg-[#006233]/10"
                        }`}
                      >
                        <Check
                          size={12}
                          className={
                            isGreen
                              ? "text-white"
                              : isDark
                              ? "text-[#FF5A5F]"
                              : "text-[#006233]"
                          }
                          strokeWidth={3}
                        />
                      </span>
                      <span
                        className={`text-sm ${
                          isGreen || isDark ? "text-white/95" : "text-[#1A1A1A]"
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
                  className={`relative block text-center rounded-full px-6 py-4 font-semibold transition-all ${
                    isGreen
                      ? "bg-white text-[#006233] hover:bg-[#f5f5f5]"
                      : isDark
                      ? "bg-gradient-to-r from-[#FF5A5F] to-[#FF8A5F] text-white hover:opacity-90 shadow-lg"
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
