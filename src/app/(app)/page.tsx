import BlogSection from "./components/BlogSection";
import CtaSection from "./components/CtaSection";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import IntroSections from "./components/IntroSections";
import LandingPageFrame from "./components/LandingPageFrame";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import ReadyTruckSection from "./components/ReadyTruckSection";
import ServicesProcessSection from "./components/ServicesProcessSection";
import StatePickerCard from "./components/StatePickerCard";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";

export default function HomePage() {
  return (
    <LandingPageFrame>
      <Navbar />
      <Hero />
      <StatePickerCard />
      <IntroSections />
      <ServicesProcessSection />
      <WhyChooseUsSection />
      <PricingSection />
      <ReadyTruckSection />
      <BlogSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </LandingPageFrame>
  );
}
