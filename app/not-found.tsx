import type { Metadata } from "next";
import Link from "next/link";
import { getFeaturedProducts, productHref } from "@/lib/products";
import { Footer } from "@/components/navigation/Footer";
import { Header } from "@/components/navigation/Header";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const featured = getFeaturedProducts().slice(0, 4);
  return (
    <>
      <Header />
      <main id="main" className="py-24 sm:py-32">
        <Container className="max-w-3xl text-center">
          <p className="text-sm font-semibold text-brand-600">404</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">We couldn&apos;t find that page</h1>
          <p className="mt-5 text-lg text-slate-600">
            The page may have moved. Explore our veterinary ultrasound systems or contact our team.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/companion-animals" size="lg" arrow>
              Companion animal solutions
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Contact us
            </ButtonLink>
          </div>
          <ul className="mt-12 flex flex-wrap justify-center gap-2">
            {featured.map((p) => (
              <li key={p.slug}>
                <Link href={productHref(p.slug)} className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-200">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </main>
      <Footer />
    </>
  );
}
