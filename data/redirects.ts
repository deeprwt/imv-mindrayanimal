/**
 * 301 redirects from the previous mindrayanimal.com URL structure, so existing
 * links and search rankings carry over if this site replaces those pages.
 * Product redirects are derived from `source.legacyPath` in data/products.ts.
 */
import { products } from "./products";

export const legacyRedirects: { source: string; destination: string }[] = [
  { source: "/en/Companion_Animals", destination: "/companion-animals" },
  { source: "/en/product", destination: "/products" },
  { source: "/en/product/category/Medical_Imaging_System", destination: "/products/medical-imaging" },
  { source: "/en/contactus", destination: "/contact" },
  { source: "/en/aboutus", destination: "/about" },
  ...products.map((p) => ({ source: p.source.legacyPath, destination: `/products/${p.slug}` })),
];
