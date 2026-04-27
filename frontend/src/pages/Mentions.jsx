import React from "react";
import LegalPage from "./LegalPage";

export default function Mentions() {
  return (
    <LegalPage title="Mentions légales">
      <section>
        <h2 className="text-2xl font-bold text-[#1A1A1A]">Éditeur du site</h2>
        <p>
          Le présent site <strong>daribnb.netlify.app</strong> (ci-après « le Site ») est
          édité par <strong>Daribnb</strong>, activité de conciergerie Airbnb et
          de sous-location professionnelle, exercée à titre personnel au Maroc.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Nom commercial :</strong> Daribnb</li>
          <li><strong>Activité :</strong> Conciergerie de location courte durée & sous-location professionnelle</li>
          <li><strong>Email :</strong> daribnb.ma@gmail.com</li>
          <li><strong>Téléphone :</strong> +212 6 46 21 84 07</li>
          <li><strong>Zone d'activité :</strong> Royaume du Maroc</li>
        </ul>
        <p className="text-sm text-[#4B5563] italic">
          Daribnb exerce actuellement à titre individuel. L'immatriculation au Registre du
          Commerce et les numéros d'identification fiscale seront mis à jour dès la création
          de la société.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#1A1A1A]">Hébergement</h2>
        <p>
          Le Site est hébergé via une infrastructure cloud internationale.
          Pour toute demande relative à l'hébergement, veuillez nous écrire à{" "}
          <a href="mailto:daribnb.ma@gmail.com" className="text-[#C1272D] font-semibold">
            daribnb.ma@gmail.com
          </a>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#1A1A1A]">Propriété intellectuelle</h2>
        <p>
          L'ensemble des contenus présents sur le Site (textes, logos, images,
          graphismes, code) est la propriété exclusive de Daribnb ou de ses
          partenaires, sauf mention contraire. Toute reproduction, diffusion ou
          exploitation, totale ou partielle, est interdite sans autorisation
          écrite préalable.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#1A1A1A]">Responsabilité</h2>
        <p>
          Les estimations de revenus proposées par le simulateur sont fournies
          à titre <strong>indicatif</strong> et reposent sur des données de
          marché moyennes. Elles ne constituent en aucun cas un engagement
          contractuel. Seul un RDV et une visite du bien permettent une
          estimation personnalisée.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-[#1A1A1A]">Contact</h2>
        <p>
          Pour toute question relative au Site ou à nos services, contactez-nous :
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Email : <a href="mailto:daribnb.ma@gmail.com" className="text-[#C1272D] font-semibold">daribnb.ma@gmail.com</a></li>
          <li>Téléphone / WhatsApp : <a href="tel:+212646218407" className="text-[#C1272D] font-semibold">+212 6 46 21 84 07</a></li>
        </ul>
      </section>
    </LegalPage>
  );
}
