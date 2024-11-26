const HowItWorks = () => {
  const steps = [
    {
      title: "Search for Stores",
      description:
        "Open the app and use the search bar or map view to find nearby cannabis stores accepting Bitcoin.",
      image: "/images/search-interface.png", // Replace with actual path
    },
    {
      title: "Explore Store Details",
      description:
        "Tap on a store to view products, reviews, and hours of operation.",
      image: "/images/store-detial.png", // Replace with actual path
    },
    {
      title: "Make a Bitcoin Payment",
      description:
        "Select your products and pay using Bitcoin or the Lightning Network for instant, fee-free transactions.",
      image: "/images/transaction-conformation.png", // Replace with actual path
    },
    {
      title: "Bitcoin payment screen with confirmation.",
      description:
        "Share your experience by leaving a review and rating the store.",
      image: "/images/review-submission.png", // Replace with actual path
    },
  ];

  return (
    <section id="how-it-works" className="p-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex justify-center">
            <h2 className="title">Start Using the App in 4 Simple Steps</h2>
          </div>
          <p className="text-gray-300 text-base sm:text-lg font-semibold">
            Get started quickly and easily:
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center lg:text-left lg:items-start bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center items-center">
                <div className="mr-3">
                  {/* Step Number */}
                  <div className="text-xl font-bold text-green-400 mb-4">
                    Step {index + 1}
                  </div>
                  {/* Step Content */}
                  <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-purple-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{step.description}</p>
                  {/* Screenshot */}
                </div>
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-1/2"
                  //   className="rounded-md w-full object-cover "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
