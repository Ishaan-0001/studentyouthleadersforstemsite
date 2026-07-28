import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";
import { CtaPill } from "@/components/GreenHero";
import FeatureStrip from "@/components/FeatureStrip";

const PILLARS = [
{
  img: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/ca553d59a_IMG_4759.jpg",
  alt: "Student volunteer leading a STEM group discussion",
  title: "Student-Built Leadership",
  body: "SY-STEM is led by local student leaders. Our volunteers reach out to venues, tirelessly create curriculums and activities, and get all the supplies needed for our labs. The benefit of having our volunteers still in school is that they can see things from a learner's perspective, and teach like they want to be taught."
},
{
  img: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/34e47966a_IMG_4764.jpg",
  alt: "Kids building an open-ended cardboard project",
  title: "Limitless Creativity",
  body: "We ensure that there is no one way to complete any lab. No two labs should feel the same, and neither should two students' experiences of the same lab. Each lab is crafted with creativity in mind, such that students can truly feel that their success is theirs — not the directions'."
},
{
  img: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/b6f2d05dd_IMG_4850.jpg",
  alt: "Students joyfully presenting a paper airplane experiment",
  title: "Sparking Curiosity Through Fun",
  body: "There is only so much any program or school can do to further a student's education in STEM. That's why we don't try to teach your child everything about STEM — we get them interested in it instead. We pack our labs with flexible programming and engaging activities to ensure your children enjoy their experience, building a love for STEM that will stay with them for life."
}];


export default function Home() {
  return (
    <>
      {/* HERO — split interlock */}
      <section className="relative bg-[#0096ff] text-white">
        <div className="circuit-pattern absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-stretch lg:grid-cols-[45fr_55fr]">
          <div className="flex items-center px-5 pb-12 pt-32 lg:px-10 lg:pt-44 lg:pb-28">
            <Reveal>
              <p className="mb-5 font-display text-xs font-bold uppercase tracking-[0.3em] text-[#b4f859]">
                Re-learning how to learn
              </p>
              <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl text-balance">
                Mastery of STEM starts with curiosity.
              </h1>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-white/80">

              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link to="/chapters" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b4f859] px-7 py-3.5 text-sm font-semibold text-[#005020] stem-focus transition-colors hover:bg-white hover:text-[#005020]">
                  <MapPin className="h-4 w-4" /> Explore Our Locations
                </Link>
                <Link to="/registration" className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#005020] stem-focus-on-green">
                  Register Now
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="relative px-5 pb-12 pt-32 lg:px-10 lg:pt-44 lg:pb-28">
            <Reveal delay={0.15}>
              <Image src="https://media.base44.com/images/public/6a66ade4f704833c85945c24/d5836ffb5_IMG_4749.jpg" alt="Student folding a paper airplane at a SY-STEM lab" className="h-[380px] w-full rounded-2xl lg:h-[540px]" fittingType="fill" />
            </Reveal>
          </div>
        </div>
      </section>
      <WaveDivider from="#0096ff" to="#b4f859" />
      <FeatureStrip />
      <WaveDivider from="#b4f859" to="#FFFFFF" />

      {/* WHAT IS SY-STEM? */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.25em] text-[#0096ff]">Who we are</p>
              <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl text-balance">
                What is SY-STEM?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#555]">Student Youth Leaders for STEM (or SY-STEM, for short) is a non-profit organization dedicated to assisting students' learning, and sparking interest in STEM subjects. We do this by hosting fun labs, helping learning feel less like a chore and more like entertainment.




              </p>
              <p className="mt-5 font-display text-xl font-bold text-[#005020]">

              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Image src="https://media.base44.com/images/public/6a66ade4f704833c85945c24/469ce570c_IMG_8295.jpg" alt="Students working on a STEM activity at a SY-STEM lab" className="w-full h-72 rounded-2xl" fittingType="fill" />
            </Reveal>
          </div>
        </div>
      </section>
      <WaveDivider from="#FFFFFF" to="#F2FBFF" />

      {/* THREE PILLARS */}
      <section className="bg-[#F2FBFF]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl text-balance">What sets SY-STEM Labs apart from other STEM programs?

              </h2>
              <p className="mt-4 text-lg text-[#555]">

              </p>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {PILLARS.map((p, i) =>
            <Reveal key={p.title} delay={i * 0.1}>
                <article className="group h-full overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-2 hover:ring-[#b4f859]/40">
                  <Image src={p.img} alt={p.alt} className="w-full h-56 rounded-none" fittingType="fill" />
                  <div className="p-7">
                    <h3 className="font-display text-xl font-bold tracking-tight text-[#005020]">{p.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#555]">{p.body}</p>
                  </div>
                </article>
              </Reveal>
            )}
          </div>
        </div>
      </section>
      <WaveDivider from="#F2FBFF" to="#0096ff" />

      {/* BOTTOM CTA */}
      <section className="bg-[#0096ff] text-white">
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