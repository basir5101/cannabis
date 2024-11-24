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
      className="hero min-h-screen flex items-center justify-center"
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Adjust opacity as needed
          zIndex: 1,
          width: "100%",
        }}
      ></div>

      {/* Content */}
      <div
        className="container mx-auto px-6 text-center flex flex-col justify-center items-center"
        style={{ position: "relative", zIndex: 2 }}
      >
        <h1 data-aos="fade-right" className="title">
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
            <img className="h-10" src="/images/android.png" alt="" />
          </a>
          <a href="#">
            <img className="h-10" src="/images/apple.gif" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
