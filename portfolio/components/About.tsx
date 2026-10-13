import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FadeIn } from "@/components/ui/FadeIn";
import { Icon } from "@/components/ui/Icon";
import { TechBadge } from "@/components/ui/TechBadge";
import { journeySteps } from "@/data/journey";

export function About() {
  return (
    <Section id="a-propos">
      <FadeIn>
        <SectionTitle
          index="01"
          eyebrow="À propos"
          title="Du développement logiciel au DevOps Engineering"
          subtitle="Une évolution construite sur quatre ans de développement web et de mises en production."
        />
      </FadeIn>

      <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <FadeIn className="lg:sticky lg:top-28 lg:self-start">
          <div className="flex flex-col gap-5 text-base leading-relaxed text-muted">
            <p>
              J&apos;ai passé quatre ans à développer des applications web :
              concevoir des bases de données, exposer des APIs, livrer et
              maintenir du code utilisé au quotidien. Cette expérience m&apos;a
              appris à raisonner sur le cycle de vie complet d&apos;une
              application, pas seulement sur la fonctionnalité du jour.
            </p>
            <p>
              Ce sont les problèmes rencontrés après la livraison qui m&apos;ont
              orienté vers le DevOps : des environnements qui diffèrent entre le
              poste de développement et le serveur, des déploiements manuels
              fastidieux, et peu de visibilité sur ce qui tourne réellement une
              fois en production.
            </p>
            <p>
              Je suis aujourd&apos;hui en formation Expert DevOps. J&apos;y
              travaille l&apos;administration et l&apos;automatisation des
              systèmes, la conteneurisation, les pipelines d&apos;intégration et
              de déploiement continus, l&apos;Infrastructure as Code, le Cloud
              et l&apos;observabilité. Chaque brique s&apos;accompagne d&apos;un
              projet pratique, publié sur GitHub au fur et à mesure.
            </p>
            <p className="border-l-2 border-accent pl-5 text-foreground">
              Je ne viens pas au DevOps depuis l&apos;extérieur. J&apos;ai
              développé les applications qu&apos;il s&apos;agit maintenant de
              déployer et d&apos;exploiter.
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
                    className="absolute left-[19px] top-12 h-[calc(100%-2rem)] w-px bg-border sm:left-[23px]"
                  />
                )}

                <span
                  aria-hidden
                  className="absolute left-0 top-1 inline-flex size-10 items-center justify-center rounded-[3px] border border-border bg-surface text-accent sm:size-12"
                >
                  <Icon name={step.icon} className="size-5" />
                </span>

                <FadeIn delay={index * 0.05} className={isLast ? "" : "pb-10"}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                    {String(index + 1).padStart(2, "0")} / {step.label}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
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
