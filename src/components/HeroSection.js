import React from "react";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: "url(/images/map-view.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="hero px-6 min-h-screen flex items-center justify-center overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-black bg-opacity-80 z-10 w-full"></div>

      <div className="max-w-7xl mx-auto lg:mt-16 -mt-16 text-center flex flex-col justify-center items-center relative z-20">
        <h1 data-aos="fade-right" className="title text-white">
          Experience Seamless Cannabis Shopping with Bitcoin
        </h1>
        <p
          data-aos="fade-left"
          className="mt-4 text-white max-w-[900px] text-center text-lg font-semibold"
        >
          Discover a hassle-free way to find and shop at cannabis dispensaries.
          Our app connects you to stores that accept Bitcoin and Lightning
          Network payments, ensuring privacy and eliminating traditional fees.
        </p>

        <div data-aos="fade-up" className="flex justify-center gap-8 mt-6">
          <a href="#">
            <img
              className="h-10 w-auto"
              src="/images/android.png"
              alt="Android"
            />
          </a>
          <a href="#">
            <img className="h-10 w-auto" src="/images/apple.gif" alt="Apple" />
          </a>
        </div>

        <div className="flex justify-center mt-10 items-center flex-wrap gap-4">
          <img
            className="h-auto lg:w-1/4 w-1/3 max-w-[500px] object-contain"
            src="/images/use1.png"
            alt="Use 1"
          />
          <img
            className="h-auto lg:w-1/4 w-1/3 max-w-[500px] lg:-ml-10 object-contain"
            src="/images/use2.png"
            alt="Use 2"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
