import { Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { Container } from "@/components/ui/Container";
import { site } from "@/data/site";

const links = [
  {
    label: "LinkedIn",
    href: site.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  { label: "GitHub", href: site.github, Icon: GitHubIcon, external: true },
  { label: "Email", href: `mailto:${site.email}`, Icon: Mail, external: false },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted">© 2026 {site.name}</p>
            <p className="mt-1 text-xs text-muted">
              Construit avec Next.js, déployé sur Vercel.
            </p>
          </div>

          <ul className="flex items-center gap-2">
            {links.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors duration-200 hover:border-border-strong hover:text-foreground"
                >
                  <Icon className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
