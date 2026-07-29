import React from "react";
import { Image } from "@/components/ui/image";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";
import { CtaPill } from "@/components/GreenHero";

const FOUNDERS = [
{ name: "Ishaan Pradhan", quote: "I've always thought of myself as lucky for being curious about the sciences. More people deserve the joy of feeling curious, and SY-STEM is my way of helping them." },
{ name: "Ayush Ayyagari", quote: "SY-STEM is my way of sharing the love for learning I've always carried. Too many bright minds are stifled by the fact that their education is boring. I want to change that." },
{ name: "Tanmay Jain", quote: "My parents always stuck me in an after-school program that just had me sitting around and doing nothing. SY-STEM is everything I would have wanted in an after-school program." },
{ name: "Om Anish Kadiyam", quote: "The way I was taught never sat right with me. Listening to someone ramble on and on... I wanted to learn by doing. SY-STEM is my answer for kids like me." }];


export default function About() {
  return (
    <>
      <section className="relative bg-[#0096ff] text-white">
        <div className="circuit-pattern absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-36 lg:px-8 lg:pb-16 lg:pt-44">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.25em] text-[#b4f859]">
                About SY-STEM
              </p>
              <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Making Learning Fun Again
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">Our founders were fortunate enough to have developed a deep love for STEM learning early in life, and realized not everyone had that privilege. SY-STEM is built using the principles of theoretical physicist Robert Feynman - that the best way to teach, is to make one enjoy learning. By offering fun ways to engage in and push their boundaries in STEM, we hope to spark a curiosity in today's students that will never extinguish.


              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Image src="https://media.base44.com/images/public/6a66ade4f704833c85945c24/26bdf6b41_pic114.jpg" alt="Students watching a water rocket soar above the patio" className="w-full h-96 rounded-2xl" fittingType="fill" />
            </Reveal>
          </div>
        </div>
      </section>
      <WaveDivider from="#0096ff" to="#FFFFFF" />

      {/* BY STUDENTS, FOR STUDENTS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl text-balance">
                By Students, For Students
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#555]">SY-STEM is fully established, maintained, and staffed by students in your area. Our frequent organization-wide meetings ensure that all of our volunteers' voices are heard. Furthermore, our current position as students enables us to give our students the educational experiences we would have wanted.






              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Image src="https://media.base44.com/images/public/6a66ade4f704833c85945c24/d6e88a2bb_pic13.jpg" alt="Student volunteer mentoring younger kids as they build craft cars" className="w-full h-72 rounded-2xl" fittingType="fill" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* IMPACTS */}
      <section className="bg-[#F2FBFF]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
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
            <div className="mx-auto mt-12 max-w-5xl">
              <Image src="https://media.base44.com/images/public/6a66ade4f704833c85945c24/ad6afd6b5_pic53.jpg" alt="Group of kids building a coaster together at a community STEM lab" className="w-full h-80 rounded-2xl" fittingType="fill" />
            </div>
          </Reveal>
        </div>
      </section>
      <WaveDivider from="#F2FBFF" to="#FFFFFF" />

      {/* FOUNDERS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Meet our Founders!
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {FOUNDERS.map((f, i) =>
            <Reveal key={f.name} delay={i % 2 * 0.1}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-[#F2FBFF] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-2 hover:ring-[#b4f859]/40 sm:flex-row">
                  <div className="sm:w-2/5 bg-[#0096ff]/10 flex items-center justify-center p-8">
                    <div className="grid h-20 w-20 place-items-center rounded-full bg-[#0096ff] text-white font-display text-2xl font-bold">
                      {f.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-7">
                    <h3 className="font-display text-xl font-bold tracking-tight text-[#005020]">{f.name}</h3>
                    <p className="mt-3 text-[15px] italic leading-relaxed text-[#555]">"{f.quote}"</p>
                  </div>
                </article>
              </Reveal>
            )}
          </div>
          <Reveal className="mt-10 text-center">
            <CtaPill to="/apply" variant="green">Apply to Volunteer</CtaPill>
          </Reveal>
        </div>
      </section>
    </>);

}