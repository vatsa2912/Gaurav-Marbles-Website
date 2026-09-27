import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProductSchema } from "@/components/seo/SchemaData";
import { ProductDetailClient } from "@/components/products/ProductDetailClient";
import { SITE_CONFIG } from "@/data/siteConfig";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} — Gaurav Marbles Firozabad`,
    description: `${product.description} Available for inspection at Gaurav Marbles showroom in Firozabad, Uttar Pradesh. Price on request.`,
    openGraph: {
      title: `${product.name} | Gaurav Marbles`,
      description: product.description,
      images: [
        {
          url: product.images[0] || "/images/hero-stone.webp",
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <main className="min-h-screen flex flex-col bg-[#FDFCF7]">
      <ProductSchema
        name={product.name}
        description={product.description}
        image={product.images[0] || "/images/hero-stone.webp"}
        category={product.category}
        brand={product.brand}
        sku={product.id}
      />

      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { name: "Products", url: "/products" },
            {
              name: product.category.toUpperCase(),
              url: `/${product.category}`,
            },
            { name: product.name, url: `/products/${product.slug}` },
          ]}
        />

        <div className="mt-6">
          <ProductDetailClient
            product={product}
            relatedProducts={relatedProducts}
          />
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
