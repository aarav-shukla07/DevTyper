import Image from "next/image";
import Header from "./components/Header";
import HeroParallax from "./components/HeroParallax";
import FeatureSection from "./components/FeaturesSection";
import FeaturesGrid from "./components/FeaturesGrid";
import Description from "./components/Description";
import DesGrid from "./components/DesGrid";
import Working from "./components/Working";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroParallax />
      <div className="relative bg-zinc-900 text-white min-h-screen">
        <div className="absolute inset-0 z-0 bg-noise" />
        <main className="relative z-10">
          {/* Your content here */}
          <FeatureSection />
          <FeaturesGrid />
          <Description />
          <DesGrid />
          <Working />
          <Footer />
        </main>
      </div>
    </>
  );
}
