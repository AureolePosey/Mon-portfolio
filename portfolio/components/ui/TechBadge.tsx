import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "accent" | "outline";
type BadgeSize = "sm" | "md";

const variantClasses: Record<BadgeVariant, string> = {
  default: "border-border bg-surface text-muted",
  accent: "border-accent/25 bg-accent-soft text-accent",
  outline: "border-border-strong bg-transparent text-foreground",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "px-2.5 py-1 text-[11px]",
  md: "px-3 py-1.5 text-xs",
};

export function TechBadge({
  label,
  variant = "default",
  size = "md",
  className,
}: {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill border font-mono font-medium tracking-tight whitespace-nowrap transition-colors duration-200",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {label}
    </span>
  );
}
