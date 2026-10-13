import { ExternalLink } from "lucide-react";

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
          index="06"
          eyebrow="Formation"
          title="Education & Training"
          subtitle="Un socle académique en informatique, prolongé aujourd'hui par un parcours Expert DevOps."
        />
      </FadeIn>

      <div className="mt-14 grid gap-x-16 gap-y-14 lg:grid-cols-2">
        <div>
          <h3 className="border-b border-border-strong pb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Diplômes et formations
          </h3>

          <ul className="flex flex-col">
            {educations.map((education, index) => (
              <li key={education.id} className="border-b border-border py-6">
                <FadeIn delay={index * 0.04}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h4 className="max-w-md text-base font-semibold leading-snug tracking-tight">
                      {education.degree}
                    </h4>
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent">
                      {education.level}
                    </span>
                  </div>

                  {education.targetTitle ? (
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {education.targetTitle}
                    </p>
                  ) : null}

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

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {education.highlights.map((highlight) => (
                      <li key={highlight}>
                        <TechBadge label={highlight} size="sm" />
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="border-b border-border-strong pb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            Certifications obtenues
          </h3>

          <ul className="flex flex-col">
            {certifications.map((certification, index) => (
              <li
                key={certification.id}
                className="border-b border-border py-5"
              >
                <FadeIn delay={index * 0.04}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h4 className="text-base font-semibold leading-snug tracking-tight">
                        {certification.url ? (
                          <a
                            href={certification.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-accent"
                          >
                            {certification.title}
                            <ExternalLink className="size-3.5" aria-hidden />
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

                    <span className="shrink-0 font-mono text-[11px] text-muted">
                      {certification.year}
                    </span>
                  </div>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {certification.skills.map((skill) => (
                      <li key={skill}>
                        <TechBadge label={skill} size="sm" />
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
