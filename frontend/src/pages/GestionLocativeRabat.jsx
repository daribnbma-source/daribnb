import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, TrendingUp, Eye, Lock, Wallet } from "lucide-react";
import ServicePageLayout from "./ServicePageLayout";

const SITE = "https://www.daribnb.com";
const URL = `${SITE}/gestion-locative-rabat`;

const PILLARS = [
  {
    icon: TrendingUp,
    title: "Revenus optimisés",
    desc: "Pricing dynamique calé sur la demande institutionnelle de Rabat, optimisation des annonces, multi-canaux. On vise le rendement maximum toute l'année.",
  },
  {
    icon: Eye,
    title: "Transparence totale",
    desc: "Reporting mensuel détaillé : revenus bruts, charges, net qui vous revient. Aucun frais caché, on partage tout.",
  },
  {
    icon: Lock,
    title: "Équipe locale sur place",
    desc: "Un partenaire Daribnb dédié à Rabat, disponible 7j/7 pour l'accueil voyageurs, le ménage et la maintenance. Pas de gestion à distance approximative.",
  },
  {
    icon: Wallet,
    title: "Versement régulier",
    desc: "Paiement de vos revenus chaque mois, virement bancaire MAD ou EUR selon votre préférence. Réguliers et fiables.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Estimation gratuite",
    desc: "On audite votre bien, on étudie le marché Rabat sur votre quartier, on vous donne une fourchette de revenus réaliste sous 24h.",
  },
  {
    num: "02",
    title: "Mise en gestion",
    desc: "Shoot photo pro, rédaction de l'annonce SEO Airbnb, mise en ligne sur Airbnb + Booking + Vrbo, calage du calendrier et du pricing dynamique.",
  },
  {
    num: "03",
    title: "Gestion quotidienne",
    desc: "Notre partenaire local gère 100% des voyageurs : réservations, communication, check-in, ménage, linge, maintenance. Vous n'avez plus à y penser.",
  },
  {
    num: "04",
    title: "Reporting & versement",
    desc: "Chaque mois, vous recevez un rapport détaillé et le versement de vos revenus nets. Transparence totale sur les chiffres.",
  },
];

export default function GestionLocativeRabat() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Gestion locative Rabat — Location courte durée Airbnb",
    serviceType: "Gestion locative meublée courte durée",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE}/#business`,
      name: "Daribnb",
      url: SITE,
      telephone: "+212726156448",
      email: "daribnb.ma@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rabat",
        addressRegion: "Rabat-Salé-Kénitra",
        addressCountry: "MA",
      },
    },
    areaServed: { "@type": "City", name: "Rabat" },
    description:
      "Service complet de gestion locative pour appartements et maisons à Rabat. Location courte durée Airbnb, équipe locale, transparence et revenus optimisés.",
    url: URL,
  };

  return (
    <ServicePageLayout
      title="Gestion locative à Rabat | Daribnb — Location courte durée Airbnb"
      description="Confiez la gestion locative de votre appartement à Rabat à Daribnb. Équipe locale, transparence totale, revenus optimisés. Estimation gratuite en 24h."
      canonical={URL}
      h1="Gestion locative à Rabat"
      kicker="Location courte durée · Rabat"
      intro="Daribnb gère votre bien à Rabat en location meublée courte durée (Airbnb, Booking, Vrbo), avec une équipe locale sur place. On s'occupe de tout : annonces, voyageurs, ménage, maintenance. Vous récupérez votre revenu, sans la charge mentale."
      schema={schema}
    >
      {/* 4 piliers */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Notre approche
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              4 promesses concrètes.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              On a construit Daribnb sur ces 4 principes. Pas de blabla marketing, des engagements tenus chaque mois.
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

      {/* Process en 4 étapes */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Comment on travaille
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              De l'estimation au premier voyageur, en quelques jours.
            </h2>
          </div>

          <ol className="space-y-6">
            {STEPS.map((s) => (
              <li
                key={s.num}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-black/5 flex gap-6"
              >
                <div className="flex-shrink-0 text-3xl md:text-4xl font-black text-[#C1272D]/30">
                  {s.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">{s.title}</h3>
                  <p className="mt-2 text-[#4B5563] leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Quartiers Rabat */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-8">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              On connaît votre quartier
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Rabat, quartier par quartier.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Notre équipe locale gère des biens dans les quartiers stratégiques de Rabat. La rentabilité varie fortement selon l'emplacement — on connaît les chiffres réels par zone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Agdal", note: "Clientèle business, bien desservi" },
              { name: "Hay Riad", note: "Standing, proche ministères" },
              { name: "Hassan", note: "Touristes culturels, médina proche" },
              { name: "Médina", note: "Charme historique, voyageurs internationaux" },
              { name: "Souissi", note: "Villas, séjours familiaux haut de gamme" },
              { name: "Riyad", note: "Résidentiel calme, longs séjours" },
            ].map((q) => (
              <div
                key={q.name}
                className="bg-[#FAF9F6] rounded-xl p-5 border border-black/5"
              >
                <h3 className="font-bold text-[#1A1A1A]">{q.name}</h3>
                <p className="mt-1 text-sm text-[#4B5563]">{q.note}</p>
              </div>
            ))}
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
                to: "/conciergerie-airbnb-rabat",
                title: "Conciergerie Airbnb Rabat",
                desc: "Le détail des services inclus dans la conciergerie : annonces, voyageurs, ménage, check-in.",
              },
              {
                to: "/menage-airbnb-tanger",
                title: "Ménage Airbnb",
                desc: "Notre standard de ménage entre chaque voyageur : linge, contrôle qualité, équipe fixe.",
              },
              {
                to: "/gestion-locative-tanger",
                title: "Gestion locative Tanger",
                desc: "Notre marché historique. Plus de 7 ans d'expérience, 4,93/5 sur près de 1 200 avis.",
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
