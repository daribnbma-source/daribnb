import React from "react";
import { Star, Quote } from "lucide-react";

const T = [
  {
    n: "Karim B.",
    c: "Propriétaire à Marrakech",
    q: "Daribnb a doublé mes revenus en 3 mois. L'équipe est au top et super réactive.",
    r: 5,
  },
  {
    n: "Leïla M.",
    c: "Propriétaire à Casablanca",
    q: "J'ai choisi le loyer fixe, je reçois mon virement chaque 5 du mois. Tranquillité totale.",
    r: 5,
  },
  {
    n: "Youssef A.",
    c: "Propriétaire à Agadir",
    q: "Photos pro, annonce parfaite, voyageurs de qualité. Je recommande les yeux fermés.",
    r: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      data-testid="testimonials-section"
      className="py-24 md:py-32 bg-[#FAF9F6]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-bold text-[#006233] uppercase tracking-wider">
            Témoignages
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            Ils nous font confiance.
          </h2>
          <div className="mt-4 flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className="fill-[#C1272D] text-[#C1272D]"
              />
            ))}
            <span className="ml-2 font-bold text-[#1A1A1A]">4.9/5</span>
            <span className="text-[#4B5563]">· +150 propriétaires</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {T.map((t, i) => (
            <div
              key={t.n}
              data-testid={`testimonial-card-${i + 1}`}
              className="bg-white rounded-2xl p-8 border border-[#E5E5E5] hover:shadow-lg transition-all"
            >
              <Quote className="w-8 h-8 text-[#C1272D]/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.r)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-[#C1272D] text-[#C1272D]"
                  />
                ))}
              </div>
              <p className="text-[#1A1A1A] text-[15px] leading-relaxed mb-6">
                "{t.q}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#E5E5E5]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C1272D] to-[#006233] flex items-center justify-center text-white font-bold">
                  {t.n.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[#1A1A1A] text-sm">
                    {t.n}
                  </div>
                  <div className="text-xs text-[#4B5563]">{t.c}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
