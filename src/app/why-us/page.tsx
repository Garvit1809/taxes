import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { CTASection, PageHero } from "@/components/sections";
import { ArrowRight, ButtonLink, Container, Section } from "@/components/ui";
import { bonusReason, reasons } from "@/lib/content";

export const metadata: Metadata = {
  title: "Why us",
  description:
    "Ten reasons to choose Next Step Accountancy: fees well below the high street, a named AAT Licensed Accountant, unlimited support, no bookkeeping software required, and deadlines tracked for you.",
};

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why us"
        title={
          <>
            Ten reasons our clients{" "}
            <span className="font-serif font-normal italic text-accent">stay</span>
          </>
        }
        intro="A fair price gets people through the door. What keeps them is an accountant who answers the phone, claims every allowance, and never sends an invoice you weren't expecting."
      >
        <ButtonLink href="/contact" variant="accent" size="lg">
          Get a fixed quote <ArrowRight />
        </ButtonLink>
      </PageHero>

      <Section>
        <Container>
          <ol className="grid gap-px overflow-hidden rounded-card border border-line bg-[var(--line)] md:grid-cols-2">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={(i % 2) * 70} as="li">
                <div className="flex h-full flex-col bg-surface p-8 sm:p-10">
                  <div className="flex min-h-[3.25rem] items-baseline justify-between gap-4">
                    <span className="font-display text-sm font-bold text-accent tabular">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {reason.stat ? (
                      <span className="text-right">
                        <span className="block font-display text-[1.75rem] leading-none tracking-[-0.04em] text-ink tabular">
                          {reason.stat}
                        </span>
                        <span className="mt-1 block text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink-3">
                          {reason.statLabel}
                        </span>
                      </span>
                    ) : null}
                  </div>
                  <h2 className="mt-6 text-[1.375rem] leading-snug">{reason.title}</h2>
                  <p className="mt-3.5 text-[0.9375rem] leading-relaxed text-ink-2">{reason.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={100}>
            <div className="mt-6 flex flex-col gap-6 rounded-card border border-accent/25 bg-accent-soft p-8 sm:flex-row sm:items-center sm:p-10">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent/15 text-accent">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-7 w-7">
                  <path
                    d="M12 20c5-1.6 7-5.4 7-10V5.2L12 3 5 5.2V10c0 4.6 2 8.4 7 10Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path d="M9 11.6 11.2 14 15.4 9.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">Bonus reason</p>
                <h2 className="mt-2 text-[1.375rem] text-ink">{bonusReason.title}</h2>
                <p className="mt-2.5 max-w-3xl text-[0.9375rem] leading-relaxed text-ink-2">{bonusReason.body}</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
