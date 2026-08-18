"use client";

import { useMemo, useState } from "react";
import { addOns, packageIncludes, tiers } from "@/lib/content";
import { ArrowRight, ButtonLink, Check, Pill } from "./ui";

/** Typical high-street quote used for the savings comparison (mid-point of a 75–90% gap). */
const HIGH_STREET_MULTIPLIER = 5;

const gbp = new Intl.NumberFormat("en-GB");

export function PricingExplorer() {
  const [index, setIndex] = useState(2);
  const tier = tiers[index];

  const comparison = useMemo(() => {
    const highStreet = Math.round((tier.price * HIGH_STREET_MULTIPLIER) / 10) * 10;
    return { highStreet, saving: highStreet - tier.price };
  }, [tier]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
      {/* --------------------------- selector + price --------------------------- */}
      <div className="self-start rounded-card border border-line bg-surface p-7 shadow-[var(--shadow-md)] sm:p-9">
        <label htmlFor="turnover" className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">
          Your annual turnover
        </label>

        <div className="mt-5" role="group" aria-label="Select annual turnover band">
          <div className="flex flex-wrap gap-2">
            {tiers.map((t, i) => (
              <button
                key={t.band}
                type="button"
                onClick={() => setIndex(i)}
                aria-pressed={i === index}
                className={`rounded-full border px-3.5 py-2 text-[0.8125rem] font-semibold tabular transition-all duration-200 ${
                  i === index
                    ? "border-accent bg-accent text-accent-fg shadow-[var(--shadow-glow)]"
                    : "border-line bg-surface-2 text-ink-2 hover:border-line-strong hover:text-ink"
                }`}
              >
                {t.short}
              </button>
            ))}
          </div>

          <input
            id="turnover"
            type="range"
            min={0}
            max={tiers.length - 1}
            step={1}
            value={index}
            onChange={(e) => setIndex(Number(e.target.value))}
            aria-valuetext={tier.band}
            className="mt-7 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-surface-inset accent-[var(--accent)]"
          />
        </div>

        <div className="mt-8 border-t border-line pt-8">
          <p className="text-sm font-medium text-ink-2">{tier.band}</p>
          <div className="mt-2 flex items-end gap-3">
            <span className="font-display text-[4.5rem] leading-[0.85] tracking-[-0.05em] text-ink tabular">
              <span className="align-top text-[2rem] leading-none text-ink-3">£</span>
              {tier.price}
            </span>
            <span className="pb-2 text-sm text-ink-3">
              per year
              <br />
              all in
            </span>
            {tier.featured ? <span className="pb-3"><Pill tone="gold">Most popular</Pill></span> : null}
          </div>
          <p className="mt-3 text-sm text-ink-3">{tier.note}</p>
        </div>

        {/* savings bar */}
        <div className="mt-8 rounded-2xl bg-surface-2 p-5">
          <div className="flex items-baseline justify-between text-sm">
            <span className="text-ink-2">Typical high street quote</span>
            <span className="font-semibold text-ink-3 line-through tabular">£{gbp.format(comparison.highStreet)}</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-inset">
            <div
              className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
              style={{ width: `${(tier.price / comparison.highStreet) * 100}%` }}
            />
          </div>
          <div className="mt-3 flex items-baseline justify-between text-sm">
            <span className="font-semibold text-ink">With taxez</span>
            <span className="font-semibold text-accent tabular">
              £{gbp.format(tier.price)} · save £{gbp.format(comparison.saving)}
            </span>
          </div>
        </div>

        <ButtonLink href="/contact" variant="primary" size="lg" className="mt-7 w-full">
          Get this price confirmed <ArrowRight />
        </ButtonLink>
        <p className="mt-3 text-center text-xs text-ink-3">Fixed fee. No surprise charges, ever.</p>
      </div>

      {/* ------------------------------ what's in it ---------------------------- */}
      <div className="flex flex-col gap-6">
        <div className="rounded-card border border-line bg-surface p-7 sm:p-9">
          <h3 className="text-lg">Every package includes</h3>
          <ul className="mt-6 grid gap-x-6 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
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

        <div className="rounded-card border border-line bg-surface p-7 sm:p-9">
          <h3 className="text-lg">Add on when you need it</h3>
          <ul className="mt-5 divide-y divide-[var(--line)]">
            {addOns.map((a) => (
              <li key={a.name} className="flex items-center justify-between gap-4 py-3.5">
                <div>
                  <p className="text-[0.9375rem] font-semibold text-ink">{a.name}</p>
                  <p className="mt-0.5 text-[0.8125rem] text-ink-3">{a.detail}</p>
                </div>
                <p className="shrink-0 text-right">
                  <span className="block font-display text-lg font-bold text-ink tabular">{a.price}</span>
                  <span className="block text-[0.75rem] text-ink-3">{a.unit}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
