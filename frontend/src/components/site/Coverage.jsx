import React from "react";
import { MapPin } from "lucide-react";

const CITIES = [
  "Marrakech",
  "Casablanca",
  "Rabat",
  "Tanger",
  "Agadir",
  "Fès",
  "Essaouira",
  "Chefchaouen",
  "El Jadida",
  "Tétouan",
  "Ifrane",
  "Ouarzazate",
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
          <span className="text-sm font-bold text-[#FF5A5F] uppercase tracking-wider">
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
              {CITIES.map((c) => (
                <div
                  key={c}
                  data-testid={`city-card-${c.toLowerCase().replace(/\s|è|é/g, "-")}`}
                  className="bg-white/15 backdrop-blur-md border border-white/20 text-white rounded-xl px-4 py-3 flex items-center gap-2 hover:bg-white/25 transition-all"
                >
                  <MapPin size={14} className="text-[#FF5A5F]" />
                  <span className="font-semibold text-sm">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
