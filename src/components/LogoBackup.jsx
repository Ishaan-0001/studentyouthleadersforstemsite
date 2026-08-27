import React, { useId } from "react";

const LOGO_URL =
  "https://media.base44.com/images/public/6a66ade4f704833c85945c24/906a0689e_2transparent.png";

/**
 * LogoBackup — preserved copy of the previous Logo (the 2transparent.png
 * textless icon) using the two-tone green recolor. Kept as a fallback in case
 * the 1transparent.png wordmark variant doesn't render as desired; to revert,
 * swap the import in Navbar/Footer from `Logo` to `LogoBackup`.
 */
export default function LogoBackup({ className = "h-11 w-auto", title = "SY-STEM" }) {
  const rawId = useId();
  const filterId = `stem-recolor-backup-${rawId.replace(/[:]/g, "")}`;

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