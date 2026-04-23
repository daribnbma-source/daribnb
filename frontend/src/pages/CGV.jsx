import React from "react";
import LegalPage from "./LegalPage";

export default function CGV() {
  return (
    <LegalPage title="Conditions générales de service">
      <p className="text-[#4B5563]">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
      </p>

      <section>
        <h2 className="text-2xl font-bold text-[#1A1A1A]">1. Objet</h2>
        <p>
          Les présentes conditions générales (CGS) régissent l'utilisation des
          services proposés par <strong>Daribnb</strong>, à savoir :
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Conciergerie Airbnb</strong> : gestion complète d'une
            location courte durée pour le compte du propriétaire (mise en
            ligne, tarification, communication voyageurs, ménage, check-in /
            check-out, maintenance).
          </li>
          <li>
            <strong>Loyer fixe garanti (sous-location professionnelle)</strong>{" "}
            : Daribnb prend le bien en location auprès du propriétaire via un
            contrat de sous-location professionnelle et verse un loyer fixe
            mensuel.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#1A1A1A]">2. Devis & contrat</h2>
        <p>
          Toute prestation fait l'objet d'un <strong>contrat écrit</strong>{" "}
          spécifique, précisant les conditions de rémunération, la durée, les
          obligations réciproques et les modalités de résiliation. Les CGS
          complètent ce contrat.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#1A1A1A]">3. Tarifs</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Conciergerie</strong> : commission à partir de <strong>20%</strong> des revenus
            générés (TTC), sauf accord particulier.
          </li>
          <li>
            <strong>Loyer fixe</strong> : montant fixé au contrat, versé
            mensuellement par virement.
          </li>
        </ul>
        <p>Aucun frais d'entrée. Aucun frais caché.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#1A1A1A]">4. Obligations du propriétaire</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Fournir un bien conforme, assuré et en bon état.</li>
          <li>Disposer de toutes les autorisations (copropriété, urbanisme) nécessaires à la location courte durée.</li>
          <li>Informer Daribnb de tout incident ou modification du bien.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#1A1A1A]">5. Obligations de Daribnb</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Assurer une gestion professionnelle et diligente du bien.</li>
          <li>Communiquer régulièrement sur les performances (reporting).</li>
          <li>Verser les revenus ou le loyer fixe aux échéances prévues au contrat.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#1A1A1A]">6. Résiliation</h2>
        <p>
          Les modalités de résiliation sont définies dans chaque contrat. Un
          préavis raisonnable est systématiquement prévu.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#1A1A1A]">7. Droit applicable</h2>
        <p>
          Les présentes CGS sont soumises au droit marocain. Tout litige non
          résolu à l'amiable sera porté devant les tribunaux compétents du
          Royaume du Maroc.
        </p>
      </section>
    </LegalPage>
  );
}
