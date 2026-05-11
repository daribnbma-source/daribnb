import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./Logo";

// Les 3 vrais services Daribnb (Tanger-first)
const SERVICES_MENU = [
  {
    href: "/conciergerie-airbnb-tanger",
    label: "Conciergerie Airbnb",
    desc: "Gestion clé en main à Tanger : annonce, voyageurs, ménage, check-in 24/7",
  },
  {
    href: "/loyer-fixe-airbnb-tanger",
    label: "Loyer fixe garanti",
    desc: "Revenu mensuel fixe pour votre bien à Tanger. Zéro risque, zéro stress",
  },
  {
    href: "/optimiser-revenus-airbnb",
    label: "Audit & Optimisation",
    desc: "Vous gérez vous-même ? On audite et on optimise vos revenus Airbnb",
  },
];

const NAV_TOP = [
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermer le dropdown desktop sur clic extérieur
  useEffect(() => {
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Fermer la nav mobile au changement de route
  useEffect(() => {
    setOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  return (
    <header
      data-testid="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || servicesOpen || open
          ? "bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        <Link to="/" data-testid="nav-logo" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Services dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-1 text-[15px] font-medium text-[#1A1A1A] hover:text-[#C1272D] transition-colors"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[420px] bg-white rounded-2xl shadow-2xl border border-black/5 p-3 grid grid-cols-1 gap-1">
                {SERVICES_MENU.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    onClick={() => setServicesOpen(false)}
                    className="flex flex-col gap-1 p-3 rounded-xl hover:bg-[#FAF9F6] transition-colors group"
                  >
                    <span className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#C1272D] transition-colors">
                      {s.label}
                    </span>
                    <span className="text-xs text-[#4B5563] leading-snug">
                      {s.desc}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {NAV_TOP.map((item) => (
            <Link
              key={item.href}
              data-testid={`nav-link-${item.label.toLowerCase().replace(/\s/g, "-")}`}
              to={item.href}
              className="text-[15px] font-medium text-[#1A1A1A] hover:text-[#C1272D] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/212646218407?text=Bonjour%20Daribnb%2C%20je%20souhaite%20une%20estimation"
            target="_blank"
            rel="noreferrer"
            data-testid="nav-cta-estimate"
            className="bg-[#C1272D] hover:bg-[#A01D22] text-white rounded-full px-6 py-3 font-semibold text-sm transition-all shadow-sm hover:shadow-md"
          >
            Estimation gratuite
          </a>
        </div>

        <button
          data-testid="mobile-menu-btn"
          className="md:hidden p-2 rounded-lg hover:bg-black/5"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-white border-t border-black/5 px-6 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
          <button
            onClick={() => setMobileServicesOpen((v) => !v)}
            className="w-full flex items-center justify-between text-[#1A1A1A] py-3 font-bold border-b border-black/5"
          >
            Services
            <ChevronDown
              size={18}
              className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
            />
          </button>
          {mobileServicesOpen && (
            <div className="pl-4 py-2 space-y-1 border-b border-black/5">
              {SERVICES_MENU.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-[#1A1A1A] hover:text-[#C1272D]"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}
          {NAV_TOP.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block text-[#1A1A1A] py-3 font-medium border-b border-black/5"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/212646218407?text=Bonjour%20Daribnb%2C%20je%20souhaite%20une%20estimation"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="block bg-[#C1272D] text-white text-center rounded-full px-6 py-3 mt-4 font-semibold"
          >
            Estimation gratuite
          </a>
        </div>
      )}
    </header>
  );
}
