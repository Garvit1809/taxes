import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="taxez — home" className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-9 w-9 place-items-center rounded-[11px] bg-brand text-brand-fg transition-transform duration-300 group-hover:-rotate-6">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-5 w-5">
          <path d="M4 6.2h16M12 6.2V19" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
          <path d="M15.6 19h4.6M20.2 19l-4.6-6.4" stroke="var(--accent)" strokeWidth="2.1" strokeLinecap="round" />
        </svg>
      </span>
      <span className="font-display text-[1.35rem] font-bold tracking-[-0.04em] text-ink">
        taxez
        <span className="text-accent">.</span>
      </span>
    </Link>
  );
}
