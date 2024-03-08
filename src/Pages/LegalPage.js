import React, { useState } from "react";
import { Container } from "react-bootstrap";

function LegalPage() {

  const [editorInfo, setEditorInfo] = useState({
    name: "John Doe",
    address: "Adresse de l'éditeur",
    phone: "Numéro de téléphone de l'éditeur",
  });

  const [hostInfo, setHostInfo] = useState({
    name: "Nom de l'hébergeur",
    address: "Adresse de l'hébergeur",
    phone: "Numéro de téléphone de l'hébergeur",
  });

  const [creditsInfo, setCreditsInfo] = useState({
    source: "Pixabay",
    url: "https://pixabay.com/",
  });

  return (
    <Container className="py-5 container-background">
      <h1 className="mb-4 text-center">Mentions Légales</h1>
      <p>Les présentes mentions légales régissent l'utilisation de ce site web et énoncent les conditions générales d'utilisation des services proposés. En accédant à ce site et en utilisant ses services, vous acceptez ces conditions dans leur intégralité. Nous vous recommandons de lire attentivement ces mentions légales avant d'utiliser ce site. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site</p>
      <div>
        <h3>Propriété intellectuelle :</h3>
        <p>"Tous les contenus, y compris les textes, les images, les logos et les vidéos, sont la propriété intellectuelle de l'éditeur et sont protégés par les lois sur le droit d'auteur et les marques déposées."</p>
        <h3>Éditeur du site :</h3>
        <p>Nom : {editorInfo.name}</p>
        <p>Adresse : {editorInfo.address}</p>
        <p>Numéro de téléphone : {editorInfo.phone}</p>
        <h3>Conditions d'utilisation :</h3>
        <p>"En utilisant ce site, vous acceptez nos conditions d'utilisation, qui régissent votre utilisation du site et établissent les droits et responsabilités des utilisateurs et de</p>
        <h3>Limitation de responsabilité :</h3>
        <p>"Dans toute la mesure permise par la loi, l'Editeur décline toute responsabilité pour les dommages ou pertes résultant de l'utilisation de ce site ou de son contenu."</p>
        <h3>Droits de reproduction :</h3>
        <p>"La reproduction de tout contenu de ce site est interdite sans autorisation préalable de l'Editeur. Veuillez nous contacter pour obtenir les autorisations nécessaires."</p>
      </div>
      <div className="mt-4">
        <h3>Hébergeur du site :</h3>
        <p>Nom : {hostInfo.name}</p>
        <p>Adresse : {hostInfo.address}</p>
        <p>Numéro de téléphone : {hostInfo.phone}</p>
      </div>
      <div className="mt-4">
        <h3>Crédits :</h3>
        <p>
          Les images utilisées sur ce site proviennent de {creditsInfo.source}.
          Vous pouvez consulter le site de {creditsInfo.source}{" "}
          <a href={creditsInfo.url} target="_blank" rel="noopener noreferrer">
            ici
          </a>
          .
        </p>
      </div>
    </Container>
  );
}

export default LegalPage;
