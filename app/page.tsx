import { Hero } from "@/components/sections/Hero";
import { Vision } from "@/components/sections/Vision";
import { Projects } from "@/components/sections/Projects";
import { Impact } from "@/components/sections/Impact";
import { Roadmap } from "@/components/sections/Roadmap";
import { TechStack } from "@/components/sections/TechStack";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Vision />
      <Projects />
      <Impact />
      <Roadmap />
      <TechStack />
      <Footer />
    </main>
  );
}
