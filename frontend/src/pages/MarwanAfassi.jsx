import React from "react";
import { Link } from "react-router-dom";
import {
  Award,
  MapPin,
  Calendar,
  Star,
  Users,
  Globe,
  Languages,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import ServicePageLayout from "./ServicePageLayout";

const SITE = "https://www.daribnb.com";
const URL = `${SITE}/marwan-afassi`;

const TIMELINE = [
  {
    year: "2017-2019",
    title: "Premiers pas en sous-location pro",
    desc: "Premier appartement en sous-location à Troyes. Apprentissage du marché LCD, des conventions de bail commercial dérogatoire, des relations avec propriétaires.",
  },
  {
    year: "2019-2022",
    title: "Expansion France & Benelux",
    desc: "Extension à plusieurs villes : Lille, Bruxelles, Reims. Plusieurs dizaines de biens gérés en propre ou en conciergerie. Construction d'une équipe ménage, photographe, maintenance.",
  },
  {
    year: "2022-2023",
    title: "Retour aux origines : Tanger",
    desc: "Premier projet Airbnb à Tanger en gestion familiale. Découverte d'un marché tangerois en pleine explosion, mais sans acteur conciergerie premium dédié aux MRE.",
  },
  {
    year: "2023",
    title: "Fondation de Daribnb",
    desc: "Lancement officiel de Daribnb à Tanger : conciergerie premium et loyer fixe, pensés pour les propriétaires MRE qui veulent rentabiliser leur bien sans s'arracher les cheveux à 2000 km.",
  },
  {
    year: "2024-2026",
    title: "Croissance & Rentimmo Academy",
    desc: "Daribnb dépasse les 1 196 commentaires Airbnb à 4,93/5. En parallèle, Marwan fonde Rentimmo Academy pour former d'autres entrepreneurs francophones à la sous-location pro et la conciergerie Airbnb.",
  },
];

const STATS = [
  { icon: Calendar, label: "Années d'expérience Airbnb", value: "6+" },
  { icon: Star, label: "Note moyenne sur Airbnb", value: "4,93/5" },
  { icon: Users, label: "Commentaires clients vérifiés", value: "1 196+" },
  { icon: Globe, label: "Pays opérés", value: "France · Belgique · Maroc" },
  { icon: Languages, label: "Langues parlées", value: "FR · AR · EN · ES" },
  { icon: Briefcase, label: "Activités fondées", value: "Daribnb · Rentimmo Academy" },
];

export default function MarwanAfassi() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE}/marwan-afassi#person`,
    name: "Marwan Afassi",
    givenName: "Marwan",
    familyName: "Afassi",
    jobTitle: "Fondateur de Daribnb",
    description:
      "Fondateur de Daribnb, conciergerie Airbnb à Tanger. Expert Airbnb depuis plus de 6 ans en France, Belgique et Maroc. MRE de seconde génération, originaire de Troyes, racines dans le Nord du Maroc.",
    image: `${SITE}/marwan-afassi.jpg`,
    url: URL,
    sameAs: [
      "https://www.instagram.com/daribnb.ma",
      "https://www.youtube.com/@daribnbtanger",
      "https://www.instagram.com/rentimmo_academy",
      "https://www.youtube.com/@rentimmoacademy",
      "https://rentimmo-academy.fr",
    ],
    worksFor: [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE}/#business`,
        name: "Daribnb",
        url: SITE,
      },
      {
        "@type": "EducationalOrganization",
        name: "Rentimmo Academy",
        url: "https://rentimmo-academy.fr",
      },
    ],
    knowsAbout: [
      "Conciergerie Airbnb",
      "Gestion locative meublée courte durée",
      "Sous-location professionnelle",
      "Marché Airbnb au Maroc",
      "Marché Airbnb à Tanger",
      "Fiscalité MRE",
      "Loyer fixe garanti",
      "Channel manager Airbnb Booking Vrbo",
      "Pricing dynamique Airbnb",
      "Photographie immobilière courte durée",
    ],
    nationality: { "@type": "Country", name: "France" },
    homeLocation: { "@type": "City", name: "Tanger, Maroc" },
  };

  return (
    <ServicePageLayout
      title="Marwan Afassi — Fondateur de Daribnb | Expert Airbnb Tanger"
      description="Marwan Afassi, fondateur de Daribnb. 6+ ans d'expérience Airbnb en France, Belgique et Maroc. MRE et expert conciergerie à Tanger. Note moyenne 4,93/5 sur 1 196 commentaires."
      canonical={URL}
      h1="Marwan Afassi"
      kicker="Fondateur"
      intro="Fondateur de Daribnb, expert Airbnb depuis plus de 6 ans, MRE de seconde génération qui a transformé son expérience opérationnelle terrain en service premium pour les propriétaires de Tanger."
      schema={personSchema}
    >
      {/* Stats grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="bg-[#FAF9F6] rounded-2xl p-6 border border-black/5"
              >
                <stat.icon size={24} className="text-[#C1272D] mb-3" />
                <p className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
                  {stat.value}
                </p>
                <p className="text-sm text-[#4B5563] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 md:py-24 bg-[#FAF9F6]">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <span className="inline-block text-sm font-bold text-[#C1272D] uppercase tracking-wider">
            Qui suis-je
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A] leading-tight">
            De Troyes à Tanger, le parcours d'un MRE qui voulait faire les choses bien.
          </h2>
          <div className="mt-8 space-y-5 text-lg text-[#1A1A1A] leading-relaxed">
            <p>
              Je m'appelle <strong>Marwan Afassi</strong>. Je suis né à Troyes, en France. Mes
              racines sont dans le Nord du Maroc — région tangéroise. Comme beaucoup de MRE de
              ma génération, j'ai grandi entre deux cultures : été à Tanger, hiver à Troyes.
            </p>
            <p>
              En 2017, à 22 ans, je me lance dans la sous-location professionnelle en France.
              Premier appart à Troyes. J'apprends le métier sur le terrain :
              <strong> bail commercial dérogatoire, optimisation Airbnb, équipe ménage,
              photographie, channel managers, pricing dynamique</strong>. Je passe les 6
              années suivantes à empiler des mètres carrés en gestion : Lille, Reims,
              Bruxelles, plusieurs dizaines de biens à mon nom ou en conciergerie pour
              d'autres propriétaires.
            </p>
            <p>
              En 2022, je commence à louer en Airbnb un appartement familial à Tanger.
              Premier choc : <strong>le marché tangerois est en explosion</strong> (touristes
              européens, diaspora marocaine, Tanger Med qui draine du business, hub aérien
              Mohammed VI). Deuxième choc : <strong>il n'y a aucune conciergerie premium dédiée
              aux MRE</strong>. Les solutions existantes sont soit du bricolage entre particuliers,
              soit des conciergeries généralistes qui ignorent les contraintes spécifiques
              des propriétaires expatriés (versement EUR, communication française, fiscalité
              binationale, gestion 100% à distance).
            </p>
            <p>
              <strong>Daribnb naît en 2023</strong> de ce constat : créer ce que j'aurais
              aimé trouver pour gérer mon propre bien. Service premium, fondé par un MRE
              pour les MRE, avec workflow opérationnel rodé sur 6 ans en Europe.
            </p>
            <p>
              Aujourd'hui, on dépasse les <strong>1 196 commentaires Airbnb à 4,93/5</strong>
              {' '}— la meilleure note opérationnelle du marché tangerois. En parallèle, j'ai
              fondé <a href="https://rentimmo-academy.fr" target="_blank" rel="noreferrer" className="underline text-[#C1272D]">
              Rentimmo Academy</a> pour transmettre ces 6 ans d'expérience à d'autres
              entrepreneurs francophones (sous-location pro et conciergerie Airbnb).
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <span className="inline-block text-sm font-bold text-[#C1272D] uppercase tracking-wider">
            Parcours
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            6+ ans d'expérience Airbnb opérationnelle.
          </h2>

          <div className="mt-12 space-y-10">
            {TIMELINE.map((item, i) => (
              <div key={i} className="flex gap-6 md:gap-10">
                <div className="flex-shrink-0">
                  <div className="w-20 md:w-24 text-right">
                    <span className="text-sm font-bold text-[#C1272D]">
                      {item.year}
                    </span>
                  </div>
                </div>
                <div className="flex-1 border-l border-black/10 pl-6 md:pl-10 pb-6">
                  <h3 className="text-lg md:text-xl font-bold text-[#1A1A1A]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[#4B5563] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise badges */}
      <section className="py-16 md:py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <span className="inline-block text-sm font-bold text-[#C1272D] uppercase tracking-wider">
            Domaines d'expertise
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Ce que je connais et où on peut me citer.
          </h2>
          <p className="mt-4 text-lg text-[#4B5563]">
            Pour la presse, les podcasts, les conférences ou les LLMs en search IA : voici les sujets
            sur lesquels je peux apporter une perspective d'opérateur (pas de blabla théorique).
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Marché Airbnb Tanger",
              "Marché Airbnb Maroc",
              "Conciergerie Airbnb premium",
              "Sous-location professionnelle France/Belgique",
              "Loyer fixe garanti",
              "Fiscalité MRE Airbnb",
              "Convention fiscale France-Maroc",
              "Channel managers Airbnb Booking Vrbo",
              "Pricing dynamique Airbnb",
              "Photographie LCD",
              "Recrutement équipe ménage",
              "Réglementation Airbnb Maroc 2025",
              "Statut auto-entrepreneur Maroc",
              "Office des Changes Maroc",
            ].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-black/5 text-sm font-medium text-[#1A1A1A]"
              >
                <Award size={14} className="mr-2 text-[#C1272D]" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA contact */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            Une question, une collaboration ?
          </h2>
          <p className="mt-4 text-lg text-[#4B5563]">
            Que vous soyez propriétaire à Tanger, journaliste, étudiant en hôtellerie ou
            organisateur de podcast/conférence : je réponds personnellement aux messages
            sérieux. Pas d'agence intermédiaire entre vous et moi.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/conciergerie-airbnb-tanger"
              className="inline-flex items-center justify-center gap-2 bg-[#C1272D] hover:bg-[#A01D22] text-white rounded-full px-8 py-4 font-semibold transition-all shadow-md hover:shadow-xl"
            >
              Découvrir Daribnb
              <ArrowRight size={18} />
            </Link>
            <a
              href="mailto:daribnb.ma@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f5f5f5] text-[#1A1A1A] border border-black/10 rounded-full px-8 py-4 font-semibold transition-all"
            >
              Email direct
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 text-sm text-[#4B5563]">
            <MapPin size={14} />
            Tanger, Maroc · Disponible aussi à distance pour les MRE
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
