import { serializeJsonLd } from "@/lib/utils";

/** Renders structured data. A native <script> is correct here — JSON-LD is data, not executable code. */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
