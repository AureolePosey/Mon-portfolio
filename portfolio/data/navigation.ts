export interface NavLink {
  id: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { id: "accueil", label: "Accueil" },
  { id: "a-propos", label: "À propos" },
  { id: "competences", label: "Compétences" },
  { id: "projets", label: "Projets" },
  { id: "parcours", label: "Parcours" },
  { id: "contact", label: "Contact" },
];

export function navHref(id: string): string {
  return `/#${id}`;
}
