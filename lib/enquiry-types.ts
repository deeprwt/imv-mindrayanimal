import type { EnquiryType } from "@/types/enquiry";

export const ENQUIRY_TYPES: { value: EnquiryType; label: string; shortLabel: string }[] = [
  { value: "product-information", label: "Product Information", shortLabel: "Product info" },
  { value: "quote", label: "Request a Quote", shortLabel: "Quote" },
  { value: "demo", label: "Request a Demo", shortLabel: "Demo" },
  { value: "technical-support", label: "Technical Support", shortLabel: "Support" },
  { value: "general", label: "General Enquiry", shortLabel: "General" },
];

export function isEnquiryType(value: unknown): value is EnquiryType {
  return ENQUIRY_TYPES.some((t) => t.value === value);
}

export function enquiryTypeLabel(value: EnquiryType): string {
  return ENQUIRY_TYPES.find((t) => t.value === value)?.label ?? value;
}
