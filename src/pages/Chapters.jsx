import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/components/Logo";

export const CHAPTERS = [
  {
    slug: "grafton",
    name: "Grafton",
    state: "MA",
    blurb: "STEM learning and leadership in central Massachusetts.",
    description: [
      "Grafton brings together students eager to learn, lead, and build community around science, technology, engineering, and math.",
      "Our chapter creates a welcoming space for projects, mentorship, and local collaboration that helps students grow into confident STEM leaders.",
    ],
    volunteers: [],
    image: "",
  },
  {
    slug: "belmont",
    name: "Belmont",
    state: "MA",
    blurb: "A local STEM hub for curious, motivated students.",
    description: [
      "Belmont empowers students to explore STEM ideas through teamwork, mentorship, and hands-on learning experiences.",
      "The chapter helps young leaders connect with peers and mentors while building real-world confidence in STEM.",
    ],
    volunteers: [],
    image: "",
  },
  {
    slug: "stoughton",
    name: "Stoughton",
    state: "MA",
    blurb: "Helping students turn interest into action.",
    description: [
      "Stoughton focuses on building belonging, leadership, and curiosity in STEM through local programming and community support.",
      "Students are encouraged to lead projects, build skills, and connect with others who share their interests.",
    ],
    volunteers: [],
    image: "",
  },
  {
    slug: "torrance",
    name: "Torrance",
    state: "CA",
    blurb: "STEM leadership in Southern California.",
    description: [
      "Torrance brings students together to explore STEM through mentorship, creativity, and leadership opportunities.",
      "By creating a supportive environment, the chapter helps students develop practical skills and the confidence to lead.",
    ],
    volunteers: [],
    image: "",
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    state: "CA",
    blurb: "Connecting students with STEM pathways and leaders.",
    description: [
      "Los Angeles creates opportunities for students to discover STEM careers, build technical skills, and grow as community leaders.",
      "This chapter offers a place for collaboration, mentorship, and engagement with real impact.",
    ],
    volunteers: [],
    image: "",
  },
  {
    slug: "san-antonio",
    name: "San Antonio",
    state: "TX",
    blurb: "Growing the next generation of STEM leaders.",
    description: [
      "San Antonio supports students in developing curiosity, confidence, and leadership across STEM disciplines.",
      "The chapter emphasizes connection, mentorship, and making STEM accessible and exciting for all learners.",
    ],
    volunteers: [],
    image: "",
  },
  {
    slug: "ashburn",
    name: "Ashburn",
    state: "VA",
    blurb: "Inspiring collaboration and leadership in STEM.",
    description: [
      "Ashburn offers students a welcoming space to learn, lead, and innovate while building community and confidence.",
      "Our chapter helps young leaders develop the skills they need to thrive in STEM and beyond.",
    ],
    volunteers: [],
    image: "",
  },
  {
    slug: "akron",
    name: "Akron",
    state: "OH",
    blurb: "Empowering student leadership in STEM communities.",
    description: [
      "Akron brings students together to learn, collaborate, and grow into the next generation of STEM leaders.",
      "The chapter focuses on mentorship, creativity, and building accessible opportunities for all students.",
    ],
    volunteers: [],
    image: "",
  },
];

const NAV = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    to: "/about",
    children: [
      { label: "Overview", to: "/about" },
      { label: "Our Mission", to: "/mission" },
      { label: "Our Labs", to: "/labs" },
    ],
  },
  {
    label: "Our Chapters",
    to: "/chapters",
    children: [
      { label: "All Chapters", to: "/chapters" },
      { label: "Grafton (MA)", to: "/chapters/grafton" },
      { label: "Belmont (MA)", to: "/chapters/belmont" },
      { label: "Stoughton (MA)", to: "/chapters/stoughton" },
      { label: "Torrance (CA)", to: "/chapters/torrance" },
      { label: "Los Angeles (CA)", to: "/chapters/los-angeles" },
      { label: "San Antonio (TX)", to: "/chapters/san-antonio" },
      { label: "Ashburn (VA)", to: "/chapters/ashburn" },
      { label: "Akron (OH)", to: "/chapters/akron" },
    ],
  },
  { label: "Session Gallery", to: "/gallery" },
  { label: "Executive Council", to: "/executive-council" },
  { label: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
    setMobileSub(null);
  }, [location.pathname]);

  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(null);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const dark = scrolled || mobileOpen;

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        dark ? "bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <Link
          to="/"
          className={`flex items-center gap-1.5 stem-focus rounded-lg ${
            dark ? "text-[#005020]" : "text-white"
          }`}
        >
          <Logo className="h-[132px] w-auto" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li key={item.label} className="relative">
              {item.children ? (
                <button
                  onClick={() => setOpen(open === item.label ? null : item.label)}
                  onMouseEnter={() => setOpen(item.label)}
                  className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium stem-focus transition-colors ${
                    dark
                      ? "text-[#1A1A1A] hover:text-[#005020]"
                      : "text-white/90 hover:text-white"
                  } ${open === item.label ? (dark ? "text-[#005020]" : "text-white") : ""}`}
                  aria-expanded={open === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open === item.label ? "rotate-180" : ""}`} />
                </button>
              ) : (
                <Link
                  to={item.to}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium stem-focus transition-colors ${
                    dark
                      ? "text-[#1A1A1A] hover:text-[#005020]"
                      : "text-white/90 hover:text-white"
                  } ${location.pathname === item.to ? (dark ? "text-[#005020]" : "text-white") : ""}`}
                >
                  {item.label}
                </Link>
              )}

              {item.children && open === item.label && (
                <div
                  onMouseLeave={() => setOpen(null)}
                  className="absolute left-0 top-full z-50 mt-1 min-w-[200px] overflow-hidden rounded-xl border border-black/5 bg-white py-2 shadow-xl"
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.to}
                      className={`flex items-center gap-2 border-l-2 px-4 py-2 text-sm stem-focus transition-all hover:border-[#b4f859] hover:bg-[#F2FBFF] hover:text-[#005020] ${
                        location.pathname === child.to
                          ? "border-[#b4f859] bg-[#F2FBFF] text-[#005020]"
                          : "border-transparent text-[#1A1A1A]"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/apply"
            className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-semibold stem-focus transition-colors ${
              dark
                ? "border-[#005020] text-[#005020] hover:bg-[#005020] hover:text-white"
                : "border-white/80 text-white hover:bg-white hover:text-[#005020]"
            }`}
          >
            VOLUNTEER
          </Link>
          <Link
            to="/registration"
            className="whitespace-nowrap rounded-full bg-[#b4f859] px-5 py-2.5 text-sm font-semibold text-[#005020] stem-focus transition-colors hover:bg-white"
          >
            REGISTER NOW
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className={`grid h-10 w-10 place-items-center rounded-lg stem-focus lg:hidden ${
            dark ? "text-[#1A1A1A]" : "text-white"
          }`}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden">
          <div className="max-h-[80vh] overflow-y-auto border-t border-black/5 bg-white px-5 pb-6 pt-2">
            {NAV.map((item) => (
              <div key={item.label} className="border-b border-black/5 py-1">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setMobileSub(mobileSub === item.label ? null : item.label)}
                      className="flex w-full items-center justify-between py-2.5 text-left text-sm font-semibold text-[#1A1A1A]"
                      aria-expanded={mobileSub === item.label}
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileSub === item.label ? "rotate-180" : ""}`} />
                    </button>
                    {mobileSub === item.label && (
                      <div className="ml-3 mb-2 border-l-2 border-[#b4f859] pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.to}
                            className="block py-2 text-sm text-[#555] stem-focus rounded-md"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.to}
                    className="block py-2.5 text-sm font-semibold text-[#1A1A1A]"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/apply"
              className="mt-4 block rounded-full border border-[#005020] px-5 py-3 text-center text-sm font-semibold text-[#005020] stem-focus"
            >
              SIGN UP TO VOLUNTEER
            </Link>
            <Link
              to="/registration"
              className="mt-3 block rounded-full bg-[#0096ff] px-5 py-3 text-center text-sm font-semibold text-white stem-focus"
            >
              REGISTER NOW
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
