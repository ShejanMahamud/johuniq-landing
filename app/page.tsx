import { ApproachSection } from "@/components/approach-section"
import { ClientLogos } from "@/components/client-logos"
import { CTASection } from "@/components/cta-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PortfolioShowcase } from "@/components/portfolio-showcase"
import { PricingSection } from "@/components/pricing-section"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import StructuredData from "@/components/structured-data"
import { TestimonialsSection } from "@/components/testimonial-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData />
      <Header />
      <Hero />
      <PortfolioShowcase />
      <ClientLogos />
      <StatsSection />
      <ServicesSection />
      {/* <CaseStudiesSection /> */}
      <TestimonialsSection />
      <ApproachSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
