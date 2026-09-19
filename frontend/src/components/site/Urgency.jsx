import React from "react";
import { Flame } from "lucide-react";

export default function Urgency() {
  return (
    <section data-testid="urgency-section" className="bg-[#1A1A1A] py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center gap-5 rounded-3xl border border-[#C1272D]/30 bg-[#C1272D]/5 p-8 text-center md:p-10">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C1272D]/15 text-[#C1272D] ring-1 ring-[#C1272D]/40">
            <Flame size={22} strokeWidth={2.2} />
          </span>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#FF6B6B]">
            Places limitées chaque mois
          </p>
          <h3 className="max-w-2xl text-xl font-bold leading-snug text-white md:text-2xl">
            On limite volontairement le nombre de nouveaux biens pris en gestion chaque mois.
          </h3>
          <p className="max-w-xl text-sm text-white/65">
            Shooting photo, paramétrage annonce, calibrage tarifaire : chaque nouveau bien demande
            un vrai temps d'onboarding pour bien démarrer. Pour garder ce niveau de soin sur
            Tanger, Rabat et Casablanca, on ne prend qu'un nombre restreint de biens en simultané.
          </p>
          <a
            href="#contact"
            data-testid="urgency-cta"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#C1272D] px-7 py-4 font-semibold text-white transition-all hover:bg-[#A01D22]"
          >
            Réserver mon créneau d'onboarding
          </a>
        </div>
      </div>
    </section>
  );
}
