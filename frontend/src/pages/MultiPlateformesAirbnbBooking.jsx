import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Globe, RefreshCcw, BarChart3, Zap } from "lucide-react";
import ServicePageLayout from "./ServicePageLayout";

const SITE = "https://www.daribnb.com";
const URL = `${SITE}/multi-plateformes-airbnb-booking-vrbo`;

const PLATFORMS = [
  {
    name: "Airbnb",
    color: "#FF5A5F",
    bullets: [
      "Optimisation SEO Airbnb (titre, description, catégories)",
      "Smart Pricing + ajustements manuels saisonniers",
      "Gestion des Superhost requirements",
    ],
  },
  {
    name: "Booking.com",
    color: "#003580",
    bullets: [
      "Connexion Genius / Preferred Partner",
      "Gestion des cancellation policies (Flex, Strict)",
      "Optimisation taux de conversion (photos, avis)",
    ],
  },
  {
    name: "Vrbo (Expedia)",
    color: "#FFC72C",
    bullets: [
      "Cible familles et longs séjours, complément Airbnb",
      "Premium Partner program",
      "Fee structure adaptée au marché marocain",
    ],
  },
  {
    name: "Direct Booking",
    color: "#006233",
    bullets: [
      "Site / lien direct sans commission plateforme",
      "Re-target des anciens voyageurs",
      "Marge optimisée sur les longs séjours",
    ],
  },
];

const PILLARS = [
  {
    icon: Globe,
    title: "+ de canaux = + de visibilité",
    desc: "Un bien sur Airbnb seul perd 30 à 50% de son potentiel. Multi-plateformes : on capte les voyageurs qui ne réservent QUE sur Booking ou Vrbo.",
  },
  {
    icon: RefreshCcw,
    title: "Calendrier synchronisé en temps réel",
    desc: "Channel manager pro qui synchronise les dispos sur toutes les plateformes en moins de 30 secondes. Zéro double-réservation.",
  },
  {
    icon: BarChart3,
    title: "Pricing dynamique cross-platform",
    desc: "Les prix s'adaptent à la demande sur chaque plateforme indépendamment. Ce qui marche sur Airbnb n'est pas forcément ce qui marche sur Booking.",
  },
  {
    icon: Zap,
    title: "Setup et migration sans coupure",
    desc: "On reprend votre annonce existante, on l'optimise, on l'étend aux autres plateformes. Aucun blackout, aucune perte de réservations.",
  },
];

export default function MultiPlateformesAirbnbBooking() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Gestion multi-plateformes Airbnb, Booking, Vrbo",
    serviceType: "Channel management location courte durée",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE}/#business`,
      name: "Daribnb",
      url: SITE,
      telephone: "+212646218407",
      email: "daribnb.ma@gmail.com",
    },
    areaServed: [
      { "@type": "City", name: "Tanger" },
      { "@type": "Country", name: "Maroc" },
    ],
    description:
      "Listez votre bien sur Airbnb, Booking et Vrbo simultanément avec un calendrier synchronisé. Optimisation SEO par plateforme, pricing dynamique cross-canal.",
    url: URL,
  };

  return (
    <ServicePageLayout
      title="Gestion Airbnb + Booking + Vrbo | Daribnb — Multi-plateformes synchronisé"
      description="Daribnb diffuse et synchronise votre bien sur Airbnb, Booking et Vrbo. Channel manager pro, pricing dynamique, +30% de revenus vs Airbnb seul."
      canonical={URL}
      h1="Multi-plateformes : Airbnb, Booking, Vrbo synchronisés"
      kicker="Channel management"
      intro="Lister votre bien uniquement sur Airbnb, c'est se priver de 30 à 50% de voyageurs potentiels. Daribnb diffuse votre annonce sur Airbnb, Booking, Vrbo et en direct booking, avec un calendrier synchronisé en temps réel."
      schema={schema}
    >
      {/* 4 piliers */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Pourquoi multi-plateformes ?
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              + de canaux, sans la complexité.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Le multi-plateformes c'est compliqué quand on le fait seul. On gère ça pour vous, sans que vous ayez à toucher quoi que ce soit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-[#FAF9F6] rounded-2xl p-8 border border-black/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C1272D]/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#C1272D]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">{p.title}</h3>
                  <p className="mt-2 text-[#4B5563] leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Plateformes en détail */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Les plateformes qu'on gère
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              4 canaux, optimisés indépendamment.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PLATFORMS.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-black/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: p.color }}
                  >
                    {p.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">{p.name}</h3>
                </div>
                <ul className="space-y-2">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-[#4B5563]"
                    >
                      <Check size={14} className="text-[#006233] mt-1 flex-shrink-0" />
                      <span className="text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mythes & réalités */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
            Idées reçues
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Ce qu'on entend souvent (et la vraie réponse).
          </h2>

          <div className="mt-10 space-y-6">
            {[
              {
                myth: "« Booking c'est pas adapté au Maroc »",
                reality:
                  "Faux. Booking représente 30 à 40% des nuitées sur Tanger pour les voyageurs européens (FR, ES, BE). Beaucoup réservent UNIQUEMENT sur Booking par habitude. S'en priver c'est passer à côté.",
              },
              {
                myth: "« Vrbo c'est pour les Américains, pas pour le Maroc »",
                reality:
                  "Vrai partiellement, mais Vrbo capte aussi les familles européennes qui cherchent des séjours plus longs (1-2 semaines). C'est un canal complémentaire intéressant pour les biens 3+ chambres.",
              },
              {
                myth: "« Le multi-plateformes va créer des doublons et des annulations »",
                reality:
                  "Pas avec un channel manager pro. Synchronisation calendrier en moins de 30 sec, zéro overlap. C'est précisément pour éviter ça qu'on utilise un outil dédié, pas du copy-paste manuel.",
              },
              {
                myth: "« Booking prend 18% de commission, c'est trop cher »",
                reality:
                  "Booking prend 15-18%, Airbnb prend ~14% (host fee + service fee voyageur). Quasi-équivalent. La vraie question : est-ce qu'un canal Booking remplit des nuits qui resteraient vides sur Airbnb ? Réponse : oui, presque toujours.",
              },
            ].map((item) => (
              <div
                key={item.myth}
                className="bg-[#FAF9F6] rounded-2xl p-6 border border-black/5"
              >
                <p className="text-lg font-bold text-[#C1272D] mb-2">
                  {item.myth}
                </p>
                <p className="text-[#1A1A1A] leading-relaxed">
                  <strong className="text-[#006233]">Réalité :</strong> {item.reality}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8">
            Aller plus loin
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                to: "/conciergerie-airbnb-tanger",
                title: "Conciergerie Tanger",
                desc: "Le multi-plateformes est inclus dans notre service de conciergerie complète.",
              },
              {
                to: "/optimiser-revenus-airbnb",
                title: "Optimisation seule",
                desc: "Vous voulez juste qu'on optimise votre Airbnb existant sans gérer ? Service dédié.",
              },
              {
                to: "/loyer-fixe-airbnb-tanger",
                title: "Loyer fixe garanti",
                desc: "Si vous préférez un revenu stable au lieu de gérer les variations cross-platform.",
              },
            ].map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="block bg-white rounded-2xl p-6 border border-black/5 hover:shadow-md hover:border-[#C1272D]/30 transition-all group"
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
    </ServicePageLayout>
  );
}
