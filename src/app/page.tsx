import Link from "next/link";
import { Accordion } from "@/components/accordion";
import { PricingExplorer } from "@/components/pricing-explorer";
import { Reveal } from "@/components/reveal";
import { CTASection, FilingMarquee } from "@/components/sections";
import { ArrowRight, ButtonLink, Check, Container, Eyebrow, Pill, Section, SectionHead } from "@/components/ui";
import { faqs, reasons, services, site, steps, testimonials, tiers } from "@/lib/content";

const stats = [
  { value: site.clients, label: "UK clients served" },
  { value: "75–90%", label: "Lower than high street firms" },
  { value: `£${site.fromPrice}`, label: "Accounts & tax return, per year" },
  { value: "1–2 days", label: "Typical reply to any query" },
];

export default function HomePage() {
  return (
    <>
      {/* ------------------------------- Hero ------------------------------- */}
      <div className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines mask-fade-radial opacity-60" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-56 right-[-10%] h-[620px] w-[820px] rounded-full opacity-[0.18] blur-[130px]"
          style={{ background: "radial-gradient(circle, var(--accent), transparent 68%)" }}
        />
        <Container>
          <div className="relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:py-28">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface py-1.5 pl-1.5 pr-4 text-[0.8125rem] text-ink-2 shadow-[var(--shadow-sm)]">
                  <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-accent">
                    Chartered
                  </span>
                  Currently helping {site.clients} clients across the UK
                </span>
              </Reveal>

              <Reveal delay={70}>
                <h1 className="mt-7 text-balance text-[2.75rem] leading-[1.02] sm:text-[4rem] lg:text-[4.25rem]">
                  The UK&apos;s{" "}
                  <span className="relative whitespace-nowrap">
                    <span className="font-serif font-normal italic text-accent">cheapest</span>
                    <svg
                      aria-hidden
                      viewBox="0 0 220 12"
                      preserveAspectRatio="none"
                      className="absolute -bottom-1 left-0 h-2.5 w-full text-accent/35"
                    >
                      <path d="M2 8.5C50 3 168 2.2 218 6.4" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                    </svg>
                  </span>{" "}
                  online accountants
                </h1>
              </Reveal>

              <Reveal delay={130}>
                <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-ink-2">
                  Accounts and tax returns for small businesses and individuals, from{" "}
                  <strong className="font-semibold text-ink">£{site.fromPrice} a year</strong>. A dedicated chartered
                  accountant, unlimited advice, and no bookkeeping software to buy or learn.
                </p>
              </Reveal>

              <Reveal delay={190}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/contact" variant="accent" size="lg">
                    Get a fixed quote <ArrowRight />
                  </ButtonLink>
                  <ButtonLink href="/pricing" variant="outline" size="lg">
                    See pricing
                  </ButtonLink>
                </div>
              </Reveal>

              <Reveal delay={250}>
                <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
                  {["Fixed annual fee", "No software required", "Filed to HMRC & Companies House"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-ink-2">
                      <span className="grid h-[18px] w-[18px] place-items-center rounded-full bg-accent-soft p-[3px] text-accent">
                        <Check />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* ---------------------- floating quote card --------------------- */}
            <Reveal delay={220} className="relative">
              <div className="relative mx-auto max-w-[420px] lg:ml-auto lg:mr-0">
                <div
                  aria-hidden
                  className="absolute -inset-6 rounded-[32px] bg-accent/10 blur-2xl"
                />
                <div className="animate-floaty relative rounded-[24px] border border-line bg-surface p-7 shadow-[var(--shadow-lg)]">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">Your annual fee</p>
                      <p className="mt-1 text-sm text-ink-2">Limited company · £1k–45k turnover</p>
                    </div>
                    <Pill tone="gold">Fixed</Pill>
                  </div>

                  <div className="mt-6 flex items-end gap-2 border-b border-line pb-6">
                    <span className="font-display text-[3.75rem] leading-[0.85] tracking-[-0.05em] text-ink tabular">
                      <span className="align-top text-[1.75rem] leading-none text-ink-3">£</span>299
                    </span>
                    <span className="pb-1.5 text-sm text-ink-3">/ year</span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {[
                      "Statutory accounts prepared & filed",
                      "Corporation tax return (CT600)",
                      "Dedicated chartered accountant",
                      "Unlimited advice & support",
                    ].map((line) => (
                      <li key={line} className="flex items-start gap-2.5 text-[0.9375rem] text-ink-2">
                        <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-accent-soft p-[3px] text-accent">
                          <Check />
                        </span>
                        {line}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-2xl bg-surface-2 p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-ink-3">High street equivalent</span>
                      <span className="font-semibold text-ink-3 line-through tabular">£1,500</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <span className="font-semibold text-ink">You keep</span>
                      <span className="font-semibold text-accent tabular">£1,201</span>
                    </div>
                  </div>
                </div>

                {/* small floating badge */}
                <div className="absolute -bottom-7 -left-6 hidden rounded-2xl border border-line bg-surface px-4 py-3 shadow-[var(--shadow-lg)] lg:-left-16 lg:block">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-3">Deadline tracked</p>
                  <p className="mt-0.5 text-sm font-semibold text-ink">Filed 41 days early</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </div>

      <FilingMarquee />

      {/* ------------------------------ Stats ------------------------------- */}
      <Section className="py-16 sm:py-20">
        <Container>
          <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 70}>
                <div className="border-l-2 border-accent/30 pl-5">
                  <dt className="font-display text-[2.5rem] leading-none tracking-[-0.045em] text-ink tabular">
                    {stat.value}
                  </dt>
                  <dd className="mt-2.5 text-sm leading-snug text-ink-2">{stat.label}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </Section>

      {/* ----------------------------- Services ----------------------------- */}
      <Section id="services" className="border-t border-line bg-surface">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <Reveal>
              <SectionHead
                eyebrow="What we do"
                title="Everything a small business has to file — handled"
                intro="Whether you run a limited company, work for yourself, or just need a self assessment filed, the work is done by a chartered accountant and quoted upfront."
              />
            </Reveal>
            <Reveal delay={80}>
              <ButtonLink href="/services" variant="outline" size="md">
                All services <ArrowRight />
              </ButtonLink>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-card border border-line bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 70}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group flex h-full flex-col bg-surface p-8 transition-colors duration-300 hover:bg-surface-2"
                >
                  <span className="font-display text-sm font-bold text-accent tabular">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-[1.25rem] transition-colors group-hover:text-accent">{service.name}</h3>
                  <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-ink-2">{service.blurb}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-3 transition-colors group-hover:text-accent">
                    Learn more
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5">
                      <path d="M4 10h11m0 0-4.2-4.2M15 10l-4.2 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ------------------------------ Pricing ----------------------------- */}
      <Section id="pricing" className="border-t border-line">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="Transparent pricing"
              title="Move the slider. That's the price."
              intro={`Business package prices are set by annual turnover and cover everything from £${tiers[0].price} for dormant accounts up to £${tiers[tiers.length - 1].price}. No hourly rates, no surprise invoices.`}
              align="center"
            />
          </Reveal>
          <Reveal delay={100} className="mt-14">
            <PricingExplorer />
          </Reveal>
        </Container>
      </Section>

      {/* ------------------------------ Why us ------------------------------ */}
      <Section className="border-t border-line bg-surface">
        <Container>
          <Reveal>
            <SectionHead
              eyebrow="Why us"
              title="Cheap prices. Not a cheap service."
              intro="We are an online firm, so there is no reception desk and no high street rent to pay for. Those savings go into your fee — not into a thinner service."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {reasons.slice(0, 3).map((reason, i) => (
              <Reveal key={reason.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-card border border-line bg-canvas p-8">
                  {reason.stat ? (
                    <>
                      <p className="font-display text-[2.75rem] leading-none tracking-[-0.045em] text-accent tabular">
                        {reason.stat}
                      </p>
                      <p className="mt-2 text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-ink-3">
                        {reason.statLabel}
                      </p>
                    </>
                  ) : (
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft p-2.5 text-accent">
                      <Check />
                    </span>
                  )}
                  <h3 className="mt-7 text-[1.1875rem]">{reason.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-2">{reason.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-6 flex flex-col items-start justify-between gap-6 rounded-card border border-line bg-canvas p-8 sm:flex-row sm:items-center">
              <div className="max-w-xl">
                <h3 className="text-[1.1875rem]">Seven more reasons where those came from</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">
                  Tax efficiency, penalty protection, privacy, and a team that writes in plain English.
                </p>
              </div>
              <ButtonLink href="/why-us" variant="primary" size="md" className="shrink-0">
                Read all ten <ArrowRight />
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ------------------------------- Steps ------------------------------ */}
      <Section className="border-t border-line">
        <Container>
          <Reveal>
            <SectionHead eyebrow="How it works" title="Three steps, once a year" align="center" />
          </Reveal>

          <ol className="mt-16 grid gap-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 90} as="li">
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-accent/30 bg-accent-soft font-display text-sm font-bold text-accent tabular">
                      {step.n}
                    </span>
                    <span aria-hidden className="hairline hidden h-px flex-1 md:block" />
                  </div>
                  <h3 className="mt-7 text-[1.25rem]">{step.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-2">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      {/* --------------------------- Testimonials --------------------------- */}
      <Section className="border-t border-line bg-surface">
        <Container>
          <Reveal>
            <Eyebrow>In their words</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 80}>
                <figure
                  className={`flex h-full flex-col rounded-card border border-line p-8 ${
                    i === 0 ? "bg-canvas lg:p-10" : "bg-canvas"
                  }`}
                >
                  <svg viewBox="0 0 24 24" aria-hidden className="h-7 w-7 text-accent/40" fill="currentColor">
                    <path d="M9.6 5.4c-3.4 1.5-5.6 4.6-5.6 8.3 0 3 1.8 5 4.3 5 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .2.4-1.9 2-3.6 4-4.5l-2.2-1.8Zm10 0c-3.4 1.5-5.6 4.6-5.6 8.3 0 3 1.8 5 4.3 5 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .2.4-1.9 2-3.6 4-4.5l-2.2-1.8Z" />
                  </svg>
                  <blockquote
                    className={`mt-6 flex-1 text-pretty leading-relaxed text-ink ${
                      i === 0 ? "font-serif text-[1.5rem] leading-[1.4]" : "text-[0.9375rem] text-ink-2"
                    }`}
                  >
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-7 border-t border-line pt-5 text-sm">
                    <span className="font-semibold text-ink">{t.author}</span>
                    <span className="block text-ink-3">{t.meta}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* -------------------------------- FAQ ------------------------------- */}
      <Section className="border-t border-line">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <SectionHead
                eyebrow="Common questions"
                title="The things people ask before signing up"
                intro="If your question isn't here, ask us directly — we answer whether or not you become a client."
              />
              <ButtonLink href="/faqs" variant="outline" size="md" className="mt-8">
                All FAQs <ArrowRight />
              </ButtonLink>
            </Reveal>
            <Reveal delay={100}>
              <Accordion idPrefix="home-faq" items={faqs.business.slice(0, 5)} />
            </Reveal>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
