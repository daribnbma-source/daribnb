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
import ToolsBand from "../components/site/ToolsBand";
import ProofBand from "../components/site/ProofBand";
import VideoSection from "../components/site/VideoSection";
import Footer from "../components/site/Footer";
import WhatsAppFloat from "../components/site/WhatsAppFloat";
import ExitIntentPopup from "../components/site/LazyExitIntentPopup";
import BlogTeaser from "../components/site/BlogTeaser";
import QuestionBanner from "../components/site/QuestionBanner";
import { SimulatorProvider } from "../lib/SimulatorContext";
import HydrationBoundary from "../components/HydrationBoundary";

export default function Landing() {
  return (
    <SimulatorProvider>
      <div data-testid="landing-page" className="min-h-screen bg-[#F7F6F2]">
        <Header />
        <main>
          <Hero />
          <ToolsBand />
          {/* Sections sous la ligne de flottaison : une frontière d'hydratation chacune (tâches courtes). */}
          <HydrationBoundary>
            <VideoSection />
          </HydrationBoundary>
          <HydrationBoundary>
            <PainPoints />
          </HydrationBoundary>
          <HydrationBoundary>
            <Pricing />
          </HydrationBoundary>
          <HydrationBoundary>
            <ProofBand />
          </HydrationBoundary>
          <HydrationBoundary>
            <Services />
          </HydrationBoundary>
          <HydrationBoundary>
            <HowItWorks />
          </HydrationBoundary>
          <HydrationBoundary>
            <WhyUs />
          </HydrationBoundary>
          <HydrationBoundary>
            <Testimonials />
          </HydrationBoundary>
          <HydrationBoundary>
            <Coverage />
          </HydrationBoundary>
          <HydrationBoundary>
            <Guarantee />
          </HydrationBoundary>
          <HydrationBoundary>
            <Urgency />
          </HydrationBoundary>
          <HydrationBoundary>
            <BlogTeaser />
          </HydrationBoundary>
          <HydrationBoundary>
            <FAQ />
          </HydrationBoundary>
          <HydrationBoundary>
            <QuestionBanner />
          </HydrationBoundary>
          <HydrationBoundary>
            <Contact />
          </HydrationBoundary>
        </main>
        <HydrationBoundary>
          <Footer />
        </HydrationBoundary>
        <WhatsAppFloat />
        <ExitIntentPopup />
      </div>
    </SimulatorProvider>
  );
}
