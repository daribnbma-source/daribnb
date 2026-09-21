import React from "react";
import { Link } from "react-router-dom";
import { Camera, Calendar, Sparkles, Headphones, ShieldCheck, BadgeDollarSign, ArrowRight, Check } from "lucide-react";
import ServicePageLayout from "./ServicePageLayout";
import RelatedArticles from "../components/site/RelatedArticles";

const SITE = "https://www.daribnb.com";
const URL = `${SITE}/conciergerie-airbnb-marrakech`;

const SERVICES = [
  {
    icon: Camera,
    title: "Annonce optimisée",
    desc: "Shooting photo professionnel, copy SEO Airbnb adapté au marché marrakchi, tarification dynamique calée sur la haute saison, Coupe du Monde 2030 et ponts.",
  },
  {
    icon: Calendar,
    title: "Multi-plateformes",
    desc: "Airbnb, Booking, Vrbo. Calendrier synchronisé, zéro doublon, communication voyageurs en français, anglais, arabe et espagnol.",
  },
  {
    icon: Sparkles,
    title: "Ménage hôtelier",
    desc: "Équipe dédiée Marrakech, draps et serviettes hôteliers fournis, contrôle qualité après chaque rotation — riads, appartements et villas.",
  },
  {
    icon: Headphones,
    title: "Check-in 24h/24",
    desc: "Accueil sur site ou remise de clés sécurisée, assistance voyageur permanente depuis l'aéroport Menara jusqu'au check-out.",
  },
  {
    icon: ShieldCheck,
    title: "Conformité Marrakech",
    desc: "Déclarations préfecture, taxe de séjour, conformité Loi Airbnb Maroc 2025. On gère le cadre légal, vous encaissez.",
  },
  {
    icon: BadgeDollarSign,
    title: "Reporting transparent",
    desc: "Dashboard mensuel : revenus, taux d'occupation, charges. Transparence totale, accessible depuis la France ou n'importe où.",
  },
];

const RESULTS = [
  { metric: "+45%", label: "de revenus moyens vs gestion en direct" },
  { metric: "80%", label: "taux d'occupation médian haute saison" },
  { metric: "4,93/5", label: "moyenne reviews voyageurs Airbnb" },
  { metric: "<2h", label: "temps de réponse moyen aux voyageurs" },
];

const FAQ = [
  {
    q: "Quelle commission prend Daribnb pour la gestion Airbnb à Marrakech ?",
    a: "Notre commission couvre l'intégralité de la gestion : annonce, voyageurs, ménage, check-in et reporting. Contactez-nous pour obtenir un devis personnalisé selon le type de bien (appartement, riad, villa) et le quartier.",
  },
  {
    q: "Combien rapporte un riad ou appartement à Marrakech sur Airbnb ?",
    a: "Selon le quartier et la superficie, un appartement bien géré à Marrakech génère entre 6 000 et 18 000 MAD par mois. Les riads et villas peuvent dépasser 25 000 MAD/mois en haute saison (Noël, février, mai). Demandez une estimation gratuite.",
  },
  {
    q: "Daribnb peut-il gérer mon bien à Marrakech si j'habite en France ?",
    a: "Oui, c'est notre spécialité. Nous nous occupons de tout à distance : annonce, accueil voyageurs, ménage, maintenance et reversements. Vous recevez un reporting mensuel complet sans avoir à vous déplacer.",
  },
  {
    q: "La location courte durée est-elle légale à Marrakech ?",
    a: "Oui, sous réserve de déclaration en préfecture et de collecte de la taxe de séjour. Daribnb prend en charge toutes les démarches administratives pour vous mettre en conformité.",
  },
  {
    q: "Quels quartiers de Marrakech sont les plus rentables sur Airbnb ?",
    a: "La Médina (riads) et Guéliz affichent les meilleurs rendements. Hivernage et Palmeraie sont plus portés villas/luxe avec des prix à la nuit plus élevés. L'Hivernage présente un excellent rapport taux d'occupation / prix nuit pour les appartements standard.",
  },
  {
    q: "Daribnb gère-t-il uniquement les appartements ou aussi les riads et villas ?",
    a: "Nous gérons tous les types de biens : appartements, riads, villas et maisons d'hôtes. Chaque bien fait l'objet d'une stratégie tarifaire et d'une présentation adaptée à sa catégorie.",
  },
];

export default function ConciergerieAirbnbMarrakech() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Conciergerie Airbnb Marrakech",
    serviceType: "Conciergerie locative courte durée",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE}/#business`,
      name: "Daribnb",
      url: SITE,
      telephone: "+212726156448",
      email: "daribnb.ma@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Marrakech",
        addressRegion: "Marrakech-Safi",
        addressCountry: "MA",
      },
    },
    areaServed: { "@type": "City", name: "Marrakech" },
    description:
      "Service de conciergerie Airbnb clé en main à Marrakech : annonces optimisées, gestion voyageurs, ménage hôtelier, check-in 24h/24. Riads, appartements et villas.",
    url: URL,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <ServicePageLayout
      title="Conciergerie Airbnb Marrakech | Daribnb — Gestion locative complète"
      description="Daribnb gère votre Airbnb à Marrakech clé en main : annonce, voyageurs, ménage, pricing dynamique. Riad, appartement ou villa. Estimation gratuite."
      canonical={URL}
      h1="Conciergerie Airbnb à Marrakech"
      kicker="Service local · Marrakech"
      intro="Vous possédez un appartement, riad ou villa à Marrakech ? Daribnb gère votre bien Airbnb de A à Z : annonce optimisée, accueil voyageurs, ménage hôtelier, tarification dynamique. Vous récoltez les revenus — sans la charge mentale."
      schema={[schema, faqSchema]}
    >
      {/* Pourquoi Daribnb */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Pourquoi confier votre bien à Daribnb ?
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Marrakech, un marché à fort potentiel. Une gestion qui demande de l'expertise.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Marrakech attire chaque année des millions de visiteurs du monde entier. Avec la Coupe du Monde 2030, la demande va encore s'accélérer. Mais bien gérer un Airbnb à Marrakech, c'est maîtriser les saisons, les profils voyageurs et les exigences locales. Daribnb s'en charge à votre place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Équipe locale à Marrakech — réactive 7j/7",
              "Connaissance fine des quartiers : Médina, Guéliz, Hivernage, Palmeraie, Agdal",
              "Pricing dynamique sur les pics : Noël, Ramadan, festivals, Coupe du Monde 2030",
              "Communication voyageurs en FR / EN / AR / ES",
              "Reporting mensuel détaillé, transparence totale",
              "Gestion 100% déléguée, idéale pour les propriétaires vivant à l'étranger",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#006233] flex items-center justify-center">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </span>
                <span className="text-[#1A1A1A]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services inclus */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Ce qui est inclus
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Nos services à Marrakech.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Tout est compris dans la commission. Pas de frais cachés, pas de devis surprise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#C1272D]/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#C1272D]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">{s.title}</h3>
                  <p className="mt-2 text-[#4B5563] leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Résultats */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Résultats sur le terrain
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Ce qu'on obtient pour les biens qu'on gère à Marrakech.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Chiffres constatés sur notre portefeuille marrakchi (appartements, riads et villas, tous quartiers confondus).
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {RESULTS.map((r) => (
              <div key={r.label} className="bg-[#FAF9F6] rounded-2xl p-6 text-center">
                <div className="text-4xl md:text-5xl font-black text-[#C1272D]">{r.metric}</div>
                <p className="mt-2 text-sm text-[#4B5563] leading-tight">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-10">
            Questions fréquentes — Conciergerie Airbnb Marrakech
          </h2>
          <div className="space-y-6">
            {FAQ.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 shadow-sm border border-black/5">
                <h3 className="font-bold text-[#1A1A1A] text-lg">{q}</h3>
                <p className="mt-3 text-[#4B5563] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8">
            Nos services dans d'autres villes
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                to: "/conciergerie-airbnb-tanger",
                title: "Conciergerie Airbnb Tanger",
                desc: "Notre marché historique. Plus de 7 ans d'expérience, 4,93/5 sur près de 1 200 avis.",
              },
              {
                to: "/conciergerie-airbnb-casablanca",
                title: "Conciergerie Airbnb Casablanca",
                desc: "La capitale économique. Clientèle business, taux d'occupation stable toute l'année.",
              },
              {
                to: "/conciergerie-airbnb-rabat",
                title: "Conciergerie Airbnb Rabat",
                desc: "La capitale administrative. Clientèle institutionnelle, diplomates, fonctionnaires.",
              },
            ].map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="block bg-[#FAF9F6] rounded-2xl p-6 shadow-sm border border-black/5 hover:shadow-md hover:border-[#C1272D]/30 transition-all group"
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

      <RelatedArticles slugs={[
        { slug: "rentabilite-airbnb-maroc-2026", title: "Rentabilité Airbnb au Maroc : combien pouvez-vous vraiment gagner en 2026 ?" },
        { slug: "loi-airbnb-maroc-2025-proprietaires", title: "Loi Airbnb Maroc 2025 : ce que les propriétaires doivent savoir" },
        { slug: "loyer-fixe-vs-conciergerie-airbnb-maroc", title: "Loyer fixe vs conciergerie Airbnb au Maroc : le match 2026" },
      ]} />
    </ServicePageLayout>
  );
}
