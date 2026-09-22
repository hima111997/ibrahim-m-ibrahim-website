"use client";

import { Youtube, Mail, ArrowUp } from "lucide-react";

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "MDInsight", href: "#mdinsight" },
  { label: "Publications", href: "#publications" },
  { label: "Teaching", href: "#teaching" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold text-sm">
              IM
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Ibrahim M. Ibrahim
              </p>
              <p className="text-xs text-slate-500">
                Computational Biophysicist · Cairo University
              </p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {FOOTER_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-2">
            <a
              href="https://www.youtube.com/channel/UCuYZzzPSVgM9tRWzRS9UGOA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 text-slate-600 hover:text-red-500 hover:border-red-200 transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="mailto:mdinsight26@gmail.com"
              aria-label="Email"
              className="flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-200 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="#top"
              aria-label="Back to top"
              className="flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-2 justify-between text-xs text-slate-500">
          <p>
            © {year} Ibrahim M. Ibrahim. Built with Next.js, Tailwind CSS and
            Framer Motion.
          </p>
          <p>
            Designed for deployment to GitHub Pages.
          </p>
        </div>
      </div>
    </footer>
  );
}
