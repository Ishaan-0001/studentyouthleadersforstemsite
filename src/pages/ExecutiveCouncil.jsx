import React from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";

// Replace each member's name, title, bio, and image slot with real council member details.
const COUNCIL = [
  { slot: "Slot #D1", name: "Council Member Name", title: "Title / Role", bio: "Short bio describing this council member's background, role within SY-STEM, and what drives their commitment to STEM education." },
  { slot: "Slot #D2", name: "Council Member Name", title: "Title / Role", bio: "Short bio describing this council member's background, role within SY-STEM, and what drives their commitment to STEM education." },
  { slot: "Slot #D3", name: "Council Member Name", title: "Title / Role", bio: "Short bio describing this council member's background, role within SY-STEM, and what drives their commitment to STEM education." },
  { slot: "Slot #D4", name: "Council Member Name", title: "Title / Role", bio: "Short bio describing this council member's background, role within SY-STEM, and what drives their commitment to STEM education." },
  { slot: "Slot #D5", name: "Council Member Name", title: "Title / Role", bio: "Short bio describing this council member's background, role within SY-STEM, and what drives their commitment to STEM education." },
  { slot: "Slot #D6", name: "Council Member Name", title: "Title / Role", bio: "Short bio describing this council member's background, role within SY-STEM, and what drives their commitment to STEM education." },
];

export default function ExecutiveCouncil() {
  return (
    <>
      <section className="relative bg-[#0096ff] text-white">
        <div className="circuit-pattern absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-36 text-center lg:px-8 lg:pb-28 lg:pt-44">
          <Reveal>
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.25em] text-[#b4f859]">
              Leadership
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Executive Council
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              The student leaders who guide SY-STEM's chapters, curriculums, and vision.
            </p>
          </Reveal>
        </div>
      </section>
      <WaveDivider from="#0096ff" to="#FFFFFF" />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {COUNCIL.map((m, i) => (
              <Reveal key={i} delay={(i % 3) * 0.1}>
                <article className="group h-full overflow-hidden rounded-3xl border border-black/5 bg-[#F2FBFF] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-2 hover:ring-[#b4f859]/40">
                  {/* Replace name, title, bio, and image slot with real council member details. */}
                  <ImagePlaceholder slot={m.slot} label={`Council Member — ${m.title}`} ratio="square" className="rounded-none" />
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold tracking-tight text-[#005020]">{m.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#888]">{m.title}</p>
                    <p className="mt-3 text-[14px] leading-relaxed text-[#555]">{m.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}