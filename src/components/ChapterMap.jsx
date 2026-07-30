import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, GeoJSON } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const STATES_GEOJSON_URL =
  "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json";
const WORLD_GEOJSON_URL =
  "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json";

const pinSvg = `
  <svg width="34" height="44" viewBox="0 0 34 44" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter:drop-shadow(0 4px 6px rgba(0,0,0,0.55))">
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

const worldStyle = {
  fillColor: "#0a5c2e",
  fillOpacity: 1,
  color: "#b4f859",
  weight: 1,
  opacity: 0.7,
};

const stateStyle = {
  fillColor: "#0e6b35",
  fillOpacity: 1,
  color: "#b4f859",
  weight: 1.5,
  opacity: 0.9,
};

export default function ChapterMap({ chapters }) {
  const [statesGeo, setStatesGeo] = useState(null);
  const [worldGeo, setWorldGeo] = useState(null);

  useEffect(() => {
    fetch(STATES_GEOJSON_URL)
      .then((res) => res.json())
      .then(setStatesGeo)
      .catch(() => setStatesGeo(null));
    fetch(WORLD_GEOJSON_URL)
      .then((res) => res.json())
      .then(setWorldGeo)
      .catch(() => setWorldGeo(null));
  }, []);

  return (
    <>
      <style>{`
        .stem-map .leaflet-container {
          background: #0a3d62;
        }
        .stem-popup .leaflet-popup-content-wrapper {
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.4);
        }
      `}</style>
      <MapContainer
        center={[39, -97]}
        zoom={4}
        minZoom={3}
        maxZoom={11}
        scrollWheelZoom={false}
        zoomControl={false}
        maxBounds={[[-85, -180], [85, 180]]}
        maxBoundsViscosity={1}
        className="stem-map h-[460px] w-full overflow-hidden rounded-3xl border border-white/10 shadow-xl"
        style={{ background: "#0a3d62" }}
      >
        {worldGeo && <GeoJSON data={worldGeo} style={worldStyle} />}
        {statesGeo && <GeoJSON data={statesGeo} style={stateStyle} />}
        <TileLayer
          attribution='&copy; OpenStreetMap contributors &copy; CARTO'
          url="https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png"
        />
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