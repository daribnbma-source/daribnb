import React, { createContext, useContext, useState } from "react";

// Partage le résultat du Simulateur (Hero) avec le formulaire Contact,
// pour pré-remplir ville + estimation et éviter de faire re-saisir le visiteur.
const SimulatorContext = createContext(null);

export function SimulatorProvider({ children }) {
  const [simResult, setSimResult] = useState(null);
  return (
    <SimulatorContext.Provider value={{ simResult, setSimResult }}>
      {children}
    </SimulatorContext.Provider>
  );
}

export function useSimulator() {
  return useContext(SimulatorContext);
}
