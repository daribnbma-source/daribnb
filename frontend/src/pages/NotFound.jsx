import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";

// Page 404 : servie avec un vrai statut 404 par Cloudflare (build/404.html), jamais indexée.
const LINKS = [
  { to: "/conciergerie-airbnb-marrakech", label: "Conciergerie Airbnb Marrakech" },
  { to: "/conciergerie-airbnb-tanger", label: "Conciergerie Airbnb Tanger" },
  { to: "/conciergerie-airbnb-casablanca", label: "Conciergerie Airbnb Casablanca" },
  { to: "/conciergerie-airbnb-rabat", label: "Conciergerie Airbnb Rabat" },
  { to: "/blog", label: "Le blog" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <Helmet>
        <title>Page introuvable | Daribnb</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Header />
      <main className="grid-light mx-auto max-w-3xl px-6 py-32 text-center">
        <p className="font-heading text-7xl font-bold text-[#C1272D]">404</p>
        <h1 className="mt-4 text-3xl font-bold text-[#1A1A1A] md:text-4xl">Cette page n'existe pas.</h1>
        <p className="mt-3 text-lg text-[#4B5563]">Elle a peut-être été déplacée. Voici où aller :</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="rounded-full border border-[#E5E5E5] bg-white px-5 py-2.5 text-sm font-semibold text-[#1A1A1A] hover:border-[#C1272D] hover:text-[#C1272D]">
              {l.label}
            </Link>
          ))}
        </div>
        <Link to="/" className="mt-10 inline-flex rounded-full bg-[#C1272D] px-7 py-3.5 font-semibold text-white hover:bg-[#A01D22]">
          Retour à l'accueil
        </Link>
      </main>
      <Footer />
    </div>
  );
}
