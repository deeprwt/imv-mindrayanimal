import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { siteConfig } from "@/config/site";
import type {
  Category,
  ClinicalFocus,
  Product,
  ProductFaq,
  SubcategorySlug,
} from "@/types/product";

const SUBCATEGORY_ORDER: SubcategorySlug[] = ["cart-based-ultrasound", "portable-ultrasound"];

export const focusLabels: Record<ClinicalFocus, string> = {
  cardiology: "Cardiology",
  abdominal: "Abdominal",
  reproduction: "Reproduction",
  exotic: "Exotic species",
  equine: "Equine",
  "guided-procedures": "Needle guidance",
};

export function productHref(slug: string): string {
  return `/products/${slug}`;
}

export const categoryHref = productHref;

function sortProducts(list: Product[]): Product[] {
  return [...list].sort(
    (a, b) =>
      SUBCATEGORY_ORDER.indexOf(a.subcategory) - SUBCATEGORY_ORDER.indexOf(b.subcategory) ||
      a.order - b.order,
  );
}

export function getAllProducts(): Product[] {
  return sortProducts(products);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsBySlugs(slugs: string[]): Product[] {
  return slugs.map(getProductBySlug).filter((p): p is Product => Boolean(p));
}

export function getFeaturedProducts(): Product[] {
  return sortProducts(products.filter((p) => p.featured));
}

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getSubcategories(parent: string): Category[] {
  return categories.filter((c) => c.parent === parent);
}

/** Products in a category; a parent category includes all of its subcategories. */
export function getProductsInCategory(slug: string): Product[] {
  return sortProducts(products.filter((p) => p.category === slug || p.subcategory === slug));
}

export function getCategoryName(slug: string): string {
  return getCategoryBySlug(slug)?.name ?? slug;
}

/** Same subcategory first, then shared clinical focus, then the rest of the category. */
export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const others = products.filter((p) => p.slug !== product.slug && p.category === product.category);
  const score = (p: Product) =>
    (p.subcategory === product.subcategory ? 10 : 0) +
    p.focus.filter((f) => product.focus.includes(f)).length;
  return [...others].sort((a, b) => score(b) - score(a) || a.order - b.order).slice(0, limit);
}

export interface ProductBreadcrumb {
  name: string;
  href: string;
}

export function getProductBreadcrumbs(product: Product): ProductBreadcrumb[] {
  return [
    { name: "Home", href: "/" },
    { name: "Companion Animals", href: "/companion-animals" },
    { name: getCategoryName(product.category), href: categoryHref(product.category) },
    { name: getCategoryName(product.subcategory), href: categoryHref(product.subcategory) },
    { name: product.name, href: productHref(product.slug) },
  ];
}

export function getCategoryBreadcrumbs(category: Category): ProductBreadcrumb[] {
  const crumbs: ProductBreadcrumb[] = [
    { name: "Home", href: "/" },
    { name: "Companion Animals", href: "/companion-animals" },
  ];
  if (category.parent) {
    crumbs.push({ name: getCategoryName(category.parent), href: categoryHref(category.parent) });
  }
  crumbs.push({ name: category.name, href: categoryHref(category.slug) });
  return crumbs;
}

function withArticle(phrase: string): string {
  return /^[aeiou]/i.test(phrase) ? `an ${phrase}` : `a ${phrase}`;
}

function listToSentence(items: string[]): string {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}

/**
 * Product FAQs are generated only from fields that have approved content,
 * so no answer can contain information that is not in the product data.
 */
export function getProductFaqs(product: Product): ProductFaq[] {
  if (product.faqs?.length) return product.faqs;

  const subcategory = getCategoryName(product.subcategory).toLowerCase();
  const intro =
    product.overview.find((paragraph) => paragraph.includes(product.name)) ?? product.shortDescription;
  const faqs: ProductFaq[] = [
    {
      question: `What is the ${product.name}?`,
      answer: `The ${product.name} is ${withArticle(product.productType.toLowerCase())} in the ${subcategory} range. ${intro}`,
    },
  ];

  if (product.applications.length) {
    faqs.push({
      question: `What clinical applications does the ${product.name} support?`,
      answer: `Clinical applications for the ${product.name} include ${listToSentence(product.applications)}.`,
    });
  }

  if (product.specifications.length) {
    const specs = product.specifications
      .slice(0, 4)
      .map((s) => `${s.label}: ${s.value}`)
      .join("; ");
    faqs.push({
      question: `What are the key specifications of the ${product.name}?`,
      answer: `${specs}. A full specification sheet is available on request.`,
    });
  }

  faqs.push({
    question: `How can I get a quote or demo for the ${product.name}?`,
    answer: `Use the enquiry form on this page and choose "Request a Quote" or "Request a Demo", or email ${siteConfig.contact.email}. Our team will respond with pricing, configuration options and ${product.brochure ? "documentation" : "the product brochure"}.`,
  });

  return faqs;
}

/** Lightweight shape passed to client components (keeps the client bundle small). */
export interface ProductSummary {
  slug: string;
  name: string;
  subcategory: SubcategorySlug;
  subcategoryName: string;
  categoryName: string;
  productType: string;
  shortDescription: string;
  keySpec?: string;
  isNew: boolean;
  focus: ClinicalFocus[];
  image: Product["image"];
  searchText: string;
}

export function toProductSummary(p: Product): ProductSummary {
  return {
    slug: p.slug,
    name: p.name,
    subcategory: p.subcategory,
    subcategoryName: getCategoryName(p.subcategory),
    categoryName: getCategoryName(p.category),
    productType: p.productType,
    shortDescription: p.shortDescription,
    keySpec: p.keySpec,
    isNew: p.isNew,
    focus: p.focus,
    image: p.image,
    searchText: [
      p.name,
      p.productType,
      p.tagline,
      p.shortDescription,
      getCategoryName(p.subcategory),
      ...p.applications,
      ...p.species,
      ...p.focus.map((f) => focusLabels[f]),
      ...p.features.map((f) => f.title),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase(),
  };
}

/** Options for the enquiry form's product selector. */
export function getProductOptions(): { value: string; label: string; group: string }[] {
  return getAllProducts().map((p) => ({
    value: p.slug,
    label: p.name,
    group: getCategoryName(p.subcategory),
  }));
}
