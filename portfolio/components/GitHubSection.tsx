import { ArrowUpRight } from "lucide-react";

import { GitHubIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechBadge } from "@/components/ui/TechBadge";
import { repositories } from "@/data/repositories";
import { site } from "@/data/site";

export function GitHubSection() {
  return (
    <Section id="github">
      <FadeIn>
        <SectionTitle
          eyebrow="GitHub"
          title="Explore my work"
          subtitle="Retrouvez mes projets et expérimentations techniques sur GitHub."
        />
      </FadeIn>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {repositories.map((repository, index) => (
          <FadeIn key={repository.name} delay={index * 0.06}>
            <Card interactive className="group relative h-full p-6">
              <div className="flex items-start gap-3">
                <GitHubIcon className="mt-0.5 size-4 shrink-0 text-muted" />
                <h3 className="min-w-0 font-mono text-sm font-medium tracking-tight">
                  <a
                    href={repository.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="after:absolute after:inset-0 after:content-[''] group-hover:text-accent"
                  >
                    {repository.name}
                  </a>
                </h3>
                <ArrowUpRight className="ml-auto size-4 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {repository.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted">
                  <span aria-hidden className="size-2 rounded-full bg-accent" />
                  {repository.language}
                </span>
                {repository.topics.slice(0, 3).map((topic) => (
                  <TechBadge key={topic} label={topic} size="sm" />
                ))}
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.12} className="mt-10 flex justify-center">
        <Button href={site.github} variant="secondary" size="lg">
          <GitHubIcon className="size-4" />
          Voir mon GitHub
          <ArrowUpRight className="size-4" aria-hidden />
        </Button>
      </FadeIn>
    </Section>
  );
}
