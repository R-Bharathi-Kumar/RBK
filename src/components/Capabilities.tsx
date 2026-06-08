"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Cpu, Code2, Sparkles, ArrowRight } from "lucide-react";

interface SkillCategory {
  id: string;
  category: string;
  icon: React.ReactNode;
  tagline: string;
  items: string[];
}

export default function Capabilities() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const skills: SkillCategory[] = [
    {
      id: "fe",
      category: "Frontend Architecture",
      icon: <Code2 size={20} />,
      tagline: "Low-latency layout layers & reactive user journey systems",
      items: [
        "Next.js",
        "React JS",
        "React Native",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Three JS",
      ],
    },
    {
      id: "be",
      category: "Backend & Systems",
      icon: <Cpu size={20} />,
      tagline: "High-performance data engineering & systems lifecycle logic",
      items: [
        "Node.js",
        "Rust Architecture",
        "Supabase",
        "PostgreSQL",
        "FFmpeg",
        "NLP Automation",
      ],
    },
    {
      id: "ds",
      category: "Design & Prototyping",
      icon: <Layers size={20} />,
      tagline: "Component vector geometry tokens & interaction token systems",
      items: [
        "Figma Systems",
        "Interaction Models",
        "Vector Asset Design",
        "Storyboarding",
        "Component Layouts",
      ],
    },
    {
      id: "tl",
      category: "Tools & Automation",
      icon: <Sparkles size={20} />,
      tagline:
        "Custom workflow mutations & unified corporate multi-app streams",
      items: [
        "GitHub Workflows",
        "Zoho CRM & Suite",
        "Deluge Scripting",
        "Cloud Infrastructures",
      ],
    },
  ];

  return (
    <section
      id="expertise"
      className="bg-neutral-950 py-32 px-6 md:px-12 border-t border-neutral-900 overflow-visible relative"
    >
      {/* Background Grid Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none opacity-80" />

      <div className="md:container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          {/* COLUMN 1: STICKY HUD PLATFORM (Left Side Window Deck) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 self-start">
            <div>
              {/* HIGH CONTRAST FIX: Boosted to text-neutral-400 */}
              <span className="text-[10px] font-mono tracking-[0.4em] text-neutral-400 uppercase block mb-3 font-bold">
                Capabilities // Matrix HUD
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-[0.95] text-white">
                Technical <br />
                <span className="text-neutral-500">Ecosystem.</span>
              </h2>
            </div>

            {/* HIGH CONTRAST FIX: Boosted to text-neutral-300 with white left border */}
            <p className="text-xs text-neutral-300 uppercase tracking-widest leading-relaxed font-semibold max-w-sm border-l border-white pl-4 italic">
              Bridging structural code frameworks with complex layout
              ecosystems. Specializing in products that do not compromise on
              interactive storytelling.
            </p>

            {/* LIVE DISPLAY PANEL: Updates on hover */}
            <div className="hidden lg:block border border-neutral-800 bg-neutral-900/20 backdrop-blur-sm p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/2 rounded-full blur-2xl pointer-events-none" />

              {/* HIGH CONTRAST FIX: Boosted to text-neutral-400 */}
              <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase block mb-4 font-bold">
                // System Parameter Registry
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-3 text-white">
                    {/* HIGH CONTRAST FIX: Boosted to text-neutral-300 */}
                    <span className="text-neutral-300 font-mono text-xs font-bold">
                      0{activeIndex + 1} //
                    </span>
                    <h4 className="text-sm font-black uppercase tracking-wider italic">
                      {skills[activeIndex].category}
                    </h4>
                  </div>
                  {/* HIGH CONTRAST FIX: Boosted to text-neutral-300 */}
                  <p className="text-[11px] uppercase tracking-wide text-neutral-300 leading-normal font-bold max-w-xs">
                    {skills[activeIndex].tagline}
                  </p>

                  <div className="pt-2">
                    <div className="h-0.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="h-full bg-white"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* COLUMN 2: ASYMMETRICAL DECKS (Right Side Canvas) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {skills.map((skill, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={skill.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  // HIGH CONTRAST FIX: Inactive opacity raised from 40 to 65 for enhanced legibility
                  className={`border rounded-2xl p-8 md:p-10 transition-all duration-500 group relative overflow-hidden cursor-crosshair ${
                    isActive
                      ? "border-neutral-700 bg-neutral-900/40 shadow-2xl"
                      : "border-neutral-800 bg-transparent opacity-65 hover:opacity-100 hover:border-neutral-700"
                  }`}
                >
                  <div className="flex justify-between items-start gap-4 mb-8">
                    <div className="flex items-center gap-4">
                      {/* HIGH CONTRAST FIX: Shifted background tints */}
                      <div
                        className={`p-3 rounded-xl border transition-colors duration-500 ${
                          isActive
                            ? "border-neutral-600 text-white bg-neutral-900"
                            : "border-neutral-800 text-neutral-400"
                        }`}
                      >
                        {skill.icon}
                      </div>
                      <div>
                        {/* HIGH CONTRAST FIX: Swapped text-neutral-600 with text-neutral-400 */}
                        <span className="text-[10px] font-mono text-neutral-400 uppercase block tracking-wider font-bold">
                          Module // 0{index + 1}
                        </span>
                        <h3
                          className={`text-xl md:text-2xl font-black uppercase tracking-tight italic transition-colors duration-300 ${
                            isActive
                              ? "text-white"
                              : "text-neutral-300 group-hover:text-white"
                          }`}
                        >
                          {skill.category}
                        </h3>
                      </div>
                    </div>

                    <ArrowRight
                      size={18}
                      className={`text-neutral-500 transition-all duration-500 transform ${
                        isActive
                          ? "opacity-100 translate-x-0 rotate-0 text-white"
                          : "opacity-0 -translate-x-2 -rotate-45"
                      }`}
                    />
                  </div>

                  {/* Mobile Only Tagline Fallback - HIGH CONTRAST FIX: Set to text-neutral-300 */}
                  <p className="block lg:hidden text-[10px] uppercase tracking-wider text-neutral-300 font-bold mb-6">
                    — {skill.tagline}
                  </p>

                  {/* Child Token Pill Array Wrap Area */}
                  <div className="flex flex-wrap gap-2 relative z-10 pl-1">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        // HIGH CONTRAST FIX: Modified boundary tokens and text parameters globally across inactive/active states
                        className={`text-[10px] font-mono font-bold tracking-widest px-3.5 py-2 rounded-lg border uppercase transition-all duration-500 select-none ${
                          isActive
                            ? "bg-neutral-900 border-neutral-600 text-white hover:bg-white hover:text-black hover:scale-105 shadow-md"
                            : "bg-neutral-900/40 border-neutral-800 text-neutral-400 group-hover:text-neutral-300 group-hover:border-neutral-700"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Corner Structural Layout Brackets */}
                  <div
                    className={`absolute bottom-0 right-0 w-2 h-2 border-r border-b transition-colors duration-500 ${
                      isActive ? "border-neutral-500" : "border-transparent"
                    }`}
                  />
                  <div
                    className={`absolute top-0 left-0 w-2 h-2 border-l border-t transition-colors duration-500 ${
                      isActive ? "border-neutral-500" : "border-transparent"
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
