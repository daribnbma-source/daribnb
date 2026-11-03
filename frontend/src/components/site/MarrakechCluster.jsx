import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Maillage interne du cluster Marrakech : chaque page Marrakech pointe vers les autres.
const PAGES = [
  {
    to: "/conciergerie-airbnb-marrakech",
    title: "Conciergerie Airbnb Marrakech",
    desc: "La gestion clé en main sur Airbnb et Booking, dès 20 % de commission : annonce, voyageurs, ménage, check-in.",
  },
  {
    to: "/gestion-locative-marrakech",
    title: "Gestion locative Marrakech",
    desc: "Saisonnalité, quartiers, riad, appartement ou villa : comment nous pilotons votre location courte durée.",
  },
  {
    to: "/conciergerie-riad-marrakech",
    title: "Conciergerie riad Marrakech",
    desc: "Accès en Médina, patio, bassin, terrasse, tadelakt : une gestion pensée pour les riads.",
  },
  {
    to: "/loyer-fixe-airbnb-marrakech",
    title: "Loyer fixe Marrakech",
    desc: "Un montant garanti chaque mois, quelle que soit la saison. La formule préférée des MRE.",
  },
  {
    to: "/blog/conciergerie-airbnb-marrakech-guide-2026",
    title: "Guide 2026 : conciergerie Airbnb à Marrakech",
    desc: "Le guide complet pour louer à Marrakech en courte durée : marché, quartiers, prix, choix d'un gestionnaire.",
  },
];

export default function MarrakechCluster({ current, title = "À Marrakech aussi", bg = "bg-white", cardBg = "bg-[#F7F6F2]" }) {
  const items = PAGES.filter((p) => p.to !== current);
  return (
    <section className={`py-20 md:py-28 ${bg}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
          Marrakech, ville prioritaire
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8">{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className={`block ${cardBg} rounded-2xl p-6 shadow-sm border border-black/5 hover:shadow-md hover:border-[#C1272D]/30 transition-all group`}
            >
              <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#C1272D] transition-colors">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-[#4B5563]">{c.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#C1272D]">
                En savoir plus <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
