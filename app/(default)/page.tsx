export const metadata = {
  title: "Home - GWC",
  description: "Wij bouwen conversiegerichte webshops voor ambitieuze ondernemers. WooCommerce, Shopify & maatwerk e-commerce oplossingen in Nederland.",
};

import Hero from "@/components/hero-home";
import PlatformsDome from "@/components/platforms-dome";
import FeaturesPlanet from "@/components/features-planet";
import StatsSection from "@/components/stats-section";
import ProcessSection from "@/components/process-section";
import LargeTestimonial from "@/components/large-testimonial";
import FaqSection from "@/components/faq-section";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <PlatformsDome />
      <StatsSection />
      <FeaturesPlanet />
      <ProcessSection />
      <LargeTestimonial />
      <FaqSection />
      <Cta />
    </>
  );
}
