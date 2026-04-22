import React from "react";
import Header from "../components/site/Header";
import Hero from "../components/site/Hero";
import Services from "../components/site/Services";
import HowItWorks from "../components/site/HowItWorks";
import WhyUs from "../components/site/WhyUs";
import Testimonials from "../components/site/Testimonials";
import Coverage from "../components/site/Coverage";
import Pricing from "../components/site/Pricing";
import FAQ from "../components/site/FAQ";
import Contact from "../components/site/Contact";
import Footer from "../components/site/Footer";
import WhatsAppFloat from "../components/site/WhatsAppFloat";
import ExitIntentPopup from "../components/site/ExitIntentPopup";

export default function Landing() {
  return (
    <div data-testid="landing-page" className="min-h-screen bg-[#FAF9F6]">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyUs />
        <Testimonials />
        <Coverage />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ExitIntentPopup />
    </div>
  );
}
