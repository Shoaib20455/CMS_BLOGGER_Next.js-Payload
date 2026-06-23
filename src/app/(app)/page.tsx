import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import IntroSections from "./components/IntroSections";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import ReadyTruckSection from "./components/ReadyTruckSection";
import ServicesProcessSection from "./components/ServicesProcessSection";
import StatePickerCard from "./components/StatePickerCard";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatePickerCard />
      <IntroSections />
      <ServicesProcessSection />
      <WhyChooseUsSection />
      <PricingSection />
      <ReadyTruckSection />
      <BlogSection />
      <TestimonialsSection />
    </>
  );
}