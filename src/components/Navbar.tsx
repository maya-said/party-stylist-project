import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-8 py-4">

      <div className="flex items-center justify-between">

        <h1 className="text-2xl font-bold text-black">
          Party Stylist
        </h1>

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

        <button className="md:hidden text-3xl">
          ☰
        </button>

      </div>

    </nav>
  );
};

export default Navbar;