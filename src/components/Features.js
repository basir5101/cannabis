import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

const features = [
  {
    title: "Interactive Map & List View",
    description:
      "Explore nearby cannabis dispensaries using our interactive map or list view. Access store details, reviews, and operating hours all in one place.",
    image: "/images/multiple-stores.png", // Replace with actual path
  },
  {
    title: "Instant Bitcoin Payments",
    description:
      "Make seamless payments using Bitcoin or the Lightning Network. Experience instant transactions without credit card fees.",
    image: "/images/payment-screen.png", // Replace with actual path
  },
  {
    title: "Authentic Reviews & Ratings",
    description:
      "Read genuine reviews and ratings from other users. Share your own experiences to help the community.",
    image: "/images/user-review.png", // Replace with actual path
  },
  {
    title: "Comprehensive Product Browsing",
    description:
      "Browse available products at each store. Check descriptions, prices, and availability before you go.",
    image: "/images/search-interface.png", // Replace with actual path
  },
  {
    title: "Save with Lightning Network",
    description:
      "Save money using the Lightning Network's fast, low-fee Bitcoin transactions.",
    image: "/images/cost-saving.png", // Replace with actual path
  },
];

const Features = () => {
  return (
    <section id="features" className="p-6 bg-black text-white mx-auto">
      <div className="max-w-7xl m-auto">
        <div className="flex justify-center">
          {" "}
          <h2 className="title h-40">
            Discover Powerful Features Tailored for You
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          navigation
          breakpoints={{
            300: { slidesPerView: 1 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 2, spaceBetween: 40 },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          loop={true}
        >
          {features.map((feature, index) => (
            <SwiperSlide
              key={index}
              className="p-4 shadow-md rounded border border-gray-600 bg-gradient-to-r from-gray-800 to-purple-800 mb-8"
            >
              <div className="lg:flex justify-center items-center text-center">
                <div className="lg:w-1/2 mr-8">
                  <h3 className="text-2xl lg:h-20  mb-6  font-bold max-w-[800px] lg:max-w-[1000px] mt-6 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-purple-300">
                    {feature.title}
                  </h3>
                  <p className="mb-3">{feature.description}</p>
                </div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="rounded-md mb-4 lg:w-1/2"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Features;
