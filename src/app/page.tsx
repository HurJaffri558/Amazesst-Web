import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Packages } from "@/components/Packages";
import { StatsSection } from "@/components/StatsSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { Features } from "@/components/Features";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Booking } from "@/components/Booking";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";
import { LogoScroller } from "@/components/LogoScroller";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      <Navbar />
      <Hero />
      <Packages />
      <StatsSection />
      <LogoScroller />
      <CaseStudySection />
      <Features />
      <Process />
      <Testimonials />
      <FAQ />
      <Booking />
      <Blog />
      <Footer />
    </main>
  );
}
