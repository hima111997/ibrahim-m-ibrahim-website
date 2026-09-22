import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ibrahim M. Ibrahim — Computational Biophysicist",
  description:
    "Ibrahim Mohamed Ibrahim — Assistant Lecturer in Molecular Biophysics at Cairo University. Researcher in computational biophysics, molecular dynamics, drug design, and creator of MDInsight. Python & computational biophysics educator.",
  keywords: [
    "Ibrahim Ibrahim",
    "Computational Biophysics",
    "Molecular Dynamics",
    "GROMACS",
    "MDInsight",
    "Drug Design",
    "Docking",
    "PCA",
    "Python",
    "Cairo University",
    "Biophysics",
  ],
  authors: [{ name: "Ibrahim M. Ibrahim" }],
  openGraph: {
    title: "Ibrahim M. Ibrahim — Computational Biophysicist",
    description:
      "Researcher in computational biophysics, molecular dynamics, drug design, and creator of MDInsight — a GUI for GROMACS trajectory analysis.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibrahim M. Ibrahim — Computational Biophysicist",
    description:
      "Researcher in computational biophysics, molecular dynamics, drug design, and creator of MDInsight.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
