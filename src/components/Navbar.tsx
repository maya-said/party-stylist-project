import { useState } from "react";
import { NavLink } from "react-router-dom";

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

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-black font-bold"
                : "text-gray-500 hover:text-black transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-black font-bold"
                : "text-gray-500 hover:text-black transition"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-black font-bold"
                : "text-gray-500 hover:text-black transition"
            }
          >
            Contact
          </NavLink>

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

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold"
                  : "text-gray-500 hover:text-black transition"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold"
                  : "text-gray-500 hover:text-black transition"
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-bold"
                  : "text-gray-500 hover:text-black transition"
              }
            >
              Contact
            </NavLink>

          </div>
        )
      }

    </nav>
  );
};

export default Navbar;