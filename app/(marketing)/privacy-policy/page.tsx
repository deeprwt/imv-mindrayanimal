import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { LegalPlaceholder } from "@/components/marketing/LegalPlaceholder";

// Placeholder until approved legal copy is supplied — kept out of the index.
export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How we collect, use and protect personal information submitted through this website.",
  path: "/privacy-policy",
  noIndex: true,
});

export default function Page() {
  return <LegalPlaceholder title="Privacy Policy" path="/privacy-policy" />;
}
