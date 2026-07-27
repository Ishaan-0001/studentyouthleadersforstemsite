import React from "react";
import { Link } from "react-router-dom";
import { Cpu, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1B4332] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-white">
                <Cpu className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight">SY-STEM</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Student Youth Leaders for STEM — a non-profit organization dedicated to
              sparking curiosity in students through fun, hands-on labs.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white/60">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li><Link to="/about" className="hover:text-[#52B788] stem-focus rounded">About Us</Link></li>
              <li><Link to="/chapters" className="hover:text-[#52B788] stem-focus rounded">Our Chapters</Link></li>
              <li><Link to="/gallery" className="hover:text-[#52B788] stem-focus rounded">Session Gallery</Link></li>
              <li><Link to="/executive-council" className="hover:text-[#52B788] stem-focus rounded">Executive Council</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white/60">
              Get Involved
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#52B788]" /> <span>mstudentyouthleader</span></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#52B788]" /> <span>Chapters across the U.S.</span></li>
              <li><Link to="/registration" className="hover:text-[#52B788] stem-focus rounded">Register for a Lab</Link></li>
              <li><Link to="/apply" className="hover:text-[#52B788] stem-focus rounded">Apply to Volunteer</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Student Youth Leaders for STEM (SY-STEM). A non-profit organization.
        </div>
      </div>
    </footer>);

}