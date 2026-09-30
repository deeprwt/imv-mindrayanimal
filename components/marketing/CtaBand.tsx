import { enquiryHref } from "@/lib/enquiry-events";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/** Mid-page conversion band. */
export function CtaBand({ location }: { location: string }) {
  return (
    <section aria-labelledby={`cta-${location}`} className="py-4">
      <Container>
        <div className="reveal relative overflow-hidden rounded-4xl bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-12 text-white sm:px-12 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-white/10 blur-3xl"
          />
          <div className="relative max-w-2xl">
            <h2 id={`cta-${location}`} className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Not sure which system fits your practice?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-50/90 sm:text-lg">
              Talk to a veterinary imaging specialist about your caseload, species and budget — and see the right
              system in action.
            </p>
          </div>
          <div className="relative mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
            <ButtonLink
              href={enquiryHref("general")}
              data-enquiry="general"
              data-track="cta_click"
              data-track-cta="specialist"
              data-track-location={location}
              variant="light"
              size="lg"
              arrow
            >
              Talk to a Specialist
            </ButtonLink>
            <ButtonLink
              href={enquiryHref("demo")}
              data-enquiry="demo"
              data-track="cta_click"
              data-track-cta="demo"
              data-track-location={location}
              variant="outlineLight"
              size="lg"
            >
              Book a Demo
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
