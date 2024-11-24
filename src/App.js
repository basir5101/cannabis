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
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/UserTestimonial";
import SecurityBenefits from "./components/SecurityBenefits";
import DownloadApp from "./components/DownloadApp";
import FAQSection from "./components/FAQ";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />

      {/* <div>
        <div className="relative bg-gradient-to-r from-purple-500 to-indigo-600 h-64">
          <h1 className="text-center text-white text-3xl pt-16">
            Curved Section
          </h1>
          <div className="absolute bottom-0 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="w-full"
            >
              <path
                fill="#f8fafc"
                d="M0,256L48,234.7C96,213,192,171,288,149.3C384,128,480,128,576,154.7C672,181,768,235,864,240C960,245,1056,203,1152,181.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="bg-gray-100 p-10 text-center">
          <p>This is content below the curve.</p>
        </div>
      </div> */}
      <WhatWeOffer />
      <Features />
      <HowItWorks />
      <Testimonials />
      <SecurityBenefits />
      <DownloadApp />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
