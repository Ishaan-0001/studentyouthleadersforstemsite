import React from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const pinIcon = L.divIcon({
  className: "",
  html: `<span style="display:inline-block;width:20px;height:20px;border-radius:9999px;background:#0096ff;border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.35)"></span>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  popupAnchor: [0, -12],
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
      className="h-[460px] w-full overflow-hidden rounded-3xl border border-black/5 shadow-lg"
      style={{ background: "#aadaff" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors &copy; CARTO'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <ZoomControl position="bottomright" />
      {chapters.map((ch) => (
        <Marker key={ch.slug} position={[ch.lat, ch.lng]} icon={pinIcon}>
          <Popup>
            <div className="font-display font-bold text-[#005020]">{ch.name}, {ch.state}</div>
            <div className="text-xs text-[#555]">SY-STEM Chapter</div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}