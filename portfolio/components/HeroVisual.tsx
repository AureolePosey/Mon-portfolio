import Image from "next/image";

import { site } from "@/data/site";

// Registration marks, borrowed from technical drawings.
const marks = [
  "-left-2 -top-2 border-l-2 border-t-2",
  "-right-2 -top-2 border-r-2 border-t-2",
  "-bottom-2 -left-2 border-b-2 border-l-2",
  "-bottom-2 -right-2 border-b-2 border-r-2",
];

export function HeroVisual() {
  return (
    <div className="mx-auto w-full max-w-sm lg:max-w-md">
      <div className="relative">
        <div className="relative aspect-[4/5] overflow-hidden border border-border bg-surface">
          {site.photoPath ? (
            <Image
              src={site.photoPath}
              alt={`Portrait de ${site.name}, ${site.role}`}
              fill
              priority
              sizes="(min-width: 1024px) 28rem, 20rem"
              className="object-cover"
            />
          ) : (
            <div className="flex size-full items-center justify-center">
              <span className="font-mono text-5xl font-medium tracking-tight text-accent">
                {site.initials}
              </span>
            </div>
          )}
        </div>

        {marks.map((mark) => (
          <span
            key={mark}
            aria-hidden
            className={`absolute size-3 border-accent ${mark}`}
          />
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        <span>{site.location}</span>
        <span className="text-accent">{site.role}</span>
      </div>
    </div>
  );
}
