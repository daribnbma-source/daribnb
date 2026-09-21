import React from "react";
import { ShieldCheck, FileText, XCircle, PhoneCall, Calendar } from "lucide-react";

const POINTS = [
  {
    icon: FileText,
    title: "Transparence totale",
    text: "Rapport mensuel détaillé : réservations, revenus, charges. Aucune ligne cachée.",
  },
  {
    icon: XCircle,
    title: "Sans engagement long",
    text: "Vous testez, vous validez. Résiliation possible sans pénalité selon les termes du contrat.",
  },
  {
    icon: PhoneCall,
    title: "Un interlocuteur, pas un ticket",
    text: "Marwan et son équipe répondent en direct sur WhatsApp — pas de service client anonyme.",
  },
];

export default function Guarantee() {
  return (
    <section
      data-testid="guarantee-section"
      className="py-24 md:py-32 bg-[#1A1A1A] relative overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#C1272D]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#006233]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white rounded-full px-4 py-2 text-sm font-semibold mb-6">
            <ShieldCheck size={16} className="text-[#C1272D]" />
            Notre engagement
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Confiez votre bien sans crainte.
          </h2>
          <p className="mt-4 text-lg text-white/70">
            On sait que confier les clés de son logement demande de la confiance. Voici
            exactement ce qu'on met en place pour la mériter.
          </p>
        </div>

        {/* Garantie principale */}
        <div className="mb-10 rounded-3xl border border-[#006233]/40 bg-gradient-to-br from-[#006233]/15 via-[#006233]/5 to-transparent p-8 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#006233]/20 text-[#006233] ring-1 ring-[#006233]/40">
              <Calendar size={26} strokeWidth={2.2} />
            </span>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#006233]">
                La garantie 1ère réservation
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                Pas de 1ère réservation sous 30 jours ? On reprend l'annonce à zéro avec vous, sans frais.
              </h3>
              <p className="mt-4 max-w-2xl text-white/70">
                Photos, titre, tarifs, calendrier : on retravaille tout le paramétrage de votre
                annonce jusqu'à la première réservation. C'est la méthode qu'on applique sur nos
                propres biens depuis plus de 7 ans — et celle que Marwan enseigne aujourd'hui aux
                entrepreneurs formés via{" "}
                <a
                  href="https://www.rentimmoacademy.fr/super-bnb-academy/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-white underline decoration-white/30 hover:text-[#5FD87A]"
                >
                  Rentimmo Academy
                </a>
                , l'académie de formation Airbnb qu'il a fondée.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10 flex items-start gap-4 rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8">
          <div className="flex items-center gap-1 flex-shrink-0 mt-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#C1272D]">★</span>
            ))}
          </div>
          <div>
            <p className="text-white/90 italic leading-relaxed">
              "Un grand merci à toute l'équipe Daribnb pour ce séjour ! L'appartement était top et
              conforme à nos attentes. 5 étoiles bien méritées."
            </p>
            <p className="mt-2 text-sm text-white/50">— Mona Safar, Bruxelles · avis Airbnb vérifié</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {POINTS.map((p) => (
            <div
              key={p.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <p.icon className="w-6 h-6 text-[#C1272D]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
