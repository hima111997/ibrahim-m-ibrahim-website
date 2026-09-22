"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Activity,
  Circle,
  Waves,
  GitFork,
  Move3d,
  ScatterChart,
  Layers,
  TrendingUp,
  Mountain,
  Boxes,
  Table2,
  Timer,
  Save,
  MonitorSmartphone,
  RefreshCw,
  Infinity as InfinityIcon,
  Mail,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { SectionHeader } from "./about";

const BUILT_IN = [
  { icon: LineChart, name: "RMSD", desc: "Root-mean-square deviation vs time" },
  { icon: Activity, name: "RMSF", desc: "Per-residue fluctuation" },
  { icon: Circle, name: "Radius of Gyration", desc: "Compactness of the system" },
  { icon: Waves, name: "SASA", desc: "Solvent-accessible surface area" },
  { icon: GitFork, name: "H-bonds", desc: "Hydrogen-bond number change" },
  { icon: Move3d, name: "COM separation", desc: "Center-of-mass distance over time" },
  { icon: ScatterChart, name: "PCA", desc: "Principal-component projection" },
  { icon: Layers, name: "Clustering", desc: "Clustering on the PCA space" },
  { icon: TrendingUp, name: "Porcupine plot", desc: "Mode-1 eigenvector visualization" },
];

const EXTERNAL = [
  {
    icon: Mountain,
    name: "Free Energy Landscape (FEL)",
    desc: "Plotted from gmx sham output — typically projected onto the top-2 PCs or Rg vs RMSD.",
  },
  {
    icon: Boxes,
    name: "gmx_MMPBSA — components",
    desc: "Energy components broken down per term (vdW, electrostatic, polar, non-polar).",
  },
  {
    icon: Table2,
    name: "Per-residue decomposition (average)",
    desc: "Average contribution of each amino acid to the binding free energy.",
  },
  {
    icon: Timer,
    name: "Per-residue decomposition (time)",
    desc: "Per-residue ΔG evolving through the simulation window.",
  },
  {
    icon: TrendingUp,
    name: "ΔG with time",
    desc: "Binding-free-energy trajectory. When entropy is calculated, the binding energy is added to the plot.",
  },
];

const BENEFITS = [
  {
    icon: Save,
    title: "Save config between runs",
    desc: "Settings persist across sessions — no re-configuring parameters each time you load a new system.",
  },
  {
    icon: Layers,
    title: "Multi-system & multi-replica",
    desc: "Run every analysis for a single system, or batch-analyse multiple systems — each with one or more replicas.",
  },
  {
    icon: MonitorSmartphone,
    title: "Windows & Linux",
    desc: "Native, cross-platform GUI. Use it on the workstation you already have.",
  },
  {
    icon: InfinityIcon,
    title: "Lifetime license",
    desc: "Pay once. Every future update and every feature you request is delivered to you with no additional fees.",
  },
];

export function MDInsight() {
  return (
    <section
      id="mdinsight"
      className="relative py-20 md:py-28 scroll-mt-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/30 to-white" aria-hidden />
      <div className="absolute top-0 right-0 w-[520px] h-[520px] glow-emerald opacity-60" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <SectionHeader
          eyebrow="Featured Software"
          title="MDInsight — GROMACS trajectory analysis, made visual."
          description="A desktop GUI I designed to remove the friction from analysing MD trajectories. Load your systems, pick the analysis, get publication-grade plots — for a single trajectory or a whole campaign of replicas."
        />

        {/* Hero card with video */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 grid lg:grid-cols-12 gap-6"
        >
          {/* Video */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-900/5 bg-slate-900 aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/ARovN_olZeg"
                title="MDInsight — overview & demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-sm text-slate-500 flex items-center gap-2">
              <ArrowUpRight className="w-3.5 h-3.5" />
              Watch the full demo on YouTube — every analysis, run end-to-end.
            </p>
          </div>

          {/* Side card — quick spec */}
          <div className="lg:col-span-5">
            <div className="h-full p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold text-base shadow-md shadow-emerald-500/30">
                  MD
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    MDInsight
                  </h3>
                  <p className="text-xs text-slate-500">
                    Desktop GUI · GROMACS analysis
                  </p>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5 text-sm">
                {[
                  "One-click RMSD / RMSF / Rg / SASA / H-bond / COM",
                  "PCA, clustering on PC space & porcupine plots",
                  "FEL from gmx sham, full gmx_MMPBSA parsing",
                  "Multi-system, multi-replica batches",
                  "Windows + Linux native builds",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/70">
                  <p className="text-xs text-emerald-800 font-medium">
                    Lifetime license
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    Pay once — every future update and every feature you
                    request is delivered at no extra cost.
                  </p>
                </div>
                <a
                  href="mailto:mdinsight26@gmail.com?subject=MDInsight%20license%20inquiry"
                  className="mt-4 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Get MDInsight — mdinsight26@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Built-in analyses */}
        <div className="mt-20">
          <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-emerald-700 font-medium">
                Built-in analyses
              </p>
              <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-slate-900">
                Everything you need from a GROMACS trajectory — out of the box.
              </h3>
            </div>
            <span className="text-sm text-slate-500">
              No external tools required
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {BUILT_IN.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                className="group flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/70 hover:border-emerald-300 hover:shadow-md hover:shadow-emerald-900/5 transition-all"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200/60 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-colors shrink-0">
                  <item.icon className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* External-tool integrations */}
        <div className="mt-16">
          <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500 font-medium">
                Integrated with GROMACS &amp; gmx_MMPBSA
              </p>
              <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-slate-900">
                Visualise the heavy analyses you already run.
              </h3>
            </div>
            <span className="text-sm text-slate-500">
              Plots from gmx sham &amp; gmx_MMPBSA output
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EXTERNAL.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-colors"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <item.icon className="w-5 h-5" />
                </span>
                <h4 className="mt-3.5 text-sm font-semibold text-white">
                  {item.name}
                </h4>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-wider text-emerald-700 font-medium">
              Why MDInsight
            </p>
            <h3 className="mt-1 text-2xl font-semibold text-slate-900">
              Built for the way MD projects actually run.
            </h3>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BENEFITS.map((b, idx) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-5 rounded-xl bg-white border border-slate-200/80 hover:shadow-md transition-shadow"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200/60 text-emerald-600">
                  <b.icon className="w-5 h-5" />
                </span>
                <h4 className="mt-3.5 text-sm font-semibold text-slate-900">
                  {b.title}
                </h4>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-10 text-center"
        >
          <div className="absolute -top-20 -right-20 w-72 h-72 glow-emerald opacity-50" aria-hidden />
          <div className="absolute inset-0 bg-dots opacity-10" aria-hidden />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
              <RefreshCw className="w-3.5 h-3.5" />
              Lifetime license · free updates · feature requests welcome
            </div>
            <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-white">
              Ready to stop fighting GROMACS output files?
            </h3>
            <p className="mt-3 text-slate-300 max-w-xl mx-auto">
              MDInsight is available for a small one-time fee. Email to get a
              license, and you will receive every future update — including
              features you ask for — at no additional cost.
            </p>
            <a
              href="mailto:mdinsight26@gmail.com?subject=MDInsight%20license%20inquiry"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition-colors"
            >
              <Mail className="w-4 h-4" />
              mdinsight26@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
