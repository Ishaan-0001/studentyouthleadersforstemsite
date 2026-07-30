import React from "react";
import { Mail, ExternalLink, Instagram } from "lucide-react";
import { Image } from "@/components/ui/image";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";
import GoogleFormEmbed from "@/components/GoogleFormEmbed";

// ════════════════════════════════════════════════════════════════════
// STEP 1: Paste your Google Contact Form embed URL here.
// In Google Forms, open your form > "Send" > the < > embed icon,
// copy the src URL from the iframe code, and paste it below.
// It will automatically populate both the iframe and the fallback button.
// ════════════════════════════════════════════════════════════════════
const CONTACT_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeOWAw0GqRYjqRIVSkQUPa1w3J1fjPftqrl5ZWeCHpgH9XqbA/viewform?embedded=true";

export default function Contact() {
  const ready = CONTACT_FORM_URL && !CONTACT_FORM_URL.includes("PASTE_YOUR");

  return (
    <>
      <section className="relative bg-[#0096ff] text-white">
        <div className="circuit-pattern absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-36 text-center lg:px-8 lg:pb-28 lg:pt-44">
          <Reveal>
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.25em] text-[#b4f859]">
              Get in Touch
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Contact Us
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Questions about a lab, a chapter, or volunteering? We'd love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>
      <WaveDivider from="#0096ff" to="#FFFFFF" />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
          <div className="grid overflow-hidden rounded-3xl border border-black/5 shadow-xl lg:grid-cols-2">
            {/* LEFT — green info column */}
            <div className="relative bg-[#0096ff] p-7 text-white sm:p-10 lg:p-12">
              <div className="circuit-pattern absolute inset-0 opacity-40" aria-hidden="true" />
              <Reveal className="relative">
                <h2 className="font-display text-3xl font-extrabold tracking-tight">Get in Touch</h2>
                <p className="mt-4 text-white/80">
                  Reach out and a student leader will get back to you shortly.
                </p>
                <ul className="mt-8 space-y-5 text-white/90">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10"><Mail className="h-5 w-5" /></span>
                    <a href="mailto:studentyouthleadersforstem@gmail.com" className="stem-focus break-all rounded text-sm hover:text-[#b4f859] sm:text-base">studentyouthleadersforstem@gmail.com</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10"><Instagram className="h-5 w-5" /></span>
                    <a href="https://www.instagram.com/systemlabsusa/" target="_blank" rel="noopener noreferrer" className="stem-focus rounded text-sm hover:text-[#b4f859]">@systemlabsusa</a>
                  </li>
                </ul>
                <div className="mt-10">
                  <Image src="https://media.base44.com/images/public/6a66ade4f704833c85945c24/e7962e039_pic19.jpg" alt="Students testing foil boats in a water bin" fittingType="fill" className="aspect-[3/2] w-full rounded-2xl" />
                </div>
              </Reveal>
            </div>

            {/* RIGHT — Google Form embed */}
            <div className="bg-white p-7 sm:p-10 lg:p-12">
              <Reveal>
                <h3 className="font-display text-2xl font-bold tracking-tight text-[#005020]">
                  Send Us a Message
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#555]">
                  Fill out the form below and we'll be in touch.
                </p>
                {ready ? (
                  <GoogleFormEmbed
                    src={CONTACT_FORM_URL}
                    title="SY-STEM Contact Form"
                    heightClass="h-[920px] sm:h-[760px] lg:h-[700px]"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-[#F2FBFF] px-6 py-24 text-center ring-1 ring-black/5">
                    <p className="font-display text-lg font-bold text-[#005020]">
                      Contact form coming soon
                    </p>
                    <p className="max-w-sm text-[15px] text-[#555]">
                      Once the Google Contact Form URL is added, the form will appear here.
                    </p>
                  </div>
                )}
                {ready && (
                  <div className="mt-6">
                    <a
                      href={CONTACT_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-[#0096ff] px-6 py-3 text-sm font-semibold text-[#005020] stem-focus transition-colors hover:bg-[#0096ff] hover:text-white"
                    >
                      Open Form in New Tab <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}