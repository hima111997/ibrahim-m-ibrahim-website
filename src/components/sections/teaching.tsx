"use client";

import { motion } from "framer-motion";
import { PlayCircle, ArrowUpRight, Youtube, BookOpen } from "lucide-react";
import { SectionHeader } from "./about";

const TOPICS = [
  "Python basics",
  "Molecular docking",
  "GROMACS MD simulations",
  "Deep learning for biophysics",
  "Trajectory analysis (with MDInsight)",
];

export function Teaching() {
  return (
    <section id="teaching" className="relative py-20 md:py-28 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Teaching"
          title="Open, Arabic-language teaching for the next biophysicist."
          description="I run a YouTube channel aimed at students and researchers who are new to structural bioinformatics — covering Python from scratch and then building up to docking, MD simulations and deep-learning workflows."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          {/* Featured channel card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-7 sm:p-9 h-full">
              <div className="absolute -top-32 -right-32 w-80 h-80 glow-emerald opacity-50" aria-hidden />
              <div className="absolute inset-0 bg-dots opacity-10" aria-hidden />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400">
                    <Youtube className="w-6 h-6" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-emerald-400 font-medium">
                      YouTube Channel
                    </p>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mt-0.5">
                      المبرمج العربي
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-slate-300 leading-relaxed">
                  A channel dedicated to helping students and researchers who
                  are new to the field of structural bioinformatics. We start
                  from Python fundamentals and work our way up to molecular
                  dynamics, docking, and the analysis workflows used in modern
                  computational drug design.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {TOPICS.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-200 text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="https://www.youtube.com/channel/UCuYZzzPSVgM9tRWzRS9UGOA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition-colors"
                >
                  <PlayCircle className="w-4 h-4 text-red-500" />
                  Visit the channel
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Featured video */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-5"
          >
            <div className="h-full flex flex-col rounded-2xl bg-white border border-slate-200/80 shadow-sm overflow-hidden">
              <div className="relative aspect-video bg-slate-900">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/ARovN_olZeg"
                  title="MDInsight — featured video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                  <BookOpen className="w-3.5 h-3.5" />
                  Featured tutorial
                </div>
                <h4 className="mt-2 text-base font-semibold text-slate-900">
                  MDInsight — full demo
                </h4>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  Watch how MDInsight turns a GROMACS trajectory into
                  publication-ready plots — RMSD, RMSF, Rg, SASA, H-bonds, PCA,
                  clustering and the FEL.
                </p>
                <a
                  href="https://www.youtube.com/watch?v=ARovN_olZeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 hover:text-emerald-700 transition-colors"
                >
                  Open on YouTube
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Curriculum note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 p-6 sm:p-7 rounded-2xl bg-emerald-50/60 border border-emerald-200/70"
        >
          <p className="text-xs uppercase tracking-wider text-emerald-700 font-medium">
            Curriculum design
          </p>
          <p className="mt-2 text-[15px] text-slate-700 leading-relaxed">
            At Cairo University, I redesigned the third-year practical lab to
            include two sessions on Python fundamentals, one session on
            molecular dynamics simulation using GROMACS, and one session on the
            basics of deep learning with Keras and TensorFlow — so graduates
            leave with working knowledge of the tools actually used in modern
            computational biophysics and bioinformatics.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
