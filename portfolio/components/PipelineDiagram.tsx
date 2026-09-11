import type { CSSProperties } from "react";

import type { PipelineStage } from "@/types";
import { cn } from "@/lib/utils";

export function PipelineDiagram({
  stages,
  className,
}: {
  stages: PipelineStage[];
  className?: string;
}) {
  return (
    <ol className={cn("relative flex flex-col", className)}>
      {stages.map((stage, index) => {
        const isLast = index === stages.length - 1;

        return (
          <li
            key={stage.label}
            className={cn("reveal relative flex gap-4", !isLast && "pb-5")}
            style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
          >
            {isLast ? null : (
              <span
                aria-hidden
                className="absolute left-[15px] top-9 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-accent/45 to-border"
              />
            )}

            <span
              aria-hidden
              className="relative z-10 inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface font-mono text-[11px] font-medium text-accent"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="min-w-0 pt-1">
              <p className="font-mono text-sm font-medium tracking-tight">
                {stage.label}
              </p>
              {stage.detail ? (
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {stage.detail}
                </p>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
