import React from "react";
import { Award, Users, MapPin, TrendingUp, Plane, GraduationCap, Home } from "lucide-react";

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
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Airbnb profile card — real screenshot */}
        <div className="relative">
          <div className="relative bg-[#FAF9F6] rounded-3xl p-6 md:p-8 shadow-xl border border-[#E5E5E5]">
            <div className="flex items-center justify-between mb-4">
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

            <p className="mt-4 text-xs text-[#4B5563] text-center italic">
              Capture d'écran directe de mon compte Airbnb
            </p>
          </div>

          {/* Floating badge */}
          <div
            data-testid="expertise-badge"
            className="hidden md:block absolute -bottom-6 -right-6 bg-[#FF5A5F] text-white rounded-2xl p-5 shadow-2xl max-w-[200px]"
          >
            <div className="text-3xl font-black">4,93★</div>
            <div className="text-xs leading-tight mt-1">
              sur +1 196 évaluations Airbnb
            </div>
          </div>
        </div>

        {/* Story copy */}
        <div>
          <span className="text-sm font-bold text-[#FF5A5F] uppercase tracking-wider">
            Mon histoire
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            Un MRE, une double expertise, une vraie passion.
          </h2>
          <p className="mt-6 text-lg text-[#4B5563] leading-relaxed">
            Je suis <span className="font-semibold text-[#1A1A1A]">Marwan</span>,
            Marocain Résident à l'Étranger. Rentré au Maroc après plusieurs
            années en France, j'ai bâti Daribnb pour partager ce que j'ai
            appris : rigueur française, hospitalité marocaine, et un vrai
            savoir-faire Airbnb.
          </p>
          <p className="mt-4 text-lg text-[#4B5563] leading-relaxed">
            Ingénieur industriel de formation, coach, formateur et expert Airbnb
            depuis plus de 6 ans — <strong>+1 196 évaluations</strong> et une note moyenne
            de <strong>4,93/5</strong>. Et surtout : propriétaire moi-même. Je
            gère vos biens comme les miens.
          </p>

          <div className="mt-10 space-y-4">
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

          <div className="mt-10 grid grid-cols-2 gap-4">
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
    </section>
  );
}
