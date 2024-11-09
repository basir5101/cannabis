import React from "react";
import { MapPin, CreditCard, Star, ShoppingCart, Shield } from "lucide-react";

const WhatWeOffer = () => {
  const features = [
    {
      title: "Effortless Store Finder",
      description:
        "Locate cannabis stores instantly using our intuitive map and list views.",
      icon: MapPin, // Icon for store location
    },
    {
      title: "Instant Bitcoin Payments",
      description: "Enjoy fast, secure transactions without the extra fees.",
      icon: CreditCard, // Icon for Bitcoin payment
    },
    {
      title: "Authentic Reviews & Ratings",
      description: "Read genuine reviews and browse products before you visit.",
      icon: Star, // Icon for reviews and ratings
    },
    {
      title: "Comprehensive Product Browsing",
      description:
        "Check descriptions, prices, and availability before you go.",
      icon: ShoppingCart, // Icon for product browsing
    },
    {
      title: "Save with Lightning Network",
      description:
        "Save money using the Lightning Network's fast, low-fee Bitcoin transactions.",
      icon: Shield, // Icon for secure transactions
    },
  ];
  return (
    <section id="offer" className="p-6 bg-gray-100">
      <h2
        data-aos="fade-right"
        className="text-center lg:text-4xl text-2xl font-semibold mb-4"
      >
        Your Ultimate Gateway to Bitcoin-Friendly Cannabis Shopping
      </h2>
      <p data-aos-delay={200} data-aos="fade-left" className="text-center mb-8">
        Our app revolutionizes the way you find and pay at cannabis
        dispensaries. Enjoy unparalleled convenience and privacy with these
        benefits:
      </p>
      <div className="container mx-auto grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            data-aos="fade-left"
            data-aos-delay={300}
            key={index}
            className="bg-white border border-secondary rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <feature.icon className="text-secondary w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-accent mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
