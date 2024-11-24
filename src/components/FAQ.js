import React from "react";

const faqs = [
  {
    question: "How do I pay with Bitcoin at a store?",
    answer:
      "Choose Bitcoin at checkout and complete your payment using our integrated wallet.",
  },
  {
    question: "Are there any fees for using the app?",
    answer:
      "No, Bitcoin Customers is free to use. Bitcoin payments are processed via the Lightning Network, minimizing fees.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Absolutely. We use advanced encryption and do not store any sensitive payment information.",
  },
];

const FAQSection = () => {
  return (
    <section
      id="faq"
      className="py-16 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-md"
            >
              {/* Question */}
              <h3 className="text-lg font-semibold text-green-300">
                {faq.question}
              </h3>
              {/* Answer */}
              <p className="mt-2 text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
