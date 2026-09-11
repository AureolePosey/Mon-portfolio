import { About } from "@/components/About";
import { Architectures } from "@/components/Architectures";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { GitHubSection } from "@/components/GitHubSection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <JsonLd />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Architectures />
      <Experience />
      <Education />
      <GitHubSection />
      <Contact />
    </main>
  );
}
