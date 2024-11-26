import { useState } from "react";
import { Link } from "react-scroll"; // For smooth scrolling to sections

const routes = [
  { label: "What We Offer", link: "offer" },
  { label: "Features", link: "features" },
  { label: "How It Works", link: "how-it-works" },
  { label: "Testimonials", link: "testimonials" },
  { label: "Security Benefits", link: "security-benefits" },
  { label: "Download App", link: "download-app" },
  { label: "FAQ", link: "faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`bg-gradient-to-tr from-green-900 via-green-700 to-green-800 shadow-md  sticky top-0 w-full z-50`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <img src="/images/logo2.png" className="h-12" alt="" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {routes.map((route) => (
            <Link
              key={route.link}
              to={route.link}
              smooth={true}
              duration={500}
              className="text-white hover:text-blue-200 font-semibold cursor-pointer"
            >
              {route.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:hidden bg-gradient-to-r from-green-900 via-green-700 to-green-800 text-white font-semibold py-4 transition-all duration-500 ease-in-out`}
      >
        {routes.map((route) => (
          <Link
            key={route.link}
            to={route.link}
            smooth={true}
            duration={500}
            className="block px-4 py-2 cursor-pointer"
          >
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
