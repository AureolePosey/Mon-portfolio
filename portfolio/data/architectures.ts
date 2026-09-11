import type { DataArchitecture } from "@/types";

export const architectures: DataArchitecture[] = [
  {
    id: "etl",
    title: "ETL Pipeline",
    description:
      "Les données sont transformées avant d'être chargées : seule la donnée propre et conforme entre dans l'entrepôt.",
    useCase:
      "À privilégier quand le schéma cible est stable et que la qualité des données doit être garantie en amont : reporting financier, référentiels métier.",
    stages: [
      { label: "Source", detail: "Bases applicatives, fichiers, APIs" },
      { label: "Extraction", detail: "Lecture incrémentale par source" },
      {
        label: "Transformation",
        detail: "Nettoyage, règles métier, jointures",
      },
      {
        label: "Data Warehouse",
        detail: "Modèle en étoile, données conformes",
      },
      { label: "Analytics", detail: "Requêtes SQL, dashboards" },
    ],
  },
  {
    id: "elt",
    title: "ELT Pipeline",
    description:
      "Les données brutes sont chargées d'abord, puis transformées dans l'entrepôt qui dispose de la puissance de calcul.",
    useCase:
      "À privilégier quand les besoins d'analyse évoluent : la couche brute est conservée, on peut donc rejouer une transformation différente sans réextraire les sources.",
    stages: [
      { label: "Data Sources", detail: "Sources multiples et hétérogènes" },
      { label: "Ingestion", detail: "Chargement brut, sans transformation" },
      { label: "Raw Layer", detail: "Historique intact, rejouable" },
      { label: "Transformation", detail: "Modélisation SQL dans l'entrepôt" },
      { label: "Analytics Layer", detail: "Tables métier prêtes à l'usage" },
    ],
  },
  {
    id: "big-data",
    title: "Big Data Processing",
    description:
      "Le traitement est distribué sur plusieurs nœuds : le volume dépasse ce qu'une seule machine peut charger en mémoire.",
    useCase:
      "À privilégier au-delà du téraoctet ou lorsqu'un flux continu doit être traité : logs, événements, télémétrie.",
    stages: [
      { label: "Data Sources", detail: "Événements, logs, batchs volumineux" },
      { label: "Kafka / Batch", detail: "Collecte en flux ou par lots" },
      { label: "Spark", detail: "Transformations distribuées, Spark SQL" },
      { label: "Data Lake", detail: "Stockage colonne partitionné" },
      { label: "Analytics", detail: "Exploration et modèles sur gros volumes" },
    ],
  },
];
