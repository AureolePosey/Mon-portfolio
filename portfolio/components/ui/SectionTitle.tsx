import { cn } from "@/lib/utils";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        isCentered && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="h-px w-6 bg-accent" />
          <span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </span>
        </div>
      ) : null}

      <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>

      {subtitle ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-muted text-pretty",
            isCentered && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
