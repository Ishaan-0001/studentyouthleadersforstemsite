import React, { useId } from "react";

const LOGO_URL =
  "https://media.base44.com/images/public/6a66ade4f704833c85945c24/f94a87cab_2transparent.png";

/**
 * Logo — the user's transparent SY-STEM mark, recolored on the fly via an SVG
 * duotone filter. The source artwork is used unchanged; the filter remaps
 * luminance onto a dark-green → lime gradient, so the blue ring + hand/wrench
 * become dark green while the lime gear, circuit and DNA stay green.
 */
export default function Logo({ className = "h-11 w-auto", title = "SY-STEM" }) {
  const rawId = useId();
  const filterId = `stem-duotone-${rawId.replace(/[:]/g, "")}`;

  return (
    <>
      <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="0.299 0.587 0.114 0 0  0.299 0.587 0.114 0 0  0.299 0.587 0.114 0 0  0 0 0 1 0"
            />
            <feComponentTransfer>
              <feFuncR tableValues="0 0 0 0" />
              <feFuncG tableValues="0 0.314 0.314 0.314" />
              <feFuncB tableValues="0 0.125 0.125 0.125" />
              <feFuncA tableValues="0 1" />
            </feComponentTransfer>
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