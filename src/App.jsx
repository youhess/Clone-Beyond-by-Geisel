import TopBar from "./layout/TopBar";
import MainHeader from "./layout/MainHeader";
import Footer from "./layout/Footer";
import Hero from "./sections/Hero";
import IntroSection from "./sections/IntroSection";
import ExperienceSection from "./sections/ExperienceSection";
import SuitesSection from "./sections/SuitesSection";
import LocationSection from "./sections/LocationSection";
import CtaBanner from "./sections/CtaBanner";
import ContactSection from "./sections/ContactSection";
import MapSection from "./sections/MapSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <MainHeader />
      <main>
        <Hero />
        <IntroSection />
        <ExperienceSection />
        <SuitesSection />
        <LocationSection />
        <CtaBanner />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}