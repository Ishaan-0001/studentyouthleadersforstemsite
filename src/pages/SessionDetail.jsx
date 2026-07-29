import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, Camera, ArrowLeft } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";
import { Image } from "@/components/ui/image";
import { SESSIONS } from "@/data/sessions";

export default function SessionDetail() {
  const { slug } = useParams();
  const session = SESSIONS.find((s) => s.slug === slug);
  const images = session?.images || [];
  const [active, setActive] = useState(null);
  const isOpen = active !== null;

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((a) => (a === null ? a : (a - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setActive((a) => (a === null ? a : (a + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, prev, next]);

  if (!session) {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-5 py-32 text-center">
          <h1 className="font-display text-3xl font-extrabold text-[#005020]">Session not found</h1>
          <Link
            to="/gallery"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0096ff] px-6 py-3 text-sm font-semibold text-white stem-focus"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Gallery
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="relative bg-[#0096ff] text-white">
        <div className="circuit-pattern absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 text-center lg:px-8 lg:pb-24 lg:pt-44">
          <Reveal>
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.25em] text-[#b4f859]">
              {session.date}
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-balance">
              {session.name}
            </h1>
          </Reveal>
        </div>
      </section>
      <WaveDivider from="#0096ff" to="#FFFFFF" />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          {images.length === 0 ? (
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0096ff]/10">
                <Camera className="h-8 w-8 text-[#0096ff]/60" />
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold text-[#005020]">Photos coming soon</h2>
              <p className="mt-3 text-[#555]">
                Pictures from this session will appear here once they're imported.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex aspect-square items-center justify-center rounded-2xl border border-dashed border-[#0096ff]/30 bg-[#F2FBFF]"
                  >
                    <Camera className="h-6 w-6 text-[#0096ff]/40" />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
              {images.map((img, i) => (
                <Reveal key={i} delay={(i % 3) * 0.08} className="break-inside-avoid">
                  <button
                    onClick={() => setActive(i)}
                    className="group relative block w-full overflow-hidden rounded-2xl ring-1 ring-black/5 stem-focus"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt || session.name}
                      className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                      fittingType="fill"
                      style={{ aspectRatio: i % 3 === 0 ? "4/3" : i % 3 === 1 ? "1/1" : "3/4" }}
                    />
                  </button>
                </Reveal>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#0096ff] px-6 py-3 text-sm font-semibold text-[#0096ff] stem-focus hover:bg-[#0096ff] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> All Sessions
            </Link>
          </div>
        </div>
      </section>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            onClick={close}
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white stem-focus hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={prev}
            className="absolute left-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white stem-focus hover:bg-white/20"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="max-h-[85vh] w-full max-w-3xl">
            <Image
              src={images[active].src}
              alt={images[active].alt || session.name}
              className="w-full max-h-[85vh] rounded-xl"
              fittingType="fit"
            />
          </div>
          <button
            onClick={next}
            className="absolute right-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white stem-focus hover:bg-white/20"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}