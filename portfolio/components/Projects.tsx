import { ProjectCard } from "@/components/ProjectCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { dataProjects, devopsProjects } from "@/data/projects";

function position(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function Projects() {
  return (
    <Section id="projets">
      <FadeIn>
        <SectionTitle
          index="03"
          eyebrow="Projets"
          title="Projets DevOps"
          subtitle="Les projets que je construis pendant ma formation, du serveur Linux automatisé à la plateforme Kubernetes. Le statut de chacun est indiqué sans enjolivure."
        />
      </FadeIn>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {devopsProjects.map((project, index) => (
          <FadeIn
            key={project.slug}
            delay={Math.min(index, 3) * 0.05}
            className={project.featured ? "lg:col-span-2" : ""}
          >
            <ProjectCard project={project} index={position(index)} />
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-20">
        <SectionTitle
          eyebrow="Également"
          title="Projets Data Engineering"
          subtitle="Des pipelines de données réalisés pendant ma spécialisation data. Ils restent utiles ici : ce sont eux que j'industrialiserai dans le projet Kubernetes."
        />
      </FadeIn>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {dataProjects.map((project, index) => (
          <FadeIn key={project.slug} delay={Math.min(index, 3) * 0.05}>
            <ProjectCard project={project} index={position(index)} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
