import React from "react";

/**
 * Logo — SY-STEM's circular mark, rendered as a scalable vector so the brand
 * colors can be tuned. The outer ring, inner circuit (circle + lines + nodes)
 * and the central hand-and-wrench are dark green; the gear and the three DNA
 * helices stay lime. Transparent background, drops a soft shadow for lift.
 */
const LIME = "#76FF03";
const GREEN = "#0a7d3a";

export default function Logo({ className = "h-11 w-auto", title = "SY-STEM" }) {
  const teeth = Array.from({ length: 8 }, (_, i) => i * 45);
  const nodeAngles = [30, 90, 150, 210, 270, 330];
  const nodes = nodeAngles.map((a) => {
    const rad = (a * Math.PI) / 180;
    return { x: 120 + 44 * Math.cos(rad), y: 120 + 44 * Math.sin(rad) };
  });

  return (
    <svg
      viewBox="0 0 240 264"
      role="img"
      aria-label={title}
      className={className}
      style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.35))" }}
    >
      {/* Outer ring */}
      <circle cx="120" cy="120" r="104" fill="none" stroke={GREEN} strokeWidth="7" />

      {/* Gear disc + 8 teeth */}
      <circle cx="120" cy="120" r="70" fill={LIME} />
      {teeth.map((a) => (
        <rect
          key={a}
          x="111"
          y="26"
          width="18"
          height="24"
          rx="2"
          fill={LIME}
          transform={`rotate(${a} 120 120)`}
        />
      ))}

      {/* Inner circuit */}
      <circle cx="120" cy="120" r="44" fill="none" stroke={GREEN} strokeWidth="3" />
      <line x1="120" y1="76" x2="120" y2="50" stroke={GREEN} strokeWidth="3" />
      <line x1="120" y1="164" x2="120" y2="190" stroke={GREEN} strokeWidth="3" />
      <line x1="76" y1="120" x2="50" y2="120" stroke={GREEN} strokeWidth="3" />
      <line x1="164" y1="120" x2="190" y2="120" stroke={GREEN} strokeWidth="3" />
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="5" fill={GREEN} />
      ))}

      {/* Hand gripping a wrench, 45° */}
      <g
        transform="translate(120 120) rotate(45)"
        fill="none"
        stroke={GREEN}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="0" y1="26" x2="0" y2="-18" />
        <path d="M -10 -18 L -10 -32 L -5 -32 L -5 -24 L 5 -24 L 5 -32 L 10 -32 L 10 -18" />
        <ellipse cx="0" cy="12" rx="12" ry="8" />
        <line x1="-7" y1="6" x2="-7" y2="20" />
        <line x1="-2" y1="5" x2="-2" y2="20" />
        <line x1="3" y1="5" x2="3" y2="20" />
        <line x1="8" y1="6" x2="8" y2="20" />
      </g>

      {/* Three DNA helices */}
      {[96, 120, 144].map((x) => (
        <g
          key={x}
          transform={`translate(${x} 232)`}
          fill="none"
          stroke={LIME}
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="M0 0 C4 4 4 8 0 12 C-4 16 -4 20 0 24" />
          <path d="M0 0 C-4 4 -4 8 0 12 C4 16 4 20 0 24" />
          <line x1="-3" y1="4" x2="3" y2="4" />
          <line x1="-3" y1="12" x2="3" y2="12" />
          <line x1="-3" y1="20" x2="3" y2="20" />
        </g>
      ))}
    </svg>
  );
}