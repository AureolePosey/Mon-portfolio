import { Award, GraduationCap, ExternalLink } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechBadge } from "@/components/ui/TechBadge";
import { certifications } from "@/data/certifications";
import { educations } from "@/data/education";

export function Education() {
  return (
    <Section id="formation" className="bg-band">
      <FadeIn>
        <SectionTitle
          eyebrow="Formation"
          title="Diplômes & certifications"
          subtitle="Le socle académique en informatique, complété par une spécialisation continue en data."
        />
      </FadeIn>

      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <h3 className="mb-6 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            <GraduationCap className="size-4 text-accent" aria-hidden />
            Diplômes
          </h3>

          <ul className="flex flex-col gap-4">
            {educations.map((education, index) => (
              <li key={education.id}>
                <FadeIn delay={index * 0.06}>
                  <Card className="p-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h4 className="max-w-md text-base font-semibold leading-snug tracking-tight">
                        {education.degree}
                      </h4>
                      <span className="rounded-pill border border-accent/25 bg-accent-soft px-2.5 py-1 font-mono text-[11px] font-medium text-accent">
                        {education.level}
                      </span>
                    </div>

                    {education.option ? (
                      <p className="mt-2 text-sm text-muted">
                        Option{" "}
                        <span className="text-foreground">
                          {education.option}
                        </span>
                      </p>
                    ) : null}

                    <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
                      <span className="font-medium text-foreground">
                        {education.school}
                      </span>
                      <span aria-hidden>·</span>
                      <span>{education.location}</span>
                      <span aria-hidden>·</span>
                      <span className="font-mono text-xs">
                        {education.period}
                      </span>
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {education.highlights.map((highlight) => (
                        <li key={highlight}>
                          <TechBadge label={highlight} size="sm" />
                        </li>
                      ))}
                    </ul>
                  </Card>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-6 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            <Award className="size-4 text-accent" aria-hidden />
            Certifications
          </h3>

          <ul className="flex flex-col gap-4">
            {certifications.map((certification, index) => (
              <li key={certification.id}>
                <FadeIn delay={index * 0.06}>
                  <Card
                    interactive={Boolean(certification.url)}
                    className="group relative p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h4 className="text-base font-semibold leading-snug tracking-tight">
                          {certification.url ? (
                            <a
                              href={certification.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="after:absolute after:inset-0 after:content-[''] group-hover:text-accent"
                            >
                              {certification.title}
                            </a>
                          ) : (
                            certification.title
                          )}
                        </h4>
                        <p className="mt-1.5 text-sm text-muted">
                          {certification.issuer}
                        </p>
                        {certification.credentialId ? (
                          <p className="mt-1.5 truncate font-mono text-[11px] text-muted">
                            ID : {certification.credentialId}
                          </p>
                        ) : null}
                      </div>

                      <div className="flex shrink-0 items-center gap-2">
                        <span className="font-mono text-xs text-muted">
                          {certification.year}
                        </span>
                        {certification.url ? (
                          <ExternalLink
                            className="size-3.5 text-muted"
                            aria-hidden
                          />
                        ) : null}
                      </div>
                    </div>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {certification.skills.map((skill) => (
                        <li key={skill}>
                          <TechBadge label={skill} size="sm" />
                        </li>
                      ))}
                    </ul>
                  </Card>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
