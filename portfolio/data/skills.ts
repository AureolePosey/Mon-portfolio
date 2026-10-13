import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "systems-automation",
    title: "Systèmes & Automatisation",
    description:
      "Administration de serveurs Linux et automatisation des tâches récurrentes.",
    icon: "terminal",
    primary: true,
    skills: [
      { name: "Linux", level: "used" },
      { name: "Ubuntu", level: "used" },
      { name: "Bash", level: "learning" },
      { name: "SSH", level: "learning" },
      { name: "Nginx", level: "learning" },
      { name: "UFW", level: "exploring" },
      { name: "cron", level: "learning" },
    ],
  },
  {
    id: "containerization",
    title: "Conteneurisation & Orchestration",
    description:
      "Empaquetage des applications et exécution reproductible d'un environnement à l'autre.",
    icon: "container",
    primary: true,
    skills: [
      { name: "Docker", level: "learning" },
      { name: "Docker Compose", level: "learning" },
      { name: "Kubernetes", level: "exploring" },
      { name: "Helm", level: "exploring" },
    ],
  },
  {
    id: "cicd",
    title: "CI/CD & DevSecOps",
    description:
      "Automatisation des tests, des contrôles de sécurité et de la livraison.",
    icon: "workflow",
    primary: true,
    skills: [
      { name: "Git", level: "used" },
      { name: "GitHub", level: "used" },
      { name: "GitHub Actions", level: "used" },
      { name: "GitHub Container Registry", level: "exploring" },
      { name: "Trivy", level: "exploring" },
    ],
  },
  {
    id: "infrastructure-as-code",
    title: "Infrastructure as Code",
    description:
      "Description de l'infrastructure et de la configuration dans du code versionné.",
    icon: "server",
    primary: true,
    skills: [
      { name: "Terraform", level: "exploring" },
      { name: "Ansible", level: "exploring" },
    ],
  },
  {
    id: "cloud-observability",
    title: "Cloud & Observabilité",
    description:
      "Ressources Cloud, supervision des services et lecture des métriques.",
    icon: "cloud",
    primary: true,
    skills: [
      { name: "Microsoft Azure", level: "exploring" },
      { name: "Virtual Networks", level: "exploring" },
      { name: "Virtual Machines", level: "exploring" },
      { name: "Azure Storage", level: "exploring" },
      { name: "Prometheus", level: "exploring" },
      { name: "Grafana", level: "exploring" },
      { name: "Argo CD", level: "exploring" },
    ],
  },
  {
    id: "software-development",
    title: "Développement logiciel",
    description:
      "Quatre ans de développement web en entreprise, du modèle de données à la mise en production.",
    icon: "code",
    primary: false,
    skills: [
      { name: "PHP", level: "used" },
      { name: "Symfony", level: "used" },
      { name: "Laravel", level: "used" },
      { name: "JavaScript", level: "used" },
      { name: "React.js", level: "used" },
      { name: "HTML", level: "used" },
      { name: "CSS", level: "used" },
      { name: "REST API", level: "used" },
      { name: "MySQL", level: "used" },
      { name: "PostgreSQL", level: "used" },
    ],
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    description:
      "Pipelines de données construits pendant ma spécialisation, utiles pour industrialiser des traitements.",
    icon: "database",
    primary: false,
    skills: [
      { name: "Python", level: "used" },
      { name: "SQL", level: "used" },
      { name: "ETL / ELT", level: "used" },
      { name: "Pandas", level: "used" },
      { name: "PySpark", level: "used" },
      { name: "Apache Airflow", level: "used" },
      { name: "Data Pipelines", level: "used" },
    ],
  },
];
