import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/sections";
import { Check, Container, Section } from "@/components/ui";
import { site, tiers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact & quote",
  description:
    "Tell us your business type and turnover and a chartered accountant will send you a fixed annual price, usually within one working day.",
};

const assurances = [
  "A chartered accountant reads every enquiry personally",
  "A fixed annual price, before any work begins",
  "No sales calls and no marketing lists",
  "Switching from another accountant? We handle the handover",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Get your price in{" "}
            <span className="font-serif font-normal italic text-accent">one working day</span>
          </>
        }
        intro="Fill this in and we will come back with a fixed annual fee for exactly what you need. It costs nothing to ask, and there is no obligation whatsoever."
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
            <Reveal>
              <QuoteForm />
            </Reveal>

            <Reveal delay={90}>
              <div className="flex flex-col gap-6">
                <div className="rounded-card border border-line bg-surface p-7">
                  <h2 className="text-[1.125rem]">What happens next</h2>
                  <ul className="mt-5 space-y-3.5">
                    {assurances.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[0.9375rem] leading-relaxed text-ink-2">
                        <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-accent-soft p-[3px] text-accent">
                          <Check />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-card border border-line bg-surface p-7">
                  <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">Price guide</h2>
                  <ul className="mt-5 divide-y divide-[var(--line)]">
                    {tiers.slice(0, 4).map((tier) => (
                      <li key={tier.band} className="flex items-baseline justify-between gap-4 py-2.5">
                        <span className="text-[0.875rem] text-ink-2">{tier.short}</span>
                        <span className="font-display text-[1.0625rem] font-bold text-ink tabular">£{tier.price}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-[0.8125rem] leading-relaxed text-ink-3">
                    Annual business package. Self assessment from £59. Full list on the pricing page.
                  </p>
                </div>

                <div className="rounded-card border border-line bg-brand p-7 text-brand-fg">
                  <p className="font-display text-[2rem] leading-none tracking-[-0.04em] tabular">{site.clients}</p>
                  <p className="mt-2.5 text-[0.9375rem] opacity-70">
                    UK businesses and individuals already file through {site.name}.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
