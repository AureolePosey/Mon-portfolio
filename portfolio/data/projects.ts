import type { Project } from "@/types";

const GITHUB = "https://github.com/AureolePosey";

export const projects: Project[] = [
  {
    slug: "healthcare-data-platform",
    title: "Healthcare Data Platform",
    category: "data-engineering",
    featured: true,
    period: "2026",
    tagline:
      "Plateforme de bout en bout transformant cinq sources hospitalières en Data Warehouse analytique, orchestrée par Airflow.",
    description:
      "Pipeline complet en architecture médaillon : cinq fichiers CSV hospitaliers bruts deviennent un entrepôt interrogeable en SQL, accompagné de rapports analytiques. Le traitement se décompose en six étapes séquentielles orchestrées par un DAG Apache Airflow, avec des contrôles qualité bloquants entre les couches et 16 tests unitaires pytest.",
    problem:
      "Les données hospitalières arrivent dispersées dans cinq fichiers distincts : patients, médecins, rendez-vous, traitements et facturation. Séparées, elles ne répondent à aucune question métier. Impossible de savoir combien est facturé, combien est réellement encaissé, ou quels actes génèrent le plus de revenus sans les rapprocher de façon fiable et répétable.",
    solution:
      "J'ai structuré le traitement en couches successives, chacune matérialisée en Parquet. L'ingestion impose des schémas explicites plutôt que de laisser Spark les inférer, ce qui supprime toute variabilité entre exécutions. Le nettoyage normalise les textes, déduplique et vérifie l'intégrité référentielle par semi-jointures. Des contrôles qualité bloquants s'intercalent ensuite : volume minimum, taux de rejet plafonné à 20 %, unicité des clés primaires, contraintes NOT NULL. Les cinq tables sont enfin jointes au grain du traitement, puis modélisées en schéma en étoile à quatre dimensions et une table de faits, sur lequel s'exécutent des rapports SQL paramétrés.",
    pipeline: [
      {
        label: "Ingestion",
        detail:
          "Lecture des 5 CSV avec schémas explicites, écriture en Parquet",
      },
      {
        label: "Cleaning",
        detail: "Normalisation, déduplication, intégrité référentielle",
      },
      {
        label: "Quality Gates",
        detail:
          "Contrôles bloquants : volume, taux de rejet, unicité, NOT NULL",
      },
      {
        label: "Transformation",
        detail: "Jointure des 5 tables au grain traitement, enrichissements",
      },
      {
        label: "Modeling",
        detail: "Schéma en étoile : 4 dimensions et 1 table de faits",
      },
      {
        label: "Analytics",
        detail: "Rapports SQL paramétrés, export Parquet et CSV",
      },
    ],
    technologies: [
      "Python",
      "PySpark 3.5.1",
      "Apache Airflow 3.2.1",
      "Spark SQL",
      "Parquet",
      "SQL",
      "PyYAML",
      "pytest",
    ],
    challenges: [
      "Un DataFrame Spark n'est pas sérialisable, il ne peut donc pas transiter entre deux tâches Airflow via XCom. Chaque étape persiste son résultat en Parquet, ce qui rend aussi le pipeline reprenable à mi-parcours.",
      "Générer des clés de substitution reproductibles : monotonically_increasing_id() produit des valeurs différentes à chaque exécution. Remplacé par row_number() sur un tri stable, ce qui rend les clés identiques d'un run à l'autre.",
      "Éviter le double comptage dans la table de faits en conservant un grain unique, et déplacer les agrégations par patient dans un rapport SQL dédié.",
      "Normaliser la casse des statuts dès le nettoyage, sinon les comparaisons échouent silencieusement plus loin dans le pipeline.",
      "Résoudre tous les chemins depuis la racine du projet via __file__, pour que le pipeline s'exécute aussi bien à la main que sous Airflow.",
    ],
    results: [
      "200 traitements, 48 patients et 10 médecins consolidés dans un modèle en étoile interrogeable en SQL",
      "551 249,85 € facturés contre 173 424,90 € encaissés, soit un taux de recouvrement de 31,5 % mis en évidence par le pipeline",
      "Taux de recouvrement calculé par type d'acte : 43,4 % sur les radiographies, 18,2 % sur les ECG",
      "Exécution complète en environ 55 secondes en local, environ 3 minutes sous Airflow",
      "16 tests unitaires pytest couvrant les modules de traitement",
    ],
    screenshots: [],
    github: `${GITHUB}/healthcare-data-platform`,
    demo: undefined,
  },

  {
    slug: "real-estate-data-warehouse",
    title: "Real Estate Data Warehouse",
    category: "data-engineering",
    featured: false,
    period: "2026",
    tagline:
      "Données immobilières brutes converties en Data Warehouse en étoile avec PySpark.",
    description:
      "Pipeline PySpark transformant des fichiers immobiliers bruts en un Data Warehouse prêt pour l'analyse. Le modèle en étoile permet aux analystes d'identifier les villes rentables, de suivre l'évolution des prix et de comparer les types de biens sans écrire de jointures complexes.",
    problem:
      "Les fichiers CSV immobiliers sont incohérents, lents à interroger et inadaptés à l'analyse. En l'état, répondre à une question aussi simple que « quelles sont les villes les plus chères » demande de retraiter les données à chaque fois, avec le risque d'obtenir un résultat différent selon la personne qui écrit la requête.",
    solution:
      "J'ai découpé le traitement en cinq étapes, du chargement brut jusqu'à la couche analytique. Le nettoyage traite les valeurs manquantes et les doublons, la transformation ajoute les variables dérivées et l'enrichissement temporel, puis les données sont modélisées en schéma en étoile. Les requêtes analytiques sont volontairement découplées du pipeline : la logique métier vit dans des fichiers SQL, l'ingénierie dans les modules Python. Le stockage en Parquet accélère nettement la relecture.",
    pipeline: [
      { label: "Ingestion", detail: "Chargement des CSV bruts dans Spark" },
      { label: "Cleaning", detail: "Valeurs manquantes et doublons" },
      {
        label: "Transformation",
        detail: "Feature engineering et enrichissement temporel",
      },
      {
        label: "Data Modeling",
        detail: "Schéma en étoile : faits et dimensions",
      },
      { label: "Analytics", detail: "Requêtes SQL découplées du pipeline" },
    ],
    technologies: [
      "Python",
      "PySpark",
      "Apache Spark",
      "Spark SQL",
      "Parquet",
      "Data Modeling",
      "SQL",
    ],
    challenges: [
      "Séparer strictement l'ingénierie de la logique métier : les modules Python ne contiennent aucune règle d'analyse, celle-ci reste dans les fichiers SQL et peut évoluer sans toucher au pipeline.",
      "Concevoir le modèle pour tenir la charge sur des jeux de données de plus de 2 millions de lignes, et non seulement sur l'échantillon de développement.",
      "Optimiser le stockage en Parquet pour que les requêtes analytiques restent rapides à la relecture.",
    ],
    results: [
      "Classement des 10 villes les plus chères, avec des moyennes atteignant 50,1 M$ sur les villes du Kansas",
      "Segmentation du prix au pied carré selon la taille du bien : 387,92 $ pour les petites surfaces contre 317,80 $ pour les grandes",
      "Modèle en étoile conçu pour passer à l'échelle sur plus de 2 millions de lignes",
      "Requêtes analytiques exécutables en SQL standard, sans jointure complexe",
    ],
    screenshots: [],
    github: `${GITHUB}/real-estate-data-warehouse`,
    demo: undefined,
  },

  {
    slug: "mobile-money-fraud-detection",
    title: "Mobile Money Fraud Detection",
    category: "data-engineering",
    featured: false,
    period: "2026",
    tagline:
      "Détection de fraude sur plus d'un million de transactions Mobile Money avec PySpark.",
    description:
      "Pipeline de bout en bout détectant les transactions frauduleuses sur un jeu de données Mobile Money de plus d'un million d'enregistrements. L'architecture médaillon en six étapes combine contrôles qualité, ingénierie de variables comportementales et règles métier de détection, avec un reporting final par ville et par opérateur.",
    problem:
      "Sur un volume d'un million de transactions, la fraude ne se repère pas à l'œil ni par un simple seuil sur le montant. Un comportement frauduleux se définit par rapport aux habitudes de l'utilisateur : c'est l'écart à sa propre moyenne qui compte, pas la valeur absolue. Il fallait donc reconstruire l'historique comportemental de chaque compte avant de pouvoir qualifier quoi que ce soit.",
    solution:
      "J'ai construit une couche de feature engineering qui calcule, par utilisateur, des moyennes glissantes et une fréquence de transaction quotidienne à l'aide de Window Functions Spark. La détection s'appuie ensuite sur deux familles de règles : des seuils critiques absolus et des anomalies relatives au comportement habituel du compte. Les données sont stockées en Parquet partitionné par date, ce qui restreint la lecture aux seules partitions utiles. Le pipeline est idempotent : le relancer ne duplique rien.",
    pipeline: [
      { label: "Ingestion", detail: "CSV bruts convertis en Parquet optimisé" },
      {
        label: "Data Quality",
        detail: "Audit automatisé des types et des valeurs manquantes",
      },
      {
        label: "Cleaning",
        detail: "Déduplication et filtrage des montants incohérents",
      },
      {
        label: "Feature Engineering",
        detail: "Moyennes glissantes et fréquence quotidienne par compte",
      },
      {
        label: "Fraud Detection",
        detail: "Seuils critiques et anomalies relatives au comportement",
      },
      {
        label: "Fraud Analytics",
        detail: "Taux de fraude par ville et par opérateur",
      },
    ],
    technologies: [
      "Python",
      "PySpark",
      "Spark SQL",
      "Window Functions",
      "Parquet",
      "Linux / WSL",
    ],
    challenges: [
      "Qualifier une fraude par rapport au comportement habituel du compte et non par un seuil fixe, ce qui impose de calculer des agrégats glissants par utilisateur avec des Window Functions.",
      "Partitionner le stockage Parquet par date pour que les requêtes ne lisent que les partitions concernées, sans quoi chaque analyse rescanne le million de lignes.",
      "Rendre le pipeline idempotent afin qu'une réexécution après incident ne produise ni doublon ni double comptage.",
      "Mettre en place une journalisation exploitable en production plutôt que des affichages console.",
    ],
    results: [
      "Plus de 1 000 000 de transactions traitées de bout en bout",
      "Taux de fraude détecté d'environ 1,5 % sur l'ensemble du volume",
      "Zones à risque identifiées et hiérarchisées : Cotonou, Parakou, Abomey-Calavi",
      "Stockage Parquet partitionné par date, réduisant le volume relu à chaque analyse",
    ],
    screenshots: [],
    github: `${GITHUB}/mobile-money-transactions-fraud-detection-pyspark`,
    demo: undefined,
  },

  {
    slug: "benin-mobile-money-pipeline",
    title: "Benin Mobile Money Pipeline",
    category: "data-engineering",
    featured: false,
    period: "2026",
    tagline:
      "Pipeline PySpark complet avec validation métier et intégration continue GitHub Actions.",
    description:
      "Pipeline Data Engineering de bout en bout sur des transactions Mobile Money béninoises : génération de données synthétiques, ingestion Spark, validation, transformations analytiques et stockage Parquet. Le dépôt est couvert par une chaîne d'intégration continue GitHub Actions.",
    problem:
      "Construire un pipeline demande des données représentatives, or les données financières réelles ne sont pas partageables. Il fallait donc produire un jeu synthétique crédible, puis surtout garantir que le pipeline détecte lui-même les anomalies : un montant négatif ou une transaction datée dans le futur ne doivent jamais atteindre la couche analytique.",
    solution:
      "J'ai ajouté une étape de validation explicite entre l'ingestion et la transformation. Elle vérifie les valeurs nulles, applique des règles métier (montants négatifs, transactions futures) et contrôle l'intégrité référentielle entre utilisateurs et transactions. Les transformations produisent ensuite les agrégats analytiques, écrits en Parquet. L'ensemble est validé automatiquement à chaque push via GitHub Actions.",
    pipeline: [
      {
        label: "Data Generation",
        detail: "Jeux synthétiques utilisateurs et transactions",
      },
      { label: "Ingestion", detail: "Lecture des CSV avec Spark" },
      {
        label: "Validation",
        detail: "Nulls, règles métier, intégrité référentielle",
      },
      {
        label: "Transformation",
        detail: "Volume par région, top utilisateurs, agrégats temporels",
      },
      { label: "Storage", detail: "Écriture Parquet pour l'analytique" },
    ],
    technologies: [
      "Python",
      "PySpark",
      "Parquet",
      "GitHub Actions",
      "CI/CD",
      "Linux / WSL",
    ],
    challenges: [
      "Définir des règles de validation qui bloquent réellement les données aberrantes (montants négatifs, dates futures) au lieu de les laisser passer silencieusement vers l'analyse.",
      "Vérifier l'intégrité référentielle entre utilisateurs et transactions, une transaction orpheline faussant tous les agrégats par utilisateur.",
      "Mettre en place une intégration continue GitHub Actions pour que chaque modification du pipeline soit vérifiée automatiquement.",
    ],
    results: [
      "Volume de transactions par région, top 10 des utilisateurs et tendances mensuelles produits automatiquement",
      "Données aberrantes bloquées à l'étape de validation, avant d'atteindre la couche analytique",
      "Résultats persistés en Parquet, prêts pour l'analyse",
      "Chaîne d'intégration continue GitHub Actions exécutée à chaque modification",
    ],
    screenshots: [],
    github: `${GITHUB}/benin-mobile-money-pipeline`,
    demo: undefined,
  },

  {
    slug: "benin-macroeconomic-analysis",
    title: "Benin Macroeconomic Analysis",
    category: "data-analytics",
    featured: false,
    period: "Données 2016 à 2024",
    tagline:
      "Analyse de trois indicateurs macroéconomiques du Bénin à partir des données de la Banque mondiale.",
    description:
      "Analyse de l'évolution du PIB, de l'inflation et des dépenses publiques du Bénin entre 2016 et 2024, à partir des données ouvertes de la Banque mondiale. Le projet couvre le nettoyage, la restructuration des séries, leur fusion et la production des visualisations.",
    problem:
      "Les fichiers de la Banque mondiale sont publiés au format large : une colonne par année, tous les pays mélangés. Ce format est inexploitable tel quel pour comparer trois indicateurs dans le temps, et chaque indicateur arrive dans un fichier séparé avec sa propre structure.",
    solution:
      "J'ai construit un traitement reproductible en Pandas : filtrage sur le Bénin et sur la période 2016 à 2024, passage du format large au format long via melt, puis fusion des trois séries sur l'année pour obtenir un jeu de données unique. Les visualisations Matplotlib permettent ensuite de lire les tendances et de rapprocher les indicateurs entre eux. Le dataset nettoyé est exporté pour être réutilisable indépendamment du notebook.",
    pipeline: [
      { label: "Raw Data", detail: "Fichiers CSV de la Banque mondiale" },
      { label: "Filtrage", detail: "Bénin, période 2016 à 2024" },
      {
        label: "Transformation",
        detail: "Passage du format large au format long, fusion sur l'année",
      },
      {
        label: "Analysis",
        detail: "Tendances et relations entre les trois indicateurs",
      },
      {
        label: "Visualization",
        detail: "Graphiques Matplotlib et export du dataset nettoyé",
      },
    ],
    technologies: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Jupyter Notebook",
      "Data Cleaning",
      "Exploratory Data Analysis",
    ],
    challenges: [
      "Restructurer des fichiers publiés en format large, une colonne par année, vers un format long exploitable pour l'analyse temporelle.",
      "Fusionner trois indicateurs issus de fichiers distincts sur un index temporel commun sans introduire de décalage.",
      "Rendre le traitement reproductible depuis les fichiers bruts plutôt que corrigé à la main dans le notebook.",
    ],
    results: [
      "PIB en tendance globalement croissante, avec une accélération visible après 2022",
      "Inflation volatile, marquée par des pics en 2020 et en 2023",
      "Dépenses publiques au plus haut en 2020, suivies d'une décrue progressive",
      "2020 identifiée comme année charnière, avec hausse simultanée de l'inflation et des dépenses",
      "Dataset nettoyé exporté et réutilisable indépendamment du notebook",
    ],
    screenshots: [],
    github: `${GITHUB}/benin-macroeconomic-analysis`,
    demo: undefined,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
