import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";

const RATIOS = ["landscape", "square", "portrait"];

const IMAGES = Array.from({ length: 8 }, (_, i) => ({
  slot: `Slot #${16 + i}`,
  label: `Gallery Image #${i + 1} — replace with a session/lab photo`,
  ratio: RATIOS[i % 3],
}));

export default function Gallery() {
  const [active, setActive] = useState(null);
  const isOpen = active !== null;

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive((a) => (a === null ? a : (a - 1 + IMAGES.length) % IMAGES.length)), []);
  const next = useCallback(() => setActive((a) => (a === null ? a : (a + 1) % IMAGES.length)), []);

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

  return (
    <>
      <section className="relative bg-[#2D6A4F] text-white">
        <div className="circuit-pattern absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-36 text-center lg:px-8 lg:pb-28 lg:pt-44">
          <Reveal>
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.25em] text-[#52B788]">
              Fractal Gallery
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Session Gallery
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              A look at our labs in action.
            </p>
          </Reveal>
        </div>
      </section>
      <WaveDivider from="#2D6A4F" to="#FFFFFF" />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {IMAGES.map((img, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08} className="break-inside-avoid">
                {/* IMAGE SLOTS #16–23 — replace with real session/lab photos */}
                <button
                  onClick={() => setActive(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl ring-1 ring-black/5 stem-focus"
                >
                  <ImagePlaceholder slot={img.slot} label={img.label} ratio={img.ratio} className="rounded-2xl" />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#2D6A4F]/80 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="font-mono text-xs uppercase tracking-widest text-white">
                      Session {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button onClick={close} className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white stem-focus hover:bg-white/20" aria-label="Close">
            <X className="h-6 w-6" />
          </button>
          <button onClick={prev} className="absolute left-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white stem-focus hover:bg-white/20" aria-label="Previous">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="max-h-[85vh] w-full max-w-3xl">
            <ImagePlaceholder slot={IMAGES[active].slot} label={IMAGES[active].label} ratio="landscape" />
          </div>
          <button onClick={next} className="absolute right-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white stem-focus hover:bg-white/20" aria-label="Next">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}