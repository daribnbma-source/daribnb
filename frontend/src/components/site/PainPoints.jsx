import React from "react";
import { AlertTriangle, Moon, ThermometerSnowflake, TrendingDown, Lock, Clock } from "lucide-react";

const SELF_MANAGED = [
  { icon: Moon, text: "Répondre aux voyageurs à minuit pour un souci de check-in" },
  { icon: Clock, text: "Perdre vos soirées et weekends sur le calendrier, le ménage, les messages" },
  { icon: ThermometerSnowflake, text: "Fixer vos prix à l'instinct, sans données de marché" },
];

const CLASSIC_RENTAL = [
  { icon: TrendingDown, text: "Un loyer fixe, plafonné, qui ne suit pas le potentiel réel de votre bien" },
  { icon: AlertTriangle, text: "Le risque de loyers impayés ou de dégradations, sans recours rapide" },
  { icon: Lock, text: "Zéro flexibilité : impossible de récupérer le bien pour vous-même" },
];

export default function PainPoints() {
  return (
    <section data-testid="painpoints-section" className="bg-[#FAF9F6] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
            Deux situations, une même perte
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            Que vous gériez seul ou que vous soyez en location classique, vous laissez de l'argent sur la table.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="rounded-3xl border border-[#E5E5E5] bg-white p-8 md:p-10">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">
              Vous gérez votre Airbnb vous-même ?
            </h3>
            <ul className="space-y-4">
              {SELF_MANAGED.map((p) => (
                <li key={p.text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#C1272D]/10">
                    <p.icon size={16} className="text-[#C1272D]" />
                  </span>
                  <span className="text-[15px] text-[#4B5563]">{p.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-[#E5E5E5] bg-white p-8 md:p-10">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">
              Votre bien est en location longue durée classique ?
            </h3>
            <ul className="space-y-4">
              {CLASSIC_RENTAL.map((p) => (
                <li key={p.text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#006233]/10">
                    <p.icon size={16} className="text-[#006233]" />
                  </span>
                  <span className="text-[15px] text-[#4B5563]">{p.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-[#1A1A1A] p-8 text-center md:p-10">
          <p className="text-lg text-white md:text-xl">
            Dans les deux cas, la conciergerie change la donne :{" "}
            <span className="font-bold">vous gardez la propriété, on s'occupe de tout</span>, et
            votre bien travaille enfin pour vous.
          </p>
        </div>
      </div>
    </section>
  );
}
