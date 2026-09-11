import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

// CSS-only entrance animation (see .reveal in globals.css). Content stays
// visible if the animation never runs.
export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("reveal", className)}
      style={
        { "--reveal-delay": `${Math.round(delay * 1000)}ms` } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
