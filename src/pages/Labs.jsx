import React from "react";
import { Image } from "@/components/ui/image";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";
import { CtaPill } from "@/components/GreenHero";

export default function Labs() {
  return (
    <>
      <section className="relative bg-[#0096ff] text-white">
        <div className="circuit-pattern absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.25em] text-[#b4f859]">
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
              <Image src="https://media.base44.com/images/public/6a66ade4f704833c85945c24/05867cf77_pic115.jpg" alt="Wide view of a busy SY-STEM rocket-building workshop" className="w-full h-72 rounded-2xl" fittingType="fill" />
            </Reveal>
          </div>
        </div>
      </section>
      <WaveDivider from="#0096ff" to="#FFFFFF" />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
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
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              { img: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/f54e2099d_pic111.jpg", alt: "Two girls cutting cardboard for their rocket", title: "Flexible, open-ended activities", body: "No two labs feel the same, and neither should two students' experiences. Each lab is crafted with creativity in mind, so students feel their success is theirs — not the directions'." },
              { img: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/a9afed629_pic25.jpg", alt: "Student leader guiding a peer through a catapult launch", title: "Led by student leaders", body: "Our volunteers create curriculums, gather supplies, and run the labs. Being students themselves, they teach like they want to be taught — from a learner's perspective." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <article className="group h-full overflow-hidden rounded-3xl border border-black/5 bg-[#F2FBFF] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-2 hover:ring-[#b4f859]/40">
                  <Image src={item.img} alt={item.alt} className="w-full h-56 rounded-none" fittingType="fill" />
                  <div className="p-7">
                    <h3 className="font-display text-xl font-bold tracking-tight text-[#005020]">{item.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#555]">{item.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <CtaPill to="/chapters" variant="green">Find a Lab Near You</CtaPill>
          </Reveal>
        </div>
      </section>
    </>
  );
}