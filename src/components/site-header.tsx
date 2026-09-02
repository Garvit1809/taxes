"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { Logo } from "./logo";
import { ArrowRight, ButtonLink, Container } from "./ui";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-surface/85 backdrop-blur-xl"
          : "border-b border-transparent bg-hero"
      }`}
    >
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative rounded-full px-3.5 py-2 text-[0.9375rem] font-medium transition-colors ${
                        active ? "text-ink" : "text-ink-2 hover:text-ink"
                      }`}
                    >
                      {item.label}
                      {active ? (
                        <span aria-hidden className="absolute inset-x-3.5 -bottom-0.5 h-px bg-accent" />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink href="/contact" variant="accent" size="sm">
              Get a quote <ArrowRight />
            </ButtonLink>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink lg:hidden"
            >
              <svg viewBox="0 0 20 20" fill="none" aria-hidden className="h-5 w-5">
                {open ? (
                  <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                ) : (
                  <path d="M3.5 6.5h13M3.5 13.5h13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-hero lg:hidden"
      >
        <Container>
          <ul className="flex flex-col py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line py-4 text-lg font-medium text-ink"
                >
                  {item.label}
                  <ArrowRight className="text-ink-3" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="py-5">
            <ButtonLink href="/contact" onClick={() => setOpen(false)} variant="accent" size="md" className="w-full">
              Get a fixed quote <ArrowRight />
            </ButtonLink>
          </div>
        </Container>
      </div>
    </header>
  );
}
