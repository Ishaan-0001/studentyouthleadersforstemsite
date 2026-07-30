import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, GeoJSON } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const STATES_GEOJSON_URL =
  "https://raw.githubusercontent.com/PublicaMundi/MappingGISData/master/geojson/us-states.json";

const pinSvg = `
  <svg width="34" height="44" viewBox="0 0 34 44" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter:drop-shadow(0 4px 6px rgba(0,80,32,0.55))">
    <path d="M17 0C7.6 0 0 7.6 0 17c0 11.9 17 27 17 27s17-15.1 17-27C34 7.6 26.4 0 17 0z" fill="#005020"/>
    <path d="M17 2C8.7 2 2 8.7 2 17c0 10.5 15 23.8 15 23.8S32 27.5 32 17C32 8.7 25.3 2 17 2z" fill="#0096ff"/>
    <circle cx="17" cy="17" r="7.5" fill="#fff"/>
    <circle cx="17" cy="17" r="4.5" fill="#b4f859"/>
  </svg>
`;
const pinIcon = L.divIcon({
  className: "",
  html: pinSvg,
  iconSize: [34, 44],
  iconAnchor: [17, 42],
  popupAnchor: [0, -38],
});

// Style GeoJSON features: green land fill, white borders
const geoStyle = {
  fillColor: "#006400",
  fillOpacity: 1,
  color: "#ffffff",
  weight: 1,
  opacity: 0.9,
};

export default function ChapterMap({ chapters }) {
  const [statesGeo, setStatesGeo] = useState(null);

  useEffect(() => {
    fetch(STATES_GEOJSON_URL)
      .then((res) => res.json())
      .then(setStatesGeo)
      .catch(() => setStatesGeo(null));
  }, []);

  return (
    <>
      <style>{`
        .stem-map .leaflet-tile-pane {
          filter: sepia(1) hue-rotate(60deg) saturate(2.8) brightness(0.72) contrast(1.05);
        }
        .stem-map .leaflet-container {
          background: linear-gradient(to bottom, #4a90e2 0%, #7ab8ef 55%, #a2d2f8 100%);
        }
        .stem-popup .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,80,32,0.25);
        }
      `}</style>
      <MapContainer
        center={[39, -97]}
        zoom={4}
        minZoom={3}
        maxZoom={11}
        scrollWheelZoom={false}
        zoomControl={false}
        maxBounds={[[-5, -170], [75, -50]]}
        maxBoundsViscosity={0.8}
        className="stem-map h-[460px] w-full overflow-hidden rounded-3xl border border-[#005020]/10 shadow-xl"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors &copy; CARTO'
          url="https://{s}.basemaps.cartocdn.com/voyager/{z}/{x}/{y}{r}.png"
        />
        {statesGeo && <GeoJSON data={statesGeo} style={geoStyle} />}
        <ZoomControl position="bottomright" />
        {chapters.map((ch) => (
          <Marker key={ch.slug} position={[ch.lat, ch.lng]} icon={pinIcon}>
            <Popup className="stem-popup">
              <div className="font-display text-sm font-bold text-[#005020]">{ch.name}, {ch.state}</div>
              <div className="text-xs font-medium text-[#0096ff]">SY-STEM Chapter</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}