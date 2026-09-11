import type { Repository } from "@/types";

export const repositories: Repository[] = [
  {
    name: "healthcare-data-platform",
    description:
      "Pipeline de bout en bout en architecture médaillon, orchestré par Airflow, transformant cinq sources hospitalières en Data Warehouse en étoile.",
    url: "https://github.com/AureolePosey/healthcare-data-platform",
    language: "Python",
    topics: ["pyspark", "airflow", "data-warehouse"],
  },
  {
    name: "mobile-money-transactions-fraud-detection-pyspark",
    description:
      "Détection de fraude sur plus d'un million de transactions Mobile Money, avec variables comportementales calculées en Window Functions.",
    url: "https://github.com/AureolePosey/mobile-money-transactions-fraud-detection-pyspark",
    language: "Python",
    topics: ["pyspark", "fraud-detection", "parquet"],
  },
  {
    name: "real-estate-data-warehouse",
    description:
      "Données immobilières brutes converties en Data Warehouse en schéma en étoile avec PySpark, conçu pour tenir sur plus de 2 millions de lignes.",
    url: "https://github.com/AureolePosey/real-estate-data-warehouse",
    language: "Python",
    topics: ["pyspark", "star-schema", "spark-sql"],
  },
  {
    name: "benin-mobile-money-pipeline",
    description:
      "Pipeline PySpark complet avec étape de validation métier bloquante et intégration continue GitHub Actions.",
    url: "https://github.com/AureolePosey/benin-mobile-money-pipeline",
    language: "Python",
    topics: ["pyspark", "ci-cd", "data-quality"],
  },
  {
    name: "benin-macroeconomic-analysis",
    description:
      "Analyse du PIB, de l'inflation et des dépenses publiques du Bénin entre 2016 et 2024, à partir des données de la Banque mondiale.",
    url: "https://github.com/AureolePosey/benin-macroeconomic-analysis",
    language: "Jupyter Notebook",
    topics: ["pandas", "matplotlib", "eda"],
  },
];
