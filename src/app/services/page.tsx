import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { CTASection, PageHero } from "@/components/sections";
import { ArrowRight, ButtonLink, Check, Container, Section, SectionHead } from "@/components/ui";
import { monthlyPlan, servicePrices, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Statutory accounts, corporation tax returns, sole trader and partnership accounts, self assessment, bookkeeping, VAT returns and payroll — all prepared by AAT Licensed Accountants for a fixed fee.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything you have to file, handled properly"
        intro="Whatever structure you trade under, the deal is the same: a fixed fee agreed upfront, a named accountant who knows your business, and everything filed on time."
      >
        <ButtonLink href="/contact" variant="accent" size="lg">
          Get a fixed quote <ArrowRight />
        </ButtonLink>
      </PageHero>

      <Section>
        <Container>
          <div className="space-y-6">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 2) * 60}>
                <article
                  id={service.slug}
                  className="group grid scroll-mt-28 gap-8 rounded-card border border-line bg-surface p-8 transition-shadow duration-300 hover:shadow-[var(--shadow-md)] sm:p-10 lg:grid-cols-[0.9fr_1.1fr]"
                >
                  <div>
                    <span className="font-display text-sm font-bold text-accent tabular">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-4 text-[1.75rem] leading-tight">{service.name}</h2>
                    <p className="mt-3 max-w-sm text-[1.0625rem] leading-relaxed text-ink-2">{service.blurb}</p>
                  </div>

                  <ul className="grid gap-3.5 self-center sm:grid-cols-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[0.9375rem] text-ink-2">
                        <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-accent-soft p-[3px] text-accent">
                          <Check />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Self assessment detail — the highest-traffic standalone service */}
      <Section className="border-t border-line bg-surface">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <SectionHead
                eyebrow="Personal self assessment"
                title="Peace of mind that your return is filed accurately and on time"
                intro="Tax planning advice is included for every client. We have particular expertise in rental and holiday lets, profit computation, capital gains, interest and dividends, and foreign income."
              />
              <div className="mt-8 rounded-card border border-line bg-canvas p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">Self assessment</p>
                <p className="mt-2 font-display text-[3rem] leading-none tracking-[-0.05em] text-ink tabular">
                  <span className="align-top text-[1.5rem] text-ink-3">from £</span>99
                </p>
                <ButtonLink href="/contact" variant="primary" size="md" className="mt-6">
                  Get started <ArrowRight />
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">We add value by</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Advising you of ways to reduce and delay the tax you pay",
                  "Ensuring all tax allowances are claimed in the most tax efficient manner",
                  "Reminding you of upcoming deadlines and missing information",
                  "Replying to your emails in a timely manner",
                  "Providing the means to electronically sign documents",
                  "Providing a GDPR compliant portal for document sharing",
                  "Filing your self assessment directly to HMRC on your behalf",
                  "Quoting a fixed upfront fee with no surprise charges",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-line pb-4 text-[0.9375rem] leading-relaxed text-ink-2 last:border-0">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft p-1 text-accent">
                      <Check />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-line">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="Additional business services"
              title="Bolt on only what you use"
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicePrices
              .filter((s) => s.group === "addon" || s.group === "personal")
              .map((a, i) => (
                <Reveal key={a.name} delay={i * 70}>
                  <div className="flex h-full flex-col rounded-card border border-line bg-surface p-7">
                    <h3 className="text-[1.125rem]">{a.name}</h3>
                    <p className="mt-2 flex-1 text-[0.875rem] leading-relaxed text-ink-2">{a.detail}</p>
                    <p className="mt-6 border-t border-line pt-5">
                      <span className="font-display text-2xl font-bold text-ink tabular">
                        {a.from ? "from " : ""}£{a.price}
                      </span>
                      <span className="ml-1.5 text-[0.8125rem] text-ink-3">{a.unit}</span>
                    </p>
                  </div>
                </Reveal>
              ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Tell us what you need filed"
        body={`We work with limited companies, sole traders, partnerships and individuals across the UK — service by service, or all of it on the £${monthlyPlan.price} a month Complete plan.`}
      />
    </>
  );
}
