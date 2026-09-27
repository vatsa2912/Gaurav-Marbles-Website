import fs from "fs";
import path from "path";
import sharp from "sharp";

const dirs = [
  "public/images",
  "public/images/categories",
  "public/images/products",
  "public/images/projects",
  "public/images/branding",
];

dirs.forEach((d) => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

// Image specifications for placeholder generation

const images = [
  // Categories
  {
    file: "public/images/categories/marble.webp",
    title: "NATURAL MARBLE",
    category: "Indian & Italian Quarries",
    bgGradient: ["#F5F2EB", "#DDD6C8"],
    patternType: "marble",
    accentColor: "#8C7B65",
    aspect: [800, 600],
  },
  {
    file: "public/images/categories/tiles.webp",
    title: "VITRIFIED & WALL TILES",
    category: "GVT / PGVT / Ceramic Formats",
    bgGradient: ["#EDE8DF", "#CFC5B4"],
    patternType: "tile",
    accentColor: "#7A6852",
    aspect: [800, 600],
  },
  {
    file: "public/images/categories/granite.webp",
    title: "PREMIUM GRANITE",
    category: "Kitchen Slabs & Heavy Flooring",
    bgGradient: ["#242321", "#0F0E0D"],
    patternType: "granite",
    accentColor: "#C5A880",
    aspect: [800, 600],
  },
  {
    file: "public/images/categories/sanitaryware.webp",
    title: "DESIGNER SANITARYWARE",
    category: "Vitreous China Basins & Closets",
    bgGradient: ["#F8F9FA", "#E9ECEF"],
    patternType: "sanitary",
    accentColor: "#495057",
    aspect: [800, 600],
  },
  {
    file: "public/images/categories/fittings.webp",
    title: "BATHROOM FITTINGS",
    category: "Forged Brass Mixers & Showers",
    bgGradient: ["#2E2721", "#1B1612"],
    patternType: "fittings",
    accentColor: "#D4AF37",
    aspect: [800, 600],
  },
  {
    file: "public/images/categories/chemicals.webp",
    title: "ADHESIVES & CHEMICALS",
    category: "Polymer Mortars, Epoxies & Sealers",
    bgGradient: ["#2A3036", "#171A1D"],
    patternType: "chemical",
    accentColor: "#58A6FF",
    aspect: [800, 600],
  },

  // Hero & Exterior
  {
    file: "public/images/hero-stone.webp",
    title: "GAURAV MARBLES",
    category: "Architectural Stone & Interior Materials",
    bgGradient: ["#1F1D1A", "#0D0C0B"],
    patternType: "marble",
    accentColor: "#C5A880",
    aspect: [1920, 1080],
  },
  {
    file: "public/images/showroom-exterior.webp",
    title: "GAURAV MARBLES SHOWROOM",
    category: "Bypass Road, Firozabad (U.P.)",
    bgGradient: ["#2B2824", "#181614"],
    patternType: "interior",
    accentColor: "#C5A880",
    aspect: [1200, 800],
  },

  // Products - Marble
  {
    file: "public/images/products/statuario-white.webp",
    title: "Italian Statuario Marble",
    category: "Imported Bookmatched Slab",
    bgGradient: ["#FAF8F5", "#E8E2D8"],
    patternType: "marble",
    accentColor: "#4A453E",
    aspect: [800, 600],
  },
  {
    file: "public/images/products/statuario-texture.webp",
    title: "Statuario Surface Texture",
    category: "Mirror Polished Detail",
    bgGradient: ["#FFFFFF", "#ECE7DF"],
    patternType: "marble",
    accentColor: "#333333",
    aspect: [800, 600],
  },
  {
    file: "public/images/products/makrana-white.webp",
    title: "Makrana Pure White Marble",
    category: "Rajasthan Reserve Heritage",
    bgGradient: ["#FDFAF5", "#EFE9DF"],
    patternType: "marble",
    accentColor: "#6B6255",
    aspect: [800, 600],
  },
  {
    file: "public/images/products/makrana-texture.webp",
    title: "Makrana Crystalline Vein",
    category: "High Calcite Structure",
    bgGradient: ["#FCF9F3", "#EAE2D4"],
    patternType: "marble",
    accentColor: "#807464",
    aspect: [800, 600],
  },
  {
    file: "public/images/products/green-marble.webp",
    title: "Udaipur Forest Green Marble",
    category: "Polished Serpentine Slab",
    bgGradient: ["#1B382B", "#0C1F16"],
    patternType: "marble",
    accentColor: "#66BB6A",
    aspect: [800, 600],
  },
  {
    file: "public/images/products/black-marquina.webp",
    title: "Black Marquina Classic Marble",
    category: "Jet Black with White Lightning Veins",
    bgGradient: ["#1C1A18", "#080706"],
    patternType: "marble",
    accentColor: "#FFFFFF",
    aspect: [800, 600],
  },

  // Products - Tiles
  {
    file: "public/images/products/onyx-tile.webp",
    title: "Royal Onyx Beige GVT Tile",
    category: "600 × 1200 mm High Gloss",
    bgGradient: ["#F9F4EB", "#E4D5BC"],
    patternType: "tile",
    accentColor: "#9E825A",
    aspect: [800, 600],
  },
  {
    file: "public/images/products/onyx-tile-room.webp",
    title: "Onyx Living Space Application",
    category: "Seamless Rectified Layout",
    bgGradient: ["#F5EEDB", "#DBCBB1"],
    patternType: "interior",
    accentColor: "#8C7149",
    aspect: [800, 600],
  },
  {
    file: "public/images/products/carrara-matte-tile.webp",
    title: "Statuary Carrara Matte Tile",
    category: "600 × 600 mm Anti-Skid R9",
    bgGradient: ["#F6F5F2", "#E1DDD5"],
    patternType: "tile",
    accentColor: "#57534E",
    aspect: [800, 600],
  },
  {
    file: "public/images/products/moroccan-wall-tile.webp",
    title: "Moroccan Geometric Wall Tile",
    category: "300 × 600 mm Ceramic High Gloss",
    bgGradient: ["#ECEAE6", "#D5D1C9"],
    patternType: "tile",
    accentColor: "#292524",
    aspect: [800, 600],
  },
  {
    file: "public/images/products/parking-tile.webp",
    title: "Heavy-Duty Outdoor Parking Tile",
    category: "400 × 400 mm High Traction R11",
    bgGradient: ["#44403C", "#292524"],
    patternType: "tile",
    accentColor: "#A8A29E",
    aspect: [800, 600],
  },

  // Products - Granite
  {
    file: "public/images/products/jet-black-granite.webp",
    title: "Rajasthan Jet Black Granite",
    category: "Mirror Polished Dense Igneous",
    bgGradient: ["#18181B", "#09090B"],
    patternType: "granite",
    accentColor: "#E4E4E7",
    aspect: [800, 600],
  },
  {
    file: "public/images/products/jet-black-countertop.webp",
    title: "Jet Black Kitchen Counter",
    category: "Heat & Acid Proof Profile",
    bgGradient: ["#27272A", "#111113"],
    patternType: "granite",
    accentColor: "#A1A1AA",
    aspect: [800, 600],
  },
  {
    file: "public/images/products/tan-brown-granite.webp",
    title: "Tan Brown Granite",
    category: "Chocolate Feldspar Crystalline",
    bgGradient: ["#3D271D", "#1C110C"],
    patternType: "granite",
    accentColor: "#D97706",
    aspect: [800, 600],
  },
  {
    file: "public/images/products/kashmir-white-granite.webp",
    title: "Kashmir White Granite",
    category: "Grey-White with Garnet Flecks",
    bgGradient: ["#F4F4F5", "#D4D4D8"],
    patternType: "granite",
    accentColor: "#52525B",
    aspect: [800, 600],
  },

  // Products - Sanitaryware
  {
    file: "public/images/products/fluted-basin.webp",
    title: "Fluted Countertop Wash Basin",
    category: "Matte Alabaster Vitreous China",
    bgGradient: ["#FAFAF9", "#E7E5E4"],
    patternType: "sanitary",
    accentColor: "#78716C",
    aspect: [800, 600],
  },
  {
    file: "public/images/products/basin-vanity.webp",
    title: "Vanity Countertop Installation",
    category: "Hotel Luxury Bathroom Concept",
    bgGradient: ["#F5F5F4", "#D6D3D1"],
    patternType: "interior",
    accentColor: "#57534E",
    aspect: [800, 600],
  },
  {
    file: "public/images/products/wall-hung-toilet.webp",
    title: "Rimless Tornado Wall-Hung Closet",
    category: "Nano Anti-Bacterial Glaze",
    bgGradient: ["#F8FAFC", "#E2E8F0"],
    patternType: "sanitary",
    accentColor: "#334155",
    aspect: [800, 600],
  },
  {
    file: "public/images/products/kitchen-sink.webp",
    title: "SS 304 Handmade Kitchen Sink",
    category: "16-Gauge Satin Brushed Steel",
    bgGradient: ["#64748B", "#334155"],
    patternType: "fittings",
    accentColor: "#F1F5F9",
    aspect: [800, 600],
  },

  // Products - Bathroom Fittings
  {
    file: "public/images/products/brass-tall-faucet.webp",
    title: "Tall Pillar Basin Mixer",
    category: "Brushed Warm Gold PVD Finish",
    bgGradient: ["#3D2F1E", "#1F170E"],
    patternType: "fittings",
    accentColor: "#FBBF24",
    aspect: [800, 600],
  },
  {
    file: "public/images/products/faucet-detail.webp",
    title: "PVD Brushed Finish Detail",
    category: "Lead-Free Forged Brass Core",
    bgGradient: ["#453522", "#241B10"],
    patternType: "fittings",
    accentColor: "#FDE68A",
    aspect: [800, 600],
  },
  {
    file: "public/images/products/shower-diverter.webp",
    title: "Thermostatic 3-Way Shower Diverter",
    category: "Triple-Layer Nickel Chrome",
    bgGradient: ["#475569", "#1E293B"],
    patternType: "fittings",
    accentColor: "#E2E8F0",
    aspect: [800, 600],
  },
  {
    file: "public/images/products/health-faucet.webp",
    title: "Heavy Brass Health Faucet",
    category: "Burst-Proof SS 304 Flexible Hose",
    bgGradient: ["#334155", "#0F172A"],
    patternType: "fittings",
    accentColor: "#94A3B8",
    aspect: [800, 600],
  },

  // Products - Chemicals
  {
    file: "public/images/products/tile-adhesive.webp",
    title: "Polymer Vitrified Adhesive (Type 2)",
    category: "20kg High-Bond Grey Mortar",
    bgGradient: ["#3F3F46", "#18181B"],
    patternType: "chemical",
    accentColor: "#60A5FA",
    aspect: [800, 600],
  },
  {
    file: "public/images/products/adhesive-application.webp",
    title: "Notched Trowel Application",
    category: "Zero Hollow Sound Guarantee",
    bgGradient: ["#52525B", "#27272A"],
    patternType: "chemical",
    accentColor: "#93C5FD",
    aspect: [800, 600],
  },
  {
    file: "public/images/products/epoxy-grout.webp",
    title: "Stain-Proof 3-Part Epoxy Grout",
    category: "100% Waterproof Joint Sealant",
    bgGradient: ["#334155", "#1E293B"],
    patternType: "chemical",
    accentColor: "#38BDF8",
    aspect: [800, 600],
  },
  {
    file: "public/images/products/stone-sealer.webp",
    title: "Natural Stone Penetrating Sealer",
    category: "Invisible Fluorochemical Shield",
    bgGradient: ["#1E293B", "#0F172A"],
    patternType: "chemical",
    accentColor: "#7DD3FC",
    aspect: [800, 600],
  },

  // Projects
  {
    file: "public/images/projects/living-hall-marble.webp",
    title: "Contemporary Villa Living Hall",
    category: "Italian Statuario Marble Flooring",
    bgGradient: ["#FAF8F5", "#D8D0C3"],
    patternType: "interior",
    accentColor: "#6B5E4F",
    aspect: [1000, 750],
  },
  {
    file: "public/images/projects/chef-kitchen-granite.webp",
    title: "Monolithic Chef Kitchen",
    category: "Rajasthan Jet Black Countertops",
    bgGradient: ["#201E1D", "#0A0909"],
    patternType: "granite",
    accentColor: "#C5A880",
    aspect: [1000, 750],
  },
  {
    file: "public/images/projects/hotel-bathroom.webp",
    title: "Luxury Hotel En-Suite Suite",
    category: "Royal Onyx Tiles & Brushed Brass",
    bgGradient: ["#2B231B", "#15100B"],
    patternType: "interior",
    accentColor: "#D4AF37",
    aspect: [1000, 750],
  },
  {
    file: "public/images/projects/foyer-accent-wall.webp",
    title: "Penthouse Foyer Feature Wall",
    category: "Bookmatched Black Marquina Marble",
    bgGradient: ["#1C1917", "#0C0A09"],
    patternType: "marble",
    accentColor: "#FAFAF9",
    aspect: [1000, 750],
  },
  {
    file: "public/images/projects/corporate-lobby.webp",
    title: "Corporate Reception & Lobby",
    category: "Vitrified Slabs with Granite Borders",
    bgGradient: ["#302C27", "#171513"],
    patternType: "interior",
    accentColor: "#C5A880",
    aspect: [1000, 750],
  },
  {
    file: "public/images/projects/courtyard-tiles.webp",
    title: "Modern Residence Courtyard",
    category: "Heavy-Duty Vitrified Outdoor Pavers",
    bgGradient: ["#383531", "#1E1C1A"],
    patternType: "tile",
    accentColor: "#A8A29E",
    aspect: [1000, 750],
  },
];

function generateSVG(spec) {
  const [w, h] = spec.aspect;
  const [c1, c2] = spec.bgGradient;

  let patternSvg = "";
  if (spec.patternType === "marble") {
    patternSvg = `
      <path d="M-50,${h * 0.2} Q${w * 0.3},${h * 0.4} ${w * 0.6},${h * 0.15} T${w + 50},${h * 0.5}" fill="none" stroke="${spec.accentColor}" stroke-opacity="0.25" stroke-width="3" />
      <path d="M-50,${h * 0.45} Q${w * 0.4},${h * 0.2} ${w * 0.75},${h * 0.6} T${w + 50},${h * 0.85}" fill="none" stroke="${spec.accentColor}" stroke-opacity="0.18" stroke-width="2" />
      <path d="M${w * 0.2},-20 Q${w * 0.45},${h * 0.5} ${w * 0.8},${h + 20}" fill="none" stroke="${spec.accentColor}" stroke-opacity="0.12" stroke-width="1.5" stroke-dasharray="8 6" />
    `;
  } else if (spec.patternType === "tile") {
    patternSvg = `
      <defs>
        <pattern id="grid-${spec.title.replace(/[^a-zA-Z0-9]/g, "")}" width="${w / 6}" height="${h / 4}" patternUnits="userSpaceOnUse">
          <rect width="${w / 6}" height="${h / 4}" fill="none" stroke="${spec.accentColor}" stroke-opacity="0.2" stroke-width="1.5" />
        </pattern>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#grid-${spec.title.replace(/[^a-zA-Z0-9]/g, "")})" />
    `;
  } else if (spec.patternType === "granite") {
    patternSvg = `
      <circle cx="${w * 0.25}" cy="${h * 0.3}" r="3" fill="${spec.accentColor}" opacity="0.3"/>
      <circle cx="${w * 0.75}" cy="${h * 0.2}" r="2.5" fill="${spec.accentColor}" opacity="0.4"/>
      <circle cx="${w * 0.4}" cy="${h * 0.7}" r="3.5" fill="${spec.accentColor}" opacity="0.25"/>
      <circle cx="${w * 0.6}" cy="${h * 0.85}" r="2" fill="${spec.accentColor}" opacity="0.35"/>
      <path d="M0,${h * 0.5} L${w},${h * 0.5}" stroke="${spec.accentColor}" stroke-opacity="0.1" stroke-width="1"/>
    `;
  } else {
    patternSvg = `
      <circle cx="${w * 0.5}" cy="${h * 0.5}" r="${Math.min(w, h) * 0.38}" fill="none" stroke="${spec.accentColor}" stroke-opacity="0.18" stroke-width="1.5" />
      <circle cx="${w * 0.5}" cy="${h * 0.5}" r="${Math.min(w, h) * 0.26}" fill="none" stroke="${spec.accentColor}" stroke-opacity="0.12" stroke-width="1" />
    `;
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${c1}" />
          <stop offset="100%" stop-color="${c2}" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="${w}" height="${h}" fill="url(#bgGrad)" />
      
      <!-- Architectural Pattern / Texture -->
      ${patternSvg}

      <!-- Border Frame -->
      <rect x="20" y="20" width="${w - 40}" height="${h - 40}" fill="none" stroke="${spec.accentColor}" stroke-opacity="0.25" stroke-width="1" />

      <!-- Corner Accents -->
      <line x1="16" y1="20" x2="30" y2="20" stroke="${spec.accentColor}" stroke-width="2" />
      <line x1="20" y1="16" x2="20" y2="30" stroke="${spec.accentColor}" stroke-width="2" />
      <line x1="${w - 30}" y1="20" x2="${w - 16}" y2="20" stroke="${spec.accentColor}" stroke-width="2" />
      <line x1="${w - 20}" y1="16" x2="${w - 20}" y2="30" stroke="${spec.accentColor}" stroke-width="2" />

      <!-- Center Typography Banner -->
      <g transform="translate(${w / 2}, ${h / 2})">
        <rect x="-${w * 0.42}" y="-46" width="${w * 0.84}" height="92" fill="#000000" fill-opacity="0.5" rx="6" stroke="${spec.accentColor}" stroke-opacity="0.3" stroke-width="1" />
        <text text-anchor="middle" y="-4" font-family="'Cinzel', 'Playfair Display', Georgia, serif" font-size="${Math.max(16, Math.min(26, w * 0.032))}" font-weight="600" fill="#FFFFFF" letter-spacing="2">
          ${spec.title.toUpperCase().replace(/&/g, "&amp;")}
        </text>
        <text text-anchor="middle" y="24" font-family="'Geist', 'Segoe UI', sans-serif" font-size="${Math.max(11, Math.min(13, w * 0.016))}" font-weight="400" fill="${spec.accentColor}" letter-spacing="1.5">
          ${spec.category.toUpperCase().replace(/&/g, "&amp;")}
        </text>
      </g>

      <!-- Bottom Brand Mark -->
      <text x="${w / 2}" y="${h - 32}" text-anchor="middle" font-family="'Geist', sans-serif" font-size="10" font-weight="500" fill="${spec.accentColor}" opacity="0.6" letter-spacing="3">
        GAURAV MARBLES • FIROZABAD
      </text>
    </svg>
  `;
}

async function buildAll() {
  console.log(`Generating ${images.length} luxury WebP images...`);
  for (const img of images) {
    const svg = generateSVG(img);
    const buffer = Buffer.from(svg);
    await sharp(buffer)
      .webp({ quality: 90 })
      .toFile(img.file);
    console.log(`  ✓ Created ${img.file}`);
  }
  console.log("All placeholder images created successfully!");
}

buildAll().catch((err) => {
  console.error("Error generating placeholders:", err);
  process.exit(1);
});
