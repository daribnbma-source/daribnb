import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";

const container = document.getElementById("root");
const tree = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si le HTML a été pré-rendu au build (Puppeteer prerender), on hydrate.
// Sinon (dev / fallback SPA non pré-rendu), on render normalement.
// /admin/* n'est jamais pré-rendu : Cloudflare y sert la page 404 pré-rendue, qu'on ne doit pas
// hydrater avec l'admin (erreur #418). On repart d'un conteneur vide.
const isAdmin = window.location.pathname.startsWith("/admin");
if (container.hasChildNodes() && !isAdmin) {
  ReactDOM.hydrateRoot(container, tree);
} else {
  container.replaceChildren();
  ReactDOM.createRoot(container).render(tree);
}
