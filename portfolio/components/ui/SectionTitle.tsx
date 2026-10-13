import { cn } from "@/lib/utils";

export function SectionTitle({
  index,
  eyebrow,
  title,
  subtitle,
  className,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center gap-4">
        <p className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {index ? <span className="text-accent">{index} / </span> : null}
          {eyebrow}
        </p>
        <span aria-hidden className="h-px flex-1 bg-border" />
      </div>

      <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted text-pretty">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
