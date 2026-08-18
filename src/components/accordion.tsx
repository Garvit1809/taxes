"use client";

import { useState } from "react";

export type QA = { q: string; a: string };

export function Accordion({ items, idPrefix }: { items: QA[]; idPrefix: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-[var(--line)] border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const buttonId = `${idPrefix}-button-${i}`;
        return (
          <li key={item.q}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className={`font-display text-[1.0625rem] font-semibold transition-colors ${isOpen ? "text-accent" : "text-ink"}`}>
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                    isOpen ? "rotate-45 border-accent text-accent" : "border-line text-ink-3"
                  }`}
                >
                  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                    <path d="M10 4.5v11M4.5 10h11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-6 pr-12 text-[0.9375rem] leading-relaxed text-ink-2">{item.a}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
