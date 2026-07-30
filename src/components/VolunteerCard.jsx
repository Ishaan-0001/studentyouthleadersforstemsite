import React from "react";

/**
 * VolunteerCard — a branded initials placeholder + name (and optional role)
 * for the volunteer grid on chapter detail pages.
 */
export default function VolunteerCard({ name, role }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-[#b4f859]/40">
      <div className="relative flex aspect-square items-center justify-center bg-gradient-to-br from-[#0096ff] to-[#005020]">
        <div className="circuit-pattern absolute inset-0 opacity-40" aria-hidden="true" />
        <span className="relative font-display text-4xl font-extrabold tracking-tight text-white">
          {initials}
        </span>
      </div>
      <div className="p-4 text-center">
        <h3 className="font-display text-base font-bold tracking-tight text-[#005020]">{name}</h3>
        {role && (
          <p className="mt-1 font-display text-xs font-semibold uppercase tracking-[0.15em] text-[#0096ff]">
            {role}
          </p>
        )}
      </div>
    </div>
  );
}