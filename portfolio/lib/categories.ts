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
  "in-progress": "En cours",
  completed: "Terminé",
};

export const statusBadgeClasses: Record<ProjectStatus, string> = {
  planned: "border-border-strong bg-transparent text-muted",
  "in-progress":
    "border-amber-500/40 bg-transparent text-amber-600 dark:text-amber-400",
  completed:
    "border-emerald-500/40 bg-transparent text-emerald-600 dark:text-emerald-400",
};

export const skillLevelLabels: Record<SkillLevel, string> = {
  used: "Utilisé dans mes projets",
  learning: "En cours d'apprentissage",
  exploring: "À explorer",
};

export const skillLevelShortLabels: Record<SkillLevel, string> = {
  used: "utilisé",
  learning: "apprentissage",
  exploring: "à explorer",
};

export const skillLevelTextClasses: Record<SkillLevel, string> = {
  used: "text-accent",
  learning: "text-foreground",
  exploring: "text-muted",
};

export const skillLevelDotClasses: Record<SkillLevel, string> = {
  used: "bg-accent",
  learning: "bg-foreground",
  exploring: "bg-border-strong",
};
