import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react"; // Import social icons

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
        {/* Logo and Description */}
        <div className="flex flex-col space-y-4 md:w-1/3">
          <h2 className="text-2xl font-bold">Bitcoin Customers</h2>
          <p className="text-sm pr-10">
            Discover a seamless way to shop at cannabis stores that accept
            Bitcoin. Privacy and convenience are our top priorities.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-4 md:w-1/3 mt-6 md:mt-0">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <a href="#features" className="text-white hover:text-secondary">
            Features
          </a>
          <a href="#offer" className="text-white hover:text-secondary">
            What We Offer
          </a>
          <a href="#download" className="text-white hover:text-secondary">
            Download App
          </a>
        </div>

        {/* Social Media & Contact */}
        <div className="flex flex-col space-y-4 md:w-1/3 mt-6 md:mt-0">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-secondary"
            >
              <Facebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-secondary"
            >
              <Twitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-secondary"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-6 mt-8 text-center border-t border-gray-600 pt-4">
        <p className="text-sm">
          &copy; 2024 Bitcoin Customers. All rights reserved. Must be 21+ to use
          this app.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
