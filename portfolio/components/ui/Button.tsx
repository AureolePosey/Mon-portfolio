import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white dark:text-background hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25",
  secondary:
    "border border-border bg-surface text-foreground hover:bg-surface-hover hover:border-border-strong",
  ghost: "text-muted hover:text-foreground hover:bg-surface-hover",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 gap-1.5 px-3.5 text-sm",
  md: "h-11 gap-2 px-5 text-sm",
  lg: "h-12 gap-2 px-6 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-lg font-medium whitespace-nowrap transition-all duration-200 disabled:pointer-events-none disabled:opacity-50";

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = SharedProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof SharedProps> & {
    href?: never;
  };

type ButtonAsLink = SharedProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof SharedProps> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (rest.href !== undefined) {
    const { href, ...anchorProps } = rest;
    const isInternal =
      (href.startsWith("/") || href.startsWith("#")) &&
      anchorProps.download === undefined;

    if (isInternal) {
      return (
        <Link href={href} className={classes} {...anchorProps}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
