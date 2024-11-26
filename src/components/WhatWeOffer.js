import React from "react";
import {
  MapPin,
  CreditCard,
  Star,
  ShoppingCart,
  Shield,
  Bitcoin,
} from "lucide-react";

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
      title: "Detailed Store Insights",
      description: "Read reviews and browse products before you visit.",
      icon: Star, // Icon for reviews and ratings
    },
  ];
  return (
    <>
      <section className="py-16 px-4 lg:px-0 bg-gradient-to-b from-gray-700 via-gray-600 to-gray-800">
        <div className="flex justify-center">
          <h1 className="text-4xl h-20 mb-6 lg:text-6xl font-bold max-w-[800px] lg:max-w-[1000px] text-center mt-6 text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-purple-300 ">
            Key Features
          </h1>
        </div>
        <div className="container mx-auto grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              data-aos="fade-left"
              data-aos-delay={300}
              key={index}
              className="bg-white border rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <feature.icon className="text-green-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-accent mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="offer" className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Title */}
          <h2 className="title2 h-32">
            Your Ultimate Gateway to Bitcoin-Friendly Cannabis Shopping
          </h2>

          {/* Content */}
          <p className="text-lg text-gray-700 text-center mb-8 font-semibold ">
            Our app revolutionizes the way you find and pay at cannabis
            dispensaries. Enjoy unparalleled convenience and privacy with these
            benefits:
          </p>

          <div className="lg:flex justify-center items-center">
            <div className="">
              {/* Benefit 1 */}
              <div className="m-5 shadow-lg rounded-lg border p-6 text-center">
                <div className="flex justify-center mb-3">
                  <Bitcoin className="w-10 h-10 text-green-500 mr-4" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Fee-Free Transactions
                  </h3>
                  <p className="text-gray-600">
                    Leverage Bitcoin and the Lightning Network to bypass
                    traditional payment processing fees.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="m-5 shadow-lg rounded-lg border p-6 text-center">
                <div className="flex justify-center mb-3">
                  <Shield className="w-10 h-10 text-blue-500 mr-4" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Enhanced Privacy
                  </h3>
                  <p className="text-gray-600">
                    Maintain your financial privacy by paying directly with
                    Bitcoin.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="m-5 border shadow-lg rounded-lg p-6 text-center">
                <div className="flex justify-center mb-3">
                  <MapPin className="w-10 h-10 text-purple-500 mr-4" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Quick and Easy Search
                  </h3>
                  <p className="text-gray-600">
                    Find nearby cannabis stores effortlessly with our
                    user-friendly map and list views.
                  </p>
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <div className="lg:w-1/3">
              <img src="/images/multiple-stores.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeOffer;
