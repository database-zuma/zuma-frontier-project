import { Hero } from "@/components/sections/Hero";
import { Vision } from "@/components/sections/Vision";
import { Projects } from "@/components/sections/Projects";
import { Roadmap } from "@/components/sections/Roadmap";
import { TechStack } from "@/components/sections/TechStack";
import { FAQ } from "@/components/sections/FAQ";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageBackground } from "@/components/PageBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <PageBackground />
      <Navbar />
      <Hero />
      <Vision />
      <Projects />
      <Roadmap />
      <TechStack />
      <FAQ />
      <Footer />
    </main>
  );
}
