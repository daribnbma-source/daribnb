import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Plane, Globe2, FileText, MessageCircle } from "lucide-react";
import ServicePageLayout from "./ServicePageLayout";

const SITE = "https://www.daribnb.com";
const URL = `${SITE}/gestion-locative-mre-tanger`;

const MRE_FAQS = [
  {
    q: "Je n'habite pas au Maroc, comment ça marche concrètement ?",
    a: "On signe le mandat à distance (DocuSign ou en main propre lors de votre prochain passage). Vous nous donnez un jeu de clés (lors de votre prochaine venue), et on prend le relais. Communication par WhatsApp/email/téléphone.",
  },
  {
    q: "Comment je récupère mes revenus ?",
    a: "Versement mensuel par virement bancaire. Selon votre préférence : compte marocain en dirhams (gratuit) ou compte français/européen en euros (frais bancaires marocains à votre charge, on vous explique tout).",
  },
  {
    q: "Et si j'ai besoin de récupérer mon bien pour les vacances ?",
    a: "Vous nous prévenez à l'avance, on bloque les dates dans le calendrier Airbnb. Aucun frais, aucune pénalité. Le bien reste à vous.",
  },
  {
    q: "Et la fiscalité au Maroc pour un MRE ?",
    a: "On vous accompagne sur les démarches : déclaration préfecture, taxe de séjour, conformité Loi Airbnb 2025. Pour la fiscalité MRE (déclaration revenus locatifs), on travaille avec un cabinet comptable de confiance qu'on peut recommander.",
  },
  {
    q: "Quel est votre tarif pour un MRE ?",
    a: "Commission à partir de 20% sur les revenus encaissés. Tout inclus : annonce, voyageurs, ménage, linge, check-in 24/7, reporting. Pas de frais cachés. Loyer fixe garanti possible sur demande après audit du bien.",
  },
];

const PAINS = [
  "Vous habitez en France, en Espagne, en Belgique ou aux Pays-Bas",
  "Vous avez acheté un bien à Tanger pour rentabiliser ou pour la famille",
  "Vous ne pouvez pas tout gérer à distance : voyageurs, ménage, urgences",
  "Vous avez essayé un cousin / un ami / un voisin… sans succès durable",
  "Vous voulez transformer votre bien en revenu mensuel sans y penser",
];

const HOW_WE_HELP = [
  {
    icon: Globe2,
    title: "Communication 100% en français",
    desc: "Vous nous parlez, on vous parle, comme si on était à côté. Reporting clair, WhatsApp, email — toujours en français.",
  },
  {
    icon: FileText,
    title: "On gère les démarches au Maroc",
    desc: "Déclarations préfecture, taxe de séjour, conformité Loi Airbnb 2025. On vous tient au courant sans vous noyer dans la paperasse.",
  },
  {
    icon: MessageCircle,
    title: "Vous récupérez votre bien quand vous voulez",
    desc: "Vous venez en été, à l'Aïd, pour une visite famille ? Vous bloquez les dates, on les retire de la location. Aucune contrainte.",
  },
  {
    icon: Plane,
    title: "Versement en EUR ou MAD",
    desc: "On vous reverse vos revenus selon votre préférence : virement vers votre compte FR/EU en euros, ou vers votre compte marocain en dirhams.",
  },
];

export default function GestionLocativeMRETanger() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Gestion locative Tanger pour MRE — Marocains résidant à l'étranger",
    serviceType: "Gestion locative à distance pour propriétaires non-résidents",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE}/#business`,
      name: "Daribnb",
      url: SITE,
      telephone: "+212646218407",
      email: "daribnb.ma@gmail.com",
    },
    areaServed: { "@type": "City", name: "Tanger" },
    audience: {
      "@type": "Audience",
      audienceType: "Marocains résidant à l'étranger (MRE)",
    },
    description:
      "Service de gestion locative dédié aux MRE possédant un bien à Tanger. Gestion 100% à distance, communication en français, versement EUR/MAD.",
    url: URL,
  };

  // FAQPage schema pour rich results Google
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: MRE_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <ServicePageLayout
      title="Gestion locative Tanger pour MRE | Daribnb — Votre bien géré à distance"
      description="Vous êtes MRE et possédez un bien à Tanger ? Daribnb gère tout à distance. Fondé par un MRE, on comprend vos contraintes. Estimation gratuite en 24h."
      canonical={URL}
      h1="Gestion locative à Tanger pour propriétaires MRE"
      kicker="Spécial MRE · Tanger"
      intro="Vous êtes Marocain résidant à l'étranger et vous possédez un bien à Tanger ? On gère tout à distance, en français, avec une transparence absolue. Daribnb a été fondé par un MRE — on connaît votre situation parce qu'on l'a vécue."
      schema={[schema, faqSchema]}
    >
      {/* Si vous vous reconnaissez */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              On parle de vous
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Vous êtes en France, votre bien est à Tanger.
            </h2>
            <p className="mt-4 text-lg text-[#4B5563]">
              Si vous vous reconnaissez dans une de ces phrases, on est faits pour bosser ensemble.
            </p>
          </div>

          <ul className="space-y-3">
            {PAINS.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 bg-[#FAF9F6] rounded-xl p-4 border border-black/5"
              >
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#C1272D]/10 flex items-center justify-center">
                  <Check size={14} className="text-[#C1272D]" strokeWidth={3} />
                </span>
                <span className="text-[#1A1A1A]">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ce qu'on prend en charge */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
              Ce qu'on prend en charge
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Vous restez chez vous, on s'occupe de tout au Maroc.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {HOW_WE_HELP.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.title}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-black/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#006233]/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[#006233]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A]">{h.title}</h3>
                  <p className="mt-2 text-[#4B5563] leading-relaxed">{h.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pourquoi nous comprenons les MRE */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <span className="text-sm font-bold text-[#C1272D] uppercase tracking-wider">
            Histoire fondatrice
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Pourquoi Daribnb comprend les MRE.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-[#4B5563] leading-relaxed">
            <p>
              Daribnb a été fondé par Marwan, lui-même MRE — Marocain ayant vécu à l'étranger, et propriétaire d'un bien à Tanger avant de devenir conciergerie.
            </p>
            <p>
              Au début, j'ai essayé de gérer mon Airbnb depuis la France. Photos floues, voyageurs mécontents, ménage approximatif, communication galère avec les femmes de ménage. Comme beaucoup de MRE, j'ai vite compris qu'on ne peut pas faire ça à distance, sans une équipe locale solide qui parle votre langue.
            </p>
            <p>
              Daribnb, c'est l'agence que j'aurais voulu avoir à l'époque. Une équipe locale à Tanger, une communication en français, un reporting clair, un versement régulier. Et surtout : la confiance, parce qu'on partage la même expérience.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ MRE */}
      <section className="py-20 md:py-28 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-10">
            Questions fréquentes des propriétaires MRE
          </h2>
          <div className="space-y-4">
            {MRE_FAQS.map((f) => (
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
            Aller plus loin
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                to: "/conciergerie-airbnb-tanger",
                title: "Conciergerie Airbnb Tanger",
                desc: "Le détail des services de conciergerie : annonces, voyageurs, ménage, check-in.",
              },
              {
                to: "/gestion-locative-tanger",
                title: "Gestion locative Tanger",
                desc: "Notre service complet de gestion locative courte durée à Tanger.",
              },
              {
                to: "/optimiser-revenus-airbnb",
                title: "Audit Airbnb",
                desc: "Vous gérez déjà mais voulez booster vos revenus ? Audit dématérialisé partout au Maroc.",
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
