import React from "react";
import Header from "../components/site/Header";
import Hero from "../components/site/Hero";
import PainPoints from "../components/site/PainPoints";
import Services from "../components/site/Services";
import HowItWorks from "../components/site/HowItWorks";
import WhyUs from "../components/site/WhyUs";
import Testimonials from "../components/site/Testimonials";
import Coverage from "../components/site/Coverage";
import Urgency from "../components/site/Urgency";
import Pricing from "../components/site/Pricing";
import Guarantee from "../components/site/Guarantee";
import FAQ from "../components/site/FAQ";
import Contact from "../components/site/Contact";
import Footer from "../components/site/Footer";
import WhatsAppFloat from "../components/site/WhatsAppFloat";
import ExitIntentPopup from "../components/site/ExitIntentPopup";
import BlogTeaser from "../components/site/BlogTeaser";
import { SimulatorProvider } from "../lib/SimulatorContext";

export default function Landing() {
  return (
    <SimulatorProvider>
      <div data-testid="landing-page" className="min-h-screen bg-[#FAF9F6]">
        <Header />
        <main>
          <Hero />
          <PainPoints />
          <Services />
          <HowItWorks />
          <WhyUs />
          <Testimonials />
          <Coverage />
          <Urgency />
          <Pricing />
          <Guarantee />
          <BlogTeaser />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
        <ExitIntentPopup />
      </div>
    </SimulatorProvider>
  );
}
