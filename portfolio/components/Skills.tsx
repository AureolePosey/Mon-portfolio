import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechBadge } from "@/components/ui/TechBadge";
import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <Section id="competences" className="bg-band">
      <FadeIn>
        <SectionTitle
          eyebrow="Compétences"
          title="Ma stack technique"
          subtitle="Organisée par domaine, de la construction de pipelines de données jusqu'au socle logiciel qui les soutient."
        />
      </FadeIn>

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {skillGroups.map((group, index) => (
          <FadeIn
            key={group.id}
            delay={index * 0.06}
            className={cn(group.primary && "lg:col-span-1")}
          >
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
                        Focus principal
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
                  <li key={skill}>
                    <TechBadge
                      label={skill}
                      variant={group.primary ? "accent" : "default"}
                      size="sm"
                    />
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
