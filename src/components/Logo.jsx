import React, { useId } from "react";

const LOGO_URL =
  "https://media.base44.com/images/public/6a66ade4f704833c85945c24/e86effcfc_1transparent.png";

/**
 * Logo — the user's transparent SY-STEM wordmark. The source artwork includes
 * the "SY-STEM" text + DNA separator as part of the design, so a single
 * feColorMatrix recolors both tones to green (and the wordmark with them):
 * light-blue ring + hand/wrench + "SY"/"STEM" text -> vivid green (#00C853),
 * lime gear, circuit, DNA + the DNA separator -> brand dark green (#005020).
 *
 * Matrix math (sRGB): blue #007AFF (0,122,255) -> (0,200,83); lime #CCFF00
 * (204,255,0) -> (0,80,32); black/transparent preserved via alpha.
 *
 * The previous textless-icon version is preserved in LogoBackup.jsx.
 */
export default function Logo({ className = "h-11 w-auto", title = "SY-STEM" }) {
  const rawId = useId();
  const filterId = `stem-recolor-${rawId.replace(/[:]/g, "")}`;

  return (
    <>
      <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0  -0.858 1 0.306 0 0  0.157 0 0.325 0 0  0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>
      <img
        src={LOGO_URL}
        alt={title}
        className={className}
        style={{ filter: `url(#${filterId}) drop-shadow(0 2px 4px rgba(0,0,0,0.35))` }}
      />
    </>
  );
}