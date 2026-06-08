"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Zoom Scale: Animates from full text view up to 100x scale
  const scale = useTransform(scrollYProgress, [0, 0.85], [1, 100]);
  // Smooth opacity drop-off at the tail end of the section container
  const opacity = useTransform(scrollYProgress, [0, 0.75, 0.95], [1, 1, 0]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-neutral-950">
      {/* Absolute grid underneath layout parameters */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* Sticky viewport content block */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-6">
        <motion.div
          style={{ scale, opacity }}
          className="z-10 text-center select-none"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-neutral-500 block mb-6 italic"
          >
            Product Engineer Portfolio
          </motion.span>

          <h1 className="text-[9vw] font-black text-white whitespace-nowrap uppercase tracking-tighter italic leading-none">
            R Bharathi Kumar
          </h1>

          <p className="text-[10px] md:text-xs text-neutral-400 mt-4 font-bold uppercase tracking-[0.4em] max-w-xl mx-auto leading-relaxed">
            UI/UX Designer | Product Designer | Front-End Developer
          </p>

          <div className="mt-8 flex justify-center items-center gap-3 animate-pulse">
            <span className="text-[9px] font-mono tracking-widest text-neutral-600 uppercase">
              Scroll to unlock overview
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
