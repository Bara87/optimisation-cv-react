import React, { useEffect } from "react";

function GoogleMapsComponent({ lat, lng }) {
  useEffect(() => {
   
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBcMh6kS0e-C71orAsZoWMSxfmH1f28GGU&callback=initMap`;
      script.defer = true;
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    };

  
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat, lng }, 
        zoom: 10, 
      });


      new window.google.maps.Marker({
        position: { lat, lng },
        map: map,
        title: "Marker",
      });
    };

   
    loadGoogleMapsScript();


    return () => {
      const script = document.querySelector(
        'script[src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBcMh6kS0e-C71orAsZoWMSxfmH1f28GGU&callback=initMap"]'
      );
      script.remove();
    };
  }, [lat, lng]);

  return <div id="map" style={{ height: "400px" }}></div>; 
}

export default GoogleMapsComponent;

