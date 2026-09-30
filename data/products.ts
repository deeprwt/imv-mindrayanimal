import type { Product } from "@/types/product";

/**
 * Product catalogue for the companion-animal landing page.
 *
 * Scope: the 13 medical-imaging products listed in "Product to be added.docx".
 * Content source: manufacturer product pages (see `source.url`), extracted on
 * 2026-09-28 and verified claim-by-claim against the source. Nothing here is invented:
 * fields without approved content are left empty and listed in `content.missing`.
 *
 * To add a product: append an object below and add its images under
 * /public/images/products/<slug>/. The product page, sitemap entry, legacy redirect,
 * cards and filters are generated automatically.
 */
export const products: Product[] = [
  {
    "slug": "vetus-9",
    "name": "Vetus 9",
    "category": "medical-imaging",
    "subcategory": "cart-based-ultrasound",
    "productType": "Premium Veterinary Diagnostic Ultrasound System",
    "tagline": "Premium care for animals",
    "isNew": true,
    "featured": true,
    "order": 0,
    "shortDescription": "Premium veterinary ultrasound powered by ZST+ technology, with dedicated veterinary applications, leading image quality and efficient workflow.",
    "overview": [
      "To meet the diverse demands of the veterinary practice, a revolutionary premium ultrasound system is introduced — Vetus 9. Powered by ZONE Sonography™ Technology+ (ZST+), Vetus 9 brings ultrasound imaging performance for animals to the next level.",
      "Vetus 9 provides excellent solutions with dedicated veterinary applications, leading image quality, superb diagnostic tools, and efficient workflow.",
      "Based on the leading-edge ZST+ platform, Vetus 9 redefines a new standard of image performance to meet the needs of the challenging clinical practice."
    ],
    "keySpec": "23.8'' bezel-less full-screen",
    "image": {
      "src": "/images/products/vetus-9/vetus-9.webp",
      "width": 1200,
      "height": 1200,
      "alt": "Vetus 9 cart-based veterinary ultrasound system with a dog lying beside it",
      "kind": "product"
    },
    "gallery": [
      {
        "src": "/images/products/vetus-9/vetus-9-premium-veterinary-ultrasound-system.webp",
        "width": 798,
        "height": 1182,
        "alt": "Vetus 9 premium veterinary ultrasound system",
        "kind": "product",
        "caption": "Vetus 9 premium veterinary ultrasound system"
      },
      {
        "src": "/images/products/vetus-9/vetus-9-canine-kidney-glazing-flow.webp",
        "width": 1200,
        "height": 769,
        "alt": "Vetus 9 clinical ultrasound image: Canine Kidney Glazing Flow",
        "kind": "clinical",
        "caption": "Canine Kidney Glazing Flow"
      },
      {
        "src": "/images/products/vetus-9/vetus-9-feline-bile-duct-dilation.webp",
        "width": 1200,
        "height": 769,
        "alt": "Vetus 9 clinical ultrasound image: Feline Bile Duct Dilation",
        "kind": "clinical",
        "caption": "Feline Bile Duct Dilation"
      },
      {
        "src": "/images/products/vetus-9/vetus-9-canine-liver-and-kidney-plane.webp",
        "width": 1200,
        "height": 769,
        "alt": "Vetus 9 clinical ultrasound image: Canine Liver and Kidney Plane",
        "kind": "clinical",
        "caption": "Canine Liver and Kidney Plane"
      },
      {
        "src": "/images/products/vetus-9/vetus-9-canine-spleen-natural-touch-elastography.webp",
        "width": 1200,
        "height": 769,
        "alt": "Vetus 9 clinical ultrasound image: Canine Spleen Natural Touch Elastography",
        "kind": "clinical",
        "caption": "Canine Spleen Natural Touch Elastography"
      },
      {
        "src": "/images/products/vetus-9/vetus-9-canine-left-ventricular-opacification-lvo.webp",
        "width": 1200,
        "height": 769,
        "alt": "Vetus 9 clinical ultrasound image: Canine Left Ventricular Opacification (LVO)",
        "kind": "clinical",
        "caption": "Canine Left Ventricular Opacification (LVO)"
      },
      {
        "src": "/images/products/vetus-9/vetus-9-canine-myxomatous-mitral-valve-disease-mmvd.webp",
        "width": 1200,
        "height": 769,
        "alt": "Vetus 9 clinical ultrasound image: Canine Myxomatous Mitral Valve Disease (MMVD)",
        "kind": "clinical",
        "caption": "Canine Myxomatous Mitral Valve Disease (MMVD)"
      },
      {
        "src": "/images/products/vetus-9/vetus-9-feline-pericardial-effusion.webp",
        "width": 1200,
        "height": 769,
        "alt": "Vetus 9 clinical ultrasound image: Feline Pericardial Effusion",
        "kind": "clinical",
        "caption": "Feline Pericardial Effusion"
      },
      {
        "src": "/images/products/vetus-9/vetus-9-canine-tdi-qa.webp",
        "width": 1200,
        "height": 769,
        "alt": "Vetus 9 clinical ultrasound image: Canine TDI QA",
        "kind": "clinical",
        "caption": "Canine TDI QA"
      }
    ],
    "features": [
      {
        "title": "Powerful ZST+ Platform",
        "description": "ZST+ platform is an extraordinary innovation, representing an ultrasound technology evolution, transforming ultrasound metrics from conventional beam-forming to channel-based processing."
      },
      {
        "title": "Zone Imaging",
        "description": "Zone Imaging can transmit and receive a relatively smaller number of larger sonographic zones, so as to capture real-time images of animals of all species."
      },
      {
        "title": "Zone Focusing",
        "description": "ZST+ platform realizes zone focusing throughout the whole field of view with dynamic pixel focusing technology, ensuring the images from superficial skin to deep organs of any animals are in the focus state in real time."
      },
      {
        "title": "Zone Processing",
        "description": "ZST+ captures and stores the complete acoustic raw data set. The acquisition and storage of ultrasound raw data can ensure diagnostic accuracy and improve imaging resolution."
      },
      {
        "title": "Abdomen Solution: UWN+ Contrast Imaging",
        "description": "Focal lesion diagnosis with perfusion. UWN+ detects and utilizes both the 2nd harmonic and non-linear fundamental signals, generating significantly enhanced images, resulting in greater sensitivity of minor signals and longer agent duration with lower MI."
      },
      {
        "title": "Abdomen Solution: Sound Touch Elastography (STE)",
        "description": "Innovative stiffness assessment. STE delivers real-time 2D shear wave elastography imaging and provides quantitative analysis based on tissue stiffness assessment."
      },
      {
        "title": "Cardiology Solution: TDI QA",
        "description": "Quantitative analysis of myocardial movement and synchronization. TDI QA with max 8 ROI enables simultaneous analyses of 8 regions of myocardium, inclusive of the speed of myocardial movement, myocardial strain, strain rate, and myocardial synchrony."
      },
      {
        "title": "Cardiology Solution: TT QA",
        "description": "Angle-independent myocardial movement evaluation. Tissue Tracking with Quantitative Analysis (TT QA) tracks myocardial motion by detection of 2D speckle patterns and provides angle-independent and precise evaluation of myocardial movement."
      },
      {
        "title": "iStation",
        "description": "Full-stack animal information management system."
      },
      {
        "title": "iScanhelper",
        "description": "Expert around you, providing scanning reference images and a demonstration guide."
      },
      {
        "title": "iWorks",
        "description": "Standardizes and simplifies the workflow, reducing exam time by 50% and keystrokes by 80%."
      },
      {
        "title": "iVocal",
        "description": "Remotely control the system by voice commands, freeing your hands from the machine."
      },
      {
        "title": "iMeasure",
        "description": "Indicates potential or suspected clinical conditions immediately."
      },
      {
        "title": "iStorage",
        "description": "Animal information center that can export and import data with a PC at ease."
      },
      {
        "title": "iReport",
        "description": "Provides customized report templates with professional comments."
      },
      {
        "title": "Intelligent Control Panel: iConsole",
        "description": "Based on six special E-ink keys with digital screens, iConsole can adaptively adjust the layout and key functions during exam shifts."
      },
      {
        "title": "Thoughtful Design for Optimal Convenience",
        "description": "23.8'' bezel-less full-screen with large images for an immersive experience, and an eye protection monitor with adaptive brightness adjustment; 15.6'' full-HD touch screen with intuitive interaction and short-cut switching of the latest used transducers and exams; 5 transducers with elevated design for comfortable connecting; and a 26dB user-friendly design for a quiet operating experience."
      }
    ],
    "applications": [
      "Abdomen",
      "Cardiology"
    ],
    "species": [
      "Canine",
      "Feline"
    ],
    "focus": [
      "cardiology",
      "abdominal"
    ],
    "specifications": [
      {
        "label": "Monitor",
        "value": "23.8'' bezel-less full-screen; eye protection monitor with adaptive brightness adjustment"
      },
      {
        "label": "Touch screen",
        "value": "15.6'' full-HD"
      },
      {
        "label": "Transducers",
        "value": "5, with elevated design for comfortable connecting"
      },
      {
        "label": "Quiet operating design",
        "value": "26dB"
      },
      {
        "label": "iConsole control panel",
        "value": "Six E-ink keys with digital screens"
      },
      {
        "label": "TDI QA",
        "value": "Max 8 ROI (simultaneous analyses of 8 regions of myocardium)"
      },
      {
        "label": "Imaging platform",
        "value": "ZONE Sonography™ Technology+ (ZST+)"
      }
    ],
    "benefits": [
      "iWorks reduces exam time by 50% and keystrokes by 80%",
      "Acquisition and storage of ultrasound raw data can ensure diagnostic accuracy and improve imaging resolution",
      "UWN+ contrast imaging gives greater sensitivity of minor signals and longer agent duration with lower MI"
    ],
    "brochure": null /* PLACEHOLDER: brochure PDF not supplied — add { url, label, meta } */,
    "seo": {
      "title": "Vetus 9 Premium Veterinary Ultrasound System",
      "description": "Vetus 9 premium veterinary ultrasound with ZST+ platform, UWN+ contrast, STE elastography, TDI QA and TT QA cardiology tools, and a 23.8'' monitor.",
      "keywords": [
        "Vetus 9",
        "premium veterinary ultrasound",
        "veterinary ultrasound system",
        "cart-based veterinary ultrasound",
        "veterinary elastography ultrasound",
        "veterinary cardiology ultrasound",
        "ZST+ ultrasound"
      ]
    },
    "source": {
      "url": "https://www.mindrayanimal.com/en/product/Vetus_9",
      "legacyPath": "/en/product/Vetus_9",
      "retrieved": "2026-09-28"
    },
    "content": {
      "status": "needs-review",
      "missing": [
        "brochure"
      ],
      "reviewNotes": "Source says \"5 transducers with elevated design for comfortable connecting\"; it most likely means 5 transducer ports, but the page does not say \"ports\", so the wording is kept as in the source. Please verify. Applications come from the \"Abdomen Solution\" and \"Cardiology Solution\" headings. Species come only from the image captions (Canine, Feline); the source otherwise says \"animals of all species\". Other clinical images not in the gallery: 42.jpg (Canine Mitral Regurgitation), 43.jpg (Canine Mitral Regurgitation CW), 44.jpg (Canine Pulmonary Regurgitation), 45.jpg (Canine Pulmonary Stenosis). These feature images have no captions: 3.png through 8-1.jpg (ZST+ comparison diagrams), 9.gif through 16.jpg, 21 to 28.jpg, and 1.jpg."
    }
  },
  {
    "slug": "vetus-80",
    "name": "Vetus 80",
    "category": "medical-imaging",
    "subcategory": "cart-based-ultrasound",
    "productType": "High-end Veterinary Diagnostic Ultrasound System",
    "tagline": "Born Extraordinary, Leading Expertise",
    "isNew": true,
    "featured": true,
    "order": 1,
    "shortDescription": "Vetus 80 is a brand new high-end veterinary ultrasound equipped with the ZST+ platform, supporting exotic species scanning and UWN+ contrast imaging.",
    "overview": [
      "Mindray Animal Medical introduces its brand new high-end ultrasound, Vetus 80, equipped with the ZST+ platform and outstanding probes, bringing another leap forward in animal ultrasound imaging!",
      "Additionally, Vetus 80 supports advanced applications such as exotic species scanning and UWN+ contrast imaging, greatly expanding the boundaries of animal ultrasound applications and further advancing ultrasound diagnosis."
    ],
    "keySpec": "ZST+ platform",
    "image": {
      "src": "/images/products/vetus-80/vetus-80.webp",
      "width": 776,
      "height": 776,
      "alt": "Vetus 80 veterinary ultrasound system with a dog lying beside it",
      "kind": "product"
    },
    "gallery": [
      {
        "src": "/images/products/vetus-80/vetus-80-veterinarian-with-a-dog-beside-the-vetus-80-ultrasound-system.webp",
        "width": 1305,
        "height": 834,
        "alt": "Vetus 80: Veterinarian with a dog beside the Vetus 80 ultrasound system",
        "kind": "lifestyle",
        "caption": "Veterinarian with a dog beside the Vetus 80 ultrasound system"
      },
      {
        "src": "/images/products/vetus-80/vetus-80-zst-plus-platform-zone-imaging-zone-focusing-and-zone-processing.webp",
        "width": 800,
        "height": 576,
        "alt": "Vetus 80: ZST+ Platform: Zone Imaging, Zone Focusing and Zone Processing",
        "kind": "feature",
        "caption": "ZST+ Platform: Zone Imaging, Zone Focusing and Zone Processing"
      },
      {
        "src": "/images/products/vetus-80/vetus-80-built-in-battery.webp",
        "width": 1133,
        "height": 933,
        "alt": "Vetus 80: Built-in battery",
        "kind": "feature",
        "caption": "Built-in battery"
      },
      {
        "src": "/images/products/vetus-80/vetus-80-innovative-control-panel.webp",
        "width": 1133,
        "height": 933,
        "alt": "Vetus 80: Innovative control panel",
        "kind": "feature",
        "caption": "Innovative control panel"
      },
      {
        "src": "/images/products/vetus-80/vetus-80-magnetic-front-cover.webp",
        "width": 1133,
        "height": 933,
        "alt": "Vetus 80: Magnetic front cover",
        "kind": "feature",
        "caption": "Magnetic front cover"
      }
    ],
    "features": [
      {
        "title": "ZST+ Platform",
        "description": "ZST+ Platform is a globally leading ultrasound imaging platform. It is powered by three core technologies: Zone Imaging, Zone Focusing, and Zone Processing. It provides reliable performance for clinical diagnosis in animal ultrasound."
      },
      {
        "title": "UWN+ Technology",
        "description": "UWN+ (Ultra-Wideband Non-linear Plus) technology enables the Vetus 80 to detect and utilize both the 2nd harmonic and non-linear fundamental signals, generating significantly enhanced images, resulting in greater sensitivity of minor signals and longer agent duration with lower MI."
      },
      {
        "title": "Glazing Flow",
        "description": "Mindray Animal's enriched Glazing Flow provides optimal visualization of micro-vascular perfusion states and improves delineation of vessel borders in an intuitive way by using a 3D visualization technology."
      },
      {
        "title": "TT QA (Tissue Tracking Quantitative Analysis)",
        "description": "Based on the excellent transducer technology, Vetus 80 significantly improves the tracking accuracy and efficiency. With the unique added benefit of on-site analysis, the TT QA can be performed at the bedside, saving time and simplifying challenging diagnoses."
      },
      {
        "title": "Exotic Species Solution",
        "description": "With dedicated exotic pet presets along with an L16-4Hs hockey stick probe, the Vetus 80 delivers clear ultrasound images. These solutions are perfect for examinations of animals such as guinea pigs, mice, lizards, turtles and more. Example scans shown include Bladder (Mink), Kidney (Guinea Pig), Kidney (Turtle) and Heart (Snake)."
      },
      {
        "title": "Finely Crafted, Merged with the Scene",
        "description": "The compact and agile body easily navigates through narrow spaces. With a total storage height of less than 1 meter, it is convenient for scanning large animals. Highlights shown include a built-in battery, an innovative control panel and a magnetic front cover."
      }
    ],
    "applications": [
      "Exotic species scanning",
      "UWN+ contrast imaging"
    ],
    "species": [
      "Guinea pig",
      "Mouse",
      "Lizard",
      "Turtle",
      "Mink",
      "Snake"
    ],
    "focus": [
      "cardiology",
      "exotic"
    ],
    "specifications": [
      {
        "label": "Imaging platform",
        "value": "ZST+ (Zone Imaging, Zone Focusing, Zone Processing)"
      },
      {
        "label": "Exotic species probe",
        "value": "L16-4Hs hockey stick probe"
      },
      {
        "label": "Total storage height",
        "value": "Less than 1 meter"
      },
      {
        "label": "Battery",
        "value": "Built-in battery"
      }
    ],
    "benefits": [
      "UWN+ provides greater sensitivity of minor signals and longer agent duration with lower MI",
      "TT QA can be performed at the bedside, saving time and simplifying challenging diagnoses",
      "Compact and agile body easily navigates through narrow spaces; total storage height of less than 1 meter is convenient for scanning large animals"
    ],
    "brochure": null /* PLACEHOLDER: brochure PDF not supplied — add { url, label, meta } */,
    "seo": {
      "title": "Vetus 80 Veterinary Diagnostic Ultrasound",
      "description": "Vetus 80 high-end veterinary ultrasound with ZST+ platform, UWN+ contrast imaging, Glazing Flow, TT QA and exotic species presets with L16-4Hs probe.",
      "keywords": [
        "Vetus 80 ultrasound",
        "veterinary diagnostic ultrasound system",
        "high-end veterinary ultrasound",
        "exotic pet ultrasound",
        "veterinary contrast ultrasound UWN+",
        "ZST+ ultrasound platform"
      ]
    },
    "source": {
      "url": "https://www.mindrayanimal.com/en/product/Vetus_80",
      "legacyPath": "/en/product/Vetus_80",
      "retrieved": "2026-09-28"
    },
    "content": {
      "status": "needs-review",
      "missing": [
        "brochure"
      ],
      "reviewNotes": "Subcategory (Cart-based) taken from the Medical Imaging System category listing; the product page has no breadcrumb. isNew from the \"New\" badge on the listing page. The source has no product-specific breadcrumb, so subcategory is left empty. The nav lists Cart-based and Portable System, but the page does not say which one applies. Captions for 5.jpg, 6.jpg and 7.jpg come from the image-then-caption order in the source (5=Built-In Battery, 6=Innovative Control Panel, 7=Magnetic Front Cover). Please check them visually. The clinical scans (UWN+ contrast, Glazing Flow, TT QA, and the exotic species scans Bladder (Mink), Kidney (Guinea Pig), Kidney (Turtle), Heart (Snake)) exist only as MP4 videos, not images. The Chinese intro paragraph repeats the English text and was not used. The 'Superb Confidence with Excellent Images' section has only template placeholders ({{data.title}}) and no content."
    }
  },
  {
    "slug": "vetus-8",
    "name": "Vetus 8",
    "category": "medical-imaging",
    "subcategory": "cart-based-ultrasound",
    "productType": "Veterinary Diagnostic Ultrasound System",
    "tagline": "Excellent performance for your trust",
    "isNew": false,
    "featured": true,
    "order": 2,
    "shortDescription": "Vetus 8 is a premium veterinary ultrasound system with species-specific image presets, a 23.8-inch HD monitor and simple workflow for everyday practice.",
    "overview": [
      "Animals are the closest friends and most trusted partners of human beings. Mindray has always been devoted to exploring the dedicated diagnostic imaging solutions for veterinary needs. Starting a new phase in ultrasound imaging, Mindray rolls out the brand new Vetus series to provide professional veterinary solutions catering to a wide variety of species ranging from small pets to large farm animals.",
      "Vetus 8, the premium veterinary ultrasound imaging system, adopts the most cutting-edge ultrasound technology to provide quality images according to different animal species. Moreover, packaged with the simple workflow, dedicated design and complete veterinary solution make it the ideal ultrasound system for your everyday practice."
    ],
    "keySpec": "23.8 inch HD LED monitor with 1920×1080 resolution",
    "image": {
      "src": "/images/products/vetus-8/vetus-8.webp",
      "width": 606,
      "height": 606,
      "alt": "Vetus 8 cart-based veterinary ultrasound system with a husky",
      "kind": "product"
    },
    "gallery": [
      {
        "src": "/images/products/vetus-8/vetus-8-canine-kidney.webp",
        "width": 528,
        "height": 369,
        "alt": "Vetus 8 clinical ultrasound image: Canine Kidney",
        "kind": "clinical",
        "caption": "Canine Kidney"
      },
      {
        "src": "/images/products/vetus-8/vetus-8-color-m-mode-of-canine-heart.webp",
        "width": 528,
        "height": 369,
        "alt": "Vetus 8 clinical ultrasound image: Color M mode of Canine Heart",
        "kind": "clinical",
        "caption": "Color M mode of Canine Heart"
      },
      {
        "src": "/images/products/vetus-8/vetus-8-feline-bladder.webp",
        "width": 528,
        "height": 369,
        "alt": "Vetus 8 clinical ultrasound image: Feline Bladder",
        "kind": "clinical",
        "caption": "Feline Bladder"
      },
      {
        "src": "/images/products/vetus-8/vetus-8-feline-liver.webp",
        "width": 528,
        "height": 369,
        "alt": "Vetus 8 clinical ultrasound image: Feline Liver",
        "kind": "clinical",
        "caption": "Feline Liver"
      },
      {
        "src": "/images/products/vetus-8/vetus-8-hepatic-flow-feline.webp",
        "width": 528,
        "height": 369,
        "alt": "Vetus 8 clinical ultrasound image: Hepatic Flow Feline",
        "kind": "clinical",
        "caption": "Hepatic Flow Feline"
      },
      {
        "src": "/images/products/vetus-8/vetus-8-long-axis-view-of-canine-heart.webp",
        "width": 528,
        "height": 369,
        "alt": "Vetus 8 clinical ultrasound image: Long Axis View of Canine Heart",
        "kind": "clinical",
        "caption": "Long Axis View of Canine Heart"
      },
      {
        "src": "/images/products/vetus-8/vetus-8-tdi-qa-of-canine-heart.webp",
        "width": 528,
        "height": 369,
        "alt": "Vetus 8 clinical ultrasound image: TDI QA of Canine Heart",
        "kind": "clinical",
        "caption": "TDI QA of Canine Heart"
      },
      {
        "src": "/images/products/vetus-8/vetus-8-ergonomic-cart-and-floating-monitor-arm.webp",
        "width": 506,
        "height": 407,
        "alt": "Vetus 8 ergonomic cart and floating monitor arm",
        "kind": "feature",
        "caption": "Vetus 8 ergonomic cart and floating monitor arm"
      }
    ],
    "features": [
      {
        "title": "Quality Images",
        "description": "Professional veterinary image presets according to different animals' body characteristics (canine, feline, equine, bovine, ovine, etc.), with support for customized species. Different animal species are subdivided by weight and body size for precise diagnosis (e.g. small dog, medium dog, large dog). A 23.8 inch High Definition LED monitor with 1920×1080 resolution provides clear tissue details for precise diagnosis."
      },
      {
        "title": "Easy Workflow",
        "description": "Quick switch of transducers and exam modes in the same interface within 1 second. One click switches to frequently-used modes on the touch screen. Concise UI design shows only associated menu options for a clear procedure. A dedicated animal information system supports fast exam creation and animal sterilization management. Volume control: the volume of PW/CW/TDI is off by default to avoid frightening the pets."
      },
      {
        "title": "Powerful Intelligent Tools",
        "description": "Auto measuring tools (Auto PW, Auto CW, Auto EF) help to maximize the productivity of accurate scanning with ease. An automated workflow procedure helps guide abdomen and cardiology ultrasound scanning."
      },
      {
        "title": "iStation",
        "description": "Mindray's unique Veterinary Information Management System enables you to integrate, review, archive and retrieve all data effectively."
      },
      {
        "title": "iClear",
        "description": "Improves image quality based on auto structure detection, delivering better contrast resolution and clearer, sharper tissue border definition."
      },
      {
        "title": "iTouch",
        "description": "An auto image optimization solution with one touch, able to optimize imaging quality automatically in B/PW mode."
      },
      {
        "title": "Easy Data Management: A Flexible Way to Connect Vetus 8",
        "description": "iStorage™ directly transfers veterinary images and reports to a PC via wired or wireless network. Medsight™ is an interactive app that transfers clinical images/cines and reports to your smart devices via WiFi, supporting both iOS and Android powered devices."
      },
      {
        "title": "Ergonomics Dedicated for Veterinary Practice",
        "description": "23.8'' high definition LED monitor with 180-degree rotation; 13.3'' anti-glare touch screen with 30-degree rotation and multi-gesture support; Dual-Wing floating monitor supporting arm that moves anywhere you want; anti-dirty control panel, rotatable and height adjustable; sliding keyboard with designed silicon cover; 5 active smart transducer sockets with easy lock design; high capacity battery for standby mode to keep image data always safe; transducer cable management to help keep cables off the ground; stable wheels with small footprint and 360° rotation."
      },
      {
        "title": "Small Animal Solution",
        "description": "For feline, small-sized canine and exotic small animals. C11-3s: micro-convex transducer for abdominal scanning and basic cardiology in cats, small dogs, and exotic animals. L12-4s: high frequency linear array transducer. P8-2s: mid/high-frequency phased array for mid and small-sized species. P10-4s: high-frequency phased array for small-sized species."
      },
      {
        "title": "Large Animal Solution",
        "description": "For big-sized canine, equine, bovine, ovine and exotic big animals. 6LE5Vs: intrarectal linear array transducer for equine and farm animal reproduction exam. C6-2s: convex array transducer for abdominal and reproduction scanning in big animals. P4-2s: low-frequency phased array transducer for medium-sized and large species. More transducers can be supported; contact Mindray for further details."
      }
    ],
    "applications": [
      "Abdominal imaging",
      "Cardiology",
      "Reproduction"
    ],
    "species": [
      "Canine",
      "Feline",
      "Equine",
      "Bovine",
      "Ovine",
      "Exotic animals"
    ],
    "focus": [
      "cardiology",
      "abdominal",
      "reproduction",
      "exotic",
      "equine"
    ],
    "specifications": [
      {
        "label": "Main monitor",
        "value": "23.8 inch High Definition LED, 1920×1080 resolution, 180-degree rotation"
      },
      {
        "label": "Touch screen",
        "value": "13.3 inch anti-glare, 30-degree rotation, multi-gesture support"
      },
      {
        "label": "Active transducer sockets",
        "value": "5, with easy lock design"
      },
      {
        "label": "Transducer / exam mode switching",
        "value": "Within 1 second"
      },
      {
        "label": "Wheels",
        "value": "360° rotation, small footprint"
      },
      {
        "label": "Battery",
        "value": "High capacity battery for standby mode"
      },
      {
        "label": "Auto measurement tools",
        "value": "Auto PW, Auto CW, Auto EF"
      },
      {
        "label": "Data connectivity",
        "value": "iStorage (wired or wireless network to PC); Medsight app via WiFi (iOS and Android)"
      },
      {
        "label": "Small animal transducers",
        "value": "C11-3s, L12-4s, P8-2s, P10-4s"
      },
      {
        "label": "Large animal transducers",
        "value": "6LE5Vs, C6-2s, P4-2s"
      }
    ],
    "benefits": [
      "Quick switch of transducers and exam modes in the same interface within 1 second",
      "Auto PW, Auto CW, Auto EF help to maximize the productivity of accurate scanning with ease",
      "PW/CW/TDI volume is off by default to avoid frightening the pets",
      "High capacity battery for standby mode keeps the image data always safe",
      "Transducer cable management helps keep cables off the ground"
    ],
    "brochure": null /* PLACEHOLDER: brochure PDF not supplied — add { url, label, meta } */,
    "seo": {
      "title": "Vetus 8 Veterinary Ultrasound System",
      "description": "Vetus 8 premium veterinary ultrasound with species presets, 23.8-inch HD monitor, Auto PW/CW/EF tools and transducers for small and large animals.",
      "keywords": [
        "Vetus 8 ultrasound",
        "veterinary ultrasound system",
        "cart-based veterinary ultrasound",
        "veterinary cardiology ultrasound",
        "large animal ultrasound",
        "small animal ultrasound transducers"
      ]
    },
    "source": {
      "url": "https://www.mindrayanimal.com/en/product/Vetus_8",
      "legacyPath": "/en/product/Vetus_8",
      "retrieved": "2026-09-28"
    },
    "content": {
      "status": "needs-review",
      "missing": [
        "brochure"
      ],
      "reviewNotes": "Source images c8.bmp and c9.bmp both carry the caption \"TVD of Canine Heart\" (c8/c9 excluded from gallery due to the 8-image limit). Source text had typos \"UI deign\" and \"precise diagnose\", corrected to \"UI design\" and \"precise diagnosis\". The \"Better contrast resolution / Clearer and sharper tissue border definition\" lines appear twice (under iClear and again after Medsight); treated as belonging to iClear. Applications derived from \"abdomen and cardiology ultrasound scanning\" and \"reproduction exam/scanning\" in the transducer descriptions. Gallery caption for 5.jpg is based only on the adjacent 'Ergonomics dedicated for veterinary practice' heading; confirm what the image actually shows. Other unused source images: 2.jpg, s1.jpg, s2.jpg, 3.jpg, 4.png and transducer images under solutions/."
    }
  },
  {
    "slug": "vetus-7",
    "name": "Vetus 7",
    "category": "medical-imaging",
    "subcategory": "cart-based-ultrasound",
    "productType": "Veterinary Diagnostic Ultrasound System",
    "tagline": "For animals, for your diagnostic confidence",
    "isNew": false,
    "order": 3,
    "shortDescription": "Cart-based veterinary ultrasound with species-specific presets, iTouch and iClear image optimization, auto measurements and a 21.5\" HD monitor.",
    "overview": [
      "Animals are the closest friends and most trusted partners of human beings. Mindray has always been devoted to exploring the dedicated diagnostic imaging solutions for veterinary needs. Starting a new phase in ultrasound imaging, Mindray rolls out the brand new Vetus series to provide professional veterinary solutions catering to a wide variety of species ranging from small pets to large farm animals.",
      "Vetus 7 is the seamless combination of veterinarian's requirements and ultrasound technology. With excellent image quality, easy workflow, powerful intelligent tools and ergonomics dedicated for veterinary practice, Vetus 7 provides a total solution for animal care, which will lead you to a premium experience."
    ],
    "keySpec": "21.5\" high definition LED monitor with 13.3\" anti-glare touch screen",
    "image": {
      "src": "/images/products/vetus-7/vetus-7.webp",
      "width": 632,
      "height": 632,
      "alt": "Vetus 7 cart-based veterinary ultrasound system with a cat",
      "kind": "product"
    },
    "gallery": [
      {
        "src": "/images/products/vetus-7/vetus-7-canine-abdomen.webp",
        "width": 528,
        "height": 369,
        "alt": "Vetus 7 clinical ultrasound image: Canine Abdomen",
        "kind": "clinical",
        "caption": "Canine Abdomen"
      },
      {
        "src": "/images/products/vetus-7/vetus-7-canine-kidney.webp",
        "width": 528,
        "height": 369,
        "alt": "Vetus 7 clinical ultrasound image: Canine Kidney",
        "kind": "clinical",
        "caption": "Canine Kidney"
      },
      {
        "src": "/images/products/vetus-7/vetus-7-color-m-mode-of-canine-heart.webp",
        "width": 528,
        "height": 369,
        "alt": "Vetus 7 clinical ultrasound image: Color M mode of Canine Heart",
        "kind": "clinical",
        "caption": "Color M mode of Canine Heart"
      },
      {
        "src": "/images/products/vetus-7/vetus-7-feline-bladder.webp",
        "width": 528,
        "height": 369,
        "alt": "Vetus 7 clinical ultrasound image: Feline Bladder",
        "kind": "clinical",
        "caption": "Feline Bladder"
      },
      {
        "src": "/images/products/vetus-7/vetus-7-feline-liver.webp",
        "width": 528,
        "height": 369,
        "alt": "Vetus 7 clinical ultrasound image: Feline Liver",
        "kind": "clinical",
        "caption": "Feline Liver"
      },
      {
        "src": "/images/products/vetus-7/vetus-7-hepatic-flow-feline.webp",
        "width": 528,
        "height": 369,
        "alt": "Vetus 7 clinical ultrasound image: Hepatic Flow Feline",
        "kind": "clinical",
        "caption": "Hepatic Flow Feline"
      },
      {
        "src": "/images/products/vetus-7/vetus-7-long-axis-view-of-canine-heart.webp",
        "width": 528,
        "height": 369,
        "alt": "Vetus 7 clinical ultrasound image: Long Axis View of Canine Heart",
        "kind": "clinical",
        "caption": "Long Axis View of Canine Heart"
      },
      {
        "src": "/images/products/vetus-7/vetus-7-tdi-qa-of-canine-heart.webp",
        "width": 528,
        "height": 369,
        "alt": "Vetus 7 clinical ultrasound image: TDI QA of Canine Heart",
        "kind": "clinical",
        "caption": "TDI QA of Canine Heart"
      }
    ],
    "features": [
      {
        "title": "Quality Images",
        "description": "Professional veterinary image presets (canine, feline, equine, bovine, ovine, etc.) with support for customized species. Different animal species are subdivided by weight and body size for precise diagnosis (e.g. small dog, medium dog, large dog). Image quality is optimized by adopting the innovative veterinary image algorithm."
      },
      {
        "title": "Easy Workflow",
        "description": "Quick switch of transducers and exam modes in the same interface within 1 second. One click switches to frequently-used modes on the touch screen. Concise UI design shows only associated menu options for a clear procedure. A dedicated animal information system supports fast exam creation and animal sterilization management. Volume control: the volume of PW/CW/TDI is off by default to avoid frightening the pets."
      },
      {
        "title": "Auto Measuring Tools",
        "description": "Auto PW, Auto CW and Auto EF help to maximize the productivity of accurate scanning with ease."
      },
      {
        "title": "iWorks",
        "description": "Automated workflow procedure helps guide abdomen and cardiology ultrasound scanning. It standardizes and simplifies the workflow, letting users focus more on the animal diagnosis. Adding annotation, body mark and measurement automatically improves your diagnosis efficiency."
      },
      {
        "title": "iStation",
        "description": "Veterinary Information Management System allows you to integrate, review, archive and retrieve all data effectively."
      },
      {
        "title": "iClear",
        "description": "Improves image quality based on auto structure detection, delivering better contrast resolution and clearer, sharper tissue border definition."
      },
      {
        "title": "iTouch™",
        "description": "iTouch is an auto image optimization solution with one touch, which is able to optimize the imaging quality intelligently. It automatically optimizes gain and uniformity (including B/PW mode) and automatically optimizes the angle and gain of Color/PW mode."
      },
      {
        "title": "Ergonomics Dedicated for Veterinary Practice",
        "description": "21.5\" high definition LED monitor with 180-degree rotation; 13.3\" anti-glare touch screen with 30-degree rotation and multi-gesture support; sliding keyboard with designed silicon cover; 4 active smart transducer sockets with easy lock design; high capacity battery for standby mode to keep image data always safe; transducer cable management to help keep cables off the ground; stable wheels with small footprint and 360° rotation."
      },
      {
        "title": "Small Animal Solution",
        "description": "For feline, small-sized canine and exotic small animals. C11-3s: micro-convex transducer for abdominal scanning and basic cardiology in cats, small dogs and exotic animals. L12-4s: high frequency linear array transducer. L13-3s: high frequency linear array transducer. P8-2s: mid/high-frequency phased array for mid and small-sized species. P10-4s: high-frequency phased array for small-sized species."
      },
      {
        "title": "Large Animal Solution",
        "description": "For big-sized canine, equine, bovine, ovine and exotic big animals. 6LE5Vs: intrarectal linear array transducer for equine and farm animal reproduction exam. C6-2s: convex array transducer for abdominal and reproduction scanning in big animals. P4-2s: low-frequency phased array transducer for medium-sized and large species. More transducers can be supported; contact Mindray for further details."
      }
    ],
    "applications": [
      "Abdominal imaging",
      "Cardiology",
      "Reproduction"
    ],
    "species": [
      "Canine",
      "Feline",
      "Equine",
      "Bovine",
      "Ovine",
      "Exotic animals"
    ],
    "focus": [
      "cardiology",
      "abdominal",
      "reproduction",
      "exotic",
      "equine"
    ],
    "specifications": [
      {
        "label": "Main monitor",
        "value": "21.5\" high definition LED, 180-degree rotation"
      },
      {
        "label": "Touch screen",
        "value": "13.3\" anti-glare, 30-degree rotation, multi-gesture support"
      },
      {
        "label": "Active transducer sockets",
        "value": "4, with easy lock design"
      },
      {
        "label": "Transducer / exam mode switch",
        "value": "Within 1 second"
      },
      {
        "label": "Wheels",
        "value": "360° rotation, small footprint"
      },
      {
        "label": "Battery",
        "value": "High capacity battery for standby mode"
      },
      {
        "label": "Auto measurements",
        "value": "Auto PW, Auto CW, Auto EF"
      },
      {
        "label": "Small animal transducers",
        "value": "C11-3s, L12-4s, L13-3s, P8-2s, P10-4s"
      },
      {
        "label": "Large animal transducers",
        "value": "6LE5Vs, C6-2s, P4-2s"
      }
    ],
    "benefits": [
      "Auto PW, Auto CW and Auto EF help to maximize the productivity of accurate scanning with ease",
      "iWorks standardizes and simplifies the workflow, letting users focus more on the animal diagnosis",
      "PW/CW/TDI volume is off by default to avoid frightening the pets",
      "High capacity battery for standby mode keeps the image data always safe"
    ],
    "brochure": null /* PLACEHOLDER: brochure PDF not supplied — add { url, label, meta } */,
    "seo": {
      "title": "Vetus 7 Veterinary Diagnostic Ultrasound",
      "description": "Vetus 7 cart-based veterinary ultrasound with species presets, iTouch and iClear, Auto PW/CW/EF, a 21.5\" HD monitor and small/large animal transducers.",
      "keywords": [
        "Vetus 7 ultrasound",
        "veterinary diagnostic ultrasound system",
        "cart-based veterinary ultrasound",
        "veterinary cardiology ultrasound",
        "equine reproduction ultrasound",
        "small animal ultrasound"
      ]
    },
    "source": {
      "url": "https://www.mindrayanimal.com/en/product/Vetus_7",
      "legacyPath": "/en/product/Vetus_7",
      "retrieved": "2026-09-28"
    },
    "content": {
      "status": "needs-review",
      "missing": [
        "brochure"
      ],
      "reviewNotes": "Source typo \"Concise UI deign\" corrected to \"design\". Applications derived from source phrases (abdomen/abdominal scanning, cardiology, reproduction exam). Page also shows feature images 2.jpg, s1.jpg, s2.jpg, 3.jpg, 4.jpg and transducer images (solutions/*.jpg, solutions/L13-3s.png) not included in gallery due to 8-image limit. Clinical image caption 'Hepatic Flow Feline' kept as in source (file name is 'Hepatic Flow of Feline')."
    }
  },
  {
    "slug": "vetus-50",
    "name": "Vetus 50",
    "category": "medical-imaging",
    "subcategory": "cart-based-ultrasound",
    "productType": "Practical Veterinary Ultrasound System",
    "isNew": true,
    "featured": true,
    "order": 4,
    "shortDescription": "Practical veterinary ultrasound with dedicated image presets, ComboWave transducers with 3T technology, Natural Touch Elastography and built-in learning tools.",
    "overview": [
      "Mindray Animal Medical's new practical veterinary ultrasound Vetus 50 provides an excellent experience for all veterinary specialists.",
      "Vetus 50 offers Incredible Images, Intelligent Tools and Innovative Designs."
    ],
    "image": {
      "src": "/images/products/vetus-50/vetus-50.webp",
      "width": 527,
      "height": 527,
      "alt": "Vetus 50 cart-based veterinary ultrasound system",
      "kind": "product"
    },
    "gallery": [
      {
        "src": "/images/products/vetus-50/vetus-50-dedicated-image-presets.webp",
        "width": 1200,
        "height": 800,
        "alt": "Vetus 50: Dedicated image presets",
        "kind": "feature",
        "caption": "Dedicated image presets"
      },
      {
        "src": "/images/products/vetus-50/vetus-50-natural-touch-elastography.webp",
        "width": 1200,
        "height": 800,
        "alt": "Vetus 50: Natural Touch Elastography",
        "kind": "feature",
        "caption": "Natural Touch Elastography"
      },
      {
        "src": "/images/products/vetus-50/vetus-50-hd-scope.webp",
        "width": 1200,
        "height": 800,
        "alt": "Vetus 50: HD Scope",
        "kind": "feature",
        "caption": "HD Scope"
      },
      {
        "src": "/images/products/vetus-50/vetus-50-iscanhelper-built-in-tutorial.webp",
        "width": 770,
        "height": 640,
        "alt": "Vetus 50: IScanHelper built-in tutorial",
        "kind": "feature",
        "caption": "IScanHelper built-in tutorial"
      },
      {
        "src": "/images/products/vetus-50/vetus-50-canine-kidney.webp",
        "width": 600,
        "height": 374,
        "alt": "Vetus 50 clinical ultrasound image: Canine Kidney",
        "kind": "clinical",
        "caption": "Canine Kidney"
      },
      {
        "src": "/images/products/vetus-50/vetus-50-canine-kidney-vessel.webp",
        "width": 600,
        "height": 375,
        "alt": "Vetus 50 clinical ultrasound image: Canine Kidney Vessel",
        "kind": "clinical",
        "caption": "Canine Kidney Vessel"
      },
      {
        "src": "/images/products/vetus-50/vetus-50-canine-heart.webp",
        "width": 800,
        "height": 500,
        "alt": "Vetus 50 clinical ultrasound image: Canine Heart",
        "kind": "clinical",
        "caption": "Canine Heart"
      },
      {
        "src": "/images/products/vetus-50/vetus-50-feline-pulmonary-artery-pw.webp",
        "width": 600,
        "height": 375,
        "alt": "Vetus 50 clinical ultrasound image: Feline Pulmonary Artery (PW)",
        "kind": "clinical",
        "caption": "Feline Pulmonary Artery (PW)"
      }
    ],
    "features": [
      {
        "title": "Dedicated Presets",
        "description": "With rich and dedicated image presets, veterinarians can obtain clear images without adjusting many image parameters."
      },
      {
        "title": "ComboWave Transducer with 3T Technology",
        "description": "Compared with traditional transducers, ComboWave transducers dramatically optimize the acoustic spectrum and reduce acoustic impedance. Further integrated with Mindray Animal Medical's unique 3T technology, the ComboWave transducers allow you to experience outstanding performance with extreme image resolution and uniformity."
      },
      {
        "title": "Natural Touch Elastography",
        "description": "Mindray Animal Medical's patented Natural Touch Elastography technology provides an accurate and reproducible assessment of soft tissues' elastic properties and stiffness."
      },
      {
        "title": "HR Flow",
        "description": "An innovative technology to better visualize tiny vessels and complex flow patterns, based on Mindray Animal's exclusive processing algorithm."
      },
      {
        "title": "HD Scope",
        "description": "By processing channel data collected by the next-generation platform, HD Scope can improve the detail information and image contrast on a specific area."
      },
      {
        "title": "Smart Calc",
        "description": "Encircle the boundary of the lesion and acquire an accurate measurement."
      },
      {
        "title": "Comprehensive Learning Tools",
        "description": "Vetus 50 has a series of learning tools to help veterinarians shorten the learning curve and quickly master ultrasound scanning skills."
      },
      {
        "title": "iScanHelper",
        "description": "iScanHelper is a convenient built-in tutorial for both beginner and experienced professionals."
      },
      {
        "title": "iWorks",
        "description": "Standardized protocols support a proficient and consistent scan for each clinical application."
      },
      {
        "title": "iMeasure",
        "description": "iMeasure suggests potential or suspected clinical conditions immediately on the screen."
      },
      {
        "title": "iLight",
        "description": "iLight can provide the appropriate brightness to complete procedures safely and conveniently."
      },
      {
        "title": "Easy to Move",
        "description": "Vetus 50 offers great flexibility; moving the system for easy access is seamless."
      }
    ],
    "applications": [],
    "species": [
      "Canine",
      "Feline"
    ],
    "focus": [],
    "specifications": [],
    "benefits": [
      "Dedicated image presets let veterinarians obtain clear images without adjusting many image parameters.",
      "Learning tools help veterinarians shorten the learning curve and quickly master ultrasound scanning skills."
    ],
    "brochure": null /* PLACEHOLDER: brochure PDF not supplied — add { url, label, meta } */,
    "seo": {
      "title": "Vetus 50 Practical Veterinary Ultrasound",
      "description": "Vetus 50 veterinary ultrasound with dedicated presets, ComboWave transducers with 3T technology, Natural Touch Elastography, HR Flow and learning tools.",
      "keywords": [
        "Vetus 50 ultrasound",
        "veterinary ultrasound system",
        "veterinary elastography",
        "ComboWave transducer",
        "animal ultrasound machine",
        "canine feline ultrasound"
      ]
    },
    "source": {
      "url": "https://www.mindrayanimal.com/en/product/Vetus_50",
      "legacyPath": "/en/product/Vetus_50",
      "retrieved": "2026-09-28"
    },
    "content": {
      "status": "needs-review",
      "missing": [
        "applications",
        "brochure",
        "keySpec",
        "specifications",
        "tagline"
      ],
      "reviewNotes": "Subcategory (Cart-based) taken from the Medical Imaging System category listing; the product page has no breadcrumb. isNew from the \"New\" badge on the listing page. productType/shortDescription composed from source feature headings. The source page has no breadcrumb, so the subcategory is unknown. Check whether it is a Cart-based or Portable System. The product type 'Veterinary Ultrasound' comes from the intro sentence 'practical veterinary ultrasound'. In the source, each feature image appears after its text. The clearest case is HR Flow, whose text is followed by HR-Flow.gif. By that pattern, l4.jpg belongs to Dedicated Presets, not ComboWave (4-2.png follows the ComboWave text), and the caption has been changed to match. Please confirm this visually. Several images, including the HR Flow, Smart Calc, iLight and Easy to Move images and the whole clinical image gallery, are loaded from '/cn/.../Vetus 60/' paths, and the page links to Vetus 60. Confirm that these clinical images really belong to Vetus 50. The intro calls it an 'amazing new' ultrasound, but there is no 'New' badge, so isNew is false. The page has a 'Watch Video' link but no video URL."
    }
  },
  {
    "slug": "vetus-5",
    "name": "Vetus 5",
    "category": "medical-imaging",
    "subcategory": "cart-based-ultrasound",
    "productType": "Veterinary Diagnostic Ultrasound System",
    "tagline": "Expand your vision",
    "isNew": false,
    "order": 5,
    "shortDescription": "Vetus 5 is a cost-effective veterinary ultrasound imaging system with multiple intelligent functions, built on Mindray's new VETUS platform.",
    "overview": [
      "Vetus 5 offers the cost-effective veterinary ultrasound imaging system with multiple intelligent functions. Configured with Mindray's brand new VETUS platform, it easily meets increasingly diversified veterinarian demands."
    ],
    "keySpec": "Select or switch transducer and exam mode within 1 second",
    "image": {
      "src": "/images/products/vetus-5/vetus-5.webp",
      "width": 699,
      "height": 699,
      "alt": "Vetus 5 cart-based veterinary ultrasound system with a husky",
      "kind": "product"
    },
    "gallery": [
      {
        "src": "/images/products/vetus-5/vetus-5-veterinary-team-examining-a-dog.webp",
        "width": 600,
        "height": 377,
        "alt": "Vetus 5: Veterinary team examining a dog",
        "kind": "feature",
        "caption": "Veterinary team examining a dog"
      },
      {
        "src": "/images/products/vetus-5/vetus-5-transducers-and-exam-modes-selected-from-one-touch-screen-interface.webp",
        "width": 600,
        "height": 377,
        "alt": "Vetus 5: Transducers and exam modes selected from one touch-screen interface",
        "kind": "feature",
        "caption": "Transducers and exam modes selected from one touch-screen interface"
      },
      {
        "src": "/images/products/vetus-5/vetus-5-canine-kidney.webp",
        "width": 700,
        "height": 489,
        "alt": "Vetus 5 clinical ultrasound image: Canine Kidney",
        "kind": "clinical",
        "caption": "Canine Kidney"
      },
      {
        "src": "/images/products/vetus-5/vetus-5-color-mode-of-canine-kidney.webp",
        "width": 700,
        "height": 489,
        "alt": "Vetus 5 clinical ultrasound image: Color Mode of Canine Kidney",
        "kind": "clinical",
        "caption": "Color Mode of Canine Kidney"
      },
      {
        "src": "/images/products/vetus-5/vetus-5-feline-abdomen.webp",
        "width": 700,
        "height": 489,
        "alt": "Vetus 5 clinical ultrasound image: Feline Abdomen",
        "kind": "clinical",
        "caption": "Feline Abdomen"
      },
      {
        "src": "/images/products/vetus-5/vetus-5-long-axis-view-of-canine-heart.webp",
        "width": 700,
        "height": 489,
        "alt": "Vetus 5 clinical ultrasound image: Long Axis View of Canine Heart",
        "kind": "clinical",
        "caption": "Long Axis View of Canine Heart"
      },
      {
        "src": "/images/products/vetus-5/vetus-5-pw-mode-of-canine-heart.webp",
        "width": 700,
        "height": 489,
        "alt": "Vetus 5 clinical ultrasound image: PW Mode of Canine Heart",
        "kind": "clinical",
        "caption": "PW Mode of Canine Heart"
      },
      {
        "src": "/images/products/vetus-5/vetus-5-tdi-qa-of-canine-heart.webp",
        "width": 700,
        "height": 489,
        "alt": "Vetus 5 clinical ultrasound image: TDI QA of Canine Heart",
        "kind": "clinical",
        "caption": "TDI QA of Canine Heart"
      }
    ],
    "features": [
      {
        "title": "Dedicated Animal Presets",
        "description": "Professional ultrasound image presets according to different animals' body characteristics. Animal species are subdivided into different categories by weight and body size for precise diagnosis. Veterinary-recognized measurement formula presets allow easy user-defined modification."
      },
      {
        "title": "Simple Veterinary Workflow",
        "description": "Transducers and the corresponding exam modes are displayed in the same interface, so you can select or switch within 1 second. The recent 4 modes are presented at hand, with one key to switch to the frequently used exam mode. A super smart touch screen supports powerful multi-touch fast operation."
      },
      {
        "title": "Advanced Ultrasound Technology",
        "description": "ComboWave transducers integrated with Mindray's unique 3T technology allow you to experience outstanding performance with extreme image resolution and uniformity in animal abdomen, small parts, reproduction and more."
      },
      {
        "title": "Powerful Intelligent Tools: iTouch",
        "description": "iTouch is a one-button auto image optimization solution which is able to optimize imaging quality automatically, including in B/PW mode."
      },
      {
        "title": "Animal Abdomen Solutions",
        "description": "Professional application packages for the abdomen include iScape real-time panoramic imaging, iNeedle for biopsy needle enhancement, Elastography Imaging, UWN Contrast Imaging, and Smart Bladder for automatic volume calculation."
      },
      {
        "title": "Animal Cardiac Solutions",
        "description": "Professional application packages for cardiac exams include CW/PW automatic tracking and analysis, Free Xros M for anatomical M mode, Free Xros CM for curved anatomical M mode, Tissue Doppler Imaging (supporting 4 modes), and Tissue Doppler Imaging with Quantitative Analysis."
      }
    ],
    "applications": [
      "Animal abdomen",
      "Small parts",
      "Reproduction",
      "Animal cardiac"
    ],
    "species": [
      "Canine",
      "Feline"
    ],
    "focus": [
      "cardiology",
      "abdominal",
      "reproduction",
      "guided-procedures"
    ],
    "specifications": [
      {
        "label": "Platform",
        "value": "VETUS platform"
      },
      {
        "label": "Transducer/exam mode switching",
        "value": "Within 1 second"
      },
      {
        "label": "Recent exam modes at hand",
        "value": "4"
      },
      {
        "label": "Transducer technology",
        "value": "ComboWave transducers with 3T technology"
      },
      {
        "label": "Touch screen",
        "value": "Multi-touch"
      },
      {
        "label": "Tissue Doppler Imaging",
        "value": "Supports 4 modes"
      }
    ],
    "benefits": [],
    "brochure": null /* PLACEHOLDER: brochure PDF not supplied — add { url, label, meta } */,
    "seo": {
      "title": "Vetus 5 Veterinary Ultrasound System",
      "description": "Vetus 5 cart-based veterinary ultrasound on the VETUS platform, with animal presets, ComboWave 3T transducers, iTouch, and abdomen and cardiac packages.",
      "keywords": [
        "Vetus 5 ultrasound",
        "veterinary ultrasound system",
        "cart-based veterinary ultrasound",
        "veterinary cardiac ultrasound",
        "veterinary abdominal ultrasound",
        "Mindray Vetus 5"
      ]
    },
    "source": {
      "url": "https://www.mindrayanimal.com/en/product/Vetus_5",
      "legacyPath": "/en/product/Vetus_5",
      "retrieved": "2026-09-28"
    },
    "content": {
      "status": "needs-review",
      "missing": [
        "benefits",
        "brochure"
      ],
      "reviewNotes": "Source overview had a double comma after \"VETUS platform\", which has been removed. Gallery is limited to 8 images: clinical images not included are Canine Bladder, M Mode of Canine Heart and TDI of Canine Heart, plus feature images 4.jpg (Advanced Ultrasound Technology) and 5.png (iTouch). Images 2.jpg and 3.jpg have no captions in the source, so their captions come from the section headings. Species are listed only because they appear in the clinical image captions (canine, feline). The application 'Animal cardiac' comes from the 'Animal cardiac solutions' package heading. Related content (feline HCM) and the related product (Vetus 8) were ignored."
    }
  },
  {
    "slug": "vetus-5exp",
    "name": "Vetus 5Exp",
    "category": "medical-imaging",
    "subcategory": "cart-based-ultrasound",
    "productType": "Veterinary Diagnostic Ultrasound System",
    "tagline": "Expand your vision",
    "isNew": false,
    "order": 6,
    "shortDescription": "Vetus 5Exp is a cost-effective veterinary ultrasound system with dedicated animal presets, a simple workflow and a protective design for everyday practice.",
    "overview": [
      "Mindray Vetus series offer the professional veterinary solution to a wide variety of species ranging from small pets to large farm animals.",
      "Vetus 5Exp is a cost-effective veterinary ultrasound imaging system with multiple intelligent functions. Configured with the brand new VETUS platform, it easily meets increasingly diversified veterinarian demands.",
      "Incorporating dedicated animal image presets, a simple workflow, and a veterinary protective design, it promises an ideal ultrasound system for your everyday practice."
    ],
    "keySpec": "Built-in battery supports scanning for more than 80 minutes",
    "image": {
      "src": "/images/products/vetus-5exp/vetus-5exp.webp",
      "width": 705,
      "height": 705,
      "alt": "Vetus 5Exp cart-based veterinary ultrasound system with a cat",
      "kind": "product"
    },
    "gallery": [
      {
        "src": "/images/products/vetus-5exp/vetus-5exp-feline-bladder.webp",
        "width": 700,
        "height": 489,
        "alt": "Vetus 5Exp clinical ultrasound image: Feline Bladder",
        "kind": "clinical",
        "caption": "Feline Bladder"
      },
      {
        "src": "/images/products/vetus-5exp/vetus-5exp-canine-kidney.webp",
        "width": 700,
        "height": 489,
        "alt": "Vetus 5Exp clinical ultrasound image: Canine Kidney",
        "kind": "clinical",
        "caption": "Canine Kidney"
      },
      {
        "src": "/images/products/vetus-5exp/vetus-5exp-color-mode-of-canine-kidney.webp",
        "width": 700,
        "height": 489,
        "alt": "Vetus 5Exp clinical ultrasound image: Color Mode of Canine Kidney",
        "kind": "clinical",
        "caption": "Color Mode of Canine Kidney"
      },
      {
        "src": "/images/products/vetus-5exp/vetus-5exp-pw-mode-of-canine-heart.webp",
        "width": 700,
        "height": 489,
        "alt": "Vetus 5Exp clinical ultrasound image: PW Mode of Canine Heart",
        "kind": "clinical",
        "caption": "PW Mode of Canine Heart"
      },
      {
        "src": "/images/products/vetus-5exp/vetus-5exp-long-axis-view-of-canine-heart.webp",
        "width": 700,
        "height": 489,
        "alt": "Vetus 5Exp clinical ultrasound image: Long Axis View of Canine Heart",
        "kind": "clinical",
        "caption": "Long Axis View of Canine Heart"
      },
      {
        "src": "/images/products/vetus-5exp/vetus-5exp-tdi-of-canine-heart.webp",
        "width": 700,
        "height": 489,
        "alt": "Vetus 5Exp clinical ultrasound image: TDI of Canine Heart",
        "kind": "clinical",
        "caption": "TDI of Canine Heart"
      },
      {
        "src": "/images/products/vetus-5exp/vetus-5exp-m-mode-of-canine-heart.webp",
        "width": 700,
        "height": 489,
        "alt": "Vetus 5Exp clinical ultrasound image: M Mode of Canine Heart",
        "kind": "clinical",
        "caption": "M Mode of Canine Heart"
      },
      {
        "src": "/images/products/vetus-5exp/vetus-5exp-tdi-qa-of-canine-heart.webp",
        "width": 700,
        "height": 489,
        "alt": "Vetus 5Exp clinical ultrasound image: TDI QA of Canine Heart",
        "kind": "clinical",
        "caption": "TDI QA of Canine Heart"
      }
    ],
    "features": [
      {
        "title": "Dedicated Animal Presets",
        "description": "Professional ultrasound image presets according to different animals' body characteristics. Animal species are subdivided into different categories by weight and body size for precise diagnosis. Veterinary-recognized measurement formula presets allow easy user-defined modification."
      },
      {
        "title": "Simple Veterinary Workflow",
        "description": "Transducers and the corresponding exam modes are displayed in the same interface, so you can select or switch within 1 second. The recent 4 modes are presented at hand for one-key switching to frequently used exam modes. A super smart touch screen supports powerful multi-touch operation."
      },
      {
        "title": "Powerful Veterinary Tools",
        "description": "Auto measurement (Auto PW, Auto CW) maximizes productivity for easy, accurate scanning. Dedicated application packages cover Abdomen, Cardiology, Reproduction and Small Parts. Resourceful tools include vet formulas, a comment library, animal body marks and report templates."
      },
      {
        "title": "iWorks",
        "description": "The automated workflow guide iWorks standardizes and simplifies the vet Abdomen and Cardiology workflow, allowing more focus on the animal diagnosis."
      },
      {
        "title": "Abdomen & Reproduction",
        "description": "One Probe Solution supports abdominal, reproduction and basic heart ultrasound. Smart Bladder provides automatic calculation of the bladder volume. UWN Contrast Imaging offers non-invasive assessment of animal abdominal organs with an easy workflow. Transducers: C11-3 micro convex array for small-sized animals; C6-2 convex array for large-sized animals."
      },
      {
        "title": "Superficial & Musculoskeletal",
        "description": "iNeedle provides biopsy needle enhancement and guidance. iScape View delivers real-time panoramic imaging to extend the field of view. Elastography Imaging displays tissue stiffness for precise evaluation. Transducers: L12-3E high-frequency linear array for multi-sized animals; L14-6 high-frequency linear array for small-sized animals."
      },
      {
        "title": "Cardiology",
        "description": "Free Xros M (Anatomical M mode) offers up to 3 sample lines to detect more details. TDI (Tissue Doppler Imaging) with complete 4 modes (TVI/TVD/TVM/TEI) enables wall motion analysis for myocardial function. TDI QA (Tissue Doppler Imaging with Quantitative Analysis) analyzes myocardium motion with strain/strain rate. Transducers: P8-2 mid/high-frequency phased array for mid and small-sized species; P10-4E high-frequency phased array for small-sized species; P4-2 low-frequency phased array for large species. More transducers can be supported; contact your local sales representative for details."
      },
      {
        "title": "Guarantee of Safety and Stability",
        "description": "EMC (Electro Magnetic Compatibility): the highest anti-interference level ensures the stability of imaging quality. Class B (power supply requirement): the lower AC power requirement offers more safety and compatibility in any complicated environment. iPower (built-in battery): a large battery supports scanning for more than 80 minutes, enhancing the continuity of daily work even when the power supply is poor, and ensuring mobility."
      },
      {
        "title": "Dedicated Protective Design for Veterinary Practice",
        "description": "Protecting the machine from animal hairs, body liquid and dust ensures high capability, reliability and long service life. Design elements include a keypad protective silicone film (anti-liquid and anti-animal hair), an integrated control panel for easy cleaning and anti-dust design, transducer cable management, and a transducer port cover protecting the unit from dust and animal hairs."
      }
    ],
    "applications": [
      "Abdomen",
      "Cardiology",
      "Reproduction",
      "Small Parts",
      "Superficial & Musculoskeletal"
    ],
    "species": [
      "Canine",
      "Feline"
    ],
    "focus": [
      "cardiology",
      "abdominal",
      "reproduction",
      "guided-procedures"
    ],
    "specifications": [
      {
        "label": "Built-in battery (iPower)",
        "value": "Scanning for more than 80 minutes"
      },
      {
        "label": "Exam mode selection/switch",
        "value": "Within 1 second"
      },
      {
        "label": "Recent exam modes at hand",
        "value": "4"
      },
      {
        "label": "Free Xros M sample lines",
        "value": "Up to 3"
      },
      {
        "label": "TDI modes",
        "value": "4 (TVI/TVD/TVM/TEI)"
      },
      {
        "label": "Auto measurement",
        "value": "Auto PW, Auto CW"
      },
      {
        "label": "Application packages",
        "value": "Abdomen, Cardiology, Reproduction, Small Parts"
      },
      {
        "label": "Power supply requirement",
        "value": "Class B"
      },
      {
        "label": "EMC (Electro Magnetic Compatibility)",
        "value": "Highest anti-interference level"
      },
      {
        "label": "Transducers",
        "value": "C11-3, C6-2, L12-3E, L14-6, P8-2, P10-4E, P4-2"
      }
    ],
    "benefits": [
      "Select or switch transducer and exam mode within 1 second",
      "Auto PW and Auto CW maximize productivity for easy, accurate scanning",
      "iWorks standardizes and simplifies the vet Abdomen/Cardiology workflow, allowing more focus on the animal diagnosis",
      "Highest anti-interference level ensures the stability of imaging quality",
      "Large battery supports scanning for more than 80 minutes, enhancing continuity of daily work even when the power supply is poor",
      "Protective design against animal hairs, body liquid and dust ensures high capability, reliability and long service life"
    ],
    "brochure": null /* PLACEHOLDER: brochure PDF not supplied — add { url, label, meta } */,
    "seo": {
      "title": "Vetus 5Exp Veterinary Ultrasound System",
      "description": "Vetus 5Exp: cost-effective veterinary ultrasound with dedicated animal presets, iWorks, Auto PW/CW, TDI cardiology and over 80 minutes of battery scanning.",
      "keywords": [
        "Vetus 5Exp",
        "veterinary ultrasound system",
        "cart-based veterinary ultrasound",
        "veterinary cardiology ultrasound",
        "animal ultrasound machine",
        "Mindray Vetus 5Exp"
      ]
    },
    "source": {
      "url": "https://www.mindrayanimal.com/en/product/Vetus_5Exp",
      "legacyPath": "/en/product/Vetus_5Exp",
      "retrieved": "2026-09-28"
    },
    "content": {
      "status": "needs-review",
      "missing": [
        "brochure"
      ],
      "reviewNotes": "The source says the Vetus series serves species \"from small pets to large farm animals\". Only canine and feline are named explicitly (clinical image captions, plus a related-content link on feline HCM), so only those two are listed under species. The page gives the footnote about extra transducers twice, with different wording (\"contact your local sales representative\" and \"contact Mindray\"). Feature images 3.png, 5.png and 9-12.jpg, the transducer images and the EMC/Class B/iPower icons were left out of the gallery because the 8-image limit was filled by clinical scans. The source spells it \"silicon film\"; the output changes this to \"silicone film\" in the protective-design feature, so please check that edit. The source's caption for transducer cable management (\"design for regular and protection\") is unclear, so only \"transducer cable management\" was kept. The applications list combines the application-package names with the \"Superficial & Musculoskeletal\" section heading."
    }
  },
  {
    "slug": "vetus-e7",
    "name": "Vetus E7",
    "category": "medical-imaging",
    "subcategory": "portable-ultrasound",
    "productType": "Hand-Carried Veterinary Ultrasound System",
    "tagline": "Envision, Enlighten, and Explore",
    "isNew": false,
    "featured": true,
    "order": 7,
    "shortDescription": "Hand-carried veterinary ultrasound system powered by ZST+, with a sealed user interface and a 6.6 lb, 1.7 in thin main unit.",
    "overview": [
      "Since its founding, Mindray Animal Medical has been dedicated to developing innovative and accessible ultrasound solutions for the animal care environment. This commitment to excellence has brought you ZONE Sonography® Technology+ (ZST+), evolving industrial designs, and comprehensive disinfection solutions.",
      "The Vetus E7 Ultrasound System has been thoughtfully designed to overcome clinicians' obstacles in today's challenging healthcare environment. With a sealed user interface design and revolutionary, software-based beamformer technology, ZST+, the Vetus E7 System combines best-in-class image quality with an intuitive user experience to help ensure reliable and efficient diagnosis during the most challenging exams."
    ],
    "keySpec": "Main unit weight of just 6.6 lbs and thickness of 1.7 in",
    "image": {
      "src": "/images/products/vetus-e7/vetus-e7.webp",
      "width": 547,
      "height": 547,
      "alt": "Vetus E7 hand-carried laptop veterinary ultrasound system",
      "kind": "product"
    },
    "gallery": [
      {
        "src": "/images/products/vetus-e7/vetus-e7-liver-and-gallbladder-of-canine.webp",
        "width": 508,
        "height": 295,
        "alt": "Vetus E7 clinical ultrasound image: Liver and gallbladder of canine",
        "kind": "clinical",
        "caption": "Liver and gallbladder of canine"
      },
      {
        "src": "/images/products/vetus-e7/vetus-e7-portal-vein-of-canine.webp",
        "width": 508,
        "height": 295,
        "alt": "Vetus E7 clinical ultrasound image: Portal vein of canine",
        "kind": "clinical",
        "caption": "Portal vein of canine"
      },
      {
        "src": "/images/products/vetus-e7/vetus-e7-adrenal-gland-of-canine.webp",
        "width": 508,
        "height": 295,
        "alt": "Vetus E7 clinical ultrasound image: Adrenal gland of canine",
        "kind": "clinical",
        "caption": "Adrenal gland of canine"
      },
      {
        "src": "/images/products/vetus-e7/vetus-e7-renal-blood-flow-of-canine.webp",
        "width": 508,
        "height": 295,
        "alt": "Vetus E7 clinical ultrasound image: Renal blood flow of canine",
        "kind": "clinical",
        "caption": "Renal blood flow of canine"
      },
      {
        "src": "/images/products/vetus-e7/vetus-e7-spleen-of-canine.webp",
        "width": 508,
        "height": 295,
        "alt": "Vetus E7 clinical ultrasound image: Spleen of canine",
        "kind": "clinical",
        "caption": "Spleen of canine"
      },
      {
        "src": "/images/products/vetus-e7/vetus-e7-spleen-blood-flow-of-canine.webp",
        "width": 508,
        "height": 295,
        "alt": "Vetus E7 clinical ultrasound image: Spleen blood flow of canine",
        "kind": "clinical",
        "caption": "Spleen blood flow of canine"
      },
      {
        "src": "/images/products/vetus-e7/vetus-e7-cardiac-blood-flow-of-canine.webp",
        "width": 508,
        "height": 295,
        "alt": "Vetus E7 clinical ultrasound image: Cardiac blood flow of canine",
        "kind": "clinical",
        "caption": "Cardiac blood flow of canine"
      },
      {
        "src": "/images/products/vetus-e7/vetus-e7-tdi-qa-of-canine.webp",
        "width": 508,
        "height": 295,
        "alt": "Vetus E7 clinical ultrasound image: TDI QA of canine",
        "kind": "clinical",
        "caption": "TDI QA of canine"
      }
    ],
    "features": [
      {
        "title": "Thin, light, and powerful",
        "description": "With a weight and thickness of just 6.6 lbs and 1.7 in, respectively, the Vetus E7 system's main unit is one of the industry's lightest and thinnest laptop ultrasound machines. In addition, this compact, durable, and powerful system houses advanced hardware built to maximize performance in all applications."
      },
      {
        "title": "ZONE Sonography® Technology+",
        "description": "The Vetus E7 Ultrasound System is the first-ever laptop-based system powered by ZST+, providing mobility and reliability in an extraordinarily compact design."
      },
      {
        "title": "Innovative design",
        "description": "Intuitive touch interface, seamless design control panel, sealed touchpad and sturdy construction. Prevents residue buildup, resists corrosion from harsh cleaning agents, and uses the highest standard of material selection."
      },
      {
        "title": "Magnetic power socket",
        "description": "Easy connection. Prevents cable strain."
      },
      {
        "title": "U-Bank",
        "description": "U-Bank battery companion supports up to eight hours of continuous scanning."
      },
      {
        "title": "Specialized transducer holder",
        "description": "Enables the easy application of sterile cover."
      },
      {
        "title": "Innovative storage",
        "description": "Three storage baskets with an interchangeable design."
      },
      {
        "title": "Expanded height adjustment",
        "description": "Flexible height adjustment for optimal scanning."
      }
    ],
    "applications": [],
    "species": [
      "Canine"
    ],
    "focus": [],
    "specifications": [
      {
        "label": "Main unit weight",
        "value": "6.6 lbs"
      },
      {
        "label": "Main unit thickness",
        "value": "1.7 in"
      },
      {
        "label": "Beamformer technology",
        "value": "ZONE Sonography® Technology+ (ZST+), software-based"
      },
      {
        "label": "Continuous scanning with U-Bank battery companion",
        "value": "Up to 8 hours"
      },
      {
        "label": "Storage baskets",
        "value": "3 (interchangeable design)"
      }
    ],
    "benefits": [
      "Combines best-in-class image quality with an intuitive user experience to help ensure reliable and efficient diagnosis during the most challenging exams",
      "Innovative design prevents residue buildup and resists corrosion from harsh cleaning agents",
      "Provides mobility and reliability in an extraordinarily compact design"
    ],
    "brochure": null /* PLACEHOLDER: brochure PDF not supplied — add { url, label, meta } */,
    "seo": {
      "title": "Vetus E7 Hand-Carried Veterinary Ultrasound",
      "description": "Vetus E7 hand-carried veterinary ultrasound: laptop system with ZST+, sealed user interface, 6.6 lb, 1.7 in main unit, up to 8 hours scanning with U-Bank.",
      "keywords": [
        "Vetus E7",
        "hand-carried veterinary ultrasound",
        "portable veterinary ultrasound system",
        "laptop veterinary ultrasound",
        "ZST+ ultrasound",
        "veterinary ultrasound for canine"
      ]
    },
    "source": {
      "url": "https://www.mindrayanimal.com/en/product/Vetus_E7",
      "legacyPath": "/en/product/Vetus_E7",
      "retrieved": "2026-09-28"
    },
    "content": {
      "status": "needs-review",
      "missing": [
        "applications",
        "brochure"
      ],
      "reviewNotes": "No application areas are named in the source. The clinical images show canine abdominal scans (liver, portal vein, adrenal, renal, spleen) and cardiac scans, but these are image captions, not stated applications. The magnetic power socket, U-Bank, transducer holder, storage baskets and height adjustment items are numbered callouts (1-5) on a trolley/cart image (7.jpg-9.jpg), so they may describe an optional cart or accessories rather than the laptop unit itself. Confirm this before publishing. Images 2.jpg-9.jpg (product/feature images, including 4.png and 5.png) are left out of the gallery because the 8 slots went to the clinical scans. The source also has a heading 'Ideal System for Your Veterinary Practice' above image 6.jpg."
    }
  },
  {
    "slug": "vetus-eq",
    "name": "Vetus EQ",
    "category": "medical-imaging",
    "subcategory": "portable-ultrasound",
    "productType": "Equine Ultrasound Image System",
    "tagline": "Efficiency & Quality",
    "isNew": false,
    "order": 8,
    "shortDescription": "Portable equine ultrasound system with the ZST+ imaging platform, dedicated MSK, cardiology, abdomen and reproduction applications, and a 3 kg main unit.",
    "overview": [
      "Vetus EQ is a portable equine ultrasound image system focused on efficiency and quality. It combines a concise, practical design, with an intuitive touchscreen, sealed touchpad and seamless control panel, and a sturdy construction whose sealed interface resists hairs and fluids and is easy to disinfect.",
      "Empowered by Zone Imaging, Zone Focusing, and Zone Processing, the Advanced ZST+ Imaging Platform improves image quality tremendously, enabling equine practitioners to see more detail with fewer keystrokes.",
      "Dedicated equine applications cover MSK, cardiology, abdomen and reproduction. Focused on equine ultrasound diagnosis demands, Vetus EQ offers a series of professional presets for these application scenarios, which increase the efficiency and quality of equine practitioners' work. Portable accessories include the iCover protective cover set, the U-bank battery pack and a travel backpack."
    ],
    "keySpec": "3 kg main unit, 44 mm thickness",
    "image": {
      "src": "/images/products/vetus-eq/vetus-eq.webp",
      "width": 448,
      "height": 448,
      "alt": "Vetus EQ portable laptop equine ultrasound system",
      "kind": "product"
    },
    "gallery": [
      {
        "src": "/images/products/vetus-eq/vetus-eq-portable-equine-ultrasound-system-with-a-horse-and-rider.webp",
        "width": 990,
        "height": 608,
        "alt": "Vetus EQ portable equine ultrasound system with a horse and rider",
        "kind": "lifestyle",
        "caption": "Vetus EQ portable equine ultrasound system with a horse and rider"
      },
      {
        "src": "/images/products/vetus-eq/vetus-eq-equine-tendon.webp",
        "width": 1184,
        "height": 586,
        "alt": "Vetus EQ clinical ultrasound image: Equine Tendon",
        "kind": "clinical",
        "caption": "Equine Tendon"
      },
      {
        "src": "/images/products/vetus-eq/vetus-eq-equine-cardiac-tvd.webp",
        "width": 1184,
        "height": 586,
        "alt": "Vetus EQ clinical ultrasound image: Equine Cardiac TVD",
        "kind": "clinical",
        "caption": "Equine Cardiac TVD"
      },
      {
        "src": "/images/products/vetus-eq/vetus-eq-equine-proximal-metacarpal-region.webp",
        "width": 1184,
        "height": 586,
        "alt": "Vetus EQ clinical ultrasound image: Equine Proximal Metacarpal Region",
        "kind": "clinical",
        "caption": "Equine Proximal Metacarpal Region"
      },
      {
        "src": "/images/products/vetus-eq/vetus-eq-tendon-calcification.webp",
        "width": 1184,
        "height": 586,
        "alt": "Vetus EQ clinical ultrasound image: Tendon Calcification",
        "kind": "clinical",
        "caption": "Tendon Calcification"
      },
      {
        "src": "/images/products/vetus-eq/vetus-eq-equine-tendon-hydrops.webp",
        "width": 1184,
        "height": 586,
        "alt": "Vetus EQ clinical ultrasound image: Equine Tendon Hydrops",
        "kind": "clinical",
        "caption": "Equine Tendon Hydrops"
      },
      {
        "src": "/images/products/vetus-eq/vetus-eq-equine-lumbar-muscle.webp",
        "width": 1184,
        "height": 586,
        "alt": "Vetus EQ clinical ultrasound image: Equine Lumbar Muscle",
        "kind": "clinical",
        "caption": "Equine Lumbar Muscle"
      },
      {
        "src": "/images/products/vetus-eq/vetus-eq-equine-abdominal-aorta-flow.webp",
        "width": 1184,
        "height": 586,
        "alt": "Vetus EQ clinical ultrasound image: Equine Abdominal Aorta Flow",
        "kind": "clinical",
        "caption": "Equine Abdominal Aorta Flow"
      },
      {
        "src": "/images/products/vetus-eq/vetus-eq-equine-spine.webp",
        "width": 1184,
        "height": 586,
        "alt": "Vetus EQ clinical ultrasound image: Equine Spine",
        "kind": "clinical",
        "caption": "Equine Spine"
      }
    ],
    "features": [
      {
        "title": "Concise & Practical Innovative Design",
        "description": "Intuitive touchscreen, sealed touchpad and seamless design control panel."
      },
      {
        "title": "Sturdy Construction",
        "description": "Sealed interface resistant to hairs and fluids, and easy to disinfect."
      },
      {
        "title": "Dual Displays",
        "description": "15.6-inch high resolution color LED monitor with narrow bezel and wide viewing angle, plus a 12.3-inch high sensitivity anti-glare color touch screen."
      },
      {
        "title": "Ultra Thin, Ultra Light",
        "description": "3 kg main unit with 44 mm thickness."
      },
      {
        "title": "Advanced ZST+ Imaging Platform",
        "description": "Empowered by Zone Imaging, Zone Focusing, and Zone Processing, the ZST+ platform improves image quality tremendously, enabling equine practitioners to see more detail with fewer keystrokes. Whereas in traditional imaging the echo signal is acquired line by line, with ZST+ Zone Imaging the echo signal is acquired zone by zone."
      },
      {
        "title": "iWorks Dedicated Procedure",
        "description": "Standardized and simplified workflow dedicated to equine applications, reducing exam time by 50% and keystrokes by 80%."
      },
      {
        "title": "MSK Application",
        "description": "L13-3Ns wide frequency range linear transducer for tendon application."
      },
      {
        "title": "Cardiology Application",
        "description": "P4-2s phased array transducer with excellent penetration used for cardiology application."
      },
      {
        "title": "Abdomen Application",
        "description": "C5-1s convex array transducer for abdominal diagnosis."
      },
      {
        "title": "Reproduction Application",
        "description": "6LE5Vs intrarectal linear array transducer for reproduction."
      },
      {
        "title": "iCover Protective Cover Set",
        "description": "Prevents dust, dirt and splash, and protects against accidental falls, bumps and smashes."
      },
      {
        "title": "U-bank",
        "description": "Additional battery pack supports up to 8 hours of working time."
      },
      {
        "title": "Travel Backpack",
        "description": "A sturdy backpack for working outside or on the go, with a unique design featuring an inner pocket to hold the ultrasound system, transducers, power supply, and gel bottle."
      },
      {
        "title": "iScape",
        "description": "Presented for tendon application, iScape provides a panoramic view of anatomic structures for better viewing and measurements."
      },
      {
        "title": "iNeedle+ (optional)",
        "description": "Needle visualization enhancement software that helps clinicians have increased confidence in identifying the needle tip's position during interventional procedures, such as injection, aspiration, and biopsy."
      },
      {
        "title": "Specific and Professional Presets",
        "description": "Focused on equine ultrasound diagnosis demands, Vetus EQ offers a series of professional presets for different application scenarios, including MSK, abdomen, cardiac and reproduction, increasing the efficiency and quality of equine practitioners' work."
      }
    ],
    "applications": [
      "MSK (tendon)",
      "Cardiology",
      "Abdomen",
      "Reproduction"
    ],
    "species": [
      "Equine"
    ],
    "focus": [
      "cardiology",
      "abdominal",
      "reproduction",
      "equine",
      "guided-procedures"
    ],
    "specifications": [
      {
        "label": "Main monitor",
        "value": "15.6-inch high resolution color LED monitor, narrow bezel, wide viewing angle"
      },
      {
        "label": "Touch screen",
        "value": "12.3-inch high sensitivity anti-glare color touch screen"
      },
      {
        "label": "Main unit weight",
        "value": "3 kg"
      },
      {
        "label": "Thickness",
        "value": "44 mm"
      },
      {
        "label": "Imaging platform",
        "value": "ZST+ (Zone Imaging, Zone Focusing, Zone Processing)"
      },
      {
        "label": "MSK transducer",
        "value": "L13-3Ns wide frequency range linear"
      },
      {
        "label": "Cardiology transducer",
        "value": "P4-2s phased array"
      },
      {
        "label": "Abdomen transducer",
        "value": "C5-1s convex array"
      },
      {
        "label": "Reproduction transducer",
        "value": "6LE5Vs intrarectal linear array"
      },
      {
        "label": "Battery (with U-bank)",
        "value": "Additional battery pack supports up to 8 hours of working time"
      }
    ],
    "benefits": [
      "iWorks dedicated equine procedure reduces exam time by 50% and keystrokes by 80%",
      "ZST+ platform enables equine practitioners to see more detail with fewer keystrokes",
      "Sealed interface resistant to hairs and fluids with ease of disinfection",
      "iNeedle+ increases confidence in identifying the needle tip's position during interventional procedures"
    ],
    "brochure": null /* PLACEHOLDER: brochure PDF not supplied — add { url, label, meta } */,
    "seo": {
      "title": "Vetus EQ Portable Equine Ultrasound System",
      "description": "Vetus EQ portable equine ultrasound with ZST+ imaging, MSK, cardiac, abdomen and reproduction transducers, a 3 kg main unit and up to 8 hours with U-bank.",
      "keywords": [
        "equine ultrasound system",
        "portable equine ultrasound",
        "horse tendon ultrasound",
        "equine reproduction ultrasound",
        "equine cardiac ultrasound",
        "Vetus EQ"
      ]
    },
    "source": {
      "url": "https://www.mindrayanimal.com/en/product/Vetus_EQ",
      "legacyPath": "/en/product/Vetus_EQ",
      "retrieved": "2026-09-28"
    },
    "content": {
      "status": "needs-review",
      "missing": [
        "brochure"
      ],
      "reviewNotes": "Clinical image captions come AFTER each image in the source (22.jpg is followed by \"Equine Tendon\" ... 29.jpg by \"Equine Spine\"). The gallery assumes each caption belongs to the image before it, so check this against the live page. \"3 Kg main unit\" and \"44 mm thickness\" come from split infographic text (3.jpg). The iWorks source text is garbled (\"Standard and simplified the workflow dedicated for equine application reduce 50% exam time, 80% keystrokes\") and was copy-edited without changing the numbers. The iCover text says \"Anti accidental fall, pump and smash\"; \"pump\" was read as a typo for \"bump\", so please confirm. The source typo \"pracitioners\" was corrected. Only iNeedle+ has the \"* optional\" asterisk. iScape has no marker, so its optional status is unclear. iScape and iNeedle+ both sit under the \"Convenience and Confidence / Tendon Application\" heading. The source's claim that the work is more efficient and higher quality applies to the professional presets only, not to the accessories. The U-bank text says the additional pack supports up to 8 hours of working time. It is not clear whether that is total runtime or extra runtime. Product and feature images 2-21 were left out of the gallery because of the 8-image limit."
    }
  },
  {
    "slug": "te5-vet",
    "name": "TE5 Vet",
    "category": "medical-imaging",
    "subcategory": "portable-ultrasound",
    "productType": "Touch Screen Ultrasound System",
    "isNew": false,
    "featured": true,
    "order": 9,
    "shortDescription": "Portable touch screen veterinary ultrasound with a 15'' HD touch screen, gesture-based workflow, iVocal voice control and iNeedle+ needle enhancement.",
    "overview": [
      "TE5 Vet is a portable touch screen ultrasound system offering a simple operation experience with an intuitive workflow, superior performance with focused features, and a smart design with innovative ergonomics.",
      "Its high definition touch screen supports fingertip operation, even with gel-covered gloves, and gesture controls allow flexibility of user-programming. Focused features include iVocal Artificial Intelligence voice recognition and iNeedle+, a second-generation needle enhancement technology for guided procedures."
    ],
    "keySpec": "15'' touch screen with anti-glare and wide viewing angle",
    "image": {
      "src": "/images/products/te5-vet/te5-vet.webp",
      "width": 864,
      "height": 864,
      "alt": "TE5 Vet touch screen ultrasound system on a trolley with a cat",
      "kind": "product"
    },
    "gallery": [
      {
        "src": "/images/products/te5-vet/te5-vet-high-definition-touch-screen-with-gesture-based-workflow.webp",
        "width": 800,
        "height": 549,
        "alt": "TE5 Vet: High definition touch screen with gesture-based workflow",
        "kind": "feature",
        "caption": "High definition touch screen with gesture-based workflow"
      },
      {
        "src": "/images/products/te5-vet/te5-vet-ivocal-ai-voice-recognition-control-via-wireless-microphone.webp",
        "width": 800,
        "height": 535,
        "alt": "TE5 Vet: IVocal AI voice recognition control via wireless microphone",
        "kind": "feature",
        "caption": "IVocal AI voice recognition control via wireless microphone"
      },
      {
        "src": "/images/products/te5-vet/te5-vet-ineedle-plus-on-linear.webp",
        "width": 800,
        "height": 471,
        "alt": "TE5 Vet clinical ultrasound image: INeedle+ on linear",
        "kind": "clinical",
        "caption": "INeedle+ on linear"
      },
      {
        "src": "/images/products/te5-vet/te5-vet-ineedle-plus-on-convex.webp",
        "width": 800,
        "height": 471,
        "alt": "TE5 Vet clinical ultrasound image: INeedle+ on convex",
        "kind": "clinical",
        "caption": "INeedle+ on convex"
      },
      {
        "src": "/images/products/te5-vet/te5-vet-l12-3rcs-transducer-with-three-programmable-buttons.webp",
        "width": 800,
        "height": 503,
        "alt": "TE5 Vet: L12-3RCs transducer with three programmable buttons",
        "kind": "feature",
        "caption": "L12-3RCs transducer with three programmable buttons"
      },
      {
        "src": "/images/products/te5-vet/te5-vet-on-its-height-adjustable-trolley.webp",
        "width": 754,
        "height": 1131,
        "alt": "TE5 Vet on its height-adjustable trolley",
        "kind": "product",
        "caption": "TE5 Vet on its height-adjustable trolley"
      }
    ],
    "features": [
      {
        "title": "High Definition Touch Screen",
        "description": "State-of-the-art fingertip operation, even with gel-covered gloves, provides simple control and setting optimization at the swipe of a finger."
      },
      {
        "title": "Gesture-Based Workflow",
        "description": "Gesture controls are the most efficient way to satisfy all clinical functions, and also allow flexibility of user-programming."
      },
      {
        "title": "iVocal",
        "description": "iVocal allows you to control the system with Artificial Intelligence voice recognition technology. It applies extensive yet straightforward voice remote commands through a wireless microphone, further enhancing ultrasound users' comfort and ergonomics during the entire procedure, supporting Adding, Deleting, and Renaming voice commands for a user-defined command list."
      },
      {
        "title": "iNeedle+",
        "description": "The second-generation needle enhancement technology allows a straightforward needle approach to target and enhanced accuracy for guided procedures. Shown on linear and convex."
      },
      {
        "title": "Transducer with Programmable Buttons",
        "description": "The L12-3RCs with three programmable buttons ensures simple, fast, and convenient control without touching the system, letting you focus more on patient care. The optimally positioned keys can be defined as depth & gain adjustment, freeze & unfreeze, save image & cine, and more."
      },
      {
        "title": "Smart Design with Innovative Ergonomics",
        "description": "15'' touch screen with anti-glare and wide viewing angle; transducer cable management for cord longevity and ease of use; built-in battery provides extended battery life; built-in wireless network; and a height adjustable smart trolley."
      }
    ],
    "applications": [],
    "species": [],
    "focus": [
      "guided-procedures"
    ],
    "specifications": [
      {
        "label": "Display",
        "value": "15'' touch screen with anti-glare and wide viewing angle"
      },
      {
        "label": "Programmable transducer",
        "value": "L12-3RCs with three programmable buttons"
      },
      {
        "label": "Programmable button functions",
        "value": "Depth & gain adjustment, freeze & unfreeze, save image & cine, and more"
      },
      {
        "label": "Needle enhancement",
        "value": "iNeedle+ (second-generation needle enhancement technology)"
      },
      {
        "label": "Voice control",
        "value": "iVocal AI voice recognition via wireless microphone"
      },
      {
        "label": "Battery",
        "value": "Built-in battery"
      },
      {
        "label": "Connectivity",
        "value": "Built-in wireless network"
      },
      {
        "label": "Trolley",
        "value": "Height adjustable smart trolley"
      }
    ],
    "benefits": [
      "Fingertip operation, even with gel-covered gloves, provides simple control and setting optimization at the swipe of a finger",
      "iVocal enhances ultrasound users' comfort and ergonomics during the entire procedure",
      "iNeedle+ allows a straightforward needle approach to target and enhanced accuracy for guided procedures",
      "Programmable transducer buttons allow control without touching the system, letting you focus more on patient care",
      "Transducer cable management for cord longevity and ease of use",
      "Built-in battery provides extended battery life"
    ],
    "brochure": null /* PLACEHOLDER: brochure PDF not supplied — add { url, label, meta } */,
    "seo": {
      "title": "TE5 Vet Touch Screen Veterinary Ultrasound",
      "description": "TE5 Vet portable touch screen ultrasound with 15'' anti-glare screen, gesture-based workflow, iVocal voice control, iNeedle+ and built-in battery.",
      "keywords": [
        "TE5 Vet ultrasound",
        "touch screen veterinary ultrasound",
        "portable veterinary ultrasound system",
        "veterinary ultrasound needle guidance",
        "iNeedle+ needle enhancement",
        "voice controlled ultrasound"
      ]
    },
    "source": {
      "url": "https://www.mindrayanimal.com/en/product/TE5_Vet",
      "legacyPath": "/en/product/TE5_Vet",
      "retrieved": "2026-09-28"
    },
    "content": {
      "status": "needs-review",
      "missing": [
        "applications",
        "brochure",
        "species",
        "tagline"
      ],
      "reviewNotes": "\"Simple / Focused / Smart\" appear directly under the product name but look like in-page anchor tabs, so they were not used as the tagline. Please confirm. All specs are qualitative. The source gives no battery duration, weight, transducer list (other than L12-3RCs) or frequency ranges. Linear and convex appear only as image captions under iNeedle+ (\"iNeedle+ on linear\" / \"iNeedle+ on convex\"). The source does not say \"transducers\", so the wording stays as the captions have it. Image-to-caption matching for 2.jpg, 3.jpg, 6.jpg and 7.jpg was inferred from where each image sits in the text. 7.jpg is followed by callout numbers 1-5, which match the ergonomics list."
    }
  },
  {
    "slug": "z60-vet",
    "name": "Z60 Vet",
    "category": "medical-imaging",
    "subcategory": "portable-ultrasound",
    "productType": "Veterinary Ultrasound System",
    "isNew": false,
    "order": 10,
    "shortDescription": "Z60 Vet is a portable Color Doppler veterinary ultrasound system with a 15-inch HD monitor and 1.5h battery scanning for large and companion animals.",
    "overview": [
      "The Z60 Vet is a powerful and versatile Color Doppler system which provides you the best solution for veterinary ultrasound imaging with excellent performance. Due to the comprehensive configurations, dedicated veterinary workflow and integrated design, you can be assured of an outstanding ultrasound experience in both large and companion animals.",
      "Packed with professional innovative technology inside this smart portable system makes Z60 Vet a perfect veterinary ultrasound system with excellent image quality and various advanced features."
    ],
    "keySpec": "15-inch High Definition monitor",
    "image": {
      "src": "/images/products/z60-vet/z60-vet.webp",
      "width": 582,
      "height": 582,
      "alt": "Z60 Vet portable colour Doppler veterinary ultrasound system",
      "kind": "product"
    },
    "gallery": [
      {
        "src": "/images/products/z60-vet/z60-vet-canine-kidney.webp",
        "width": 528,
        "height": 369,
        "alt": "Z60 Vet clinical ultrasound image: Canine Kidney",
        "kind": "clinical",
        "caption": "Canine Kidney"
      },
      {
        "src": "/images/products/z60-vet/z60-vet-canine-intestine.webp",
        "width": 528,
        "height": 369,
        "alt": "Z60 Vet clinical ultrasound image: Canine Intestine",
        "kind": "clinical",
        "caption": "Canine Intestine"
      },
      {
        "src": "/images/products/z60-vet/z60-vet-turtle-cardiac-pw.webp",
        "width": 528,
        "height": 369,
        "alt": "Z60 Vet clinical ultrasound image: Turtle Cardiac PW",
        "kind": "clinical",
        "caption": "Turtle Cardiac PW"
      },
      {
        "src": "/images/products/z60-vet/z60-vet-conventional-imaging-compared-with-spatial-compounding-imaging-ibeam.webp",
        "width": 608,
        "height": 460,
        "alt": "Z60 Vet: Conventional imaging compared with spatial compounding imaging (iBeam™)",
        "kind": "feature",
        "caption": "Conventional imaging compared with spatial compounding imaging (iBeam™)"
      },
      {
        "src": "/images/products/z60-vet/z60-vet-turtle-bladder-panoramic-image-with-iscape.webp",
        "width": 739,
        "height": 552,
        "alt": "Z60 Vet: Turtle bladder panoramic image with iScape™",
        "kind": "feature",
        "caption": "Turtle bladder panoramic image with iScape™"
      },
      {
        "src": "/images/products/z60-vet/z60-vet-tdi-tissue-doppler-imaging.webp",
        "width": 708,
        "height": 504,
        "alt": "Z60 Vet: TDI (Tissue Doppler Imaging)",
        "kind": "feature",
        "caption": "TDI (Tissue Doppler Imaging)"
      }
    ],
    "features": [
      {
        "title": "PSH™ (Phase Shift Harmonic Imaging)",
        "description": "Purified Harmonic Imaging for better contrast resolution, providing clearer images with excellent resolution and less noise."
      },
      {
        "title": "iClear™ (Speckle Suppression Imaging)",
        "description": "Gain improved image quality based on auto structure detection: sharper and continuous edges, smooth uniform tissues and cleaner 'no echo areas'."
      },
      {
        "title": "iBeam™",
        "description": "Permits use of multiple scanned angles to form a single image, resulting in enhanced contrast resolution and improved visualization."
      },
      {
        "title": "iScape™",
        "description": "Get a complete and extended view of the anatomical structure through panoramic imaging coupled with velocity indication and forward/backward scan ability, making scanning much easier, smoother and more controllable."
      },
      {
        "title": "ExFOV",
        "description": "Discover better diagnostic information through extended view of the anatomical structure on all convex and linear probes."
      },
      {
        "title": "B-Steer™",
        "description": "Your tool for deeper biopsy: allows adjustments to the scan line to gain better visibility of the needle, nerves and small vessels."
      },
      {
        "title": "Free Xros M™",
        "description": "Gain precise anatomical observation by freely placing sample lines at any angle. Attain better images through simultaneous display of up to 3 sample lines."
      },
      {
        "title": "Color M",
        "description": "Color Flow M mode and Color Tissue M mode offer you more details on veterinary diagnosis."
      },
      {
        "title": "TDI",
        "description": "Tissue Doppler Imaging allows you to quantitatively evaluate animal myocardial movement and function, providing complete TDI modes for faster and direct diagnoses."
      },
      {
        "title": "iStorage™",
        "description": "Directly transfer veterinary images and reports to PC via network cable."
      },
      {
        "title": "iTouch™",
        "description": "Gain instant auto image optimization in B, Color and PW Modes at the click of a single key."
      },
      {
        "title": "iZoom",
        "description": "Gain instant full screen view at the click of a single key."
      },
      {
        "title": "iStation™",
        "description": "Mindray's unique Patient Information Management System allowing you to integrate, review, archive and retrieve patient data effectively."
      },
      {
        "title": "DICOM™",
        "description": "Comprehensive DICOM solution."
      },
      {
        "title": "Ergonomics",
        "description": "60 degree tilting angle adjustable monitor; integrated design with internal AC power adapter; 1.5h uninterrupted scanning with rechargeable battery; 15-inch High Definition monitor with full screen design; water-proof protection cover designed for veterinary keyboard; backlit control panel designed for veterinary diagnosis in clinics; can be packed in a convenient hand-carried bag for easy transportation."
      },
      {
        "title": "Transducers",
        "description": "Micro-convex: 6C2P. Convex: 3C5P. Linear: 7L4P, 7L5P, L14-6P, 7LT4P. Phased array: 2P2P, P7-3P. Endocavity: 6LE5VP, V10-4BP, 6CV1P, CB10-4P, 6LE7P."
      }
    ],
    "applications": [],
    "species": [
      "Canine",
      "Turtle"
    ],
    "focus": [
      "cardiology",
      "guided-procedures"
    ],
    "specifications": [
      {
        "label": "Monitor",
        "value": "15-inch High Definition monitor with full screen design"
      },
      {
        "label": "Monitor tilting angle",
        "value": "60 degree adjustable"
      },
      {
        "label": "Battery",
        "value": "1.5h uninterrupted scanning with rechargeable battery"
      },
      {
        "label": "Power",
        "value": "Internal AC power adapter"
      },
      {
        "label": "Free Xros M sample lines",
        "value": "Up to 3 simultaneous"
      },
      {
        "label": "Auto image optimization (iTouch)",
        "value": "B, Color and PW Modes"
      },
      {
        "label": "6C2P (Micro-convex) center frequency",
        "value": "6.5MHz"
      },
      {
        "label": "3C5P (Convex) center frequency",
        "value": "3.5MHz"
      },
      {
        "label": "7L4P (Linear) center frequency",
        "value": "7.5MHz"
      },
      {
        "label": "7L5P (Linear) center frequency",
        "value": "7.5MHz"
      },
      {
        "label": "L14-6P (Linear) center frequency",
        "value": "10MHz"
      },
      {
        "label": "7LT4P (Linear) center frequency",
        "value": "10MHz"
      },
      {
        "label": "2P2P (Phased array) center frequency",
        "value": "2.5MHz"
      },
      {
        "label": "P7-3P (Phased array) center frequency",
        "value": "5MHz"
      },
      {
        "label": "6LE5VP (Endocavity) center frequency",
        "value": "6.5MHz"
      },
      {
        "label": "V10-4BP (Endocavity) center frequency",
        "value": "6.5MHz"
      },
      {
        "label": "6CV1P (Endocavity) center frequency",
        "value": "6.5MHz"
      },
      {
        "label": "CB10-4P (Endocavity) center frequency",
        "value": "6.5MHz"
      },
      {
        "label": "6LE7P (Endocavity) center frequency",
        "value": "6.5MHz"
      }
    ],
    "benefits": [
      "1.5h uninterrupted scanning with rechargeable battery",
      "Can be packed in a convenient hand-carried bag for easy transportation",
      "Instant auto image optimization in B, Color and PW Modes at the click of a single key"
    ],
    "brochure": null /* PLACEHOLDER: brochure PDF not supplied — add { url, label, meta } */,
    "seo": {
      "title": "Z60 Vet Portable Color Doppler Ultrasound",
      "description": "Z60 Vet portable Color Doppler veterinary ultrasound with 15-inch HD monitor, 1.5h battery scanning, iScape, TDI and DICOM for large and companion animals.",
      "keywords": [
        "Z60 Vet ultrasound",
        "portable veterinary ultrasound",
        "veterinary color Doppler system",
        "portable vet ultrasound machine",
        "veterinary ultrasound transducers",
        "companion animal ultrasound"
      ]
    },
    "source": {
      "url": "https://www.mindrayanimal.com/en/product/Z60_Vet",
      "legacyPath": "/en/product/Z60_Vet",
      "retrieved": "2026-09-28"
    },
    "content": {
      "status": "needs-review",
      "missing": [
        "applications",
        "brochure",
        "tagline"
      ],
      "reviewNotes": "Breadcrumb is Medical Imaging System > Portable System > Veterinary Ultrasound System; subcategory set to \"Portable System\". Feature images 2-1.jpg, 3.jpg and 4.jpg have no captions in the source. They appear directly after the iBeam, iScape and TDI text blocks, so captions are just those section names. Check that the images really show those features. The \"Clinical Images\" and \"Transducers\" headings appear together, followed by the three clinical images and then the transducer list. Only two species are named, Canine and Turtle, and both come from image captions. Otherwise the overview only says \"large and companion animals\"."
    }
  },
  {
    "slug": "dp-50-vet",
    "name": "DP-50 Vet",
    "category": "medical-imaging",
    "subcategory": "portable-ultrasound",
    "productType": "Veterinary Ultrasound System",
    "tagline": "Ergonomic Design with A Full Screen",
    "isNew": false,
    "order": 11,
    "shortDescription": "DP-50 Vet is a portable Black & White veterinary ultrasound system with optional color Doppler, a full screen, 1TB storage and 1.5h battery scanning.",
    "overview": [
      "With comprehensive configurations and an integrated design, the new DP-50 Vet is the outcome of Mindray's continuous and determined efforts towards making veterinary healthcare more efficient, effective and accessible for all.",
      "The DP-50 Vet, a premium Black & White ultrasound system with optional color Doppler function, offers more than your expectation. With a smart new shape and full screen, enhanced mobility and more convenient operations, this reliable and affordable system will enhance general practices and is well-suited for multiple veterinary clinical needs."
    ],
    "keySpec": "1.5h scanning with rechargeable battery",
    "image": {
      "src": "/images/products/dp-50-vet/dp-50-vet.webp",
      "width": 702,
      "height": 702,
      "alt": "DP-50 Vet portable veterinary ultrasound system with transducers",
      "kind": "product"
    },
    "gallery": [
      {
        "src": "/images/products/dp-50-vet/dp-50-vet-canine-gallbladder.webp",
        "width": 528,
        "height": 396,
        "alt": "DP-50 Vet clinical ultrasound image: Canine Gallbladder",
        "kind": "clinical",
        "caption": "Canine Gallbladder"
      },
      {
        "src": "/images/products/dp-50-vet/dp-50-vet-canine-bladder.webp",
        "width": 528,
        "height": 396,
        "alt": "DP-50 Vet clinical ultrasound image: Canine Bladder",
        "kind": "clinical",
        "caption": "Canine Bladder"
      },
      {
        "src": "/images/products/dp-50-vet/dp-50-vet-canine-heart.webp",
        "width": 528,
        "height": 396,
        "alt": "DP-50 Vet clinical ultrasound image: Canine heart",
        "kind": "clinical",
        "caption": "Canine heart"
      },
      {
        "src": "/images/products/dp-50-vet/dp-50-vet-conventional-imaging-compared-with-spatial-compounding-imaging-ibeam.webp",
        "width": 608,
        "height": 460,
        "alt": "DP-50 Vet: Conventional imaging compared with spatial compounding imaging (iBeam™)",
        "kind": "feature",
        "caption": "Conventional imaging compared with spatial compounding imaging (iBeam™)"
      },
      {
        "src": "/images/products/dp-50-vet/dp-50-vet-cardiac-pw-doppler-imaging.webp",
        "width": 1112,
        "height": 798,
        "alt": "DP-50 Vet: Cardiac PW Doppler imaging",
        "kind": "feature",
        "caption": "Cardiac PW Doppler imaging"
      }
    ],
    "features": [
      {
        "title": "PSH™ (Phase Shift Harmonic Imaging)",
        "description": "Purified Harmonic Imaging for better contrast resolution, providing clearer images with excellent resolution and less noise."
      },
      {
        "title": "iScape™",
        "description": "Get a complete and extended view of the anatomical structure through panoramic imaging coupled with velocity indication and forward/backward scan ability, making scanning much easier, smoother and more controllable."
      },
      {
        "title": "iClear™",
        "description": "Gain improved image quality based on auto structure detection: sharper and continuous edges, smooth uniform tissues and cleaner 'no echo areas'."
      },
      {
        "title": "iBeam™",
        "description": "Permits use of multiple scanned angles to form a single image, resulting in enhanced contrast resolution and improved visualization."
      },
      {
        "title": "ExFOV",
        "description": "Discover better diagnostic information through extended view of the anatomical structure on all convex and linear probes."
      },
      {
        "title": "Trapezoid Imaging",
        "description": "Discover better diagnostic information through extended view of the anatomical structure on all linear probes."
      },
      {
        "title": "B-Steer™",
        "description": "Your tool for deeper biopsy: allows adjustments to the scan line to gain better visibility of the needle, nerves and small vessels."
      },
      {
        "title": "Free Xros M™",
        "description": "Auto measurement of anterior and posterior wall thickness providing accurate carotid status."
      },
      {
        "title": "PW",
        "description": "PW Doppler and Auto Trace reveal details of blood flow for more comprehensive diagnosis."
      },
      {
        "title": "iStorage™",
        "description": "Directly transfer images and reports to PC via network cable."
      },
      {
        "title": "iTouch™",
        "description": "Gain instant auto image optimization in B, Color and PW modes at the click of a single key."
      },
      {
        "title": "iZoom™",
        "description": "Gain instant full screen view at the click of a single key."
      },
      {
        "title": "iStation™",
        "description": "Mindray's unique Patient Information Management System, allowing you to integrate, review, archive and retrieve patient data effectively."
      },
      {
        "title": "Ergonomics",
        "description": "Sleek, streamlined and compact shape; 60 degree tilting angle adjustable monitor; 2 universal transducer connectors; 1TB hard disk for large patient data storage; 1.5h scanning with rechargeable battery; slim trolley for easy mobility; and a convenient hand-carried bag for easy transportation."
      },
      {
        "title": "Transducers",
        "description": "Supported transducers include micro-convex (65C15EA), convex (35C50EA, 35C20EA), endocavity (75L50EAV, 50L60EAV, 65EL60EA, 65EC10ED), linear (75L38EA, 75L53EA, 10L24EA), intra-operative (75LT38EA) and bi-plane convex & convex (65EB10EA) probes."
      }
    ],
    "applications": [],
    "species": [
      "Canine"
    ],
    "focus": [
      "guided-procedures"
    ],
    "specifications": [
      {
        "label": "Imaging",
        "value": "Black & White with optional color Doppler function"
      },
      {
        "label": "Monitor tilting angle",
        "value": "60 degree adjustable"
      },
      {
        "label": "Transducer connectors",
        "value": "2 universal"
      },
      {
        "label": "Hard disk",
        "value": "1TB"
      },
      {
        "label": "Battery scanning time",
        "value": "1.5h (rechargeable battery)"
      },
      {
        "label": "65C15EA (Micro-convex) center frequency",
        "value": "6.5MHz"
      },
      {
        "label": "35C50EA (Convex) center frequency",
        "value": "3.5MHz"
      },
      {
        "label": "35C20EA (Convex) center frequency",
        "value": "3.5MHz"
      },
      {
        "label": "75L50EAV (Endocavity) center frequency",
        "value": "7.5MHz"
      },
      {
        "label": "50L60EAV (Endocavity) center frequency",
        "value": "5MHz"
      },
      {
        "label": "65EL60EA (Endocavity) center frequency",
        "value": "6.5MHz"
      },
      {
        "label": "65EC10ED (Endocavity) center frequency",
        "value": "6.5MHz"
      },
      {
        "label": "75L38EA (Linear) center frequency",
        "value": "7.5MHz"
      },
      {
        "label": "75L53EA (Linear) center frequency",
        "value": "7.5MHz"
      },
      {
        "label": "10L24EA (Linear) center frequency",
        "value": "10MHz"
      },
      {
        "label": "75LT38EA (Intra-operative) center frequency",
        "value": "7.5MHz"
      },
      {
        "label": "65EB10EA (Bi-plane, Convex & Convex) center frequency",
        "value": "6.5MHz"
      }
    ],
    "benefits": [],
    "brochure": null /* PLACEHOLDER: brochure PDF not supplied — add { url, label, meta } */,
    "seo": {
      "title": "DP-50 Vet Portable Veterinary Ultrasound",
      "description": "DP-50 Vet portable veterinary ultrasound: Black & White with optional color Doppler, full screen, iScape and iClear imaging, 1TB storage and 1.5h battery.",
      "keywords": [
        "DP-50 Vet",
        "portable veterinary ultrasound",
        "veterinary ultrasound system",
        "black and white ultrasound with color Doppler",
        "veterinary ultrasound for general practice",
        "DP-50 Vet transducers"
      ]
    },
    "source": {
      "url": "https://www.mindrayanimal.com/en/product/DP-50_Vet",
      "legacyPath": "/en/product/DP-50_Vet",
      "retrieved": "2026-09-28"
    },
    "content": {
      "status": "needs-review",
      "missing": [
        "applications",
        "benefits",
        "brochure"
      ],
      "reviewNotes": "Product page text says \"the new DP-50 Vet\" but the listing page shows no \"New\" badge, so isNew is false. Source lists 75L50EAV, 50L60EAV, 65EL60EA and 65EC10ED under the 'Endocavity' heading; grouping kept exactly as in source and worth verifying against the manufacturer. Images 2-1.jpg and 4.jpg have no captions in the source; their gallery captions only name the Performance section features they sit beneath and do not claim what the image depicts. The 'NEW' label appears before the tagline and in the overview. Species is taken only from the canine clinical image captions. 'Portable' comes from the breadcrumb subcategory 'Portable System'."
    }
  },
  {
    "slug": "dp-30-vet",
    "name": "DP-30 Vet",
    "category": "medical-imaging",
    "subcategory": "portable-ultrasound",
    "productType": "Digital Ultrasonic Diagnostic Imaging System",
    "isNew": false,
    "order": 12,
    "shortDescription": "Lightweight portable veterinary ultrasound system with Power Doppler and PW Doppler, a 12.1 inch HD LED display and 1.5h battery scanning.",
    "overview": [
      "With its lightweight ergonomic mobile design, the DP-30Vet can accompany you wherever required.",
      "Breaking down the barrier between B/W and Doppler ultrasound diagnostic systems, DP-30Vet is an advanced system equipped with Power Doppler and PW Doppler, providing you more possibilities in various clinical applications."
    ],
    "keySpec": "12.1 inch high definition LED with full screen design",
    "image": {
      "src": "/images/products/dp-30-vet/dp-30-vet.webp",
      "width": 559,
      "height": 559,
      "alt": "DP-30 Vet portable veterinary ultrasound system",
      "kind": "product"
    },
    "gallery": [
      {
        "src": "/images/products/dp-30-vet/dp-30-vet-ergonomics.webp",
        "width": 465,
        "height": 422,
        "alt": "DP-30 Vet ergonomics",
        "kind": "product",
        "caption": "DP-30 Vet ergonomics"
      }
    ],
    "features": [
      {
        "title": "Power Doppler",
        "description": "Power Doppler helps identify blood flow in different clinical conditions, an essential way to help localization of vessels, making them much easier to accurately measure."
      },
      {
        "title": "PW Doppler",
        "description": "PW Doppler and Auto Trace reveal details of blood flow for more comprehensive diagnosis."
      },
      {
        "title": "Tissue Harmonic Imaging",
        "description": "Utilizing second harmonics generated from tissue boundary layers, THI significantly enhances contrast resolution and improves image quality, especially for technically difficult subjects."
      },
      {
        "title": "TSI",
        "description": "Tissue Specific Imaging optimizes the image quality based on the properties of the tissue being scanned. Four imaging options are available: general, muscle, fluid and fat."
      },
      {
        "title": "iClear™",
        "description": "Gain improved image quality based on auto structure detection: sharp and continuous edges, smooth uniform tissues, and clean 'no echo' areas."
      },
      {
        "title": "ExFOV",
        "description": "Discover better diagnostic information through an extended view of the anatomical structure on all convex and linear probes."
      },
      {
        "title": "B-Steer™",
        "description": "Your tool for deeper biopsy: allows adjustments to the scan line to gain better visibility of the needle, nerves and small vessels."
      },
      {
        "title": "iStorage™",
        "description": "Directly transfer images and reports to PC via network cable."
      },
      {
        "title": "iTouch™",
        "description": "Gain instant auto image optimization in B, Color and PW modes at the click of a single key."
      },
      {
        "title": "iZoom™",
        "description": "Gain instant full screen view at the click of a single key."
      },
      {
        "title": "iStation™",
        "description": "Mindray's unique Patient Information Management System, allowing you to integrate, review, archive and retrieve patient data effectively."
      },
      {
        "title": "Ergonomics",
        "description": "12.1 inch high definition LED with full screen design, 30 degree tilting angle adjustable monitor, 2 universal transducer connectors, user-friendly control panel with backlight, light and compact design for extreme portability, and 1.5h scanning with rechargeable battery."
      },
      {
        "title": "Transducers",
        "description": "Compatible transducers shown: 65C15EAV, 35C20EA, 35C50EA, 75L38EB, 75L53EA, 65EC10EB, 50L60EAV and 75L50EAV."
      }
    ],
    "applications": [],
    "species": [],
    "focus": [
      "guided-procedures"
    ],
    "specifications": [
      {
        "label": "Display",
        "value": "12.1 inch high definition LED, full screen design"
      },
      {
        "label": "Monitor tilting angle",
        "value": "30 degrees, adjustable"
      },
      {
        "label": "Transducer connectors",
        "value": "2 universal"
      },
      {
        "label": "Battery scanning time",
        "value": "1.5h with rechargeable battery"
      },
      {
        "label": "Doppler modes",
        "value": "Power Doppler, PW Doppler"
      },
      {
        "label": "TSI imaging options",
        "value": "4 (general, muscle, fluid, fat)"
      },
      {
        "label": "Transducers",
        "value": "65C15EAV, 35C20EA, 35C50EA, 75L38EB, 75L53EA, 65EC10EB, 50L60EAV, 75L50EAV"
      }
    ],
    "benefits": [],
    "brochure": null /* PLACEHOLDER: brochure PDF not supplied — add { url, label, meta } */,
    "seo": {
      "title": "DP-30 Vet Portable Veterinary Ultrasound",
      "description": "DP-30 Vet portable ultrasound with Power Doppler, PW Doppler, THI, iClear and ExFOV, a 12.1 inch HD LED display and 1.5h rechargeable battery scanning.",
      "keywords": [
        "DP-30 Vet",
        "portable veterinary ultrasound",
        "veterinary Doppler ultrasound",
        "portable ultrasound for animals",
        "DP-30Vet ultrasound system",
        "veterinary digital ultrasonic diagnostic imaging system"
      ]
    },
    "source": {
      "url": "https://www.mindrayanimal.com/en/product/DP-30_Vet",
      "legacyPath": "/en/product/DP-30_Vet",
      "retrieved": "2026-09-28"
    },
    "content": {
      "status": "needs-review",
      "missing": [
        "applications",
        "benefits",
        "brochure",
        "species",
        "tagline"
      ],
      "reviewNotes": "Transducer image file is named 35C50EB.jpg but the caption on the page reads 35C50EA; verify the correct model. The source has no clinical scan images, and the 50L60EAV and 75L50EAV transducer images (../assets/images/product/Transducers/50L60EAV.jpg, ../assets/images/product/Transducers/75L50EAV.jpg) were left out of the gallery because of the 8-image limit. \"Related Products\" (DP-10Vet) was ignored. Source does not name species or specific clinical applications ('various clinical applications' only)."
    }
  }
];
