export type IconName =
  "database" | "workflow" | "cloud" | "code" | "chart" | "server" | "terminal";

export type ProjectCategory =
  "data-engineering" | "data-analytics" | "software-development";

export interface PipelineStage {
  label: string;
  detail?: string;
}

export interface Screenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  featured: boolean;
  period?: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  pipeline: PipelineStage[];
  technologies: string[];
  challenges: string[];
  results: string[];
  screenshots: Screenshot[];
  github?: string;
  demo?: string;
}

export interface DataArchitecture {
  id: string;
  title: string;
  description: string;
  useCase: string;
  stages: PipelineStage[];
}

export interface JourneyStep {
  id: string;
  label: string;
  title: string;
  description: string;
  skills: string[];
  icon: IconName;
}

export interface Repository {
  name: string;
  description: string;
  url: string;
  language: string;
  topics: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  primary: boolean;
  skills: string[];
}

export type ExperienceKind = "software" | "teaching" | "data";

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  kind: ExperienceKind;
  current: boolean;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  option?: string;
  school: string;
  location: string;
  period: string;
  level: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  url?: string;
  credentialId?: string;
  skills: string[];
}

export interface SiteConfig {
  name: string;
  initials: string;
  role: string;
  secondaryRole: string;
  stackLine: string;
  seoDescription: string;
  keywords: string[];
  heroStack: string[];
  heroDescription: string;
  location: string;
  addressLocality: string;
  addressCountry: string;
  availabilityBadge: string;
  availability: string;
  email: string;
  github: string;
  linkedin: string;
  cvPath: string;
  photoPath: string | null;
  siteUrl: string;
}
