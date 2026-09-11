import type { ProjectCategory } from "@/types";

export const categoryLabels: Record<ProjectCategory, string> = {
  "data-engineering": "Data Engineering",
  "data-analytics": "Data & Analytics",
  "software-development": "Software Engineering",
};

export const categoryBadgeClasses: Record<ProjectCategory, string> = {
  "data-engineering": "border-accent/30 bg-accent-soft text-accent",
  "data-analytics": "border-cyan/30 bg-cyan/10 text-cyan",
  "software-development": "border-border-strong bg-surface-hover text-muted",
};
