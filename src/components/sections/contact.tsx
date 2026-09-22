"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Youtube,
  GraduationCap,
  FlaskConical,
  MapPin,
  Send,
} from "lucide-react";
import { SectionHeader } from "./about";

const LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "mdinsight26@gmail.com",
    href: "mailto:mdinsight26@gmail.com",
    accent: "from-emerald-50 to-teal-50 border-emerald-200/60 text-emerald-600",
  },
  {
    icon: Youtube,
    label: "YouTube",
    value: "المبرمج العربي",
    href: "https://www.youtube.com/channel/UCuYZzzPSVgM9tRWzRS9UGOA",
    accent: "from-red-50 to-orange-50 border-red-200/60 text-red-500",
  },
  {
    icon: FlaskConical,
    label: "Scopus",
    value: "Author ID 57208274428",
    href: "https://www.scopus.com/authid/detail.uri?authorId=57208274428",
    accent: "from-orange-50 to-amber-50 border-orange-200/60 text-orange-600",
  },
  {
    icon: GraduationCap,
    label: "ResearchGate",
    value: "Ibrahim Ibrahim",
    href: "https://www.researchgate.net/profile/Ibrahim-Ibrahim-68",
    accent: "from-teal-50 to-cyan-50 border-teal-200/60 text-teal-600",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 scroll-mt-16 bg-slate-50/60 border-y border-slate-200/60"
    >
      <div className="absolute inset-0 bg-dots opacity-30" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Let's talk about research, teaching or MDInsight."
          description="The fastest way to reach me is the MDInsight email below. For collaboration, supervision or workshop invitations, please use the same address — I usually respond within a day or two."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LINKS.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group p-5 rounded-xl bg-white border border-slate-200/80 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/5 hover:-translate-y-0.5 transition-all"
            >
              <span
                className={`flex items-center justify-center w-11 h-11 rounded-lg bg-gradient-to-br ${link.accent} border`}
              >
                <link.icon className="w-5 h-5" />
              </span>
              <p className="mt-4 text-xs uppercase tracking-wider text-slate-500 font-medium">
                {link.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900 break-words">
                {link.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Affiliation card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid md:grid-cols-2 gap-4"
        >
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200/60 text-emerald-600">
                <MapPin className="w-5 h-5" />
              </span>
              <h3 className="text-base font-semibold text-slate-900">
                Affiliation
              </h3>
            </div>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Biophysics Department, Faculty of Science, Cairo University, Giza,
              Egypt.
            </p>
            <p className="mt-1.5 text-sm text-slate-600">
              Assistant Lecturer — 2023 to present.
            </p>
          </div>

          <a
            href="mailto:mdinsight26@gmail.com?subject=MDInsight%20license%20inquiry"
            className="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800 hover:border-emerald-500/50 transition-colors flex flex-col"
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 glow-emerald opacity-50" aria-hidden />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                MDInsight
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">
                Get a lifetime license
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Email to inquire — every future update is delivered to you
                without additional fees, including features you request.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white">
                <Send className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                mdinsight26@gmail.com
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
