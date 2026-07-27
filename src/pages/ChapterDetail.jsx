import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";
import { CtaPill } from "@/components/GreenHero";
import { CHAPTERS } from "@/pages/Chapters";

export default function ChapterDetail() {
  const { slug } = useParams();
  const chapter = CHAPTERS.find((c) => c.slug === slug);

  if (!chapter) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-40 text-center">
        <h1 className="font-display text-3xl font-bold">Chapter not found</h1>
        <p className="mt-4 text-[#555]">We couldn't find that chapter.</p>
        <Link to="/chapters" className="mt-6 inline-block text-[#2D6A4F] font-semibold underline">← Back to all chapters</Link>
      </div>
    );
  }

  return (
    <>
      <section className="relative bg-[#2D6A4F] text-white">
        <div className="circuit-pattern absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="mb-4 flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.25em] text-[#52B788]">
                <MapPin className="h-4 w-4" /> {chapter.state}
              </p>
              <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-balance">
                {chapter.name} ({chapter.state})
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{chapter.blurb}</p>
            </Reveal>
            <Reveal delay={0.1}>
              {/* IMAGE SLOT — chapter detail lab photo */}
              <ImagePlaceholder slot={chapter.slot} label={`${chapter.label} — detail page`} ratio="landscape" />
            </Reveal>
          </div>
        </div>
      </section>
      <WaveDivider from="#2D6A4F" to="#FFFFFF" />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-5 py-24 lg:px-8 lg:py-32">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl text-balance">
              About the {chapter.name} chapter
            </h2>
            {/* Replace the placeholder body below with real chapter details (schedule, venue, lab topics, contact). */}
            <p className="mt-6 text-lg leading-relaxed text-[#555]">
              {chapter.blurb} This chapter hosts recurring lab sessions for K-6 students,
              led by local student volunteers who design every activity from scratch.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-[#555]">
              To register your child for an upcoming session at this chapter, complete the
              registration form — a volunteer will follow up with session dates and details.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CtaPill to="/registration" variant="green">Register Now</CtaPill>
              <Link to="/chapters" className="inline-flex items-center gap-2 rounded-full border-2 border-[#2D6A4F] px-7 py-3.5 text-sm font-semibold text-[#2D6A4F] stem-focus transition-colors hover:bg-[#2D6A4F] hover:text-white">
                <ArrowLeft className="h-4 w-4" /> All Chapters
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}