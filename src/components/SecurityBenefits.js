import { ShieldCheck, Bitcoin } from "lucide-react"; // Lucide icons for shield and Bitcoin

const SecurityBenefits = () => {
  const benefits = [
    {
      title: "Privacy-Focused",
      description: "Secure your transactions with direct Bitcoin payments.",
      icon: <ShieldCheck className="w-10 h-10 text-green-400" />,
    },
    {
      title: "Low Fees",
      description:
        "Avoid high fees associated with traditional payment methods.",
      icon: <Bitcoin className="w-10 h-10 text-yellow-400" />,
    },
    {
      title: "User-Friendly Design",
      description:
        "Our intuitive app makes finding and paying at cannabis stores a breeze.",
      icon: <Bitcoin className="w-10 h-10 text-blue-400 transform rotate-90" />,
    },
  ];

  return (
    <section
      id="security-benefits"
      className="bg-gradient-to-b from-gray-700 via-gray-600 to-gray-800 text-white py-16 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Why Choose Bitcoin Customers?
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          We prioritize your privacy and convenience:
        </p>

        {/* Benefits */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div className="mb-4">{benefit.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 text-green-300">
                {benefit.title}
              </h3>
              {/* Description */}
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityBenefits;
