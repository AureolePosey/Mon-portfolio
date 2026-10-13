import type { ProjectCategory, ProjectStatus, SkillLevel } from "@/types";

export const categoryLabels: Record<ProjectCategory, string> = {
  "systems-automation": "Systèmes & Automatisation",
  containerization: "Conteneurisation",
  cicd: "CI/CD & DevSecOps",
  "cloud-iac": "Cloud & Infrastructure as Code",
  "platform-engineering": "Platform Engineering",
  "data-engineering": "Data Engineering",
  "data-analytics": "Data & Analytics",
  "software-development": "Software Engineering",
};

export const categoryBadgeClasses: Record<ProjectCategory, string> = {
  "systems-automation": "border-accent/30 bg-accent-soft text-accent",
  containerization: "border-accent/30 bg-accent-soft text-accent",
  cicd: "border-accent/30 bg-accent-soft text-accent",
  "cloud-iac": "border-accent/30 bg-accent-soft text-accent",
  "platform-engineering": "border-accent/30 bg-accent-soft text-accent",
  "data-engineering": "border-cyan/30 bg-cyan/10 text-cyan",
  "data-analytics": "border-cyan/30 bg-cyan/10 text-cyan",
  "software-development": "border-border-strong bg-surface-hover text-muted",
};

export const statusLabels: Record<ProjectStatus, string> = {
  planned: "À venir",
  "in-progress": "En cours de réalisation",
  completed: "Terminé",
};

export const statusBadgeClasses: Record<ProjectStatus, string> = {
  planned: "border-border-strong bg-surface-hover text-muted",
  "in-progress": "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
  completed:
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
};

export const skillLevelLabels: Record<SkillLevel, string> = {
  used: "Utilisé dans mes projets",
  learning: "En cours d'apprentissage",
  exploring: "À explorer",
};

export const skillLevelClasses: Record<SkillLevel, string> = {
  used: "border-accent/30 bg-accent-soft text-accent",
  learning: "border-border-strong bg-surface-hover text-foreground",
  exploring: "border-border bg-surface text-muted",
};
