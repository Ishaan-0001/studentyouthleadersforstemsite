import React from "react";

/**
 * Logo — SY-STEM's transparent circular mark (blue ring, green gear with
 * nodes, blue hand-and-wrench, three green DNA helices). Rendered as a
 * transparent PNG so it sits cleanly on any surface without a backdrop.
 */
const LOGO_URL =
  "https://media.base44.com/images/public/6a66ade4f704833c85945c24/e9ec44c09_2transparent.png";

export default function Logo({ className = "h-9 w-auto", title = "SY-STEM" }) {
  return (
    <img
      src={LOGO_URL}
      alt={title}
      className={className}
      style={{
        objectFit: "contain",
        filter: "saturate(1.5) drop-shadow(0 2px 4px rgba(0,0,0,0.35))",
      }}
    />
  );
}