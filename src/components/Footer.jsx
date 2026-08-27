import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#005020] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 text-[#b4f859]">
              <img
                src="https://media.base44.com/images/public/6a66ade4f704833c85945c24/e74aef4df_1transparent.png"
                alt="SY-STEM"
                className="h-32 w-auto"
              />
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
              <li><Link to="/about" className="hover:text-[#b4f859] stem-focus rounded">About Us</Link></li>
              <li><Link to="/chapters" className="hover:text-[#b4f859] stem-focus rounded">Our Chapters</Link></li>
              <li><Link to="/gallery" className="hover:text-[#b4f859] stem-focus rounded">Session Gallery</Link></li>
              <li><Link to="/executive-council" className="hover:text-[#b4f859] stem-focus rounded">Executive Council</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white/60">
              Get Involved
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/80">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#b4f859]" /> <span>studentyouthleadersforstem@gmail.com</span></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#b4f859]" /> <span>Chapters across the U.S.</span></li>
              <li><Link to="/registration" className="hover:text-[#b4f859] stem-focus rounded">Register for a Lab</Link></li>
              <li><Link to="/apply" className="hover:text-[#b4f859] stem-focus rounded">Apply to Volunteer</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Student Youth Leaders for STEM (SY-STEM). A non-profit organization.
        </div>
      </div>
    </footer>);

}