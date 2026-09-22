"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { SectionHeader } from "./about";

type Pub = {
  year: number;
  title: string;
  authors: string;
  journal: string;
  doi: string;
};

const PUBLICATIONS: Pub[] = [
  {
    year: 2026,
    title:
      "Thiadiazole-Derived VEGFR-2 Inhibitors: From Design to Anticancer Evaluation.",
    authors:
      "Alsfouk AA, Elkaeed EB, Elkady H, Elgammal WE, Mahdy HA, Nofal A, Eissa IH, Husein DZ, Ibrahim IM, Elkotamy MS, Metwaly AM.",
    journal: "Chemical Biology & Drug Design",
    doi: "10.1111/cbdd.70280",
  },
  {
    year: 2026,
    title: "Microbial pigments as potential anti-rift valley fever virus drugs.",
    authors: "Farouk F, Ibrahim IM, Azzazy H.",
    journal: "BMC Chemistry",
    doi: "10.1186/s13065-025-01680-2",
  },
  {
    year: 2026,
    title:
      "Design, synthesis, biological evaluation and computational studies of novel phthalimides as dual COX-2/5-LOX inhibitors.",
    authors:
      "Hassan RM, Abdel-Maksoud MS, El-Manawaty MA, Ibrahim IM, Abd-Allah WH, El-Azzouny AA, Aboul-Enein MN.",
    journal: "Molecular Diversity",
    doi: "10.1007/s11030-025-11431-z",
  },
  {
    year: 2025,
    title:
      "Aotaphenazine, a rare hydrophenazine, targets topoisomerase II with anticancer efficacy: In silico to in vitro evidence.",
    authors:
      "Metwaly AM, Eissa IH, Afifi WM, Elkaeed EB, Alsfouk AA, Ibrahim IM, Abdelfattah MS.",
    journal: "PLOS One",
    doi: "10.1371/journal.pone.0338135",
  },
  {
    year: 2025,
    title:
      "Integrated Computational and Experimental Discovery of a Promising Xanthine Derivative with Anticancer Potential Targeting EGFR.",
    authors:
      "Elkaeed EB, Yousef RG, Elkady H, Al-ghulikah HA, Ibrahim IM, Soliman OA, Husein DZ, Doghish AS, Metwaly AM, Eissa IH.",
    journal: "Current Cancer Drug Targets",
    doi: "10.2174/0115680096363027250731042338",
  },
  {
    year: 2025,
    title:
      "Design, Synthesis, Biological Evaluation, and Computational Studies of Novel 1,4-Diketopiperazines as GABA Agonist.",
    authors:
      "Anwar MAEM, Mohammed ER, El Moghazy SM, Abo El Nasr NME, Elbaset MA, korany RMS, Ahmed-Farid O, Ibrahim IM, Abd-Allah WH.",
    journal: "Drug Development Research",
    doi: "10.1002/ddr.70136",
  },
  {
    year: 2025,
    title:
      "Identification of promising dipeptidyl peptidase-4 and protein tyrosine phosphatase 1B inhibitors from selected terpenoids through molecular modeling.",
    authors:
      "Ogunyemi OM, Gyebi GA, Olawale F, Ibrahim IM, Iwaloye O, Fabusiwa MM, Omowaye S, Oloyede OT, Olaiya CO.",
    journal: "Bioinformatics Advances",
    doi: "10.1093/bioadv/vbae205",
  },
  {
    year: 2025,
    title:
      "Design and synthesis of novel cyclohexanecarboxamides with anticonvulsant effect by activating Nrf2-ARE pathway.",
    authors:
      "Abd-Allah WH, Abdel-Maksoud MS, Elbaset MA, Korany RMS, Ibrahim IM, Hassan RM.",
    journal: "Bioorganic Chemistry",
    doi: "10.1016/j.bioorg.2025.108357",
  },
];

const YEARS = [2026, 2025];

export function Publications() {
  const [activeYear, setActiveYear] = useState<number | "all">("all");

  const filtered = useMemo(() => {
    if (activeYear === "all") return PUBLICATIONS;
    return PUBLICATIONS.filter((p) => p.year === activeYear);
  }, [activeYear]);

  return (
    <section
      id="publications"
      className="relative py-20 md:py-28 scroll-mt-16 bg-slate-50/60 border-y border-slate-200/60"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Publications"
          title="Recent, peer-reviewed computational & experimental work."
          description="A selection of recent papers — most of them combining the computational pipeline (docking, MD, MM-PBSA, deep learning) with experimental validation by my collaborators."
        />

        {/* Year filter */}
        <div className="mt-10 flex flex-wrap items-center gap-2">
          <FilterChip
            active={activeYear === "all"}
            onClick={() => setActiveYear("all")}
            label="All"
          />
          {YEARS.map((y) => (
            <FilterChip
              key={y}
              active={activeYear === y}
              onClick={() => setActiveYear(y)}
              label={String(y)}
            />
          ))}
          <span className="ml-auto text-xs text-slate-500">
            Showing {filtered.length} of {PUBLICATIONS.length} publications
          </span>
        </div>

        {/* List */}
        <ol className="mt-8 space-y-4">
          {filtered.map((pub, idx) => (
            <motion.li
              key={pub.doi}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="group relative p-5 sm:p-6 rounded-xl bg-white border border-slate-200/80 hover:border-emerald-300 hover:shadow-md transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex items-center gap-3 shrink-0">
                  <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-emerald-50 border border-emerald-200/60 text-emerald-600">
                    <FileText className="w-5 h-5" />
                  </span>
                  <span className="text-2xl font-semibold text-slate-300 group-hover:text-emerald-500 transition-colors tabular-nums">
                    {pub.year}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] sm:text-base font-semibold text-slate-900 leading-snug">
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-[13px] text-slate-600 leading-relaxed">
                    {pub.authors}
                  </p>
                  <div className="mt-3 flex items-center flex-wrap gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
                      {pub.journal}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      doi: {pub.doi}
                    </span>
                  </div>
                </div>

                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                  aria-label={`Open DOI ${pub.doi}`}
                >
                  DOI
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.li>
          ))}
        </ol>

        {/* Profile links */}
        <div className="mt-12 grid sm:grid-cols-2 gap-4">
          <a
            href="https://www.scopus.com/authid/detail.uri?authorId=57208274428"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-xl bg-white border border-slate-200/80 hover:border-emerald-300 hover:shadow-md transition-all flex items-center gap-4"
          >
            <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-orange-50 border border-orange-200/60 text-orange-600">
              <FileText className="w-5 h-5" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">
                Scopus Author Profile
              </p>
              <p className="text-xs text-slate-500">
                Author ID: 57208274428
              </p>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
          </a>
          <a
            href="https://www.researchgate.net/profile/Ibrahim-Ibrahim-68"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-xl bg-white border border-slate-200/80 hover:border-emerald-300 hover:shadow-md transition-all flex items-center gap-4"
          >
            <span className="flex items-center justify-center w-11 h-11 rounded-lg bg-teal-50 border border-teal-200/60 text-teal-600">
              <FileText className="w-5 h-5" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-900">
                ResearchGate Profile
              </p>
              <p className="text-xs text-slate-500">
                Full publication list &amp; reads
              </p>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
}

function FilterChip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${
        active
          ? "bg-slate-900 text-white border-slate-900"
          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
      }`}
    >
      {label}
    </button>
  );
}
