import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: string;
}) {
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
          <span className="font-mono text-sm text-accent">{index}</span>

          <span
            className={cn(
              "rounded-[2px] border px-2 py-[3px] font-mono text-[11px] uppercase tracking-[0.1em]",
              categoryBadgeClasses[project.category],
            )}
          >
            {categoryLabels[project.category]}
          </span>

          <span
            className={cn(
              "rounded-[2px] border px-2 py-[3px] font-mono text-[11px] uppercase tracking-[0.1em]",
              statusBadgeClasses[project.status],
            )}
          >
            {statusLabels[project.status]}
          </span>

          {isFeatured ? (
            <span className="rounded-[2px] border border-border-strong px-2 py-[3px] font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
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

        <ul className="mt-5 flex flex-wrap gap-1.5">
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

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-border pt-4 text-sm">
          <span className="inline-flex items-center gap-1.5 font-medium text-accent">
            Voir le projet
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Code source de ${project.title} sur GitHub`}
              className="relative z-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted transition-colors duration-200 hover:text-foreground"
            >
              <GitHubIcon className="size-3.5" />
              Code
            </a>
          ) : project.plannedRepository ? (
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
              Dépôt à créer
            </span>
          ) : null}
        </div>
      </div>

      {isFeatured ? (
        <div className="mt-8 shrink-0 border-t border-border pt-6 lg:mt-0 lg:w-[20rem] lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
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
