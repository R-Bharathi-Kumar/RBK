"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, GraduationCap, Languages } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  focus?: string;
}

interface CertificationItem {
  title: string;
  issuer: string;
  link: string;
}

interface LanguageItem {
  name: string;
  proficiency: string;
}

export default function Credentials() {
  const education: EducationItem[] = [
    {
      institution: "Rashtrasant Tukadoji Maharaj Nagpur University",
      degree: "B.Tech in Artificial Intelligence",
      period: "Jan 2020 - Jun 2023",
      focus:
        "Research Focus: AI-based Video Summarization using Natural Language Processing (NLP).",
    },
    {
      institution: "Maharashtra State Board of Technical Education",
      degree: "Diploma in Computer Engineering",
      period: "Jun 2018 - Nov 2020",
    },
  ];

  const certifications: CertificationItem[] = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google / Coursera",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/GDJMQMT2CXG7",
    },
    {
      title: "React Native: The Practical Guide",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-ccbad035-df74-489f-83cf-0dc4837c53bf/",
    },
  ];

  const languages: LanguageItem[] = [
    { name: "English", proficiency: "Professional Working Proficiency" },
    { name: "Hindi", proficiency: "Full Professional Proficiency" },
    { name: "Tamil", proficiency: "Native / Proficiency in Speaking" },
  ];

  return (
    <section
      id="credentials"
      className="bg-neutral-950 py-32 px-6 md:px-12 text-white border-t border-neutral-900 overflow-hidden relative"
    >
      {/* Background Micro Dot Mesh Context Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none opacity-80" />

      <div className="md:container mx-auto relative z-10">
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-black uppercase tracking-[0.6em] text-neutral-400 mb-4 italic block">
              Background
            </span>
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
              Academic & <br />{" "}
              <span className="text-neutral-500">Credentials.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-300 text-xs md:text-sm max-w-xs uppercase tracking-widest leading-relaxed italic font-bold"
          >
            Validating practical engineering experience with deep technical
            roots and foundational knowledge systems.
          </motion.p>
        </div>

        {/* ================= SECTION CONTENT SUB-DECKS ================= */}
        <div className="space-y-28">
          {/* BLOCK A: EDUCATION SUB-SYSTEM */}
          <div>
            <div className="flex items-center gap-3 mb-8 text-neutral-400">
              <GraduationCap size={18} />
              <h3 className="text-xs font-black uppercase tracking-[0.4em]">
                01 // Academic Education
              </h3>
            </div>

            <div className="flex flex-col">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="w-full border-t border-neutral-800 py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start transition-colors duration-300 hover:bg-white/1"
                >
                  <div className="md:col-span-3">
                    <span className="text-xs font-mono text-neutral-400 font-bold tracking-wider italic uppercase">
                      {edu.period}
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <h4 className="text-xl md:text-2xl font-black uppercase italic text-white tracking-tight">
                      {edu.institution}
                    </h4>
                  </div>
                  <div className="md:col-span-4 space-y-3">
                    <p className="text-xs md:text-sm font-black text-neutral-300 uppercase tracking-widest">
                      {edu.degree}
                    </p>
                    {edu.focus && (
                      <p className="text-[11px] md:text-xs text-neutral-400 uppercase tracking-wider leading-relaxed font-bold flex items-start gap-2">
                        <span className="text-neutral-500 font-mono select-none">
                          └
                        </span>
                        <span className="text-balance">{edu.focus}</span>
                      </p>
                    )}
                  </div>
                </div>
              ))}
              <div className="border-t border-neutral-800" />
            </div>
          </div>

          {/* BLOCK B: CERTIFICATIONS ROW MATRIX */}
          <div>
            <div className="flex items-center gap-3 mb-8 text-neutral-400">
              <Award size={18} />
              <h3 className="text-xs font-black uppercase tracking-[0.4em]">
                02 // Certifications
              </h3>
            </div>

            <div className="flex flex-col">
              {certifications.map((cert, i) => (
                <a
                  key={i}
                  href={cert.link}
                  className="w-full relative group border-t border-neutral-800 py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center transition-all duration-300 hover:bg-white/1 text-left outline-none"
                >
                  <div className="md:col-span-3">
                    <span className="text-[10px] md:text-xs font-mono text-neutral-400 group-hover:text-white font-bold transition-colors uppercase tracking-widest">
                      Verified Layout
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <h4 className="text-xl md:text-2xl font-black uppercase italic text-white tracking-tight group-hover:translate-x-2 transition-transform duration-500 ease-out">
                      {cert.title}
                    </h4>
                  </div>
                  <div className="md:col-span-4 flex justify-between items-center">
                    <p className="text-xs md:text-sm font-black text-neutral-400 uppercase tracking-widest">
                      {cert.issuer}
                    </p>
                    <div className="p-1.5 rounded-full border border-neutral-800 group-hover:border-white bg-neutral-900/50 transition-all duration-300 text-neutral-400 group-hover:text-white shrink-0">
                      <ArrowUpRight
                        size={14}
                        className="group-hover:rotate-45 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </a>
              ))}
              <div className="border-t border-neutral-800" />
            </div>
          </div>

          {/* BLOCK C: LANGUAGES LAYER BLOCK */}
          <div>
            <div className="flex items-center gap-3 mb-8 text-neutral-400">
              <Languages size={18} />
              <h3 className="text-xs font-black uppercase tracking-[0.4em]">
                03 // Lingual Proficiencies
              </h3>
            </div>

            <div className="flex flex-col">
              {languages.map((lang, i) => (
                <div
                  key={i}
                  className="w-full border-t border-neutral-800 py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center transition-colors duration-300 hover:bg-white/1"
                >
                  <div className="md:col-span-3">
                    <span className="text-[10px] md:text-xs font-mono text-neutral-400 font-bold uppercase tracking-widest">
                      Language // 0{i + 1}
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <h4 className="text-xl md:text-2xl font-black uppercase italic text-white tracking-tight">
                      {lang.name}
                    </h4>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-xs md:text-sm font-black text-neutral-300 uppercase tracking-widest">
                      {lang.proficiency}
                    </p>
                  </div>
                </div>
              ))}
              <div className="border-t border-neutral-800" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
