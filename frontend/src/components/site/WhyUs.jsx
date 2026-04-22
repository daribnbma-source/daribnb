import React from "react";
import { Award, Users, MapPin, TrendingUp, Plane, GraduationCap, Home } from "lucide-react";

const STATS = [
  { icon: Award, v: "6+", l: "années d'expertise Airbnb" },
  { icon: Users, v: "+150", l: "propriétaires accompagnés" },
  { icon: MapPin, v: "Tout", l: "le Maroc couvert" },
  { icon: TrendingUp, v: "+40%", l: "de revenus en moyenne" },
];

const IMG =
  "https://images.unsplash.com/photo-1750859479417-54383840d7e7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBtb3JvY2NhbiUyMHJpYWQlMjBpbnRlcmlvcnxlbnwwfHx8fDE3NzY4OTIwMjV8MA&ixlib=rb-4.1.0&q=85&w=1200&h=1400";

const STORY_POINTS = [
  {
    icon: Plane,
    title: "MRE de retour au Maroc",
    text: "Après des années en France, j'ai choisi de rentrer et de mettre mon expérience au service des propriétaires marocains.",
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
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
            <img
              src={IMG}
              alt="Riad marocain de luxe"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div
            data-testid="expertise-badge"
            className="absolute -bottom-8 -right-8 bg-[#FF5A5F] text-white rounded-2xl p-6 shadow-2xl max-w-[220px]"
          >
            <div className="text-4xl font-black">6+</div>
            <div className="text-sm leading-tight mt-1">
              années d'expertise Airbnb au Maroc & en France
            </div>
          </div>
        </div>

        <div>
          <span className="text-sm font-bold text-[#FF5A5F] uppercase tracking-wider">
            Mon histoire
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            Un MRE, une double expertise, une vraie passion.
          </h2>
          <p className="mt-6 text-lg text-[#4B5563] leading-relaxed">
            Je suis <span className="font-semibold text-[#1A1A1A]">Marocain
            Résident à l'Étranger</span>. Rentré au Maroc après plusieurs années
            en France, j'ai bâti Daribnb pour partager ce que j'ai appris :
            rigueur française, hospitalité marocaine, et un vrai savoir-faire
            Airbnb.
          </p>
          <p className="mt-4 text-lg text-[#4B5563] leading-relaxed">
            Coach, formateur, expert Airbnb depuis plus de 6 ans — et
            propriétaire moi-même. Je gère vos biens comme les miens.
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
