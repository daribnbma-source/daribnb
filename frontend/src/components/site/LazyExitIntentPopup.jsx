import React, { Suspense, lazy, useEffect, useState } from "react";

const ExitIntentPopup = lazy(() => import("./ExitIntentPopup"));

// Le popup de sortie ne s'ouvre jamais avant 20 s : son code est chargé une fois la page au repos,
// hors du démarrage. Rien n'est rendu avant (le popup fermé ne rend rien non plus) : pas d'écart
// avec le HTML pré-rendu.
export default function LazyExitIntentPopup() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const ric = window.requestIdleCallback || ((cb) => setTimeout(cb, 2000));
    const cancel = window.cancelIdleCallback || clearTimeout;
    const id = ric(() => setOn(true), { timeout: 5000 });
    return () => cancel(id);
  }, []);
  if (!on) return null;
  return (
    <Suspense fallback={null}>
      <ExitIntentPopup />
    </Suspense>
  );
}
