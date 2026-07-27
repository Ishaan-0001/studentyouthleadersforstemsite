import React from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";
import { CtaPill } from "@/components/GreenHero";

export default function Labs() {
  return (
    <>
      <section className="relative bg-[#2D6A4F] text-white">
        <div className="circuit-pattern absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.25em] text-[#52B788]">
                Our Labs
              </p>
              <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Labs that feel less like a chore, more like play.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                We host fun, hands-on labs where K-6 students explore STEM concepts
                intuitively — guided by student leaders who teach the way they wish they'd
                been taught.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              {/* IMAGE SLOT — Our Labs hero */}
              <ImagePlaceholder slot="Slot #A" label="Our Labs — children working on an open-ended STEM activity at a table" ratio="landscape" />
            </Reveal>
          </div>
        </div>
      </section>
      <WaveDivider from="#2D6A4F" to="#FFFFFF" />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl text-balance">
                What happens at a SY-STEM lab?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#555]">
                Every lab is built around three commitments — creativity, curiosity, and
                student leadership. There's no single "right way" to complete a lab, so every
                student's success feels truly their own.
              </p>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {[
              { slot: "Slot #B", label: "Lab Activity — building and experimenting", title: "Flexible, open-ended activities", body: "No two labs feel the same, and neither should two students' experiences. Each lab is crafted with creativity in mind, so students feel their success is theirs — not the directions'." },
              { slot: "Slot #C", label: "Lab Activity — student volunteer guiding a small group", title: "Led by student leaders", body: "Our volunteers create curriculums, gather supplies, and run the labs. Being students themselves, they teach like they want to be taught — from a learner's perspective." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <article className="group h-full overflow-hidden rounded-3xl border border-black/5 bg-[#F8FAF9] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-2 hover:ring-[#52B788]/40">
                  <ImagePlaceholder slot={item.slot} label={item.label} ratio="landscape" className="rounded-none" />
                  <div className="p-7">
                    <h3 className="font-display text-xl font-bold tracking-tight text-[#2D6A4F]">{item.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#555]">{item.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 text-center">
            <CtaPill to="/chapters" variant="green">Find a Lab Near You</CtaPill>
          </Reveal>
        </div>
      </section>
    </>
  );
}