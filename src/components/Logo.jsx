import React from "react";

/**
 * Logo — a gear (engineering) with a DNA double-helix (science) running
 * through its center. Vector mark in the SY-STEM palette: blue gear,
 * lime helix. Scales crisply at any size.
 */
export default function Logo({ className = "h-10 w-10", title = "SY-STEM" }) {
  const teeth = Array.from({ length: 10 });
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label={title}>
      <title>{title}</title>
      <defs>
        <linearGradient id="stem-gear" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0096ff" />
          <stop offset="100%" stopColor="#0072d0" />
        </linearGradient>
        <mask id="stem-hole">
          <rect width="48" height="48" fill="white" />
          <circle cx="24" cy="24" r="11" fill="black" />
        </mask>
      </defs>

      {/* gear */}
      <g mask="url(#stem-hole)" fill="url(#stem-gear)">
        {teeth.map((_, i) => (
          <rect
            key={i}
            x="21.5"
            y="1.5"
            width="5"
            height="7.5"
            rx="1.4"
            transform={`rotate(${i * 36} 24 24)`}
          />
        ))}
        <circle cx="24" cy="24" r="16.5" />
      </g>

      {/* DNA double helix */}
      <g fill="none" stroke="#b4f859" strokeWidth="2.1" strokeLinecap="round">
        <path d="M24 14 C 32 17, 32 21, 24 24 C 16 27, 16 31, 24 34" />
        <path d="M24 14 C 16 17, 16 21, 24 24 C 32 27, 32 31, 24 34" />
      </g>
      <g stroke="#b4f859" strokeWidth="1.6" strokeLinecap="round" opacity="0.9">
        <line x1="18" y1="19" x2="30" y2="19" />
        <line x1="18" y1="29" x2="30" y2="29" />
      </g>
    </svg>
  );
}