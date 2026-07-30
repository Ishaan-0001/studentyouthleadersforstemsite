import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";
import { CtaPill } from "@/components/GreenHero";
import VolunteerCard from "@/components/VolunteerCard";
import { CHAPTERS } from "@/pages/Chapters";

export default function ChapterDetail() {
  const { slug } = useParams();
  const chapter = CHAPTERS.find((c) => c.slug === slug);

  if (!chapter) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-40 text-center">
        <h1 className="font-display text-3xl font-bold">Chapter not found</h1>
        <p className="mt-4 text-[#555]">We couldn't find that chapter.</p>
        <Link to="/chapters" className="mt-6 inline-block text-[#005020] font-semibold underline">
          ← Back to all chapters
        </Link>
      </div>
    );
  }

  const description = chapter.description || [chapter.blurb];
  const volunteers = chapter.volunteers || [];

  return (
    <>
      {/* Hero header */}
      <section className="relative bg-[#0096ff] text-white">
        <div className="circuit-pattern absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-5 pb-20 pt-36 text-center lg:px-8 lg:pb-24 lg:pt-44">
          <Reveal>
            <p className="mb-4 flex items-center justify-center gap-2 font-display text-xs font-bold uppercase tracking-[0.25em] text-[#b4f859]">
              <MapPin className="h-4 w-4" /> {chapter.state}
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-balance">
              {chapter.name} ({chapter.state})
            </h1>
          </Reveal>
        </div>
      </section>
      <WaveDivider from="#0096ff" to="#FFFFFF" />

      {/* Bio section */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-24 lg:px-8 lg:py-28">
          <Reveal>
            <div className="space-y-6 rounded-3xl border border-[#b4f859]/40 bg-gradient-to-br from-[#F2FBFF] to-[#eafdf0] px-6 py-12 text-center shadow-sm lg:px-16 lg:py-16">
              {description.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-[#005020]">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <CtaPill to="/registration" variant="green">
                Register Now
              </CtaPill>
              <Link
                to="/chapters"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#0096ff] px-7 py-3.5 text-sm font-semibold text-[#005020] stem-focus transition-colors hover:bg-[#0096ff] hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" /> All Chapters
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Volunteers */}
      {volunteers.length > 0 && (
        <>
          <section className="relative bg-[#0096ff] text-white">
            <div className="circuit-pattern absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl px-5 py-12 text-center lg:px-8">
              <h2 className="font-display text-2xl font-extrabold uppercase tracking-[0.2em] sm:text-3xl">
                Our Volunteers
              </h2>
            </div>
          </section>
          <section className="bg-white">
            <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                {volunteers.map((v, i) => (
                  <Reveal key={v.name} delay={i * 0.05}>
                    <VolunteerCard name={v.name} role={v.role} photo={v.photo} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}