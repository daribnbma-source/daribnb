import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Sur changement de route :
 * - Si l'URL contient un hash (#contact, #faq...) → scroll vers cet element
 * - Sinon → scroll instant en haut de page (fix bug "atterrissage milieu de page")
 *
 * Placer en haut de l'arbre, juste sous <BrowserRouter>.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si hash anchor, on tente de scroller vers l'element
    if (hash) {
      // setTimeout pour laisser React render la page cible avant scroll
      const t = setTimeout(() => {
        const el = document.getElementById(hash.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        // Fallback : top de page si id pas trouvé
        window.scrollTo({ top: 0, behavior: "instant" });
      }, 50);
      return () => clearTimeout(t);
    }

    // Pas de hash : top de page (instant pour pas surprendre l'utilisateur)
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
