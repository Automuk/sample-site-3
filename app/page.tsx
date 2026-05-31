import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import PracticeAreas from "@/components/PracticeAreas";
import Attorneys from "@/components/Attorneys";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Consultation from "@/components/Consultation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <PracticeAreas />
      <Attorneys />
      <CaseStudies />
      <Testimonials />
      <Consultation />
      <Footer />
    </main>
  );
}
