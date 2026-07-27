import React from "react";
import { Camera } from "lucide-react";

const RATIO_CLASSES = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[16/9]",
  square: "aspect-square",
  hero: "aspect-[3/4] md:aspect-auto md:h-full",
  wide: "aspect-[21/9]",
};

/**
 * ImagePlaceholder — a clearly labeled, intentional placeholder for a real photo.
 * Replace the inner div with <img src="..." className="w-full h-full object-cover" /> once the photo is supplied.
 */
export default function ImagePlaceholder({ label, slot, ratio = "landscape", className = "" }) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#D8EFE3] to-[#A8D5BE] ring-1 ring-[#2D6A4F]/10 ${RATIO_CLASSES[ratio] || RATIO_CLASSES.landscape} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-white/70 text-[#2D6A4F] shadow-sm">
          <Camera className="h-6 w-6" />
        </div>
        <div className="space-y-1">
          {slot && <p className="font-display text-xs font-bold uppercase tracking-widest text-[#2D6A4F]">{slot}</p>}
          <p className="font-body text-sm italic leading-snug text-[#2D6A4F]/80">{label}</p>
        </div>
      </div>
    </div>
  );
}