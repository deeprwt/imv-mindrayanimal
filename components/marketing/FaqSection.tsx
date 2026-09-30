import Link from "next/link";
import { Plus } from "lucide-react";
import type { Faq } from "@/data/faqs";
import { enquiryHref } from "@/lib/enquiry-events";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Accessible FAQ built on native <details>/<summary> — no JavaScript. */
export function FaqSection({
  faqs,
  title = "Frequently asked questions",
  description = "Answers to common questions about our veterinary ultrasound systems.",
  location,
}: {
  faqs: Faq[];
  title?: string;
  description?: string;
  location: string;
}) {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-20 sm:py-24 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title={title} description={description} />
          <ButtonLink
            href={enquiryHref("general")}
            data-enquiry="general"
            data-track="cta_click"
            data-track-cta="question"
            data-track-location={`${location}_faq`}
            variant="secondary"
            size="lg"
            className="mt-8"
          >
            Ask a question
          </ButtonLink>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-1">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left">
                <h3 className="text-base font-semibold text-slate-950 sm:text-lg">{faq.question}</h3>
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-[transform,background-color] duration-300 group-open:rotate-45 group-open:bg-brand-600 group-open:text-white">
                  <Plus aria-hidden="true" className="size-4" />
                </span>
              </summary>
              <div className="pr-12 pb-6">
                <p className="leading-relaxed text-slate-600">{faq.answer}</p>
                {faq.links?.length ? (
                  <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                    {faq.links.map((link) => (
                      <Link key={link.href} href={link.href} className="font-semibold text-brand-700 underline-offset-4 hover:underline">
                        {link.label} →
                      </Link>
                    ))}
                  </p>
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
