import React from "react";
import { ExternalLink } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";

// ════════════════════════════════════════════════════════════════════
// STEP 1: Paste your volunteer application Google Form embed URL here.
// In Google Forms, open your form > "Send" > the < > embed icon,
// copy the src URL from the iframe code, and paste it below.
// It will automatically populate both the iframe and the fallback button.
// ════════════════════════════════════════════════════════════════════
const VOLUNTEER_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdqqImZHlP6cHdR6LzlCbcl1SPEV3_vAt-P4Umw1-RqpHVrXw/viewform?embedded=true&v=3";

export default function Apply() {
  const ready = VOLUNTEER_FORM_URL && !VOLUNTEER_FORM_URL.includes("PASTE_YOUR");

  return (
    <>
      <section className="relative bg-[#0096ff] text-white">
        <div className="circuit-pattern absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-36 text-center lg:px-8 lg:pb-28 lg:pt-44">
          <Reveal>
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.25em] text-[#b4f859]">
              Join Our Team
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Apply to Volunteer
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Apply to become a SY-STEM volunteer and help spark curiosity in students near you.
              We need all the help we can get in our fight for education.
            </p>
          </Reveal>
        </div>
      </section>
      <WaveDivider from="#0096ff" to="#FFFFFF" />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <p className="mx-auto mb-10 max-w-2xl text-center text-lg leading-relaxed text-[#555]">
              SY-STEM is founded and run by students — the very group we aim to support.
              Every volunteer has a voice and plays an important role in shaping our
              organization. Complete the application below to join us.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-[#F2FBFF] px-6 py-32 text-center shadow-2xl ring-1 ring-black/5">
              <p className="font-display text-xl font-bold text-[#005020]">
                Volunteer application coming soon
              </p>
              <p className="max-w-md text-[15px] text-[#555]">
                The SY-STEM team is finalizing the volunteer application form. Check back soon to apply!
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}