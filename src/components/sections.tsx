import type { ReactNode } from "react";
import { Reveal } from "./reveal";
import { ArrowRight, ButtonLink, Container, Eyebrow, Section } from "./ui";

/** Shared hero used by every page except the homepage. */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden border-b border-line">
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines mask-fade-b opacity-[0.55]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[460px] w-[900px] -translate-x-1/2 rounded-full opacity-[0.16] blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />
      <Container>
        <div className="relative py-20 sm:py-28">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-6 max-w-3xl text-balance text-[2.5rem] leading-[1.04] sm:text-[3.5rem]">{title}</h1>
            {intro ? (
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-2">{intro}</p>
            ) : null}
            {children ? <div className="mt-9">{children}</div> : null}
          </Reveal>
        </div>
      </Container>
    </div>
  );
}

/** Dark closing call-to-action. Appears at the foot of every page. */
export function CTASection({
  title = "Find out what you'd actually pay",
  body = "Tell us your business type and turnover. A chartered accountant reads every enquiry and comes back with a fixed annual price — usually within one working day.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <Section className="pb-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] bg-[#061420] px-7 py-16 text-center sm:px-16 sm:py-20">
            <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines opacity-[0.07]" />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-30 blur-[100px]"
              style={{ background: "radial-gradient(circle, #00a878, transparent 70%)" }}
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance text-3xl leading-[1.1] text-white sm:text-[2.75rem]">{title}</h2>
              <p className="mt-5 text-pretty text-[1.0625rem] leading-relaxed text-white/65">{body}</p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="accent" size="lg">
                  Get a fixed quote <ArrowRight />
                </ButtonLink>
                <ButtonLink
                  href="/pricing"
                  size="lg"
                  className="border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
                >
                  See all prices
                </ButtonLink>
              </div>
              <p className="mt-6 text-sm text-white/45">No obligation. No sales calls. Fixed fees only.</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/** Scrolling strip of the filings covered — replaces a generic logo wall. */
export function FilingMarquee() {
  const filings = [
    "Statutory accounts",
    "Corporation tax CT600",
    "Self assessment SA100",
    "Partnership return SA800",
    "VAT — Making Tax Digital",
    "PAYE RTI payroll",
    "Confirmation statement",
    "Companies House filing",
  ];
  const doubled = [...filings, ...filings];

  return (
    <div className="relative overflow-hidden border-y border-line bg-surface py-5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--surface)] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--surface)] to-transparent"
      />
      <div className="flex w-max animate-marquee items-center gap-10">
        {doubled.map((f, i) => (
          <span key={`${f}-${i}`} className="flex shrink-0 items-center gap-10 text-sm font-medium text-ink-3">
            {f}
            <span aria-hidden className="h-1 w-1 rounded-full bg-accent/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
