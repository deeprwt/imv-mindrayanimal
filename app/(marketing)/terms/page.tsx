import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LegalPlaceholder } from "@/components/marketing/LegalPlaceholder";

// Placeholder until approved legal copy is supplied — kept out of the index.
export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: "Terms governing the use of this website.",
  path: "/terms",
  noIndex: true,
});

export default function Page() {
  return <LegalPlaceholder title="Terms of Use" path="/terms" />;
}
