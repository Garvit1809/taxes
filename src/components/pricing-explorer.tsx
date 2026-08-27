"use client";

import { useMemo, useState } from "react";
import { monthlyPlan, priceGroups, servicePrices, type PriceGroup } from "@/lib/content";
import { ArrowRight, ButtonLink, Check, Pill } from "./ui";

const gbp = new Intl.NumberFormat("en-GB");

export function PricingExplorer() {
  const [group, setGroup] = useState<PriceGroup | "all">("all");

  const shown = useMemo(
    () => (group === "all" ? servicePrices : servicePrices.filter((s) => s.group === group)),
    [group],
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:gap-8">
      {/* ------------------------- pay for what you need ------------------------ */}
      <div className="rounded-card border border-line bg-surface p-7 shadow-[var(--shadow-sm)] sm:p-9">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="text-xl">Pay for what you need</h3>
          <p className="text-[0.8125rem] text-ink-3">Fixed fees. No hourly rates.</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter prices by service type">
          {priceGroups.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setGroup(g.id)}
              aria-pressed={group === g.id}
              className={`rounded-full border px-3.5 py-2 text-[0.8125rem] font-semibold transition-all duration-200 ${
                group === g.id
                  ? "border-accent bg-accent text-accent-fg shadow-[var(--shadow-glow)]"
                  : "border-line bg-surface-2 text-ink-2 hover:border-line-strong hover:text-ink"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        <ul className="mt-7 divide-y divide-[var(--line)] border-t border-line">
          {shown.map((s) => (
            <li key={`${s.name}-${s.variant ?? ""}`} className="flex items-start justify-between gap-6 py-4">
              <div className="min-w-0">
                <p className="font-display text-[1.0625rem] font-semibold text-ink">
                  {s.name}
                  {s.variant ? <span className="ml-2 text-[0.8125rem] font-medium text-ink-3">{s.variant}</span> : null}
                </p>
                <p className="mt-1 text-[0.875rem] leading-relaxed text-ink-2">{s.detail}</p>
              </div>
              <p className="shrink-0 text-right">
                <span className="block font-display text-[1.5rem] font-bold leading-none text-ink tabular">
                  {s.from ? <span className="mr-0.5 text-[0.8125rem] font-semibold text-ink-3">from</span> : null}£
                  {gbp.format(s.price)}
                </span>
                <span className="mt-1 block text-[0.75rem] text-ink-3">{s.unit}</span>
              </p>
            </li>
          ))}
        </ul>

        <ButtonLink href="/contact" variant="outline" size="md" className="mt-7">
          Ask for a fixed quote <ArrowRight />
        </ButtonLink>
      </div>

      {/* ----------------------------- monthly plan ---------------------------- */}
      <div className="self-start overflow-hidden rounded-card border border-brand/15 bg-brand text-brand-fg shadow-[var(--shadow-lg)]">
        <div className="relative p-7 sm:p-9">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full opacity-40 blur-[70px]"
            style={{ background: "radial-gradient(circle, var(--accent-bright), transparent 70%)" }}
          />
          <div className="relative">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">Everything, one fee</p>
              <Pill tone="accent">Best value</Pill>
            </div>

            <h3 className="mt-4 text-[1.75rem] text-white">{monthlyPlan.name}</h3>

            <div className="mt-5 flex items-end gap-2 border-b border-white/15 pb-6">
              <span className="font-display text-[4rem] leading-[0.85] tracking-[-0.05em] text-white tabular">
                <span className="align-top text-[1.75rem] leading-none text-white/50">£</span>
                {monthlyPlan.price}
              </span>
              <span className="pb-1.5 text-sm text-white/55">
                {monthlyPlan.unit}
                <br />
                <span className="tabular">£{gbp.format(monthlyPlan.annual)} a year</span>
              </span>
            </div>

            <p className="mt-5 text-[0.875rem] leading-relaxed text-white/60">{monthlyPlan.suitedTo}</p>

            <ul className="mt-6 space-y-3">
              {monthlyPlan.includes.map((line) => (
                <li key={line} className="flex items-start gap-2.5 text-[0.9375rem] text-white/85">
                  <span className="mt-0.5 grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-accent-bright/25 p-[3px] text-accent-bright">
                    <Check />
                  </span>
                  {line}
                </li>
              ))}
            </ul>

            <ButtonLink href="/contact" variant="accent" size="lg" className="mt-8 w-full">
              Start the monthly plan <ArrowRight />
            </ButtonLink>
            <p className="mt-3 text-center text-xs text-white/45">No tie-in. Cancel with a month&apos;s notice.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
