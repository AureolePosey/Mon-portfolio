"use client";

import { useState } from "react";
import { Lightbulb } from "lucide-react";

import { PipelineDiagram } from "@/components/PipelineDiagram";
import { Card } from "@/components/ui/Card";
import { architectures } from "@/data/architectures";
import { cn } from "@/lib/utils";

export function ArchitectureTabs() {
  const [activeId, setActiveId] = useState(architectures[0].id);

  const active =
    architectures.find((architecture) => architecture.id === activeId) ??
    architectures[0];

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
      return;
    }

    event.preventDefault();
    const offset = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex =
      (index + offset + architectures.length) % architectures.length;

    setActiveId(architectures[nextIndex].id);
    document.getElementById(`tab-${architectures[nextIndex].id}`)?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Architectures DevOps"
        className="flex flex-wrap gap-2"
      >
        {architectures.map((architecture, index) => {
          const isActive = architecture.id === active.id;

          return (
            <button
              key={architecture.id}
              id={`tab-${architecture.id}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${architecture.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveId(architecture.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={cn(
                "rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors duration-200",
                isActive
                  ? "border-accent/30 bg-accent-soft text-accent"
                  : "border-border bg-surface text-muted hover:border-border-strong hover:text-foreground",
              )}
            >
              {architecture.title}
            </button>
          );
        })}
      </div>

      <div
        key={active.id}
        id={`panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${active.id}`}
        className="reveal mt-6"
      >
        <Card className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-semibold tracking-tight">
                {active.title}
              </h3>
              {active.planned ? (
                <span className="rounded-pill border border-border-strong bg-surface-hover px-2.5 py-1 font-mono text-[11px] font-medium text-muted">
                  Architecture prévue
                </span>
              ) : null}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {active.description}
            </p>

            <div className="mt-6 flex gap-3 rounded-card border border-border bg-background/60 p-4">
              <Lightbulb className="size-4 shrink-0 text-accent" aria-hidden />
              <p className="text-sm leading-relaxed text-muted">
                <span className="font-medium text-foreground">
                  Ce que ça résout :{" "}
                </span>
                {active.useCase}
              </p>
            </div>
          </div>

          <div className="rounded-card border border-border bg-background/60 p-6">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              Flux
            </p>
            <PipelineDiagram stages={active.stages} />
          </div>
        </Card>
      </div>
    </div>
  );
}
