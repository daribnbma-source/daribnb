import React from "react";

const STEPS = [
  { n: 1, t: "RDV téléphonique", d: "On discute de vos objectifs et besoins." },
  { n: 2, t: "Visite du bien", d: "On se déplace pour évaluer votre logement." },
  { n: 3, t: "Estimation détaillée", d: "Projection de revenus et formule adaptée." },
  { n: 4, t: "Signature du contrat", d: "Conciergerie ou loyer fixe, à votre choix." },
  { n: 5, t: "Mise en ligne", d: "Photos pro, annonce optimisée, premières résa." },
];

export default function HowItWorks() {
  return (
    <section
      data-testid="how-it-works-section"
      className="py-24 md:py-32 bg-[#FAF9F6]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <span className="text-sm font-bold text-[#006233] uppercase tracking-wider">
            Comment ça marche
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            5 étapes. C'est tout.
          </h2>
          <p className="mt-4 text-lg text-[#4B5563]">
            De la prise de contact à votre première réservation, on vous
            accompagne à chaque étape.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 relative">
          {STEPS.map((step, i) => (
            <div
              key={step.n}
              data-testid={`step-${step.n}`}
              className="relative bg-white rounded-2xl p-6 border border-[#E5E5E5] hover:border-[#C1272D]/30 hover:shadow-md transition-all"
            >
              <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-[#C1272D] text-white flex items-center justify-center font-black text-lg shadow-md">
                {step.n}
              </div>
              <div className="pt-4">
                <h3 className="font-bold text-[#1A1A1A] text-lg mb-2">
                  {step.t}
                </h3>
                <p className="text-sm text-[#4B5563]">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
