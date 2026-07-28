import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";

export const CHAPTERS = [
  { slug: "grafton", name: "Grafton", state: "MA", slot: "Slot #13", label: "Chapter — Grafton, MA lab photo", blurb: "Bringing hands-on STEM labs to students in Grafton, Massachusetts, in partnership with local schools and community spaces." },
  { slug: "carmel", name: "Carmel", state: "IN", slot: "Slot #14", label: "Chapter — Carmel, IN lab photo", blurb: "Our Carmel chapter serves young learners across Indiana with engaging, curiosity-driven lab sessions." },
  { slug: "belmont", name: "Belmont", state: "MA", slot: "Slot #15", label: "Chapter — Belmont, MA lab photo", blurb: "The Belmont chapter connects Massachusetts students with student-led STEM experiences close to home." },
];

export default function Chapters() {
  return (
    <>
      <section className="relative bg-[#0096ff] text-white">
        <div className="circuit-pattern absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-36 text-center lg:px-8 lg:pb-28 lg:pt-44">
          <Reveal>
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.25em] text-[#b4f859]">
              Chapter Nodes
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Our Chapters
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Find a SY-STEM lab near you — and if we're not in your area yet, help us start one.
            </p>
          </Reveal>
        </div>
      </section>
      <WaveDivider from="#0096ff" to="#FFFFFF" />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-8 md:grid-cols-3">
            {CHAPTERS.map((ch, i) => (
              <Reveal key={ch.slug} delay={i * 0.1}>
                {/* Destination Card — massive low-opacity location text with floating image + button */}
                <Link
                  to={`/chapters/${ch.slug}`}
                  className="group relative block h-full overflow-hidden rounded-3xl border border-black/5 bg-[#F2FBFF] shadow-sm stem-focus transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-2 hover:ring-[#b4f859]/40"
                >
                  <div className="pointer-events-none absolute right-2 top-0 select-none font-display text-7xl font-extrabold tracking-tight text-[#005020]/[0.07]">
                    {ch.state}
                  </div>
                  {/* IMAGE SLOTS #13–15 — chapter lab photos */}
                  <ImagePlaceholder slot={ch.slot} label={ch.label} ratio="landscape" className="rounded-none" />
                  <div className="relative p-7">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-[#005020]">
                      {ch.name} <span className="text-base font-semibold text-[#888]">({ch.state})</span>
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#555]">{ch.blurb}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#005020] transition-colors group-hover:text-[#b4f859]">
                      Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}