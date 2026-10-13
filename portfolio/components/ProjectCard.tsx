import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";

import { PipelineDiagram } from "@/components/PipelineDiagram";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import { Card } from "@/components/ui/Card";
import { TechBadge } from "@/components/ui/TechBadge";
import {
  categoryBadgeClasses,
  categoryLabels,
  statusBadgeClasses,
  statusLabels,
} from "@/lib/categories";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  const isFeatured = project.featured;
  const isCompleted = project.status === "completed";

  return (
    <Card
      interactive
      className={cn(
        "group relative flex h-full flex-col p-6 sm:p-7",
        isFeatured && "lg:flex-row lg:gap-10 lg:p-8",
      )}
    >
      <div className={cn("flex flex-1 flex-col", isFeatured && "lg:max-w-xl")}>
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

          {isFeatured ? (
            <span className="inline-flex items-center gap-1.5 rounded-pill border border-border bg-surface-hover px-2.5 py-1 font-mono text-[11px] font-medium text-muted">
              <Star className="size-3" aria-hidden />
              Projet phare
            </span>
          ) : null}

          {project.period ? (
            <span className="ml-auto font-mono text-[11px] text-muted">
              {project.period}
            </span>
          ) : null}
        </div>

        <h3
          className={cn(
            "mt-4 font-semibold tracking-tight",
            isFeatured ? "text-2xl sm:text-3xl" : "text-xl",
          )}
        >
          {/* The ::after overlay makes the whole card clickable without nesting links. */}
          <Link
            href={`/projects/${project.slug}`}
            className="after:absolute after:inset-0 after:content-[''] group-hover:text-accent"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted text-pretty">
          {project.tagline}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, isFeatured ? 8 : 5).map((tech) => (
            <li key={tech}>
              <TechBadge
                label={tech}
                size="sm"
                variant={
                  project.category === "software-development"
                    ? "default"
                    : "accent"
                }
              />
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
            Voir le projet
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Code source de ${project.title} sur GitHub`}
              className="relative z-10 inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted transition-colors duration-200 hover:border-border-strong hover:text-foreground"
            >
              <GitHubIcon className="size-4" />
            </a>
          ) : project.plannedRepository ? (
            <span className="font-mono text-[11px] text-muted">
              Dépôt à créer
            </span>
          ) : null}
        </div>
      </div>

      {isFeatured ? (
        <div className="mt-8 shrink-0 rounded-card border border-border bg-background/60 p-6 lg:mt-0 lg:w-[22rem]">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {isCompleted ? "Architecture" : "Architecture prévue"}
          </p>
          <PipelineDiagram
            stages={project.pipeline.map(({ label }) => ({ label }))}
          />
        </div>
      ) : null}
    </Card>
  );
}
