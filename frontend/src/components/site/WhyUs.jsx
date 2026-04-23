import React from "react";
import { Award, Users, MapPin, TrendingUp, Plane, GraduationCap, Home, Quote } from "lucide-react";

const STATS = [
  { icon: Award, v: "6+", l: "années d'expertise Airbnb" },
  { icon: Users, v: "+1 196", l: "évaluations Airbnb" },
  { icon: MapPin, v: "Tout", l: "le Maroc couvert" },
  { icon: TrendingUp, v: "+40%", l: "de revenus en moyenne" },
];

const STORY_POINTS = [
  {
    icon: Plane,
    title: "MRE de retour au Maroc",
    text: "Après plusieurs années en France (étudié à Troyes), j'ai choisi de rentrer et de mettre mon expérience au service des propriétaires marocains.",
  },
  {
    icon: GraduationCap,
    title: "Coach, formateur & expert Airbnb",
    text: "Je ne me contente pas de gérer : je forme, je conseille, j'optimise. Chaque bien mérite une stratégie.",
  },
  {
    icon: Home,
    title: "Propriétaire moi-même",
    text: "Je gère mes propres biens en Airbnb. Je connais vos doutes, vos contraintes et ce qui fonctionne vraiment.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="histoire"
      data-testid="why-us-section"
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Intro personal header with portrait */}
        <div className="max-w-4xl mb-16 flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="relative flex-shrink-0">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-[#FF5A5F]/20">
              <img
                src="/assets/marwan-portrait.png"
                alt="Marwan, fondateur de Daribnb"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-lg">
              <div className="w-8 h-8 rounded-full bg-[#006233] flex items-center justify-center text-white text-lg">
                🇲🇦
              </div>
            </div>
          </div>
          <div>
            <span className="text-sm font-bold text-[#FF5A5F] uppercase tracking-wider">
              Mon histoire
            </span>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
              Enchanté, moi c'est <span className="text-[#FF5A5F]">Marwan</span>.
            </h2>
            <p className="mt-3 text-base md:text-lg text-[#4B5563]">
              Fondateur de Daribnb — expert Airbnb & propriétaire.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Quote + Airbnb profile card */}
          <div className="space-y-8">
            <div className="relative bg-gradient-to-br from-[#006233] to-[#004B27] text-white rounded-3xl p-8 md:p-10 shadow-xl">
              <Quote className="w-10 h-10 text-white/20 mb-4" />
              <p className="text-xl md:text-2xl font-semibold leading-relaxed">
                "J'ai créé Daribnb pour offrir aux propriétaires marocains la
                rigueur française que j'ai apprise en Europe, mêlée à
                l'hospitalité marocaine que je porte en moi."
              </p>
              <div className="mt-6 flex items-center gap-3 pt-6 border-t border-white/15">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                  <img
                    src="/assets/marwan-portrait.png"
                    alt="Marwan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold">Marwan</div>
                  <div className="text-sm text-white/80">Fondateur, Daribnb</div>
                </div>
              </div>
            </div>

            <div className="relative bg-[#FAF9F6] rounded-3xl p-6 shadow-sm border border-[#E5E5E5]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 32 32" className="w-5 h-5" fill="#FF5A5F">
                    <path d="M16 1C7.7 1 1 7.7 1 16s6.7 15 15 15 15-6.7 15-15S24.3 1 16 1zm7.3 22.1c-.7 1-1.8 1.5-3 1.5-1.1 0-2.2-.4-3-1.2-.6-.6-1.1-1.3-1.4-2-.3.7-.8 1.4-1.4 2-.8.8-1.9 1.2-3 1.2s-2.2-.5-3-1.5c-1.2-1.6-1.3-3.7-.3-5.5 1-1.9 2.8-3.6 5.6-5.3.8-.5 1.4-.8 2-1.1.3-.1.5-.2.7-.3.5-.2 1.1-.2 1.6 0 .2.1.4.2.7.3.6.3 1.2.6 2 1.1 2.8 1.7 4.6 3.4 5.6 5.3 1 1.8.9 3.9-.3 5.5z"/>
                  </svg>
                  <span className="text-xs font-semibold text-[#4B5563] uppercase tracking-wider">
                    Profil Airbnb authentique
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 bg-[#006233]/10 text-[#006233] rounded-full px-2.5 py-1 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#006233] animate-pulse" />
                  VÉRIFIÉ
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden bg-white shadow-sm border border-[#E5E5E5]">
                <img
                  src="/assets/airbnb-profile.png"
                  alt="Profil Airbnb de Marwan — 1196 évaluations, 4,93 étoiles, 6 ans hôte"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right: Story copy */}
          <div>
            <p className="text-lg text-[#4B5563] leading-relaxed">
              Je suis <span className="font-semibold text-[#1A1A1A]">Marwan</span>,
              Marocain Résident à l'Étranger. Rentré au Maroc après plusieurs
              années en France, j'ai bâti Daribnb pour partager ce que j'ai
              appris : rigueur française, hospitalité marocaine, et un vrai
              savoir-faire Airbnb.
            </p>
            <p className="mt-4 text-lg text-[#4B5563] leading-relaxed">
              Ingénieur industriel de formation, coach, formateur et expert Airbnb
              depuis plus de 6 ans — <strong>+1 196 évaluations</strong> et une
              note moyenne de <strong>4,93/5</strong>. Et surtout :
              propriétaire moi-même. Je gère vos biens comme les miens.
            </p>

            <div className="mt-8 space-y-4">
              {STORY_POINTS.map((p) => (
                <div
                  key={p.title}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#FAF9F6] border border-[#E5E5E5] hover:border-[#FF5A5F]/30 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#006233]/10 flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-5 h-5 text-[#006233]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A]">{p.title}</h4>
                    <p className="text-sm text-[#4B5563] mt-1">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div
                  key={s.l}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E5E5E5]"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#FF5A5F]/10 flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-4 h-4 text-[#FF5A5F]" />
                  </div>
                  <div>
                    <div className="text-xl font-black text-[#1A1A1A] leading-none">
                      {s.v}
                    </div>
                    <div className="text-xs text-[#4B5563] mt-1 leading-tight">{s.l}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
