export type ProductCategory =
  | "marble"
  | "tiles"
  | "granite"
  | "sanitaryware"
  | "bathroom-fittings"
  | "chemicals";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  subcategory: string;
  brand: string;
  colour: string;
  size: string;
  material: string;
  finish: string;
  description: string;
  longDescription?: string;
  images: string[];
  featured: boolean;
  availability: "In Stock" | "Available on Order";
  tags: string[];
  recommendedApplications?: string[];
  specifications?: Record<string, string>;
}

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  hindiName: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  subcategories: string[];
  features: string[];
}
