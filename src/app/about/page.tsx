import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { CTASection, PageHero } from "@/components/sections";
import { Container, Section, SectionHead } from "@/components/ui";
import { monthlyPlan, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Next Step Accountancy is a UK firm of online accountants serving small businesses and individuals — accounts, taxation and advisory on fixed, transparent fees.",
};

const values = [
  {
    title: "Plain English, always",
    body: "Tax is complicated enough. Our letters, emails and reports are written to be read once and understood — no jargon smuggled in to look clever.",
  },
  {
    title: "Fixed fees, quoted upfront",
    body: "You know the price before any work starts and it does not move. There is no clock running when you email a question.",
  },
  {
    title: "Paperless by design",
    body: "Everything is prepared, stored and filed electronically. It keeps costs down, keeps your data secure, and keeps the practice out of the recycling bin.",
  },
  {
    title: "Built for the long term",
    body: "Our growth comes from clients renewing year after year, so getting your accounts right matters far more to us than winning the next sign-up.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our practice"
        title={
          <>
            Serious accountancy at a{" "}
            <span className="font-serif font-normal italic text-accent">genuinely fair price</span>
          </>
        }
        intro={`${site.name} was founded on one idea: small businesses deserve the standard of accountancy that larger firms reserve for larger fees — and they should be able to see the price before they commit.`}
      />

      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <div className="space-y-6 text-[1.0625rem] leading-relaxed text-ink-2">
                <p className="font-serif text-[1.625rem] leading-[1.45] text-ink">
                  We are a UK based firm of online accountants looking after small businesses and individuals right
                  across the country.
                </p>
                <p>
                  Working online keeps our costs well below those of a high street practice. There is no reception to
                  staff and no prime-location office to fund, and a lean paperless workflow means less time spent
                  handling each file — without cutting a single corner on the work itself.
                </p>
                <p>
                  That saving goes straight into your fee. Our prices sit{" "}
                  <strong className="font-semibold text-ink">{site.savingRange}</strong> below typical high street
                  fees, and every set of accounts is still prepared and reviewed by a qualified accountant before
                  anything is filed.
                </p>
                <p>
                  We look after {site.clients} clients — limited companies, sole traders, partnerships and
                  individuals — from dormant companies filing their first set of accounts through to established
                  businesses running payroll and quarterly VAT.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-card border border-line bg-surface p-8">
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">Practice details</h2>
                <dl className="mt-6 divide-y divide-[var(--line)]">
                  {[
                    ["Trading name", site.name],
                    ["Registered company", site.legalName],
                    ["Company number", site.companyNumber],
                    ["Registered in", site.registeredIn],
                    ["Registered office", site.registeredOffice],
                    ["Clients served", site.clients],
                    ["Practice type", "Online — UK wide"],
                    ["Complete monthly plan", `£${monthlyPlan.price} per month`],
                    ["Self assessment from", "£99 per return"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3.5">
                      <dt className="shrink-0 text-[0.875rem] text-ink-3">{label}</dt>
                      <dd className="min-w-0 flex-1 text-right text-[0.9375rem] font-semibold text-ink">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-line bg-surface">
        <Container>
          <Reveal>
            <SectionHead eyebrow="How we work" title="Four things we refuse to compromise on" align="center" />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 2) * 80}>
                <div className="h-full rounded-card border border-line bg-canvas p-8">
                  <span className="font-display text-sm font-bold text-accent tabular">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-[1.25rem]">{value.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-2">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
