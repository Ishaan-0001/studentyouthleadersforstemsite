import React from "react";
import { Mail, ExternalLink, Instagram, Linkedin } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";

// ════════════════════════════════════════════════════════════════════
// STEP 1: Paste your Google Contact Form embed URL here.
// In Google Forms, open your form > "Send" > the < > embed icon,
// copy the src URL from the iframe code, and paste it below.
// It will automatically populate both the iframe and the fallback button.
// ════════════════════════════════════════════════════════════════════
const CONTACT_FORM_URL = "PASTE_YOUR_GOOGLE_CONTACT_FORM_URL_HERE";

export default function Contact() {
  const ready = CONTACT_FORM_URL && !CONTACT_FORM_URL.includes("PASTE_YOUR");

  return (
    <>
      <section className="relative bg-[#2D6A4F] text-white">
        <div className="circuit-pattern absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-36 text-center lg:px-8 lg:pb-28 lg:pt-44">
          <Reveal>
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.25em] text-[#52B788]">
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
      <WaveDivider from="#2D6A4F" to="#FFFFFF" />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
          <div className="grid overflow-hidden rounded-3xl border border-black/5 shadow-xl lg:grid-cols-2">
            {/* LEFT — green info column */}
            <div className="relative bg-[#2D6A4F] p-10 text-white lg:p-12">
              <div className="circuit-pattern absolute inset-0 opacity-40" aria-hidden="true" />
              <Reveal className="relative">
                <h2 className="font-display text-3xl font-extrabold tracking-tight">Get in Touch</h2>
                <p className="mt-4 text-white/80">
                  Reach out and a student leader will get back to you shortly.
                </p>
                <ul className="mt-8 space-y-5 text-white/90">
                  <li className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10"><Mail className="h-5 w-5" /></span>
                    <a href="mailto:contact@system.org" className="stem-focus rounded hover:text-[#52B788]">contact@system.org</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10"><Instagram className="h-5 w-5" /></span>
                    <span className="text-sm text-white/60">@system (placeholder)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10"><Linkedin className="h-5 w-5" /></span>
                    <span className="text-sm text-white/60">SY-STEM (placeholder)</span>
                  </li>
                </ul>
                <div className="mt-10">
                  {/* IMAGE SLOT #24 — Contact: team or event photo */}
                  <ImagePlaceholder slot="Slot #24" label="Contact — team or event photo" ratio="landscape" />
                </div>
              </Reveal>
            </div>

            {/* RIGHT — Google Form embed */}
            <div className="bg-white p-10 lg:p-12">
              <Reveal>
                <h3 className="font-display text-2xl font-bold tracking-tight text-[#2D6A4F]">
                  Send Us a Message
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#555]">
                  Fill out the form below and we'll be in touch.
                </p>
                <div className="mt-7 overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
                  {ready ? (
                    <iframe
                      title="SY-STEM Contact Form"
                      src={CONTACT_FORM_URL}
                      className="h-[700px] w-full border-0"
                      sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
                      loading="lazy"
                    >
                      Loading the contact form…
                    </iframe>
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-4 px-6 py-24 text-center">
                      <p className="font-display text-lg font-bold text-[#2D6A4F]">
                        Contact form coming soon
                      </p>
                      <p className="max-w-sm text-[15px] text-[#555]">
                        Once the Google Contact Form URL is added, the form will appear here.
                      </p>
                    </div>
                  )}
                </div>
                {ready && (
                  <div className="mt-6">
                    <a
                      href={CONTACT_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-[#2D6A4F] px-6 py-3 text-sm font-semibold text-[#2D6A4F] stem-focus transition-colors hover:bg-[#2D6A4F] hover:text-white"
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