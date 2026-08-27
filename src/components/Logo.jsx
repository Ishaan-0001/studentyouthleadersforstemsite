import React, { useId } from "react";

const LOGO_URL =
  "https://media.base44.com/images/public/6a66ade4f704833c85945c24/906a0689e_2transparent.png";

/**
 * Logo — the user's transparent SY-STEM mark. A single feColorMatrix recolors
 * both tones of the original artwork to green so it stays visible on light
 * backgrounds: the light-blue ring + hand/wrench -> vivid green (#00C853),
 * and the lime gear, circuit and DNA -> brand dark green (#005020).
 *
 * Matrix math (sRGB): blue #007BFF (0,123,255) -> (0,200,83); lime #A5FF00
 * (165,255,0) -> (0,80,32); black/transparent preserved via alpha.
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
              values="0 0 0 0 0  -1.06 1 0.302 0 0  0.194 0 0.325 0 0  0 0 0 1 0"
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