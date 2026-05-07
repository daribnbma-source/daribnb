import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, TrendingUp, Eye, Lock, Wallet } from "lucide-react";
import ServicePageLayout from "./ServicePageLayout";

const SITE = "https://www.daribnb.com";
const URL = `${SITE}/gestion-locative-tanger`;

const PILLARS = [
  {
    icon: TrendingUp,
    title: "Revenus optimisés",
    desc: "Pricing dynamique en temps réel, optimisation des annonces, multi-canaux. On vise le rendement maximum sur la saison.",
  },
  {
    icon: Eye,
    title: "Transparence totale",
    desc: "Reporting mensuel détaillé : revenus bruts, charges, net qui vous revient. Aucun frais caché, on partage tout.",
  },
  {
    icon: Lock,
    title: "Sans contraintes",
    desc: "Vous récupérez votre bien quand vous voulez, on bloque les dates pour vos séjours perso. Zéro engagement long terme.",
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
    desc: "On audite votre bien, on étudie le marché Tanger sur votre quartier, on vous donne une fourchette de revenus réaliste sous 24h.",
  },
  {
    num: "02",
    title: "Mise en gestion",
    desc: "Shoot photo pro, rédaction de l'annonce SEO Airbnb, mise en ligne sur Airbnb + Booking + Vrbo, calage du calendrier et du pricing dynamique.",
  },
  {
    num: "03",
    title: "Gestion quotidienne",
    desc: "On gère 100% des voyageurs : réservations, communication, check-in, ménage, linge, maintenance. Vous n'avez plus à y penser.",
  },
  {
    num: "04",
    title: "Reporting & versement",
    desc: "Chaque mois, vous recevez un rapport détaillé et le versement de vos revenus nets. Transparence totale sur les chiffres.",
  },
];

export default function GestionLocativeTanger() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Gestion locative Tanger — Location courte durée Airbnb",
    serviceType: "Gestion locative meublée courte durée",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE}/#business`,
      name: "Daribnb",
      url: SITE,
      telephone: "+212646218407",
      email: "daribnb.ma@gmail.com",
    },
    areaServed: { "@type": "City", name: "Tanger" },
    description:
      "Service complet de gestion locative pour appartements et maisons à Tanger. Location courte durée Airbnb, transparence et revenus optimisés.",
    url: URL,
  };

  return (
    <ServicePageLayout
      title="Gestion locative à Tanger | Daribnb — Location courte durée Airbnb"
      description="Confiez la gestion locative de votre appartement à Tanger à Daribnb. Service complet, transparence totale, revenus optimisés. Sans contraintes."
      canonical={URL}
      h1="Gestion locative à Tanger"
      kicker="Location courte durée · Tanger"
      intro="Daribnb gère votre bien à Tanger en location meublée courte durée (Airbnb, Booking, Vrbo). On s'occupe de tout : annonces, voyageurs, ménage, maintenance. Vous récupérez votre revenu, sans la charge mentale."
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

      {/* Quartiers Tanger */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-8">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              On connaît votre quartier
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Tanger, quartier par quartier.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              On gère des biens dans tous les quartiers stratégiques de Tanger. La rentabilité varie fortement selon l'emplacement — on connaît les chiffres réels par zone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Malabata", note: "Bord de mer, demande été forte" },
              { name: "Centre-ville", note: "Médina, Cap Spartel, voyageurs cosmopolites" },
              { name: "Le Hassani", note: "Résidentiel haut de gamme" },
              { name: "Le Alia", note: "Standing, accès rapide aéroport" },
              { name: "Boubana", note: "Quartier émergent, rapport qualité/prix" },
              { name: "Iberia / Marshan", note: "Caractère, vue mer" },
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
                to: "/conciergerie-airbnb-tanger",
                title: "Conciergerie Airbnb Tanger",
                desc: "Le détail des services inclus dans la conciergerie : annonces, voyageurs, ménage, check-in.",
              },
              {
                to: "/gestion-locative-mre-tanger",
                title: "Spécial MRE",
                desc: "Vous habitez à l'étranger ? Notre service est pensé pour les Marocains résidant à l'étranger.",
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
