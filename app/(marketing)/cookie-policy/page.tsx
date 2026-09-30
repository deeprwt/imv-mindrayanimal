import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LegalPlaceholder } from "@/components/marketing/LegalPlaceholder";

// Placeholder until approved legal copy is supplied — kept out of the index.
export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: "How this website uses cookies and similar technologies.",
  path: "/cookie-policy",
  noIndex: true,
});

export default function Page() {
  return <LegalPlaceholder title="Cookie Policy" path="/cookie-policy" />;
}
