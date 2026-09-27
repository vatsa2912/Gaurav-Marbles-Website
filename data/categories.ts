import { CategoryInfo } from "@/types/product";

export const CATEGORIES: CategoryInfo[] = [
  {
    id: "marble",
    name: "Marble",
    hindiName: "मार्बल",
    slug: "marble",
    tagline: "Pure elegance quarried from prestigious stone reserves.",
    description:
      "From legendary Makrana white marble to luxurious Italian Statuario, explore high-density natural marble slabs hand-inspected for grain consistency, polish retention, and enduring architectural beauty.",
    image: "/images/categories/marble.webp",
    subcategories: [
      "White Marble",
      "Italian / Imported Marble",
      "Green Marble",
      "Black Marble",
      "Beige & Cream Marble",
    ],
    features: [
      "Mirror Polish Retention",
      "Natural Crystalline Veining",
      "Thermal Insulation & Cool Touch",
      "Full Slab Inspection in Showroom",
    ],
  },
  {
    id: "tiles",
    name: "Tiles",
    hindiName: "टाइल्स",
    slug: "tiles",
    tagline: "Vitrified, ceramic & designer tiles for floors and walls.",
    description:
      "Transform living rooms, kitchens, and bathrooms with high-performance GVT/PGVT vitrified tiles, anti-skid bathroom surfaces, and large format wall cladding slabs in matte, gloss, and carved finishes.",
    image: "/images/categories/tiles.webp",
    subcategories: [
      "Floor Tiles",
      "Wall Tiles",
      "Bathroom Tiles",
      "Kitchen Tiles",
      "Outdoor & Parking Tiles",
      "Large Format Slabs (GVT/PGVT)",
    ],
    features: [
      "Zero Water Absorption (<0.05%)",
      "High Stain & Scratch Resistance",
      "Precision Laser-Cut Rectified Edges",
      "Modern Large Formats (600x1200mm, 800x1600mm)",
    ],
  },
  {
    id: "granite",
    name: "Granite",
    hindiName: "ग्रेनाइट",
    slug: "granite",
    tagline: "Ultra-durable igneous stone built for heavy duty applications.",
    description:
      "The undisputed choice for kitchen countertops, staircases, and heavy-traffic commercial floors. Resilient against heat, knives, and acidic kitchen spills with deep natural luster.",
    image: "/images/categories/granite.webp",
    subcategories: [
      "Black Granite",
      "Tan Brown Granite",
      "White & Grey Granite",
      "Leather & Flamed Finish Granite",
    ],
    features: [
      "Extreme Heat & Scorch Resistance",
      "Superior Mohs Hardness (6-7)",
      "Zero Warping or Thermal Cracking",
      "Double Polished Slab Edges",
    ],
  },
  {
    id: "sanitaryware",
    name: "Sanitaryware",
    hindiName: "सेनेटरीवेयर",
    slug: "sanitaryware",
    tagline: "Ergonomic ceramic bathroom essentials combining hygiene & style.",
    description:
      "Upgrade your washrooms with vitreous china basins, rimless wall-hung water closets, sleek vanity countertops, and water-efficient dual-flush systems from trusted sanitary brands.",
    image: "/images/categories/sanitaryware.webp",
    subcategories: [
      "Table Top Wash Basins",
      "Wall-Hung Closets",
      "One-Piece Floor Toilets",
      "Counter Sinks",
      "Urinals",
    ],
    features: [
      "Nano-Glaze Anti-Bacterial Coating",
      "Tornado / Rimless Flush Cleanliness",
      "Soft-Closing UF Seat Covers",
      "High-Load Tested Ceramics",
    ],
  },
  {
    id: "bathroom-fittings",
    name: "Bathroom Fittings",
    hindiName: "बाथरूम फिटिंग्स",
    slug: "bathroom-fittings",
    tagline: "Precision-engineered brass faucets, showers and fixtures.",
    description:
      "Complete your luxury bath spaces with high-durability quarter-turn brass faucets, multi-flow rain showerheads, diverters, angle cocks, and matching architectural hardware accessories.",
    image: "/images/categories/fittings.webp",
    subcategories: [
      "Basin Mixers & Taps",
      "Rain & Overhead Showers",
      "Thermostatic & Single-Lever Diverters",
      "Health Faucets",
      "Bath Hardware Accessories",
    ],
    features: [
      "100% Solid Brass Core Construction",
      "Multi-Layer PVD & Chrome Plating",
      "Smooth Ceramic Cartridges (500k cycles)",
      "Water-Saving Aerated Flow",
    ],
  },
  {
    id: "chemicals",
    name: "Chemicals & Adhesives",
    hindiName: "केमिकल्स एवं एडहेसिव",
    slug: "chemicals",
    tagline: "High-bond stone adhesives, epoxy grouts and protective sealers.",
    description:
      "Ensure long-term structural bonding and eliminate hollow sounds with specialized polymer-modified tile adhesives, waterproof epoxy grouts, and penetrating stone sealers.",
    image: "/images/categories/chemicals.webp",
    subcategories: [
      "Tile Adhesives (Type 1 & Type 2)",
      "Epoxy & Cementitious Grouts",
      "Stone Penetrating Sealers",
      "Tile Cleaners & Stain Removers",
    ],
    features: [
      "High Shear Bond Strength",
      "Slip-Resistant Vertical Wall Fixing",
      "100% Waterproof & Stain Proof Epoxies",
      "Pre-Mixed Quality Assurance",
    ],
  },
];
