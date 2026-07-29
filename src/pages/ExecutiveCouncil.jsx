import React from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";

const BOARD = [
  { slot: "Slot #D1", name: "Ishaan Pradhan", title: "Director of Technology" },
  { slot: "Slot #D2", name: "Ayush Ayyagari", title: "Director of Education" },
  { slot: "Slot #D3", name: "Tanmay Jain", title: "Legal Director" },
  { slot: "Slot #D4", name: "Om Anish Kadiyam", title: "Director of Marketing" },
];

const CHAPTER_HEADS = [
  { slot: "Slot #C1", chapter: "Belmont, MA", head: "Ben Qin" },
  { slot: "Slot #C2", chapter: "Grafton, MA", head: "Joshua Garcia" },
  { slot: "Slot #C3", chapter: "Stoughton, MA", head: "Ethan Tran" },
  { slot: "Slot #C4", chapter: "Torrance, CA", head: "Amogh Urs" },
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
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <div className="text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-[#0096ff]">
                Our Leadership
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#005020] sm:text-4xl">
                Board of Directors
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BOARD.map((m, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <article className="group h-full overflow-hidden rounded-3xl border border-black/5 bg-[#F2FBFF] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-2 hover:ring-[#b4f859]/40">
                  <ImagePlaceholder slot={m.slot} label={`Board Member — ${m.name}`} ratio="square" className="rounded-none" />
                  <div className="p-5 text-center">
                    <h3 className="font-display text-lg font-bold tracking-tight text-[#005020]">{m.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#0096ff]">{m.title}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F2FBFF]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <div className="text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-[#0096ff]">
                Local Leaders
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#005020] sm:text-4xl">
                Chapter Heads
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CHAPTER_HEADS.map((c, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <article className="group h-full overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-2 hover:ring-[#b4f859]/40">
                  <ImagePlaceholder slot={c.slot} label={`Chapter Head — ${c.chapter}`} ratio="square" className="rounded-none" />
                  <div className="p-5 text-center">
                    <h3 className="font-display text-lg font-bold tracking-tight text-[#005020]">{c.head}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#0096ff]">{c.chapter}</p>
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