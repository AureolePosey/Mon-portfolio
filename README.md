# Auréole Rogelio EDJEKPOTO · Portfolio

Portfolio de Data Engineer : projets, parcours, compétences et contact.

**https://aureole-edjekpoto.vercel.app**

![Aperçu du portfolio](https://aureole-edjekpoto.vercel.app/opengraph-image)

## Stack

- [Next.js 16](https://nextjs.org) (App Router), React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion, Lucide
- Hébergement Vercel

## Démarrage

Prérequis : Node.js 20 ou plus.

```bash
cd portfolio
npm install
npm run dev
```

Le site tourne ensuite sur [http://localhost:3000](http://localhost:3000).

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Sert le build de production |
| `npm run lint` | Analyse ESLint |

## Structure

```
portfolio/
├── app/              Pages, layout et fichiers SEO (sitemap, robots, image Open Graph)
│   └── projects/     Page de détail de chaque projet
├── components/       Sections de la page d'accueil
│   └── ui/           Composants réutilisables
├── data/             Contenu du site
├── lib/              Utilitaires
├── types/            Types partagés
└── public/           Photo et CV
```

## Contenu

Le texte du site est rangé dans `portfolio/data/`, séparé des composants :

| Fichier | Contenu |
| --- | --- |
| `site.ts` | Informations personnelles, liens, disponibilité, SEO |
| `projects.ts` | Projets |
| `experience.ts` | Expériences professionnelles |
| `education.ts` | Formations |
| `certifications.ts` | Certifications |
| `skills.ts` | Compétences |
| `repositories.ts` | Dépôts GitHub mis en avant |

Chaque entrée de `projects.ts` génère sa page `/projects/<slug>` au build, ainsi que son entrée dans le sitemap.

## Déploiement

Le dépôt est connecté à Vercel, avec `portfolio` comme dossier racine. Un push sur `main` met le site à jour.

## Contact

[LinkedIn](https://www.linkedin.com/in/aureole-edjekpoto-362828241/) · [GitHub](https://github.com/AureolePosey) · edjekpotorogelio7@gmail.com
