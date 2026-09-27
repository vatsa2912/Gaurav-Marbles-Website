import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/siteConfig";
import { PRODUCTS } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.seo.siteUrl;

  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/marble",
    "/tiles",
    "/granite",
    "/sanitaryware",
    "/bathroom-fittings",
    "/chemicals",
    "/projects",
    "/testimonials",
    "/calculator",
    "/quote",
    "/catalogue",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/products") || route === "/quote" ? 0.9 : 0.8,
  }));

  const productRoutes = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...productRoutes];
}
