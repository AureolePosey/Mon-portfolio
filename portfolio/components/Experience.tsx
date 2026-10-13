import { Building2, GraduationCap, Terminal, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechBadge } from "@/components/ui/TechBadge";
import { experiences } from "@/data/experience";
import { cn } from "@/lib/utils";
import type { ExperienceKind } from "@/types";

const kindIcons: Record<ExperienceKind, LucideIcon> = {
  devops: Terminal,
  data: Workflow,
  software: Building2,
  teaching: GraduationCap,
};

export function Experience() {
  return (
    <Section id="parcours">
      <FadeIn>
        <SectionTitle
          index="05"
          eyebrow="Parcours"
          title="Expérience et formation"
          subtitle="Quatre ans de développement web en entreprise, un parcours d'enseignement, et aujourd'hui une formation Expert DevOps."
        />
      </FadeIn>

      <ol className="mt-14 flex flex-col">
        {experiences.map((experience, index) => {
          const KindIcon = kindIcons[experience.kind];
          const isLast = index === experiences.length - 1;
          const isHighlighted = experience.kind === "devops";

          return (
            <li
              key={experience.id}
              className={cn(
                "grid gap-x-6 gap-y-4 border-t border-border py-8 sm:grid-cols-[13rem_1fr]",
                isLast && "border-b",
              )}
            >
              <div>
                <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  <KindIcon
                    className={cn(
                      "size-4",
                      isHighlighted ? "text-accent" : "text-muted",
                    )}
                    aria-hidden
                  />
                  {experience.period}
                </p>
                {experience.current ? (
                  <span className="mt-3 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400">
                    <span
                      aria-hidden
                      className="size-1.5 rounded-full bg-emerald-500"
                    />
                    En cours
                  </span>
                ) : null}
              </div>

              <FadeIn delay={index * 0.04}>
                <h3 className="text-lg font-semibold tracking-tight">
                  {experience.role}
                </h3>

                <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
                  <span className="font-medium text-foreground">
                    {experience.company}
                  </span>
                  <span aria-hidden>·</span>
                  <span>{experience.location}</span>
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
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
                        className="mt-[9px] size-1 shrink-0 bg-accent"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {experience.technologies.map((technology) => (
                    <li key={technology}>
                      <TechBadge
                        label={technology}
                        size="sm"
                        variant={isHighlighted ? "accent" : "default"}
                      />
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
