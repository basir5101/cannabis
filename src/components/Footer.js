import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-900 text-gray-300 px-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        {/* App Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/logo2.png" // Replace with the actual logo path
            alt="App Logo"
            className="h-10 w-10"
          />
          <span className="text-lg font-semibold text-white">
            Bitcoin Customers
          </span>
        </div>

        {/* Footer Text */}
        <p className="text-center sm:text-right mt-4 sm:mt-0 text-sm">
          © 2024 Bitcoin Customers. All rights reserved.{" "}
          <br className="sm:hidden" />
          Must be 21+ to use this app.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
