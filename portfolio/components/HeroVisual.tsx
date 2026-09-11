"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { site } from "@/data/site";

// Perimeter of the rounded rect below (360x460, r=24), used to size the moving dash.
const RING_LENGTH = 1599;

const chips = [
  { label: "Extract", className: "-left-2 top-[7%]", delay: 0 },
  { label: "Transform", className: "-right-2 top-[45%]", delay: 0.6 },
  { label: "Load", className: "-left-2 bottom-[11%]", delay: 1.2 },
];

export function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm lg:max-w-md">
      <div
        aria-hidden
        className="absolute inset-[12%] rounded-full bg-accent/20 blur-[70px]"
      />

      <svg
        viewBox="0 0 400 500"
        aria-hidden
        className="absolute inset-0 size-full"
      >
        <defs>
          <linearGradient id="pipeline-flow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--cyan)" />
          </linearGradient>
        </defs>

        <rect
          x="20"
          y="20"
          width="360"
          height="460"
          rx="24"
          fill="none"
          stroke="var(--border-strong)"
          strokeWidth="1.5"
        />

        {shouldReduceMotion
          ? null
          : [0, 3.5].map((delay) => (
              <motion.rect
                key={delay}
                x="20"
                y="20"
                width="360"
                height="460"
                rx="24"
                fill="none"
                stroke="url(#pipeline-flow)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={`70 ${RING_LENGTH - 70}`}
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -RING_LENGTH }}
                transition={{
                  duration: 7,
                  delay,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

        {[
          [200, 20],
          [380, 250],
          [200, 480],
          [20, 250],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="9" fill="var(--background)" />
            <circle
              cx={cx}
              cy={cy}
              r="4.5"
              fill="var(--accent)"
              opacity="0.9"
            />
          </g>
        ))}
      </svg>

      <div className="absolute inset-[9%] overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
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
          <div className="bg-grid relative flex size-full items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-cyan/10" />
            <div className="relative flex flex-col items-center gap-3">
              <span className="font-mono text-5xl font-bold tracking-tight text-gradient">
                {site.initials}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                photo à venir
              </span>
            </div>
          </div>
        )}
      </div>

      {chips.map((chip) => (
        <motion.span
          key={chip.label}
          animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
          transition={{
            duration: 4,
            delay: chip.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${chip.className} rounded-pill border border-border bg-background/90 px-3 py-1.5 font-mono text-[11px] font-medium text-muted shadow-card backdrop-blur-sm`}
        >
          {chip.label}
        </motion.span>
      ))}
    </div>
  );
}
