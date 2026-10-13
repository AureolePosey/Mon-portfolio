import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { skillGroups } from "@/data/skills";
import { skillLevelClasses, skillLevelLabels } from "@/lib/categories";
import { cn } from "@/lib/utils";
import type { SkillLevel } from "@/types";

const legend: SkillLevel[] = ["used", "learning", "exploring"];

const badgeClasses =
  "inline-flex items-center rounded-pill border px-2.5 py-1 font-mono text-[11px] font-medium tracking-tight whitespace-nowrap";

export function Skills() {
  return (
    <Section id="competences" className="bg-band">
      <FadeIn>
        <SectionTitle
          eyebrow="Compétences"
          title="Compétences techniques"
          subtitle="Chaque technologie porte son niveau réel d'utilisation, pour que vous sachiez ce que je pratique aujourd'hui et ce que je suis en train d'apprendre."
        />
      </FadeIn>

      <FadeIn delay={0.06} className="mt-7">
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {legend.map((level) => (
            <li key={level} className="flex items-center gap-2">
              <span
                aria-hidden
                className={cn(
                  "size-3 rounded-full border",
                  skillLevelClasses[level],
                )}
              />
              <span className="text-xs text-muted">
                {skillLevelLabels[level]}
              </span>
            </li>
          ))}
        </ul>
      </FadeIn>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <FadeIn key={group.id} delay={index * 0.05}>
            <Card
              className={cn(
                "h-full p-6 sm:p-7",
                group.primary && "border-accent/25",
              )}
            >
              <div className="flex items-start gap-4">
                <span
                  className={cn(
                    "inline-flex size-11 shrink-0 items-center justify-center rounded-xl border",
                    group.primary
                      ? "border-accent/30 bg-accent-soft text-accent"
                      : "border-border bg-surface-hover text-muted",
                  )}
                >
                  <Icon name={group.icon} className="size-5" />
                </span>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {group.title}
                    </h3>
                    {group.primary ? (
                      <span className="rounded-pill border border-accent/25 bg-accent-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                        DevOps
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {group.description}
                  </p>
                </div>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <span
                      title={skillLevelLabels[skill.level]}
                      className={cn(
                        badgeClasses,
                        skillLevelClasses[skill.level],
                      )}
                    >
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
