import React from "react";

/**
 * Logo — SY-STEM's circular mark: a neon-blue outer ring, a neon-green
 * gear/molecule layer with six nodes, a neon-blue wrench tilted at 45° in
 * the center, and three small green DNA helices below the ring.
 *
 * The background is fully transparent, so the mark sits cleanly on any
 * surface (blue hero, white navbar, dark footer, light chapter cards).
 */
const BLUE = "#007bff";
const GREEN = "#9fff50";

// Six nodes evenly spaced around the gear ring (every 60°).
const NODE_ANGLES = [0, 60, 120, 180, 240, 300];
const RING_CX = 50;
const RING_CY = 48;
const NODE_R = 31;

const nodePoints = NODE_ANGLES.map((deg) => {
  const rad = (deg * Math.PI) / 180;
  return {
    cx: RING_CX + NODE_R * Math.cos(rad),
    cy: RING_CY + NODE_R * Math.sin(rad),
  };
});

function DnaHelix({ x, y }) {
  return (
    <g transform={`translate(${x}, ${y})`} stroke={GREEN} fill="none">
      <path d="M3,0 C6,3 6,5 3,7 C0,9 0,11 3,14" strokeWidth="1.3" />
      <path d="M3,0 C0,3 0,5 3,7 C6,9 6,11 3,14" strokeWidth="1.3" />
      <line x1="0.6" y1="2.5" x2="5.4" y2="2.5" strokeWidth="1" />
      <line x1="0.6" y1="7" x2="5.4" y2="7" strokeWidth="1" />
      <line x1="0.6" y1="11.5" x2="5.4" y2="11.5" strokeWidth="1" />
    </g>
  );
}

export default function Logo({ className = "h-9 w-auto", title = "SY-STEM" }) {
  return (
    <svg viewBox="0 0 100 112" className={className} role="img" aria-label={title}>
      <title>{title}</title>

      {/* Outer ring */}
      <circle cx={RING_CX} cy={RING_CY} r="42" fill="none" stroke={BLUE} strokeWidth="2.5" />

      {/* Gear / molecule ring */}
      <circle cx={RING_CX} cy={RING_CY} r={NODE_R} fill="none" stroke={GREEN} strokeWidth="2.5" />
      {nodePoints.map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r="3.4" fill={GREEN} />
      ))}

      {/* Central wrench, tilted 45° */}
      <g transform="rotate(45 50 48)" fill={BLUE} stroke={BLUE}>
        <circle cx="50" cy="30" r="6.5" fill="none" strokeWidth="3.5" />
        <rect x="48.5" y="33" width="3" height="20" rx="1.5" />
        <rect x="47" y="50" width="6" height="6" rx="3" />
      </g>

      {/* Three DNA helices below the ring */}
      <DnaHelix x="37" y="92" />
      <DnaHelix x="47" y="92" />
      <DnaHelix x="57" y="92" />
    </svg>
  );
}