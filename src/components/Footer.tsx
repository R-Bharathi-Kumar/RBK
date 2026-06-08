"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface SocialLinkItem {
  name: string;
  href: string;
  svgIcon: React.ReactNode;
}

export default function Footer() {
  const [year, setYear] = useState<number | string>("—");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const socialLinks: SocialLinkItem[] = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/r-bharathi-kumar-186237195/",
      svgIcon: (
        <svg
          className="w-3.5 h-3.5"
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
      href: "https://github.com/LLC-Fasty",
      svgIcon: (
        <svg
          className="w-3.5 h-3.5"
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
      svgIcon: (
        <svg
          className="w-3.5 h-3.5"
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

  return (
    <footer className="bg-neutral-950 text-neutral-100 py-24 px-6 md:px-12 border-t border-neutral-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-[0.015] pointer-events-none select-none z-0">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="text-[16vw] font-black uppercase italic whitespace-nowrap tracking-tighter"
        >
          BUILD DESIGN DEPLOY CODES — BUILD DESIGN DEPLOY CODES —
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none opacity-40 z-0" />

      <div className="md:container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-500 block italic">
              Project Scoping Available // 2026 Season
            </span>

            <motion.div
              whileHover={{ scale: 0.995 }}
              className="inline-block group"
            >
              <a
                href="mailto:rbharathikumar27@gmail.com"
                className="text-[10vw] lg:text-[5.5vw] font-black italic uppercase tracking-tighter leading-none hover:text-neutral-300 transition-colors duration-500 block text-white"
              >
                Let's Connect<span className="text-neutral-500">.</span>
              </a>
              <div className="h-0.75 bg-white w-12 group-hover:w-full transition-all duration-500 ease-out mt-3" />
            </motion.div>
          </div>

          <div className="lg:col-span-5 lg:text-right space-y-2 lg:pt-4">
            <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">
              Primary Communications Inbox
            </p>
            <a
              href="mailto:rbharathikumar27@gmail.com"
              className="text-lg md:text-2xl font-black hover:text-neutral-300 underline underline-offset-8 decoration-neutral-800 hover:decoration-white transition-all tracking-wider text-white italic"
            >
              rbharathikumar27@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-10 flex flex-col md:flex-row gap-8 justify-between items-center">
          <div className="flex flex-wrap gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-300 hover:text-white transition-colors duration-300 group select-none"
              >
                <div className="text-neutral-500 group-hover:text-white transition-colors duration-300">
                  {social.svgIcon}
                </div>
                <span>{social.name}</span>
                <ArrowUpRight
                  size={12}
                  className="text-neutral-600 group-hover:text-white group-hover:rotate-45 transition-all duration-300"
                />
              </a>
            ))}
          </div>

          <div className="text-[10px] font-mono tracking-widest text-neutral-400 font-bold uppercase select-none">
            © {year} — R Bharathi Kumar
          </div>
        </div>
      </div>
    </footer>
  );
}
