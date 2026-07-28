import React from "react";

/**
 * Logo — a cog (engineering) with a DNA double-helix (science) running
 * through its center and extending out the top and bottom.
 *
 * Everything uses `currentColor`, so the mark inherits the surrounding
 * text color: white over the blue hero, dark green on the scrolled white
 * navbar, lime on the dark footer. No background chip — it blends in.
 */
export default function Logo({ className = "h-9 w-auto", title = "SY-STEM" }) {
  const teeth = Array.from({ length: 10 });
  return (
    <svg viewBox="0 0 40 56" className={className} role="img" aria-label={title}>
      <title>{title}</title>
      <defs>
        <mask id="stem-hole">
          <rect width="40" height="56" fill="white" />
          <circle cx="20" cy="28" r="9" fill="black" />
        </mask>
      </defs>

      {/* DNA helix — drawn first so the gear overlaps it, making the strand
          appear to run through the cog and extend beyond it top & bottom */}
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M20 2 C 27 4.5, 27 12.5, 20 15 C 13 17.5, 13 25.5, 20 28 C 27 30.5, 27 38.5, 20 41 C 13 43.5, 13 51.5, 20 54" />
        <path d="M20 2 C 13 4.5, 13 12.5, 20 15 C 27 17.5, 27 25.5, 20 28 C 13 30.5, 13 38.5, 20 41 C 27 43.5, 27 51.5, 20 54" />
      </g>
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
        <line x1="13" y1="8.5" x2="27" y2="8.5" />
        <line x1="13" y1="21.5" x2="27" y2="21.5" />
        <line x1="13" y1="34.5" x2="27" y2="34.5" />
        <line x1="13" y1="47.5" x2="27" y2="47.5" />
      </g>

      {/* gear — drawn on top, with a hollow center so the helix shows through */}
      <g mask="url(#stem-hole)" fill="currentColor">
        {teeth.map((_, i) => (
          <rect
            key={i}
            x="17.75"
            y="10"
            width="4.5"
            height="6"
            rx="1.2"
            transform={`rotate(${i * 36} 20 28)`}
          />
        ))}
        <circle cx="20" cy="28" r="12" />
      </g>
    </svg>
  );
}