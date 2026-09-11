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
    value: "Projets & code source",
    href: site.github,
    Icon: GitHubIcon,
    external: true,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]"
      />

      <Container className="relative">
        <FadeIn className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2.5 rounded-pill border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {site.availabilityBadge}
          </span>

          <h2 className="mt-7 max-w-3xl text-3xl font-bold tracking-tight text-balance sm:text-5xl">
            Let&apos;s build something with data
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
            {site.availability}
          </p>

          <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted">
            <MapPin className="size-4" aria-hidden />
            {site.location}
          </p>
        </FadeIn>

        <FadeIn
          delay={0.1}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <Button href={`mailto:${site.email}`} size="lg">
            <Mail className="size-4" aria-hidden />
            Me contacter
          </Button>
          <Button href={site.cvPath} download variant="secondary" size="lg">
            <Download className="size-4" aria-hidden />
            Télécharger mon CV
          </Button>
        </FadeIn>

        <FadeIn delay={0.18} className="mt-14">
          <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
            {channels.map(({ label, value, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex h-full flex-col items-center gap-2 rounded-card border border-border bg-surface p-5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card-hover"
                >
                  <Icon className="size-5 text-accent" />
                  <span className="text-sm font-medium">{label}</span>
                  <span className="break-all font-mono text-xs text-muted">
                    {value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </section>
  );
}
