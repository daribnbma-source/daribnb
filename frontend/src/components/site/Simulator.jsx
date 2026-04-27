import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { TrendingUp, Sparkles, Loader2 } from "lucide-react";
import { toast } from "sonner";

// Pricing matrix — MAD / night, mirror of backend logic
const CITY_MULTIPLIER = {
  marrakech: 1.2,
  casablanca: 1.0,
  rabat: 0.95,
  tanger: 1.05,
  agadir: 1.1,
  fes: 0.9,
  essaouira: 1.15,
  chefchaouen: 1.0,
  autre: 0.9,
};
const TYPE_BASE = { studio: 450, appartement: 700, riad: 1400, villa: 1800 };
const CITY_OCCUPANCY = {
  marrakech: 78,
  casablanca: 70,
  rabat: 68,
  tanger: 72,
  agadir: 75,
  fes: 65,
  essaouira: 73,
  chefchaouen: 70,
  autre: 65,
};

function estimate({ city, property_type, bedrooms }) {
  const mult = CITY_MULTIPLIER[city] ?? CITY_MULTIPLIER.autre;
  const base = TYPE_BASE[property_type] ?? TYPE_BASE.appartement;
  const occ = CITY_OCCUPANCY[city] ?? CITY_OCCUPANCY.autre;
  const extra = Math.max(0, Number(bedrooms) - 1) * 180;
  const nightly = Math.round((base + extra) * mult);
  const monthly_avg = Math.round(nightly * 30 * (occ / 100));
  return {
    monthly_min: Math.round(monthly_avg * 0.85),
    monthly_max: Math.round(monthly_avg * 1.15),
    monthly_avg,
    // Sous-location pro : ~50% du revenu Airbnb moyen versé au proprio.
    // Couvre largement un loyer longue durée + offre stabilité/zéro gestion.
    fixed_rent: Math.round(monthly_avg * 0.5),
    occupancy: occ,
    nightly_rate: nightly,
  };
}

const CITIES = [
  { v: "marrakech", l: "Marrakech" },
  { v: "casablanca", l: "Casablanca" },
  { v: "rabat", l: "Rabat" },
  { v: "tanger", l: "Tanger" },
  { v: "agadir", l: "Agadir" },
  { v: "fes", l: "Fès" },
  { v: "essaouira", l: "Essaouira" },
  { v: "chefchaouen", l: "Chefchaouen" },
  { v: "autre", l: "Autre ville" },
];

const TYPES = [
  { v: "studio", l: "Studio" },
  { v: "appartement", l: "Appartement" },
  { v: "riad", l: "Riad" },
  { v: "villa", l: "Villa" },
];

export default function Simulator() {
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [bedrooms, setBedrooms] = useState(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    if (!city || !type) {
      toast.error("Merci de choisir la ville et le type de bien.");
      return;
    }
    setLoading(true);
    // Slight delay for UX feel + smoother animation
    setTimeout(() => {
      const data = estimate({ city, property_type: type, bedrooms });
      setResult(data);
      setLoading(false);
      setTimeout(() => {
        document
          .getElementById("simulator-result")
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }, 350);
  };

  const fmt = (n) => new Intl.NumberFormat("fr-MA").format(n);

  return (
    <div id="simulator" className="relative" data-testid="simulator-card">
      <div className="bg-white/90 backdrop-blur-xl border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.12)] rounded-3xl p-8 md:p-10">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-[#C1272D]/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-[#C1272D]" />
          </div>
          <span className="text-sm font-semibold text-[#C1272D] uppercase tracking-wider">
            Simulateur gratuit
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-2">
          Combien votre bien peut-il rapporter ?
        </h2>
        <p className="text-[#4B5563] mb-8">
          Estimation instantanée. Sans engagement.
        </p>

        <form onSubmit={submit} className="grid md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="text-sm font-semibold text-[#1A1A1A] mb-2 block">
              Ville
            </label>
            <Select value={city} onValueChange={setCity}>
              <SelectTrigger
                data-testid="simulator-city-select"
                className="h-12 rounded-xl border-[#E5E5E5] bg-white"
              >
                <SelectValue placeholder="Choisir..." />
              </SelectTrigger>
              <SelectContent>
                {CITIES.map((c) => (
                  <SelectItem key={c.v} value={c.v}>
                    {c.l}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-semibold text-[#1A1A1A] mb-2 block">
              Type de bien
            </label>
            <Select value={type} onValueChange={setType}>
              <SelectTrigger
                data-testid="simulator-type-select"
                className="h-12 rounded-xl border-[#E5E5E5] bg-white"
              >
                <SelectValue placeholder="Choisir..." />
              </SelectTrigger>
              <SelectContent>
                {TYPES.map((t) => (
                  <SelectItem key={t.v} value={t.v}>
                    {t.l}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-semibold text-[#1A1A1A] mb-2 block">
              Chambres
            </label>
            <Input
              type="number"
              min={0}
              max={20}
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              data-testid="simulator-capacity-input"
              className="h-12 rounded-xl border-[#E5E5E5] bg-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            data-testid="simulator-submit-btn"
            className="h-12 bg-[#C1272D] hover:bg-[#A01D22] disabled:opacity-60 text-white rounded-xl px-6 font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <TrendingUp size={18} />
                Estimer
              </>
            )}
          </button>
        </form>

        {result && (
          <div
            id="simulator-result"
            data-testid="simulator-result"
            className="mt-10 grid md:grid-cols-3 gap-4 fade-up"
          >
            <div className="bg-gradient-to-br from-[#C1272D] to-[#A01D22] text-white rounded-2xl p-6 shadow-lg">
              <p className="text-sm opacity-90 mb-1">Revenu mensuel estimé</p>
              <p className="text-3xl md:text-4xl font-black">
                {fmt(result.monthly_min)} — {fmt(result.monthly_max)} MAD
              </p>
              <p className="text-xs opacity-80 mt-2">
                Taux d'occupation moyen : {result.occupancy}%
              </p>
            </div>
            <div className="bg-white border border-[#E5E5E5] rounded-2xl p-6">
              <p className="text-sm text-[#4B5563] mb-1">Prix moyen / nuit</p>
              <p className="text-3xl font-black text-[#1A1A1A]">
                {fmt(result.nightly_rate)} MAD
              </p>
              <p className="text-xs text-[#4B5563] mt-2">
                Optimisé selon saisonnalité
              </p>
            </div>
            <div className="bg-[#006233] text-white rounded-2xl p-6 shadow-lg">
              <p className="text-sm opacity-90 mb-1">Loyer fixe garanti / mois</p>
              <p className="text-3xl md:text-4xl font-black">
                {fmt(result.fixed_rent)} MAD
              </p>
              <p className="text-xs opacity-80 mt-2">
                Tous les mois, même date. Locataire pro stable. Zéro gestion.
              </p>
            </div>
            <div className="md:col-span-3 bg-[#FAF9F6] rounded-2xl p-5 text-sm text-[#4B5563] border border-[#E5E5E5] space-y-2">
              <p>
                💡 <span className="font-semibold text-[#1A1A1A]">Conciergerie</span> : tu encaisses les revenus Airbnb (variables), nous gérons à 20% de commission.{" "}
                <span className="font-semibold text-[#1A1A1A]">Loyer fixe</span> : nous prenons le bien en sous-location pro et te versons un montant fixe chaque mois — c'est nous qui assumons la vacance et la gestion.
              </p>
              <p className="text-xs">
                Estimation indicative basée sur les données du marché marocain 2026.{" "}
                <a
                  href="#contact"
                  className="text-[#C1272D] font-semibold hover:underline"
                >
                  Demander un RDV pour une offre personnalisée →
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
