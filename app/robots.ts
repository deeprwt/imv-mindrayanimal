import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  // Keep preview/staging deployments out of search results.
  const blockIndexing = process.env.VERCEL_ENV === "preview" || process.env.NEXT_PUBLIC_ALLOW_INDEXING === "false";
  if (blockIndexing) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
