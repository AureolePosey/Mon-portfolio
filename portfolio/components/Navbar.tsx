"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Download, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navHref, navLinks } from "@/data/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (mostVisible) {
          setActiveId(mostVisible.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || menuOpen
          ? "border-border bg-background/85 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            aria-label={`${site.name}, retour à l'accueil`}
            className="group flex items-center gap-3"
          >
            <span className="inline-flex size-9 items-center justify-center rounded-[3px] border border-accent/40 font-mono text-sm font-medium text-accent transition-colors duration-200 group-hover:border-accent">
              {site.initials}
            </span>
            <span className="hidden font-mono text-sm tracking-tight sm:block">
              {site.role}
            </span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === "/" && activeId === link.id;

                return (
                  <li key={link.id}>
                    <Link
                      href={navHref(link.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative inline-flex items-center px-3.5 py-2 text-sm transition-colors duration-200",
                        isActive
                          ? "text-foreground"
                          : "text-muted hover:text-foreground",
                      )}
                    >
                      {link.label}
                      {isActive ? (
                        <motion.span
                          layoutId="navbar-active"
                          aria-hidden
                          className="absolute inset-x-3 bottom-0.5 h-px bg-accent"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 32,
                          }}
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Button
              href={site.cvPath}
              download
              variant="secondary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              <Download className="size-4" aria-hidden />
              Mon CV
            </Button>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className="inline-flex size-10 items-center justify-center rounded-[3px] border border-border bg-surface text-muted transition-colors duration-200 hover:border-border-strong hover:text-foreground lg:hidden"
            >
              {menuOpen ? (
                <X className="size-[18px]" aria-hidden />
              ) : (
                <Menu className="size-[18px]" aria-hidden />
              )}
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border lg:hidden"
          >
            <Container className="py-2">
              <nav aria-label="Navigation mobile">
                <ul className="flex flex-col">
                  {navLinks.map((link, index) => (
                    <li key={link.id} className="border-b border-border">
                      <Link
                        href={navHref(link.id)}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-baseline gap-4 py-3.5 text-base text-muted transition-colors duration-200 hover:text-foreground"
                      >
                        <span className="font-mono text-[11px] text-accent">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <Button
                href={site.cvPath}
                download
                variant="secondary"
                className="my-4 w-full sm:hidden"
                onClick={() => setMenuOpen(false)}
              >
                <Download className="size-4" aria-hidden />
                Télécharger mon CV
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
