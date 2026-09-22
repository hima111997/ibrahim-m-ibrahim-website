"use client";

import { motion } from "framer-motion";
import {
  Atom,
  Boxes,
  Brain,
  Code2,
  Microscope,
  Network,
  Syringe,
  FlaskConical,
} from "lucide-react";
import { SectionHeader } from "./about";

const EXPERTISE = [
  {
    icon: Atom,
    title: "Molecular Dynamics",
    description:
      "Production, equilibration and analysis of MD trajectories in GROMACS — from system preparation to free-energy landscapes, PCA and clustering on the projected space.",
    tags: ["GROMACS", "PCA", "FEL", "Clustering"],
  },
  {
    icon: Boxes,
    title: "Molecular Docking",
    description:
      "Structure-based drug design workflow: receptor preparation, ligand optimization, docking runs and pose analysis for hit identification and lead optimization.",
    tags: ["AutoDock", "Vina", " Glide-like workflows", "Pose analysis"],
  },
  {
    icon: Brain,
    title: "Deep Learning",
    description:
      "Design and training of convolutional and transfer-learning models in TensorFlow / Keras — applied to medical imaging (COVID-19 X-ray) and hand-written recognition.",
    tags: ["TensorFlow", "Keras", "Transfer Learning", "CNNs"],
  },
  {
    icon: Code2,
    title: "Python Programming",
    description:
      "Scientific Python for data analysis, visualization and pipeline automation. I teach Python for biophysics students and have rebuilt the third-year practical syllabus around it.",
    tags: ["NumPy", "pandas", "Matplotlib", "MDAnalysis"],
  },
  {
    icon: Network,
    title: "Drug Design",
    description:
      "Integrated in-silico drug discovery — from target selection and pharmacophore modeling through to binding-free-energy calculations (gmx_MMPBSA) and amino-acid decomposition.",
    tags: ["gmx_MMPBSA", "MM-PBSA", "FEL", "Per-residue ΔG"],
  },
  {
    icon: Microscope,
    title: "Bioinformatics",
    description:
      "Sequence retrieval, alignment, structural prediction and bioinformatic workflows that complement my structure-based design work on cancer and antiviral targets.",
    tags: ["BLAST", "Structural bioinformatics", "Workflows"],
  },
  {
    icon: Syringe,
    title: "Anti-cancer & Antiviral Targets",
    description:
      "Hands-on computational studies against VEGFR-2, EGFR, topoisomerase II, COX-2/5-LOX, DPP-4 and RVFV — many of them published with experimental collaborators.",
    tags: ["VEGFR-2", "EGFR", "COX-2 / 5-LOX", "DPP-4"],
  },
  {
    icon: FlaskConical,
    title: "Teaching & Curriculum",
    description:
      "Course design and delivery in computational biophysics — including a redesigned third-year practical syllabus that introduces Python, GROMACS MD and Keras deep learning.",
    tags: ["Curriculum design", "Workshops", "YouTube"],
  },
];

export function Expertise() {
  return (
    <section
      id="expertise"
      className="relative py-20 md:py-28 scroll-mt-16 bg-slate-50/60 border-y border-slate-200/60"
    >
      <div className="absolute inset-0 bg-dots opacity-30" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Expertise"
          title="What I actually do, day to day."
          description="My work sits at the intersection of biophysics, software and teaching. The cards below map the techniques I use most often, the tools I build with, and the targets I have published on."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {EXPERTISE.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="group relative p-5 rounded-xl bg-white border border-slate-200/80 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/5 transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/60 text-emerald-600 group-hover:from-emerald-500 group-hover:to-teal-600 group-hover:text-white transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-[15px] font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                {item.description}
              </p>
              <div className="mt-3.5 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
