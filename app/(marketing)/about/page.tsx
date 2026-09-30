import type { Metadata } from "next";
import Image from "next/image";
import { Compass, HeartHandshake, Target, Users } from "lucide-react";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { enquiryHref } from "@/lib/enquiry-events";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/* Content source: mindrayanimal.com/en/aboutus (retrieved 2026-09-28). */
const values = [
  { icon: HeartHandshake, title: "Align with our customers" },
  { icon: Users, title: "Value and enrich our people" },
  { icon: Target, title: "Be precise and practical" },
  { icon: Compass, title: "Always forge ahead" },
];

const milestones = [
  { year: "1991", title: "PM-9000 Vet", text: "Mindray's first veterinary monitor." },
  { year: "2005", title: "DP-3300 Vet", text: "Mindray's first veterinary black-and-white portable ultrasound system." },
  { year: "2014", title: "M9 Vet", text: "Veterinary premium colour Doppler ultrasound system." },
  { year: "2017", title: "ZS3", text: "Veterinary cart-based colour Doppler ultrasound system for scientific research." },
];

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Mindray Animal Medical, a wholly-owned subsidiary of Mindray Group, provides advanced medical devices and comprehensive solutions for companion animals and more.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-slate-50 to-white pt-6 pb-16 sm:pb-20">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-brand-600 uppercase">About us</p>
              <h1 className="mt-4 text-4xl leading-[1.06] font-semibold tracking-tight sm:text-5xl">
                Advanced healthcare for all animals
              </h1>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  Shenzhen Mindray Animal Medical Technology Co., LTD. (Mindray Animal Medical), a wholly-owned subsidiary
                  of Mindray Group, is dedicated to providing advanced medical devices and comprehensive solutions for
                  animals, including companion animals, farm animals, equine and exotic animals.
                </p>
                <p>
                  We are committed to offering equal access to high-quality healthcare by meeting the different demands
                  of veterinarians who care for a wide variety of animals.
                </p>
              </div>
            </div>
            <div className="relative aspect-[8/5] overflow-hidden rounded-4xl bg-slate-100">
              <Image
                src="/images/site/veterinarian-dog-ultrasound-examination.webp"
                alt="Veterinarian with a Border Collie beside the Vetus 80 veterinary ultrasound system"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(min-width: 1024px) 560px, 92vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="values-heading" className="py-16 sm:py-20">
        <Container>
          <SectionHeading id="values-heading" eyebrow="Core values" title="What guides our work" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <li key={v.title} className="reveal rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
                <v.icon aria-hidden="true" className="size-6 text-brand-600" />
                <h3 className="mt-4 font-semibold">{v.title}</h3>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="rd-heading" className="bg-slate-950 py-16 text-white sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            id="rd-heading"
            tone="dark"
            eyebrow="R&D"
            title="Innovation shaped by clinical reality"
            description="We continuously invest in R&D so our products and solutions address the real challenges animals and veterinarians face in different clinical scenarios. With customer insights and technological innovation, we create a more efficient workflow and customer experience for veterinarians in daily practice."
          />
          <ol className="relative space-y-8 border-l border-white/15 pl-8">
            {milestones.map((m) => (
              <li key={m.year} className="reveal relative">
                <span aria-hidden="true" className="absolute top-1.5 -left-[2.3rem] size-3 rounded-full bg-brand-500 ring-4 ring-slate-950" />
                <p className="text-sm font-semibold text-signal-300">{m.year}</p>
                <h3 className="mt-1 text-lg font-semibold text-white">{m.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{m.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Find the right ultrasound system for your practice
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/companion-animals" variant="secondary" size="lg">
              Companion animal solutions
            </ButtonLink>
            <ButtonLink href={enquiryHref("general")} data-track="cta_click" data-track-cta="contact" data-track-location="about" size="lg" arrow>
              Contact us
            </ButtonLink>
          </div>
        </Container>
      </section>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
    </>
  );
}
