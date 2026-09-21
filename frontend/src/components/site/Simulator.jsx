import React, { useState, useEffect } from "react";
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
import { useSimulator } from "../../lib/SimulatorContext";

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

// Vrais versements Airbnb reçus par des propriétaires Daribnb (captures fournies par Marwan).
const REAL_PAYOUTS = [296.82, 114.45, 660.79, 785.4, 1029.18, 801.64, 651.26, 1052.81];

export default function Simulator() {
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [bedrooms, setBedrooms] = useState(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const { setSimResult } = useSimulator();
  const [payoutIndex, setPayoutIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPayoutIndex((i) => (i + 1) % REAL_PAYOUTS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

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
      setSimResult({
        ...data,
        cityLabel: CITIES.find((c) => c.v === city)?.l || city,
        typeLabel: TYPES.find((t) => t.v === type)?.l || type,
      });
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
        <p className="text-[#4B5563] mb-6">
          Estimation instantanée. Sans engagement.
        </p>

        <div className="mb-8 flex flex-col sm:flex-row gap-3">
          <div className="flex-1 flex items-center gap-3 bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 shadow-sm">
            <span className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 32 32" className="w-4 h-4" fill="#C1272D">
                <path d="M16 1C7.7 1 1 7.7 1 16s6.7 15 15 15 15-6.7 15-15S24.3 1 16 1zm7.3 22.1c-.7 1-1.8 1.5-3 1.5-1.1 0-2.2-.4-3-1.2-.6-.6-1.1-1.3-1.4-2-.3.7-.8 1.4-1.4 2-.8.8-1.9 1.2-3 1.2s-2.2-.5-3-1.5c-1.2-1.6-1.3-3.7-.3-5.5 1-1.9 2.8-3.6 5.6-5.3.8-.5 1.4-.8 2-1.1.3-.1.5-.2.7-.3.5-.2 1.1-.2 1.6 0 .2.1.4.2.7.3.6.3 1.2.6 2 1.1 2.8 1.7 4.6 3.4 5.6 5.3 1 1.8.9 3.9-.3 5.5z" />
              </svg>
            </span>
            <div className="min-w-0">
              <p
                key={payoutIndex}
                className="text-xs font-semibold text-[#1A1A1A] truncate fade-up"
              >
                Airbnb · Un versement de{" "}
                {REAL_PAYOUTS[payoutIndex].toLocaleString("fr-FR", {
                  minimumFractionDigits: 2,
                })}{" "}
                € a été envoyé
              </p>
              <p className="text-[11px] text-[#4B5563]">Notification réelle reçue par un propriétaire Daribnb</p>
            </div>
          </div>
          <div className="flex-1 flex items-center gap-3 bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 shadow-sm">
            <span className="w-8 h-8 rounded-full bg-[#006233]/10 flex items-center justify-center flex-shrink-0">
              <TrendingUp size={16} className="text-[#006233]" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-[#1A1A1A] truncate">1 391,72 € de revenu net · Septembre 2026</p>
              <p className="text-[11px] text-[#4B5563]">Exemple réel, un logement géré par Daribnb à Tanger</p>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="grid md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="text-sm font-semibold text-[#1A1A1A] mb-2 block">
              Ville
            </label>
            <Select value={city} onValueChange={setCity}>
              <SelectTrigger
                data-testid="simulator-city-select"
                aria-label="Choisir la ville"
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
                aria-label="Choisir le type de bien"
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
            <label htmlFor="simulator-bedrooms" className="text-sm font-semibold text-[#1A1A1A] mb-2 block">
              Chambres
            </label>
            <Input
              id="simulator-bedrooms"
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
            className="cta-pulse h-12 bg-[#C1272D] hover:bg-[#A01D22] disabled:opacity-60 text-white rounded-xl px-6 font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
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
