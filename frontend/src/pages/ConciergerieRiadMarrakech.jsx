import React from "react";
import { Check, Key, MapPin, Droplets, Sun, Trees, Sparkles, Wrench, Camera, Users } from "lucide-react";
import ServicePageLayout from "./ServicePageLayout";
import MarrakechCluster from "../components/site/MarrakechCluster";
import RelatedArticles from "../components/site/RelatedArticles";

const SITE = "https://www.daribnb.com";
const URL = `${SITE}/conciergerie-riad-marrakech`;

const ACCES = [
  {
    icon: MapPin,
    title: "Un point de rendez-vous, pas une adresse GPS",
    desc: "Dans les derbs de la Médina, les applications de navigation se perdent et les taxis ne passent pas. Nous fixons avec chaque voyageur un point de rendez-vous simple à trouver (une porte de la Médina, une place, un parking), puis nous l'accompagnons à pied jusqu'à la porte du riad, bagages compris.",
  },
  {
    icon: Key,
    title: "Des clés gérées avec méthode",
    desc: "Portes anciennes, serrures traditionnelles, boîtes à clés difficiles à fixer : les remises de clés se font en main propre. Doubles conservés et étiquetés, remise et récupération tracées à chaque séjour.",
  },
];

const ESPACES = [
  {
    icon: Trees,
    title: "Patio",
    desc: "Le cœur du riad et de vos photos. Plantes arrosées, zelliges lavés, mobilier remis en place, éclairage du soir vérifié avant chaque arrivée.",
  },
  {
    icon: Droplets,
    title: "Piscine ou bassin",
    desc: "Traitement et contrôle de l'eau, nettoyage régulier, vérification de la pompe. Si votre bassin est chauffé, nous l'adaptons aux nuits fraîches de l'hiver marrakchi.",
  },
  {
    icon: Sun,
    title: "Terrasse",
    desc: "Le second salon des voyageurs. Coussins et textiles rentrés par vent ou pluie, poussière enlevée, transats et parasols contrôlés à chaque rotation.",
  },
];

const ENTRETIEN = [
  {
    icon: Sparkles,
    title: "Ménage d'un riad, pas d'un studio",
    desc: "Plusieurs chambres, escaliers, salles d'eau, patio et terrasse : nous planifions des rotations plus longues, avec une équipe dimensionnée et une check-list par niveau. Linge hôtelier lavé et repassé hors du riad.",
  },
  {
    icon: Wrench,
    title: "Tadelakt et humidité",
    desc: "Murs épais, pièces peu ventilées en hiver : l'humidité est le premier ennemi du riad. Aération des chambres entre deux séjours, surveillance des traces, et entretien du tadelakt au savon noir, sans produit acide ni abrasif. Fissures et reprises confiées à un artisan qualifié, avec votre accord.",
  },
];

const FAQS = [
  {
    q: "Combien coûte la conciergerie d'un riad à Marrakech ?",
    a: "À partir de 20 % du chiffre d'affaires HT, et jusqu'à 18 % pour les biens premium ou si vous nous confiez plusieurs logements. Les riads entrent souvent dans la catégorie premium. La commission couvre l'annonce, les voyageurs, l'accueil en Médina, le ménage, le linge et le reporting mensuel.",
  },
  {
    q: "Comment les voyageurs trouvent-ils un riad dans la Médina ?",
    a: "Nous leur envoyons avant l'arrivée un point de rendez-vous facile à repérer (porte de la Médina, place ou parking), avec photos et horaire. Un membre de notre équipe les y attend et les accompagne à pied jusqu'au riad. C'est l'une des premières causes d'avis négatifs sur les riads mal gérés.",
  },
  {
    q: "Un riad se loue-t-il plus cher qu'un appartement à Marrakech ?",
    a: "En général oui, car il est loué entier, accueille plus de voyageurs et offre une expérience que l'appartement n'a pas (patio, terrasse, bassin). Selon le nombre de chambres, l'emplacement et l'équipement, le prix à la nuit peut être nettement supérieur à celui d'un appartement du même quartier. Nous vous donnons une estimation gratuite pour votre riad.",
  },
  {
    q: "Quelle clientèle réserve les riads à Marrakech ?",
    a: "Surtout une clientèle européenne (France, Royaume-Uni, Espagne, Italie, Belgique) : couples, familles, groupes d'amis et petits séjours d'entreprise qui privatisent le riad. Ils réservent sur Airbnb et Booking, souvent plusieurs semaines à l'avance pour les vacances scolaires.",
  },
  {
    q: "Comment entretenez-vous le tadelakt et gérez-vous l'humidité ?",
    a: "Le tadelakt se nettoie au savon noir, sans produits acides ni abrasifs qui le ternissent. Nous aérons les pièces entre deux séjours, surveillons les traces d'humidité et vous signalons tout désordre avec photos. Les réparations sont confiées à un artisan qualifié après votre validation.",
  },
  {
    q: "Gérez-vous la piscine ou le bassin du riad ?",
    a: "Oui : traitement et contrôle de l'eau, nettoyage, vérification de la pompe et, si votre bassin est chauffé, réglage selon la saison. Un bassin propre et une eau limpide font partie de ce que les voyageurs regardent en premier sur les photos et dans les avis.",
  },
  {
    q: "Peut-on louer le riad par chambre ?",
    a: "Nous gérons principalement des riads loués entiers. La location chambre par chambre se rapproche de l'activité de maison d'hôtes et relève d'un autre cadre réglementaire. Nous étudions votre cas avant de vous proposer une formule.",
  },
  {
    q: "Je suis MRE et je n'habite pas au Maroc, est-ce possible ?",
    a: "Oui. Marwan Afassi, fondateur de Daribnb, est lui-même MRE et propriétaire. Tout se fait à distance : vous recevez chaque mois un reporting détaillé et le versement de vos revenus. Vous pouvez aussi opter pour le loyer fixe garanti à Marrakech.",
  },
];

export default function ConciergerieRiadMarrakech() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Conciergerie riad Marrakech — Gestion Airbnb et Booking",
    serviceType: "Conciergerie Airbnb pour riads",
    provider: { "@id": `${SITE}/#business` },
    areaServed: { "@type": "City", name: "Marrakech" },
    description:
      "Conciergerie spécialisée riads à Marrakech : accueil des voyageurs en Médina, clés, patio, bassin, terrasse, ménage, entretien du tadelakt, photos et tarifs. À partir de 20 % du chiffre d'affaires HT.",
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
      title="Conciergerie riad à Marrakech | Gestion Airbnb en Médina — Daribnb"
      description="Conciergerie pour riads à Marrakech : accueil en Médina, clés, patio, bassin, tadelakt, ménage et photos. Airbnb et Booking, dès 20 % du CA HT."
      canonical={URL}
      h1="Conciergerie riad à Marrakech"
      kicker="Riads · Médina de Marrakech"
      intro="Une conciergerie de riad à Marrakech gère la location courte durée d'une maison traditionnelle à patio, le plus souvent en Médina : accueil des voyageurs à pied depuis un point de rendez-vous, remise des clés, entretien du patio, du bassin et du tadelakt, ménage, photos et tarifs. Daribnb le fait dès 20 % du chiffre d'affaires HT."
      schema={[schema, faqSchema]}
    >
      {/* Accès Médina */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Accès en Médina
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              L'arrivée, le moment où un séjour en riad se gagne ou se perd.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Un voyageur fatigué qui tourne une heure dans les ruelles avec sa valise ne laisse pas cinq étoiles. Nous organisons chaque arrivée pour que le riad soit trouvé du premier coup.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ACCES.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-[#F7F6F2] rounded-2xl p-8 border border-black/5">
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

      {/* Patio, bassin, terrasse */}
      <section className="py-20 md:py-28 bg-[#F7F6F2]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Les espaces du riad
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Patio, bassin, terrasse : ce que les voyageurs viennent chercher.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ESPACES.map((p) => {
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
        </div>
      </section>

      {/* Ménage et maintenance */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Ménage et maintenance
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Un bâtiment traditionnel demande un entretien spécifique.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ENTRETIEN.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-[#F7F6F2] rounded-2xl p-8 border border-black/5">
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

      {/* Photos, prix, clientèle */}
      <section className="py-20 md:py-28 bg-[#F7F6F2]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Annonce et revenus
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Un riad se vend sur la photo et se paie à la nuit.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
              <div className="w-12 h-12 rounded-xl bg-[#006233]/10 flex items-center justify-center mb-4">
                <Camera size={24} className="text-[#006233]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A]">Photos</h3>
              <p className="mt-2 text-[#4B5563] leading-relaxed">
                Shooting pensé pour la lumière du patio : vues plongeantes depuis les galeries, terrasse en fin de journée, détails d'artisanat (zellige, bois sculpté, tadelakt), chaque chambre avec sa salle d'eau.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
              <div className="w-12 h-12 rounded-xl bg-[#006233]/10 flex items-center justify-center mb-4">
                <Sparkles size={24} className="text-[#006233]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A]">Prix à la nuit plus élevés</h3>
              <p className="mt-2 text-[#4B5563] leading-relaxed">
                Loué entier, un riad accueille plus de voyageurs et se positionne au-dessus des appartements du même quartier. Nous ajustons les tarifs selon la haute saison (octobre à mai), les vacances européennes et les événements.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/5">
              <div className="w-12 h-12 rounded-xl bg-[#006233]/10 flex items-center justify-center mb-4">
                <Users size={24} className="text-[#006233]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A]">Clientèle</h3>
              <p className="mt-2 text-[#4B5563] leading-relaxed">
                Majoritairement européenne : couples, familles, groupes d'amis qui privatisent le riad. Communication en français, anglais, arabe et espagnol, sur Airbnb et Booking.
              </p>
            </div>
          </div>

          <ul className="mt-10 grid md:grid-cols-2 gap-3">
            {[
              "Règlement intérieur clair : respect du voisinage et des horaires en Médina",
              "Linge hôtelier lavé et repassé hors du riad, contrôle avant chaque arrivée",
              "Reporting mensuel : revenus, charges, interventions d'entretien",
              "Note du profil hôte Airbnb de Marwan Afassi : 4,93/5 sur 1 196 avis",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-black/5">
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
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-10">
            Questions fréquentes sur la conciergerie de riad à Marrakech
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

      <MarrakechCluster current="/conciergerie-riad-marrakech" bg="bg-[#F7F6F2]" cardBg="bg-white" />

      <RelatedArticles slugs={[
        { slug: "conciergerie-airbnb-marrakech-guide-2026", title: "Conciergerie Airbnb Marrakech : guide complet 2026" },
        { slug: "mre-airbnb-maroc-gestion-distance-2026", title: "MRE et Airbnb au Maroc : guide complet pour gérer son bien à distance en 2026" },
        { slug: "loi-airbnb-maroc-2025-proprietaires", title: "Loi Airbnb Maroc 2025 : ce que les propriétaires doivent savoir" },
      ]} />
    </ServicePageLayout>
  );
}
