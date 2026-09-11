import { Building2, GraduationCap, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechBadge } from "@/components/ui/TechBadge";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";
import type { ExperienceKind } from "@/types";

const kindIcons: Record<ExperienceKind, LucideIcon> = {
  data: Workflow,
  software: Building2,
  teaching: GraduationCap,
};

export function Experience() {
  return (
    <Section id="parcours">
      <FadeIn>
        <SectionTitle
          eyebrow="Parcours"
          title="Expérience professionnelle"
          subtitle="Du développement d'applications en production à la construction de pipelines de données."
        />
      </FadeIn>

      <ol className="mt-14 flex flex-col">
        {experiences.map((experience, index) => {
          const KindIcon = kindIcons[experience.kind];
          const isLast = index === experiences.length - 1;
          const isData = experience.kind === "data";

          return (
            <li key={experience.id} className="relative pl-14 sm:pl-16">
              {isLast ? null : (
                <span
                  aria-hidden
                  className="absolute left-[19px] top-12 h-[calc(100%-2rem)] w-px bg-border sm:left-[23px]"
                />
              )}

              <span
                aria-hidden
                className={cn(
                  "absolute left-0 top-1 inline-flex size-10 items-center justify-center rounded-xl border sm:size-12",
                  isData
                    ? "border-accent/30 bg-accent-soft text-accent"
                    : "border-border bg-surface text-muted",
                )}
              >
                <KindIcon className="size-5" />
              </span>

              <FadeIn delay={index * 0.06} className={isLast ? "" : "pb-8"}>
                <Card className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {experience.role}
                    </h3>
                    {experience.current ? (
                      <span className="rounded-pill border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400">
                        En cours
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
                    <span className="font-medium text-foreground">
                      {experience.company}
                    </span>
                    <span aria-hidden>·</span>
                    <span>{experience.location}</span>
                    <span aria-hidden>·</span>
                    <span className="font-mono text-xs">
                      {experience.period}
                    </span>
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {experience.summary}
                  </p>

                  <ul className="mt-5 flex flex-col gap-2.5">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden
                          className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <li key={technology}>
                        <TechBadge
                          label={technology}
                          size="sm"
                          variant={isData ? "accent" : "default"}
                        />
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeIn>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
