import "server-only";
import type { Enquiry } from "@/types/enquiry";

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

function rows(enquiry: Enquiry): [string, string][] {
  const a = enquiry.attribution;
  return [
    ["Reference", enquiry.reference],
    ["Enquiry type", enquiry.enquiryTypeLabel],
    ["Product / solution", enquiry.productName ?? enquiry.product],
    ["Full name", enquiry.fullName],
    ["Organisation", enquiry.organization],
    ["Email", enquiry.email],
    ["Phone", enquiry.phone],
    ["Location", [enquiry.city, enquiry.state, enquiry.country].filter(Boolean).join(", ")],
    ["Message", enquiry.message || "—"],
    ["Page", enquiry.pageUrl ?? "—"],
    ["Source / medium", [a.utm_source, a.utm_medium].filter(Boolean).join(" / ") || "—"],
    ["Campaign", [a.utm_campaign, a.utm_term].filter(Boolean).join(" · ") || "—"],
    ["Google click ID", a.gclid ?? a.gbraid ?? a.wbraid ?? "—"],
    ["Landing page", a.landingPage ?? "—"],
    ["Received", enquiry.receivedAt],
  ];
}

export function enquirySubject(enquiry: Enquiry): string {
  return `[${enquiry.enquiryTypeLabel}] ${enquiry.productName ?? "General"} — ${enquiry.organization} (${enquiry.country})`;
}

export function enquiryText(enquiry: Enquiry): string {
  return rows(enquiry)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}

export function enquiryHtml(enquiry: Enquiry): string {
  const body = rows(enquiry)
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:6px 12px;background:#f6f8fa;font:600 13px sans-serif;vertical-align:top">${escapeHtml(label)}</th><td style="padding:6px 12px;font:14px sans-serif;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join("");
  return `<table cellspacing="0" style="border-collapse:collapse;border:1px solid #e2e8f0">${body}</table>`;
}
