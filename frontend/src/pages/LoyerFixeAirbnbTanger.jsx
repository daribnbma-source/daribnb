import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Shield, CalendarCheck, Wallet, AlertTriangle } from "lucide-react";
import ServicePageLayout from "./ServicePageLayout";

const SITE = "https://www.daribnb.com";
const URL = `${SITE}/loyer-fixe-airbnb-tanger`;

const PILLARS = [
  {
    icon: Shield,
    title: "Revenu garanti chaque mois",
    desc: "Vous touchez le même montant tous les mois, peu importe le taux d'occupation. Basse saison, ramadan, périodes creuses : aucun impact pour vous.",
  },
  {
    icon: CalendarCheck,
    title: "Virement ponctuel",
    desc: "Versement bancaire à date fixe (le 5 ou le 10 de chaque mois selon convenance). En MAD ou en EUR pour les MRE.",
  },
  {
    icon: Wallet,
    title: "Aucun frais ni surprise",
    desc: "Le montant est fixé au contrat. Pas de commission variable, pas de retenue cachée. Daribnb prend le risque commercial à votre place.",
  },
  {
    icon: AlertTriangle,
    title: "Entretien & maintenance inclus",
    desc: "On s'occupe de la maintenance courante, du linge, du ménage, des consommables. Vous récupérez votre bien en bon état à la fin du contrat.",
  },
];

const FAQS = [
  {
    q: "Comment est calculé mon loyer fixe garanti ?",
    a: "On audite votre bien (localisation, taille, équipement, photos), on regarde le marché local sur 12 mois (saisonnalité, taux d'occupation moyen, ADR), et on vous propose un loyer fixe représentant environ 65 à 75% du revenu net potentiel. La différence couvre notre risque commercial et nos coûts opérationnels.",
  },
  {
    q: "Quelle est la différence avec la conciergerie classique ?",
    a: "Conciergerie : on prend une commission (20%) sur les revenus encaissés, donc votre revenu varie selon la saison. Loyer fixe : on vous verse un montant fixe identique chaque mois, peu importe le résultat. Vous troquez le potentiel maximum contre la stabilité. Idéal si vous avez besoin de prévisibilité (crédit, autofinancement, MRE).",
  },
  {
    q: "Pourquoi ce serait Daribnb qui prend le risque et pas moi ?",
    a: "Parce qu'on a 6+ ans d'historique sur Tanger, on connaît les chiffres médians par quartier, on optimise mieux qu'un proprio individuel (équipe ménage, photos pro, multi-plateformes Airbnb/Booking/Vrbo). Statistiquement on fait +30 à +50% vs gestion en direct, ce qui couvre largement notre marge tout en garantissant votre revenu.",
  },
  {
    q: "Quelle est la durée d'engagement ?",
    a: "Contrat type : 12, 24 ou 36 mois. Plus c'est long, plus on peut être généreux sur le montant fixe (on amortit nos investissements initiaux : photos, équipement, lancement annonces). Préavis raisonnable de part et d'autre.",
  },
  {
    q: "Et si je veux récupérer mon bien pour des vacances ?",
    a: "Pendant le contrat de loyer fixe, le bien est en gestion totale. Pour des courts séjours perso, on peut bloquer des dates ponctuelles à condition de prévenir suffisamment à l'avance (4-6 semaines minimum) — mais c'est plus contraignant qu'en conciergerie classique. Si vous voulez utiliser votre bien souvent, la conciergerie est probablement plus adaptée.",
  },
  {
    q: "Tous les biens sont-ils éligibles au loyer fixe ?",
    a: "Non. Le bien doit avoir un potentiel locatif suffisant (emplacement, état, équipement). Après audit, on vous dit honnêtement si le loyer fixe est viable ou si la conciergerie classique est plus adaptée à votre cas. Pas de blabla commercial.",
  },
];

export default function LoyerFixeAirbnbTanger() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Loyer fixe garanti Airbnb Tanger",
    serviceType: "Location meublée touristique avec loyer garanti",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE}/#business`,
      name: "Daribnb",
      url: SITE,
      telephone: "+212646218407",
      email: "daribnb.ma@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tanger",
        addressRegion: "Tanger-Tétouan-Al Hoceïma",
        addressCountry: "MA",
      },
    },
    areaServed: { "@type": "City", name: "Tanger" },
    description:
      "Daribnb verse un loyer fixe garanti chaque mois pour votre bien Airbnb à Tanger. Revenu prévisible, zéro risque, gestion intégrale incluse.",
    url: URL,
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        description: "Loyer fixe garanti, sur devis après audit du bien",
      },
    },
  };

  // FAQPage schema combiné (Google rich results)
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
      title="Loyer fixe garanti Airbnb à Tanger | Daribnb — Revenu mensuel sans risque"
      description="Daribnb vous verse un loyer fixe garanti chaque mois pour votre bien à Tanger. On gère tout, vous touchez un revenu prévisible. Estimation gratuite en 24h."
      canonical={URL}
      h1="Loyer fixe garanti pour votre bien à Tanger"
      kicker="Revenu garanti · Tanger"
      intro="Vous voulez un revenu mensuel stable sur votre bien à Tanger, sans la variabilité du Airbnb classique ? Daribnb vous verse un loyer fixe garanti chaque mois. Nous prenons le risque commercial — vous touchez un revenu prévisible, peu importe la saison."
      schema={[schema, faqSchema]}
    >
      {/* 4 piliers du loyer fixe */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Pourquoi le loyer fixe ?
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Un revenu stable, sans aucune charge mentale.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Si vous avez un crédit à rembourser, ou si vous êtes MRE et avez besoin de visibilité, le loyer fixe est probablement la formule la plus rassurante.
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

      {/* Comparaison conciergerie vs loyer fixe */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Choisir entre conciergerie et loyer fixe
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Lequel des deux pour vous ?
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Pas de mauvaise réponse — chacune a son cas d'usage. Voici comment trancher.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-[#006233]/30">
              <h3 className="text-xl font-bold text-[#006233] mb-4">Loyer fixe garanti</h3>
              <ul className="space-y-3 text-[#1A1A1A]">
                <li className="flex items-start gap-2"><Check size={16} className="text-[#006233] mt-1 flex-shrink-0" />Revenu mensuel identique toute l'année</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-[#006233] mt-1 flex-shrink-0" />Aucun stress sur le taux d'occupation</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-[#006233] mt-1 flex-shrink-0" />Idéal MRE, crédit en cours, autofinancement</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-[#006233] mt-1 flex-shrink-0" />Daribnb prend le risque commercial</li>
                <li className="flex items-start gap-2"><AlertTriangle size={16} className="text-[#C1272D] mt-1 flex-shrink-0" />Plafond : ~70% du potentiel max</li>
                <li className="flex items-start gap-2"><AlertTriangle size={16} className="text-[#C1272D] mt-1 flex-shrink-0" />Engagement 12-36 mois</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border-2 border-[#C1272D]/30">
              <h3 className="text-xl font-bold text-[#C1272D] mb-4">Conciergerie (commission)</h3>
              <ul className="space-y-3 text-[#1A1A1A]">
                <li className="flex items-start gap-2"><Check size={16} className="text-[#006233] mt-1 flex-shrink-0" />Vous touchez le maximum potentiel</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-[#006233] mt-1 flex-shrink-0" />Pas d'engagement long, plus flexible</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-[#006233] mt-1 flex-shrink-0" />Vous bloquez les dates pour vous quand vous voulez</li>
                <li className="flex items-start gap-2"><Check size={16} className="text-[#006233] mt-1 flex-shrink-0" />Reporting mensuel transparent</li>
                <li className="flex items-start gap-2"><AlertTriangle size={16} className="text-[#C1272D] mt-1 flex-shrink-0" />Revenus variables selon saison</li>
                <li className="flex items-start gap-2"><AlertTriangle size={16} className="text-[#C1272D] mt-1 flex-shrink-0" />Vous portez le risque commercial</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 p-6 bg-[#1A1A1A] text-white rounded-2xl">
            <p className="text-lg">
              <strong className="text-[#C1272D]">En résumé :</strong> loyer fixe = vous voulez de la prévisibilité ; conciergerie = vous voulez maximiser le potentiel. Daribnb propose les deux, on vous conseille selon votre situation après audit du bien.
            </p>
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8">
            Le loyer fixe est fait pour vous si…
          </h2>
          <ul className="space-y-3">
            {[
              "Vous avez un crédit immobilier en cours et avez besoin de revenus stables pour le rembourser",
              "Vous êtes MRE et préférez ne pas vous occuper de la variabilité saisonnière",
              "Vous avez un autre revenu principal et vous cherchez juste un complément régulier",
              "Vous ne voulez pas vous soucier du taux d'occupation, des reviews, des annulations",
              "Vous voulez une vraie tranquillité d'esprit, sans rentrer dans le détail du business courte durée",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-[#FAF9F6] rounded-xl p-4 border border-black/5"
              >
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#006233] flex items-center justify-center">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </span>
                <span className="text-[#1A1A1A]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-10">
            Questions fréquentes sur le loyer fixe
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

      {/* Liens internes */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8">
            Vous hésitez encore ?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                to: "/conciergerie-airbnb-tanger",
                title: "Conciergerie Tanger",
                desc: "L'alternative : commission sur revenus, vous gardez le potentiel max.",
              },
              {
                to: "/gestion-locative-mre-tanger",
                title: "Spécial MRE",
                desc: "Si vous habitez à l'étranger — le loyer fixe est souvent ce qu'il vous faut.",
              },
              {
                to: "/optimiser-revenus-airbnb",
                title: "Optimiser ce que vous avez",
                desc: "Si vous voulez d'abord booster les revenus avant de décider, on a un service pour ça.",
              },
            ].map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="block bg-[#FAF9F6] rounded-2xl p-6 border border-black/5 hover:shadow-md hover:border-[#C1272D]/30 transition-all group"
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
