import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { api } from "../../lib/api";
import { TrendingUp, Sparkles, Loader2 } from "lucide-react";
import { toast } from "sonner";

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

  const submit = async (e) => {
    e.preventDefault();
    if (!city || !type) {
      toast.error("Merci de choisir la ville et le type de bien.");
      return;
    }
    setLoading(true);
    try {
      const { data } = await api.post("/simulate", {
        city,
        property_type: type,
        bedrooms: Number(bedrooms),
      });
      setResult(data);
      setTimeout(() => {
        document.getElementById("simulator-result")?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    } catch (err) {
      toast.error("Erreur lors de l'estimation. Réessayez.");
    } finally {
      setLoading(false);
    }
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
                Versé tous les mois. Zéro risque.
              </p>
            </div>
            <div className="md:col-span-3 bg-[#FAF9F6] rounded-2xl p-5 text-sm text-[#4B5563] border border-[#E5E5E5]">
              💡 Estimation indicative basée sur les données du marché marocain
              2025. Contactez-nous pour une estimation personnalisée gratuite.
              <a
                href="#contact"
                className="ml-2 text-[#C1272D] font-semibold hover:underline"
              >
                Demander un RDV →
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
