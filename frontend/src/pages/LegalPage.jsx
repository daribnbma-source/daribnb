import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/site/Logo";
import Footer from "../components/site/Footer";
import { ArrowLeft } from "lucide-react";

export default function LegalPage({ title, children }) {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <header className="bg-white border-b border-[#E5E5E5]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] hover:text-[#C1272D] transition-colors"
          >
            <ArrowLeft size={16} /> Retour à l'accueil
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
          {title}
        </h1>
        <div className="h-1 w-16 bg-[#C1272D] rounded-full mb-10" />
        <div className="prose prose-lg max-w-none text-[#1A1A1A] space-y-6 leading-relaxed">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
