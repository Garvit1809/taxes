import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { CTASection, PageHero } from "@/components/sections";
import { Check, Container, Pill, Section, SectionHead } from "@/components/ui";
import { softwareOptions, templates } from "@/lib/content";

export const metadata: Metadata = {
  title: "Software & templates",
  description:
    "You don't need bookkeeping software to work with us. Free Excel bookkeeping templates for VAT and non-VAT limited companies and sole traders, plus our picks if you do want a package.",
};

const noSoftwarePoints = [
  "We build your accounts from your business bank transactions alone",
  "Nothing to buy, learn, or keep paying for year after year",
  "VAT registered? We file to HMRC through our own spreadsheet",
  "Already using a package? We work with any cloud-based option",
  "Your records stay yours — no lock-in to a platform we chose",
];

export default function SoftwarePage() {
  return (
    <>
      <PageHero
        eyebrow="Software"
        title="You don't need any. But if you want some, here's what we'd pick."
        intro="Bookkeeping packages typically cost £300 or more a year. We can produce your accounts without one — so treat everything on this page as optional."
      />

      {/* --------------------------- no software needed -------------------------- */}
      <Section>
        <Container>
          <div className="grid gap-10 rounded-card border border-line bg-surface p-8 sm:p-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Reveal>
              <Pill tone="accent">The short answer</Pill>
              <h2 className="mt-5 text-[2rem] leading-tight">No bookkeeping software required</h2>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-2">
                Most firms hand you a software subscription along with the engagement letter. We would rather save you
                the licence fee and the evenings spent learning it.
              </p>
            </Reveal>

            <Reveal delay={90}>
              <ul className="space-y-4">
                {noSoftwarePoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 border-b border-line pb-4 text-[0.9375rem] leading-relaxed text-ink-2 last:border-0 last:pb-0"
                  >
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft p-1 text-accent">
                      <Check />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ------------------------------ templates ------------------------------- */}
      <Section id="templates" className="scroll-mt-28 border-t border-line bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <SectionHead
                eyebrow="Free downloads"
                title="Excel bookkeeping templates"
                intro="Prefer a spreadsheet? These are the templates we hand to clients. They are also what we use to file VAT under Making Tax Digital without any software at all."
              />
            </Reveal>

            <Reveal delay={90}>
              <ul className="grid gap-px overflow-hidden rounded-card border border-line bg-[var(--line)] sm:grid-cols-2">
                {templates.map((template) => (
                  <li key={template.name}>
                    <Link
                      href={template.file || "/contact"}
                      {...(template.file ? { download: true } : {})}
                      className="group flex h-full items-center justify-between gap-4 bg-canvas p-7 transition-colors hover:bg-surface-2"
                    >
                      <span>
                        <span className="block font-display text-[1.0625rem] font-semibold text-ink transition-colors group-hover:text-accent">
                          {template.name}
                        </span>
                        <span className="mt-1 block text-[0.8125rem] text-ink-3">
                          {template.file ? "Excel .xlsx template" : "Ask us for a copy"}
                        </span>
                      </span>
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-ink-3 transition-colors group-hover:border-accent group-hover:text-accent">
                        <svg viewBox="0 0 20 20" fill="none" aria-hidden className="h-4 w-4">
                          <path
                            d="M10 3.5v9m0 0 3.4-3.4M10 12.5 6.6 9.1M4 15.5h12"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ---------------------------- bookkeeping apps --------------------------- */}
      <Section className="border-t border-line">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="If you do want software"
              title="We work with any cloud-based package"
              intro="These are the ones we see working well. Match the package to your transaction volume — paying for features you never open is the most common waste we see."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {softwareOptions.map((option, i) => (
              <Reveal key={option.name} delay={i * 70}>
                <div className="flex h-full flex-col rounded-card border border-line bg-surface p-7">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[1.125rem]">{option.name}</h3>
                    {option.tag === "Recommended" ? <Pill tone="gold">{option.tag}</Pill> : null}
                  </div>
                  {option.tag !== "Recommended" ? (
                    <p className="mt-2 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-ink-3">
                      {option.tag}
                    </p>
                  ) : null}
                  <p className="mt-4 flex-1 text-[0.875rem] leading-relaxed text-ink-2">{option.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Still deciding what you need?"
        body="Tell us roughly how many transactions you handle a month and we will tell you honestly whether software is worth it for you."
      />
    </>
  );
}
