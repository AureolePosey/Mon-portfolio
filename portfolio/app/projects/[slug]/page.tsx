import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  CircleCheckBig,
  Clock,
  Lightbulb,
  Rocket,
  Target,
  TriangleAlert,
  Wrench,
} from "lucide-react";

import { PipelineDiagram } from "@/components/PipelineDiagram";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { TechBadge } from "@/components/ui/TechBadge";
import { getProjectBySlug, projects } from "@/data/projects";
import { site } from "@/data/site";
import {
  categoryBadgeClasses,
  categoryLabels,
  statusBadgeClasses,
  statusLabels,
} from "@/lib/categories";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projet introuvable" };
  }

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: `${project.title} | ${site.name}`,
      description: project.tagline,
      type: "article",
      url: `${site.siteUrl}/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage(
  props: PageProps<"/projects/[slug]">,
) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const isCompleted = project.status === "completed";

  return (
    <main>
      <section className="border-b border-border">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <Link
              href="/#projets"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden />
              Tous les projets
            </Link>
          </FadeIn>

          <FadeIn delay={0.08} className="mt-8">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={cn(
                  "rounded-pill border px-2.5 py-1 font-mono text-[11px] font-medium",
                  categoryBadgeClasses[project.category],
                )}
              >
                {categoryLabels[project.category]}
              </span>
              <span
                className={cn(
                  "rounded-pill border px-2.5 py-1 font-mono text-[11px] font-medium",
                  statusBadgeClasses[project.status],
                )}
              >
                {statusLabels[project.status]}
              </span>
              {project.period ? (
                <span className="font-mono text-[11px] text-muted">
                  {project.period}
                </span>
              ) : null}
            </div>

            <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-balance sm:text-5xl">
              {project.title}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
              {project.tagline}
            </p>
          </FadeIn>

          <FadeIn delay={0.16} className="mt-8">
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li key={technology}>
                  <TechBadge
                    label={technology}
                    variant={
                      project.category === "software-development"
                        ? "default"
                        : "accent"
                    }
                  />
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.24} className="mt-9">
            {project.github || project.demo ? (
              <div className="flex flex-wrap gap-3">
                {project.github ? (
                  <Button href={project.github}>
                    <GitHubIcon className="size-4" />
                    Code source
                  </Button>
                ) : null}
                {project.demo ? (
                  <Button href={project.demo} variant="secondary">
                    Voir la démo
                  </Button>
                ) : null}
              </div>
            ) : project.plannedRepository ? (
              <p className="inline-flex flex-wrap items-center gap-2 rounded-card border border-border bg-surface px-4 py-3 text-sm text-muted">
                <GitHubIcon className="size-4" />
                Dépôt prévu :
                <span className="font-mono text-foreground">
                  {project.plannedRepository}
                </span>
              </p>
            ) : null}
          </FadeIn>
        </Container>
      </section>

      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div className="flex flex-col gap-12">
            <FadeIn>
              <h2 className="text-xl font-semibold tracking-tight">
                Le projet
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted text-pretty">
                {project.description}
              </p>
            </FadeIn>

            <FadeIn>
              <Card className="border-border/80 p-6 sm:p-7">
                <h2 className="flex items-center gap-2.5 text-lg font-semibold tracking-tight">
                  <Target className="size-[18px] text-accent" aria-hidden />
                  Problématique
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted text-pretty">
                  {project.problem}
                </p>
              </Card>
            </FadeIn>

            {project.objectives && project.objectives.length > 0 ? (
              <FadeIn>
                <h2 className="flex items-center gap-2.5 text-xl font-semibold tracking-tight">
                  <Rocket className="size-5 text-accent" aria-hidden />
                  Objectifs techniques
                </h2>
                <ul className="mt-6 flex flex-col gap-3">
                  {project.objectives.map((objective) => (
                    <li
                      key={objective}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {objective}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ) : null}

            {project.solution ? (
              <FadeIn>
                <Card className="border-accent/25 bg-accent-soft p-6 sm:p-7">
                  <h2 className="flex items-center gap-2.5 text-lg font-semibold tracking-tight">
                    <Lightbulb
                      className="size-[18px] text-accent"
                      aria-hidden
                    />
                    Solution
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted text-pretty">
                    {project.solution}
                  </p>
                </Card>
              </FadeIn>
            ) : null}

            {project.roadmap && project.roadmap.length > 0 ? (
              <FadeIn>
                <h2 className="flex items-center gap-2.5 text-xl font-semibold tracking-tight">
                  <Clock className="size-5 text-accent" aria-hidden />
                  Étapes de réalisation
                </h2>
                <ol className="mt-6 flex flex-col gap-3">
                  {project.roadmap.map((step, index) => (
                    <li
                      key={step}
                      className="flex gap-4 text-sm leading-relaxed text-muted"
                    >
                      <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-lg border border-border bg-surface font-mono text-[11px] text-accent">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </FadeIn>
            ) : null}

            {project.screenshots.length > 0 ? (
              <FadeIn>
                <h2 className="text-xl font-semibold tracking-tight">
                  Captures d&apos;écran
                </h2>
                <ul className="mt-6 flex flex-col gap-6">
                  {project.screenshots.map((screenshot) => (
                    <li key={screenshot.src}>
                      <figure>
                        <div className="relative aspect-video overflow-hidden rounded-card border border-border bg-surface">
                          <Image
                            src={screenshot.src}
                            alt={screenshot.alt}
                            fill
                            sizes="(min-width: 1024px) 48rem, 100vw"
                            className="object-cover"
                          />
                        </div>
                        {screenshot.caption ? (
                          <figcaption className="mt-3 text-sm text-muted">
                            {screenshot.caption}
                          </figcaption>
                        ) : null}
                      </figure>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ) : null}

            {project.challenges && project.challenges.length > 0 ? (
              <FadeIn>
                <h2 className="flex items-center gap-2.5 text-xl font-semibold tracking-tight">
                  <TriangleAlert className="size-5 text-accent" aria-hidden />
                  Difficultés rencontrées
                </h2>
                <ul className="mt-6 flex flex-col gap-4">
                  {project.challenges.map((challenge) => (
                    <li
                      key={challenge}
                      className="flex gap-4 rounded-card border border-border bg-surface p-5 text-sm leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ) : null}

            {project.results && project.results.length > 0 ? (
              <FadeIn>
                <h2 className="flex items-center gap-2.5 text-xl font-semibold tracking-tight">
                  <CircleCheckBig className="size-5 text-accent" aria-hidden />
                  Résultats
                </h2>
                <ul className="mt-6 flex flex-col gap-3">
                  {project.results.map((result) => (
                    <li
                      key={result}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <CircleCheckBig
                        className="mt-0.5 size-4 shrink-0 text-accent"
                        aria-hidden
                      />
                      {result}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ) : null}

            {project.limitations && project.limitations.length > 0 ? (
              <FadeIn>
                <h2 className="flex items-center gap-2.5 text-xl font-semibold tracking-tight">
                  <TriangleAlert className="size-5 text-accent" aria-hidden />
                  Limites connues
                </h2>
                <ul className="mt-6 flex flex-col gap-3">
                  {project.limitations.map((limitation) => (
                    <li
                      key={limitation}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-[7px] size-1.5 shrink-0 rounded-full bg-muted"
                      />
                      {limitation}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ) : null}

            {project.improvements && project.improvements.length > 0 ? (
              <FadeIn>
                <h2 className="flex items-center gap-2.5 text-xl font-semibold tracking-tight">
                  <Wrench className="size-5 text-accent" aria-hidden />
                  Pistes d&apos;amélioration
                </h2>
                <ul className="mt-6 flex flex-col gap-3">
                  {project.improvements.map((improvement) => (
                    <li
                      key={improvement}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {improvement}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ) : null}
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <FadeIn>
              <Card className="p-6">
                <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {isCompleted ? "Architecture" : "Architecture prévue"}
                </h2>
                <div className="mt-6">
                  <PipelineDiagram stages={project.pipeline} />
                </div>
              </Card>
            </FadeIn>
          </aside>
        </div>

        <FadeIn className="mt-16 border-t border-border pt-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/#projets"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden />
              Tous les projets
            </Link>
            <Button href="/#contact" variant="secondary">
              Me contacter
            </Button>
          </div>
        </FadeIn>
      </Container>
    </main>
  );
}
