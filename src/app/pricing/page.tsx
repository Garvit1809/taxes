import type { Metadata } from "next";
import { PricingExplorer } from "@/components/pricing-explorer";
import { Reveal } from "@/components/reveal";
import { CTASection, PageHero } from "@/components/sections";
import { Check, Container, Pill, Section, SectionHead } from "@/components/ui";
import { addOns, packageIncludes, tiers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Fixed annual accountancy prices by turnover — from £49 for dormant accounts to £599 for businesses over £250,000. Self assessment from £59, payroll £5 per payslip, VAT £29 per return.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            One fixed fee a year.{" "}
            <span className="font-serif font-normal italic text-accent">Nothing on top.</span>
          </>
        }
        intro="Our business package price is set by your annual turnover, and it covers the accounts, the tax return, and a dedicated chartered accountant for the whole year. Add payroll, VAT or a confirmation statement only if you need them."
      />

      <Section>
        <Container>
          <Reveal>
            <PricingExplorer />
          </Reveal>
        </Container>
      </Section>

      {/* Full table — the complete price list at a glance */}
      <Section className="border-t border-line bg-surface">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="The full list"
              title="Business package prices"
              intro="All prices are annual and include accounts preparation and filing, the tax return, and unlimited support."
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left">
                <caption className="sr-only">Annual business package prices by turnover band</caption>
                <thead>
                  <tr className="border-b border-line-strong">
                    <th scope="col" className="pb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">
                      Annual turnover
                    </th>
                    <th scope="col" className="pb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">
                      What it suits
                    </th>
                    <th scope="col" className="pb-4 text-right text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">
                      Price per year
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tiers.map((tier) => (
                    <tr key={tier.band} className="border-b border-line transition-colors hover:bg-surface-2">
                      <th scope="row" className="py-5 pr-4 align-middle font-display text-[1.0625rem] font-semibold text-ink">
                        <span className="flex flex-wrap items-center gap-3">
                          {tier.band}
                          {tier.featured ? <Pill tone="gold">Most popular</Pill> : null}
                        </span>
                      </th>
                      <td className="py-5 pr-4 align-middle text-[0.9375rem] text-ink-2">{tier.note}</td>
                      <td className="py-5 text-right align-middle font-display text-[1.375rem] font-bold text-ink tabular">
                        £{tier.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-card border border-line bg-canvas p-8">
                <h3 className="text-xl">Included at every price</h3>
                <ul className="mt-6 grid gap-3.5 sm:grid-cols-2">
                  {packageIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.9375rem] text-ink-2">
                      <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-accent-soft p-[3px] text-accent">
                        <Check />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="h-full rounded-card border border-line bg-canvas p-8">
                <h3 className="text-xl">Optional extras</h3>
                <ul className="mt-6 space-y-5">
                  {addOns.map((a) => (
                    <li key={a.name} className="flex items-start justify-between gap-6 border-b border-line pb-5 last:border-0 last:pb-0">
                      <div>
                        <p className="font-display text-[1.0625rem] font-semibold text-ink">{a.name}</p>
                        <p className="mt-1 text-[0.875rem] leading-relaxed text-ink-2">{a.detail}</p>
                      </div>
                      <p className="shrink-0 text-right">
                        <span className="block font-display text-xl font-bold text-accent tabular">{a.price}</span>
                        <span className="block text-xs text-ink-3">{a.unit}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <p className="mt-10 text-sm text-ink-3">
              * All business package prices are annual. Turnover bands are based on the figures for the accounting
              period we are preparing. If your turnover crosses a band mid-year we will tell you before any work
              starts — the price is never changed after the fact.
            </p>
          </Reveal>
        </Container>
      </Section>

      <CTASection
        title="Not sure which band you're in?"
        body="Send us a rough turnover figure and your business type. We will confirm the exact annual price before you commit to anything."
      />
    </>
  );
}
