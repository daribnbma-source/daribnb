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
              <li><a href="#services" className="hover:text-[#FF5A5F] transition-colors">Conciergerie Airbnb</a></li>
              <li><a href="#loyer-fixe" className="hover:text-[#FF5A5F] transition-colors">Loyer fixe garanti</a></li>
              <li><a href="#tarifs" className="hover:text-[#FF5A5F] transition-colors">Tarifs</a></li>
              <li><a href="#faq" className="hover:text-[#FF5A5F] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li data-testid="footer-email" className="flex items-center gap-2">
                <Mail size={14} />
                <a href="mailto:daribnb.ma@gmail.com" className="hover:text-[#FF5A5F] transition-colors">
                  daribnb.ma@gmail.com
                </a>
              </li>
              <li data-testid="footer-phone" className="flex items-center gap-2">
                <Phone size={14} />
                <a href="tel:+212646218407" className="hover:text-[#FF5A5F] transition-colors">
                  +212 6 46 21 84 07
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
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
