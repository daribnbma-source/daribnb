import React from "react";
import {
  Camera,
  Calendar,
  Sparkles,
  Headphones,
  ShieldCheck,
  BadgeDollarSign,
} from "lucide-react";

const SERVICES = [
  {
    icon: Camera,
    title: "Annonce optimisée",
    desc: "Photos pro, titre vendeur, SEO Airbnb, tarification dynamique.",
  },
  {
    icon: Calendar,
    title: "Gestion des réservations",
    desc: "Calendrier multi-plateformes, communication voyageurs 7j/7.",
  },
  {
    icon: Sparkles,
    title: "Ménage & linge hôtelier",
    desc: "Équipe pro, standards hôteliers, draps et serviettes fournis.",
  },
  {
    icon: Headphones,
    title: "Check-in / Check-out 24h/24",
    desc: "Accueil des voyageurs, gestion clés, assistance permanente.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-bold text-[#FF5A5F] uppercase tracking-wider">
            Nos services
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            Deux façons de rentabiliser votre bien
          </h2>
          <p className="mt-4 text-lg text-[#4B5563]">
            Vous choisissez la formule qui vous convient. On s'occupe du reste.
          </p>
        </div>

        {/* Two main offers */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Conciergerie */}
          <div
            data-testid="service-card-concierge"
            className="group relative bg-[#FAF9F6] rounded-3xl p-8 md:p-10 border border-[#E5E5E5] hover:shadow-xl transition-all overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF5A5F]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-[#FF5A5F]/10 text-[#FF5A5F] rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4">
                <BadgeDollarSign size={14} />
                Conciergerie 360°
              </div>
              <h3 className="text-3xl font-bold text-[#1A1A1A] mb-3">
                Conciergerie Airbnb
              </h3>
              <p className="text-[#4B5563] mb-6">
                Gestion complète de votre location courte durée. Vous touchez
                les revenus, on gère tout le reste.
              </p>
              <ul className="space-y-2 mb-6 text-[15px] text-[#1A1A1A]">
                <li>✓ Annonce créée et optimisée</li>
                <li>✓ Prix dynamiques pour maximiser vos revenus</li>
                <li>✓ Ménage et maintenance inclus</li>
                <li>✓ Accueil voyageurs 24/7</li>
                <li>✓ Reporting mensuel transparent</li>
              </ul>
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-[#4B5563]">À partir de</span>
                <span className="text-3xl font-black text-[#FF5A5F]">20%</span>
                <span className="text-sm text-[#4B5563]">de commission</span>
              </div>
            </div>
          </div>

          {/* Loyer Fixe */}
          <div
            id="loyer-fixe"
            data-testid="service-card-fixed-rent"
            className="group relative bg-[#006233] text-white rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-all overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white/15 text-white rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldCheck size={14} />
                Zéro risque
              </div>
              <h3 className="text-3xl font-bold mb-3">
                Loyer Fixe Garanti
              </h3>
              <p className="text-white/85 mb-6">
                On vous loue votre bien en sous-location professionnelle. Un
                revenu fixe chaque mois, quoi qu'il arrive.
              </p>
              <ul className="space-y-2 mb-6 text-[15px]">
                <li>✓ Revenu garanti même en basse saison</li>
                <li>✓ Versement mensuel ponctuel</li>
                <li>✓ Entretien pris en charge à 100%</li>
                <li>✓ Contrat de sous-location professionnelle</li>
                <li>✓ Vos vacances entièrement libres</li>
              </ul>
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-white/75">Jusqu'à</span>
                <span className="text-3xl font-black text-white">
                  70%
                </span>
                <span className="text-sm text-white/75">du revenu estimé</span>
              </div>
            </div>
          </div>
        </div>

        {/* Inclus grid */}
        <div>
          <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8">
            Tout ce qui est inclus
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                data-testid={`feature-${i}`}
                className="bg-white border border-[#E5E5E5] rounded-2xl p-6 hover:border-[#FF5A5F]/40 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF5A5F]/10 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-[#FF5A5F]" />
                </div>
                <h4 className="font-bold text-[#1A1A1A] mb-2">{s.title}</h4>
                <p className="text-sm text-[#4B5563]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
