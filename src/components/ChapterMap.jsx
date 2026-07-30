import React from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const pinSvg = `
  <svg width="34" height="44" viewBox="0 0 34 44" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter:drop-shadow(0 4px 6px rgba(0,80,32,0.45))">
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

export default function ChapterMap({ chapters }) {
  return (
    <MapContainer
      center={[39.5, -98]}
      zoom={4}
      minZoom={3}
      maxZoom={13}
      scrollWheelZoom={false}
      zoomControl={false}
      className="h-[460px] w-full overflow-hidden rounded-3xl border border-[#005020]/10 shadow-xl"
      style={{ background: "#0a2a1a" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors &copy; CARTO'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
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
  );
}