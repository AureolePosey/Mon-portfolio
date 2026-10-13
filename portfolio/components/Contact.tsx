import { Download, Mail, MapPin } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

import { site } from "@/data/site";

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    Icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Profil professionnel",
    href: site.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "Dépôts et code source",
    href: site.github,
    Icon: GitHubIcon,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-band">
      <Container>
        <div className="grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <FadeIn>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              <span className="text-accent">08 / </span>Contact
            </p>

            <h2 className="mt-6 max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-[2.5rem] sm:leading-[1.1]">
              Construisons et déployons des applications fiables
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted text-pretty">
              {site.availability}
            </p>

            <p className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              <MapPin className="size-4" aria-hidden />
              {site.location}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={`mailto:${site.email}`} size="lg">
                <Mail className="size-4" aria-hidden />
                Me contacter
              </Button>
              <Button href={site.cvPath} download variant="secondary" size="lg">
                <Download className="size-4" aria-hidden />
                Télécharger mon CV
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="lg:pt-16">
            <ul className="flex flex-col">
              {channels.map(({ label, value, href, Icon, external }) => (
                <li
                  key={label}
                  className="border-t border-border last:border-b"
                >
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 py-5 transition-colors duration-200 hover:text-accent"
                  >
                    <Icon className="size-[18px] shrink-0 text-accent" />
                    <span className="w-24 shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                      {label}
                    </span>
                    <span className="min-w-0 break-all font-mono text-sm">
                      {value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
