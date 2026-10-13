import type { JourneyStep } from "@/types";

export const journeySteps: JourneyStep[] = [
  {
    id: "software-development",
    label: "Le point de départ",
    title: "Développement logiciel",
    description:
      "J'ai commencé par le développement web : structurer une application, modéliser une base de données, exposer des APIs. C'est là que j'ai appris à écrire du code destiné à durer, pas seulement à fonctionner.",
    skills: ["PHP", "Symfony", "JavaScript", "React.js", "MySQL", "REST API"],
    icon: "code",
  },
  {
    id: "professional-experience",
    label: "La mise à l'épreuve",
    title: "Quatre ans en entreprise",
    description:
      "Du recueil des besoins à la mise en production, j'ai vu ce qu'une application subit une fois livrée : les environnements qui diffèrent, les déploiements manuels, les régressions. Ce sont ces problèmes qui m'ont amené vers le DevOps.",
    skills: [
      "Architecture logicielle",
      "Bases de données",
      "Débogage",
      "Mise en production",
      "Git",
    ],
    icon: "server",
  },
  {
    id: "data-engineering",
    label: "L'élargissement",
    title: "Projets Data Engineering",
    description:
      "J'ai construit des pipelines de données de bout en bout, versionnés et testés, dont un couvert par une chaîne d'intégration continue. Une première approche de l'industrialisation d'un traitement.",
    skills: ["Python", "SQL", "PySpark", "Apache Airflow", "GitHub Actions"],
    icon: "database",
  },
  {
    id: "devops-training",
    label: "Aujourd'hui",
    title: "Formation Expert DevOps",
    description:
      "Je me forme à l'automatisation des systèmes, à la conteneurisation, aux pipelines CI/CD et à l'Infrastructure as Code. Mon objectif : relier le développement et l'exploitation, en m'appuyant sur mon expérience des deux côtés de la chaîne.",
    skills: ["Linux", "Docker", "CI/CD", "Terraform", "Ansible", "Kubernetes"],
    icon: "terminal",
  },
];
