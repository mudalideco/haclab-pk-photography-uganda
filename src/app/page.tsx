import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { SocialSection } from "@/components/sections/SocialSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { LocationSection } from "@/components/sections/LocationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <AboutSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <PricingSection />
        <GallerySection />
        <TestimonialsSection />
        <SocialSection />
        <FAQSection />
        <LocationSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
