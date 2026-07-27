import React from "react";
import { Image } from "@/components/ui/image";
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
              <Image src="https://media.base44.com/images/public/6a66ade4f704833c85945c24/43665f118_IMG_4836.jpg" alt="Students exploring supplies in a STEM classroom" className="w-full h-72 rounded-2xl" fittingType="fill" />
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
              { img: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/8293cb680_IMG_4837.jpg", alt: "Students cutting and building at a lab table", title: "Flexible, open-ended activities", body: "No two labs feel the same, and neither should two students' experiences. Each lab is crafted with creativity in mind, so students feel their success is theirs — not the directions'." },
              { img: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/d1aab5f00_IMG_4751.jpg", alt: "Student volunteer leading a small group", title: "Led by student leaders", body: "Our volunteers create curriculums, gather supplies, and run the labs. Being students themselves, they teach like they want to be taught — from a learner's perspective." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <article className="group h-full overflow-hidden rounded-3xl border border-black/5 bg-[#F8FAF9] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-2 hover:ring-[#52B788]/40">
                  <Image src={item.img} alt={item.alt} className="w-full h-56 rounded-none" fittingType="fill" />
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