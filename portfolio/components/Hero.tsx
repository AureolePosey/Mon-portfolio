import type { ComponentType } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";

import { HeroVisual } from "@/components/HeroVisual";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { TechBadge } from "@/components/ui/TechBadge";
import { site } from "@/data/site";

const socials: {
  label: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
}[] = [
  { label: "GitHub", href: site.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: site.linkedin, Icon: LinkedInIcon },
  { label: "Email", href: `mailto:${site.email}`, Icon: Mail },
];

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden">
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black,transparent)]"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
          <div className="flex flex-col items-start">
            <FadeIn>
              <span className="inline-flex items-center gap-2.5 rounded-pill border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                {site.availabilityBadge}
              </span>
            </FadeIn>

            <FadeIn delay={0.08} className="mt-7">
              <p className="text-base text-muted">Bonjour, je suis</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
                {site.name}
              </h1>
            </FadeIn>

            <FadeIn delay={0.16} className="mt-4">
              <p className="flex flex-col gap-1">
                <span className="text-2xl font-semibold tracking-tight text-gradient sm:text-3xl">
                  {site.heroRole}
                </span>
                <span className="text-base font-medium text-muted sm:text-lg">
                  Expert DevOps · {site.secondaryRole}
                </span>
              </p>
            </FadeIn>

            <FadeIn delay={0.24} className="mt-6">
              <p className="max-w-xl text-base leading-relaxed text-muted text-pretty sm:text-lg">
                {site.heroDescription}
              </p>
            </FadeIn>

            <FadeIn delay={0.32} className="mt-8">
              <ul className="flex flex-wrap gap-2">
                {site.heroStack.map((technology) => (
                  <li key={technology}>
                    <TechBadge label={technology} variant="accent" />
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-muted">{site.heroStackNote}</p>
            </FadeIn>

            <FadeIn delay={0.4} className="mt-9">
              <div className="flex flex-wrap items-center gap-3">
                <Button href="/#projets" size="lg">
                  Voir mes projets
                  <ArrowRight className="size-4" aria-hidden />
                </Button>
                <Button
                  href={site.cvPath}
                  download
                  variant="secondary"
                  size="lg"
                >
                  <Download className="size-4" aria-hidden />
                  Télécharger mon CV
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.48} className="mt-8">
              <ul className="flex items-center gap-2">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={
                        href.startsWith("mailto:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors duration-200 hover:border-border-strong hover:text-foreground"
                    >
                      <Icon className="size-[18px]" />
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <HeroVisual />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
