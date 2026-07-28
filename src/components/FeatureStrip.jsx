import React from "react";
import { Atom, Beaker, Wrench, FlaskConical, Telescope, Cpu } from "lucide-react";
import Reveal from "@/components/Reveal";

const FEATURES = [
  { icon: Atom, label: "Run By Students" },
  { icon: Beaker, label: "Educational Activities" },
  { icon: Wrench, label: "Hands On Learning" },
  { icon: FlaskConical, label: "Experimenting" },
  { icon: Telescope, label: "Real World Scenarios" },
  { icon: Cpu, label: "Partnered With Local Schools" },
];

export default function FeatureStrip() {
  return (
    <section className="bg-[#b4f859]">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={(i % 3) * 0.08}>
              <div className="flex items-center gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#0096ff] text-white shadow-sm">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-display text-lg font-bold tracking-tight text-[#005020]">
                  {label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}