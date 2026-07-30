import React, { useState } from "react";
import { Loader2 } from "lucide-react";

/**
 * GoogleFormEmbed — wraps a Google Form iframe with a branded loading
 * skeleton so the container shows a soft branded surface (instead of a
 * stark white box) while Google's scripts download.
 *
 * Old inline iframe pattern (preserved here in case we want to revert):
 *
 *   <iframe
 *     title="..."
 *     src={FORM_URL}
 *     className="h-[700px] w-full border-0"
 *     loading="lazy"
 *   />
 */
export default function GoogleFormEmbed({
  src,
  title,
  heightClass = "h-[700px]",
  className = "",
}) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#F2FBFF] ring-1 ring-black/5 ${className}`}>
      {loading && (
        <div
          className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 ${heightClass}`}
        >
          <Loader2 className="h-8 w-8 animate-spin text-[#0096ff]" />
          <p className="font-display text-sm font-semibold text-[#005020]">
            Loading form…
          </p>
          <div className="mt-4 w-full max-w-md space-y-3 px-6" aria-hidden="true">
            <div className="h-3 w-1/3 rounded-full bg-[#0096ff]/15" />
            <div className="h-9 w-full rounded-lg bg-white/70 ring-1 ring-black/5" />
            <div className="h-3 w-1/4 rounded-full bg-[#0096ff]/15" />
            <div className="h-9 w-full rounded-lg bg-white/70 ring-1 ring-black/5" />
            <div className="h-3 w-1/3 rounded-full bg-[#0096ff]/15" />
            <div className="h-9 w-full rounded-lg bg-white/70 ring-1 ring-black/5" />
            <div className="h-10 w-32 rounded-full bg-[#b4f859]/60" />
          </div>
        </div>
      )}
      <iframe
        title={title}
        src={src}
        onLoad={() => setLoading(false)}
        className={`${heightClass} w-full border-0`}
        loading="lazy"
      />
    </div>
  );
}