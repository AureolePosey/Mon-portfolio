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
          title="Data Architectures"
          subtitle="Les trois schémas que j'utilise selon le contexte, et surtout le critère qui fait choisir l'un plutôt que l'autre."
        />
      </FadeIn>

      <FadeIn delay={0.08} className="mt-12">
        <ArchitectureTabs />
      </FadeIn>
    </Section>
  );
}
