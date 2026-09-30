/**
 * Product content model.
 *
 * All product copy lives in `data/products.ts` and is rendered by generic
 * components — adding a product is a data change, never a UI change.
 *
 * Content rule: every statement, feature and specification must come from
 * approved manufacturer content (see `source`). Missing information is left
 * empty and listed in `content.missing` instead of being invented.
 */

export type CategorySlug = "medical-imaging";
export type SubcategorySlug = "cart-based-ultrasound" | "portable-ultrasound";

/** Clinical focus tags, only assigned when the source content explicitly supports them. */
export type ClinicalFocus =
  | "cardiology"
  | "abdominal"
  | "reproduction"
  | "exotic"
  | "equine"
  | "guided-procedures";

export type ImageKind = "product" | "clinical" | "feature" | "lifestyle";

export interface ProductImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  kind: ImageKind;
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductBrochure {
  /** Path under /public (preferred) or absolute URL to the PDF. */
  url: string;
  label: string;
  /** e.g. "PDF, 2.4 MB" */
  meta?: string;
}

export interface ProductSeo {
  /** Page title without the brand suffix (the root layout template appends it). */
  title: string;
  description: string;
  keywords: string[];
}

export interface ProductContentStatus {
  /** "verified" = checked against source; "needs-review" = open questions in reviewNotes. */
  status: "verified" | "needs-review";
  /** Fields with no approved content yet. Rendered as "available on request", never filled with invented text. */
  missing: string[];
  /** Internal notes for the content owner. Never rendered. */
  reviewNotes?: string;
}

export interface Product {
  slug: string;
  name: string;
  category: CategorySlug;
  subcategory: SubcategorySlug;
  /** Manufacturer's product type, e.g. "Premium Veterinary Diagnostic Ultrasound System". */
  productType: string;
  tagline?: string;
  isNew: boolean;
  /** Shown first in featured lists. */
  featured?: boolean;
  /** Sort order within the subcategory. */
  order: number;
  shortDescription: string;
  overview: string[];
  /** One headline specification for product cards. */
  keySpec?: string;
  image: ProductImage;
  gallery: ProductImage[];
  features: ProductFeature[];
  applications: string[];
  species: string[];
  focus: ClinicalFocus[];
  specifications: ProductSpecification[];
  benefits: string[];
  /** `null` = not supplied yet; the UI offers "Request brochure" instead. */
  brochure: ProductBrochure | null;
  /** Optional hand-written FAQs; generic FAQs are generated from the data in `lib/products.ts`. */
  faqs?: ProductFaq[];
  seo: ProductSeo;
  source: {
    url: string;
    /** Legacy path on the previous site, used for 301 redirects. */
    legacyPath: string;
    retrieved: string;
  };
  content: ProductContentStatus;
}

export interface Category {
  slug: CategorySlug | SubcategorySlug;
  /** Parent category for subcategories. */
  parent?: CategorySlug;
  name: string;
  /** H1 on the category page. */
  title: string;
  eyebrow: string;
  summary: string;
  intro: string[];
  highlights: { title: string; description: string }[];
  image: Omit<ProductImage, "kind">;
  seo: ProductSeo;
}
