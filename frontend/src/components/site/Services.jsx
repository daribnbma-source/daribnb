import React from "react";
import { Camera, CalendarRange, Sparkles, Headphones, TrendingUp, Globe2, FileBarChart, Wrench } from "lucide-react";
import { motion } from "motion/react";
import Reveal from "../motion/Reveal";

// Ce qui est inclus dans la conciergerie : grille « bento », la première case porte la photo réelle.
const ITEMS = [
  { icon: Camera, title: "Annonce et photos pro", desc: "Shooting, titre vendeur, description en plusieurs langues, référencement Airbnb." },
  { icon: TrendingUp, title: "Prix ajustés chaque jour", desc: "Tarification dynamique selon la saison, les événements et la concurrence." },
  { icon: Globe2, title: "Airbnb et Booking", desc: "Votre calendrier diffusé sur plusieurs plateformes, sans double réservation." },
  { icon: Headphones, title: "Voyageurs accueillis 24/7", desc: "Messages, check-in, remise des clés, assistance pendant le séjour." },
  { icon: Sparkles, title: "Ménage et linge hôtelier", desc: "Équipe formée aux standards hôteliers, draps et serviettes fournis." },
  { icon: Wrench, title: "Entretien suivi", desc: "Petites réparations et contrôles entre deux séjours." },
  { icon: CalendarRange, title: "Calendrier à votre main", desc: "Vous bloquez vos dates quand vous voulez profiter du bien." },
  { icon: FileBarChart, title: "Rapport mensuel", desc: "Réservations, revenus, charges : tout est visible, rien n'est caché." },
];

export default function Services() {
  return (
    <section id="services" data-testid="services-section" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Reveal className="mb-14 max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-wider text-[#006233]">Conciergerie 360°</span>
          <h2 className="mt-3 text-4xl font-bold text-[#1A1A1A] md:text-5xl">
            Tout est inclus. Vous n'avez plus rien à gérer.
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3">
          {/* Case photo */}
          <Reveal className="relative overflow-hidden rounded-3xl sm:col-span-2 lg:row-span-2 min-h-[18rem]">
            <img
              src="/assets/logements/logement-2-salon.jpg"
              alt="Salon d'un logement géré par Daribnb, prêt pour les voyageurs"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute bottom-0 p-7 text-white">
              <p className="font-heading text-2xl font-bold leading-tight md:text-3xl">
                Votre bien, tenu comme un hôtel.
              </p>
              <p className="mt-2 max-w-sm text-sm text-white/80">
                Les mêmes standards que sur nos propres logements, notés 4,93/5 par les voyageurs.
              </p>
            </div>
          </Reveal>

          {ITEMS.map((s, i) => (
            <motion.div
              key={s.title}
              data-testid={`feature-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-3xl border border-[#E5E5E5] bg-[#F7F6F2] p-6 transition-colors hover:border-[#C1272D]/30 hover:bg-white"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#C1272D]/10 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                <s.icon className="h-5 w-5 text-[#C1272D]" />
              </div>
              <h3 className="font-bold text-[#1A1A1A]">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#4B5563]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
