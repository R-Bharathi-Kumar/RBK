"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectItem {
  title: string;
  tech: string;
  desc: string;
  github: string;
  live: string;
  type: string;
  bgColor: string;
  image: string;
}

const projects: ProjectItem[] = [
  {
    title: "Vora Finance",
    tech: "Figma • Dashboard System",
    desc: "Conceptualized and engineered the complete UI/UX ecosystem from scratch, including custom branding, vector SVG mechanics, and data-dense card designs.",
    github: "#",
    live: "https://www.figma.com/community/file/1645694907835307040",
    type: "cursor-pointer",
    bgColor: "#0a0a0a",
    image: "/projects/7.jpg",
  },
  {
    title: "FluidScroll Engine",
    tech: "Next.js • TypeScript • Framer Motion",
    desc: "Architected a personal brand ecosystem optimized for global edge delivery. Engineered a scroll-driven interactive layer utilizing advanced viewport tracking.",
    github: "https://github.com/R-Bharathi-Kumar/BKPortfolio",
    live: "https://rbharathikumar.vercel.app/",
    type: "cursor-pointer",
    bgColor: "#0f172a",
    image: "/projects/8.png",
  },
  {
    title: "Custom Iconography",
    tech: "Figma • Pixel-Perfect Vectors",
    desc: "Designed a cohesive icon ecosystem from scratch using vector geometry. Structured assets as scalable SVGs with matching tokens for component libraries.",
    github: "#",
    live: "https://www.figma.com/community/file/1645713820460248279",
    type: "cursor-pointer",
    bgColor: "#171717",
    image: "/projects/6.jpg",
  },
  {
    title: "DeepRead Search",
    tech: "NLP Engine • Python • AssemblyAI",
    desc: "Multi-PDF text context similarity search engine. Built custom processing workflows to parse high-density text files cleanly using foundational token vector geometry.",
    github: "https://github.com/R-Bharathi-Kumar/DeepRead",
    live: "https://pdf-deepread.vercel.app/",
    type: "cursor-pointer",
    bgColor: "#1e1b4b",
    image: "/projects/9.png",
  },
  {
    title: "LI-Burogu Platform",
    tech: "Next.js • Firebase • Tailwind CSS",
    desc: "Executive platform managing content modules for founders. Integrated real-time sync systems and optimized cloud storage pipelines via Vercel delivery maps.",
    github: "https://github.com/R-Bharathi-Kumar/LI-BUROGU",
    live: "https://li-burogu.vercel.app/",
    type: "cursor-pointer",
    bgColor: "#1c1917",
    image: "/projects/10.png",
  },
  {
    title: "BallotBlock Platform",
    tech: "Web3 Architecture • Next.js",
    desc: "Trust-centric interface built for decentralized voting workflows. Solved transparent ledger processing complexities with intuitive analytical viewports.",
    github: "https://github.com/LLC-Fasty/BallotBlock",
    live: "https://ballotblock-tawny.vercel.app/",
    type: "cursor-pointer",
    bgColor: "#450a0a",
    image: "/projects/BallotBlock.png",
  },
  {
    title: "LLCircle Mobile App",
    tech: "React Native • Supabase",
    desc: "Defined cross-platform native interactive parameters focusing on customer layout retention, crisp information fields, and smooth content delivery feeds.",
    github: "https://github.com/LLC-Fasty/LLCircle-SocialApp/tree/master",
    live: "#",
    type: "disabled cursor-not-allowed opacity-50 pointer-events-none",
    bgColor: "#064e3b",
    image: "/projects/2.png",
  },
  {
    title: "AI Video Summarizer",
    tech: "Python • AssemblyAI • FFmpeg",
    desc: "Conceptualized and engineered the automated asset pipeline layout, visual analytics dashboards, and matching original responsive typography systems.",
    github: "#",
    live: "#",
    type: "disabled cursor-not-allowed opacity-50 pointer-events-none",
    bgColor: "#1e293b",
    image: "/projects/5.png",
  },
];

// 1. MASTER EXPORT CONTAINER (Runs safely on server and client fallback templates)
export default function Works() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a clear layout skeleton prior to browser mounting to avoid any target reference mismatch traps
  if (!mounted) {
    return (
      <section
        id="works"
        className="bg-neutral-950 min-h-screen w-full border-t border-neutral-900 flex items-center px-6 md:px-24"
      >
        <div className="text-white select-none opacity-40">
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase italic">
            Selected Projects
          </span>
          <h3 className="text-4xl md:text-7xl font-black uppercase italic mt-2 leading-[0.9]">
            Digital <br /> Experience.
          </h3>
        </div>
      </section>
    );
  }

  return <HydratedScrollContent />;
}

// 2. INTERNAL HYDRATED CONTAINER (Invoked only on client browser context with fully loaded references)
function HydratedScrollContent() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // useScroll is guaranteed to attach to a valid DOM node reference here
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-86%"]);
  const bgTitleX = useTransform(smoothProgress, [0, 1], ["15%", "-40%"]);

  const backgroundColor = useTransform(
    smoothProgress,
    [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1],
    projects.map((p) => p.bgColor),
  );

  return (
    <motion.section
      id="works"
      ref={sectionRef}
      style={{ backgroundColor }}
      className="relative h-[800vh] block cleared-ancestors"
    >
      <div
        className="sticky top-0 left-0 h-screen w-full flex items-center overflow-hidden z-20"
        style={{ position: "sticky", height: "100vh" }}
      >
        {/* Background Title Layout Text */}
        <motion.div
          style={{ x: bgTitleX }}
          className="absolute top-1/2 -translate-y-1/2 select-none z-0 pointer-events-none"
        >
          <h2 className="text-[30vw] md:text-[25vw] font-black text-white/5 uppercase italic leading-none whitespace-nowrap">
            Works
          </h2>
        </motion.div>

        {/* Slideway Master Strip Track */}
        <motion.div
          style={{ x }}
          className="flex gap-12 md:gap-32 px-6 md:px-24 z-10 items-center will-change-transform"
        >
          {/* Section Introduction */}
          <div className="w-[70vw] md:w-112.5 shrink-0 text-white select-none">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] text-white/40 uppercase italic">
              Selected Projects
            </span>
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic mt-2 md:mt-4 leading-[0.9]">
              Digital <br /> Experience.
            </h3>
          </div>

          {/* Mapping custom cards */}
          {projects.map((project, i) => (
            <div
              key={i}
              className="w-[85vw] md:w-187.5 h-112.5 md:h-137.5 shrink-0 flex flex-col justify-between group"
            >
              {/* Project Image Banner Layout */}
              <div className="relative w-full h-[65%] md:h-[75%] rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-white/30">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-center"
                />

                {/* Direct SVG Popover Hover Trigger Layout */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 md:gap-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 md:bg-black/60 backdrop-blur-[2px] md:backdrop-blur-md">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 bg-white text-black px-4 py-2 md:px-8 md:py-3 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest cursor-pointer hover:scale-105 transition-transform"
                    >
                      <svg
                        className="w-3.5 h-3.5 md:w-4.5 md:h-4.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.01.069-.01 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex ${project.type} items-center gap-2 bg-transparent text-white border border-white/40 px-4 py-2 md:px-8 md:py-3 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all`}
                    >
                      <ExternalLink size={14} className="md:w-4.5" /> Live
                    </a>
                  )}
                </div>
              </div>

              <div className="pt-4 md:pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between gap-3 md:gap-6 text-white">
                <div className="max-w-full md:max-w-[60%]">
                  <h3 className="text-2xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
                    {project.title}
                  </h3>
                  <p className="text-[9px] md:text-xs text-white/40 uppercase tracking-[0.2em] md:tracking-[0.3em] mt-1 md:mt-3 font-bold italic">
                    {project.tech}
                  </p>
                </div>
                <p className="max-w-full md:max-w-75 text-[10px] md:text-[11px] text-white/60 uppercase leading-relaxed tracking-wider font-medium line-clamp-2 md:line-clamp-none">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
