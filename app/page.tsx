import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { AreaCalculatorBanner } from "@/components/home/AreaCalculatorBanner";
import { ProjectPreview } from "@/components/home/ProjectPreview";
import { TestimonialPreview } from "@/components/home/TestimonialPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FDFCF7]">
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <CategoryGrid />
      <FeaturedProducts />
      <WhyChooseUs />
      <AreaCalculatorBanner />
      <ProjectPreview />
      <TestimonialPreview />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}