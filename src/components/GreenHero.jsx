import React from "react";
import { Link } from "react-router-dom";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";

/**
 * GreenHero — the standard dark-green hero used at the top of every sub-page.
 */
export default function GreenHero({ eyebrow, title, subtitle, slotNumber, slotLabel, ratio = "landscape" }) {
  return (
    <>
      <section className="relative bg-[#0096ff] text-white">
        <div className="circuit-pattern absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                {eyebrow && (
                  <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.25em] text-[#b4f859]">
                    {eyebrow}
                    </p>
                )}
                <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-balance">
                  {title}
                </h1>
                {subtitle && (
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{subtitle}</p>
                )}
              </div>
            </Reveal>
            {slotLabel && (
              <Reveal delay={0.1}>
                <ImagePlaceholder slot={slotNumber} label={slotLabel} ratio={ratio} />
              </Reveal>
            )}
          </div>
        </div>
      </section>
      <WaveDivider from="#2D6A4F" to="#FFFFFF" />
    </>
  );
}

export function CtaPill({ to, children, variant = "green", external = false }) {
  const base = "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold stem-focus transition-colors";
  const styles = {
    green: "bg-[#0096ff] text-white hover:bg-[#007ad9]",
    white: "bg-white text-[#005020] hover:bg-white/90",
    outlineGreen: "border-2 border-[#0096ff] text-[#0096ff] hover:bg-[#0096ff] hover:text-white",
    outlineWhite: "border-2 border-white/70 text-white hover:bg-white hover:text-[#005020]",
  };
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={`${base} ${styles[variant]}`}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}