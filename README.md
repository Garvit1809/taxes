# Next Step Accountancy

Marketing site for Next Step Accountancy — accounts, taxation and advisory for UK small business. Built with Next.js.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** with a token-based theme layer
- No UI or animation dependencies — every component is hand-built

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm start
npm run lint
```

## Structure

```
src/
  app/
    layout.tsx          root shell: fonts, metadata, header/footer, theme script
    page.tsx            homepage
    pricing/            interactive price explorer + full price table
    services/           six service blocks + self-assessment detail
    why-us/             the ten reasons
    about/  faqs/  software/  contact/  blog/
    api/contact/        POST endpoint for the quote form
    sitemap.ts robots.ts not-found.tsx
  components/
    ui.tsx              Container, Section, SectionHead, Button, Pill, Card, icons
    site-header.tsx     sticky nav, scroll state, mobile drawer
    site-footer.tsx
    sections.tsx        PageHero, CTASection, FilingMarquee
    pricing-explorer.tsx  turnover selector with live price + savings bar
    accordion.tsx       accessible FAQ disclosure
    quote-form.tsx      contact/quote form with client validation
    reveal.tsx          IntersectionObserver fade-in
    theme-toggle.tsx    light/dark, stored in localStorage
  lib/
    content.ts          all site copy, prices, services, FAQs — single source of truth
```

## Editing content

Prices, services, FAQs, testimonials and form options all live in `src/lib/content.ts`.
Changing a price there updates the homepage, the pricing explorer, the price table
and the contact page price guide together.

## Design system

Colours, shadows and radii are CSS custom properties in `src/app/globals.css`, exposed
to Tailwind through `@theme inline`. Light is defined on `:root`, dark under
`[data-theme="dark"]`, so every colour has an explicit value in both themes.

Fonts: **Plus Jakarta Sans** (headings), **Inter** (body/UI), **Instrument Serif**
(display accents and pull quotes).

## Notes

- Scroll reveals are visible by default and only armed once the inline head script
  runs, so the page still reads with JavaScript disabled.
- `POST /api/contact` validates the payload and currently logs the enquiry. Wire it
  to your mail provider or CRM in `src/app/api/contact/route.ts` — that is the only
  place delivery needs to change.
- FAQ answers are emitted as `FAQPage` JSON-LD for search results.
