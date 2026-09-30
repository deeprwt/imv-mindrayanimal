import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCategories, getAllProducts, getCategoryBySlug, getProductBySlug, productHref } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";
import { CategoryPageView } from "@/components/products/CategoryPageView";
import { ProductPageView } from "@/components/products/ProductPageView";

/**
 * /products/[slug] serves both category pages (/products/medical-imaging,
 * /products/portable-ultrasound) and product pages (/products/vetus-9).
 * Every page is generated at build time from the data layer; unknown slugs 404.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [...getAllCategories(), ...getAllProducts()].map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (product) {
    return buildMetadata({
      title: product.seo.title,
      description: product.seo.description,
      keywords: product.seo.keywords,
      path: productHref(product.slug),
      image: { src: `/og/products/${product.slug}.jpg`, width: 1200, height: 630, alt: product.image.alt },
    });
  }
  const category = getCategoryBySlug(slug);
  if (category) {
    return buildMetadata({
      title: category.seo.title,
      description: category.seo.description,
      keywords: category.seo.keywords,
      path: productHref(category.slug),
      image: { src: `/og/categories/${category.slug}.jpg`, width: 1200, height: 630, alt: category.image.alt },
    });
  }
  return {};
}

export default async function ProductOrCategoryPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (product) return <ProductPageView product={product} />;
  const category = getCategoryBySlug(slug);
  if (category) return <CategoryPageView category={category} />;
  notFound();
}
