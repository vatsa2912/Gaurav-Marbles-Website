import { SITE_CONFIG } from "@/data/siteConfig";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    "@id": `${SITE_CONFIG.seo.siteUrl}/#store`,
    "name": SITE_CONFIG.name,
    "alternateName": SITE_CONFIG.legalName,
    "description": SITE_CONFIG.seo.defaultDescription,
    "url": SITE_CONFIG.seo.siteUrl,
    "telephone": `+91${SITE_CONFIG.phone}`,
    "email": SITE_CONFIG.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE_CONFIG.address.street,
      "addressLocality": SITE_CONFIG.address.city,
      "addressRegion": SITE_CONFIG.address.state,
      "postalCode": SITE_CONFIG.address.postalCode,
      "addressCountry": "IN",
    },
    "hasMap": SITE_CONFIG.maps.url,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        "opens": "09:00",
        "closes": "20:00",
      },
    ],
    "founder": {
      "@type": "Person",
      "name": SITE_CONFIG.owner,
    },
    "priceRange": "$$",
    "paymentAccepted": "Cash, UPI, Bank Transfer",
    "currenciesAccepted": "INR",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductSchema({
  name,
  description,
  image,
  category,
  brand,
  sku,
}: {
  name: string;
  description: string;
  image: string;
  category: string;
  brand: string;
  sku: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": image.startsWith("http") ? image : `${SITE_CONFIG.seo.siteUrl}${image}`,
    "category": category,
    "brand": {
      "@type": "Brand",
      "name": brand,
    },
    "sku": sku,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "0",
      "availability": "https://schema.org/InStock",
      "url": `${SITE_CONFIG.seo.siteUrl}/products/${sku}`,
      "seller": {
        "@type": "Organization",
        "name": SITE_CONFIG.name,
      },
      "priceValidUntil": "2028-12-31",
      "description": "Price on Request",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQPageSchema({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbsSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http")
        ? item.url
        : `${SITE_CONFIG.seo.siteUrl}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
