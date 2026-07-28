import React from "react";
import { Image } from "@/components/ui/image";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";
import { CtaPill } from "@/components/GreenHero";

export default function Mission() {
  return (
    <>
      <section className="relative bg-[#0096ff] text-white">
        <div className="circuit-pattern absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-5 pb-16 pt-36 text-center lg:px-8 lg:pb-20 lg:pt-44">
          <Reveal>
            <p className="mb-5 font-display text-xs font-bold uppercase tracking-[0.3em] text-[#b4f859]">
              This is our mission.
            </p>
            <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl text-balance">
              Wasted Potential.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/80">
              This is the reality for millions of talented children across the U.S. Many
              future engineers, scientists, and doctors never get to discover their passions.
              Why?
            </p>
          </Reveal>
        </div>
      </section>
      <WaveDivider from="#0096ff" to="#FFFFFF" />

      {/* MISSION IMAGE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
          <Reveal>
            <Image src="https://media.base44.com/images/public/6a66ade4f704833c85945c24/8b7c496d0_IMG_4855.jpg" alt="Child smiling at a SY-STEM lab session" className="w-full h-80 rounded-2xl" fittingType="fill" />
          </Reveal>
        </div>
      </section>

      {/* MISSION TEXT */}
      <section className="bg-[#F2FBFF]">
        <div className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-20">
          <Reveal>
            <div className="space-y-5 text-center">
              <p className="text-lg leading-relaxed text-[#555]">
                Because students aren't given the chance to enjoy learning. Proper engaging
                STEM education is costly, and requires teachers that are truly passionate
                about their subjects. And while there are countless dedicated teachers across
                the nation, there simply aren't enough.
              </p>
              <p className="text-lg font-semibold leading-relaxed text-[#005020]">
                Our volunteers were fortunate to receive the kind of STEM education every
                child deserves, and are eager to share that same passion with others. We
                dedicate ourselves to creating fun, engaging lessons and activities that
                challenge students to explore the incredible world of STEM. By focusing on
                local impacts, we create meaningful, hands-on learning experiences that
                larger programs often cannot provide.
              </p>
              <p className="text-lg leading-relaxed text-[#555]">
                SY-STEM is founded and run by students — the very group we aim to support.
                While Chapter Heads help guide each chapter, every volunteer has a voice and
                plays an important role in shaping our organization.
              </p>
            </div>
            <div className="mt-12 text-center">
              <p className="mb-6 text-base text-[#555]">
                If our mission connects with you, click the link below to join us. We need all
                the help we can get in our fight for education.
              </p>
              <CtaPill to="/apply" variant="green">Apply Here</CtaPill>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}