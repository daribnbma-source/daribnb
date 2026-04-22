import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#loyer-fixe", label: "Loyer Fixe" },
  { href: "#histoire", label: "Mon histoire" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-black/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a href="#" data-testid="nav-logo" className="flex items-center">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((item) => (
            <a
              key={item.href}
              data-testid={`nav-link-${item.label.toLowerCase().replace(/\s/g, "-")}`}
              href={item.href}
              className="text-[15px] font-medium text-[#1A1A1A] hover:text-[#FF5A5F] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#simulator"
            data-testid="nav-cta-estimate"
            className="bg-[#FF5A5F] hover:bg-[#E0484D] text-white rounded-full px-6 py-3 font-semibold text-sm transition-all shadow-sm hover:shadow-md"
          >
            Estimer mes revenus
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

      {open && (
        <div className="md:hidden bg-white border-t border-black/5 px-6 py-4 space-y-3">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-[#1A1A1A] py-2 font-medium"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#simulator"
            onClick={() => setOpen(false)}
            className="block bg-[#FF5A5F] text-white text-center rounded-full px-6 py-3 font-semibold"
          >
            Estimer mes revenus
          </a>
        </div>
      )}
    </header>
  );
}
