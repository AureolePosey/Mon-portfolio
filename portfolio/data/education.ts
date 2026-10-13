import type { Education } from "@/types";

export const educations: Education[] = [
  {
    id: "epsi-lille-devops",
    degree: "Expert DevOps",
    targetTitle:
      "Titre visé : Expert en Informatique et Systèmes d'Information, RNCP niveau 7, en cours de préparation",
    school: "EPSI Lille",
    location: "Lille, France",
    period: "Septembre 2026 - juin 2028",
    level: "Bac +5 en cours",
    highlights: [
      "Automatisation et administration système",
      "Conteneurisation et orchestration",
      "CI/CD et Infrastructure as Code",
      "Cloud et observabilité",
    ],
  },
  {
    id: "licence-pro-irt",
    degree:
      "Licence Professionnelle en Informatique, Réseaux et Télécommunications",
    option: "Architecture des Logiciels",
    school: "ESGIS, École Supérieure de Gestion, d'Informatique et des Sciences",
    location: "Cotonou, Bénin",
    period: "2019 - 2022",
    level: "Bac +3",
    highlights: [
      "Architecture logicielle et conception d'applications",
      "Bases de données relationnelles et modélisation",
      "Algorithmique et programmation",
      "Réseaux et systèmes (CCNA)",
      "Gestion de projet",
    ],
  },
  {
    id: "dt-maintenance-informatique",
    degree: "Diplôme de Technicien, Installation et maintenance en informatique",
    school: "Lycée technique FM Coulibaly",
    location: "Bénin",
    period: "2016 - 2019",
    level: "Bac technique",
    highlights: [
      "Installation et maintenance de systèmes informatiques",
      "Architecture matérielle et réseaux",
      "Diagnostic et résolution de pannes",
    ],
  },
];
