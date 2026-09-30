import { CalendarCheck, FileText, Mail, MessageSquare, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ENQUIRY_SECTION_ID } from "@/lib/enquiry-events";
import { getProductOptions } from "@/lib/products";
import { Container } from "@/components/ui/Container";
import type { EnquiryType } from "@/types/enquiry";
import { EnquiryForm } from "./EnquiryForm";

interface EnquirySectionProps {
  title?: string;
  description?: string;
  defaultProduct?: string;
  defaultType?: EnquiryType;
  location: string;
  /** Render as the page's H1 (contact page) instead of an H2. */
  headingLevel?: "h1" | "h2";
}

const steps = [
  { icon: MessageSquare, title: "Tell us what you need", text: "Share your practice, caseload and the systems you are considering." },
  { icon: FileText, title: "Get tailored information", text: "Receive pricing, configuration options and product documentation." },
  { icon: CalendarCheck, title: "See it in action", text: "Arrange a demonstration with a veterinary imaging specialist." },
];

/**
 * Enquiry section. On phones it is just heading → form → call/email, so the
 * form starts almost immediately; the supporting steps show from `lg` up.
 */
export function EnquirySection({
  title = "Request a quote or product information",
  description = "Tell us about your hospital or clinic and a specialist will reply with pricing, configurations and demo availability.",
  defaultProduct,
  defaultType,
  location,
  headingLevel: Heading = "h2",
}: EnquirySectionProps) {
  const { contact } = siteConfig;

  const contactLinks = (
    <div className="grid gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-1 xl:grid-cols-2">
      <a
        href={`tel:${contact.phoneHref}`}
        data-track-location={`${location}_enquiry`}
        className="flex min-w-0 items-center gap-2.5 rounded-2xl bg-white p-3 ring-1 ring-slate-200 transition-shadow hover:shadow-soft sm:gap-3 sm:p-4"
      >
        <Phone aria-hidden="true" className="size-5 shrink-0 text-brand-600" />
        <span className="min-w-0">
          <span className="block text-xs text-slate-500">Call us</span>
          <span className="block truncate text-sm font-semibold text-slate-950">{contact.phoneDisplay}</span>
        </span>
      </a>
      <a
        href={`mailto:${contact.email}`}
        data-track-location={`${location}_enquiry`}
        className="flex min-w-0 items-center gap-2.5 rounded-2xl bg-white p-3 ring-1 ring-slate-200 transition-shadow hover:shadow-soft sm:gap-3 sm:p-4"
      >
        <Mail aria-hidden="true" className="size-5 shrink-0 text-brand-600" />
        <span className="min-w-0">
          <span className="block text-xs text-slate-500">Email us</span>
          <span className="block truncate text-sm font-semibold text-slate-950">{contact.email}</span>
        </span>
      </a>
    </div>
  );

  return (
    <section id={ENQUIRY_SECTION_ID} aria-labelledby="enquiry-heading" className="border-t border-slate-200 bg-white py-10 sm:py-16 lg:py-24">
      <Container className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="mb-3 hidden items-center gap-2 text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase sm:inline-flex">
            <span aria-hidden="true" className="h-px w-6 bg-brand-600" />
            Enquiry
          </p>
          <Heading
            id="enquiry-heading"
            data-enquiry-heading
            tabIndex={-1}
            className="text-2xl leading-[1.15] font-semibold tracking-tight focus:outline-none sm:text-4xl"
          >
            {title}
          </Heading>
          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">{description}</p>

          <ol className="mt-10 hidden space-y-6 lg:block">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-brand-600 ring-1 ring-slate-200">
                  <step.icon aria-hidden="true" className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-slate-950">
                    <span className="sr-only">Step {index + 1}: </span>
                    {step.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 hidden lg:block">{contactLinks}</div>
        </div>

        <div>
          <div className="rounded-3xl bg-white p-4 ring-1 ring-slate-200 sm:rounded-4xl sm:p-8 sm:shadow-lift lg:p-10">
            <EnquiryForm
              productOptions={getProductOptions()}
              defaultProduct={defaultProduct}
              defaultType={defaultType}
              location={location}
            />
          </div>
          <div className="mt-4 lg:hidden">{contactLinks}</div>
        </div>
      </Container>
    </section>
  );
}
