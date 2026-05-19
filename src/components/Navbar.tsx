import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm border-b border-white/20">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold tracking-wide"
        >

          PartyStylist

        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative text-lg font-medium transition duration-300 hover:text-black ${
                isActive
                  ? "text-black"
                  : "text-gray-500"
              }`
            }
          >

            {({ isActive }) => (
              <>
                Home

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-black transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </>
            )}

          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `relative text-lg font-medium transition duration-300 hover:text-black ${
                isActive
                  ? "text-black"
                  : "text-gray-500"
              }`
            }
          >

            {({ isActive }) => (
              <>
                Products

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-black transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </>
            )}

          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative text-lg font-medium transition duration-300 hover:text-black ${
                isActive
                  ? "text-black"
                  : "text-gray-500"
              }`
            }
          >

            {({ isActive }) => (
              <>
                Contact

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-black transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </>
            )}

          </NavLink>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl"
        >

          ☰

        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="px-6 pb-6 flex flex-col gap-6 bg-white/90 backdrop-blur-xl">

          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-gray-700 transition duration-300 hover:text-black"
          >

            Home

          </NavLink>

          <NavLink
            to="/products"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-gray-700 transition duration-300 hover:text-black"
          >

            Products

          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-gray-700 transition duration-300 hover:text-black"
          >

            Contact

          </NavLink>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;