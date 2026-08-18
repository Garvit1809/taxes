import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { CTASection, PageHero } from "@/components/sections";
import { Container, Section, SectionHead } from "@/components/ui";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Richard McIntosh Ltd, trading as taxez, is a UK firm of online accountants serving small businesses and individuals with prices 75–90% lower than high street competitors.",
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
            Superior accountancy at a{" "}
            <span className="font-serif font-normal italic text-accent">substantially lower cost</span>
          </>
        }
        intro={`${site.legalName}, trading as ${site.name}, was launched with a single mission: give small businesses the standard of accountancy that larger firms reserve for larger fees.`}
      />

      <Section>
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <div className="space-y-6 text-[1.0625rem] leading-relaxed text-ink-2">
                <p className="font-serif text-[1.625rem] leading-[1.45] text-ink">
                  We are a growing UK based firm of online accountants who service small businesses and individuals
                  right across the country.
                </p>
                <p>
                  As an online firm, our costs are much less than high street accountants. There is no reception to
                  staff and no expensive high street office to rent, and an efficient paperless workflow means less
                  time spent on each file without cutting a single corner.
                </p>
                <p>
                  Those savings are passed straight on to you. Our prices are often found to be{" "}
                  <strong className="font-semibold text-ink">75–90% lower</strong> than our competitors, and the work
                  is still done and reviewed by a qualified chartered accountant before anything is filed.
                </p>
                <p>
                  Today we look after {site.clients} clients — limited companies, sole traders, partnerships and
                  individuals — from dormant companies filing their first set of accounts to businesses turning over
                  well past a quarter of a million pounds.
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
                    ["Registered in", "Scotland"],
                    ["Clients served", site.clients],
                    ["Practice type", "Online — UK wide"],
                    ["Accounts from", `£${site.fromPrice} per year`],
                    ["Self assessment from", "£59 per return"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-baseline justify-between gap-6 py-3.5">
                      <dt className="text-[0.875rem] text-ink-3">{label}</dt>
                      <dd className="text-right text-[0.9375rem] font-semibold text-ink">{value}</dd>
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
