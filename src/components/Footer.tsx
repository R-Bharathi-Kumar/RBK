"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface SocialIconItem {
  name: string;
  href: string;
  svg: React.ReactNode;
}

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const [year, setYear] = useState<number | string>("—");

  // Mount isolation blocks the layout from throwing SSR hydration mismatches
  useEffect(() => {
    setMounted(true);
    setYear(new Date().getFullYear());
  }, []);

  const iconsOnlyList: SocialIconItem[] = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/r-bharathi-kumar-186237195/",
      svg: (
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/R-Bharathi-Kumar",
      svg: (
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
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
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/fasty_kumar",
      svg: (
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
  ];

  if (!mounted) {
    return (
      <footer className="bg-neutral-950 min-h-[40vh] border-t border-neutral-900 w-full" />
    );
  }

  return (
    <footer className="bg-neutral-950 text-white py-20 px-6 md:px-12 border-t border-neutral-900 relative overflow-hidden">
      {/* INFINITE RUNNING TEXT RIBBON */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-[0.015] pointer-events-none select-none z-0">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="text-[14vw] font-black uppercase italic whitespace-nowrap tracking-tighter py-2"
        >
          DISCOVER ARCHITECT PRODUCE DEPLOY SYSTEM — DISCOVER ARCHITECT PRODUCE
          DEPLOY SYSTEM —
        </motion.div>
      </div>

      {/* Ambient Radial Background Dot Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none opacity-40 z-0" />

      {/* Frame boundary optimized via canonical structural constraints */}
      <div className="md:container mx-auto relative z-10 flex flex-col gap-16">
        {/* UPPER ROW: Massive Minimal Call to Action Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 border-b border-neutral-900 pb-16">
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-[0.4em] text-neutral-500 uppercase block font-black">
              // Project Scope Open
            </span>
            <a
              href="mailto:rbharathikumar27@gmail.com"
              className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter hover:text-neutral-400 transition-colors duration-500 flex items-center gap-4 group"
            >
              Get In Touch{" "}
              <ArrowUpRight
                size={32}
                className="text-neutral-700 group-hover:text-white group-hover:rotate-45 transition-all duration-300"
              />
            </a>
          </div>

          <div className="space-y-1">
            <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase block font-black">
              // Unified Primary Node
            </span>
            <a
              href="mailto:rbharathikumar27@gmail.com"
              className="text-md md:text-xl font-black text-neutral-300 hover:text-white transition-colors tracking-wide italic block font-mono"
            >
              rbharathikumar27@gmail.com
            </a>
          </div>
        </div>

        {/* LOWER ROW: Icon-Only HUD Deck Matrix Block */}
        <div className="flex flex-col sm:flex-row gap-8 justify-between items-center select-none">
          {/* Brand Shorthand Initials */}
          <div className="text-left font-mono">
            <span className="text-sm font-black uppercase tracking-[0.3em] text-white italic">
              RBK<span className="text-neutral-600">.</span>
            </span>
            <span className="text-[9px] block text-neutral-500 uppercase tracking-widest mt-0.5 font-bold">
              Product Engineer Edition
            </span>
          </div>

          {/* ICON-ONLY INTERACTIVE PLATFORM BUTTONS */}
          <div className="flex items-center gap-4">
            {iconsOnlyList.map((icon) => (
              <a
                key={icon.name}
                href={icon.href}
                target="_blank"
                rel="noreferrer"
                aria-label={icon.name}
                className="p-4 rounded-xl border border-neutral-900 bg-neutral-900/40 text-neutral-400 hover:text-white hover:border-neutral-700 hover:bg-neutral-900 transition-all duration-300 hover:scale-110 active:scale-95 shadow-md group relative"
              >
                {/* Tooltip bubble that slides into visibility upon active cursor hover triggers */}
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-mono font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest">
                  {icon.name}
                </span>
                {icon.svg}
              </a>
            ))}
          </div>

          {/* High Contrast Copyright System String */}
          <div className="text-[10px] font-mono tracking-widest text-neutral-400 font-bold uppercase md:text-right">
            © {year} — ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
}
