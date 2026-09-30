import type { Category } from "@/types/product";

/**
 * Category and subcategory landing content.
 * Each page gets unique introductory copy so category pages never duplicate
 * product-page content. Claims reference facts from `data/products.ts`.
 */
export const categories: Category[] = [
  {
    slug: "medical-imaging",
    name: "Medical Imaging",
    title: "Veterinary Ultrasound & Medical Imaging Systems",
    eyebrow: "Medical Imaging",
    summary:
      "Cart-based and portable veterinary ultrasound systems designed to enhance diagnostic confidence with excellent image quality, dedicated veterinary parameters and a user-friendly workflow.",
    intro: [
      "Our ultrasound imaging solutions, including both cart-based and portable systems, are designed to enhance veterinarians' confidence in diagnosis with excellent image quality, dedicated veterinary parameters and a user-friendly workflow.",
      "The range runs from premium cart-based platforms built on the ZST+ imaging platform to hand-carried, laptop and touch-screen systems — with species-specific presets, cardiology and abdominal tools, and workflow automation across the portfolio.",
    ],
    highlights: [
      {
        title: "Dedicated veterinary presets",
        description:
          "Image presets tuned to different species, subdivided by weight and body size on the Vetus series.",
      },
      {
        title: "ZST+ imaging platform",
        description:
          "Zone Imaging, Zone Focusing and Zone Processing on Vetus 9, Vetus 80, Vetus E7 and Vetus EQ.",
      },
      {
        title: "Cardiology & abdominal tools",
        description:
          "TDI QA, TT QA, UWN+ contrast imaging and elastography for detailed, quantitative diagnosis.",
      },
      {
        title: "Streamlined workflow",
        description:
          "iWorks protocols — on Vetus 9 they reduce exam time by 50% and keystrokes by 80%.",
      },
    ],
    image: {
      src: "/images/products/vetus-9/vetus-9.webp",
      width: 1200,
      height: 1200,
      alt: "Vetus 9 cart-based veterinary ultrasound system with a dog lying beside it",
    },
    seo: {
      title: "Veterinary Ultrasound & Imaging Systems",
      description:
        "Explore veterinary ultrasound systems for companion animals: premium cart-based Vetus systems plus portable, laptop and touch-screen models for clinics.",
      keywords: [
        "veterinary ultrasound",
        "veterinary imaging systems",
        "veterinary ultrasound machine",
        "animal ultrasound machine",
        "veterinary medical equipment",
      ],
    },
  },
  {
    slug: "cart-based-ultrasound",
    parent: "medical-imaging",
    name: "Cart-based Ultrasound",
    title: "Cart-based Veterinary Ultrasound Systems",
    eyebrow: "Medical Imaging · Cart-based",
    summary:
      "Full-featured veterinary ultrasound for the imaging room — large HD monitors, touch-screen control, multiple transducer sockets and dedicated application packages.",
    intro: [
      "Cart-based systems bring complete diagnostic capability to the scan room: high-definition monitors up to 23.8 inches (Vetus 9 and Vetus 8), touch-screen control, multiple active transducer sockets and application packages for abdominal, cardiac and reproduction exams.",
      "Choose the premium Vetus 9 with ZST+, UWN+ contrast imaging and Sound Touch Elastography; the high-end Vetus 80 with dedicated exotic-species presets; or the Vetus 8, Vetus 7, Vetus 50, Vetus 5 and Vetus 5Exp for everyday practice.",
    ],
    highlights: [
      {
        title: "Large HD displays",
        description: "23.8\" monitors on Vetus 9 and Vetus 8; 21.5\" on Vetus 7, with 13.3\"–15.6\" touch screens.",
      },
      {
        title: "Species-specific presets",
        description: "Presets for canine, feline, equine, bovine, ovine and more, subdivided by weight and body size.",
      },
      {
        title: "Quantitative cardiology",
        description: "Auto PW, Auto CW and Auto EF, TDI and TDI QA, and TT QA on selected models.",
      },
    ],
    image: {
      src: "/images/products/vetus-8/vetus-8.webp",
      width: 606,
      height: 606,
      alt: "Vetus 8 cart-based veterinary ultrasound system with a husky",
    },
    seo: {
      title: "Cart-based Veterinary Ultrasound Systems",
      description:
        "Compare cart-based veterinary ultrasound systems — Vetus 9, Vetus 80, Vetus 8, Vetus 7, Vetus 50, Vetus 5 and Vetus 5Exp — with HD monitors and vet presets.",
      keywords: [
        "cart-based veterinary ultrasound",
        "veterinary ultrasound system",
        "veterinary hospital ultrasound",
        "veterinary cardiac ultrasound",
      ],
    },
  },
  {
    slug: "portable-ultrasound",
    parent: "medical-imaging",
    name: "Portable Ultrasound",
    title: "Portable Veterinary Ultrasound Systems",
    eyebrow: "Medical Imaging · Portable",
    summary:
      "Laptop, hand-carried and touch-screen veterinary ultrasound that goes wherever the patient is — with battery scanning and Doppler options.",
    intro: [
      "Portable systems take ultrasound to the patient. The Vetus E7 main unit weighs 6.6 lbs and is 1.7 in thin, the Vetus EQ main unit weighs 3 kg for equine work, and the Z60 Vet, DP-50 Vet and DP-30 Vet each offer 1.5 hours of scanning on a rechargeable battery.",
      "Options range from the colour Doppler Z60 Vet and the touch-screen TE5 Vet with iVocal voice control, to the Black & White DP-50 Vet with optional colour Doppler and the lightweight DP-30 Vet with Power Doppler and PW Doppler.",
    ],
    highlights: [
      {
        title: "Built to travel",
        description: "Laptop and hand-carried designs, with up to 8 hours of scanning using the U-Bank battery companion (Vetus E7).",
      },
      {
        title: "Doppler options",
        description: "Colour Doppler (Z60 Vet), optional colour Doppler (DP-50 Vet), Power and PW Doppler (DP-30 Vet).",
      },
      {
        title: "Guided procedures",
        description: "iNeedle+ needle enhancement on TE5 Vet and Vetus EQ; B-Steer on Z60 Vet, DP-50 Vet and DP-30 Vet.",
      },
    ],
    image: {
      src: "/images/products/vetus-e7/vetus-e7.webp",
      width: 547,
      height: 547,
      alt: "Vetus E7 hand-carried laptop veterinary ultrasound system",
    },
    seo: {
      title: "Portable Veterinary Ultrasound Machines",
      description:
        "Portable veterinary ultrasound machines: Vetus E7 laptop, Vetus EQ for equine, TE5 Vet touch screen, Z60 Vet colour Doppler, DP-50 Vet and DP-30 Vet.",
      keywords: [
        "portable veterinary ultrasound",
        "portable vet ultrasound machine",
        "laptop veterinary ultrasound",
        "handheld veterinary ultrasound",
        "equine ultrasound",
      ],
    },
  },
];
