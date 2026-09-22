"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Calendar } from "lucide-react";

const TIMELINE = [
  {
    period: "2023 — Present",
    title: "Assistant Lecturer",
    org: "Biophysics Department, Faculty of Science, Cairo University",
    icon: Briefcase,
    accent: "from-emerald-500 to-teal-600",
  },
  {
    period: "2021 — 2023",
    title: "Demonstrator",
    org: "Biophysics Department, Faculty of Science, Cairo University",
    icon: Briefcase,
    accent: "from-slate-500 to-slate-700",
  },
  {
    period: "2020 — 2021",
    title: "Researcher",
    org: "National Cancer Institute (NCI), Egypt",
    icon: Briefcase,
    accent: "from-slate-500 to-slate-700",
  },
  {
    period: "2021 — 2023",
    title: "M.Sc. in Molecular Biophysics",
    org: "Faculty of Science, Cairo University",
    icon: GraduationCap,
    accent: "from-emerald-500 to-teal-600",
  },
  {
    period: "2015 — 2019",
    title: "B.Sc. in Biophysics (Excellent with Honor, GPA 4.1/5.0)",
    org: "Faculty of Science, Cairo University",
    icon: GraduationCap,
    accent: "from-emerald-500 to-teal-600",
  },
];

const TRAININGS = [
  "National Institute of Laser Science (2018)",
  "Research Institute of Ophthalmology (2018)",
  "Egyptian Atomic Energy Authority (2018)",
];

const LANGUAGES = [
  { label: "English", detail: "IELTS 7.5 · Duolingo 140" },
  { label: "Arabic", detail: "Native" },
];

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="About"
          title="A biophysicist who codes the tools other biophysicists use."
          description="My path has moved from undergraduate biophysics through cancer research into molecular dynamics and machine learning — always at the point where rigorous biophysics meets practical, reproducible code."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-10">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200/70">
                  <Award className="w-5 h-5" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">
                  Profile
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                I am an Assistant Lecturer in the Biophysics Department at
                Cairo University, where my research focuses on{" "}
                <span className="text-slate-900 font-medium">
                  computational drug design
                </span>
                ,{" "}
                <span className="text-slate-900 font-medium">
                  molecular dynamics simulations
                </span>{" "}
                and the integration of deep learning into structural
                bioinformatics workflows. Much of my work has centered on
                targets such as VEGFR-2, EGFR, COX-2, 5-LOX and DPP-4 — bringing
                compounds from <em>in silico</em> design through to biological
                evaluation with my collaborators.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed text-[15px]">
                Beyond research, I run a YouTube channel teaching Python and
                computational biophysics in Arabic, and I am the developer of{" "}
                <span className="text-slate-900 font-medium">MDInsight</span> —
                a GUI that simplifies GROMACS trajectory analysis for the
                community.
              </p>

              <div className="mt-6 pt-5 border-t border-slate-200/70 grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-medium mb-2">
                    Languages
                  </p>
                  <ul className="space-y-1.5">
                    {LANGUAGES.map((l) => (
                      <li key={l.label} className="text-sm">
                        <span className="font-medium text-slate-900">
                          {l.label}
                        </span>
                        <span className="text-slate-500"> — {l.detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-medium mb-2">
                    Early training
                  </p>
                  <ul className="space-y-1.5">
                    {TRAININGS.map((t) => (
                      <li
                        key={t}
                        className="text-sm text-slate-600 leading-snug"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <div className="relative pl-6 sm:pl-8">
              <div className="absolute left-2 top-1 bottom-1 w-px bg-gradient-to-b from-emerald-300 via-slate-200 to-transparent" />
              <ul className="space-y-5">
                {TIMELINE.map((item) => (
                  <li key={item.title + item.period} className="relative">
                    <span
                      className={`absolute -left-[22px] sm:-left-[26px] top-1.5 w-3.5 h-3.5 rounded-full bg-gradient-to-br ${item.accent} ring-4 ring-white`}
                    />
                    <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/70 hover:border-slate-300 transition-colors">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </div>
                      <h4 className="mt-1.5 text-[15px] font-semibold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-sm text-slate-600">{item.org}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={
        align === "center"
          ? "max-w-3xl mx-auto text-center"
          : "max-w-3xl"
      }
    >
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-700 text-xs font-medium ${align === "center" ? "mx-auto" : ""}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] sm:text-base text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
