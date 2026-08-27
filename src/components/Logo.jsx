import React, { useId } from "react";

const LOGO_URL =
  "https://media.base44.com/images/public/6a66ade4f704833c85945c24/906a0689e_2transparent.png";

/**
 * Logo — the user's transparent SY-STEM mark. A single feColorMatrix recolors
 * the light-blue ring + hand/wrench to a saturated green (#00C853) while
 * leaving the lime gear, circuit and DNA untouched, so the original two-tone
 * line-art design is preserved exactly.
 *
 * Matrix math (sRGB): blue #007BFF (0,123,255) -> (0,200,83); lime #A5FF00
 * (165,255,0) -> (165,255,0) unchanged; black/transparent preserved via alpha.
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
              values="1 0 0 0 0  0 1 0.302 0 0  2.473 -1.6 1.096 0 0  0 0 0 1 0"
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