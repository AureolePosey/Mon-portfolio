"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Basculer entre le mode sombre et le mode clair"
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors duration-200 hover:border-border-strong hover:text-foreground",
        className,
      )}
    >
      {/* Both icons are rendered and CSS picks one, so server and client markup match. */}
      <Sun className="hidden size-[18px] dark:block" aria-hidden />
      <Moon className="size-[18px] dark:hidden" aria-hidden />
    </button>
  );
}
