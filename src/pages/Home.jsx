import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";
import { CtaPill } from "@/components/GreenHero";

const PILLARS = [
{
  slot: "Slot #3",
  label: "Pillar Image — Student-Built Leadership (student volunteer teaching)",
  title: "Student-Built Leadership",
  body: "SY-STEM is led by local student leaders. Our volunteers reach out to venues, tirelessly create curriculums and activities, and get all the supplies needed for our labs. The benefit of having our volunteers still in school is that they can see things from a learner's perspective, and teach like they want to be taught."
},
{
  slot: "Slot #4",
  label: "Pillar Image — Limitless Creativity (kids building an open-ended project)",
  title: "Limitless Creativity",
  body: "We ensure that there is no one way to complete any lab. No two labs should feel the same, and neither should two students' experiences of the same lab. Each lab is crafted with creativity in mind, such that students can truly feel that their success is theirs — not the directions'."
},
{
  slot: "Slot #5",
  label: "Pillar Image — Sparking Curiosity (joyful engagement in a lab)",
  title: "Sparking Curiosity Through Fun",
  body: "There is only so much any program or school can do to further a student's education in STEM. That's why we don't try to teach your child everything about STEM — we get them interested in it instead. We pack our labs with flexible programming and engaging activities to ensure your children enjoy their experience, building a love for STEM that will stay with them for life."
}];


export default function Home() {
  return (
    <>
      {/* HERO — split interlock */}
      <section className="relative bg-[#2D6A4F] text-white">
        <div className="circuit-pattern absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-stretch lg:grid-cols-[45fr_55fr]">
          <div className="flex items-center px-5 pb-12 pt-32 lg:px-10 lg:pt-44 lg:pb-28">
            <Reveal>
              <p className="mb-5 font-display text-xs font-bold uppercase tracking-[0.3em] text-[#52B788]">
                Re-learning how to learn
              </p>
              <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl text-balance">
                Mastery of STEM starts with curiosity.
              </h1>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-white/80">
                Let your child intuitively explore STEM concepts through one of our labs near you.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link to="/chapters" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#52B788] px-7 py-3.5 text-sm font-semibold text-white stem-focus transition-colors hover:bg-white hover:text-[#2D6A4F]">
                  <MapPin className="h-4 w-4" /> Explore Our Locations
                </Link>
                <Link to="/registration" className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#2D6A4F] stem-focus-on-green">
                  Register Now
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="relative px-5 pb-12 lg:px-10 lg:pb-28">
            <Reveal delay={0.15}>
              {/* IMAGE SLOT #1 — Hero: child engaged in a lab activity. Replace with <img src="..." className="h-full w-full object-cover" /> */}
              <ImagePlaceholder slot="Slot #1" label="Hero Image — child engaged in a lab activity (close-up of hands connecting a circuit, shallow depth of field)" ratio="hero" className="min-h-[420px] lg:h-[620px]" />
            </Reveal>
          </div>
        </div>
      </section>
      <WaveDivider from="#2D6A4F" to="#FFFFFF" />

      {/* WHAT IS SY-STEM? */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.25em] text-[#52B788]">Who we are</p>
              <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl text-balance">
                What is SY-STEM?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#555]">Student Youth Leaders for STEM (or SY-STEM, for short) is a non-profit organization dedicated to assisting students' learning, and sparking interest in STEM subjects. We do this by hosting fun labs, helping learning feel less like a chore and more like entertainment.




              </p>
              <p className="mt-5 font-display text-xl font-bold text-[#2D6A4F]">

              </p>
            </Reveal>
            <Reveal delay={0.1}>
              {/* IMAGE SLOT #2 — About: students or volunteers at a lab */}
              <ImagePlaceholder slot="Slot #2" label="About Image — students or volunteers engaged in a hands-on lab" ratio="landscape" />
            </Reveal>
          </div>
        </div>
      </section>
      <WaveDivider from="#FFFFFF" to="#F8FAF9" />

      {/* THREE PILLARS */}
      <section className="bg-[#F8FAF9]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl text-balance">What sets SY-STEM Labs apart from other STEM programs?

              </h2>
              <p className="mt-4 text-lg text-[#555]">
                Three principles guide every lab we build — and every student we reach.
              </p>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {PILLARS.map((p, i) =>
            <Reveal key={p.title} delay={i * 0.1}>
                <article className="group h-full overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-2 hover:ring-[#52B788]/40">
                  {/* IMAGE SLOTS #3/#4/#5 — replace with real pillar photos */}
                  <ImagePlaceholder slot={p.slot} label={p.label} ratio="square" className="rounded-none" />
                  <div className="p-7">
                    <h3 className="font-display text-xl font-bold tracking-tight text-[#2D6A4F]">{p.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#555]">{p.body}</p>
                  </div>
                </article>
              </Reveal>
            )}
          </div>
        </div>
      </section>
      <WaveDivider from="#F8FAF9" to="#2D6A4F" />

      {/* BOTTOM CTA */}
      <section className="bg-[#2D6A4F] text-white">
        <div className="relative mx-auto max-w-7xl px-5 py-24 text-center lg:px-8 lg:py-32">
          <div className="circuit-pattern absolute inset-0 opacity-40" aria-hidden="true" />
          <Reveal className="relative">
            <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl text-balance">
              Learn more about us, or join us!
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <CtaPill to="/about" variant="outlineWhite">About Us</CtaPill>
              <CtaPill to="/mission" variant="outlineWhite">Our Mission</CtaPill>
              <CtaPill to="/labs" variant="outlineWhite">Our Labs</CtaPill>
              <CtaPill to="/apply" variant="outlineWhite">Apply Now <ArrowRight className="ml-1.5 h-4 w-4" /></CtaPill>
            </div>
          </Reveal>
        </div>
      </section>
    </>);

}