import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/ui/FadeIn";
import { Icon } from "@/components/ui/Icon";
import { TechBadge } from "@/components/ui/TechBadge";
import { journeySteps } from "@/data/journey";

export function About() {
  return (
    <Section id="a-propos" className="relative">
      <FadeIn>
        <SectionTitle
          eyebrow="À propos"
          title="Du Software Engineering à la Data Engineering"
          subtitle="Une spécialisation progressive, construite sur des bases d'ingénierie logicielle."
        />
      </FadeIn>

      <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <FadeIn className="lg:sticky lg:top-28 lg:self-start">
          <div className="flex flex-col gap-5 text-base leading-relaxed text-muted">
            <p>
              Je ne suis pas arrivé à la donnée par hasard. J&apos;ai
              d&apos;abord été développeur : des applications web à concevoir,
              des bases de données à modéliser, des APIs à maintenir en
              production. Plusieurs années à écrire du code que d&apos;autres
              allaient reprendre.
            </p>
            <p>
              C&apos;est en travaillant sur ces applications que la donnée est
              devenue le sujet principal. Les questions les plus difficiles ne
              portaient plus sur l&apos;interface, mais sur ce qui circulait
              derrière : d&apos;où viennent ces enregistrements, pourquoi ne
              sont-ils pas cohérents, comment les rendre exploitables de façon
              fiable et répétable.
            </p>
            <p>
              Je me suis donc spécialisé : Python, SQL avancé, ETL/ELT,
              orchestration avec Airflow, traitement distribué avec PySpark,
              modélisation de Data Warehouses. Une évolution naturelle, parce
              qu&apos;un pipeline de données reste avant tout un système
              logiciel : il doit être testable, reproductible et maintenable.
            </p>
            <p className="rounded-card border border-accent/25 bg-accent-soft p-5 text-foreground">
              Mon avantage n&apos;est pas d&apos;avoir appris la data.
              C&apos;est de l&apos;aborder avec les réflexes d&apos;un
              développeur qui a déjà eu du code en production.
            </p>
          </div>
        </FadeIn>

        <ol className="relative flex flex-col">
          {journeySteps.map((step, index) => {
            const isLast = index === journeySteps.length - 1;

            return (
              <li key={step.id} className="relative pl-14 sm:pl-16">
                {isLast ? null : (
                  <span
                    aria-hidden
                    className="absolute left-[19px] top-12 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-accent/40 to-border sm:left-[23px]"
                  />
                )}

                <span
                  aria-hidden
                  className="absolute left-0 top-1 inline-flex size-10 items-center justify-center rounded-xl border border-border bg-surface text-accent sm:size-12"
                >
                  <Icon name={step.icon} className="size-5" />
                </span>

                <FadeIn delay={index * 0.06} className={isLast ? "" : "pb-10"}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                    {step.label}
                  </p>
                  <h3 className="mt-1.5 text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {step.skills.map((skill) => (
                      <li key={skill}>
                        <TechBadge label={skill} size="sm" />
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
