import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { CTASection, PageHero } from "@/components/sections";
import { Container, Pill, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Plain-English guides to UK small business tax: allowable expenses, dividends versus salary, Making Tax Digital, filing deadlines and directors loan accounts.",
};

/** Placeholder index — swap for a CMS or MDX source when posts are authored. */
const posts = [
  {
    slug: "allowable-expenses",
    title: "The expenses small businesses forget to claim",
    excerpt: "Use of home, mileage, professional subscriptions and pre-trading costs — the four we add back most often.",
    category: "Tax efficiency",
    date: "2026-07-14",
    readTime: "6 min",
  },
  {
    slug: "salary-vs-dividends",
    title: "Salary or dividends? The 2026/27 split that works",
    excerpt: "Where the thresholds sit this year, and how to take money out of your company without overpaying.",
    category: "Limited companies",
    date: "2026-06-02",
    readTime: "8 min",
  },
  {
    slug: "making-tax-digital",
    title: "Making Tax Digital without buying software",
    excerpt: "You are obliged to keep digital records. You are not obliged to pay £300 a year for the privilege.",
    category: "VAT",
    date: "2026-04-22",
    readTime: "5 min",
  },
  {
    slug: "filing-deadlines",
    title: "Every UK filing deadline on one page",
    excerpt: "Accounts, CT600, self assessment, VAT and payroll — what is due, when, and what it costs to be late.",
    category: "Deadlines",
    date: "2026-03-08",
    readTime: "4 min",
  },
];

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Tax, explained like a human wrote it"
        intro="Short, practical guides for small business owners. No filler, no fear-mongering, and no advice we wouldn't give a client for free."
      />

      <Section>
        <Container>
          <ul className="grid gap-px overflow-hidden rounded-card border border-line bg-[var(--line)] sm:grid-cols-2">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 2) * 70} as="li">
                <Link href="/contact" className="group flex h-full flex-col bg-surface p-8 transition-colors hover:bg-surface-2 sm:p-10">
                  <div className="flex items-center gap-3">
                    <Pill tone="neutral">{post.category}</Pill>
                    <span className="text-[0.8125rem] text-ink-3">{post.readTime} read</span>
                  </div>
                  <h2 className="mt-5 text-[1.5rem] leading-snug transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-ink-2">{post.excerpt}</p>
                  <time dateTime={post.date} className="mt-7 border-t border-line pt-5 text-[0.8125rem] text-ink-3">
                    {dateFormat.format(new Date(post.date))}
                  </time>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <CTASection
        title="Rather just ask us directly?"
        body="Unlimited advice is part of every package — and we answer questions from non-clients too."
      />
    </>
  );
}
