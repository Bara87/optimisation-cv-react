import React, { useEffect } from "react";

function GoogleMapsComponent({ lat, lng }) {
  useEffect(() => {
    // Chargement de l'API Google Maps
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBcMh6kS0e-C71orAsZoWMSxfmH1f28GGU&callback=initMap`;
      script.defer = true;
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    };

    // Initialisation de la carte Google Maps
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat, lng }, // Utilisation des valeurs de latitude et de longitude
        zoom: 10, // Niveau de zoom initial
      });

      // Création d'un marqueur aux coordonnées spécifiées
      new window.google.maps.Marker({
        position: { lat, lng },
        map: map,
        title: "Marker",
      });
    };

    // Charger l'API Google Maps une fois que le composant est monté
    loadGoogleMapsScript();

    // Nettoyer le script une fois que le composant est démonté
    return () => {
      const script = document.querySelector(
        'script[src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBcMh6kS0e-C71orAsZoWMSxfmH1f28GGU&callback=initMap"]'
      );
      script.remove();
    };
  }, [lat, lng]);

  return <div id="map" style={{ height: "400px" }}></div>; // Div pour afficher la carte
}

export default GoogleMapsComponent;

