const Testimonials = () => {
  const reviews = [
    {
      text: "This app is a game-changer! Finding Bitcoin-friendly dispensaries has never been easier. Plus, I love avoiding credit card fees!",
      author: "Alex M., Verified User",
    },
    {
      text: "The Lightning Network payments are incredibly fast. I never have to wait at checkout.",
      author: "Taylor S., Frequent User",
    },
    {
      text: "Great app for privacy-focused shoppers. The product listings are detailed, and the reviews are super helpful.",
      author: "Jordan L., Bitcoin Enthusiast",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative bg-gray-700 text-white py-16 px-6"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto  lg:px-12">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl text-green-300 sm:text-4xl font-bold mb-4">
            What Our Users Are Saying
          </h2>
          <p className="text-gray-300 text-base font-semibold sm:text-lg">
            See how we're transforming cannabis shopping:
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <p className="text-lg mb-6 italic text-gray-200">
                "{review.text}"
              </p>
              <p className="text-right font-bold text-green-300">
                – {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
