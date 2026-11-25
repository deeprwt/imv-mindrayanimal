/**
 * Site-wide brand and contact configuration.
 *
 * Contact details are IMV India Pvt. Ltd., the exclusive Mindray Animal Medical
 * distributor in India (client review, Nov 2026).
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
  /** Distributor that operates this site: named in the enquiry consent, footer and address. */
  distributor: {
    name: "IMV India Pvt. Ltd.",
    /**
     * IMV Technologies logo for the footer (dark background), e.g. "/brand/imv-technologies-logo-white.png".
     * While null, the footer shows the company name as text.
     */
    logo: null as { src: string; width: number; height: number } | null,
  },
  contact: {
    email: "info@imvindia.com",
    serviceEmail: "service@mindrayanimal.com",
    phoneDisplay: "0124-4770707",
    phoneHref: "+911244770707",
    address: {
      street: "Plot 750, Phase-V, Udyog Vihar",
      locality: "Gurgaon",
      region: "Haryana",
      postalCode: "122016",
      country: "IN",
      countryName: "India",
    },
  },
  /** Add official profile URLs to show them in the footer and Organization schema. */
  social: [] as { label: string; href: string }[],
} as const;

export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
