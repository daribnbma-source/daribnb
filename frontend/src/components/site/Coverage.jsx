import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

// Tanger en premier (focus SEO) + lien vers la page dédiée pour consolider le ranking
const CITIES = [
  { name: "Tanger", to: "/conciergerie-airbnb-tanger", primary: true },
  { name: "Marrakech" },
  { name: "Casablanca" },
  { name: "Rabat" },
  { name: "Agadir" },
  { name: "Fès" },
  { name: "Essaouira" },
  { name: "Chefchaouen" },
  { name: "El Jadida" },
  { name: "Tétouan" },
  { name: "Ifrane" },
  { name: "Ouarzazate" },
];

const MAP_IMG =
  "https://images.unsplash.com/photo-1518462334125-9683302994df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjd8MHwxfHNlYXJjaHwxfHxtb3JvY2NvJTIwY2l0eXNjYXBlfGVufDB8fHx8MTc3Njg5MjAyNXww&ixlib=rb-4.1.0&q=85&w=1600&h=900";

export default function Coverage() {
  return (
    <section
      data-testid="coverage-section"
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-12">
          <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
            Couverture nationale
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            Présents dans tout le Maroc.
          </h2>
          <p className="mt-4 text-lg text-[#4B5563]">
            Où que soit votre bien, on vient à vous.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <div className="aspect-[21/9] relative">
            <img
              src={MAP_IMG}
              alt="Couverture Maroc Daribnb"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#006233]/90 via-[#006233]/50 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-end p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
              {CITIES.map((c) => {
                const slug = c.name.toLowerCase().replace(/\s|è|é/g, "-");
                const baseCls = `backdrop-blur-md border text-white rounded-xl px-4 py-3 flex items-center gap-2 transition-all ${
                  c.primary
                    ? "bg-[#C1272D]/40 border-white/40 hover:bg-[#C1272D]/55"
                    : "bg-white/15 border-white/20 hover:bg-white/25"
                }`;
                const inner = (
                  <>
                    <MapPin size={14} className="text-[#C1272D]" />
                    <span className="font-semibold text-sm">{c.name}</span>
                    {c.primary && (
                      <span className="ml-auto text-[10px] uppercase tracking-wider text-white/80 font-bold">
                        Voir →
                      </span>
                    )}
                  </>
                );
                return c.to ? (
                  <Link
                    key={c.name}
                    to={c.to}
                    data-testid={`city-card-${slug}`}
                    className={baseCls}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div
                    key={c.name}
                    data-testid={`city-card-${slug}`}
                    className={baseCls}
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
