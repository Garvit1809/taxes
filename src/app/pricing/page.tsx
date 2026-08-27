import type { Metadata } from "next";
import { PricingExplorer } from "@/components/pricing-explorer";
import { Reveal } from "@/components/reveal";
import { CTASection, PageHero } from "@/components/sections";
import { Check, Container, Pill, Section, SectionHead } from "@/components/ui";
import { monthlyPlan, packageIncludes, servicePrices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Fixed accountancy fees — dormant accounts £49, sole trader accounts £299, annual accounts and CT600 from £399, self assessment from £99, payroll £5 per payslip. Complete monthly plan £75 a month.",
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
        intro="Pick services individually, or put everything on the Complete Monthly plan. Either way the fee is agreed before any work starts and it does not move."
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
              title="Service prices"
              intro="Everything we file, with the price next to it. Prices exclude VAT where applicable."
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <caption className="sr-only">Fixed prices for each accountancy service</caption>
                <thead>
                  <tr className="border-b border-line-strong">
                    <th scope="col" className="pb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">
                      Service
                    </th>
                    <th scope="col" className="pb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">
                      What it covers
                    </th>
                    <th scope="col" className="pb-4 text-right text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {servicePrices.map((service) => (
                    <tr
                      key={`${service.name}-${service.variant ?? ""}`}
                      className="border-b border-line transition-colors hover:bg-surface-2"
                    >
                      <th scope="row" className="py-5 pr-4 align-top font-display text-[1.0625rem] font-semibold text-ink">
                        <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          {service.name}
                          {service.variant ? <Pill tone="neutral">{service.variant}</Pill> : null}
                        </span>
                      </th>
                      <td className="py-5 pr-4 align-top text-[0.9375rem] text-ink-2">{service.detail}</td>
                      <td className="py-5 text-right align-top">
                        <span className="block font-display text-[1.375rem] font-bold text-ink tabular">
                          {service.from ? <span className="mr-1 text-[0.8125rem] text-ink-3">from</span> : null}£
                          {service.price}
                        </span>
                        <span className="mt-0.5 block text-[0.75rem] text-ink-3">{service.unit}</span>
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
                <h3 className="text-xl">Included with every engagement</h3>
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
              <div className="flex h-full flex-col rounded-card border border-accent/25 bg-accent-soft p-8">
                <Pill tone="accent">Best value</Pill>
                <h3 className="mt-5 text-xl">{monthlyPlan.name} — £{monthlyPlan.price} a month</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">{monthlyPlan.suitedTo}.</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {monthlyPlan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.9375rem] text-ink-2">
                      <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-accent/15 p-[3px] text-accent">
                        <Check />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-accent/20 pt-5 text-[0.875rem] text-ink-2">
                  Works out at <strong className="font-semibold text-ink tabular">£{monthlyPlan.annual}</strong> a year,
                  spread evenly instead of landing in one invoice.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <p className="mt-10 text-sm text-ink-3">
              * Prices are fixed and agreed before work begins. The Complete Monthly plan assumes around 100 bank
              transactions a month and payroll for up to two employees; if your volumes are higher we will say so
              upfront and quote accordingly rather than adjust the bill later.
            </p>
          </Reveal>
        </Container>
      </Section>

      <CTASection
        title="Not sure which of these you need?"
        body="Tell us your business type and what you file today. We will map it to the right services and confirm the exact fee before you commit to anything."
      />
    </>
  );
}
