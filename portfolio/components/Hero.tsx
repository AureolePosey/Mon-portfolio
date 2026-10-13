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
    <section id="accueil" className="border-b border-border">
      <Container>
        <div className="grid items-center gap-14 py-14 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:py-24">
          <div className="flex flex-col items-start">
            <FadeIn>
              <span className="inline-flex items-center gap-2.5 rounded-[2px] border border-border bg-surface px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                </span>
                {site.availabilityBadge}
              </span>
            </FadeIn>

            <FadeIn delay={0.08} className="mt-8">
              <p className="font-mono text-sm text-muted">Bonjour, je suis</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                {site.name}
              </h1>
            </FadeIn>

            <FadeIn delay={0.14} className="mt-5 w-full">
              <div className="border-t border-border pt-5">
                <p className="text-2xl font-semibold tracking-tight text-accent sm:text-[1.75rem]">
                  {site.heroRole}
                </p>
                <p className="mt-1.5 font-mono text-sm uppercase tracking-[0.14em] text-muted">
                  Expert DevOps · {site.secondaryRole}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-6">
              <p className="max-w-xl text-base leading-relaxed text-muted text-pretty">
                {site.heroDescription}
              </p>
            </FadeIn>

            <FadeIn delay={0.26} className="mt-8">
              <ul className="flex flex-wrap gap-1.5">
                {site.heroStack.map((technology) => (
                  <li key={technology}>
                    <TechBadge label={technology} variant="accent" size="sm" />
                  </li>
                ))}
              </ul>
              <p className="mt-3 font-mono text-[11px] text-muted">
                {site.heroStackNote}
              </p>
            </FadeIn>

            <FadeIn delay={0.32} className="mt-9">
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

            <FadeIn delay={0.38} className="mt-8">
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
                      className="inline-flex size-10 items-center justify-center rounded-[3px] border border-border bg-surface text-muted transition-colors duration-200 hover:border-border-strong hover:text-foreground"
                    >
                      <Icon className="size-[18px]" />
                    </a>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn delay={0.16}>
            <HeroVisual />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
