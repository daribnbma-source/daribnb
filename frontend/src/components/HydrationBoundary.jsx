import React, { Suspense } from "react";

// Frontière d'hydratation : découpe l'hydratation de la home en plusieurs tâches courtes
// (React hydrate chaque frontière <Suspense> séparément, en rendant la main au navigateur entre deux).
// Le <div style="display:contents"> ne crée aucune boîte : la mise en page ne change pas.
// (content-visibility:auto a été testé : gain réel mais les ancres #contact/#tarifs tombaient à côté.)
// scripts/prerender.js entoure chaque [data-hb] des marqueurs <!--$--> … <!--/$--> qu'attend React.
export default function HydrationBoundary({ children }) {
  return (
    <Suspense fallback={null}>
      <div data-hb="" style={{ display: "contents" }}>
        {children}
      </div>
    </Suspense>
  );
}
