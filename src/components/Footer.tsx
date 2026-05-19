import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-14">

        {/* Brand */}
        <div>

          <h2 className="text-4xl font-bold">

            PartyStylist

          </h2>

          <p className="mt-6 text-gray-400 leading-8">

            Luxury event styling and premium decorations crafted for unforgettable celebrations and elegant moments.

          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-2xl font-semibold">

            Quick Links

          </h3>

          <div className="mt-6 flex flex-col gap-4 text-gray-400">

            <a
              href="/"
              className="transition duration-300 hover:text-white hover:translate-x-2"
            >
              Home
            </a>

            <a
              href="/products"
              className="transition duration-300 hover:text-white hover:translate-x-2"
            >
              Products
            </a>

            <a
              href="/contact"
              className="transition duration-300 hover:text-white hover:translate-x-2"
            >
              Contact
            </a>

          </div>

        </div>

        {/* Socials */}
        <div>

          <h3 className="text-2xl font-semibold">

            Follow Us

          </h3>

          <div className="flex gap-5 mt-6">

            <button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black">

              <FaInstagram />

            </button>

            <button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black">

              <FaFacebookF />

            </button>

            <button className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black">

              <FaTwitter />

            </button>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">

        © 2026 PartyStylist. All rights reserved.

      </div>

    </footer>
  );
};

export default Footer;