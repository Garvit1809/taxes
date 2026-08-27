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
    <footer className="mt-auto border-t border-line bg-surface">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-2">
              {site.tagline} Accounts, taxation and advisory for UK small businesses and
              individuals — fixed fees, a named accountant, and no bookkeeping software to buy.
            </p>
            <ButtonLink href="/contact" variant="outline" size="sm" className="mt-6">
              Get a fixed quote <ArrowRight />
            </ButtonLink>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-3">{col.title}</h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-[0.9375rem] text-ink-2 transition-colors hover:text-accent">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-7 text-sm text-ink-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            <strong className="font-semibold text-ink-2">{site.name}</strong> is a trading name of{" "}
            {site.legalName}. Registered in {site.registeredIn}, company number {site.companyNumber}.
            <br />
            Registered office: {site.registeredOffice}.
          </p>
          <p className="tabular">© {new Date().getFullYear()} {site.legalName}</p>
        </div>

        <p className="border-t border-line py-6 text-xs leading-relaxed text-ink-3">
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
