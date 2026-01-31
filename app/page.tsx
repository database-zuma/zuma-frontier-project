import { Hero } from "@/components/sections/Hero";
import { Vision } from "@/components/sections/Vision";
import { Projects } from "@/components/sections/Projects";
import { Impact } from "@/components/sections/Impact";
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
      <Footer />
    </main>
  );
}
