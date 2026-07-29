import React from "react";
import { Link } from "react-router-dom";
import { Camera, ArrowRight } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";
import { Image } from "@/components/ui/image";
import { SESSIONS } from "@/data/sessions";

export default function Gallery() {
  return (
    <>
      <section className="relative bg-[#0096ff] text-white">
        <div className="circuit-pattern absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 text-center lg:px-8 lg:pb-24 lg:pt-44">
          <Reveal>
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.25em] text-[#b4f859]">
              Session Gallery
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Our Labs in Action
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Each session is its own collection of photos. Click a session to explore the highlights.
            </p>
          </Reveal>
        </div>
      </section>
      <WaveDivider from="#0096ff" to="#FFFFFF" />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SESSIONS.map((s, i) => {
              const cover = s.images[0];
              return (
                <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                  <Link
                    to={`/gallery/${s.slug}`}
                    className="group block h-full overflow-hidden rounded-3xl border border-black/5 bg-[#F2FBFF] shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-2 hover:ring-[#b4f859]/40 stem-focus"
                  >
                    <div className="relative h-52 w-full overflow-hidden">
                      {cover ? (
                        <Image
                          src={cover.src}
                          alt={cover.alt || s.name}
                          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                          fittingType="fill"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0096ff]/15 to-[#b4f859]/25">
                          <div className="text-center">
                            <Camera className="mx-auto h-9 w-9 text-[#0096ff]/60" />
                            <p className="mt-2 font-display text-xs font-semibold uppercase tracking-widest text-[#005020]/60">
                              Photos coming soon
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between gap-3 p-5">
                      <div>
                        <h3 className="font-display text-lg font-bold tracking-tight text-[#005020]">{s.name}</h3>
                        <p className="mt-1 text-sm text-[#555]">{s.date}</p>
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#0096ff] px-3 py-1.5 text-xs font-semibold text-white">
                        View <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}