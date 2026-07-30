import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Logo from "@/components/Logo";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";
import ChapterMap from "@/components/ChapterMap";

export const CHAPTERS = [
  {
    slug: "grafton",
    name: "Grafton",
    state: "MA",
    lat: 42.2,
    lng: -71.687,
    slot: "Slot #14",
    label: "Chapter — Grafton, MA lab photo",
    image: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/85d843a68_pic23.jpg",
    cardImage: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/ff4dfd33d_pic28.jpg",
    blurb: "Our Grafton chapter serves young learners across Massachusetts with engaging, curiosity-driven lab sessions.",
    description: [
      "The Grafton (MA) chapter serves as the founding chapter of SY-STEM, launched by four dedicated high school students: Ayush Ayyagari, Tanmay Jain, Ishaan Pradhan, and Om Anish Kadiyam.",
      "These students recognized a clear lack of free STEM education opportunities for youth in their surrounding community.",
      "To address this gap, the founders established SY-STEM as a student-driven organization dedicated to delivering accessible, hands-on STEM experiences that ignite curiosity and passion for science, technology, engineering, and mathematics.",
      "As the original chapter, Grafton continues to lead by example, inspiring expansion while nurturing curiosity and innovation among young learners.",
    ],
    volunteers: [
      { name: "Joshua Garcia", role: "Chapter Head", photo: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/afa549487_joshuagarcia.jpg" },
      { name: "Om Anish Kadiyam", photo: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/3a98ddeab_omanishkadiyam.jpg" },
      { name: "Ayush Ayyagari", photo: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/3da05ab1d_ayushimage.jpg" },
      { name: "Ishaan Pradhan", photo: "https://media.base44.com/images/public/6a66ade4f704833c85945c24/29f0abc81_ishaanimage.jpg" },
      { name: "Tanmay Jain" },
      { name: "Dhruv Patel" },
      { name: "Mohammad Golji" },
      { name: "Gagan Nallani" },
      { name: "Riya Vishwashankar" },
      { name: "Sumedh Malipeddi" },
      { name: "Santosh Aryan Potti" },
      { name: "Risha Vishwashankar" },
    ],
  },
  {
    slug: "belmont",
    name: "Belmont",
    state: "MA",
    lat: 42.396,
    lng: -71.179,
    slot: "Slot #13",
    label: "Chapter — Belmont, MA lab photo",
    blurb: "Driven by passionate volunteers, the Belmont chapter expands SY-STEM's mission by providing free, hands-on STEM labs for youth in Belmont, Lexington, Rutherford, and surrounding communities.",
    description: [
      "Driven by passionate volunteers, the Belmont chapter expands SY-STEM's mission by providing free, hands-on STEM labs for youth in Belmont, Lexington, Rutherford, and surrounding communities.",
      "This chapter makes it possible for SY-STEM's educational outreach to span across Massachusetts, bringing interactive learning to students across the state.",
    ],
    volunteers: [
      { name: "Ben Qin", role: "Chapter Head" },
      { name: "Arun Lenhart" },
      { name: "Rocco Choe" },
    ],
  },
  {
    slug: "stoughton",
    name: "Stoughton",
    state: "MA",
    lat: 42.125,
    lng: -71.103,
    slot: "Slot #15",
    label: "Chapter — Stoughton, MA lab photo",
    blurb: "Powered by passionate volunteers, our Stoughton chapter delivers free, hands-on STEM labs to youth in Stoughton, Canton, Sharon, and the surrounding towns.",
    description: [
      "Powered by passionate volunteers, our Stoughton chapter delivers free, hands-on STEM labs to youth in Stoughton, Canton, Sharon, and the surrounding towns.",
      "The chapter expands SY-STEM's impact across Massachusetts and inspiring the next generation of problem solvers.",
    ],
    volunteers: [
      { name: "Ethan Tran", role: "Chapter Head" },
      { name: "Henrique Dos Santos" },
      { name: "Liam Machula" },
      { name: "Sam Issa" },
    ],
  },
  {
    slug: "torrance",
    name: "Torrance",
    state: "CA",
    lat: 33.836,
    lng: -118.343,
    slot: "Slot #16",
    label: "Chapter — Torrance, CA lab photo",
    blurb: "Led by local volunteers who love what they do, our Torrance chapter opens up worlds of discovery with free, hands-on STEM labs for youth in Torrance, Lomita, Carson, and beyond.",
    description: [
      "Led by local volunteers who love what they do, our Torrance chapter opens up worlds of discovery with free, hands-on STEM labs for youth in Torrance, Lomita, Carson, and beyond.",
      "Every workshop helps stretch SY-STEM's reach across Southern California, empowering the thinkers and creators of tomorrow.",
    ],
    volunteers: [
      { name: "Amogh Urs", role: "Chapter Head" },
      { name: "Aidan Woo" },
      { name: "Paulo Mazarkis" },
    ],
  },
];

export default function Chapters() {
  return (
    <>
      <section className="relative bg-[#0096ff] text-white">
        <div className="circuit-pattern absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-36 text-center lg:px-8 lg:pb-28 lg:pt-44">
          <Reveal>
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.25em] text-[#b4f859]">
              Chapter Nodes
            </p>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Our Chapters
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Find a SY-STEM lab near you — and if we're not in your area yet, help us start one.
            </p>
          </Reveal>
        </div>
      </section>
      <WaveDivider from="#0096ff" to="#FFFFFF" />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <Reveal>
            <div className="text-center">
              <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-[#0096ff]">
                Find Us
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#005020] sm:text-4xl">
                Chapters Across North America
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#555]">
                Zoom in and tap a pin to see where our student-led labs are making an impact.
              </p>
            </div>
          </Reveal>
          <div className="mt-10">
            <ChapterMap chapters={CHAPTERS} />
          </div>
        </div>
      </section>

      <section className="bg-[#F2FBFF]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {CHAPTERS.map((ch, i) => (
              <Reveal key={ch.slug} delay={i * 0.1}>
                {/* Destination Card — massive low-opacity location text with floating image + button */}
                <Link
                  to={`/chapters/${ch.slug}`}
                  className="group relative block h-full overflow-hidden rounded-3xl border border-black/5 bg-[#F2FBFF] shadow-sm stem-focus transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-2 hover:ring-[#b4f859]/40"
                >
                  <div className="pointer-events-none absolute right-2 top-0 select-none font-display text-7xl font-extrabold tracking-tight text-[#005020]/[0.07]">
                    {ch.state}
                  </div>
                  {/* IMAGE SLOTS #13–15 — chapter lab photos */}
                  {ch.cardImage ? (
                    <Image src={ch.cardImage} alt={`${ch.name} lab photo`} fittingType="fill" className="aspect-[3/2] w-full" />
                  ) : (
                    <div className="flex aspect-[3/2] w-full items-center justify-center bg-[#F2FBFF]">
                      <Logo className="h-20 w-20 text-[#005020]/30" />
                    </div>
                  )}
                  <div className="relative p-7">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-[#005020]">
                      {ch.name} <span className="text-base font-semibold text-[#888]">({ch.state})</span>
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[#555]">{ch.blurb}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#005020] transition-colors group-hover:text-[#b4f859]">
                      Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}