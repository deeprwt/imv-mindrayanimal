import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { Container } from "@/components/ui/Container";

/**
 * Placeholder for legal pages. The approved legal text has not been supplied,
 * so these pages are marked noindex and state clearly that content is pending.
 * Replace the body with the approved policy before launch.
 */
export function LegalPlaceholder({ title, path }: { title: string; path: string }) {
  return (
    <section className="pt-6 pb-20 sm:pb-28">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: title, href: path }]} />
        <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 text-sm leading-relaxed text-amber-900">
          <p className="font-semibold">Content pending legal approval.</p>
          <p className="mt-2">
            The approved {title.toLowerCase()} for this website will be published here. For questions in the meantime,
            contact{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold underline">
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </div>
        <p className="mt-8 text-sm text-slate-600">
          <Link href="/companion-animals" className="font-semibold text-brand-700 hover:underline">
            Back to companion animal solutions
          </Link>
        </p>
      </Container>
    </section>
  );
}
