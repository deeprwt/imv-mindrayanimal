import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { getAllCategories, getAllProducts, productHref } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    page("/companion-animals", 1, "weekly"),
    page("/products", 0.9, "weekly"),
    ...getAllCategories().map((c) => page(productHref(c.slug), c.parent ? 0.8 : 0.85)),
    ...getAllProducts().map((p) => ({
      ...page(productHref(p.slug), 0.8),
      images: [absoluteUrl(p.image.src)],
    })),
    page("/contact", 0.7),
    page("/about", 0.5),
    page("/resources", 0.5),
  ];
}
