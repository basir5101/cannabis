import React from "react";

const features = [
  {
    title: "Interactive Map & List View",
    description:
      "Explore nearby cannabis dispensaries using our interactive map or list view. Access store details, reviews, and operating hours all in one place.",
    image: "/images/map-view.png", // Replace with actual path
  },
  {
    title: "Instant Bitcoin Payments",
    description:
      "Make seamless payments using Bitcoin or the Lightning Network. Experience instant transactions without credit card fees.",
    image: "/images/bitcoin-payment.png", // Replace with actual path
  },
  {
    title: "Authentic Reviews & Ratings",
    description:
      "Read genuine reviews and ratings from other users. Share your own experiences to help the community.",
    image: "/images/reviews-section.png", // Replace with actual path
  },
  {
    title: "Comprehensive Product Browsing",
    description:
      "Browse available products at each store. Check descriptions, prices, and availability before you go.",
    image: "/images/product-listings.png", // Replace with actual path
  },
  {
    title: "Save with Lightning Network",
    description:
      "Save money using the Lightning Network's fast, low-fee Bitcoin transactions.",
    image: "/images/lightning-network.png", // Replace with actual path
  },
];

const Features = () => {
  return (
    <section id="features" className="p-6 bg-white">
      <h2 className="text-center text-2xl font-semibold  lg:text-4xl my-8">
        Discover Powerful Features Tailored for You
      </h2>
      <div className="container mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-item p-4 shadow-md rounded border border-secondary"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
