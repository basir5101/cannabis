import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/images/logo2.png" alt="Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-white">
            Bitcoin Customers
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#offer" className="text-white hover:text-secondary">
            What We Offer
          </a>
          <a href="#features" className="text-white hover:text-secondary">
            Features
          </a>
          <a href="#download" className="text-white hover:text-secondary">
            Download
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary">
          <a
            href="#features"
            className="block px-6 py-2 text-white hover:bg-secondary"
          >
            Features
          </a>
          <a
            href="#offer"
            className="block px-6 py-2 text-white hover:bg-secondary"
          >
            What We Offer
          </a>
          <a
            href="#download"
            className="block px-6 py-2 text-white hover:bg-secondary"
          >
            Download
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
