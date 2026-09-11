import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center">
      <Container>
        <div className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center">
          <span className="font-mono text-6xl font-bold text-gradient">
            404
          </span>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Cette page n&apos;existe pas
          </h1>
          <p className="text-base leading-relaxed text-muted">
            Le lien est peut-être erroné, ou la page a été déplacée.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/">Retour à l&apos;accueil</Button>
            <Button href="/#projets" variant="secondary">
              Voir les projets
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
