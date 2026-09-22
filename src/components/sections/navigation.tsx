"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  FlaskConical,
  Activity,
  PlayCircle,
  BookOpen,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about", icon: FlaskConical },
  { label: "Expertise", href: "#expertise", icon: Activity },
  { label: "MDInsight", href: "#mdinsight", icon: PlayCircle },
  { label: "Publications", href: "#publications", icon: BookOpen },
  { label: "Teaching", href: "#teaching", icon: PlayCircle },
  { label: "Contact", href: "#contact", icon: Mail },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/70 shadow-[0_4px_30px_-12px_rgba(15,23,42,0.08)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-2.5 group"
            aria-label="Ibrahim M. Ibrahim — home"
          >
            <span className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold text-sm shadow-md shadow-emerald-500/20">
              IM
              <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/20" />
            </span>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-[15px] font-semibold tracking-tight text-slate-900">
                Ibrahim M. Ibrahim
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5">
                Computational Biophysicist
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.youtube.com/channel/UCuYZzzPSVgM9tRWzRS9UGOA"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            >
              <PlayCircle className="w-4 h-4" />
              YouTube
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden overflow-hidden border-t border-slate-200/70"
            >
              <div className="py-3 grid gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100"
                  >
                    <link.icon className="w-4 h-4 text-emerald-600" />
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
