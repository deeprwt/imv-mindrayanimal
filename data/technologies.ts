/**
 * Imaging technologies highlighted on the landing and category pages.
 * Descriptions paraphrase the manufacturer's product pages; `products` lists
 * only models whose source content names the technology.
 */
export interface Technology {
  id: string;
  name: string;
  summary: string;
  products: string[];
}

export const technologies: Technology[] = [
  {
    id: "zst-plus",
    name: "ZST+ Imaging Platform",
    summary:
      "ZONE Sonography™ Technology+ moves from conventional beam-forming to channel-based processing, with Zone Imaging, Zone Focusing and Zone Processing keeping images in focus from superficial skin to deep organs.",
    products: ["vetus-9", "vetus-80", "vetus-e7", "vetus-eq"],
  },
  {
    id: "contrast-imaging",
    name: "UWN+ Contrast Imaging",
    summary:
      "Detects and uses both 2nd harmonic and non-linear fundamental signals for greater sensitivity to minor signals and longer agent duration with lower MI.",
    products: ["vetus-9", "vetus-80"],
  },
  {
    id: "elastography",
    name: "Elastography",
    summary:
      "Sound Touch Elastography on Vetus 9 delivers real-time 2D shear wave elastography; Natural Touch Elastography on Vetus 50 assesses soft-tissue stiffness.",
    products: ["vetus-9", "vetus-50", "vetus-5", "vetus-5exp"],
  },
  {
    id: "cardiac-quantification",
    name: "Cardiac Quantification",
    summary:
      "TDI QA analyses up to 8 myocardial regions simultaneously, and TT QA evaluates myocardial motion independently of angle.",
    products: ["vetus-9", "vetus-80", "vetus-5exp"],
  },
  {
    id: "iworks",
    name: "iWorks Workflow Automation",
    summary:
      "Standardised exam protocols with automatic annotation, body marks and measurements — on Vetus 9 reducing exam time by 50% and keystrokes by 80%.",
    products: ["vetus-9", "vetus-7", "vetus-50", "vetus-5exp", "vetus-eq"],
  },
  {
    id: "needle-guidance",
    name: "Needle Guidance",
    summary:
      "iNeedle+ needle visualisation enhancement for injection, aspiration and biopsy, and B-Steer scan-line steering for better needle visibility.",
    products: ["te5-vet", "vetus-eq", "vetus-5", "vetus-5exp", "z60-vet", "dp-50-vet", "dp-30-vet"],
  },
];
