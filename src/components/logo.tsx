import Link from "next/link";
import { site } from "@/lib/content";

/**
 * Placeholder NS mark built from the logo's own motifs — the rising arrow and
 * the growth bars — in the brand navy/teal.
 *
 * TODO(client): swap for the supplied artwork. Save it to
 * /public/brand/next-step-logo.svg and replace the <svg> below with:
 *   <Image src="/brand/next-step-logo.svg" alt="" width={36} height={36} />
 */
function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden className={className}>
      <defs>
        <linearGradient id="ns-badge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand)" />
          <stop offset="100%" stopColor="var(--accent-bright)" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#ns-badge)" />
      <path d="M10 27.5v-6.2M15.4 27.5v-9.8M20.8 27.5v-4.4" stroke="#fff" strokeOpacity="0.55" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M11.5 19.4 18.4 13l4.6 4.3L30 10.6" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24.6 10.2H30.5v5.6" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label={`${site.name} — home`} className={`group inline-flex items-center gap-2.5 ${className}`}>
      <Mark className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:-rotate-3" />
      <span className="leading-none">
        <span className="block font-display text-[1.0625rem] font-extrabold uppercase tracking-[-0.01em] text-brand">
          Next Step
        </span>
        <span className="mt-[3px] block text-[9px] font-semibold uppercase tracking-[0.26em] text-accent">
          Accountancy
        </span>
      </span>
    </Link>
  );
}
