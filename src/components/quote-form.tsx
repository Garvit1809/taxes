"use client";

import { useState } from "react";
import { businessTypes, referralSources, serviceOptions } from "@/lib/content";
import { ArrowRight, Button } from "./ui";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-line bg-surface-2 px-4 py-3 text-[0.9375rem] text-ink placeholder:text-ink-3 transition-colors focus:border-accent focus:bg-surface focus:outline-none";

const labelCls = "mb-2 block text-[0.8125rem] font-semibold text-ink-2";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [chosen, setChosen] = useState<string[]>([]);

  function toggleService(name: string) {
    setChosen((prev) => (prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name]));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const data = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, services: chosen }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-card border border-line bg-surface p-10 text-center shadow-[var(--shadow-md)]">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent-soft text-accent">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-7 w-7">
            <path d="m6 12.5 4 4 8-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-6 text-2xl">Thanks — that&apos;s with us</h3>
        <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ink-2">
          A qualified accountant will read it personally and reply with a fixed price, usually
          within one working day. No call centre, no sales pitch.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-card border border-line bg-surface p-7 shadow-[var(--shadow-md)] sm:p-9"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="name">
            Your name
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} placeholder="Alex Morgan" />
        </div>
        <div>
          <label className={labelCls} htmlFor="email">
            Email address
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder="alex@business.co.uk" />
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">
            Phone <span className="font-normal text-ink-3">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={field} placeholder="07700 900123" />
        </div>
        <div>
          <label className={labelCls} htmlFor="business">
            Business type
          </label>
          <select id="business" name="business" required defaultValue="" className={field}>
            <option value="" disabled>
              Select…
            </option>
            {businessTypes.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="transactions">
            Bank transactions a month
          </label>
          <select id="transactions" name="transactions" required defaultValue="" className={field}>
            <option value="" disabled>
              Select…
            </option>
            {["Under 25", "25 – 100", "100 – 250", "250+", "Not sure"].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="source">
            Where did you hear about us?
          </label>
          <select id="source" name="source" defaultValue="" className={field}>
            <option value="" disabled>
              Select…
            </option>
            {referralSources.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <fieldset className="mt-7">
        <legend className={labelCls}>Services required</legend>
        <div className="flex flex-wrap gap-2">
          {serviceOptions.map((s) => {
            const active = chosen.includes(s);
            return (
              <button
                key={s}
                type="button"
                onClick={() => toggleService(s)}
                aria-pressed={active}
                className={`rounded-full border px-3.5 py-2 text-[0.8125rem] font-medium transition-all ${
                  active
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-line bg-surface-2 text-ink-2 hover:border-line-strong hover:text-ink"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-7">
        <label className={labelCls} htmlFor="message">
          Anything else we should know? <span className="font-normal text-ink-3">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={4} className={field} placeholder="Year end date, current accountant, anything unusual…" />
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-5 rounded-xl bg-gold-soft px-4 py-3 text-sm text-gold">
          {error}
        </p>
      ) : null}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-xs leading-relaxed text-ink-3">
          We only use your details to prepare your quote. No marketing lists, no third parties.
        </p>
        <Button type="submit" variant="accent" size="lg" disabled={status === "sending"} className="shrink-0">
          {status === "sending" ? "Sending…" : "Get my fixed quote"} <ArrowRight />
        </Button>
      </div>
    </form>
  );
}
