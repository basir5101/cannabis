import React from "react";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: "url(/images/map-view.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
      className="hero"
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Adjust opacity as needed
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        className="container mx-auto px-6 py-10 text-center"
        style={{ position: "relative", zIndex: 2 }}
      >
        <h1
          data-aos="fade-right"
          className="text-2xl md:text-4xl font-bold text-white"
        >
          Experience Seamless Cannabis Shopping with Bitcoin
        </h1>
        <p data-aos="fade-left" className="mt-4 text-white font-semibold">
          Discover a hassle-free way to find and shop at cannabis dispensaries
          accepting Bitcoin.
        </p>
        <div data-aos="fade-up" className="flex justify-center gap-4 mt-6">
          <button class="rounded-md px-3.5 bg-blue-100 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-primary text-primary ">
            <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span class="relative text-primary transition duration-300 group-hover:text-white ease">
              Download on iOS
            </span>
          </button>
          <button class="rounded-md px-3.5 bg-black text-secondary py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-black">
            <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-secondary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span class="relative text-secondary transition duration-300 group-hover:text-black ease">
              Get it on Android
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
