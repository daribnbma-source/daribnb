import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Sparkles, Clock, ShieldCheck, Repeat } from "lucide-react";
import ServicePageLayout from "./ServicePageLayout";

const SITE = "https://www.daribnb.com";
const URL = `${SITE}/menage-airbnb-tanger`;

const PILLARS = [
  {
    icon: Sparkles,
    title: "Standard hôtelier",
    desc: "Protocole de ménage identique à chaque passage : draps, salle de bain, cuisine, sols. Contrôle qualité systématique avant chaque check-in.",
  },
  {
    icon: Clock,
    title: "Entre chaque voyageur",
    desc: "Ménage complet à chaque départ, coordonné avec le calendrier de réservations. Zéro créneau raté, zéro voyageur qui attend.",
  },
  {
    icon: Repeat,
    title: "Linge géré de A à Z",
    desc: "Draps, serviettes, peignoirs : lavage, séchage, repassage et remplacement inclus. Stock de linge de rechange toujours disponible.",
  },
  {
    icon: ShieldCheck,
    title: "Équipe fixe et formée",
    desc: "Pas de prestataire au hasard : une équipe dédiée, formée à nos standards, qui connaît vos biens et votre exigence de qualité.",
  },
];

const INCLUS = [
  "Nettoyage complet (sols, surfaces, sanitaires, cuisine)",
  "Changement et lavage du linge de lit et de toilette",
  "Réassort des consommables (papier toilette, savon, café/thé)",
  "Vérification de l'état du logement (casse, usure, maintenance à signaler)",
  "Aération et désodorisation avant chaque arrivée",
  "Photos de contrôle qualité envoyées après chaque prestation",
];

export default function MenageAirbnbTanger() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Ménage Airbnb Tanger — Nettoyage location courte durée",
    serviceType: "Service de ménage et entretien pour locations courte durée",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE}/#business`,
      name: "Daribnb",
      url: SITE,
      telephone: "+212726156448",
      email: "daribnb.ma@gmail.com",
    },
    areaServed: [
      { "@type": "City", name: "Tanger" },
      { "@type": "City", name: "Casablanca" },
      { "@type": "City", name: "Rabat" },
      { "@type": "City", name: "Marrakech" },
    ],
    description:
      "Service de ménage professionnel entre chaque voyageur pour locations Airbnb à Tanger : nettoyage complet, gestion du linge, contrôle qualité systématique.",
    url: URL,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Le ménage Airbnb est-il inclus dans la conciergerie Daribnb ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, le ménage entre chaque voyageur est inclus dans notre formule conciergerie complète. Vous pouvez aussi souscrire au ménage seul si vous gérez déjà votre annonce vous-même.",
        },
      },
      {
        "@type": "Question",
        name: "Combien coûte un ménage Airbnb à Tanger ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le tarif dépend de la surface du bien et de la fréquence des passages. Contactez-nous pour une estimation gratuite adaptée à votre logement.",
        },
      },
      {
        "@type": "Question",
        name: "Le linge est-il fourni par Daribnb ou par le propriétaire ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous gérons le lavage et le remplacement du linge existant. Un stock de linge de rechange est disponible pour éviter tout retard entre deux réservations.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous en dehors de Tanger ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, notre service de ménage Airbnb est disponible à Tanger, Casablanca, Rabat et Marrakech.",
        },
      },
    ],
  };

  return (
    <ServicePageLayout
      title="Ménage Airbnb Tanger | Daribnb — Nettoyage location courte durée"
      description="Service de ménage professionnel pour Airbnb à Tanger : nettoyage complet entre chaque voyageur, gestion du linge, contrôle qualité. Estimation gratuite en 24h."
      canonical={URL}
      h1="Ménage Airbnb à Tanger"
      kicker="Nettoyage · Location courte durée"
      intro="Un logement impeccable à chaque check-in, sans que vous ayez à y penser. Daribnb gère le ménage complet de votre Airbnb entre chaque voyageur : nettoyage, linge, contrôle qualité — à Tanger et dans tout le Maroc."
      schema={[schema, faqSchema]}
    >
      {/* 4 piliers */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Notre standard
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Un ménage qui protège votre note Airbnb.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              La propreté est le premier critère des avis voyageurs. On en a fait une priorité opérationnelle, pas une option.
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
                  <div className="w-12 h-12 rounded-xl bg-[#006233]/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#006233]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">{p.title}</h3>
                  <p className="mt-2 text-[#4B5563] leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-10">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Prestation détaillée
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Ce qui est inclus à chaque passage.
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-black/5">
            <ul className="grid md:grid-cols-2 gap-4">
              {INCLUS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={20} className="text-[#006233] flex-shrink-0 mt-0.5" />
                  <span className="text-[#4B5563]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Deux formules */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Deux façons de travailler avec nous
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Ménage seul, ou conciergerie complète.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FAF9F6] rounded-2xl p-8 border border-black/5">
              <h3 className="text-xl font-bold text-[#1A1A1A]">Ménage seul</h3>
              <p className="mt-2 text-[#4B5563] leading-relaxed">
                Vous gérez déjà votre annonce et vos voyageurs, vous avez juste besoin d'une équipe de ménage fiable et coordonnée avec votre calendrier de réservations.
              </p>
            </div>
            <div className="bg-[#1A1A1A] text-white rounded-2xl p-8 border border-black/5">
              <h3 className="text-xl font-bold">Conciergerie complète</h3>
              <p className="mt-2 text-white/80 leading-relaxed">
                Le ménage inclus dans un service complet : annonce, voyageurs, check-in, maintenance et pricing. Zéro gestion de votre côté.
              </p>
              <Link
                to="/conciergerie-airbnb-tanger"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white"
              >
                Découvrir la conciergerie <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8">
            Sur le même sujet
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                to: "/conciergerie-airbnb-tanger",
                title: "Conciergerie Airbnb Tanger",
                desc: "Le service complet : annonce, voyageurs, ménage, check-in, maintenance.",
              },
              {
                to: "/gestion-locative-tanger",
                title: "Gestion locative Tanger",
                desc: "Confiez la gestion complète de votre bien en location courte durée.",
              },
              {
                to: "/optimiser-revenus-airbnb",
                title: "Audit & optimisation",
                desc: "Vous gérez déjà mais vous voulez booster vos revenus ? Service d'audit dématérialisé.",
              },
            ].map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="block bg-white rounded-2xl p-6 shadow-sm border border-black/5 hover:shadow-md hover:border-[#C1272D]/30 transition-all group"
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
