import React from "react";
import Marquee from "../motion/Marquee";

// Bandeau de preuves réelles qui défile de droite à gauche.
const ITEMS = [
  "4,93/5 sur Airbnb",
  "1 196 avis voyageurs",
  "7 ans de terrain",
  "Tanger · Rabat · Casablanca · Marrakech",
  "Airbnb · Booking · Vrbo",
  "Ménage aux standards hôteliers",
  "Loyer fixe garanti",
  "Propriétaires MRE gérés à distance",
];

export default function ProofBand() {
  return (
    <section aria-label="Daribnb en bref" className="overflow-hidden py-6">
      <div className="-mx-4 -rotate-1 bg-[#C1272D] py-4 text-white shadow-lg">
      <Marquee duration={36}>
        {ITEMS.map((t) => (
          <span key={t} className="flex items-center gap-10 whitespace-nowrap font-heading text-lg font-semibold md:text-xl">
            {t}
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white/70" aria-hidden="true">
              <path d="M12 1l2.6 6.3L21 9l-5 4.2L17.6 20 12 16.4 6.4 20 8 13.2 3 9l6.4-1.7z" />
            </svg>
          </span>
        ))}
      </Marquee>
      </div>
    </section>
  );
}
