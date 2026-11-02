import React from "react";
import { FlagFR, FlagMA } from "../brand/Flags";
import { Award, Users, MapPin, TrendingUp, Plane, GraduationCap, Home, Quote, Crown } from "lucide-react";

const STATS = [
  { icon: Award, v: "7+", l: "années d'expertise Airbnb" },
  { icon: Users, v: "+1 196", l: "évaluations Airbnb" },
  { icon: MapPin, v: "4", l: "villes : Marrakech, Tanger, Rabat, Casa" },
  { icon: TrendingUp, v: "+40%", l: "de revenus en moyenne" },
];

const STORY_POINTS = [
  {
    icon: Plane,
    title: "MRE, marocain et fier de l'être",
    text: "Marocain de cœur, Français de formation (ingénieur, études à Troyes). Je suis rentré pour apporter aux propriétaires marocains l'exigence et la méthode à la française.",
  },
  {
    icon: GraduationCap,
    title: "7+ ans d'Airbnb, de nombreux biens gérés",
    text: "Plus de 7 ans à faire tourner des logements, aujourd'hui de nombreux biens gérés sur le marché marocain. Je forme aussi d'autres hôtes avec Rentimmo Academy.",
  },
  {
    icon: Home,
    title: "Propriétaire moi-même",
    text: "Je gère mes propres biens en Airbnb. Je connais vos doutes, vos contraintes et ce qui fonctionne vraiment.",
  },
  {
    icon: Crown,
    title: "Pour les propriétaires exigeants",
    text: "Daribnb n'est pas faite pour tout le monde : on travaille avec des propriétaires qui visent le top 1 % des loueurs et la meilleure rentabilité possible.",
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
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-[#C1272D]/20">
              <img
                src="/assets/marwan-portrait.webp"
                alt="Marwan, fondateur de Daribnb"
                width="480"
                height="581"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-lg">
              <div className="flex items-center gap-1 rounded-full px-1.5 py-1">
                <FlagFR className="h-4 w-6 rounded-[3px] ring-1 ring-black/10" />
                <FlagMA className="h-4 w-6 rounded-[3px] ring-1 ring-black/10" />
              </div>
            </div>
          </div>
          <div>
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Mon histoire
            </span>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
              Enchanté, moi c'est <span className="text-[#C1272D]">Marwan</span>.
            </h2>
            <p className="mt-3 text-base md:text-lg text-[#4B5563]">
              Fondateur de Daribnb. MRE, marocain et fier de l'être, français aussi : 7+ ans d'Airbnb à la française.
            </p>
            <div className="mt-5 inline-flex flex-wrap items-center gap-3 rounded-2xl border border-[#E5E5E5] bg-[#F7F6F2] px-4 py-3">
              <span className="flex items-center gap-2 text-sm font-semibold text-[#1A1A1A]">
                <FlagFR className="h-4 w-6 rounded-[3px] ring-1 ring-black/10" /> Savoir-faire français
              </span>
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#C1272D]" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              <span className="flex items-center gap-2 text-sm font-semibold text-[#1A1A1A]">
                <FlagMA className="h-4 w-6 rounded-[3px] ring-1 ring-black/10" /> mis au service du Maroc
              </span>
            </div>
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
                    src="/assets/marwan-portrait.webp"
                    alt="Marwan"
                    width="480"
                    height="581"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold">Marwan</div>
                  <div className="text-sm text-white/80">Fondateur, Daribnb</div>
                </div>
              </div>
            </div>

            <div className="relative bg-[#F7F6F2] rounded-3xl p-6 shadow-sm border border-[#E5E5E5]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <img src="/logos/airbnb-belo.svg" alt="Airbnb" width="20" height="20" className="w-5 h-5" />
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
                  alt="Profil Airbnb de Marwan — 1196 évaluations, 4,93 étoiles, 7 ans hôte"
                  width="509"
                  height="556"
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
              depuis plus de 7 ans — <strong>+1 196 évaluations</strong> et une
              note moyenne de <strong>4,93/5</strong>. Et surtout :
              propriétaire moi-même. Je gère vos biens comme les miens.
            </p>
            <p className="mt-4 text-lg text-[#4B5563] leading-relaxed">
              Je transmets aussi cette expertise via{" "}
              <span className="font-semibold text-[#006233]">Rentimmo Academy</span>
              , l'académie de formation à la conciergerie et à la sous-location
              Airbnb que j'ai fondée en France et au Maroc.
            </p>

            <div className="mt-8 space-y-4">
              {STORY_POINTS.map((p) => (
                <div
                  key={p.title}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#F7F6F2] border border-[#E5E5E5] hover:border-[#C1272D]/30 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#006233]/10 flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-5 h-5 text-[#006233]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A]">{p.title}</h3>
                    <p className="text-sm text-[#4B5563] mt-1">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xs font-bold text-[#4B5563] uppercase tracking-wider mb-3">
                Nos logements à Tanger
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { src: "/assets/logements/logement-1-salon.jpg", alt: "Salon moderne d'un appartement Daribnb à Tanger" },
                  { src: "/assets/logements/logement-1-sejour.jpg", alt: "Séjour lumineux d'un appartement Daribnb à Tanger" },
                  { src: "/assets/logements/logement-2-salon.jpg", alt: "Salon cosy d'un appartement Daribnb à Tanger" },
                  { src: "/assets/logements/logement-2-chambre.jpg", alt: "Chambre d'un appartement Daribnb à Tanger" },
                ].map((img) => (
                  <div key={img.src} className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {STATS.map((s) => (
                <div
                  key={s.l}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E5E5E5]"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#C1272D]/10 flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-4 h-4 text-[#C1272D]" />
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
