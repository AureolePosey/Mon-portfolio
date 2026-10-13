import type { Project } from "@/types";

const GITHUB = "https://github.com/AureolePosey";

export const projects: Project[] = [
  {
    slug: "linux-server-automation",
    title: "Linux Server Automation",
    category: "systems-automation",
    status: "planned",
    featured: false,
    tagline:
      "Provisionnement et durcissement d'un serveur Ubuntu pilotés par des scripts Bash.",
    description:
      "Projet d'automatisation de la mise en service d'un serveur Ubuntu : installation des paquets, configuration des services, règles de pare-feu, accès SSH et tâches planifiées. L'objectif est de remplacer une suite de commandes tapées à la main par des scripts rejouables et documentés.",
    problem:
      "Configurer un serveur à la main ne laisse aucune trace de ce qui a été fait. Au deuxième serveur, les réglages diffèrent déjà, et plus rien ne garantit qu'un redéploiement donnera le même résultat.",
    objectives: [
      "Automatiser l'installation et la configuration des services de base",
      "Appliquer des règles de pare-feu et un accès SSH restreint",
      "Planifier les mises à jour et les tâches récurrentes avec cron",
      "Journaliser chaque exécution pour pouvoir vérifier ce qui a été appliqué",
      "Documenter les choix de configuration et leurs conséquences",
    ],
    pipeline: [
      { label: "Administrateur", detail: "Lance le script de provisionnement" },
      { label: "Scripts Bash", detail: "Installation et configuration" },
      { label: "Serveur Ubuntu", detail: "Paquets, utilisateurs, services" },
      { label: "SSH / UFW / Nginx", detail: "Accès, pare-feu, serveur web" },
      { label: "Journalisation", detail: "Traces et vérifications" },
    ],
    technologies: ["Linux", "Ubuntu", "Bash", "SSH", "UFW", "Nginx", "cron"],
    roadmap: [
      "Créer le dépôt et la structure des scripts",
      "Script d'installation des paquets et de création des utilisateurs",
      "Configuration SSH et règles UFW",
      "Installation et configuration de Nginx",
      "Tâches cron de mise à jour et de sauvegarde",
      "Tests sur une machine virtuelle neuve, puis documentation",
    ],
    screenshots: [],
    plannedRepository: "linux-server-automation",
  },
  {
    slug: "fullstack-app-docker",
    title: "Full Stack App Containerization",
    category: "containerization",
    status: "planned",
    featured: false,
    tagline:
      "Conteneurisation d'une application web multi-services avec Docker et Docker Compose.",
    description:
      "Projet de mise en conteneurs d'une application web complète : interface, API et base de données, derrière un reverse proxy Nginx. Chaque service est isolé, et l'ensemble démarre avec une seule commande.",
    problem:
      "Une application qui fonctionne sur un poste ne fonctionne pas forcément sur un autre : versions différentes, dépendances manquantes, configuration locale. Conteneuriser revient à livrer l'environnement avec le code.",
    objectives: [
      "Écrire des images Docker propres, avec des builds multi-stage là où c'est utile",
      "Séparer les services et définir les réseaux entre eux",
      "Gérer la persistance des données avec des volumes",
      "Externaliser la configuration dans des variables d'environnement",
      "Ne jamais versionner de secrets dans le dépôt",
      "Documenter le démarrage et l'arrêt de la pile",
    ],
    pipeline: [
      { label: "Client Web", detail: "Navigateur" },
      { label: "Nginx", detail: "Reverse proxy" },
      { label: "Frontend", detail: "Interface conteneurisée" },
      { label: "API Backend", detail: "Service applicatif conteneurisé" },
      { label: "Base de données", detail: "PostgreSQL ou MySQL avec volume" },
    ],
    technologies: [
      "Docker",
      "Docker Compose",
      "Nginx",
      "PostgreSQL",
      "Variables d'environnement",
    ],
    roadmap: [
      "Choisir l'application à conteneuriser",
      "Écrire le Dockerfile de l'API, puis celui du frontend",
      "Composer les services, réseaux et volumes",
      "Configurer le reverse proxy Nginx",
      "Externaliser la configuration et vérifier qu'aucun secret ne traîne",
      "Documenter la procédure de démarrage",
    ],
    screenshots: [],
    plannedRepository: "fullstack-app-docker",
  },
  {
    slug: "cicd-pipeline-devsecops",
    title: "CI/CD Pipeline with Security Scanning",
    category: "cicd",
    status: "planned",
    featured: false,
    tagline:
      "Pipeline GitHub Actions qui teste, analyse les vulnérabilités, construit et publie une image.",
    description:
      "Projet de chaîne d'intégration et de livraison continues : à chaque push, les tests s'exécutent, l'image est analysée par Trivy, puis construite et publiée sur GitHub Container Registry si les conditions sont réunies.",
    problem:
      "Tester et publier manuellement est long et irrégulier. Sans contrôle automatisé, une dépendance vulnérable peut se retrouver en production sans que personne ne l'ait vue passer.",
    objectives: [
      "Déclencher le workflow automatiquement à chaque push",
      "Exécuter les tests avant toute construction d'image",
      "Analyser les vulnérabilités avec Trivy",
      "Définir un seuil de blocage adapté à la gravité des failles",
      "Publier l'image uniquement quand toutes les étapes passent",
      "Gérer les secrets et limiter les permissions du workflow au minimum",
    ],
    pipeline: [
      { label: "Git Push", detail: "Déclenche le workflow" },
      { label: "GitHub Actions", detail: "Exécution du pipeline" },
      { label: "Tests", detail: "Vérifications automatisées" },
      { label: "Trivy", detail: "Analyse des vulnérabilités" },
      { label: "Docker Build", detail: "Construction de l'image" },
      { label: "GHCR", detail: "Publication de l'image" },
    ],
    technologies: [
      "GitHub Actions",
      "Docker",
      "Trivy",
      "GitHub Container Registry",
      "YAML",
    ],
    roadmap: [
      "Écrire le workflow de base et le déclencheur",
      "Ajouter l'étape de tests",
      "Intégrer Trivy et définir les règles de blocage",
      "Construire l'image et la pousser sur GHCR",
      "Restreindre les permissions du token et gérer les secrets",
      "Documenter le fonctionnement du pipeline",
    ],
    screenshots: [],
    plannedRepository: "cicd-pipeline-devsecops",
  },
  {
    slug: "azure-terraform-infra",
    title: "Azure Infrastructure as Code",
    category: "cloud-iac",
    status: "planned",
    featured: false,
    tagline:
      "Infrastructure Azure décrite avec Terraform, puis configurée avec Ansible.",
    description:
      "Projet de déploiement reproductible d'une infrastructure Azure : réseau virtuel, machine virtuelle et stockage décrits en Terraform, puis configuration des machines automatisée avec Ansible.",
    problem:
      "Une infrastructure créée à la main dans une console Cloud n'est ni traçable ni reproductible. Décrire cette infrastructure dans du code versionné permet de la recréer à l'identique et de la détruire proprement.",
    objectives: [
      "Versionner la description de l'infrastructure",
      "Utiliser des variables et des outputs plutôt que des valeurs figées",
      "Gérer l'état Terraform de manière fiable",
      "Automatiser la configuration des machines avec Ansible",
      "Ne publier aucun secret ni identifiant dans le dépôt",
      "Documenter les commandes de planification, de création et de destruction",
    ],
    pipeline: [
      { label: "Code Terraform", detail: "Description des ressources" },
      { label: "Provisionnement", detail: "Plan puis application sur Azure" },
      { label: "Réseau", detail: "Virtual Network et règles d'accès" },
      { label: "Machine virtuelle", detail: "Calcul et stockage associés" },
      { label: "Ansible", detail: "Configuration et installation" },
      { label: "Vérifications", detail: "Contrôle de l'état obtenu" },
    ],
    technologies: [
      "Terraform",
      "Microsoft Azure",
      "Azure Virtual Network",
      "Azure Virtual Machines",
      "Azure Storage",
      "Ansible",
    ],
    roadmap: [
      "Définir le périmètre minimal de l'infrastructure",
      "Écrire les ressources réseau en Terraform",
      "Ajouter la machine virtuelle et le stockage",
      "Écrire les playbooks Ansible de configuration",
      "Tester le cycle création puis destruction complet",
      "Documenter le coût des ressources et la procédure de nettoyage",
    ],
    limitations: [
      "Les ressources Cloud sont facturées : l'environnement sera créé pour les tests puis détruit systématiquement.",
    ],
    screenshots: [],
    plannedRepository: "azure-terraform-infra",
  },
  {
    slug: "data-platform-k8s-gitops",
    title: "Data Platform on Kubernetes (GitOps)",
    category: "platform-engineering",
    status: "planned",
    featured: true,
    tagline:
      "Plateforme de traitement de données déployée sur Kubernetes, pilotée en GitOps et supervisée.",
    description:
      "Projet qui relie mes trois domaines : un pipeline de données conteneurisé, déployé sur Kubernetes, livré par une approche GitOps avec Argo CD, et supervisé par Prometheus et Grafana. C'est l'objectif à long terme de mon parcours, pas une plateforme déjà en service.",
    problem:
      "Un pipeline de données qui tourne sur une seule machine ne résiste ni à la montée en charge ni à une panne. L'industrialiser demande de l'orchestration, un déploiement traçable et des métriques pour savoir ce qui se passe réellement.",
    objectives: [
      "Déployer un traitement de données conteneurisé sur Kubernetes",
      "Versionner les manifests et les charts Helm",
      "Mettre en place un déploiement GitOps avec Argo CD",
      "Exposer des métriques utiles et construire des dashboards",
      "Documenter la configuration et le fonctionnement de la plateforme",
    ],
    pipeline: [
      { label: "Sources de données", detail: "Fichiers ou flux en entrée" },
      { label: "Traitement", detail: "Pipeline conteneurisé" },
      { label: "GitHub Actions", detail: "Build et publication des images" },
      { label: "Registry", detail: "Images versionnées" },
      { label: "Helm / Git", detail: "État souhaité du cluster" },
      { label: "Argo CD", detail: "Synchronisation GitOps" },
      { label: "Kubernetes", detail: "Exécution des charges de travail" },
      { label: "Prometheus / Grafana", detail: "Métriques et dashboards" },
    ],
    technologies: [
      "Kubernetes",
      "k3s",
      "Helm",
      "Argo CD",
      "Prometheus",
      "Grafana",
      "Terraform",
      "GitHub Actions",
    ],
    roadmap: [
      "Monter un cluster local avec k3s pour éviter tout coût",
      "Déployer une première application conteneurisée",
      "Écrire les charts Helm et versionner les manifests",
      "Installer Argo CD et basculer le déploiement en GitOps",
      "Brancher Prometheus et construire les premiers dashboards",
      "Y faire tourner un pipeline de données complet",
    ],
    limitations: [
      "La première version tournera sur un cluster local k3s. Un déploiement sur AKS ne sera envisagé que si le besoin le justifie, pour éviter des coûts Cloud inutiles.",
    ],
    screenshots: [],
    plannedRepository: "data-platform-k8s-gitops",
  },
  {
    slug: "healthcare-data-platform",
    title: "Healthcare Data Platform",
    category: "data-engineering",
    status: "completed",
    featured: false,
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
        detail: "Lecture des 5 CSV avec schémas explicites, écriture en Parquet",
      },
      {
        label: "Cleaning",
        detail: "Normalisation, déduplication, intégrité référentielle",
      },
      {
        label: "Quality Gates",
        detail: "Contrôles bloquants : volume, taux de rejet, unicité, NOT NULL",
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
  },
  {
    slug: "mobile-money-fraud-detection",
    title: "Mobile Money Fraud Detection",
    category: "data-engineering",
    status: "completed",
    featured: false,
    period: "2026",
    tagline:
      "Détection de fraude sur plus d'un million de transactions Mobile Money avec PySpark.",
    description:
      "Pipeline de bout en bout détectant les transactions frauduleuses sur un jeu de données Mobile Money de plus d'un million d'enregistrements. L'architecture médaillon en six étapes combine contrôles qualité, ingénierie de variables comportementales et règles métier de détection, avec un reporting final par ville et par opérateur.",
    problem:
      "Sur un volume d'un million de transactions, la fraude ne se repère ni à l'œil ni par un simple seuil sur le montant. Un comportement frauduleux se définit par rapport aux habitudes de l'utilisateur : c'est l'écart à sa propre moyenne qui compte, pas la valeur absolue. Il fallait donc reconstruire l'historique comportemental de chaque compte avant de pouvoir qualifier quoi que ce soit.",
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
  },
  {
    slug: "real-estate-data-warehouse",
    title: "Real Estate Data Warehouse",
    category: "data-engineering",
    status: "completed",
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
  },
  {
    slug: "benin-mobile-money-pipeline",
    title: "Benin Mobile Money Pipeline",
    category: "data-engineering",
    status: "completed",
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
  },
  {
    slug: "benin-macroeconomic-analysis",
    title: "Benin Macroeconomic Analysis",
    category: "data-analytics",
    status: "completed",
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
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const devopsProjects = projects.filter(
  (project) =>
    project.category !== "data-engineering" &&
    project.category !== "data-analytics",
);

export const dataProjects = projects.filter(
  (project) =>
    project.category === "data-engineering" ||
    project.category === "data-analytics",
);
