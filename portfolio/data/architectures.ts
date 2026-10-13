import type { ArchitectureDiagram } from "@/types";

export const architectures: ArchitectureDiagram[] = [
  {
    id: "containerized-app",
    title: "Application conteneurisée",
    description:
      "Chaque service de l'application tourne dans son propre conteneur, derrière un reverse proxy qui reçoit le trafic.",
    useCase:
      "L'intérêt principal : la même définition d'environnement sert en local et sur le serveur, ce qui supprime les écarts de configuration.",
    planned: true,
    stages: [
      { label: "Client", detail: "Navigateur" },
      { label: "Nginx", detail: "Reverse proxy et terminaison des requêtes" },
      { label: "Frontend", detail: "Interface web conteneurisée" },
      { label: "API", detail: "Service backend conteneurisé" },
      { label: "PostgreSQL", detail: "Base de données avec volume persistant" },
    ],
  },
  {
    id: "cicd-devsecops",
    title: "Pipeline CI/CD DevSecOps",
    description:
      "Chaque push déclenche les tests, une analyse de vulnérabilités, puis la construction et la publication de l'image.",
    useCase:
      "L'analyse de sécurité est placée avant la publication : une image vulnérable n'atteint jamais le registre.",
    planned: true,
    stages: [
      { label: "Git Push", detail: "Déclencheur du workflow" },
      { label: "GitHub Actions", detail: "Exécution du pipeline" },
      { label: "Tests", detail: "Vérifications automatisées" },
      { label: "Trivy", detail: "Analyse des vulnérabilités" },
      { label: "Docker Build", detail: "Construction de l'image" },
      { label: "GHCR", detail: "Publication sur le registre" },
    ],
  },
  {
    id: "infrastructure-as-code",
    title: "Infrastructure as Code",
    description:
      "L'infrastructure est décrite dans du code versionné, puis la configuration des machines est appliquée automatiquement.",
    useCase:
      "Le même code recrée l'environnement à l'identique, et permet de le détruire quand il n'est plus utilisé.",
    planned: true,
    stages: [
      { label: "Dépôt Git", detail: "Code d'infrastructure versionné" },
      { label: "Terraform", detail: "Plan puis application des ressources" },
      { label: "Azure", detail: "Réseau, machines et stockage" },
      { label: "Ansible", detail: "Configuration des machines" },
      { label: "Vérifications", detail: "Contrôle de l'état obtenu" },
    ],
  },
  {
    id: "kubernetes-gitops",
    title: "Kubernetes et GitOps",
    description:
      "Le dépôt Git décrit l'état souhaité du cluster, et un opérateur se charge de faire converger le cluster vers cet état.",
    useCase:
      "Le déploiement n'est plus une commande lancée à la main : toute modification passe par un commit, donc tout est tracé et réversible.",
    planned: true,
    stages: [
      { label: "GitHub Actions", detail: "Construction des images" },
      { label: "Registry", detail: "Stockage des images versionnées" },
      { label: "Helm / Git", detail: "Manifests et charts versionnés" },
      { label: "Argo CD", detail: "Synchronisation de l'état du cluster" },
      { label: "Kubernetes", detail: "Exécution des charges de travail" },
      { label: "Prometheus / Grafana", detail: "Métriques et dashboards" },
    ],
  },
];
