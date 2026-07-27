import React from "react";

/**
 * WaveDivider — a fluid SVG boundary between sections.
 * `from` is the top section's bg color, `to` is the bottom section's bg color.
 */
export function WaveDivider({ from = "#FFFFFF", to = "#F8FAF9", className = "", flip = false }) {
  return (
    <div
      aria-hidden="true"
      role="presentation"
      className={`pointer-events-none -mx-px w-full ${flip ? "rotate-180" : ""} ${className}`}
      style={{ backgroundColor: from, color: to }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[60px] w-full md:h-[90px]"
      >
        <path
          d="M0,64 C180,128 360,8 540,40 C720,72 900,128 1080,96 C1260,64 1380,16 1440,32 L1440,120 L0,120 Z"
          fill="currentColor"
        />
        <path
          d="M0,80 C220,140 420,24 640,56 C860,88 1060,140 1260,108 C1360,92 1410,40 1440,56"
          fill="none"
          stroke="#52B788"
          strokeOpacity="0.35"
          strokeWidth="2"
          className="animate-pulse-line"
        />
      </svg>
    </div>
  );
}

export default WaveDivider;