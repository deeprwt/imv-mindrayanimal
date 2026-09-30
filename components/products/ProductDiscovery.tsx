import { focusLabels, getAllCategories, getAllProducts, toProductSummary } from "@/lib/products";
import type { ClinicalFocus, SubcategorySlug } from "@/types/product";
import { ProductExplorer } from "./ProductExplorer";

/**
 * Server wrapper: prepares lightweight product summaries and filter options,
 * then hands them to the client-side explorer. All cards are server-rendered
 * in the initial HTML, so every product link is crawlable.
 */
export function ProductDiscovery({ syncUrl = false, groupHeading = "h3" }: { syncUrl?: boolean; groupHeading?: "h2" | "h3" }) {
  const products = getAllProducts();
  const summaries = products.map(toProductSummary);
  const all = getAllCategories();

  const topLevel = all.filter((c) => !c.parent && products.some((p) => p.category === c.slug));
  const systemTypes = all
    .filter((c) => c.parent && products.some((p) => p.subcategory === c.slug))
    .map((c) => ({ value: c.slug as SubcategorySlug, label: c.name }));
  const usedFocus = new Set(products.flatMap((p) => p.focus));
  const focusOptions = (Object.keys(focusLabels) as ClinicalFocus[])
    .filter((f) => usedFocus.has(f))
    .map((f) => ({ value: f, label: focusLabels[f] }));

  return (
    <ProductExplorer
      products={summaries}
      categories={topLevel.map((c) => ({ value: c.name, label: c.name }))}
      systemTypes={systemTypes}
      focusOptions={focusOptions}
      syncUrl={syncUrl}
      groupHeading={groupHeading}
    />
  );
}
