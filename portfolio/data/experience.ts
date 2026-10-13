import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "formation-expert-devops",
    role: "Formation Expert DevOps",
    company: "EPSI Lille",
    location: "Lille, France",
    period: "Depuis septembre 2026",
    kind: "devops",
    current: true,
    summary:
      "Parcours Expert DevOps, construit autour de l'automatisation des systèmes, de la conteneurisation et de l'industrialisation du cycle de vie des applications. Je développe en parallèle des projets personnels pour mettre chaque brique en pratique.",
    highlights: [
      "Administration et automatisation de serveurs Linux",
      "Conteneurisation d'applications avec Docker et Docker Compose",
      "Pipelines d'intégration et de déploiement continus",
      "Infrastructure as Code et configuration automatisée",
      "Supervision et observabilité des services déployés",
    ],
    technologies: [
      "Linux",
      "Bash",
      "Docker",
      "GitHub Actions",
      "Terraform",
      "Ansible",
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
      "Quatre ans en CDD sur des applications web métier, du recueil des besoins jusqu'à la mise en production. C'est en suivant ces applications une fois livrées que les questions d'environnement, de déploiement et d'exploitation sont devenues mon sujet.",
    highlights: [
      "Pilotage d'une application de gestion de stock : recueil des besoins, rédaction du cahier des charges, modélisation UML et mise en production",
      "Rédaction de spécifications fonctionnelles et coordination client tout au long du cycle de vie projet",
      "Contribution à l'amélioration continue des parcours digitaux clients et support fonctionnel CRM",
      "Maintenance corrective et débogage des applications livrées",
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
      "Modules algorithmique et programmation web",
      "Accompagnement individuel des élèves sur leurs projets pratiques",
      "Vulgarisation de concepts techniques, une compétence directement utile pour documenter une infrastructure",
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
      "Première expérience en entreprise, sur une passerelle de paiement mobile money et l'optimisation d'un site vitrine.",
    highlights: [
      "Mise à niveau d'une passerelle de paiement mobile money, avec coordination des parties prenantes techniques et métier",
      "Optimisation SEO du site WordPress de l'entreprise",
    ],
    technologies: ["Symfony", "WordPress", "Bootstrap", "MySQL", "SEO"],
  },
];
