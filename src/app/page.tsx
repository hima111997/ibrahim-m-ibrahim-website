import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Expertise } from "@/components/sections/expertise";
import { MDInsight } from "@/components/sections/mdinsight";
import { Publications } from "@/components/sections/publications";
import { Teaching } from "@/components/sections/teaching";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <About />
        <Expertise />
        <MDInsight />
        <Publications />
        <Teaching />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
