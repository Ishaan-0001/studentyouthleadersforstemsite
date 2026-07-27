import React from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";
import { CtaPill } from "@/components/GreenHero";

const FOUNDERS = [
  { slot: "Slot #8", name: "Ishaan Pradhan", quote: "I've always thought of myself as lucky for being curious about the sciences. More people deserve the joy of feeling curious, and SY-STEM is my way of helping them." },
  { slot: "Slot #9", name: "Ayush Ayyagari", quote: "SY-STEM is my way of sharing the love for learning I've always carried. Too many bright minds are stifled by the fact that their education is boring. I want to change that." },
  { slot: "Slot #10", name: "Tanmay Jain", quote: "My parents always stuck me in an after-school program that just had me sitting around and doing nothing. SY-STEM is everything I would have wanted in an after-school program." },
  { slot: "Slot #11", name: "Om Anish Kadiyam", quote: "The way I was taught never sat right with me. Listening to someone ramble on and on... I wanted to learn by doing. SY-STEM is my answer for kids like me." },
];

export default function About() {
  return (
    <>
      <section className="relative bg-[#2D6A4F] text-white">
        <div className="circuit-pattern absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.25em] text-[#52B788]">
                About SY-STEM
              </p>
              <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Making Learning Fun Again
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                Our founders were fortunate enough to have developed a deep love for STEM
                learning early in life, and realized not everyone had that privilege.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              {/* IMAGE SLOT #6 — About hero: team or founders photo */}
              <ImagePlaceholder slot="Slot #6" label="About Hero — students or founders in an active learning environment" ratio="portrait" />
            </Reveal>
          </div>
        </div>
      </section>
      <WaveDivider from="#2D6A4F" to="#FFFFFF" />

      {/* BY STUDENTS, FOR STUDENTS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl text-balance">
                By Students, For Students
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#555]">
                SY-STEM is fully established, maintained, and staffed by students in your
                area. Our frequent organization-wide meetings ensure that all of our
                volunteers' voices are heard, creating a sense of unity difficult to
                establish when only a few hold power. Furthermore, our current position as
                students enables us to give our students the educational experiences we
                would have wanted.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              {/* IMAGE SLOT #7 — group volunteers at a lab */}
              <ImagePlaceholder slot="Slot #7" label="By Students — group of student volunteers running a lab" ratio="landscape" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* IMPACTS */}
      <section className="bg-[#F8FAF9]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl text-balance">
                Impacts in Your Community
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#555]">
                We prioritize making a positive impact in our local communities, uplifting
                the places we know and love. SY-STEM has partnered with chapters of
                nationwide organizations, as well as local elementary schools and high
                schools, in order to bring our STEM experiences to students in our area.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <WaveDivider from="#F8FAF9" to="#FFFFFF" />

      {/* FOUNDERS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Meet our Founders!
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {FOUNDERS.map((f, i) => (
              <Reveal key={f.name} delay={(i % 2) * 0.1}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-[#F8FAF9] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-2 hover:ring-[#52B788]/40 sm:flex-row">
                  {/* IMAGE SLOTS #8–11 — founder portraits (active environments, whiteboards/lab equipment) */}
                  <div className="sm:w-2/5">
                    <ImagePlaceholder slot={f.slot} label={`Founder — ${f.name}`} ratio="square" className="h-full rounded-none" />
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-7">
                    <h3 className="font-display text-xl font-bold tracking-tight text-[#2D6A4F]">{f.name}</h3>
                    <p className="mt-3 text-[15px] italic leading-relaxed text-[#555]">"{f.quote}"</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 text-center">
            <CtaPill to="/apply" variant="green">Apply to Volunteer</CtaPill>
          </Reveal>
        </div>
      </section>
    </>
  );
}