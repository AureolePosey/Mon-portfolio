import { ArchitectureTabs } from "@/components/ArchitectureTabs";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Architectures() {
  return (
    <Section id="architectures" className="bg-band">
      <FadeIn>
        <SectionTitle
          eyebrow="Architectures"
          title="Schémas de référence"
          subtitle="Les quatre architectures qui structurent mes projets DevOps, et ce que chacune résout concrètement."
        />
      </FadeIn>

      <FadeIn delay={0.08} className="mt-12">
        <ArchitectureTabs />
      </FadeIn>
    </Section>
  );
}
