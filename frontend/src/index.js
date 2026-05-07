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
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, tree);
} else {
  ReactDOM.createRoot(container).render(tree);
}
