import { Apple, Phone } from "lucide-react";
import React from "react";
// import { Apple, Android } from "lucide-react"; // Icons for app platforms

const DownloadApp = () => {
  return (
    <section
      id="download-app"
      className="bg-gradient-to-r  from-gray-800 via-gray-600 to-gray-800 text-white py-16 px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Content Section */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Elevate Your Shopping Experience?
          </h2>
          <p className="text-gray-400 text-lg mb-6">
            Join thousands who are finding cannabis stores and paying with
            Bitcoin easily and securely. Download Bitcoin Customers today!
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            {/* iOS Button */}
            <a
              href="#"
              className="flex items-center pr-6 py-3  text-white font-medium rounded-lg shadow-md transition-colors"
            >
              <img src="/images/apple.gif" alt="" />
            </a>
            {/* Android Button */}
            <a
              href="#"
              className="flex items-center  py-3  text-white font-medium rounded-lg shadow-md transition-colors"
            >
              <img src="/images/android.png" alt="" />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/images/show.png" // Replace with the actual promotional image path
            alt="App Promo"
            className="rounded-lg shadow-lg h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
