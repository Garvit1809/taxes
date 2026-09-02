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
  /**
   * "reversed" is for the navy footer. The mark is a navy-to-teal gradient with
   * a white chart line running through it, so recolouring it for a dark ground
   * destroys that internal contrast — it sits on a white chip instead, which
   * keeps the artwork exactly as drawn.
   */
  variant?: "default" | "reversed";
}) {
  const reversed = variant === "reversed";

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      {reversed ? (
        <span className="grid shrink-0 place-items-center rounded-xl bg-white px-2 py-1.5">
          <Image src="/brand/ns-mark.png" alt="" width={308} height={186} className="h-7 w-auto" />
        </span>
      ) : (
        <Image
          src="/brand/ns-mark.png"
          alt=""
          width={308}
          height={186}
          priority
          className="h-9 w-auto shrink-0"
        />
      )}
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
