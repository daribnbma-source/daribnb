import React from "react";
import Logo from "./Logo";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      data-testid="footer-section"
      className="bg-[#006233] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 text-white/80 max-w-sm leading-relaxed">
              Conciergerie Airbnb & loyer fixe garanti au Maroc. Expert depuis
              plus de 6 ans, on s'occupe de votre bien comme si c'était le nôtre.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="text-2xl">🇲🇦</span>
              <span className="text-sm text-white/80">Fièrement marocain</span>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="/#services" className="hover:text-[#C1272D] transition-colors">Conciergerie Airbnb</a></li>
              <li><a href="/#super-daribnb" className="hover:text-[#C1272D] transition-colors">Super Daribnb</a></li>
              <li><a href="/#loyer-fixe" className="hover:text-[#C1272D] transition-colors">Loyer fixe garanti</a></li>
              <li><a href="/#tarifs" className="hover:text-[#C1272D] transition-colors">Tarifs</a></li>
              <li><a href="/blog" className="hover:text-[#C1272D] transition-colors">Blog</a></li>
              <li><a href="/#faq" className="hover:text-[#C1272D] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li data-testid="footer-email" className="flex items-center gap-2">
                <Mail size={14} />
                <a href="mailto:daribnb.ma@gmail.com" className="hover:text-[#C1272D] transition-colors">
                  daribnb.ma@gmail.com
                </a>
              </li>
              <li data-testid="footer-phone" className="flex items-center gap-2">
                <Phone size={14} />
                <a href="tel:+212646218407" className="hover:text-[#C1272D] transition-colors">
                  +212 6 46 21 84 07
                </a>
              </li>
              <li data-testid="footer-instagram" className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <a href="https://instagram.com/daribnb.ma" target="_blank" rel="noreferrer" className="hover:text-[#C1272D] transition-colors">
                  @daribnb.ma
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} />
                <span>Tout le Maroc</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <div>
            © {new Date().getFullYear()} Daribnb. Tous droits réservés.
          </div>
          <div className="flex gap-6">
            <a href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="/confidentialite" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="/cgv" className="hover:text-white transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
