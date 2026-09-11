import { ProjectCard } from "@/components/ProjectCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projets">
      <FadeIn>
        <SectionTitle
          eyebrow="Projets"
          title="Featured Projects"
          subtitle="Une sélection de projets illustrant mes compétences en Data Engineering et Software Development."
        />
      </FadeIn>

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn
            key={project.slug}
            delay={Math.min(index, 3) * 0.06}
            className={project.featured ? "lg:col-span-2" : ""}
          >
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
