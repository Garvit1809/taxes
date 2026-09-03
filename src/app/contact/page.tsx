import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { PageHero } from "@/components/sections";
import { Check, Container, Section } from "@/components/ui";
import { monthlyPlan, servicePrices, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact & quote",
  description:
    "Tell us your business type and what you need filed and an AAT Licensed Accountant will send you a fixed price, usually within one working day.",
};

const assurances = [
  "An AAT Licensed Accountant reads every enquiry personally",
  "A fixed price, agreed before any work begins",
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
                  <h2 className="text-[1.125rem]">Rather just talk to us?</h2>
                  <ul className="mt-5 space-y-3.5">
                    <li>
                      <a
                        href={site.phoneHref}
                        className="group flex items-center gap-3 text-[0.9375rem] font-semibold text-ink transition-colors hover:text-accent"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                          <svg viewBox="0 0 20 20" fill="none" aria-hidden className="h-4 w-4">
                            <path
                              d="M4.2 3.5h3l1.2 3-1.7 1.3a10 10 0 0 0 4.5 4.5l1.3-1.7 3 1.2v3a1.2 1.2 0 0 1-1.3 1.2A12.7 12.7 0 0 1 3 4.8 1.2 1.2 0 0 1 4.2 3.5Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {site.phone}
                      </a>
                    </li>
                    <li>
                      <a
                        href={site.phoneHref2}
                        className="group flex items-center gap-3 text-[0.9375rem] font-semibold text-ink transition-colors hover:text-accent"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                          <svg viewBox="0 0 20 20" fill="none" aria-hidden className="h-4 w-4">
                            <path
                              d="M4.2 3.5h3l1.2 3-1.7 1.3a10 10 0 0 0 4.5 4.5l1.3-1.7 3 1.2v3a1.2 1.2 0 0 1-1.3 1.2A12.7 12.7 0 0 1 3 4.8 1.2 1.2 0 0 1 4.2 3.5Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {site.phone2}
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${site.email}`}
                        className="group flex items-center gap-3 text-[0.9375rem] font-semibold text-ink transition-colors hover:text-accent"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                          <svg viewBox="0 0 20 20" fill="none" aria-hidden className="h-4 w-4">
                            <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
                            <path d="m3.5 6 6.5 4.5L16.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </span>
                        <span className="break-all">{site.email}</span>
                      </a>
                    </li>
                  </ul>
                </div>

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
                    {servicePrices.slice(0, 5).map((s) => (
                      <li key={`${s.name}-${s.variant ?? ""}`} className="flex items-baseline justify-between gap-4 py-2.5">
                        <span className="text-[0.875rem] text-ink-2">
                          {s.name}
                          {s.variant ? <span className="text-ink-3"> · {s.variant}</span> : null}
                        </span>
                        <span className="shrink-0 font-display text-[1.0625rem] font-bold text-ink tabular">
                          {s.from ? "from " : ""}£{s.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-[0.8125rem] leading-relaxed text-ink-3">
                    Or £{monthlyPlan.price} a month for everything on the Complete Monthly plan. Full
                    list on the pricing page.
                  </p>
                </div>

                <div className="rounded-card border border-line bg-brand p-7 text-brand-fg">
                  <p className="font-serif text-[1.5rem] leading-snug">{site.tagline}</p>
                  <p className="mt-3 text-[0.9375rem] opacity-70">
                    Accounts, taxation and advisory — {site.strapline.toLowerCase()}.
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
