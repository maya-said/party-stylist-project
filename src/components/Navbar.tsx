import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-8 py-4">

      <div className="flex items-center justify-between">

        <h1 className="text-2xl font-bold text-black">
          Party Stylist
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">

          <Link
            to="/"
            className="text-black hover:text-gray-500 transition"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-black hover:text-gray-500 transition"
          >
            Products
          </Link>

          <Link
            to="/contact"
            className="text-black hover:text-gray-500 transition"
          >
            Contact
          </Link>

        </div>

        {/* Mobile Burger Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {
        isMenuOpen && (
          <div className="flex flex-col gap-4 mt-4 md:hidden bg-white p-4 rounded-lg shadow-md">

            <Link
              to="/"
              className="hover:text-gray-500 transition"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="hover:text-gray-500 transition"
            >
              Products
            </Link>

            <Link
              to="/contact"
              className="hover:text-gray-500 transition"
            >
              Contact
            </Link>

          </div>
        )
      }

    </nav>
  );
};

export default Navbar;