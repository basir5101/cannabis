import { useEffect } from "react";
import "./App.css";
import DownloadSection from "./components/DownloadSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import WhatWeOffer from "./components/WhatWeOffer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhatWeOffer />
      <Features />
      <DownloadSection />
      <Footer />
    </div>
  );
}

export default App;
