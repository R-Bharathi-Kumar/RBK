"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface JobItem {
  company: string;
  role: string;
  period: string;
  location: string;
  details: string[];
  path: string;
}

export default function Experience() {
  const router = useRouter();

  const jobs: JobItem[] = [
    {
      company: "LinkListCircle",
      role: "Product Engineer",
      period: "Jul 2023 – Mar 2026",
      location: "Remote",
      details: [
        "Managed complete software product lifecycles, serving as the sole bridge between design and code from wireframes to deployment.",
        "Built highly responsive web applications using Next.js, TypeScript, and Tailwind CSS with Framer Motion micro-interactions.",
        "Engineered accessible consumer interfaces for Web3 platforms by translating complex, real-time decentralized blockchain data.",
        "Seamlessly integrated high-performance frontend interfaces with robust backend systems powered by Node.js and Rust architecture.",
      ],
      path: "https://www.linklistcircle.com/",
    },
    {
      company: "10xGrowth",
      role: "Junior Web Developer",
      period: "Dec 2022 – Jun 2023",
      location: "Mumbai, India",
      details: [
        "Developed and unified custom corporate ecosystems by connecting diverse Zoho products (CRM, Desk, Mail, People) into smooth workflows.",
        "Programmed automated business logic layers and internal transactional data mutations utilizing Zoho's proprietary Deluge scripting language.",
        "Designed and deployed responsive, performance-optimized corporate websites via Zoho Sites to improve overall client digital footprints.",
      ],
      path: "https://www.10xgrowth.com/",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-neutral-950 py-32 px-6 md:px-12 text-white border-t border-neutral-900 overflow-hidden relative"
    >
      {/* Background Micro Dot Mesh for context texture consistency */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none opacity-80" />

      {/* Perfected layout framing with responsive container constraints */}
      <div className="md:container mx-auto relative z-10">
        {/* Section Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* HIGH CONTRAST METADATA FIX */}
            <h2 className="text-xs font-black uppercase tracking-[0.6em] text-neutral-400 mb-4 italic">
              Experience
            </h2>
            <h3 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none text-white">
              Career <br /> <span className="text-neutral-500">Timeline.</span>
            </h3>
          </motion.div>

          {/* HIGH CONTRAST META DESCRIPTION FIX */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-300 text-xs md:text-sm max-w-xs uppercase tracking-widest leading-relaxed italic font-bold"
          >
            Building digital products for the next generation of web and mobile
            users through visual logic and high-performance code.
          </motion.p>
        </div>

        {/* Timeline Table Grid */}
        <div className="flex flex-col">
          {jobs.map((job, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="w-full relative group border-t border-neutral-800 py-14 md:py-20 cursor-pointer text-left transition-all outline-none"
            >
              {/* Animated Background Overlay */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 -z-10" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Column 1: Period & Geography - HIGH CONTRAST TEXT BOOST */}
                <div className="md:col-span-2 space-y-1.5">
                  <span className="text-[10px] md:text-xs font-mono text-neutral-400 group-hover:text-white font-bold transition-colors italic uppercase tracking-widest block">
                    {job.period}
                  </span>
                  <span className="text-[9px] font-black text-neutral-400 group-hover:text-neutral-300 transition-colors uppercase tracking-wider block">
                    {job.location}
                  </span>
                </div>

                {/* Column 2: Entity Name & Professional Role */}
                <div className="md:col-span-6">
                  <h4 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter group-hover:translate-x-4 transition-transform duration-500 ease-out text-white">
                    {job.company}
                  </h4>
                  <div className="flex items-center gap-3 mt-4">
                    <span className="h-px w-8 bg-neutral-700 group-hover:w-12 group-hover:bg-neutral-400 transition-all duration-500" />
                    {/* HIGH CONTRAST ROLE STRINGS BOOST */}
                    <p className="text-xs md:text-sm font-black text-neutral-300 group-hover:text-white uppercase tracking-widest">
                      {job.role}
                    </p>
                  </div>
                </div>

                {/* Column 3: Multi-line Bullet Insights & Action Meta Block - HIGH CONTRAST DESCRIPTORS BOOST */}
                <div className="md:col-span-4 flex flex-col justify-between h-full pt-1.5">
                  <ul className="space-y-3.5 mb-8">
                    {job.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="text-[11px] md:text-xs text-neutral-300 group-hover:text-white leading-relaxed uppercase tracking-wider font-medium flex items-start gap-2 transition-colors duration-300"
                      >
                        {/* HIGH CONTRAST STRUCTURAL CONNECTOR PIXELS */}
                        <span className="text-neutral-500 group-hover:text-neutral-400 font-mono select-none shrink-0 font-bold">
                          └
                        </span>
                        <span className="text-balance">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.button>
          ))}

          {/* Final Border for closing line baseline alignment */}
          <div className="border-t border-neutral-800" />
        </div>
      </div>
    </section>
  );
}
