import { siteConfig } from "@/config/site";

/**
 * Veterinary ultrasound FAQs (shown on the Medical Imaging category page). Every answer is grounded in `data/products.ts`
 * and is also emitted as FAQPage structured data — keep answers factual.
 */
export interface Faq {
  question: string;
  answer: string;
  links?: { label: string; href: string }[];
}

export const companionAnimalFaqs: Faq[] = [
  {
    question: "Which veterinary ultrasound systems are available for companion animal practices?",
    answer:
      "The range includes seven cart-based systems — Vetus 9, Vetus 80, Vetus 8, Vetus 7, Vetus 50, Vetus 5 and Vetus 5Exp — and six portable systems: Vetus E7, Vetus EQ, TE5 Vet, Z60 Vet, DP-50 Vet and DP-30 Vet.",
    links: [
      { label: "Cart-based systems", href: "/products/cart-based-ultrasound" },
      { label: "Portable systems", href: "/products/portable-ultrasound" },
    ],
  },
  {
    question: "What is the difference between cart-based and portable veterinary ultrasound?",
    answer:
      "Cart-based systems such as Vetus 9, Vetus 8 and Vetus 7 combine large HD monitors (21.5\" to 23.8\"), touch-screen control and multiple active transducer sockets for the imaging room. Portable systems prioritise mobility: the Vetus E7 main unit weighs 6.6 lbs, the Vetus EQ main unit weighs 3 kg, and the Z60 Vet, DP-50 Vet and DP-30 Vet offer 1.5 hours of battery scanning.",
  },
  {
    question: "Which systems support veterinary cardiology?",
    answer:
      "Vetus 9 offers TDI QA (up to 8 myocardial regions) and TT QA angle-independent myocardial analysis. Vetus 80 includes TT QA, Vetus 8 and Vetus 7 provide Auto PW, Auto CW and Auto EF, Vetus 5Exp includes TDI with four modes and TDI QA, and the Z60 Vet supports Tissue Doppler Imaging.",
    links: [{ label: "Vetus 9", href: "/products/vetus-9" }],
  },
  {
    question: "Is there an ultrasound solution for exotic pets?",
    answer:
      "Yes. Vetus 80 combines dedicated exotic-pet presets with an L16-4Hs hockey stick probe for examinations of animals such as guinea pigs, mice, lizards and turtles.",
    links: [{ label: "Vetus 80", href: "/products/vetus-80" }],
  },
  {
    question: "Which ultrasound system is designed for equine practice?",
    answer:
      "Vetus EQ is a portable equine ultrasound system with dedicated MSK (tendon), cardiology, abdomen and reproduction applications, a 3 kg main unit and a U-bank battery pack that supports up to 8 hours of working time.",
    links: [{ label: "Vetus EQ", href: "/products/vetus-eq" }],
  },
  {
    question: "How do I choose the right ultrasound system for my clinic?",
    answer:
      "It depends on your caseload, the species you see, the applications you need (for example abdominal, cardiac or guided procedures) and whether you need mobility. Our team can compare suitable models with you and arrange a demonstration.",
    links: [{ label: "Talk to a specialist", href: "/contact?type=general" }],
  },
  {
    question: "How can I request a quote, demo or product brochure?",
    answer:
      `Use the enquiry form on this page or on any product page and choose the enquiry type — product information, quote or demo. You can also email ${siteConfig.contact.email}. A specialist will respond with pricing, configuration options and documentation.`,
    links: [{ label: "Request a quote", href: "/contact?type=quote" }],
  },
];
