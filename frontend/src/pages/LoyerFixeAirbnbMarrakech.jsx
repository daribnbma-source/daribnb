import React from "react";
import { Check, Shield, CalendarCheck, Euro, Home, AlertTriangle } from "lucide-react";
import ServicePageLayout from "./ServicePageLayout";
import RelatedArticles from "../components/site/RelatedArticles";
import MarrakechCluster from "../components/site/MarrakechCluster";

const SITE = "https://www.daribnb.com";
const URL = `${SITE}/loyer-fixe-airbnb-marrakech`;

const PILLARS = [
  {
    icon: Shield,
    title: "L'été marrakchi n'est plus votre problème",
    desc: "À Marrakech, l'essentiel des réservations se concentre d'octobre à mai. Avec le loyer fixe, juillet et août vous rapportent autant que février : c'est nous qui absorbons les mois creux.",
  },
  {
    icon: CalendarCheck,
    title: "Un virement à date fixe",
    desc: "Le même montant chaque mois, à la date prévue au contrat. Vous pouvez caler dessus une mensualité de crédit, des charges de copropriété ou un budget familial.",
  },
  {
    icon: Euro,
    title: "Pensé pour les MRE",
    desc: "Versement en MAD ou en EUR, échanges en français, aucun déplacement nécessaire. Le fondateur de Daribnb est lui-même MRE et propriétaire : il connaît la gestion d'un bien à distance.",
  },
  {
    icon: Home,
    title: "Riad, appartement ou villa",
    desc: "Le montant tient compte du type de bien : un riad en Médina, un appartement à Guéliz et une villa à la Palmeraie n'ont ni la même saisonnalité ni les mêmes coûts d'entretien. Ménage, linge et maintenance courante sont à notre charge.",
  },
];

const FAQS = [
  {
    q: "Comment est fixé le montant du loyer garanti à Marrakech ?",
    a: "Nous estimons le revenu que votre bien peut générer sur 12 mois, en tenant compte de la forte saisonnalité marrakchie (haute saison d'octobre à mai, été plus calme), du quartier et du type de bien. Le loyer fixe correspond généralement à environ 65 à 75 % de ce revenu net estimé. L'écart rémunère le risque que nous prenons sur les mois creux et nos frais de gestion.",
  },
  {
    q: "Pourquoi choisir le loyer fixe plutôt que la conciergerie à Marrakech ?",
    a: "Parce que Marrakech est un marché très saisonnier. En conciergerie, vos revenus suivent le calendrier touristique : des mois d'hiver très bons, un été plus faible. En loyer fixe, vous touchez le même montant toute l'année. Si vous voulez le potentiel maximum et acceptez la variation, la conciergerie dès 20 % de commission est plus adaptée.",
  },
  {
    q: "Je suis MRE, quels sont les avantages du loyer fixe pour moi ?",
    a: "Vous n'avez pas à suivre les réservations depuis l'étranger ni à vous inquiéter d'un mois faible. Vous recevez un virement fixe en MAD ou en EUR, un seul interlocuteur francophone, et votre bien est entretenu en votre absence. C'est la formule la plus simple quand on vit en France, en Belgique ou ailleurs en Europe.",
  },
  {
    q: "Un riad est-il éligible au loyer fixe ?",
    a: "Oui, s'il est en bon état et bien situé. Un riad a des prix à la nuit plus élevés qu'un appartement, mais aussi plus d'entretien (patio, bassin, tadelakt, humidité). Le montant proposé intègre ces coûts. Après visite, nous vous disons honnêtement si le loyer fixe ou la conciergerie est le plus intéressant pour votre riad.",
  },
  {
    q: "Puis-je profiter de mon bien pendant mes vacances au Maroc ?",
    a: "Le bien est géré par Daribnb pendant toute la durée du contrat. Des dates personnelles peuvent être prévues dès la signature, par exemple quelques semaines l'été pour les familles MRE, et le montant du loyer en tient compte. Plus elles sont fixées tôt, plus c'est simple.",
  },
  {
    q: "Quelle est la durée du contrat de loyer fixe ?",
    a: "Le contrat est conclu pour 12, 24 ou 36 mois, avec un préavis raisonnable de part et d'autre. Un engagement plus long permet de lisser davantage la saisonnalité et donc de proposer un montant plus favorable.",
  },
];

export default function LoyerFixeAirbnbMarrakech() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Loyer fixe garanti Airbnb Marrakech",
    serviceType: "Location meublée touristique avec loyer garanti",
    provider: { "@id": `${SITE}/#business` },
    areaServed: { "@type": "City", name: "Marrakech" },
    description:
      "Daribnb verse un loyer fixe garanti chaque mois pour votre riad, appartement ou villa à Marrakech, quelle que soit la saison. Formule adaptée aux MRE, gestion intégrale incluse.",
    url: URL,
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        description: "Loyer fixe garanti, sur devis après audit du bien",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <ServicePageLayout
      title="Loyer fixe garanti Airbnb à Marrakech | Riad, appartement — Daribnb"
      description="Loyer fixe garanti à Marrakech : le même virement chaque mois, haute ou basse saison. Riad, appartement ou villa, formule idéale pour les MRE. Devis gratuit."
      canonical={URL}
      h1="Loyer fixe garanti pour votre bien à Marrakech"
      kicker="Revenu garanti · Marrakech"
      intro="Le loyer fixe garanti à Marrakech est une formule où Daribnb vous verse chaque mois un montant fixé au contrat, que votre riad, appartement ou villa soit réservé ou non. Nous louons le bien en courte durée sur Airbnb et Booking et prenons à notre charge la saisonnalité marrakchie."
      schema={[schema, faqSchema]}
    >
      {/* 4 piliers du loyer fixe */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Pourquoi le loyer fixe à Marrakech ?
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Un marché saisonnier, un revenu qui ne l'est pas.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Marrakech fait le plein de l'automne au printemps et ralentit quand la chaleur arrive. Le loyer fixe transforme cette courbe en une ligne droite sur votre relevé bancaire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-[#F7F6F2] rounded-2xl p-8 border border-black/5"
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

      {/* Comparaison conciergerie vs loyer fixe */}
      <section className="py-20 md:py-28 bg-[#F7F6F2]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Loyer fixe ou commission
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Votre bien, votre saisonnalité, votre choix.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              À Marrakech, l'écart entre un bon mois de février et un mois d'août peut être important. Tout dépend de ce que vous préférez : lisser ou maximiser.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-[#006233]/30">
              <h3 className="text-xl font-bold text-[#006233] mb-4">Loyer fixe garanti</h3>
              <ul className="space-y-3 text-[#1A1A1A]">
                <li className="flex items-start gap-2"><Check size={16} className="text-[#006233] mt-1 flex-shrink-0" />Même montant en haute saison et en été</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-[#006233] mt-1 flex-shrink-0" />Virement en MAD ou en EUR, idéal à distance</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-[#006233] mt-1 flex-shrink-0" />Entretien du riad, de la villa ou de l'appartement inclus</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-[#006233] mt-1 flex-shrink-0" />Daribnb porte le risque des mois creux</li>
                <li className="flex items-start gap-2"><AlertTriangle size={16} className="text-[#C1272D] mt-1 flex-shrink-0" />Vous renoncez aux meilleurs mois d'hiver</li>
                <li className="flex items-start gap-2"><AlertTriangle size={16} className="text-[#C1272D] mt-1 flex-shrink-0" />Contrat de 12 à 36 mois</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border-2 border-[#C1272D]/30">
              <h3 className="text-xl font-bold text-[#C1272D] mb-4">Conciergerie (dès 20 %)</h3>
              <ul className="space-y-3 text-[#1A1A1A]">
                <li className="flex items-start gap-2"><Check size={16} className="text-[#006233] mt-1 flex-shrink-0" />Vous captez tout le potentiel d'octobre à mai</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-[#006233] mt-1 flex-shrink-0" />Vous bloquez vos dates de vacances librement</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-[#006233] mt-1 flex-shrink-0" />Pas d'engagement long</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-[#006233] mt-1 flex-shrink-0" />Reporting mensuel détaillé</li>
                <li className="flex items-start gap-2"><AlertTriangle size={16} className="text-[#C1272D] mt-1 flex-shrink-0" />Revenus plus faibles l'été</li>
                <li className="flex items-start gap-2"><AlertTriangle size={16} className="text-[#C1272D] mt-1 flex-shrink-0" />Le risque commercial reste le vôtre</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 p-6 bg-[#1A1A1A] text-white rounded-2xl">
            <p className="text-lg">
              <strong className="text-[#C1272D]">Riad ou appartement ?</strong> Un riad en Médina vit davantage au rythme de la haute saison, un appartement à Guéliz est plus régulier. Plus votre bien est saisonnier, plus le loyer fixe a de sens. Nous comparons les deux formules pour votre bien après visite.
            </p>
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            Le loyer fixe à Marrakech, expliqué pour les MRE
          </h2>
          <p className="text-lg text-[#4B5563] mb-8">
            Vous avez acheté à Marrakech, vous vivez en Europe, et vous ne voulez ni laisser le bien vide ni gérer des voyageurs à 2 000 km. Le loyer fixe est fait pour vous si…
          </p>
          <ul className="space-y-3">
            {[
              "Vous remboursez un crédit au Maroc ou en France et voulez un revenu qui tombe chaque mois, même en août",
              "Vous ne voulez pas surveiller les réservations, les avis et les annulations depuis l'étranger",
              "Vous souhaitez être payé en EUR ou en MAD, avec un seul interlocuteur francophone",
              "Vous voulez que le riad ou l'appartement soit aéré, nettoyé et entretenu toute l'année, pas seulement quand vous venez",
              "Vous préférez savoir à l'avance combien le bien vous rapportera sur 12 mois",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-[#F7F6F2] rounded-xl p-4 border border-black/5"
              >
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#006233] flex items-center justify-center">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </span>
                <span className="text-[#1A1A1A]">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[#4B5563]">
            Marwan Afassi, fondateur de Daribnb, est MRE et propriétaire. Il loue en courte durée depuis plus de 7 ans en France, dans plusieurs villes, et forme chaque mois des propriétaires et des exploitants de conciergeries avec Rentimmo Academy. Son profil hôte Airbnb affiche 4,93/5 sur 1 196 avis.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-[#F7F6F2]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-10">
            Questions fréquentes sur le loyer fixe à Marrakech
          </h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group bg-white rounded-xl p-6 border border-black/5"
              >
                <summary className="cursor-pointer font-bold text-[#1A1A1A] list-none flex items-center justify-between">
                  {f.q}
                  <span className="text-[#C1272D] text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-[#4B5563] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Liens internes Marrakech */}
      <MarrakechCluster current="/loyer-fixe-airbnb-marrakech" title="Vous hésitez encore ? À Marrakech aussi" />

      <RelatedArticles slugs={[
          { slug: "loyer-fixe-vs-conciergerie-airbnb-maroc", title: "Loyer fixe vs conciergerie Airbnb au Maroc : le match 2026" },
          { slug: "conciergerie-airbnb-marrakech-guide-2026", title: "Conciergerie Airbnb Marrakech : guide complet 2026" },
          { slug: "mre-airbnb-maroc-gestion-distance-2026", title: "MRE et Airbnb au Maroc : guide complet pour gérer son bien à distance en 2026" }
        ]} />
    </ServicePageLayout>
  );
}
