import React from "react";
import { Check, Star, ArrowRight } from "lucide-react";
import Simulator from "./Simulator";

const HERO_IMG =
  "https://images.pexels.com/photos/15531325/pexels-photo-15531325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200";

export default function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative pt-28 pb-24 md:pt-36 md:pb-40 zellige-pattern overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-6 fade-up">
            <div className="inline-flex items-center gap-2 bg-[#006233]/10 text-[#006233] rounded-full px-4 py-2 text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#006233] animate-pulse" />
              Expert Airbnb depuis plus de 6 ans
            </div>

            <h1
              data-testid="hero-title"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A1A1A] leading-[1.05]"
            >
              Votre bien Airbnb,{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#FF5A5F]">géré comme un pro.</span>
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-[#4B5563] leading-relaxed max-w-xl">
              Conciergerie Airbnb clé en main ou loyer fixe garanti, partout au
              Maroc. On gère, vous encaissez.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Revenus optimisés & annonces boostées",
                "Ménage pro, check-in 24/7, linge hôtelier",
                "Option loyer fixe : revenu garanti chaque mois",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#1A1A1A]">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#006233] flex items-center justify-center">
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </span>
                  <span className="text-[15px]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#simulator"
                data-testid="hero-cta-primary"
                className="inline-flex items-center justify-center gap-2 bg-[#FF5A5F] hover:bg-[#E0484D] text-white rounded-full px-8 py-4 font-semibold transition-all shadow-md hover:shadow-xl group"
              >
                Estimer mes revenus
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/212646218407?text=Bonjour%20Daribnb%2C%20je%20souhaite%20en%20savoir%20plus"
                target="_blank"
                rel="noreferrer"
                data-testid="hero-cta-whatsapp"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f5f5f5] text-[#1A1A1A] border border-black/10 rounded-full px-8 py-4 font-semibold transition-all shadow-sm"
              >
                <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#FF5A5F] text-[#FF5A5F]" />
                ))}
              </div>
              <p className="text-sm text-[#4B5563]">
                <span className="font-semibold text-[#1A1A1A]">4.9/5</span> · +150 propriétaires satisfaits
              </p>
            </div>
          </div>

          {/* Right: Image + Simulator */}
          <div className="lg:col-span-6 relative fade-up delay-200">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={HERO_IMG}
                  alt="Riad marocain géré par Daribnb"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              {/* Floating badge */}
              <div className="hidden md:flex absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-black/5 items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#FF5A5F]/10 flex items-center justify-center">
                  <span className="text-2xl">🇲🇦</span>
                </div>
                <div>
                  <p className="text-xs text-[#4B5563]">Présent dans</p>
                  <p className="font-bold text-[#1A1A1A]">Tout le Maroc</p>
                </div>
              </div>
              <div className="hidden md:flex absolute -bottom-6 -right-6 bg-[#006233] text-white rounded-2xl p-4 shadow-xl items-center gap-3">
                <div className="text-3xl font-black">+40%</div>
                <div className="text-sm leading-tight">
                  de revenus<br />en moyenne
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simulator - overlapping */}
        <div className="mt-16 lg:mt-24">
          <Simulator />
        </div>
      </div>
    </section>
  );
}
