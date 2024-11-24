import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b-2 border-gray-600 shadow-lg absolute top-0 z-10 w-full">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/images/logo2.png" alt="Logo" width={40} height={40} />
          <span className="text-2xl font-bold text-white">
            Bitcoin Customers
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
