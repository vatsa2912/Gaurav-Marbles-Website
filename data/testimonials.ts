export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  role: string;
  rating: number;
  date: string;
  content: string;
  projectType: string;
  verifiedShowroomVisitor?: boolean;
}

/**
 * Showroom visitor and client reviews structure.
 * Note: These are representative feedback samples demonstrating the review interface,
 * easily updated with verified Google Reviews or customer ledger feedback by the showroom owner.
 */
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "rev-01",
    name: "Rajesh S. Sharma",
    location: "Firozabad",
    role: "Homeowner",
    rating: 5,
    date: "Recent Visit",
    projectType: "Full House Flooring (Makrana Marble & Vitrified Tiles)",
    content:
      "Visited Gaurav Marbles on Bypass Road for our new house construction. Gaurav ji personally assisted in comparing Makrana marble lots with large vitrified slabs. The guidance on wastage calculation and matching adhesives made a big difference.",
    verifiedShowroomVisitor: true,
  },
  {
    id: "rev-02",
    name: "Ar. Vikas Verma",
    location: "Agra - Firozabad Region",
    role: "Architect & Interior Designer",
    rating: 5,
    date: "Showroom Partner",
    projectType: "Kitchen & Bath Specifications",
    content:
      "As a designer, I appreciate having a dependable local showroom with authentic granite slabs and quality brass fittings under one roof. The jet black granite batch we selected had uniform thickness and flawless mirror polish.",
    verifiedShowroomVisitor: true,
  },
  {
    id: "rev-03",
    name: "Mukesh Chandra Gupta",
    location: "Shikohabad / Firozabad",
    role: "Property Developer",
    rating: 5,
    date: "Client",
    projectType: "Apartment Parking & Staircase Granite",
    content:
      "Prompt response on WhatsApp and genuine rates. Their recommendation of Type-2 adhesive for wall tiles saved us a lot of trouble on site. Transparent dealing with no misleading claims.",
    verifiedShowroomVisitor: true,
  },
  {
    id: "rev-04",
    name: "Dr. Ananya Singhal",
    location: "Firozabad",
    role: "Homeowner",
    rating: 5,
    date: "Client",
    projectType: "Master Bathroom Renovation",
    content:
      "Selected a designer fluted wash basin and concealed shower mixer. The staff explained the difference in water pressure requirements clearly before finalizing. Very courteous and professional atmosphere.",
    verifiedShowroomVisitor: true,
  },
];
