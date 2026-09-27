import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard/", "/login", "/forgot-password"],
      },
    ],
    sitemap: `${SITE_CONFIG.seo.siteUrl}/sitemap.xml`,
  };
}
