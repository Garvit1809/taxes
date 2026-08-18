import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({
  className = "",
  id,
  children,
}: {
  className?: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-3 ${className}`}>
      <span aria-hidden className="inline-block h-px w-6 bg-accent" />
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow ? <Eyebrow className={centered ? "justify-center" : ""}>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-5 text-balance text-3xl leading-[1.1] sm:text-[2.6rem]">{title}</h2>
      {intro ? <p className="mt-5 text-pretty text-[1.0625rem] leading-relaxed text-ink-2">{intro}</p> : null}
    </div>
  );
}

const buttonBase =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full text-[0.9375rem] font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants = {
  primary: "bg-brand text-brand-fg shadow-[var(--shadow-md)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)]",
  accent: "bg-accent text-accent-fg shadow-[var(--shadow-glow)] hover:-translate-y-0.5 hover:brightness-[1.06]",
  outline: "border border-line-strong bg-surface text-ink hover:border-accent hover:text-accent",
  ghost: "text-ink-2 hover:bg-surface-2 hover:text-ink",
} as const;

const sizes = {
  sm: "h-9 px-4",
  md: "h-11 px-5",
  lg: "h-[3.25rem] px-7 text-base",
} as const;

type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps & ComponentProps<typeof Link>) {
  return (
    <Link className={`${buttonBase} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps & ComponentProps<"button">) {
  return (
    <button className={`${buttonBase} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function Pill({ children, tone = "accent" }: { children: ReactNode; tone?: "accent" | "gold" | "neutral" }) {
  const tones = {
    accent: "bg-accent-soft text-accent",
    gold: "bg-gold-soft text-gold",
    neutral: "bg-surface-2 text-ink-2",
  } as const;
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function Card({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div className={`rounded-card border border-line bg-surface p-7 shadow-[var(--shadow-sm)] ${className}`}>{children}</div>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={`h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 ${className}`}>
      <path d="M4 10h11m0 0-4.2-4.2M15 10l-4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden className={`h-full w-full ${className}`}>
      <path d="m5.5 10.3 3 3 6-6.6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
