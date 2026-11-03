import React from "react";
import { Check, CalendarRange, Landmark, Building2, Trees, ShieldCheck, Shirt, Plane } from "lucide-react";
import ServicePageLayout from "./ServicePageLayout";
import MarrakechCluster from "../components/site/MarrakechCluster";
import RelatedArticles from "../components/site/RelatedArticles";

const SITE = "https://www.daribnb.com";
const URL = `${SITE}/gestion-locative-marrakech`;

const SEASONS = [
  {
    period: "Octobre → mai",
    label: "Haute saison",
    desc: "Le cœur du marché marrakchi. Températures douces, vols directs depuis toute l'Europe, citytrips de 3 à 5 nuits. C'est là que se joue l'essentiel du chiffre d'affaires annuel.",
  },
  {
    period: "Noël, Nouvel An, février, Pâques",
    label: "Pics de demande",
    desc: "Les vacances scolaires européennes font grimper les prix à la nuit et les durées minimales. Nous ouvrons ces dates tôt et ajustons les tarifs semaine par semaine.",
  },
  {
    period: "Juin → septembre",
    label: "Saison chaude",
    desc: "La clientèle européenne ralentit avec la chaleur, mais les biens avec piscine, la Palmeraie et les familles MRE de passage en juillet-août gardent une demande solide. On adapte prix et durées minimales.",
  },
  {
    period: "Toute l'année",
    label: "Événements",
    desc: "Festival international du film en fin d'année, marathon en janvier, congrès, séminaires d'entreprise, mariages, et à l'horizon la Coupe du Monde 2030 : chaque date forte est intégrée au calendrier tarifaire.",
  },
];

const TYPES = [
  {
    icon: Landmark,
    title: "Riad",
    tag: "Médina, Kasbah, Mouassine",
    points: [
      "Le produit le plus recherché par la clientèle européenne",
      "Location du riad entier : prix à la nuit élevés, groupes et familles",
      "Logistique exigeante : accès à pied, clés, patio, bassin, tadelakt",
    ],
  },
  {
    icon: Building2,
    title: "Appartement",
    tag: "Guéliz, Hivernage, Agdal",
    points: [
      "Le plus simple à gérer : accès voiture, parking, résidence",
      "Clientèle couples, télétravailleurs, voyageurs d'affaires",
      "Bonne régularité, durées de séjour un peu plus longues",
    ],
  },
  {
    icon: Trees,
    title: "Villa",
    tag: "Palmeraie, route de l'Ourika, route d'Amizmiz",
    points: [
      "Piscine, jardin, plusieurs chambres : familles et groupes d'amis",
      "Prix à la nuit les plus élevés, mais saisonnalité plus marquée",
      "Entretien piscine et jardin à intégrer au budget",
    ],
  },
];

const QUARTIERS = [
  { name: "Médina", note: "Riads et maisons traditionnelles, voyageurs internationaux qui veulent vivre la vieille ville à pied." },
  { name: "Guéliz", note: "Centre moderne, cafés et restaurants, appartements faciles d'accès : la valeur sûre toute l'année." },
  { name: "Hivernage", note: "Résidences haut de gamme, proche Médina et palais des congrès : clientèle exigeante, séjours courts." },
  { name: "Palmeraie", note: "Villas avec piscine, séjours familiaux et groupes, prix à la nuit élevés, forte demande l'hiver." },
  { name: "Agdal", note: "Résidentiel récent, proche de la route de l'Ourika : séjours plus longs, familles, MRE." },
];

const SERVICES = [
  {
    icon: CalendarRange,
    title: "Tarifs pilotés à la semaine",
    desc: "Prix à la nuit, durées minimales et ouvertures de calendrier ajustés selon la saison, les vacances européennes et les événements marrakchis.",
  },
  {
    icon: Plane,
    title: "Clientèle européenne",
    desc: "Annonces rédigées pour des voyageurs français, britanniques, espagnols, italiens et belges. Réponses en français, anglais, arabe et espagnol, sur Airbnb et Booking.",
  },
  {
    icon: Shirt,
    title: "Ménage et linge hôteliers",
    desc: "Ménage complet à chaque départ, linge lavé et repassé hors du logement, contrôle avant chaque arrivée. Les rotations des riads et villas sont planifiées plus longues.",
  },
  {
    icon: ShieldCheck,
    title: "Conformité",
    desc: "Déclaration des voyageurs auprès des autorités, collecte de la taxe de séjour, règlement intérieur clair. Nous vous accompagnons sur le cadre applicable à votre bien.",
  },
];

const FAQS = [
  {
    q: "Combien coûte la gestion locative à Marrakech avec Daribnb ?",
    a: "À partir de 20 % du chiffre d'affaires HT, et jusqu'à 18 % pour les biens premium ou si vous nous confiez plusieurs logements. La commission couvre l'annonce, les tarifs, les voyageurs, le ménage, le linge et le reporting mensuel. Si vous préférez un revenu fixe, le loyer fixe garanti est aussi possible à Marrakech.",
  },
  {
    q: "Quelle est la meilleure période pour louer à Marrakech ?",
    a: "La haute saison va d'octobre à mai, avec des pics à Noël, au Nouvel An, en février et à Pâques, quand l'Europe est en vacances. L'été est plus calme pour les appartements sans piscine, mais reste porteur pour les villas et les riads avec bassin. Nous adaptons les prix et les durées minimales à chaque période.",
  },
  {
    q: "Riad, appartement ou villa : quel bien rapporte le plus à Marrakech ?",
    a: "Le riad et la villa ont les prix à la nuit les plus élevés, mais demandent plus de logistique et d'entretien. L'appartement à Guéliz ou à l'Hivernage est plus régulier et plus simple à gérer. Le bon choix dépend de votre bien, de son quartier et de votre tolérance à la saisonnalité : nous vous faisons une estimation gratuite.",
  },
  {
    q: "Quels quartiers de Marrakech gérez-vous ?",
    a: "La Médina, Guéliz, l'Hivernage, la Palmeraie et Agdal, ainsi que les zones résidentielles proches (route de l'Ourika, route d'Amizmiz). Chaque quartier a sa clientèle : la Médina attire les voyageurs internationaux, Guéliz et l'Hivernage les couples et voyageurs d'affaires, la Palmeraie les familles et groupes.",
  },
  {
    q: "Que faut-il pour louer légalement en courte durée à Marrakech ?",
    a: "Il faut déclarer les voyageurs accueillis auprès des autorités, collecter la taxe de séjour et respecter le cadre applicable à votre type de bien. Les règles peuvent évoluer : nous vous accompagnons dans les démarches et vous indiquons ce qui s'applique à votre logement avant la mise en ligne.",
  },
  {
    q: "Comment sont gérés le ménage et le linge ?",
    a: "Ménage complet à chaque départ, linge de lit et serviettes de qualité hôtelière lavés et repassés hors du logement, contrôle avant chaque arrivée. Pour les riads et les villas, plus de surfaces et plus de chambres : nous prévoyons des créneaux de rotation plus longs.",
  },
  {
    q: "Sur quelles plateformes mon bien est-il publié ?",
    a: "Airbnb et Booking, avec un calendrier synchronisé pour éviter les doubles réservations. Ce sont les deux plateformes où se trouve l'essentiel de la clientèle européenne qui réserve à Marrakech.",
  },
  {
    q: "Je vis en France, pouvez-vous tout gérer à distance ?",
    a: "Oui. Marwan Afassi, fondateur de Daribnb, est lui-même MRE et propriétaire. Vous n'avez rien à faire sur place : nous gérons les voyageurs, le ménage et la maintenance, et vous recevez chaque mois un reporting détaillé et le versement de vos revenus.",
  },
];

export default function GestionLocativeMarrakech() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Gestion locative Marrakech — Location courte durée Airbnb et Booking",
    serviceType: "Gestion locative meublée courte durée",
    provider: { "@id": `${SITE}/#business` },
    areaServed: { "@type": "City", name: "Marrakech" },
    description:
      "Gestion locative courte durée à Marrakech pour riads, appartements et villas : tarifs saisonniers, voyageurs, ménage, linge, conformité. À partir de 20 % du chiffre d'affaires HT.",
    url: URL,
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        description: "Commission à partir de 20 % du chiffre d'affaires HT, jusqu'à 18 % pour les biens premium ou plusieurs logements",
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
      title="Gestion locative à Marrakech | Riad, appartement, villa — Daribnb"
      description="Gestion locative courte durée à Marrakech : riads, appartements et villas sur Airbnb et Booking. Tarifs saisonniers, ménage, conformité. Dès 20 % du CA HT."
      canonical={URL}
      h1="Gestion locative à Marrakech"
      kicker="Location courte durée · Marrakech"
      intro="La gestion locative à Marrakech consiste à confier à un professionnel la location courte durée de son bien (riad, appartement ou villa) sur Airbnb et Booking : annonce, tarifs saisonniers, accueil des voyageurs, ménage, linge et conformité. Daribnb le fait pour vous, à partir de 20 % du chiffre d'affaires HT."
      schema={[schema, faqSchema]}
    >
      {/* Saisonnalité */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Saisonnalité
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              À Marrakech, le calendrier fait le revenu.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Marrakech ne se loue pas comme une ville d'affaires. La demande suit les vacances européennes, la météo et les grands événements. Un tarif fixe toute l'année, c'est des nuits vendues trop peu cher l'hiver et un calendrier vide l'été.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {SEASONS.map((s) => (
              <div key={s.label} className="bg-[#F7F6F2] rounded-2xl p-8 border border-black/5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#006233]">{s.label}</span>
                <h3 className="mt-2 text-xl font-bold text-[#1A1A1A]">{s.period}</h3>
                <p className="mt-2 text-[#4B5563] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Riad vs appartement vs villa */}
      <section className="py-20 md:py-28 bg-[#F7F6F2]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Type de bien
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Riad, appartement ou villa : trois métiers différents.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Un riad en Médina et un appartement à Guéliz n'attirent ni les mêmes voyageurs, ni les mêmes prix, ni les mêmes contraintes. Nous construisons une stratégie par type de bien.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TYPES.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
                  <div className="w-12 h-12 rounded-xl bg-[#006233]/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#006233]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">{t.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#C1272D]">{t.tag}</p>
                  <ul className="mt-4 space-y-3">
                    {t.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-[#4B5563]">
                        <Check size={16} className="text-[#006233] mt-1 flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quartiers */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-8">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Quartiers
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Cinq quartiers, cinq clientèles.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              L'emplacement décide de la clientèle, du prix à la nuit et de la durée des séjours. Nos estimations se font quartier par quartier.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {QUARTIERS.map((q) => (
              <div key={q.name} className="bg-[#F7F6F2] rounded-xl p-5 border border-black/5">
                <h3 className="font-bold text-[#1A1A1A]">{q.name}</h3>
                <p className="mt-1 text-sm text-[#4B5563]">{q.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ce que nous gérons */}
      <section className="py-20 md:py-28 bg-[#F7F6F2]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Ce que nous gérons
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Une gestion adaptée au marché marrakchi.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Marwan Afassi, fondateur de Daribnb, loue en courte durée depuis plus de 7 ans en France, dans plusieurs villes. Il forme chaque mois des propriétaires et des exploitants de conciergeries avec Rentimmo Academy. Les biens qu'il accompagne génèrent en moyenne +40 % de revenus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
                  <div className="w-12 h-12 rounded-xl bg-[#006233]/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#006233]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">{p.title}</h3>
                  <p className="mt-2 text-[#4B5563] leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 p-6 bg-[#1A1A1A] text-white rounded-2xl">
            <p className="text-lg">
              <strong className="text-[#C1272D]">4,93/5 sur 1 196 avis :</strong> c'est la note du profil hôte Airbnb de Marwan Afassi. Le même niveau d'exigence s'applique aux biens que vous nous confiez à Marrakech.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-10">
            Questions fréquentes sur la gestion locative à Marrakech
          </h2>
          <div className="space-y-4">
            {FAQS.map((f) => (
              <details key={f.q} className="group bg-[#F7F6F2] rounded-xl p-6 border border-black/5">
                <summary className="cursor-pointer font-bold text-[#1A1A1A] list-none flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-[#C1272D] text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-[#4B5563] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <MarrakechCluster current="/gestion-locative-marrakech" bg="bg-[#F7F6F2]" cardBg="bg-white" />

      <RelatedArticles slugs={[
        { slug: "conciergerie-airbnb-marrakech-guide-2026", title: "Conciergerie Airbnb Marrakech : guide complet 2026" },
        { slug: "loi-airbnb-maroc-2025-proprietaires", title: "Loi Airbnb Maroc 2025 : ce que les propriétaires doivent savoir" },
        { slug: "rentabilite-airbnb-maroc-2026", title: "Rentabilité Airbnb au Maroc : combien pouvez-vous vraiment gagner en 2026 ?" },
      ]} />
    </ServicePageLayout>
  );
}
