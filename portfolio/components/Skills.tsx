import { FadeIn } from "@/components/ui/FadeIn";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { skillGroups } from "@/data/skills";
import {
  skillLevelDotClasses,
  skillLevelLabels,
  skillLevelShortLabels,
  skillLevelTextClasses,
} from "@/lib/categories";
import { cn } from "@/lib/utils";
import type { SkillLevel } from "@/types";

const legend: SkillLevel[] = ["used", "learning", "exploring"];

export function Skills() {
  return (
    <Section id="competences" className="bg-band">
      <FadeIn>
        <SectionTitle
          index="02"
          eyebrow="Compétences"
          title="Compétences techniques"
          subtitle="Chaque technologie porte son niveau réel d'utilisation, pour que vous sachiez ce que je pratique aujourd'hui et ce que je suis en train d'apprendre."
        />
      </FadeIn>

      <FadeIn delay={0.06} className="mt-8">
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {legend.map((level) => (
            <li key={level} className="flex items-center gap-2">
              <span
                aria-hidden
                className={cn("size-2", skillLevelDotClasses[level])}
              />
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {skillLevelLabels[level]}
              </span>
            </li>
          ))}
        </ul>
      </FadeIn>

      <div className="mt-12 grid gap-x-16 gap-y-12 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <FadeIn key={group.id} delay={index * 0.04}>
            <div className="flex items-center gap-3 border-b border-border-strong pb-3">
              <Icon
                name={group.icon}
                className={cn(
                  "size-[18px]",
                  group.primary ? "text-accent" : "text-muted",
                )}
              />
              <h3 className="text-base font-semibold tracking-tight">
                {group.title}
              </h3>
              {group.primary ? (
                <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                  DevOps
                </span>
              ) : null}
            </div>

            <p className="mt-3 text-sm leading-relaxed text-muted">
              {group.description}
            </p>

            <ul className="mt-5 flex flex-col gap-2.5">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-baseline gap-3 font-mono text-[13px]"
                >
                  <span className="shrink-0 text-foreground">{skill.name}</span>
                  <span aria-hidden className="leader" />
                  <span
                    className={cn(
                      "shrink-0 text-[11px]",
                      skillLevelTextClasses[skill.level],
                    )}
                  >
                    {skillLevelShortLabels[skill.level]}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
