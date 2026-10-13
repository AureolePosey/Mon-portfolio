import { ArrowUpRight } from "lucide-react";

import { GitHubIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { repositories } from "@/data/repositories";
import { site } from "@/data/site";

export function GitHubSection() {
  return (
    <Section id="github">
      <FadeIn>
        <SectionTitle
          index="07"
          eyebrow="GitHub"
          title="Le code, en accès libre"
          subtitle="Les dépôts publics correspondant à mes projets réalisés. Les projets DevOps viendront s'y ajouter au fur et à mesure."
        />
      </FadeIn>

      <ul className="mt-12 flex flex-col">
        {repositories.map((repository, index) => (
          <li key={repository.name} className="border-t border-border">
            <FadeIn delay={index * 0.04}>
              <a
                href={repository.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-x-8 gap-y-2 py-6 sm:grid-cols-[1fr_auto]"
              >
                <div>
                  <p className="flex items-center gap-2.5 font-mono text-sm text-foreground transition-colors duration-200 group-hover:text-accent">
                    <GitHubIcon className="size-4 shrink-0 text-muted" />
                    {repository.name}
                    <ArrowUpRight className="size-4 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {repository.description}
                  </p>
                </div>

                <p className="flex items-center gap-2 self-start font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:justify-end">
                  <span aria-hidden className="size-1.5 bg-accent" />
                  {repository.language}
                </p>
              </a>
            </FadeIn>
          </li>
        ))}
      </ul>

      <FadeIn delay={0.1} className="mt-10 border-t border-border pt-10">
        <Button href={site.github} variant="secondary">
          <GitHubIcon className="size-4" />
          Voir tous mes dépôts
          <ArrowUpRight className="size-4" aria-hidden />
        </Button>
      </FadeIn>
    </Section>
  );
}
