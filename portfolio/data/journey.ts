import type { JourneyStep } from "@/types";

export const journeySteps: JourneyStep[] = [
  {
    id: "software-development",
    label: "Le point de départ",
    title: "Software Development",
    description:
      "J'ai commencé par le développement web et logiciel : structurer une application, modéliser une base de données relationnelle, exposer des APIs. C'est là que j'ai appris à écrire du code destiné à durer, pas seulement à fonctionner.",
    skills: ["PHP", "Laravel", "JavaScript", "MySQL", "REST API"],
    icon: "code",
  },
  {
    id: "professional-experience",
    label: "La mise à l'épreuve",
    title: "Expérience professionnelle",
    description:
      "En entreprise puis en formation, j'ai maintenu des applications en production et transmis ces pratiques à d'autres. J'y ai appris ce qu'un système doit supporter au quotidien : des données imparfaites, des sources qui changent, des utilisateurs qui n'attendent pas.",
    skills: ["Architecture logicielle", "Bases de données", "Debugging", "Git"],
    icon: "server",
  },
  {
    id: "data-specialization",
    label: "La spécialisation",
    title: "Data Engineering : apprentissage et projets",
    description:
      "Le passage à la data a été une suite logique : les mêmes problèmes de modélisation et de fiabilité, à une autre échelle. J'ai construit des pipelines ETL/ELT complets, modélisé des Data Warehouses et découvert le traitement distribué.",
    skills: ["Python", "SQL avancé", "ETL / ELT", "Apache Airflow", "PySpark"],
    icon: "workflow",
  },
  {
    id: "data-engineer",
    label: "Aujourd'hui",
    title: "Data Engineer",
    description:
      "Je conçois des pipelines de bout en bout : conteneurisés, orchestrés, rejouables et documentés. Mon avantage n'est pas d'avoir appris la data, c'est de l'aborder avec les réflexes d'un développeur qui a déjà maintenu du code en production.",
    skills: [
      "Data Pipelines",
      "Data Warehousing",
      "Docker",
      "PostgreSQL",
      "Data Modeling",
    ],
    icon: "database",
  },
];
