import React from "react";

/**
 * InitialsAvatar — branded gradient block with the person's initials,
 * shown when no photo is available. Matches the VolunteerCard fallback.
 */
export default function InitialsAvatar({ name, className = "" }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

  return (
    <div className={`relative flex aspect-square items-center justify-center bg-gradient-to-br from-[#0096ff] to-[#005020] ${className}`}>
      <div className="circuit-pattern absolute inset-0 opacity-40" aria-hidden="true" />
      <span className="relative font-display text-4xl font-extrabold tracking-tight text-white">
        {initials}
      </span>
    </div>
  );
}