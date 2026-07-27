import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";

const IMAGES = [
  { src: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/56442b45e_IMG_4852.jpg", alt: "Students at a STEM lab" },
  { src: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/7788f27b7_IMG_4854.jpg", alt: "Kids building with cardboard" },
  { src: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/8b7c496d0_IMG_4855.jpg", alt: "Child smiling at a STEM session" },
  { src: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/4cdafd1af_IMG_4857.jpg", alt: "Group engineering challenge" },
  { src: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/46ef7f077_IMG_4858.jpg", alt: "Students presenting their project" },
  { src: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/62d5b6ac2_IMG_4863.jpg", alt: "Kids launching a parachute outdoors" },
  { src: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/eb7f7e597_IMG_4887.jpg", alt: "Student launching paper airplane" },
  { src: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/5a6a18ff7_IMG_4889.jpg", alt: "Kids standing on picnic table testing project" },
  { src: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/b8dee9935_IMG_4894.jpg", alt: "Student holding their invention" },
  { src: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/5e0fbfabf_IMG_4902.jpg", alt: "Group of students outside watching experiment" },
  { src: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/9550ec645_IMG_4906.jpg", alt: "Water balloon launcher experiment" },
  { src: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/180780e23_IMG_5154.jpg", alt: "Student leader teaching with a slide" },
  { src: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/246a140ed_IMG_5155.jpg", alt: "Kids working with parachute and cardboard" },
  { src: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/9bfed5e4d_IMG_5156.jpg", alt: "Students measuring and cutting cardboard" },
  { src: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/632aee54b_IMG_5157.jpg", alt: "Young student using glue gun" },
  { src: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/8a90ad09d_IMG_5159.jpg", alt: "Students collaborating on a STEM project" },
  { src: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/367894bdf_IMG_5164.jpg", alt: "Kids working with cardboard boxes" },
  { src: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/e9aebe6e0_IMG_5167.jpg", alt: "Students building at a library table" },
  { src: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/2995b45df_IMG_5169.jpg", alt: "Group of kids cutting and assembling" },
  { src: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/3318f185b_IMG_5253.jpg", alt: "Young students gluing at a STEM lab" },
  { src: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/62505cd63_IMG_5254.jpg", alt: "Student focused on engineering task" },
  { src: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/fd0026bf5_IMG_5255.jpg", alt: "Girl smiling with paper airplane collection" },
];

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
                <button
                  onClick={() => setActive(i)}
                  className="group relative block w-full overflow-hidden rounded-2xl ring-1 ring-black/5 stem-focus"
                >
                  <Image src={img.src} alt={img.alt} className="w-full rounded-2xl" fittingType="fill" style={{ aspectRatio: i % 3 === 0 ? "4/3" : i % 3 === 1 ? "1/1" : "3/4" }} />
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
            <Image src={IMAGES[active].src} alt={IMAGES[active].alt} className="w-full max-h-[85vh] rounded-xl" fittingType="fit" />
          </div>
          <button onClick={next} className="absolute right-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white stem-focus hover:bg-white/20" aria-label="Next">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}