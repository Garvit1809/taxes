import Link from "next/link";
import { nav, portalEnabled, portalUrl, site } from "@/lib/content";
import { Logo } from "./logo";
import { ArrowRight, ButtonLink, Container } from "./ui";

const columns = [
  {
    title: "Services",
    links: [
      { href: "/services", label: "All services" },
      { href: "/services#limited-companies", label: "Limited companies" },
      { href: "/services#sole-traders", label: "Sole traders" },
      { href: "/services#partnerships", label: "Partnerships" },
      { href: "/services#self-assessment", label: "Self assessment" },
      { href: "/services#vat", label: "VAT returns" },
      { href: "/services#payroll", label: "Payroll" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/why-us", label: "Why us" },
      { href: "/pricing", label: "Pricing" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/software", label: "Software & templates" },
      { href: "/software#templates", label: "Bookkeeping templates" },
      ...(portalEnabled ? [{ href: portalUrl, label: "Client login" }] : []),
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-footer text-footer-ink-2">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <Logo variant="reversed" />
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-footer-ink-2">
              {site.tagline} Accounts, taxation and advisory for UK small businesses and
              individuals — fixed fees, a named accountant, and no bookkeeping software to buy.
            </p>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={site.phoneHref}
                  className="group flex items-center gap-3 text-[0.9375rem] text-footer-ink-2 transition-colors hover:text-white"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[var(--footer-line)] bg-white/5 transition-colors group-hover:border-white/35">
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
                  className="group flex items-center gap-3 text-[0.9375rem] text-footer-ink-2 transition-colors hover:text-white"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[var(--footer-line)] bg-white/5 transition-colors group-hover:border-white/35">
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
                  className="group flex items-center gap-3 text-[0.9375rem] text-footer-ink-2 transition-colors hover:text-white"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[var(--footer-line)] bg-white/5 transition-colors group-hover:border-white/35">
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden className="h-4 w-4">
                      <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="m3.5 6 6.5 4.5L16.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
            </ul>

            <ButtonLink
              href="/contact"
              size="sm"
              className="mt-6 border border-[var(--footer-line)] bg-white/5 text-footer-ink hover:border-white/35 hover:bg-white/10"
            >
              Get a fixed quote <ArrowRight />
            </ButtonLink>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-footer-head">{col.title}</h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[0.9375rem] text-footer-ink-2 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[var(--footer-line)] py-7 text-sm text-footer-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <strong className="font-semibold text-footer-ink">{site.name}</strong> is a trading name of{" "}
            {site.legalName}. Registered in {site.registeredIn}, company number {site.companyNumber}.
            <br />
            Registered office: {site.registeredOffice}.
            <br />
            Licensed and regulated by the {site.professionalBody}
            {site.licenceNumber ? ` under licence number ${site.licenceNumber}` : ""}.
          </p>
          <p className="tabular">© {new Date().getFullYear()} {site.legalName}</p>
        </div>

        <p className="border-t border-[var(--footer-line)] py-6 text-xs leading-relaxed text-footer-ink-3">
          Prices shown exclude VAT where applicable. Information on this site is general
          guidance, not personal tax advice — speak to your accountant before acting on it.
        </p>
      </Container>
      {/* Hidden nav mirror keeps every primary route in the static HTML for crawlers. */}
      <div className="sr-only">
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
