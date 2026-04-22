import React from "react";
import { Award, Users, MapPin, TrendingUp } from "lucide-react";

const STATS = [
  { icon: Award, v: "6+", l: "années d'expertise Airbnb" },
  { icon: Users, v: "+150", l: "propriétaires accompagnés" },
  { icon: MapPin, v: "Tout", l: "le Maroc couvert" },
  { icon: TrendingUp, v: "+40%", l: "de revenus en moyenne" },
];

const IMG =
  "https://images.unsplash.com/photo-1750859479417-54383840d7e7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBtb3JvY2NhbiUyMHJpYWQlMjBpbnRlcmlvcnxlbnwwfHx8fDE3NzY4OTIwMjV8MA&ixlib=rb-4.1.0&q=85&w=1200&h=1400";

export default function WhyUs() {
  return (
    <section
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
              années d'expertise Airbnb au Maroc
            </div>
          </div>
        </div>

        <div>
          <span className="text-sm font-bold text-[#FF5A5F] uppercase tracking-wider">
            Pourquoi Daribnb
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            Le partenaire qui connaît le marché marocain.
          </h2>
          <p className="mt-6 text-lg text-[#4B5563]">
            Depuis plus de 6 ans, on gère des locations courte durée partout
            au Maroc. On connaît les voyageurs, les saisons, les prix. On sait
            ce qui fait exploser un Airbnb — et ce qui le tue.
          </p>
          <p className="mt-4 text-lg text-[#4B5563]">
            Notre promesse : plus de revenus pour vous, zéro prise de tête.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {STATS.map((s) => (
              <div
                key={s.l}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#FAF9F6] border border-[#E5E5E5]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#006233]/10 flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-5 h-5 text-[#006233]" />
                </div>
                <div>
                  <div className="text-2xl font-black text-[#1A1A1A]">
                    {s.v}
                  </div>
                  <div className="text-xs text-[#4B5563] mt-1">{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
