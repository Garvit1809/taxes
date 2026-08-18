import type { Metadata } from "next";
import { Accordion } from "@/components/accordion";
import { Reveal } from "@/components/reveal";
import { CTASection, PageHero } from "@/components/sections";
import { Container, Section } from "@/components/ui";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers on bookkeeping software, claimable expenses, dividends, salary, UTR and authentication codes, filing deadlines, directors loan accounts and self assessment.",
};

const groups = [
  { id: "business", heading: "Business package", blurb: "Limited companies, sole traders and partnerships.", items: faqs.business },
  { id: "personal", heading: "Personal self assessment", blurb: "Individuals filing an SA100.", items: faqs.personal },
];

/** Structured data helps these answers surface directly in search results. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [...faqs.business, ...faqs.personal].map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FaqsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        eyebrow="FAQs"
        title="Straight answers, no jargon"
        intro="The questions we are asked most often, answered the way we would answer them in an email. If yours isn't here, just ask — we reply whether or not you are a client."
      />

      <Section>
        <Container>
          <div className="space-y-20">
            {groups.map((group, i) => (
              <div key={group.id} id={group.id} className="scroll-mt-28">
                <Reveal>
                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                    <h2 className="text-[1.875rem]">{group.heading}</h2>
                    <p className="text-[0.9375rem] text-ink-3">{group.blurb}</p>
                  </div>
                </Reveal>
                <Reveal delay={80} className="mt-8">
                  <Accordion idPrefix={`faq-${group.id}`} items={group.items} />
                </Reveal>
                {i === 0 ? null : null}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Still got a question?"
        body="Send it over. A chartered accountant will answer it properly — not with a link to this page."
      />
    </>
  );
}
