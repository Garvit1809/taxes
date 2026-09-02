import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";

/**
 * The NS monogram, generated from the client's artwork by
 * scripts/prepare-logo.mjs (keys the near-white ground out to transparency).
 * Intrinsic size is 280x230; rendered at a fixed height with auto width.
 */
export function Logo({
  className = "",
  variant = "default",
}: {
  className?: string;
  /** "reversed" swaps the navy N for white so the mark holds on a navy ground. */
  variant?: "default" | "reversed";
}) {
  const reversed = variant === "reversed";

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <Image
        src={reversed ? "/brand/ns-mark-reversed.png" : "/brand/ns-mark.png"}
        alt=""
        width={280}
        height={230}
        priority
        className="h-9 w-auto shrink-0"
      />
      <span className="leading-none">
        <span className="block font-display text-[1.0625rem] font-extrabold uppercase tracking-[-0.01em]">
          <span className={reversed ? "text-white" : "text-brand"}>Next</span>{" "}
          <span className={reversed ? "text-[var(--accent-bright)]" : "text-accent"}>Step</span>
        </span>
        <span
          className={`mt-[3px] block text-[9px] font-semibold uppercase tracking-[0.26em] ${
            reversed ? "text-footer-ink-2" : "text-brand"
          }`}
        >
          Accountancy
        </span>
      </span>
    </Link>
  );
}
