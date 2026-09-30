/**
 * Site-wide brand and contact configuration.
 *
 * Contact details below come from the current mindrayanimal.com footer.
 * Confirm them (or swap in regional details) before launch.
 */

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/+$/, "");

export const siteConfig = {
  name: "Mindray Animal Medical",
  legalName: "Shenzhen Mindray Animal Medical Technology Co., LTD.",
  url: siteUrl,
  locale: "en_US",
  description:
    "Veterinary ultrasound and medical imaging systems for companion animal care — cart-based and portable systems for veterinary hospitals and clinics.",
  logo: "/brand/mindray-animal-medical-logo.png",
  contact: {
    email: "info@mindrayanimal.com",
    serviceEmail: "service@mindrayanimal.com",
    phoneDisplay: "(86-755) 3399 7000",
    phoneHref: "+8675533997000",
    address: {
      street:
        "Tower 4, YESUN Intelligent Community Ⅲ, No.1301-88 Guanguang Road, Xinlan Community, Guanlan Street, Longhua District",
      locality: "Shenzhen",
      postalCode: "518110",
      country: "CN",
      countryName: "P.R. China",
    },
  },
  /** Add official profile URLs to show them in the footer and Organization schema. */
  social: [] as { label: string; href: string }[],
} as const;

export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
