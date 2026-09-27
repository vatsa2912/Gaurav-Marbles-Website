export interface ProjectItem {
  id: string;
  title: string;
  category: "Residential" | "Kitchen" | "Bathroom" | "Flooring" | "Wall Cladding" | "Commercial";
  location: string;
  description: string;
  image: string;
  materialsUsed: string[];
}

/**
 * Architectural inspiration gallery for Gaurav Marbles.
 * (Structured as demo showroom inspiration showcase; easily replaceable with real completed sites).
 */
export const PROJECTS_GALLERY: ProjectItem[] = [
  {
    id: "proj-01",
    title: "Contemporary Villa Living Hall",
    category: "Flooring",
    location: "Residential Project, Firozabad Region",
    description:
      "Seamless bookmatched white marble flooring paired with recessed warm perimeter lighting to maximize natural daylight and elegance.",
    image: "/images/projects/living-hall-marble.webp",
    materialsUsed: ["Italian Statuario Marble", "Type 2 Polymer Adhesive", "LithoShield Sealer"],
  },
  {
    id: "proj-02",
    title: "Minimalist Monolithic Chef Kitchen",
    category: "Kitchen",
    location: "Private Residence",
    description:
      "Continuous jet black granite countertops with bullnose edge detailing, complemented by subway-style tile backsplashes.",
    image: "/images/projects/chef-kitchen-granite.webp",
    materialsUsed: ["Rajasthan Jet Black Granite", "SS 304 Handmade Sink", "Stain-Proof Epoxy Grout"],
  },
  {
    id: "proj-03",
    title: "Boutique Hotel En-Suite Sanctuary",
    category: "Bathroom",
    location: "Hospitality Suite",
    description:
      "Large-format 600x1200mm onyx vitrified wall tiles seamlessly joined with thermostatic brushed gold rain shower fittings and fluted wash basin.",
    image: "/images/projects/hotel-bathroom.webp",
    materialsUsed: ["Royal Onyx Vitrified Tiles", "Brushed Gold Basin Mixer", "Rimless Wall-Hung Closet"],
  },
  {
    id: "proj-04",
    title: "Luxury Penthouse Foyer & Accent Wall",
    category: "Wall Cladding",
    location: "Executive Residence",
    description:
      "Vertical bookmatched black marquina marble accent wall creating a striking contrast against brushed champagne metal trims.",
    image: "/images/projects/foyer-accent-wall.webp",
    materialsUsed: ["Black Marquina Marble", "Precision Mechanical Clamps", "Epoxy High-Tack Adhesive"],
  },
  {
    id: "proj-05",
    title: "Commercial Office Reception & Lobby",
    category: "Commercial",
    location: "Corporate Complex",
    description:
      "High-traffic double charged vitrified floor tiles with contrasting tan brown granite border bands for durability and aesthetic prestige.",
    image: "/images/projects/corporate-lobby.webp",
    materialsUsed: ["High-Gloss Vitrified Tiles", "Tan Brown Granite", "Industrial Grade Adhesive"],
  },
  {
    id: "proj-06",
    title: "Modern Family Courtyard & Verandah",
    category: "Residential",
    location: "Suburban Villa",
    description:
      "Textured anti-skid heavy-duty outdoor vitrified parking tiles offering superior wet grip and low-maintenance longevity.",
    image: "/images/projects/courtyard-tiles.webp",
    materialsUsed: ["Heavy-Duty Vitrified Outdoor Tiles", "R11 Anti-Skid Finish"],
  },
];
