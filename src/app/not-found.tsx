import { ArrowRight, ButtonLink, Container, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col justify-center py-24">
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="mt-6 max-w-2xl text-balance text-[2.5rem] leading-[1.05] sm:text-[3.25rem]">
          This page has been filed somewhere we can&apos;t find
        </h1>
        <p className="mt-5 max-w-xl text-lg text-ink-2">
          The link may be out of date. Head back to the homepage, or tell us what you were looking for and
          we&apos;ll point you at it.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" variant="accent" size="lg">
            Back to home <ArrowRight />
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline" size="lg">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </Container>
  );
}
