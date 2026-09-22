"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  BookOpen,
  Sparkles,
  GraduationCap,
  MapPin,
} from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div
        className="absolute -top-32 -right-32 w-[480px] h-[480px] glow-emerald"
        aria-hidden
      />
      <div
        className="absolute top-1/2 -left-32 w-[420px] h-[420px] glow-emerald opacity-70"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left — text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-700 text-xs font-medium"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Computational Biophysicist · Educator · Tool Builder
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.05]"
            >
              Ibrahim M. Ibrahim
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-5 text-lg text-slate-600 leading-relaxed max-w-2xl"
            >
              I build tools and teach the methods that turn raw{" "}
              <span className="text-slate-900 font-medium">
                molecular dynamics trajectories
              </span>{" "}
              into clear, publishable insight. My work spans{" "}
              <span className="text-slate-900 font-medium">
                drug design, docking, MD simulations
              </span>{" "}
              and the deep-learning models that increasingly sit beside them.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#mdinsight"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Explore MDInsight
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCuYZzzPSVgM9tRWzRS9UGOA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-900 text-sm font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all"
              >
                <PlayCircle className="w-4 h-4 text-red-500" />
                Watch on YouTube
              </a>
              <a
                href="#publications"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-slate-700 text-sm font-medium hover:text-slate-900 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Publications
              </a>
            </motion.div>

            {/* Meta row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500"
            >
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-emerald-600" />
                M.Sc. Molecular Biophysics, Cairo University
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-600" />
                Assistant Lecturer, Faculty of Science
              </span>
            </motion.div>
          </div>

          {/* Right — stat card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div
                className="absolute -inset-3 bg-gradient-to-br from-emerald-200/40 to-teal-200/30 rounded-3xl blur-xl"
                aria-hidden
              />
              <div className="relative rounded-2xl bg-white border border-slate-200/80 shadow-xl shadow-slate-900/5 p-6 sm:p-8 overflow-hidden">
                <div
                  className="absolute inset-0 bg-dots opacity-40"
                  aria-hidden
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500 font-medium">
                        At a glance
                      </p>
                      <p className="mt-1 text-sm text-slate-700">
                        Research output &amp; teaching
                      </p>
                    </div>
                    <span className="text-[11px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium border border-emerald-200/70">
                      2026
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <Stat value="8+" label="Peer-reviewed publications" />
                    <Stat value="3" label="Degrees in biophysics" />
                    <Stat value="20+" label="Certifications &amp; courses" />
                    <Stat value="∞" label="Lifetime MDInsight license" />
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-200/70">
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-medium mb-2.5">
                      Currently building
                    </p>
                    <a
                      href="#mdinsight"
                      className="group flex items-center justify-between p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-9 h-9 rounded-md bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-xs font-bold">
                          MD
                        </span>
                        <div>
                          <p className="text-sm font-medium text-slate-900">
                            MDInsight
                          </p>
                          <p className="text-xs text-slate-500">
                            GUI for GROMACS trajectory analysis
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/60">
      <p className="text-2xl font-semibold tracking-tight text-slate-900">
        {value}
      </p>
      <p
        className="mt-1 text-xs text-slate-500 leading-snug"
        dangerouslySetInnerHTML={{ __html: label }}
      />
    </div>
  );
}
