import React from "react";
import LegalPage from "./LegalPage";

export default function Privacy() {
  return (
    <LegalPage title="Politique de confidentialité">
      <p>
        Chez Daribnb, la protection de vos données personnelles est une priorité.
        Cette politique explique quelles données nous collectons, pourquoi, et
        comment les protéger.
      </p>

      <section>
        <h2 className="text-2xl font-bold text-[#1A1A1A]">Données collectées</h2>
        <p>Nous collectons uniquement les données que vous nous transmettez volontairement via :</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Le <strong>formulaire de contact</strong> : nom, email, téléphone, ville, service souhaité, message.</li>
          <li>Le <strong>simulateur de revenus</strong> : ville, type de bien, nombre de chambres (aucune donnée personnelle).</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#1A1A1A]">Finalités</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Vous recontacter suite à votre demande.</li>
          <li>Établir un devis ou une estimation personnalisée.</li>
          <li>Améliorer nos services.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#1A1A1A]">Durée de conservation</h2>
        <p>
          Vos données sont conservées le temps strictement nécessaire au
          traitement de votre demande, puis archivées ou supprimées conformément
          à la réglementation marocaine en vigueur (loi 09-08).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#1A1A1A]">Partage des données</h2>
        <p>
          Vos données ne sont <strong>ni vendues, ni louées, ni cédées</strong>{" "}
          à des tiers. Elles sont traitées uniquement par Daribnb.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#1A1A1A]">Cookies</h2>
        <p>
          Le Site utilise uniquement des cookies techniques nécessaires à son
          bon fonctionnement et, le cas échéant, des cookies de mesure
          d'audience anonyme.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#1A1A1A]">Vos droits</h2>
        <p>
          Conformément à la loi 09-08 relative à la protection des données
          personnelles au Maroc, vous disposez d'un droit d'accès, de
          rectification, d'opposition et de suppression de vos données. Pour
          exercer ces droits, écrivez à{" "}
          <a href="mailto:daribnb.ma@gmail.com" className="text-[#FF5A5F] font-semibold">
            daribnb.ma@gmail.com
          </a>.
        </p>
      </section>
    </LegalPage>
  );
}
