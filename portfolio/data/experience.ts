import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "data-engineering-specialization",
    role: "Data Engineering : spécialisation et projets",
    company: "Parcours indépendant",
    location: "Lille, France",
    period: "Depuis septembre 2025",
    kind: "data",
    current: true,
    summary:
      "Montée en compétence structurée vers la Data Engineering : construction de pipelines ETL/ELT complets, modélisation de Data Warehouses et traitement distribué, en appliquant les standards d'ingénierie logicielle acquis en entreprise.",
    highlights: [
      "Conception de pipelines de bout en bout, du fichier source jusqu'à la couche analytique",
      "Modélisation de Data Warehouses en schéma en étoile, avec contrôles qualité bloquants entre les couches",
      "Orchestration et planification de traitements avec Apache Airflow",
      "Traitement distribué de volumes dépassant le million d'enregistrements avec PySpark",
      "Projets versionnés, testés et documentés, publiés en accès libre sur GitHub",
    ],
    technologies: [
      "Python",
      "SQL",
      "PySpark",
      "Apache Airflow",
      "Spark SQL",
      "Parquet",
      "Pandas",
    ],
  },
  {
    id: "rost-digital-services",
    role: "Développeur Web full stack",
    company: "ROST Digital Services",
    location: "Abomey-Calavi, Bénin (à distance)",
    period: "Juin 2022 - juillet 2026",
    kind: "software",
    current: false,
    summary:
      "Quatre ans en CDD sur des applications web métier, du recueil des besoins jusqu'à la mise en production. C'est là que j'ai appris à livrer du logiciel qui tourne vraiment, et que les questions de données sont devenues mon sujet principal.",
    highlights: [
      "Pilotage d'une application de gestion de stock : recueil des besoins, rédaction du cahier des charges, modélisation UML et mise en production",
      "Contribution à l'amélioration continue des parcours digitaux clients et support fonctionnel CRM",
      "Rédaction de spécifications fonctionnelles et coordination client tout au long du cycle de vie projet",
      "Création de contenus digitaux et de supports de communication pour les projets clients",
    ],
    technologies: [
      "Symfony",
      "React.js",
      "WordPress",
      "Tailwind CSS",
      "MySQL",
      "UML",
    ],
  },
  {
    id: "csu-le-pharaon",
    role: "Formateur informatique",
    company: "CSU Le Pharaon",
    location: "Abomey-Calavi, Atlantique, Bénin",
    period: "Septembre 2024 - 2026",
    kind: "teaching",
    current: false,
    summary:
      "Enseignement de l'informatique à temps partiel, en parallèle de mon poste de développeur. Les modules couvrent les bases de données et la programmation web, du premier fichier HTML jusqu'à une application connectée à un SGBD.",
    highlights: [
      "Modules bases de données : SQL, modélisation et gestion des SGBD",
      "Modules programmation web, du HTML aux applications dynamiques",
      "Accompagnement individuel des élèves sur leurs projets pratiques",
      "Vulgarisation de concepts techniques complexes, une compétence directement réutilisée pour documenter des pipelines de données",
    ],
    technologies: ["SQL", "Modélisation", "SGBD", "HTML", "CSS", "PHP"],
  },
  {
    id: "jesmar",
    role: "Formateur en Bases de données, Algorithmique et Programmation Web",
    company: "Jesmar",
    location: "Cotonou, Littoral, Bénin",
    period: "Septembre 2024 - janvier 2025",
    kind: "teaching",
    current: false,
    summary:
      "Cours et travaux pratiques à temps partiel sur trois axes : bases de données, algorithmique et programmation web.",
    highlights: [
      "Bases de données : modélisation, SQL et gestion des SGBD",
      "Algorithmique et logique de programmation",
      "Programmation web et mise en pratique sur projets encadrés",
    ],
    technologies: ["SQL", "Modélisation", "Algorithmique", "HTML", "CSS"],
  },
  {
    id: "drwintech",
    role: "Développeur Web",
    company: "Drwintech",
    location: "Cotonou, Littoral, Bénin",
    period: "Mars - juillet 2022",
    kind: "software",
    current: false,
    summary:
      "Première expérience en entreprise, sur une passerelle de paiement mobile money et l'optimisation d'un site vitrine. Point de départ de mon parcours professionnel.",
    highlights: [
      "Mise à niveau d'une passerelle de paiement mobile money, avec coordination des parties prenantes techniques et métier",
      "Optimisation SEO du site WordPress de l'entreprise",
    ],
    technologies: ["Symfony", "WordPress", "Bootstrap", "MySQL", "SEO"],
  },
];
