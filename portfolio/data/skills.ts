import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "data-engineering",
    title: "Data Engineering",
    description:
      "Conception, orchestration et fiabilisation de pipelines de données de bout en bout.",
    icon: "database",
    primary: true,
    skills: [
      "Python",
      "SQL",
      "ETL",
      "ELT",
      "Apache Airflow",
      "PostgreSQL",
      "Data Warehousing",
      "PySpark",
      "Apache Spark",
      "Data Pipelines",
      "Data Modeling",
    ],
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    description:
      "Nettoyage, transformation et exploration de données pour les rendre exploitables.",
    icon: "chart",
    primary: true,
    skills: [
      "Pandas",
      "NumPy",
      "Data Cleaning",
      "Data Transformation",
      "Exploratory Data Analysis",
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "Conteneurisation, automatisation et déploiement d'environnements reproductibles.",
    icon: "cloud",
    primary: false,
    skills: [
      "Docker",
      "Linux",
      "Git",
      "GitHub",
      "CI/CD",
      "Kubernetes",
      "Cloud Fundamentals",
    ],
  },
  {
    id: "software-development",
    title: "Software Development",
    description:
      "Le socle d'ingénierie logicielle qui structure ma façon de construire des systèmes data.",
    icon: "code",
    primary: false,
    skills: [
      "PHP",
      "Symfony",
      "Laravel",
      "JavaScript",
      "React.js",
      "REST API",
      "MySQL",
      "PostgreSQL",
      "UML",
      "WordPress",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
];
